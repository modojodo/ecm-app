import './App.css';
import MediaCard from 'ecm-web-components';
import { useEffect, useState } from "react";

function App() {

  const [media, setMedia] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/media')
      .then(res => res.json())
      .then(({ media }) => {
        setMedia(media)
      });
  }, []);

  return (
    <div className="App">
      <h1>Anime Media</h1>
      <div className="media-list">
        {media.map((media =>
            <media-card title={media.title} image={media.image} desc={media.description}/>
        ))}
      </div>

    </div>
  );
}

export default App;
