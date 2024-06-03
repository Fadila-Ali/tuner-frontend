import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import NavBar from "./Components/NavBar";
import Edit from "./Pages/Edit";
import Error from "./Pages/Error";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";
import PlaylistsIndex from "./Pages/PlaylistsIndex";
import ShowPlaylists from "./Pages/ShowPlaylists";
import AlbumsIndex from "./Pages/AlbumsIndex";
import ShowAlbums from "./Pages/ShowAlbums";
import NewPlaylist from "./Pages/NewPlaylist";
import EditPlaylist from "./Pages/EditPlaylist";
import ArtistIndex from "./Pages/ArtistIndex";
import ShowArtists from "./Pages/ShowArtists";

function App() {
  return (
    <div className="h-[100vh] bg-teal-50">
      <Router>
        <NavBar />
        <main className="text-slace-900 bg-teal-50">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/songs" element={<Index />} />
            <Route path="/songs/new" element={<New />} />
            <Route path="/songs/:id" element={<Show />} />
            <Route path="/songs/:id/edit" element={<Edit />} />
            <Route path="/playlists" element={<PlaylistsIndex />} />
            <Route path="/playlists/:id" element={<ShowPlaylists />} />
            <Route path="/playlists/new" element={<NewPlaylist />} />
            <Route path="/playlists/:id/edit" element={<EditPlaylist />} />
            <Route path="/albums" element={<AlbumsIndex />} />
            <Route path="/albums/:id" element={<ShowAlbums />} />
            <Route path="/artists" element={<ArtistIndex />} />
            <Route path="/artists/:id" element={<ShowArtists />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
