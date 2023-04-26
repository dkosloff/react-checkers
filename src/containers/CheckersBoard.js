import React, { useState } from 'react';
import styles from './CheckersBoard.module.css';

function CheckersBoard() {
  const [board, setBoard] = useState(getStartingBoard);

  function getStartingBoard() {
    const board = [];
    for (let i = 0; i < 8; i++) {
      const row = [];

      for (let j = 0; j < 4; j++) {
        let color = i < 3 ? 'r' : i > 4 ? 'b' : '';
        if (i % 2 === 1) {
          row.push('', color);
        } else {
          row.push(color, '');
        }
      }
      board.push(row);
    }
    return board;
  }

  console.log(JSON.stringify(board));

  return (
    <table className={styles.gameBoard}>
        <tbody>
      {board.map((row, idx) => (
        <tr>
          {row.map((piece) => (
            <td>{piece}</td>
          ))}
        </tr>
      ))}
      </tbody>
    </table>
  );
}

export default CheckersBoard;
