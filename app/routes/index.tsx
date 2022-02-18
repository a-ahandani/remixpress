import { Link } from "remix";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}
