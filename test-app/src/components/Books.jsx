import React, { useState } from "react";
import './book.css'
import Counter from "./counter";

const Books = (props) => {
    const [counter, setCounter] = useState(0);
    const [title, setTitle] = useState(props.title)
    // const clickHandler = () => {
    //     console.log("Clicked")
    // }

    const titleChangeHandler = () => {
        setTitle("Men Insonman");
    }
    const titleResetHandler = () => {
        setTitle(props.title);
    }

    return (
        <div className="book">
            <img className="book_img" src={props.img} alt="Nicolas Cage" />
            <div className="book_desc">
                <h2>{title}</h2>
                <p>{props.author}</p> <br/>
                <button onClick={titleChangeHandler}>Change Title</button><br/>
                <button onClick={titleResetHandler}>Reset Title</button>
                <Counter/>
            </div>
        </div>
    )
}

export default Books;