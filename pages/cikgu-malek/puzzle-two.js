import Puzzle from "../components/puzzle";

export default function CikguMalekTwo() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <Puzzle
                teacher={"Cikgu Malek"}
                puzzleNumber={2}
                title={"Quick Trivia"}
                question={
                    "Which one of the following games did we play on our first day as 22S06G?"
                }
                optionOne={"Jeopardy"}
                optionTwo={"Splat"}
                optionThree={"Mafia"}
                optionFour={"Hide and Seek"}
                correctOption={"optionTwo"}
            ></Puzzle>
        </div>
    );
}
