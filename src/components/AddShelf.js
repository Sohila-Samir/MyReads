import ListBooks from './ListBooks'

const AddShelf = ({
  shelfInfo,
  mainBooks,
  onIsBookUpdated,
  onNewShelfValue,
  onBookID,
  bookID,
  newShelfValue
}) => {
  // helper variables
  const shelfBooks = mainBooks.filter(book => book.shelf === shelfInfo.shelfLookUpName)
  // ---------------------------------------------END VARIABLES--------------------------------------

  return (
    <div className='bookshelf'>
      <h2 className="bookshelf-title">{shelfInfo.shelfHeaderName}</h2>
        <div className="bookshelf-books">
          {
            shelfBooks.length
            ? <ListBooks
              books={shelfBooks}
              mainBooks={mainBooks}
              onIsBookUpdated={onIsBookUpdated}
              onNewShelfValue={onNewShelfValue}
              onBookID={onBookID}
              bookID={bookID}
              newShelfValue={newShelfValue}
            />
            : ""
          }
        </div>
    </div>
  )
}

export default AddShelf