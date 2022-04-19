import './MainBoard.css';
import { BoardItem } from './BoardItem';
import { useCallback, useEffect, useRef, useState } from 'react';
import { e_BoardItem as BoardName } from './enum';

const boardItems = [{ name: BoardName.START, color: "#0080003b" }, { name: BoardName.STOP, color: "#ffb80063" }, { name: BoardName.CONTINUE, color: "#0036d54a" }]

export const MainBoard = () => {

  const [tasksList, setTasksList] = useState([
  { id: 1, title: "Task 1", votes: 8, displayAtBoard: BoardName.START },
  { id: 2, title: "Task 2", votes: 44, displayAtBoard: BoardName.START },
  { id: 3, title: "Task 3", votes: 13, displayAtBoard: BoardName.STOP },
  { id: 4, title: "Task 4", votes: 111, displayAtBoard: BoardName.CONTINUE }]);

  const addCardToStartBoard = (itemId, fromBoardName, toBoardName) => {
    console.log(itemId, " ", fromBoardName, " ", toBoardName);

      let newArr = [...tasksList];
      const index = tasksList.findIndex(x => x.id === itemId);
      newArr[index].displayAtBoard = toBoardName; 

      setTasksList(newArr);
      
  };

  return (
    <div className="container" >
      {boardItems.map((board, i) => {
        return <BoardItem key={i} id={board.name} name={board.name} color={board.color} taskList={tasksList} addCardToStartBoard={addCardToStartBoard} />
      })}
    </div>
  );
}

/*
    if (fromBoardName === BoardName.STOP) {
      let task = stopTasks.filter(x => x.id === itemId);
      setStopTasks(stopTasks.filter(x => x.id !== itemId));

      if (toBoardName === BoardName.START && task) {
        setStartTasks([task[0], ...startTasks]);
      }
      if (toBoardName === BoardName.CONTINUE && task) {
        setContTasks([task[0], ...contTasks]);
      }
    }

    if (fromBoardName === BoardName.CONTINUE) {
      let task = contTasks.filter(x => x.id === itemId);
      setContTasks(contTasks.filter(x => x.id !== itemId));
      
      if (toBoardName === BoardName.START && task) {
        setStartTasks([task[0], ...startTasks]);
      }
      if (toBoardName === BoardName.STOP && task) {
        setStopTasks([task[0], ...stopTasks]);
      }
    }*/