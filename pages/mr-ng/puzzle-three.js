import Puzzle from "../../components/puzzle";

export default function MrNgThree() {
    return (
        <Puzzle
            teacher={"Mr Ng"}
            puzzleNumber={3}
            title={"Trivia Question #2"}
            question={"Which of the following is true?"}
            optionOne={"We know you meant #MoleRatioEqualsVolumeRatio 🤫"}
            optionTwo={"We often spend Friday lessons at B56"}
            optionThree={"We hate chemistry 🤬"}
            optionFour={
                "You still owe us x minutes for ending some lessons early 👀"
            }
            correctOption={"optionFour"}
        ></Puzzle>
    );
}
