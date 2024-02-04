import { Routes, Route } from "react-router-dom";
import Competition from "./Pages/Login/Competition";
import Login from "./Pages/Login/Login";
import Layout from "./Layout";
import Events from "./Pages/Events";
import Workshop from "./Pages/Workshop";
import Registered from "./Pages/Registered";
import About from "./Pages/About";
import Layout1 from "./Layout1";
import Signup from "./Pages/Login/Signup";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout1/>} >
         <Route path="/" element={<Login/>}/>
         <Route path="signup" element={<Signup/>}/>
        </Route>
        <Route path="/layout" element={<Layout /> }>
          <Route path="/layout" element={<Competition />} />
          <Route path="/layout/event" element={<Events />} />
          <Route path="/layout/workshop" element={<Workshop />} />
          <Route path="/layout/register" element={<Registered />} />
          <Route path="/layout/about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
