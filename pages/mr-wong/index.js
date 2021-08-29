import Teacher from "../components/teacher";

export default function MrWong() {
    return (
        <Teacher
            teacher={"Mr Wong"}
            puzzleOne={"Solve this trivia question and get your first letter!"}
            puzzleTwo={"Solve this Econs joke and get your second letter!"}
            puzzleThree={
                "Solve this other Econs joke and get your third letter!"
            }
            puzzleFour={"Solve this fun fact and get your fourth letter!"}
        ></Teacher>
    );
}
