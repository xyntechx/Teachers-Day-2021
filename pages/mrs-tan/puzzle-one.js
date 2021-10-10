import Puzzle from "../../components/puzzle";

export default function MrsTanOne() {
    return (
        <Puzzle
            teacher={"Mrs Tan"}
            puzzleNumber={1}
            title={"Trivia Question"}
            question={
                "What are the causes of fake news spread according to Vox Populi?"
            }
            optionOne={"Misperception That Popularity Implies Credibility"}
            optionTwo={
                "Inadequate Equipping of Sufficient Media Literacy Skills"
            }
            optionThree={"Overconfidence"}
            optionFour={"All 3 options"}
            correctOption={"optionFour"}
        ></Puzzle>
    );
}
