import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const title = "Dog Man: Twenty Thousand Fleas Under the Sea";
const image = "./images/book-1.jpg";
const author = " Dav Pilkey";
const BookList = () => {
  return (
    <section className="book-list">
      <Book image={image} title={title} author={author} />
      <Book image={image} title={title} author={author} />
      <Book image={image} title={title} author={author} />
    </section>
  );
};

const Book = (props) => {
  return (
    <article className="book">
      <>
        <img className="book-img" src={props.image} alt={props.title} />
        <h2 className="book-title">{props.title}</h2>
        <h4
          style={{
            color: "#fff",
            marginTop: "1rem",
            backgroundColor: "blueviolet",
            borderRadius: "5px",
          }}
        >
          {props.author}
        </h4>
      </>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
