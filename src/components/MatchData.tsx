import { useEffect } from "react";
import pako from "pako";

const MatchData = () => {
  useEffect(() => {
    const loadMatch = async (url: string) => {
      const res = await fetch(url);
      const buf = new Uint8Array(await res.arrayBuffer());
      const data = JSON.parse(new TextDecoder().decode(buf));
      // DEBUG
      for (let i = 0; i < 100; ++i) {
        console.log("Ball = ", data.frames[i].b);
      }
    };

    loadMatch("./data/metrica_match_1.json.gz");
  }, []);

  return null;
};

export default MatchData;
