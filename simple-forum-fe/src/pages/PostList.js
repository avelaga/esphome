import Post from "../components/Post";
import Header from "../components/Header";
import './pages.css';

export default function PostList() {
  return (
    <div className="post-list">
    <Header />
    <Post />
    <Post />
    <Post />
    </div>
  );
}
