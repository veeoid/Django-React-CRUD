import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [releaseYear, setReleaseYear] = useState(0);
  const [newTitle, setNewTitle] = useState("");
  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/books/");
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.error(error);
    }
  };

  const addBook = async () => {
    const bookData = {
      title: title,
      release_year: releaseYear,
    };
    try {
      const response = await fetch("http://127.0.0.1:8000/api/books/create/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookData),
      });
      const data = await response.json();
      setBooks((prev) => [...prev, data]); // Because state is immutable, another way to update state is to use the previous state and append the new data to it.
    } catch (error) {
      console.error(error);
    }
  };

  const updateTitle = async (pk, release_year) => {
    const bookData = {
      title: newTitle,
      release_year,
    };
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/books/${pk}/`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookData),
      });
      const data = await response.json();
      setBooks((prev) =>
        prev.map((book) => {
          if (book.id === pk) {
            return data;
          } else {
            return book;
          }
        })
      ); // Because state is immutable, another way to update state is to use the previous state and append the new data to it.
    } catch (error) {
      console.error(error);
    }
  };

  const deleteBook = async (pk) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/books/${pk}/`, {
        method: "DELETE",
      });
      setBooks((prev) => prev.filter((book) => book.id !== pk));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div id="header-container">
        <h1>📚 Book Website</h1>
      </div>
      <div>
        <input
          type="text"
          placeholder="Book Title..."
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Release Year..."
          onChange={(e) => setReleaseYear(e.target.value)}
        />
        <button onClick={addBook}>➕ Add Book</button>
      </div>
      {books.map((book) => (
        <div className="book-container" key={book.id}>
          <p>
            <strong>📖 Title:</strong> {book.title}
          </p>
          <p>
            <strong>📅 Release Year:</strong> {book.release_year}
          </p>
          <input
            type="text"
            placeholder="New Title..."
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <button onClick={() => updateTitle(book.id, book.release_year)}>
            ✏️ Change Title
          </button>
          <button className="delete-btn" onClick={() => deleteBook(book.id)}>
            ❌ Delete
          </button>
        </div>
      ))}
    </>
  );
}

export default App;
