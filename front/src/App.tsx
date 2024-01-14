import * as React from "react";
import "./App.css";
import "./css/globals.scss";
import { ChakraProvider } from "@chakra-ui/react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { MainWrapper } from "./components/MainWrapper";
import {
    createBrowserRouter,
    RouterProvider,
    BrowserRouter,
} from "react-router-dom";

function App() {
    return (
        <ChakraProvider>
            <BrowserRouter>
                <div className="App">
                    <Header />
                    <MainWrapper />
                    <Footer />
                </div>
            </BrowserRouter>
        </ChakraProvider>
    );
}

export default App;
