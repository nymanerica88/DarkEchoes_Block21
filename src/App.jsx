import { useState } from "react";
import { episodeList } from "./data";
import "./index.css";

// --- Components ---
function EpisodeList({ episodes, onSelect }) {
  return (
    <ul>
      {episodes.map((ep) => (
        <li key={ep.id} onClick={() => onSelect(ep)}>
          {ep.title}
        </li>
      ))}
    </ul>
  );
}

// This component shows the details of the selected episode
function EpisodeDetails({ episode }) {
  if (!episode) {
    return (
      <p>
        Please click on an episode to see the episode number and associated
        details.
      </p>
    );
  }

  return (
    <div>
      <h2>Episode {episode.id}</h2>
      <h3>{episode.title}</h3>
      <p>{episode.description}</p>
    </div>
  );
}

//************Export Default Secion To Render the App***********************/
export default function App() {
  const [episodes] = useState(episodeList);
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  return (
    <div className="app">
      <h1 className="title">Dark Echoes</h1>
      <h2>Episodes</h2>
      <div className="container">
        <EpisodeList
          episodes={episodes}
          onSelect={setSelectedEpisode}
          selectedId={selectedEpisode?.id}
        />
        <EpisodeDetails episode={selectedEpisode} />
      </div>
    </div>
  );
}
