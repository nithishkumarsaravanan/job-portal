import Header from "./components/Header";
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
  

    



  );
}

export default App;
