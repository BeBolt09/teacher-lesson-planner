import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import LessonPlanner from './pages/LessonPlanner'
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar/>}>
          <Route path="/lesson-planner" element={<LessonPlanner />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
      </Routes>
    </>
  )
}

export default App

    // <>
    //   <Navbar/>
    //   <Home/>
    //   {/* <LessonPlanner/> */}
    // </>