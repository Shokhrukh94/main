import "./App.css";
import Books from "./components/Books"
import ChildrenProp from "./components/childrenProp";
import AddNewBook from "./components/AddNewBook"
import UseStateAdvanced from "./components/useStateAdvanced/useStateAdvanced";
import UseStateObject from "./components/useStateAdvanced/useStateObject";

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
      <UseStateAdvanced />
      <UseStateObject />
     </div>
  );
}

export default App;