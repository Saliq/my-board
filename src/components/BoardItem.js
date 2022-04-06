import { useEffect, useState } from "react";
import { Card } from "./Card";
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../constants/ItemTypes';

export const BoardItem = (props) => {
    const [startBoard, setStartBoard] = useState([]);
    const {name, color, id} = props;

    useEffect(() => {
        if (props.taskList) {
            setStartBoard(props.taskList);
        }
    }, [props.taskList]);


    const [{ isOver }, dropRef] = useDrop(() => ({
        accept: ItemTypes.CARD,
        drop: (item) => props.addCardToStartBoard(item.id, item.boardName, id),
        collect: (monitor) => ({
          isOver: !!monitor.isOver()
        })
      }))

    return (
        <div className="item" style={{ opacity: dropRef ? 1 : 0.5 }} ref={dropRef} >{name}
          {startBoard.map((data, i) => {
            return <Card key={i} id={data.id} boardName={id} data={data} color={color} />;
          })}
        </div>
    );
}