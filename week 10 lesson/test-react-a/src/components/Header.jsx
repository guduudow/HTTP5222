import Nav from "./Nav";

export default function Header() {
  //the return statement below retusn a JSX element (one root element but you can have others insdie the root element).
  return (
    <header id="header">
      {/* {tjis is JSX} */}
      <h2 id="site-name">
        <a href="/">Test App</a>
      </h2>
      <Nav />
    </header>
  );
}
