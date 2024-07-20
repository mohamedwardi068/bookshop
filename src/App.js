
//import react from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";


import Navbar  from "./component/navbar";
import BookListt from "./pages/Storybook";
import Listbook from "./pages/listbook";
import Login from "./pages/login";

import Signup from "./pages/signup";




const App=()=> {

  return (
    
    
    <>
    

    <BrowserRouter>

        

        
        <Routes >
        <Route index element={<><Navbar/><BookListt/><Listbook/></>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>

        </Routes>


    
    </BrowserRouter>
    </>
    
  );
}

export default App;

