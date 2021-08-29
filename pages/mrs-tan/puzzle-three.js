import Puzzle from "../components/puzzle";

export default function MrsTanThree() {
    return (
        <Puzzle
            teacher={"Mrs Tan"}
            puzzleNumber={3}
            title={"Spot the Mistake"}
            question={
                "Which of the following inline citations does not conform to APA standards?"
            }
            optionOne={"(Kurohi 2020)"}
            optionTwo={"(Media Literacy Council, n.d)"}
            optionThree={"(Zwaan, Lee, Liu, & Chardon, 2017)"}
            optionFour={
                "(Klassen, Borleis, Brennan, Reid, McCaffrey, & Lim, 2018)"
            }
            correctOption={"optionOne"}
        ></Puzzle>
    );
}
