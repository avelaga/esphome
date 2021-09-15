import Post from "./components/Post";
import Comment from "./components/Comment";
import './App.css';

function App() {
  return (
    <div className="App">
    <h1>simple forum</h1>
    <Post />
    <Comment />
    </div>
  );
}

export default App;
