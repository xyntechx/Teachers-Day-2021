import Teacher from "../../components/teacher";

export default function DrOng() {
    return (
        <Teacher
            teacher={"Dr Ong"}
            puzzleOne={"Solve this Math joke and get your first letter!"}
            puzzleTwo={"Solve this trivia question and get your second letter!"}
            puzzleThree={
                "Identify your famous quotes and get your third letter!"
            }
            puzzleFour={
                "Solve this other Math joke and get your fourth letter!"
            }
        ></Teacher>
    );
}
