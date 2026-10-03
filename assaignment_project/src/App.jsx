import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PhotoGallery from "./components/PhotoGallery";
import "./App.css";

function App() {
  const [photos, setPhotos] = useState([]);
  const [search, setSearch] = useState("");
  const [albumFilter, setAlbumFilter] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((data) => setPhotos(data.slice(0, 100)));
  }, []);

  const filteredPhotos = photos.filter((photo) => {
    const titleMatch = photo.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const albumMatch =
      albumFilter === ""
        ? true
        : photo.albumId === Number(albumFilter);

    return titleMatch && albumMatch;
  });

  return (
    <div className={darkMode ? "dark" : ""}>
      <Header />

      <div className="controls">
        <input
          type="text"
          placeholder="Search photos..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={albumFilter}
          onChange={(e) => setAlbumFilter(e.target.value)}
        >
          <option value="">All Albums</option>

          {[...new Set(photos.map((p) => p.albumId))].map((id) => (
            <option key={id} value={id}>
              Album {id}
            </option>
          ))}
        </select>

        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀ Light" : "🌙 Dark"}
        </button>
      </div>

      <PhotoGallery photos={filteredPhotos} />

      <Footer />
    </div>
  );
}

export default App;