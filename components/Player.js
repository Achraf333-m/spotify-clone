import { playingTrackState, playstate } from "@/atoms/playerAtom";
import { useEffect } from "react";
import SpotifyPlayer from "react-spotify-web-playback";
import { useRecoilState } from "recoil";

function Player({ trackUri, accessToken }) {
  const [play, setPLay] = useRecoilState(playstate);
  const [playingTrack, setPLayingTrack] = useRecoilState(playingTrackState);

  useEffect(() => {
    if (trackUri) {
      setPLay(true);
    }
  }, [trackUri]);

  if (!accessToken) return null;

  return (
    <SpotifyPlayer
      styles={{
        activeColor: "#fff",
        bgColor: "#181818",
        color: "#fff",
        loaderColor: "#fff",
        sliderColor: "#1cb954",
        trackArtistColor: "#ccc",
        trackNameColor: "#fff",
        height: "70px",
        sliderTrackColor: "#535353",
        sliderTrackBorderRadius: "4px",
        sliderHandleColor: "#fff",
        errorColor: "#fff",
      }}
      token={accessToken}
      showSaveIcon
      callback={(state) => {
        setPLay(state.isPlaying);
      }}
      play={play}
      uris={trackUri ? [trackUri] : []}
      magnifySliderOnHover={true}
      autoPlay={true}
    />
  );
}

export default Player;
