import React from "react";
import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import HeaderLayout from "./layout/HeaderLayout";
import SiderBarLayout from "./layout/SiderBarLayout";
import ChooseProduct from "./pages/ChooseProduct";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import Order from "./pages/Order";
import Payment from "./pages/Payment";
import Policy from "./pages/Policy";
import Profile from "./pages/Profile";
import ReceiptCard from "./pages/ReceiptCard";

const App = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/">
                <Route element={<DefaultLayout />}>
                    <Route index element={<Home />} />
                    <Route path="detail" element={<Detail />} />
                    <Route path="policy" element={<Policy />} />
                </Route>
                <Route element={<SiderBarLayout />}>
                    <Route path="profile" element={<Profile />} />
                    <Route path="payment" element={<Payment />} />
                </Route>
                <Route element={<HeaderLayout />}>
                    <Route path="choose-product" element={<ChooseProduct />} />
                </Route>
                <Route path="order" element={<Order />} />
                <Route path="receipt-card" element={<ReceiptCard />} />
            </Route>
        )
    );

    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    );
};

export default App;
