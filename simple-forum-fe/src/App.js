import PostList from "./pages/PostList";
import PostDetail from "./pages/PostDetail";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

const ErrorPage = () => {
  return (
    <div>
      <div className="error" >
        it looks like you're lost :(
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <Switch>
          <Route path="/">
            <PostList />
          </Route>
          <Route path="/post:id">
            <PostDetail />
          </Route>
        </Switch>
      </BrowserRouter>
      </div>
  );
}

export default App;
