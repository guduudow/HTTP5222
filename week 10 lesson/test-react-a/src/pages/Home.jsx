import { Link } from "react-router-dom";
import UselessFact from "../components/UselessFact";

export default function Home() {
  return (
    <>
      <h1>Welcome to my React app!</h1>
      <p>This is just a random site </p>
      <Link to="/movies">Link to Movies Page</Link>
      <UselessFact />
    </>
  );
}
