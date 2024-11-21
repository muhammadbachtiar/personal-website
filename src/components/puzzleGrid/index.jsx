import PuzzlePiece from "../../atoms/puzzlePiece";

const PuzzleGrid = ({ pieces, onMovePiece }) => {
  
    return (
      <div className="grid grid-cols-3">
        {pieces.map((piece) => (
          <PuzzlePiece
            key={piece.id}
            id={piece.id}
            image={piece.image}
            movePiece={onMovePiece}
          />
        ))}
      </div>
    );
  };
  
  export default PuzzleGrid;