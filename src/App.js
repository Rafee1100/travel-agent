import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home/Home/Home";
import Booking from "./components/BookingPage/Booking/Booking";
import Review from "./components/BookingPage/Review/Review";
import OrderList from "./components/Admin/OrderList/OrderList";
import AddService from "./components/Admin/AddService/AddService";
import Login from "./components/Login/Login";
import { createContext, useState } from "react";
import MakeAdmin from "./components/Admin/MakeAdmin/MakeAdmin";
import PrivateRoute from "./components/shared/PrivateRoute/PrivateRoute";
import ManageProduct from "./components/Admin/ManageService/ManageProduct/ManageProduct";

export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/home">
            <Home />
          </Route>

          <Route path="/dashboard/review">
            <Review />
          </Route>
          <Route exact path="/dashboard/book">
            <Booking />
          </Route>
          <PrivateRoute path="/dashboard/book/:id">
            <Booking />
          </PrivateRoute>


          <PrivateRoute exact path="/dashboard">
            <OrderList />
          </PrivateRoute>
          <Route path="/dashboard/orderList">
            <OrderList />
          </Route>
          <Route path="/dashboard/addService">
            <AddService />
          </Route>
          <Route path="/dashboard/makeAdmin">
            <MakeAdmin />
          </Route>
          <Route path="/dashboard/manage">
            <ManageProduct />
          </Route>

          <PrivateRoute path="/admin">
             <OrderList />
          </PrivateRoute>

          <Route path="/login">
            <Login />
          </Route>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
