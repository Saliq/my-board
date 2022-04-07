import './MainBoard.css';
import { BoardItem } from './BoardItem';
import { useCallback, useEffect, useRef, useState } from 'react';
import { e_BoardItem as BoardName } from './enum';

const boardItems = [{ name: BoardName.START, color: "#0080003b" }, { name: BoardName.STOP, color: "#ffb80063" }, { name: BoardName.CONTINUE, color: "#0036d54a" }]

export const MainBoard = () => {
  const [startTasks, setStartTasks] = useState([{ id: 1, title: "Task 1", votes: 8 }, { id: 2, title: "Task 2", votes: 44 }]);
  const [stopTasks, setStopTasks] = useState([{ id: 3, title: "Task 3", votes: 13 }]);
  const [contTasks, setContTasks] = useState([{ id: 4, title: "Task 4", votes: 111 }]);

  const addCardToStartBoard = useCallback((itemId, fromBoardName, toBoardName) => {
    if (fromBoardName === BoardName.START) {
      let taskToMove = startTasks.filter(x => x.id === itemId);
      let newStartTask = startTasks.filter(x => x.id !== itemId);
      setStartTasks(newStartTask);

      if (toBoardName === BoardName.STOP && taskToMove) {
        setStopTasks(oldTasks => [...oldTasks, taskToMove[0]]);
      }
      if (toBoardName === BoardName.CONTINUE && taskToMove) {
        setContTasks(oldTasks => [...oldTasks, taskToMove[0]]);
      }
    }
  }, [startTasks]);

  const getTaskList = (boardName) => {
    if (boardName === BoardName.START) {
      return startTasks;
    }
    if (boardName === BoardName.STOP) {
      return stopTasks;
    }
    if (boardName === BoardName.CONTINUE) {
      return contTasks;
    }
    return [];
  }

  return (
    <div className="container" >
      {boardItems.map((list, i) => {
        return <BoardItem key={i} id={list.name} name={list.name} color={list.color} taskList={getTaskList(list.name)} addCardToStartBoard={addCardToStartBoard} />
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