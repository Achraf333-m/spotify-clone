import { atom } from "recoil";

export const playstate = atom ({
    key: "playstate",
    default: false,
});

export const playingTrackState = atom({
    key: "playingTrackState",
    default: "",
});