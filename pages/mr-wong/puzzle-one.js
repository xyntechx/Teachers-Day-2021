import Puzzle from "../../components/puzzle";

export default function MrWongOne() {
    return (
        <Puzzle
            teacher={"Mr Wong"}
            puzzleNumber={1}
            title={"Trivia Question"}
            question={"What's our favourite part about Econs?"}
            optionOne={"Our dying hands after every test"}
            optionTwo={
                "'OMG OMG WHERE'S THAT PART OF THE EXCERPT I NEED TO QUOTE?!?!' #CaseStudyThings"
            }
            optionThree={"*looks at clock* Yep well I can't finish this 🤡"}
            optionFour={"Everything 😝 (for real)"}
            correctOption={"optionFour"}
        ></Puzzle>
    );
}
