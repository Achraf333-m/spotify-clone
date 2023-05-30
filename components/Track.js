import { playingTrackState, playstate } from "@/atoms/playerAtom";
import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { BsFillPauseFill, BsFillPlayFill } from "react-icons/bs";
import { MdHeadphones } from "react-icons/md";
import { useRecoilState } from "recoil";

function Track({ track, chooseTrack }) {
  const [play, setPLay] = useRecoilState(playstate);
  const [playingTrack, setPLayingTrack] = useRecoilState(playingTrackState);
  const [hasLiked, setHasLiked] = useState(false)
  function hasLike() {
    setHasLiked(!hasLiked)
  }
  function handlePlay() {
    chooseTrack(track);
    if (track.uri === playingTrack.uri) {
      setPLay(!play);
    }
    
  }
  return (
    <div className="flex justify-between items-center cursor-default hover:bg-white/10 py-2 px-4 rounded-lg group transition ease-out">
      <div className="flex items-center space-x-2 ">
        <img
          src={track.albumUrl}
          alt=""
          className="h-12 w-12 object-cover rounded-lg"
        />
        <div>
          <h4 className="text-white truncate text-sm font-semibold w-[450px]">
            {track.title}
          </h4>
          <p className="text-[rgb(179,179,179)] font-semibold group-hover:text-white text-[13px]">
            {track.artist}
          </p>
        </div>
      </div>

      <div className="flex items-center space-x-2.5 text-white font-bold">
        <MdHeadphones />
      </div>
      <div className="flex items-center space-x-4 justify-between rounded-full border-2 border-[#262626] relative cursor-pointer w-[85px] h-10 group-hover:border-white/40">
        <div>
          <AiFillHeart
          onClick={hasLike}
            className={`icon text-xl ml-3 ${hasLiked ? "text-[#1ed760]" : "text-[#686868]"}`}
          />
        </div>
        <div onClick={handlePlay} className="text-white text-lg h-10 w-10 rounded-full border-white/60 border hover:border-[#15883e] hover:bg-[#15883e] absolute -right-0.5 flex items-center justify-center">
          {track.uri === playingTrack.uri && play ? (
            <BsFillPauseFill className="text-xl " />
          ) : (
            <BsFillPlayFill className="text-xl ml-[1px]" />
          )}
        </div>
      </div>
    </div>
  );
}

export default Track;
