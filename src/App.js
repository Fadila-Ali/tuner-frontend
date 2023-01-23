import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import NavBar from "./Components/NavBar";
import Edit from "./Pages/Edit";
import Error from "./Pages/Error";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";

function App() {
  return (
    <div className="h-[100vh] bg-teal-50">
      <Router>
        <NavBar />
        <main className="text-slace-900 bg-teal-50 p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/songs" element={<Index />} />
            <Route path="/songs/new" element={<New />} />
            <Route path="/songs/:id" element={<Show />} />
            <Route path="/songs/:id/edit" element={<Edit />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
