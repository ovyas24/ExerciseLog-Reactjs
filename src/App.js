import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar.component";
import ExercisesList from "./components/exercisesList.component";
import CreateExercises from "./components/createExcersise.component";
import EditExercises from "./components/edit-exercise.component";
import CreateUser from "./components/createUser.compoent";

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={ExercisesList} />
      <Route path="/edit/:id" exact component={EditExercises} />
      <Route path="/create" exact component={CreateExercises} />
      <Route path="/user" exact component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
