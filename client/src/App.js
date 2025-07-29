import Header from "./components/Header";
<<<<<<< HEAD
import Index from "./components/index"
function App() {
  return (
    <>
    <Index/>
    </>
=======
import Login from "./components/login";
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (

    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
    
      </Routes>
    
    
    
    
    </BrowserRouter>
  

    
>>>>>>> Deepak



  );
}

export default App;
