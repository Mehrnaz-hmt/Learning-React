import "./App.css";
import CourseList from "./components/CourseList";
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header/>
      <div className="course-list">
        <CourseList/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;

