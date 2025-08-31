import { useState } from "react";
import styles from "./Feedback.module.css";

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = (type: "good" | "neutral" | "bad") => {
    if (type === "good") setGood(good + 1);
    if (type === "neutral") setNeutral(neutral + 1);
    if (type === "bad") setBad(bad + 1);
  };

  const handleReset = () => {
    setGood(0);
    setNeutral(0);
    setBad(0);
  };

  const total = good + neutral + bad;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Sip Happens Cafe</h1>
      <p>Please rate our service by selecting one of the options below.</p>
      
      <div className={styles.buttonGroup}>
          <button className={styles.button} onClick={() => handleClick("good")}>Good: {good}</button>
          <button className={styles.button} onClick={() => handleClick("neutral")}>Neutral: {neutral}</button>
          <button className={styles.button} onClick={() => handleClick("bad")}>Bad: {bad}</button>
      </div>

      <button className={styles.resetButton} onClick={handleReset}>Reset</button>

      {total === 0 ? (
        <p>No feedback yet</p>
      ) : (
        <div>
          <h2>Statistics:</h2>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {total}</p>
        </div>
      )}
    </div>
  );
}
