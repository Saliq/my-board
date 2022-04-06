import './MainBoard.css';
import { BoardItem } from './BoardItem';
import { useState } from 'react';
import { e_BoardItem as BoardName } from './enum';

const boardItems = [{ name: BoardName.START, color: "#0080003b" }, { name: BoardName.STOP, color: "#ffb80063" }, { name: BoardName.CONTINUE, color: "#0036d54a" }]

export const MainBoard = () => {
  const [startTasks, setStartTasks] = useState([{ id: 1, title: "Task 1", votes: 8 }, { id: 2, title: "Task 2", votes: 44 }]);
  const [stopTasks, setStopTasks] = useState([{ id: 3, title: "Task 3", votes: 13 }]);
  const [contTasks, setContTasks] = useState([{ id: 4, title: "Task 4", votes: 111 }]);

  const addCardToStartBoard = (itemId, fromBoardName, toBoardName) => {
    if (fromBoardName === BoardName.START) {
      let task = startTasks.filter(x => x.id === itemId);
      setStartTasks(startTasks.filter(x => x.id !== itemId));
      console.log("startTasks", startTasks);
      if (toBoardName === BoardName.STOP && task) {
        setStopTasks([task[0], ...stopTasks]);
      }
      if (toBoardName === BoardName.CONTINUE && task) {
        setContTasks([task[0], ...contTasks]);
      }
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
  };

  const getTaskList = (name) => {
    if (name === "Start") {
      return startTasks;
    }
    if (name === "Stop") {
      return stopTasks;
    }
    if (name === "Continue") {
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