import { useDrag, useDrop } from "react-dnd";
const PuzzlePiece = ({ id, image, movePiece }) => {
    
    const [, dragRef] = useDrag({
      type: "piece",
      item: { id },
    });
  
    const [, dropRef] = useDrop({
      accept: "piece",
      drop: (item) => movePiece(item.id, id),
    });
  
    return (
      <div
        ref={(node) => dragRef(dropRef(node))}
        className="w-24 h-24 border border-gray-500"
      >
        <img src={image} alt={`Piece ${id}`} className="w-full h-full object-cover" />
      </div>
    );
  };
  
  export default PuzzlePiece;