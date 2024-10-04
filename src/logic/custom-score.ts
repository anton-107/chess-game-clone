import { ColorPiece } from "@aakashkcx/chess-engine";

type CustomScore = {
  white: number;
  black: number;
};

// score weights:
const KING_WEIGHT = 20;
const ROOK_WEIGHT = 5;
const KNIGHT_WEIGHT = 4;
const BISHOP_WEIGHT = 3;
const QUEEN_WEIGHT = 2;
const PAWN_WEIGHT = 1;

export function customScore(board: ColorPiece[]): CustomScore {

    let whiteScore = 0;
    let blackScore = 0;

    board.forEach((piece: ColorPiece, index: number) => {
        // row number: 1-8
        const whiteRow = Math.floor(index / 8) + 1;
        const blackRow = (8 - Math.floor(index / 8));

        switch (piece) {
            case ColorPiece.WhiteKing:
                console.log("[white] king on row", whiteRow);
                whiteScore += Math.max(0, KING_WEIGHT * (whiteRow - 4));
                break;
            case ColorPiece.BlackKing:
                console.log("[black] pawn on row", blackRow);
                blackScore += Math.max(0, KING_WEIGHT * (blackRow - 4));
                break;
            case ColorPiece.WhitePawn:
                console.log("[white] pawn on row", whiteRow);
                whiteScore += Math.max(0, PAWN_WEIGHT * (whiteRow - 4));
                break;
            case ColorPiece.BlackPawn:
                console.log("[black] pawn on row", blackRow);
                blackScore += Math.max(0, PAWN_WEIGHT * (blackRow - 4));
                break;
            case ColorPiece.WhiteRook:
                console.log("[white] rook on row", whiteRow);
                whiteScore += Math.max(0, ROOK_WEIGHT * (whiteRow - 4));
                break;
            case ColorPiece.BlackRook:
                console.log("[black] rook on row", blackRow);
                blackScore += Math.max(0, ROOK_WEIGHT * (blackRow - 4));
                break;
            case ColorPiece.WhiteKnight:
                console.log("[white] knight on row", whiteRow);
                whiteScore += Math.max(0, KNIGHT_WEIGHT * (whiteRow - 4));
                break;
            case ColorPiece.BlackKnight:
                console.log("[black] knight on row", blackRow);
                blackScore += Math.max(0, KNIGHT_WEIGHT * (blackRow - 4));
                break;
            case ColorPiece.WhiteBishop:
                console.log("[white] bishop on row", whiteRow);
                whiteScore += Math.max(0, BISHOP_WEIGHT * (whiteRow - 4));
                break;
            case ColorPiece.BlackBishop:
                console.log("[black] knight on row", blackRow);
                blackScore += Math.max(0, BISHOP_WEIGHT * (blackRow - 4));
                break;
            case ColorPiece.WhiteQueen:
                console.log("[white] bishop on row", whiteRow);
                whiteScore += Math.max(0, QUEEN_WEIGHT * (whiteRow - 4));
                break;
            case ColorPiece.BlackQueen:
                console.log("[black] knight on row", blackRow);
                blackScore += Math.max(0, QUEEN_WEIGHT * (blackRow - 4));
                break;
        }
    });
    return {
        white: whiteScore,
        black: blackScore,
    };
}