import { useState, useEffect } from "react";

export default function UselessFact() {
  const [randomFact, setRandomFact] = useState("");
  const [factSource, setFactSource] = useState("");

  useEffect(() => {
    const getFact = async () => {
      let response = await fetch(
        "https://uselessfacts.jsph.pl/api/v2/facts/random",
        { method: "get" }
      );
      let data = await response.json();
      //console.log(data);
      setRandomFact(data.text);
      setFactSource(data.source);
    };
    getFact();
  }, []); //empty square brackets are saying that there are no dependencies for this effect (w/o it the effect will keep running until it runs out)

  let source = factSource ? `(${factSource})` : "";
  return (
    <div>
      <h2>Random Facts with Pikachu : </h2>
      <p>
        {randomFact} {source}
      </p>
    </div>
  );
}
