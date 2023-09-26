import { Route, Routes } from "react-router-dom";

import "./App.css";

import { useContext, useEffect } from "react";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Academia from "./pages/Academia";
import Student from "./pages/Student";
import Verifier from "./pages/Verifier";
import UploadData from "./pages/UploadData";
import { AccountContext, ContextObject } from "./context/Provider";
import connectToMetamask from "./utils/connectMetamask";
import getAccounts from "./utils/getAccounts";

function App() {
  const { acc, setAcc } = useContext<ContextObject>(AccountContext);
  const getAcc = async () => {
    acc && (await connectToMetamask());
    const accounts: Array<string> = await getAccounts();
    setAcc(accounts[0]);
  };
  useEffect(() => {
    getAcc();
  }, []);
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/academia" element={<Academia />} />
        <Route path="/student" element={<Student />} />
        <Route path="/verifier" element={<Verifier />} />
        <Route path="/academia/upload-student-data" element={<UploadData />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
