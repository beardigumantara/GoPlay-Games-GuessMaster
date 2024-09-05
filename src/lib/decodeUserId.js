import Hashids from "hashids";
import { ENV } from "./config";


export const decodeUserId = (id) => {
    // const isProduction = window.location.hostname === "games.goplay.co.id";
    const isProduction = ENV === "production";
    const salt = isProduction
      ? "r1gnxoc37bi1vbggajchaz6w63pe2s" // Production salt
      : "vtk53r4q35hqwin5jkw4l485e0pjyo"; // Integration salt
    const minLength = 23;
    const hashids = new Hashids(salt, minLength);
    const explodedId = id.split(":");
    const idType = explodedId[0];
    const hashedId = explodedId[1];
    const decodedId = hashids.decode(hashedId);
  
    return `${idType}:${decodedId}`;
  };
  
  export const decodeVipUserId = (id) => {
      // const isProduction = window.location.hostname === 'games.goplay.co.id';
      const isProduction = ENV === "production";
      const salt = isProduction
          ? 'r1gnxoc37bi1vbggajchaz6w63pe2s' // Production salt
          : 'vtk53r4q35hqwin5jkw4l485e0pjyo'; // Integration salt
      const minLength = 23;
      const hashids = new Hashids(salt, minLength);
      const decodedId = hashids.decode(id)[0];
  
      return decodedId;
  };
