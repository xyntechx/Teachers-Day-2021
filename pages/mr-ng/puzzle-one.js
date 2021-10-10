import Puzzle from "../../components/puzzle";

export default function MrNgOne() {
    return (
        <Puzzle
            teacher={"Mr Ng"}
            puzzleNumber={1}
            title={"Trivia Question #1"}
            question={"We love Chem in general, except for ..."}
            optionOne={"Organic Chem"}
            optionTwo={"Physical Chem"}
            optionThree={"Inorganic Chem"}
            optionFour={"Bruh who are we kidding we love them all 😆"}
            correctOption={"optionFour"}
        ></Puzzle>
    );
}
