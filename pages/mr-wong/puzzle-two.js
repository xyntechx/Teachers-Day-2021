import Puzzle from "../../components/puzzle";

export default function MrWongTwo() {
    return (
        <Puzzle
            teacher={"Mr Wong"}
            puzzleNumber={2}
            title={"Econs Joke #1"}
            question={"I would tell you an Econs joke, but ..."}
            optionOne={"I'm making subnormal profits."}
            optionTwo={"there isn't enough demand!"}
            optionThree={
                "I don't care about the positive production externalities."
            }
            optionFour={"I'm afraid my competitors will match my strategy..."}
            correctOption={"optionTwo"}
        ></Puzzle>
    );
}
