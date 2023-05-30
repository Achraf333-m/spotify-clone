import { playingTrackState, playstate } from "@/atoms/playerAtom";
import { useRecoilState } from "recoil";

function RecentlyPlayed({ track, chooseTrack }) {
  const [play, setPLay] = useRecoilState(playstate);
  const [playingTrack, setPLayingTrack] = useRecoilState(playingTrackState);

 const handlePlay = () => {
  chooseTrack(track)
  if (track.uri === playingTrack.uri) {
    setPLay(!play)
  }
 }
  return <div onClick={handlePlay} className="flex items-center space-x-3">
    <img src={track.albumUrl} className="rounded-full w-[52px] h-[52px]"/>
    <div>
        <h4 className="text-white text-[13px] mb-0.5 font-semibold hover:underline truncate cursor-pointer max-w-[150px]">{track.title}</h4>
        <p className="text-xs text-[#686868] font-semibold cursor-pointer hover:underline">{track.artist}</p>
    </div>
  </div>;
}

export default RecentlyPlayed;
