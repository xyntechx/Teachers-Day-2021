import Puzzle from "../components/puzzle";

export default function MrsTanFour() {
    return (
        <Puzzle
            teacher={"Mrs Tan"}
            puzzleNumber={4}
            title={"Fun Fact"}
            question={"What does Aquila mean?"}
            optionOne={"Eagle, in Greek"}
            optionTwo={"Eagle, in Latin"}
            optionThree={"Dove, in Greek"}
            optionFour={"Dove, in Latin"}
            correctOption={"optionTwo"}
        ></Puzzle>
    );
}
