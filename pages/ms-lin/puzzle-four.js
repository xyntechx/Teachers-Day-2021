import Puzzle from "../components/puzzle";

export default function MsLinFour() {
    return (
        <Puzzle
            teacher={"Ms Lin"}
            puzzleNumber={4}
            title={"Physics Joke"}
            question={"What did one photon say to another?"}
            optionOne={"I am sick and tired of your interference!"}
            optionTwo={"Wait... aren't we... waves?"}
            optionThree={
                "Quick! Find a spot to settle! The physicist is coming!"
            }
            optionFour={"LOL Usain Bolt who?"}
            correctOption={"optionOne"}
        ></Puzzle>
    );
}
