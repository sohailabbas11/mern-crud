import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchAllBooks = async () => {
            try {
                const res = await axios.get("http://localhost:8800/books");
                setBooks(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchAllBooks();
    }, []);

    console.log(books);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8800/books/${id}`);
            window.location.reload()
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <h1>Lama Book Shop</h1>
            <div className="books flex">
                {books.map((book) => (
                    <div key={book.id} className="book flex-1 flex flex-col items-center gap-3">
                        <img src={book.cover} alt="" />
                        <h2>{book.title}</h2>
                        <p>{book.desc}</p>
                        <span>${book.price}</span>
                        <button className="delete border-2 border-slate-400 rounded-md" onClick={() => handleDelete(book.id)}>Delete</button>
                        <button className="update delete border-2 border-slate-400 rounded-md">
                            <Link
                                to={`/update/${book.id}`}
                                style={{ color: "inherit", textDecoration: "none" }}
                            >
                                Update
                            </Link>
                        </button>
                    </div>
                ))}
            </div>

            <button className="addHome p-3 mt-5 cursor-pointer border-none bg-teal-300 font-bold">
                <Link to="/add" style={{ color: "inherit", textDecoration: "none" }}>
                    Add new book
                </Link>
            </button>
        </div>
    );
};

export default Books;