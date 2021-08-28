import Puzzle from "../components/puzzle";

export default function DrOngFour() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <Puzzle
                teacher={"Dr Ong"}
                puzzleNumber={4}
                title={"Math Joke #2"}
                question={"Why is the Math book sad?"}
                optionOne={"Because it has so many problems..."}
                optionTwo={"Math is beautiful and thus it cannot be sad!"}
                optionThree={"Because it's not 'acute' book anymore 👈😎👈"}
                optionFour={"Because it has to draw reciprocal functions 😢"}
                correctOption={"optionOne"}
            ></Puzzle>
        </div>
    );
}
