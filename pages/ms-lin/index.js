import Teacher from "../components/teacher";

export default function MsLin() {
    return (
        <Teacher
            teacher={"Ms Lin"}
            puzzleOne={"Solve this trivia question and get your first letter!"}
            puzzleTwo={
                "Solve this other trivia question and get your second letter!"
            }
            puzzleThree={"Solve this fun fact and get your third letter!"}
            puzzleFour={"Solve this Physics joke and get your fourth letter!"}
        ></Teacher>
    );
}
