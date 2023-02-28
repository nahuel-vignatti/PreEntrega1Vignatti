import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemsListContainer";

function App() {
  return (
    <div>
      <NavBar /> 
      <ItemListContainer props="Aca van a estar los productos posiblemente"/>  
    </div>
  );
}

export default App;
