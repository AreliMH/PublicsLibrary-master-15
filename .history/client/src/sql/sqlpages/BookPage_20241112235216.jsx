// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// const BookPage = () => {
//   const [bookpage, setBooks] = useState([]);

//   useEffect(() => {
//     const fetchAllBook = async () => {
//       try {
//         // Ensure this endpoint matches your backend
//         const res = await axios.get("http://localhost:8800/books");
//         setBooks(res.data);
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     fetchAllBook();
//   }, []);

//   return (
//     <div>
//       <h1>Publics Library Shop</h1>
//       <div className="books">
//         {books.length === 0 ? (
//           <p>No books available</p>
//         ) : (
//           books.map((bookItem) => (
//             <div key={bookItem.book_id} className="book">
//               <h2>{bookItem.title}</h2>
//               <h3>{bookItem.author}</h3>
//               <p>Condition: {bookItem.book_condition}</p>
//               <p>Owner ID: {bookItem.owner_id}</p>
//             </div>
//           ))
//         )}
//       </div>

//       <button>
//         <Link to="/add" style={{ color: "inherit", textDecoration: "none" }}>
//           Add New Book
//         </Link>
//       </button>
//     </div>
//   );
// };

// // export default BookPage;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// const BookPage = () => {
//   // Rename bookpage to books to match the usage below
//   const [books, setBooks] = useState([]);

//   useEffect(() => {
//     const fetchAllBooks = async () => {
//       try {
//         // Ensure this endpoint matches your backend
//         const res = await axios.get("http://localhost:8800/books");
//         setBooks(res.data);
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     fetchAllBooks();
//   }, []);

//   return (
//     <div>
//       <h1>Publics Library Shop</h1>
//       <div className="books">
//         {books.length === 0 ? (
//           <p>No books available</p>
//         ) : (
//           books.map((bookItem) => (
//             <div key={bookItem.book_id} className="book">
//               <h2>{bookItem.title}</h2>
//               <h3>{bookItem.author}</h3>
//               <p>Condition: {bookItem.book_condition}</p>
//               <p>Owner ID: {bookItem.owner_id}</p>
//             </div>
//           ))
//         )}
//       </div>

//       <button>
//         <Link to="/add" style={{ color: "inherit", textDecoration: "none" }}>
//           Add New Book
//         </Link>
//       </button>
//     </div>
//   );
// };

// export default BookPage;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const BookPage = () => {
  // State variable for storing books
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        // Fetch books from the backend
        const res = await axios.get("http://localhost:8800/books");
        setBooks(res.data); // Update state with the fetched data
      } catch (err) {
        console.log(err); // Log any error that occurs during fetch
      }
    };
    fetchAllBooks(); // Call the fetch function
  }, []);

  return (
    <div>
      <h1>Publics Library Shop</h1>
      <div className="books">
        {books.length === 0 ? (
          <p>No books available</p> // Display message if no books
        ) : (
          books.map((bookItem) => (
            <div key={bookItem.book_id} className="book">
              <h2>{bookItem.title}</h2>
              <h3>{bookItem.author}</h3>
              <p>Condition: {bookItem.book_condition}</p>
              <p>Owner ID: {bookItem.owner_id}</p>
            </div>
          ))
        )}
      </div>

      <button>
        <Link to="/add" style={{ color: "inherit", textDecoration: "none" }}>
          Add New Book
        </Link>
      </button>
    </div>
  );
};

export default BookPage;