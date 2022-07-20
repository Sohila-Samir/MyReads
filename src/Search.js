import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import * as api from './utils/BooksAPI'

const Search = () => {
  const [queryResult, setQueryResult] = useState([])
  const [query, setQuery] = useState('')

  // useEffect(() => {
  //   const searchBook = async () => {
  //     const searchResult = await api.search(query, 5)
  //     setQueryResult(searchResult)
  //   }
  //   searchBook()
  //   console.log(queryResult);
  // }, [query])


  const handleChange = (e) => {
    setQuery(e.target.value)
  }

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
          <ol className="books-grid"></ol>
        </div>
      </div>

      <ol>
        {
          queryResult && !queryResult.error && queryResult.length
          ? queryResult.map(book =>
            <div className="book">
              <li key={book.id}><b><i>{book.title}</i></b> - {book.shelf}</li>
              <div>
                <select key={book.id} id={book.id} defaultValue="none">
                  <option value="none" disabled>
                    Move to...
                  </option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
              <hr></hr>
              <br></br>
            </div>
          )
          : false
        }
      </ol>
    </div>
  )
}
export default Search