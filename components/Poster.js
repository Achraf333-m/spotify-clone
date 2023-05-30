import { playingTrackState, playstate } from "@/atoms/playerAtom";
import { BsFillPauseFill, BsFillPlayFill } from "react-icons/bs";
import { useRecoilState } from "recoil";

function Poster({ track, chooseTrack }) {
  const [play, setPLay] = useRecoilState(playstate);
  const [playingTrack, setPLayingTrack] = useRecoilState(playingTrackState);

  function handlePlay() {
    chooseTrack(track);
    if (track.uri === playingTrack.uri) {
      setPLay(!play);
    }
  }

  return (
    <div
      onClick={handlePlay}
      className="w-[200px] h-[300px] overflow-hidden rounded-[50px] relative text-white/80 cursor-pointer scrollbar-hide hover:scale-105 hover:text-white/100 transition duration-200 ease-out group mx-auto"
    >
      <img
        src={track.albumUrl}
        className="h-full w-full absolute inset-0 object-cover rounded-[50px] opacity-80 group-hover:opacity-100"
      />
      <div className="absolute bottom-10 inset-x-0 ml-4 space-x-3.5 flex items-center">
        <div className="h-10 w-10 bg-[#15883e] rounded-full flex justify-center items-center flex-shrink-0 group-hover:bg-[#1db954] ">
          {track.uri === playingTrack.uri && play ? (
            <BsFillPauseFill className="text-xl " />
          ) : (
            <BsFillPlayFill className="text-xl ml-[1px]" />
          )}
        </div>
        <div className="text-[15px] truncate">
            <h4 className="font-extrabold truncate">{track.title}</h4>
            <h6>{track.artist}</h6>
        </div>
      </div>
    </div>
  );
}

export default Poster;
