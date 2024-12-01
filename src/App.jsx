import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Stories from "./Stories";
import Blog from "./Blog";
import Quizz from "./Quizz";
import BlogPost from "./BlogPost";
import Contact from "./Contact";
import Error from "./Error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/price" element={<Stories />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/kviz" element={<Quizz />} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
