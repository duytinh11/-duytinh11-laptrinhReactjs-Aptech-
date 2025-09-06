import { Link, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Cart from "./pages/Cart";
function App() {

  return (
    <div className="App">
        <main>
          <div className="container">
            <Routes>
              <Route path="/" Component={Home} />
              <Route path="/Category" Component={Category} />
              <Route path="/Cart" Component={Cart} />
            </Routes>
          </div>

        </main>
    </div>
  );
}
export default App;
