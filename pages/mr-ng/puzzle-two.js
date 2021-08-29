import Puzzle from "../components/puzzle";

export default function MrNgTwo() {
    return (
        <Puzzle
            teacher={"Mr Ng"}
            puzzleNumber={2}
            title={"Chem Joke"}
            question={"I wanna make a Chem joke but the best ones ..."}
            optionOne={"Iron"}
            optionTwo={"Francium"}
            optionThree={"Argon"}
            optionFour={"Helium"}
            correctOption={"optionThree"}
        ></Puzzle>
    );
}
