import Book from './Book'

const ListBooks = ({
  books,
  mainBooks,
  onIsBookUpdated,
  onNewShelfValue,
  onBookID,
  bookID,
  newShelfValue
}) => {
  return (
    <ol className='books-grid'>
      {
        books.length
        ? books.map(book =>
          <Book key={book.id}
            book={book}
            mainBooks={mainBooks}
            onIsBookUpdated={onIsBookUpdated}
            onNewShelfValue={onNewShelfValue}
            onBookID={onBookID}
            bookID={bookID}
            newShelfValue={newShelfValue}
          />
        )
        : ""
      }
    </ol>
  )
}
export default ListBooks