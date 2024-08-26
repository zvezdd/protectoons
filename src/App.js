import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "animate.css";
import Home from "./components/Home";
import ReadComics from "./pages/ReadComics/ReadComics";
import TakeQuiz from "./pages/TakeQuiz/TakeQuiz";
import Rankings from "./pages/Rankings/Rankings";
import Chat from "./pages/Chat/Chat";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/readcomics" element={<ReadComics />} />
          <Route path="/takequiz" element={<TakeQuiz />} />
          <Route path="/rankings" element={<Rankings />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
