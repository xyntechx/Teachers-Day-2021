import Puzzle from "../components/puzzle";

export default function MsLinTwo() {
    return (
        <Puzzle
            teacher={"Ms Lin"}
            puzzleNumber={2}
            title={"Trivia Question #2"}
            question={"Why are we noisy in class?"}
            optionOne={"A M A N"}
            optionTwo={"'Can I not write the statements?'"}
            optionThree={"🤣 🤣 🤣 🤣 🤣"}
            optionFour={"All 3 options"}
            correctOption={"optionFour"}
        ></Puzzle>
    );
}
