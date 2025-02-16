import React, { useState, useEffect } from "react";
import "./NewsApp.css";

const NewsApp = () => {
  const API_KEY = import.meta.env.VITE_API_KEY.trim()//"191cd51e18d648e388890a4457ab4680"
  const [search, setSearch] = useState("india");
  const [data, setData] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const getNews = async () => {
    let response = await fetch(
      `https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`
    );
    let newsData = await response.json();

    if (!newsData.articles) {
      console.error("Error fetching news:", newsData);
      return;
    }

    setData(newsData.articles);
  };

  useEffect(() => {
    getNews();
  }, [search]);

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <nav>
        <p id="icon">News Hunter</p>
        <div className="search-box">
          <input
            type="text"
            placeholder="Search News"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={getNews}>Search</button>
        </div>
        <div className="change-mode">
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </nav>

      <center>
        <h1 style={{ marginTop: "20px" }}>Stay Updated With Daily News</h1>
      </center>
      <div className="category">
        <div className="category-types">
          <button onClick={() => setSearch("Sports")}>Sports</button>
          <button onClick={() => setSearch("Politics")}>Politics</button>
          <button onClick={() => setSearch("Health")}>Health</button>
          <button onClick={() => setSearch("Entertainment")}>
            Entertainment
          </button>
          <button onClick={() => setSearch("Technology")}>Technology</button>
        </div>
      </div>

      <div className="card-container">
        {data.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.urlToImage} onClick={() => window.open(item.url)} />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <a href={item.url}>
              <button>Read More</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsApp;
