import { useState, useEffect } from "react";

export default function Trivia() {
  const [category, setCategory] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  let [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const getTrivia = async () => {
      let response = await fetch("https://opentdb.com/api.php?amount=1", {
        method: "get",
      });
      let data = await response.json();
      console.log(data);
      setCategory(data.results[0].category);
      setQuestion(data.results[0].question);
      setAnswer(data.results[0].correct_answer);
    };
    getTrivia();
  }, []);

  function revealState() {
    setRevealed(true);
  }

  //revealed = answer ? `(${answer})` : "";

  return (
    <div>
      <h2>Trivia</h2>

      <div>{category}</div>
      <h3>{question}</h3>
      <div>{revealed && <p>{answer}</p>}</div>
      <button type="button" onClick={revealState}>
        Reveal Answer
      </button>
    </div>
  );
}
