import Puzzle from "../../components/puzzle";

export default function MsLinOne() {
    return (
        <Puzzle
            teacher={"Ms Lin"}
            puzzleNumber={1}
            title={"Trivia Question #1"}
            question={"We love Physics in general, except for ..."}
            optionOne={"Gravitational Fields"}
            optionTwo={"Superposition"}
            optionThree={"Kinematics"}
            optionFour={"Bruh who are we kidding we love them all 😆"}
            correctOption={"optionFour"}
        ></Puzzle>
    );
}
