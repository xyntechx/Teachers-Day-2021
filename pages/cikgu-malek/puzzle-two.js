import Puzzle from "../components/puzzle";

export default function CikguMalekTwo() {
    return (
        <Puzzle
            teacher={"Cikgu Malek"}
            puzzleNumber={2}
            title={"Peribahasa #2"}
            question={
                "Seseorang anak itu akan menurut budi dan perangai ibu bapanya"
            }
            optionOne={"Sebab buah dikenal pohonnya"}
            optionTwo={"Seperti anak ayam kehilangan ibu"}
            optionThree={"Baik membawa resmi ayam betina"}
            optionFour={"Bagaimana acuan begitulah kuihnya"}
            correctOption={"optionFour"}
        ></Puzzle>
    );
}
