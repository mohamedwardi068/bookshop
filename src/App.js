
//import react from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";


import Navbar  from "./component/navbar";
import BookListt from "./pages/Storybook";
import Listbook from "./pages/listbook";
import Login from "./pages/login";

import Signup from "./pages/signup";
import Newlogin from "./pages/newLogin";




const App=()=> {

  return (
    
    
    <>
    

    <BrowserRouter>

        

        
        <Routes >
        <Route index element={<><Navbar/><BookListt/><Listbook/></>}/>
        <Route path="/newlogin" element={<Newlogin/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>

        </Routes>


    
    </BrowserRouter>
    </>
    
  );
}

export default App;

