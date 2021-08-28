import Puzzle from "../components/puzzle";

export default function DrOngOne() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <Puzzle
                teacher={"Dr Ong"}
                puzzleNumber={3}
                question={"interesting"}
                optionOne={"opt1"}
                optionTwo={"opt2"}
                optionThree={"opt3"}
                optionFour={"opt4"}
            ></Puzzle>
        </div>
    )
}