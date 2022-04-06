import { useDrag } from 'react-dnd';
import { useEffect, useState } from "react";
import { ItemTypes } from "../constants/ItemTypes";

export const Card = (props) => {
    const { id, data, color, boardName } = props;
    const [voteCount, setVoteCount] = useState(0);

    useEffect(() => {
        if (data) {
            setVoteCount(data.votes);
        }
    }, [data]);

    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.CARD,
        item: { id: id, boardName: boardName },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }));

    return (
        <div id={id} ref={drag}
            style={{
                opacity: isDragging ? 0.5 : 1,
                cursor: 'move',
                background: color,
                border: isDragging ? "5px solid black" : "0px"
            }}>
            <div>
                <h3>Title: {data.title}</h3>
                <p>Votes: {voteCount}</p>
            </div>
            <button onClick={() => setVoteCount(voteCount + 1)}> + </button>
            <button onClick={() => setVoteCount(voteCount - 1)} disabled={voteCount === 0}> - </button>
        </div>
    );
}