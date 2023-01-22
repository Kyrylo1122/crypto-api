import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Layout from "./Components/Layout";
import MainTag from "./Components/Main";
import CoinInfo from "./Components/CoinInfo";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="main" element={<MainTag />} />

          <Route path="/:id" element={<CoinInfo />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
