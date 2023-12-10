import { useState } from "react";
import text from "./data";

const App = () => {
  const [count, setCount] = useState(1);
  const [paragraphs, setParagraphs] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newParagraphs = text.slice(0, count);
    setParagraphs(newParagraphs);
    setCount(1);
  };

  return (
    <main>
      <section className="section-center" onSubmit={handleSubmit}>
        <h4>TIRED OF BORING LOREM GYPSUM?</h4>
        <form className="lorem-form" action="">
          <label className="form-label" htmlFor="paragraphs">
            Paragraphs
          </label>
          <input
            className=""
            type="number"
            id="paragraphs"
            name="paragraphs"
            min={1}
            max={8}
            value={count}
            onChange={(e) => setCount(e.target.value)}
          />
          <button type="submit" className="btn">
            Generate
          </button>
        </form>
      </section>
      <section className="lorem-text">
        {paragraphs.map((p, index) => {
          return <p key={index}>{p}</p>;
        })}
      </section>
    </main>
  );
};
export default App;
