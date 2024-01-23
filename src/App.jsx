import Component from "./components/Component";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import MyRouter from "./router/MyRouter";

function App() {
  return (
    <div>
      <Header />
      <Component name={"Salam"} />
      <MyRouter />
    </div>
  );
}

export default App;
