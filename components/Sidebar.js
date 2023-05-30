
import { BsFillBarChartFill } from "react-icons/bs"
import { HiOutlineDotsHorizontal } from "react-icons/hi"
import { FaMicrophoneAlt } from "react-icons/fa";
import { RiCompassFill } from "react-icons/ri";
import { AiFillClockCircle, AiFillHome } from "react-icons/ai"

function Sidebar() {
  return (
    <section className="fixed top-0 space-y-8 flex flex-col items-center p-4 w-20 h-screen bg-black z-40">
      <img
        src="https://rb.gy/xkacau"
      />
      <div className="flex flex-col space-y-8 justify-center">
        <AiFillHome className="sidebarIcon text-white opacity-[0.85]" />
        <RiCompassFill className="sidebarIcon" />
        <FaMicrophoneAlt className="sidebarIcon text-sm" />
        <BsFillBarChartFill className="sidebarIcon" />
        <AiFillClockCircle className="sidebarIcon" />
        <HiOutlineDotsHorizontal className="sidebarIcon" />
      </div>
    </section>
  );
}

export default Sidebar;
