import { useEffect } from "react"
import { update } from "../utils/BooksAPI"

const BookOptions = ({
  book,
  mainBooks,
  onIsBookUpdated,
  onNewShelfValue,
  onBookID,
  bookIDState,
  newShelfValue
}) => {
  // effects
  useEffect(() => {
    const updateShelf = async () => {
      await update(bookIDState, newShelfValue)
      onIsBookUpdated(true)
    }
    updateShelf()
  }, [newShelfValue, bookIDState])
  // ------------------------------------------END EFFECTS------------------------------------------

  // event handlers
  const handleChange = (e) => {
    const { id: ID } = e.target
    const { value: shelf } = e.target
    onNewShelfValue(shelf)
    onBookID(ID)
  }
  // -----------------------------------------END EVENT HANDLERS--------------------------------------

  // helper functions
  const getBookShelf = () => {
    const foundBook = mainBooks.filter(mainBook => mainBook.id === book.id)
    if (foundBook && foundBook[0]) {
      return foundBook[0].shelf
    }
    return "none"
  }
  // ---------------------------------------------END FUNCTIONS--------------------------------------

  return (
    <div className="book-shelf-changer">
      <select onChange={handleChange} id={book.id} defaultValue={getBookShelf()} >
        <option value="none" disabled>
          Move to...
        </option>
        <option value="currentlyReading" >
          Currently Reading
        </option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  )
}
export default BookOptions