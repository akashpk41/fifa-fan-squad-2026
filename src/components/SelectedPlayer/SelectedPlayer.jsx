import React from "react";

const SelectedPlayer = ({ selectedPlayer }) => {
  console.log(selectedPlayer);

  return (
    <div>
      <h1>SelectedPlayer {selectedPlayer.length } </h1>
    </div>
  );
};

export default SelectedPlayer;
