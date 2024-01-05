import * as React from "react";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { MainWrapper } from "./components/MainWrapper";

function App() {
    return (
        <ChakraProvider>
            <div className="App">
                <Header />
                <MainWrapper />
                <Footer />
            </div>
        </ChakraProvider>
    );
}

export default App;
