import Puzzle from "../components/puzzle";

export default function MsAvadhaniFour() {
    return (
        <Puzzle
            teacher={"Ms Avadhani"}
            puzzleNumber={4}
            title={"Fun Fact"}
            question={"We love GP!"}
            optionOne={"YES"}
            optionTwo={"No"}
            optionThree={"Nah"}
            optionFour={"🙅‍♀️"}
            correctOption={"optionOne"}
        ></Puzzle>
    );
}
