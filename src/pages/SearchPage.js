import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { search } from "../utils/BooksAPI"
import ListBooks from "../components/ListBooks"

const SearchPage = ({
  mainBooks,
  onIsBookUpdated,
  onNewShelfValue,
  onBookID,
  bookID,
  newShelfValue
}) => {
  // states
  const [queryResult, setQueryResult] = useState([])
  const [query, setQuery] = useState('')
  // ---------------------------------------------END STATES--------------------------------------

  // effects
  useEffect(() => {
    if (query) {
      setQueryResult([])
      const queryBooks = async () => {
        const queriedData = await search(query, 20)
        setQueryResult(queriedData)
      }
      queryBooks()
    }
    setQueryResult([])
  }, [query])
  // ---------------------------------------------END EFFECTS--------------------------------------

  // event handlers
  const handleChange = (e) => {
    setQuery(e.target.value)
  }
  // -----------------------------------------END EVENT HANDLERS--------------------------------------

  // helper variables
  const showQueriedResult = queryResult.length ? queryResult : ""
  // ---------------------------------------------END VARIABLES--------------------------------------

  return(
    <div>
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title, author, or ISBN"
              onKeyUp={handleChange}
            />
          </div>
        </div>

        <div className="search-books-results">
          {
            showQueriedResult
            ? <ListBooks
                books={queryResult}
                mainBooks={mainBooks}
                onIsBookUpdated={onIsBookUpdated}
                onNewShelfValue={onNewShelfValue}
                onBookID={onBookID}
                bookID={bookID}
                newShelfValue={newShelfValue}
              />
            : query
            ? <h2 className="no-books-msg">No Books Found</h2>
            : ""
          }
        </div>
      </div>
    </div>
  )
}
export default SearchPage