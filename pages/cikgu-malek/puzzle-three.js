import Puzzle from "../../components/puzzle";

export default function CikguMalekThree() {
    return (
        <Puzzle
            teacher={"Cikgu Malek"}
            puzzleNumber={3}
            title={"Peribahasa #3"}
            question={
                "Kalau tidak ada yang baik sekali, yang kurang baik pun berguna juga"
            }
            optionOne={"Tiada rotan akar berguna"}
            optionTwo={"Tangan mencencang bahu memikul"}
            optionThree={"Ringan tulang berat perut"}
            optionFour={"Ditatang bagai minyak yang penuh"}
            correctOption={"optionOne"}
        ></Puzzle>
    );
}
