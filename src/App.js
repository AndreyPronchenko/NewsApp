import React from "react";
import NavBar2 from "./components/NavBar2";
import NavBar1 from "./components/NavBar1";
import News from "./components/News";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
 
function App() {

    return (
        <>
            <div className="App">
                <BrowserRouter>
                    <NavBar1 />
                    <NavBar2 />
                    <div className="container">
                        <div className="row">
                            <div className="col-md">
                                <Routes>
                                    <Route
                                        path="/"
                                        element={
                                            <News key="general"
                                            category="general" 
                                            />}
                                    />
                                    <Route
                                        path="/Entertainment"
                                        element={
                                            <News key="entertainment"
                                            category="entertainment"
                                            />
                                        }
                                    />
                                    <Route
                                        path="/Technology"
                                        element={
                                            <News key="technology"
                                            category="technology"
                                            />}
                                    />
                                    <Route
                                        path="/Sports"
                                        element={
                                            <News key="sports"
                                            category="sports"
                                            />}
                                    />
                                    <Route
                                        path="/Business"
                                        element={
                                            <News key="business"
                                            category="business"
                                            />}
                                    />
                                    <Route
                                        path="/Health"
                                        element={
                                            <News key="health"
                                            category="health" 
                                            />}
                                    />
                                    <Route
                                        path="/Science"
                                        element={
                                            <News key="science"
                                            category="science"
                                            />}
                                    />
                                </Routes>
                            </div>
                        </div>
                    </div>
                </BrowserRouter>
                <a class="nav justify-content-center" href="#" onclick="$(document).scrollTop(0);return false;">Page up</a>
            </div>
            <Footer />
        </>
    );
}
 
export default App;