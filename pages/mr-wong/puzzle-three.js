import Puzzle from "../../components/puzzle";

export default function MrWongThree() {
    return (
        <Puzzle
            teacher={"Mr Wong"}
            puzzleNumber={3}
            title={"Econs Joke #2"}
            question={"Why are economists depressed?"}
            optionOne={"Because nothing is ever perfect 😢"}
            optionTwo={"Because everyone makes assumptions about them 😔"}
            optionThree={
                "Because specialising in Econs led to endless amounts of sunk costs 🤦"
            }
            optionFour={"All 3 options"}
            correctOption={"optionFour"}
        ></Puzzle>
    );
}
