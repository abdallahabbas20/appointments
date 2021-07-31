import React from "react";
import {Tile} from '../tile/Tile'

export const TileList = ({contactList}) => {
  return (
    <div>
      {contactList.map((tile, index) => (
        <Tile key={index} tile={tile} />
      ))}
    </div>
  );
};
