import { Link } from 'react-router-dom';
import AddShelf from '../components/AddShelf';
import Header from './../components/Header'

const MainPage = ({
  shelvesInfo,
  mainBooks,
  onIsBookUpdated,
  onNewShelfValue,
  onBookID,
  bookID,
  newShelfValue
}) => {
  return (
    <div className='list-books'>
      <Header />
      {
        shelvesInfo.map(shelf =>
          <AddShelf key={shelf.shelfLookUpName}
            shelfInfo={shelf}
            mainBooks={mainBooks}
            onIsBookUpdated={onIsBookUpdated}
            onNewShelfValue={onNewShelfValue}
            onBookID={onBookID}
            bookID={bookID}
            newShelfValue={newShelfValue}
          />
        )
      }
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  )
}
export default MainPage