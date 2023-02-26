import "./App.css";
import Login from "./components/Login/Login";
import { Routes, Route } from "react-router-dom";
import PhonesPage from "./pages/phone/PhonesPage";
import TabletsPage from "./pages/tablets/TabletsPage";
import WatchesPage from "./pages/watches/WatchesPage";
import LaptopsPage from "./pages/laptops/LaptopsPage";
import ContactsPage from "./pages/contacts/ContactsPage";
import Footer from "./components/footer/Footer";
import HomePage from "./pages/home/HomePage";
import AboutPhone from "./pages/aboutPages/aboutPhone/AboutPhone";
import AboutTablet from "./pages/aboutPages/aboutTablet/AboutTablet";
import AdminPage from "./components/admin/AdminPage";
import { useEffect, useState } from "react";
import AboutWatches from "./pages/aboutPages/about-watches/AboutWatches";
import AboutLaptop from "./pages/aboutPages/about-laptop/AboutLaptop";
import Basket from "./components/basket/Basket";
import Header from "./components/header/Header";
import Registration from "./components/registration/Registration";

function App() {
  //
  const [phones, setPhones] = useState([]);
  const [tablets, setTablets] = useState([]);
  const [watches, setWatches] = useState([]);
  const [laptops, setLaptops] = useState([]);
  const currentUser = JSON.parse(localStorage.getItem("user")) || null;
  const [user, setUser] = useState(currentUser ? currentUser : null);

  
  // ------------ Phone ------------- //

  useEffect(() => {
    fetch("http://localhost:5555/phones")
      .then((response) => response.json())
      .then((data) => setPhones(data));
  }, []);

  // ------------ Tablets ------------- //

  useEffect(() => {
    fetch("http://localhost:5555/tablets")
      .then((response) => response.json())
      .then((data) => setTablets(data));
  }, []);

  // ------------ Watches ------------- //

  useEffect(() => {
    fetch("http://localhost:5555/watches")
      .then((response) => response.json())
      .then((data) => setWatches(data));
  }, []);

  // ------------ Laptops ------------- //

  useEffect(() => {
    fetch("http://localhost:5555/laptops")
      .then((response) => response.json())
      .then((data) => setLaptops(data));
  }, []);

  const [basket, setBasket] = useState(
    JSON.parse(localStorage.getItem("basket")) || []
  );

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);

  return (
    <div className="App">
      <Header basket={basket} user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/PhonesPage"
          element={
            <PhonesPage phones={phones} basket={basket} setBasket={setBasket} />
          }
        />
        <Route
          path="/TabletsPage"
          element={
            <TabletsPage
              tablets={tablets}
              basket={basket}
              setBasket={setBasket}
            />
          }
        />
        <Route
          path="/WatchesPage"
          element={
            <WatchesPage
              watches={watches}
              basket={basket}
              setBasket={setBasket}
            />
          }
        />
        <Route
          path="/LaptopsPage"
          element={
            <LaptopsPage
              laptops={laptops}
              basket={basket}
              setBasket={setBasket}
            />
          }
        />
        <Route path="/ContactsPage" element={<ContactsPage />} />
        <Route
          path="/AboutPhone/:id"
          element={
            <AboutPhone phones={phones} basket={basket} setBasket={setBasket} />
          }
        />
        <Route
          path="/AboutTablet/:id"
          element={<AboutTablet tablets={tablets} />}
        />
        <Route
          path="/AboutWatches/:id"
          element={<AboutWatches watches={watches} />}
        />
        <Route
          path="/AboutLaptop/:id"
          element={<AboutLaptop laptops={laptops} />}
        />
        <Route
          path="/AdminPage"
          element={
            <AdminPage
              phones={phones}
              setPhones={setPhones}
              tablets={tablets}
              setTablets={setTablets}
              watches={watches}
              setWatches={setWatches}
              laptops={laptops}
              setLaptops={setLaptops}
            />
          }
        />
        <Route
          path="/basket"
          element={<Basket basket={basket} setBasket={setBasket} />}
        />
        <Route
          path="/Login"
          element={<Login setUser={setUser} />}
        />
        <Route path="/Registration" element={<Registration />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
