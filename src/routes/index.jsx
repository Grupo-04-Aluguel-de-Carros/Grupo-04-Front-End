import { Routes, Route } from "react-router-dom";

import { DefaultLayout } from "../layouts/DefaultLayout";

import { Home } from "../pages/Home";
import { SignIn } from "../pages/SignIn";
import {SignUp} from "../pages/SignUp";
import { ProductDetail } from "../pages/ProductDetail";
import Gallery from "../pages/Gallery";

export function RoutesApp(){
    return(
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Home />}></Route>
                <Route path="/signin" element={<SignIn />}></Route>
                <Route path="/signup" element={<SignUp />}></Route>
                <Route path="produto/:id_produto" element={<ProductDetail />}></Route>
                <Route path="/gallery" element={<Gallery />}></Route>

            </Route>
        </Routes>
    )
}