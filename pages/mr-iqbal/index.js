import Teacher from "../../components/teacher";

export default function MrIqbal() {
    return (
        <Teacher
            teacher={"Mr Iqbal"}
            puzzleOne={"Solve this trivia question and get your first letter!"}
            puzzleTwo={
                "Solve this other trivia question and get your second letter!"
            }
            puzzleThree={
                "Find the correct two sports and get your third letter!"
            }
            puzzleFour={"Solve the joke and get your fourth letter!"}
        ></Teacher>
    );
}
