import { Card } from "./Card";
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../constants/ItemTypes';

export const BoardItem = (props) => {
    const {name, color, id} = props;

    const [{ isOver }, dropRef] = useDrop(() => ({
        accept: ItemTypes.CARD,
        drop: (item) => props.addCardToStartBoard(item.id, item.parentBoardName, id),
        collect: (monitor) => ({
          isOver: !!monitor.isOver()
        })
      }))

    return (
        <div className="item" style={{ opacity: dropRef ? 1 : 0.5 }} ref={dropRef} >{name}
          {props.taskList.map((data, i) => {
            return <Card key={data.id} id={data.id} parentBoardName={id} data={data} color={color} />;
          })}
        </div>
    );
}