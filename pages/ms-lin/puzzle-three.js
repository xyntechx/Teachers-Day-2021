import Puzzle from "../components/puzzle";

export default function MsLinThree() {
    return (
        <Puzzle
            teacher={"Ms Lin"}
            puzzleNumber={3}
            title={"Fun Fact"}
            question={"Find the truth amongst the 3 lies 👀"}
            optionOne={"We don't want Physics extension topics 🚀"}
            optionTwo={"We won't write the statements in our working 🙊"}
            optionThree={
                "We will NOT pay attention for Superposition after Promos 😱"
            }
            optionFour={"We will pass Physics... or at least hope to 🙏"}
            correctOption={"optionFour"}
        ></Puzzle>
    );
}
