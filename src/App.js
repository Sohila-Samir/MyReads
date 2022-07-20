// hooks
import { useEffect, useState } from "react";
import { Routes, Route } from 'react-router-dom'

// utils
import { getAll } from './utils/BooksAPI'

// css files
import "./App.css";

// pages
import SearchPage from './pages/SearchPage'
import MainPage from './pages/MainPage'


function App() {
  // states
  const [isBooksUpdated, setIsBooksUpdated] = useState(false)
  const [newShelfValue, setNewShelfValue] = useState('')
  const [bookID, setBookID] = useState('')
  const [books, setBooks] = useState([])
  // ---------------------------------------------END STATES--------------------------------------

  // effects
  useEffect(() => {
    const getAllBooks = async () => {
      const allBooks = await getAll()
      if (allBooks) {
        setBooks(allBooks)
        setIsBooksUpdated(false)
      }
    }
    getAllBooks()
  },[isBooksUpdated])
  // ---------------------------------------------END EFFECTS--------------------------------------

  // update states functions
  const onIsBookUpdated = (newState) => {
    setIsBooksUpdated(newState)
  }

  const onNewShelfValue = (shelf) => {
    setNewShelfValue(shelf)
  }

  const onBookID = (ID) => {
    setBookID(ID)
  }
  // -------------------------------------END STATES FUNCTIONS--------------------------------------

  // helper variables
    const shelves = [
    {
      shelfLookUpName: 'currentlyReading',
      shelfHeaderName: 'Currently Reading'
    },
    {
      shelfLookUpName: 'wantToRead',
      shelfHeaderName: 'Want to Read'
    },
    {
      shelfLookUpName: 'read',
      shelfHeaderName: 'Read'
    },
  ]
  // ---------------------------------------------END VARIABLES--------------------------------------

  return (
    <div className="app">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <MainPage
              shelvesInfo={shelves}
              mainBooks={books}
              onIsBookUpdated={onIsBookUpdated}
              onNewShelfValue={onNewShelfValue}
              onBookID={onBookID}
              bookID={bookID}
              newShelfValue={newShelfValue}
            />
        }
        />
        <Route
          exact
          path="/search"
          element={
            <SearchPage
              mainBooks={books}
              onIsBookUpdated={onIsBookUpdated}
              onNewShelfValue={onNewShelfValue}
              onBookID={onBookID}
              bookID={bookID}
              newShelfValue={newShelfValue}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
