import React, { useState, useEffect } from "react";
import quiz from "./data/quizzData";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "./Quizz.module.css";

const Quizz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [quizEnded, setQuizEnded] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

  useEffect(() => {
    initializeQuiz();
  }, []);

  const initializeQuiz = () => {
    const shuffledQuestions = shuffleArray([...quiz.questions]).slice(0, 10);
    setQuestions(shuffledQuestions);
    setCurrentQuestionIndex(0);
    setCorrectAnswers(0);
    setQuizEnded(false);
    setSelectedAnswer(null);
    setShowFeedback(false);
  };

  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const handleAnswerOptionClick = (answer, isCorrect) => {
    setSelectedAnswer(answer);
    setShowFeedback(true);
    if (isCorrect) {
      setCorrectAnswers((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setShowFeedback(false);
    setCurrentQuestionIndex((prev) => {
      const nextIndex = prev + 1;
      if (nextIndex >= questions.length) {
        setQuizEnded(true);
      }
      return nextIndex;
    });
  };

  if (questions.length === 0) {
    return <div className={styles.loading}>Učitavanje kviza...</div>;
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <>
      <Navbar />
      <div className={styles.quizContainer}>
        <h1 className={styles.quizTitle}>{quiz.title}</h1>
        <p className={styles.quizDescription}>{quiz.description}</p>
        {!quizEnded ? (
          <div>
            <h2 className={styles.question}>
              Pitanje {currentQuestionIndex + 1} od {questions.length}
            </h2>
            <p className={styles.questionText}>{currentQuestion.question}</p>
            <ul className={styles.options}>
              {currentQuestion.options.map((option) => (
                <li key={option.answer} className={styles.option}>
                  <button
                    onClick={() =>
                      handleAnswerOptionClick(option.answer, option.isCorrect)
                    }
                    disabled={showFeedback}
                    className={`${styles.answerButton} ${
                      showFeedback
                        ? option.isCorrect
                          ? styles.correctAnswer
                          : option.answer === selectedAnswer
                          ? styles.incorrectAnswer
                          : ""
                        : ""
                    }`}
                  >
                    {option.answer}
                  </button>
                </li>
              ))}
            </ul>
            {showFeedback && <div className={styles.feedback}></div>}
            {showFeedback && (
              <button
                onClick={handleNextQuestion}
                className={styles.nextButton}
              >
                {currentQuestionIndex === questions.length - 1
                  ? "Završi kviz"
                  : "Sledeće pitanje"}
              </button>
            )}
          </div>
        ) : (
          <div className={styles.quizEnd}>
            <h2 className={styles.resultMessage}>Kviz završen!</h2>
            <p className={styles.resultMessage}>
              Tačni odgovori: {correctAnswers} od {questions.length}
            </p>
            <button onClick={initializeQuiz} className={styles.resetButton}>
              Ponovo pokreni kviz
            </button>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Quizz;
