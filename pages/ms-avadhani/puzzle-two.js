import Puzzle from "../components/puzzle";

export default function MsAvadhaniTwo() {
    return (
        <Puzzle
            teacher={"Ms Avadhani"}
            puzzleNumber={2}
            title={"Wow Jokes"}
            question={"My husband said he needed some space so I ..."}
            optionOne={"sent him to Mars 🚀"}
            optionTwo={"went on a diet 🥦"}
            optionThree={"locked him out of the house 🤡"}
            optionFour={"flipped him off 🤬"}
            correctOption={"optionThree"}
        ></Puzzle>
    );
}
