import React, { useState } from "react";
import styles from "./About.module.css";

function About() {
  // Definišemo state za sliku i tekst
  const [content, setContent] = useState({
    image: "/images/ban.jpg",
    title: "Crni Dečak",
    description:
      "Crni Dečak je YouTube kanal posvećen istraživanju horor priča inspirisanih bogatom balkanskom mitologijom i legendama iz zemalja bivše Jugoslavije. Kroz uzbudljive naracije, kanal otkriva misterije o duhovima, demonima i natprirodnim bićima, pružajući gledaocima jedinstveno putovanje kroz zaboravljene priče koje su oblikovale našu kulturu. Pridružite nam se i zaronite u mračne tajne koje se kriju u senama balkanskih šuma i planina!"
  });

  const [buttonText, setButtonText] = useState("Saša");

  // Funkcija za promenu sadržaja

  return (
    <>
      <h1 className={styles.title}>O kanalu</h1>

      <div className={styles.container}>
        <div className={styles.image}>
          <img src={content.image} alt="Opis slike" />
        </div>
        <div className={styles.text}>
          <h1>{content.title}</h1>
          <h2>{content.description}</h2>
        </div>
      </div>
    </>
  );
}

export default About;
