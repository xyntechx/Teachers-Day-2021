import Teacher from "../../components/teacher";

export default function MrNg() {
    return (
        <Teacher
            teacher={"Mr Ng"}
            puzzleOne={"Solve this trivia question and get your first letter!"}
            puzzleTwo={"Solve this Chem joke and get your second letter!"}
            puzzleThree={
                "Solve this other trivia question and get your third letter!"
            }
            puzzleFour={"Solve this inside joke and get your fourth letter!"}
        ></Teacher>
    );
}
