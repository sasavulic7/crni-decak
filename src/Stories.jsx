import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "./Stories.module.css";

const YOUTUBE_API_KEY = "AIzaSyDWnmGILzcewwEuoDXVVQsNAioEwau57zw";
const CHANNEL_ID = "UC7J-6BmWevKhsrvNowWOAuA"; // Pravi ID kanala Crni Decak
const VIDEOS_PER_PAGE = 12; // Broj videa po stranici

function StoriesPage() {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);
  const [sortOption, setSortOption] = useState("date"); // Podrazumevano sortiranje po datumu
  const [currentPage, setCurrentPage] = useState(1); // Trenutna strana

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        // Dobavljanje 'uploads' playlist ID-a
        const channelResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${CHANNEL_ID}&key=${YOUTUBE_API_KEY}`
        );
        const channelData = await channelResponse.json();
        const uploadsPlaylistId =
          channelData.items[0].contentDetails.relatedPlaylists.uploads;

        // Dobavljanje video zapisa iz playliste
        const playlistResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${uploadsPlaylistId}&key=${YOUTUBE_API_KEY}`
        );
        const playlistData = await playlistResponse.json();

        // Dobavljanje broja pregleda za svaki video
        const videoIds = playlistData.items
          .map((video) => video.snippet.resourceId.videoId)
          .join(",");
        const videoDetailsResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoIds}&key=${YOUTUBE_API_KEY}`
        );
        const videoDetailsData = await videoDetailsResponse.json();

        // Kombinovanje snippeta i statistike za svaki video
        const videosWithViews = playlistData.items.map((video, index) => ({
          ...video,
          viewCount: videoDetailsData.items[index].statistics.viewCount,
          publishedAt: new Date(video.snippet.publishedAt)
        }));

        setVideos(videosWithViews);
      } catch (error) {
        console.error("Error fetching videos:", error);
        setError("Došlo je do greške prilikom učitavanja videa.");
      }
    };

    fetchVideos();
  }, []);

  // Funkcija za sortiranje videa na osnovu izabrane opcije
  const sortVideos = (videos, option) => {
    if (option === "views") {
      return [...videos].sort((a, b) => b.viewCount - a.viewCount);
    } else if (option === "date") {
      return [...videos].sort((a, b) => b.publishedAt - a.publishedAt);
    }
    return videos;
  };

  // Logika za paginaciju
  const indexOfLastVideo = currentPage * VIDEOS_PER_PAGE;
  const indexOfFirstVideo = indexOfLastVideo - VIDEOS_PER_PAGE;
  const currentVideos = sortVideos(videos, sortOption).slice(
    indexOfFirstVideo,
    indexOfLastVideo
  );

  const totalPages = Math.ceil(videos.length / VIDEOS_PER_PAGE);

  const goToNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <div>
      <Navbar />
      {error && <p>{error}</p>}
      <h1 className={styles.title}>Sve priče</h1>

      {/* Sortirajuca lista */}
      <div className={styles.sortContainer}>
        <label htmlFor="sortOption">Sortiraj po: </label>
        <select
          id="sortOption"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="date">Datumu</option>
          <option value="views">Broju pregleda</option>
        </select>
      </div>

      <div className={styles.videoGrid}>
        {currentVideos.map((video) => (
          <div
            key={video.snippet.resourceId.videoId}
            className={styles.videoCard}
          >
            <a
              href={`https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
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
            <p className={styles.viewCount}>Pregleda: {video.viewCount}</p>
          </div>
        ))}
      </div>

      {/* Navigacija za stranice */}
      <div className={styles.pagination}>
        <button onClick={goToPreviousPage} disabled={currentPage === 1}>
          Prethodna
        </button>
        <span>
          Strana {currentPage} od {totalPages}
        </span>
        <button onClick={goToNextPage} disabled={currentPage === totalPages}>
          Sledeća
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default StoriesPage;
