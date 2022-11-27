import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Add = () => {
    const [book, setBook] = useState({
        title: "",
        desc: "",
        price: null,
        cover: "",
    });
    const [error, setError] = useState(false)

    const navigate = useNavigate();

    const handleChange = (e) => {
        setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8800/books", book);
            navigate("/");
        } catch (err) {
            console.log(err);
            setError(true)
        }
    };

    return (
        <div className="form flex flex-col gap-4 mx-10 my-10">
            <h1 className="text-xl font-bold">Add New Book</h1>
            <input className="max-w-xs p-3 border-2 border-grey-300 rounded-md"
                type="text"
                placeholder="Book title"
                name="title"
                onChange={handleChange}
            />
            <textarea className=" max-w-xs p-3 border-2 border-grey-300 rounded-md"
                rows={5}
                type="text"
                placeholder="Book desc"
                name="desc"
                onChange={handleChange}
            />
            <input className="max-w-xs p-3 border-2 border-grey-300 rounded-md"
                type="number"
                placeholder="Book price"
                name="price"
                onChange={handleChange}
            />
            <input className="max-w-xs p-3 border-2 border-grey-300 rounded-md"
                type="text"
                placeholder="Book cover"
                name="cover"
                onChange={handleChange}
            />
            <button className=" max-w-xs p-3 font-bold cursor-pointer bg-blue-500 text-white rounded-md"
                onClick={handleClick}>Add</button>
            {error && "Something went wrong!"}
            <Link className="font-bold" to="/">See all books</Link>
        </div>
    );
};

export default Add;