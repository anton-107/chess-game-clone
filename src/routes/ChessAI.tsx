import { Color, swapColor } from "@aakashkcx/chess-engine";
import { useEffect, useState } from "react";

import { BackButton } from "../components/BackButton";
import { ChessBoard } from "../components/ChessBoard";
import { useChessGame } from "../hooks/useChessGame";

import styles from "./ChessAI.module.css";
import { customScore } from "../logic/custom-score";
import { MoveCounter } from "../components/MovesCounter";

const TIME_DELAY_MS = 5;

export function ChessAI() {
  const {
    board,
    activeColor,
    moves,
    ply,
    previous,
    makeMove,
    takeBack,
    makeAIMove,
  } = useChessGame();
  
  const MAX_MOVES = -1;

  const [viewColor, setViewColor] = useState(Color.White);

  const [playerColor] = useState(Color.White);

  const [timeMS] = useState(200);

  // state for white and black score:
  const [whiteScore, setWhiteScore] = useState(0);
  const [blackScore, setBlackScore] = useState(0);

  // state for moves left counter:
  const [movesLeft, setMovesLeft] = useState(MAX_MOVES);
  const [movesMade, setMovesMade] = useState(0);

  useEffect(() => {
    // make ai move
    if (activeColor !== playerColor) {
      setTimeout(makeAIMove, TIME_DELAY_MS, timeMS);
    } else {
      // calculate score
      const score = customScore(board);
      setWhiteScore(score.white);
      setBlackScore(score.black);

      // calculate moves limit:
      const movesMade = ply / 2;
      setMovesMade(movesMade)
      setMovesLeft(MAX_MOVES - movesMade);
      // finish the game:
      if (MAX_MOVES !== -1 && movesMade >= MAX_MOVES) {
        moves.splice(0);
      }
    }
  }, [activeColor]);

  return (
    <>
      <MoveCounter movesLeft={movesLeft} movesMade={movesMade} />
      <div className={styles.chessAI}>
        <div className={styles.fen}>
        Custom score: white: {whiteScore}, black: {blackScore}
        </div>
        <ChessBoard
          board={board}
          viewColor={viewColor}
          activeColor={playerColor}
          moves={moves}
          previous={previous}
          makeMove={makeMove}
        />
        <div className={styles.controls}>
          <div className={styles.color}>
            {activeColor === Color.White ? "White" : "Black"}
            {activeColor !== playerColor && " (AI)"}
          </div>
          <button onClick={() => setViewColor(swapColor(viewColor))}>
            Flip Board
          </button>
          <button onClick={() => takeBack(true)} disabled={ply < 2}>
            Take Back
          </button>
        </div>
      </div>
    </>
  );
}
