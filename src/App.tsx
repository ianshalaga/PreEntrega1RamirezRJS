// import { useState } from 'react'
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import "./styles/App.scss";

function App() {
  return (
    // <div className="flex flex-col min-h-screen">
    // <div className="container mx-auto flex flex-col min-h-screen bg-sky-100">
    <div className="container mx-auto flex flex-col min-h-screen items-center bg-sky-100">
      <Header />
      <Main />
      {/* <ItemListContainer /> */}
      <Footer />
    </div>
  );
}

export default App;
