import "./App.css";
import Books from "./components/Books"

function App() {
  const firstBook = [
    {
      img:"https://picsum.photos/200/300",
      title:"I'm Human",
      author:"Nicolas Cage",
    },
    {
      img:"https://picsum.photos/200/301",
      title:"I'm Human",
      author:"Nicolas Cage",
    },
    {
      img:"https://picsum.photos/200/302",
      title:"I'm Human",
      author:"Nicolas Cage",
    },
    {
      img:"https://picsum.photos/200/303",
      title:"I'm Human",
      author:"Nicolas Cage",
    },
    {
      img:"https://picsum.photos/200/304",
      title:"I'm Human",
      author:"Nicolas Cage",
    },
  ];

  return (
    <div className="container">
      <div className="book_wrapper">
        {firstBook.map((books, index) => {
          return (
             <Books 
             img={books.img}
             title={books.title}
             author={books.author}
             key={index}
              />
                );
                })}
      </div>
     
   
    </div>
  );
}

export default App;