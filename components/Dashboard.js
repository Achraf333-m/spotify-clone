import { playingTrackState } from "@/atoms/playerAtom";
import Body from "./Body";
import Right from "./Right";
import Sidebar from "./Sidebar";
import { useRecoilState } from "recoil";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Player from "./Player";
var SpotifyWebApi = require("spotify-web-api-node");

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.CLIENT_ID,
});

function Dashboard() {
  const { data: session } = useSession();
  const accessToken = session?.accessToken;

  const [playingTrack, setPLayingTrack] = useRecoilState(playingTrackState);
  const [showPlayer, setShowPlayer] = useState(false);

  useEffect(() => {
    setPLayingTrack(true);
  }, []);
  const chooseTrack = (track) => {
    setPLayingTrack(track);
  };

  return (
    <main className="flex min-h-screen min-w-screen lg:pb-24">
      <Sidebar />
      <Body spotifyApi={spotifyApi} chooseTrack={chooseTrack} />
      <Right spotifyApi={spotifyApi} chooseTrack={chooseTrack} />
      <div className="fixed bottom-0 right-0 left-0 z-50">
        <Player accessToken={accessToken} trackUri={playingTrack.uri} />
      </div>
    </main>
  );
}

export default Dashboard;
