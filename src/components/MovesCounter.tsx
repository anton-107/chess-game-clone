import styles from "./MovesCounter.module.css";

export function MoveCounter({ movesLeft, movesMade }: { movesLeft: number, movesMade: number }) {
  return (
    <div className={styles.movesCounter}>
      <span>Moves made: {movesMade}</span>
    </div>
  );
}
