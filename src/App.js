import "./App.css";
import { Header } from "./components/Header/Header";
import { Categories } from "./components/Categories/Categories";
import { Search } from "./components/Search/Search";
import { Header2 } from "./components/Header/Header2";

function App() {

  return (
    <>
      {/* <Header/> */}
      <Header2/>
      <Search/>
      <Categories/>
    </>
  );
}

export default App;
