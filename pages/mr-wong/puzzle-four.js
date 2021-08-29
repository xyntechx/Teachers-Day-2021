import Puzzle from "../components/puzzle";

export default function MrWongFour() {
    return (
        <Puzzle
            teacher={"Mr Wong"}
            puzzleNumber={4}
            title={"Fun Fact"}
            question={
                "Which one of the following games did we play on our first day as 22S06G?"
            }
            optionOne={"Jeopardy"}
            optionTwo={"Two Truths One Lie"}
            optionThree={"Mafia"}
            optionFour={"Hide and Seek"}
            correctOption={"optionTwo"}
        ></Puzzle>
    );
}
