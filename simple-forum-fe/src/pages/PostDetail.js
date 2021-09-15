import Comment from "../components/Comment";
import Header from "../components/Header";
import './pages.css';

export default function PostDetail() {
  return (
    <div className="post-detail">
    <Header />
    <Comment />
    <Comment />
    <Comment />
    </div>
  );
}
