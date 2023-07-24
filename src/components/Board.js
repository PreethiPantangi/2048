import React, { useEffect, useState } from "react";
import Cell from './Cell'
import {rows, tileSpec, tilesData, fixedNumStyle} from '../utils/constants'

const Board = () => {

  let [score /**, setScore */] = useState(0);
  let [bestScore /**, setBestScore */] = useState(0);

  const moveUp = () => {console.log('moveUp');};
  const moveDown = () => {console.log('moveDown');};
  const moveLeft = () => {console.log('moveLeft');};
  const moveRight = () => {console.log('moveRight');};

  const handleMoves = (e) => {
    if (e.which === 38) {
      moveUp();
    } else if (e.which === 40) {
      moveDown();
    } else if (e.which === 37) {
      moveLeft();
    } else if (e.which === 39) {
      moveRight();
    }
  }

  document.addEventListener("keyup", handleMoves);

  useEffect(() => {

    const getRandomTiles = (tilesCount) => {
      let randomIds = [];
      const indices = new Set();
      const tileIds = Object.keys(tilesData);
  
      while (indices.size < tilesCount) {
        const randomIndex = Math.floor(Math.random() * 16);
        if (!indices.has(randomIndex) && tilesData[tileIds[randomIndex]] === 0) {
          indices.add(randomIndex);
          randomIds.push(tileIds[randomIndex]);
        }
      }
      console.log(randomIds);
      return randomIds;
    };
  
    
    const getTileSpecs = (number) => {
      return tileSpec[number];
    };
  
    const applyStylesToTile = (cell, number) => {
      const tileSpecs = getTileSpecs(number);
      if (tileSpecs && Object.keys(tileSpecs).length > 0) {
        cell.style.backgroundColor = tileSpecs.bgColor;
        cell.style.color = tileSpecs.textColor;
        cell.style.fontSize = fixedNumStyle.fontSize;
        cell.style.fontWeight = fixedNumStyle.fontWeight;
        cell.style.textAlign = fixedNumStyle.textAlign;
      }
    };
  
    const getRandomNumber = () => {
      const random = Math.random();
      const rounded = Math.round(random);
      return rounded === 0 ? 2 : 4;
    }
  
    const fillTilesWithNumbers = (ids) => {
      ids.forEach((id) => {
        let val = getRandomNumber();
        tilesData[id] = val;
        const cell = document.getElementById(id);
        cell.innerText = val;
        applyStylesToTile(cell, val);
      });
    };

    fillTilesWithNumbers(getRandomTiles(2));
  }, []);
  
  return (
    <div>
      <div className="flex justify-center">
        <div className="grid grid-flow-col">
          <div className="col-span-3 m-2 p-2 w-28 bg-[#bbada0] rounded-sm text-white text-center">
            <p className="font-bold">Score</p>
            <p>{score}</p>
          </div>
          <div className="col-span-3 m-2 p-2 w-28 bg-[#bbada0] rounded-sm text-white text-center">
            <p className="font-bold">Best</p>
            <p>{bestScore}</p>
          </div>
          <div className="col-span-6 m-2 p-2 w-26 text-center text-white justify-center flex font-bold bg-[#8f7a66]">
            <button>New Game</button>
          </div>
        </div>
      </div>
      <div>
        {rows.map((row) => (
          <div key={row[0]} className="flex justify-center">
            {row.map((id) => (
              <Cell id={id} key={id} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Board;
