import "./App.css";
import { Header } from "./components/Header/Header";
import { Categories } from "./components/Categories/Categories";
import { Search } from "./components/Search/Search";

function App() {

  return (
    <>
      <Header/>
      <Search/>
      <Categories/>
    </>
  );
}

export default App;
