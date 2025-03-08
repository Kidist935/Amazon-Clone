import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  redirect,
} from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import Auth from "./Pages/Auth/Auth";
import Payment from "./Pages/Payment/Payment";
import Orders from "./Pages/Orders/Orders";
import Cart from "./Pages/Cart/Cart";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import Result from "./Pages/Result/Result";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";

const stripePromise = loadStripe(
  "pk_test_51Qxhzc06V7sjtmR1D5EEaSOAZtbuhloduBiYlrkxoSKfelffNZTmrB9HPNywLUrxa3VYchrdWWaqARXKdsBZuy2e00WmtHHLi7"
);

function Routeing() {
  return (
    <Router basename="/Amazon-Clone">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/payments"
          element={
            <ProtectedRoute
              msg={"you must login to pay"}
              redirect={"/payments"}
            >
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            </ProtectedRoute>
          }
        />
        <Route
          path="/orders"
          element={
            <ProtectedRoute
              msg={"you must log in to access orders"}
              redirect={"/orders"}
            >
              <Orders />
            </ProtectedRoute>
          }
        />
        {/* categoryName is a dynamic parameter extracted using useParams */}

        <Route path="/category/:categoryName" element={<Result />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default Routeing;
