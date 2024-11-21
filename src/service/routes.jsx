import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefaultLayout from "../layout/defaultLayout";
import NotFound from "../views/notFound/notFound";


const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DefaultLayout />} />  
        <Route path="/home" element={<DefaultLayout/>} />
        <Route path="/about" element={<DefaultLayout/>} />
        <Route path="/project" element={<DefaultLayout/>} />
        <Route path="/skill" element={<DefaultLayout/>} />
        <Route path="/hireMe" element={<DefaultLayout/>} />
        <Route path="/certification" element={<DefaultLayout/>} />
        <Route path="*" element={<NotFound/>} />
        <Route path="/not-found" element={<NotFound/>} />
      </Routes>
    </Router>
  );
};

export default Routers;
