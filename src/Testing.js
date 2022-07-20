import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as api from './utils/BooksAPI'

const Testing = () => {
  const [isBooksUpdated, setIsBooksUpdated] = useState(false)
  const [newShelfValue, setNewShelfValue] = useState('')
  const [bookID, setBookID] = useState('')
  const [books, setBooks] = useState([])

  useEffect(() => {
    const getAllBooks = async () => {
      const allBooks = await api.getAll()
      setBooks(allBooks)
      setIsBooksUpdated(false)
      console.log(books);
    }
    getAllBooks()
  },[isBooksUpdated])

  useEffect(() => {
    const updateShelf = async () => {
      const newBooks = await api.update(bookID, newShelfValue)
      setIsBooksUpdated(true)
    }
    updateShelf()
  }, [newShelfValue, bookID])


  const handleChange = (e) => {
    const { id: ID } = e.target
    const { value: shelf } = e.target
    setNewShelfValue(shelf)
    setBookID(ID)
  }

  return (
    <main>
      <ol>
        {
          books.map(book =>
            <div className="book">
              <li key={book.id}><b><i>{book.title}</i></b> - {book.shelf}</li>
              <div>
                <select onChange={handleChange} key={book.id} id={book.id}>
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
        }
      </ol>
      <Link
        to="/search"
      >Search Book</Link>
    </main>
  )

}

export default Testing