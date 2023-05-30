import { MdOutlineShortText } from "react-icons/md"

function Search({ search, setSearch }) {
  return (
    <div className="max-w-[1100px] bg-[#1a1a1a] rounded-full border-2 border-[#333333] p-1.5 px-5 pr-8 flex items-center">
      <div className="w-4 h-4 rounded-full flex-shrink-0 border-2 animate-pulse" />
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="bg-[#1a1a1a] text-white border-none outline-none lg:w-full focus:ring-0 placeholder-[#fafafa] text-xs"
        placeholder="Search..."
      />
      <div className="flex items-center divide-dotted divide-x-2 divide-[#333] ml-auto ">
        <div className="flex space-x-4 pr-5 ">
          <button onClick={() => alert('This feature has not yet been implemented')} className="tag hover:brightness-150">House</button>
          <button onClick={() => alert('This feature has not yet been implemented')} className="tag hover:brightness-150">Acoustic</button>
          <button onClick={() => alert('This feature has not yet been implemented')} className="tag hover:brightness-150">Minimal</button>
        </div>
        <div className="text-white flex items-center space-x-1.5 pl-4">
          <MdOutlineShortText className="text-2xl animate-pulse" />
          <span className="font-medium text-sm">Filter</span>
        </div>
      </div>
    </div>
  );
}

export default Search;
