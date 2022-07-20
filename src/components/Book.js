import BookOptions from "./BookOptions"

const Book = ({
  book,
  mainBooks,
  onIsBookUpdated,
  onNewShelfValue,
  onBookID,
  bookID,
  newShelfValue
}) => {
  return (
    <li>
      <div className='book'>
        <div className='book-top'>
          <div className='book-cover'
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book?.imageLinks?.thumbnail})`,
            }}
          >
          </div>
          <BookOptions
            book={book}
            mainBooks={mainBooks}
            onIsBookUpdated={onIsBookUpdated}
            onNewShelfValue={onNewShelfValue}
            onBookID={onBookID}
            bookIDState={bookID}
            newShelfValue={newShelfValue}
          />
        </div>
          <div className="book-title">{book?.title}</div>
          <div className="book-authors">
            {
              book?.authors?.map(author => author)
            }
          </div>
      </div>
    </li>
  )
}
export default Book