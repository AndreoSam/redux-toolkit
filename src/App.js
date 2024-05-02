// import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import View from "./components/CRUD/View";
import Add from "./components/CRUD/Add";
import Edit from "./components/CRUD/Edit";
// import CounterView from './components/CounterView';
// import PostView from './components/postView';

function App() {
  return (
    <div className="App">
      {/* <CounterView/> */}
      {/* <PostView/> */}
      <Router>
        <Routes>
          <Route path="/" element={<View />} />
          <Route path="/add" element={<Add />} />
          <Route path="/edit" element={<Edit />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
