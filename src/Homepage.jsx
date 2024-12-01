import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import About from "./About";
import Footer from "./Footer";
import styles from "./Homepage.module.css";
import { Link } from "react-router-dom";

const YOUTUBE_API_KEY = "AIzaSyCJE2MdsipysiaWj55eITzyf40ubWdnImE";
const CHANNEL_ID = "UC7J-6BmWevKhsrvNowWOAuA"; // Pravi ID kanala Crni Decak

function Homepage() {
  const [videos, setVideos] = useState([]);

  // OVO SAMO DA VRATIS

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=4`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Provera odgovora API-ja
        setVideos(data.items);
      })
      .catch((error) => console.error("Error fetching videos:", error));
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <LatestVideos videos={videos} />
      <Quotes /> {/* Dodaj Quotes komponentu ovde */}
      <Quizz />
      <About />
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.title}>
          Dobro došli na zvanični sajt kanala Crni Dečak
        </h1>
      </div>
    </section>
  );
}

function LatestVideos({ videos }) {
  if (!videos || videos.length === 0) {
    return <p>Trenutno nema dostupnih videa.</p>;
  }

  return (
    <section className={styles.latestStories}>
      <h1 className={styles.storiesTitle}>Najnovije priče</h1>
      <div className={styles.videoGrid}>
        {videos.map((video) => (
          <div key={video.id.videoId} className={styles.videoCard}>
            {/* Link ka YouTube videu */}
            <a
              href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
              target="_blank" // Otvori u novom tabu
              rel="noopener noreferrer" // Bezbednosna preporuka za spoljne linkove
            >
              <img
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
                className={styles.thumbnail}
              />
            </a>
            <h3 className={styles.videoTitle}>{video.snippet.title}</h3>
            <p className={styles.videoDescription}>
              {video.snippet.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Quotes() {
  return (
    <section className={styles.quotesSection}>
      <h1 className={styles.quotesTitle}>Horor citati</h1>
      <div className={styles.quotesContainer}>
        <blockquote className={styles.quote}>
          "Sve što se može zamisliti, može postati stvarnost." - H.P. Lovecraft
        </blockquote>
        <blockquote className={styles.quote}>
          "U noći, oni koji su zaboravili svetlost, postaju senke." - Stephen
          King
        </blockquote>
        <blockquote className={styles.quote}>
          "Zlo se ne može uništiti, već samo preneti." - Clive Barker
        </blockquote>
        <blockquote className={styles.quote}>
          "Noć je tamna i puna strahova." - George R.R. Martin
        </blockquote>
        <blockquote className={styles.quote}>
          "Strah se može pojaviti iz tame, ali i iz svetlosti." - Stephen King
        </blockquote>
        <blockquote className={styles.quote}>
          "Zlo se može sakriti, ali nikada ne može pobegnuti." - Clive Barker
        </blockquote>
      </div>
    </section>
  );
}

function Quizz() {
  return (
    <div className={styles.quizContainer}>
      <h1 className={styles.quizTitle}>Misliš da si horor stručnjak?</h1>
      <h2 className={styles.quizTest}>Testiraj svoje znanje!</h2>
      <Link to="/kviz">
        <button className={styles.btnQuizz}>Oprobaj se!</button>
      </Link>
    </div>
  );
}

export default Homepage;
