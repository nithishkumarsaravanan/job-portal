import Header from "./components/Header";
import Index from "./components/index"
import Login from "./components/login";
import Signup from "./components/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom"
// function App() {
//   return (
//     <>
//     <Index/>
//     </>


function App() {
  return (

    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/index" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
        {/* Add more routes as needed */}
    
      </Routes>
    
    
    
    
    </BrowserRouter>
  





  );
}

export default App;
