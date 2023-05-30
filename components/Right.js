import { BsFillBellFill, BsFillGridFill } from "react-icons/bs";
import { HiOutlineShieldCheck } from "react-icons/hi";
import { MdOutlineSettings } from "react-icons/md";
import Dropdown from "./Dropdown";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import RecentlyPlayed from "./RecentlyPlayed";

function Right({ spotifyApi, chooseTrack }) {
  const { data: session } = useSession();
  const accessToken = session?.accessToken;
  const [recentlyPlayed, setRecentlyPlayed] = useState([]);

  
  useEffect(() => {
    if (!accessToken) return;

    spotifyApi.getMyRecentlyPlayedTracks({ limit: 20 }).then((res) => {
      setRecentlyPlayed(
        res.body.items.map(({ track }) => {
          return {
            id: track.id,
            artist: track.artists[0].name,
            title: track.name,
            uri: track.uri,
            albumUrl: track.album.images[0].url,
          };
        })
      );
    });
  }, [accessToken]);

  return (
    <section className="p-4 space-y-8">
      <div className="flex space-x-2 justify-between items-center">
        {/* {ICONS} */}
        <div className="flex items-center space-x-4 border-2 border-[#262626] rounded-full h-12 py-3 px-4">
          <HiOutlineShieldCheck className="text-[#ccc] text-xl" />
          <MdOutlineSettings className="text-[#ccc] text-xl" />
          <BsFillBellFill className="text-[#ccc] text-xl" />
        </div>
        {/* {PROFILE} */}
        <Dropdown />
      </div>

      <div className="space-y-4 p-4 bg-[#0d0d0d] border-[#262626] border-3 rounded-xl">
        <div className="flex justify-between items-center">
          <h4 className="font-semibold text-white text-sm">Recently Played</h4>
          <BsFillGridFill className="text-white" />
        </div>

        <div className="overflow-y-scroll overflow-x-hidden scrollbar-hide h-[250px] space-y-4 md:h-[400px]">
         {recentlyPlayed.length > 0 ? recentlyPlayed.map((track, index) => (
          <RecentlyPlayed track={track} chooseTrack={chooseTrack} key={index} />
         )) : <div className="right-50 left-50 text-white ">You haven't played anything recently!</div>}
        </div>
        <button className="btn">View All</button>
      </div>
    </section>
  );
}

export default Right;
