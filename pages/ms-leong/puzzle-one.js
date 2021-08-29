import Puzzle from "../components/puzzle";

export default function MsLeongOne() {
    return (
        <Puzzle
            teacher={"Ms Leong"}
            puzzleNumber={1}
            title={"Trivia Question #1"}
            question={"At which two places have we had PE?"}
            optionOne={"The Cages and the Basketball Court"}
            optionTwo={"The ISH and the Basketball Court"}
            optionThree={"The Cages and the ISH"}
            optionFour={"The Cages and the Field"}
            correctOption={"optionOne"}
        ></Puzzle>
    );
}
