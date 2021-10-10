import Puzzle from "../../components/puzzle";

export default function MrIqbalOne() {
    return (
        <Puzzle
            teacher={"Mr Iqbal"}
            puzzleNumber={1}
            title={"Trivia Question #1"}
            question={"Have you ever bought the class Milo?"}
            optionOne={"I don't know 👀"}
            optionTwo={"Nah 👎"}
            optionThree={"Yeah, I buy Milo for every lesson 🙌🏼"}
            optionFour={"Yeah, for Ulti 💪"}
            correctOption={"optionFour"}
        ></Puzzle>
    );
}
