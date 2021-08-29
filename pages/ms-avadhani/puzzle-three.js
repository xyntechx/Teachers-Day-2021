import Puzzle from "../components/puzzle";

export default function MsAvadhaniThree() {
    return (
        <Puzzle
            teacher={"Ms Avadhani"}
            puzzleNumber={3}
            title={"Wow Another Joke"}
            question={"Why do bees have sticky hair?"}
            optionOne={"Because they use honeycombs 🍯"}
            optionTwo={"Because working hard means sweating a lot 🥵"}
            optionThree={"To get pollen 🌸"}
            optionFour={"They... they don't have hair #PartyPooper🤡"}
            correctOption={"optionOne"}
        ></Puzzle>
    );
}
