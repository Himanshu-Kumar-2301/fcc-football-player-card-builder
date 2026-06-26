import { useState } from "react";
import type { PlayerData } from "./data";
import { getPlayerTier } from "./data";
import PlayerCard from "./PlayerCard";

const defaultPlayer: PlayerData = {
  name: "PELE",
  overallRating: 98,
  position: "ST",
  club: "Santos FC",
  imageUrl:
    "https://cdn.freecodecamp.org/curriculum/typescript/tsx-workshop/pele.jpg",
  pac: 97,
  sho: 98,
  pas: 83,
  dri: 99,
  def: 41,
  phy: 75,
};

const FootballPlayerCard = () => {
  const [player, setPlayer] = useState<PlayerData>(defaultPlayer);

  return (
    <div className="page">
      <header className="header">
        <div className="header-inner">
          <p className="header-title">Football Card Builder</p>
          <p className="header-subtitle">Customize your player card</p>
        </div>
      </header>
      <main className="main">
        <div className="layout">
          <div className="form-panel"></div>
          <div className="preview-panel">
            <p className="preview-label">Live Preview</p>
            <p className="preview-hint">Updates as you type</p>
            <div
              className={`preview-box tier-${getPlayerTier(player.overallRating)}`}
            >
              <PlayerCard player={player} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FootballPlayerCard;
