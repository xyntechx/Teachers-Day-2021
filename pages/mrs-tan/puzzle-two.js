import Puzzle from "../../components/puzzle";

export default function MrsTanTwo() {
    return (
        <Puzzle
            teacher={"Mrs Tan"}
            puzzleNumber={2}
            title={"Joke for LOLs"}
            question={"What is a PW teacher's favourite part about cooking?"}
            optionOne={"Roasting 🔥"}
            optionTwo={"Chopping 🔪"}
            optionThree={"Peeling 🍌"}
            optionFour={"Steaming ♨️"}
            correctOption={"optionThree"}
        ></Puzzle>
    );
}
