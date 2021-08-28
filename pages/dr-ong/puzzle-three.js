import Puzzle from "../components/puzzle";

export default function DrOngThree() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <Puzzle
                teacher={"Dr Ong"}
                puzzleNumber={3}
                title={"Famous Quotes à la Dr Ong"}
                question={"You say these motivational quotes to us, except..."}
                optionOne={
                    "'Success is not final; failure is not fatal: it is the courage to continue that counts.'"
                }
                optionTwo={"'#keeplearning #keepimproving'"}
                optionThree={"'... Habits of Mind ...'"}
                optionFour={"'LEVEL UP!'"}
                correctOption={"optionFour"}
            ></Puzzle>
        </div>
    );
}
