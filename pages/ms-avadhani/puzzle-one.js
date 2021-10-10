import Puzzle from "../../components/puzzle";

export default function MsAvadhaniOne() {
    return (
        <Puzzle
            teacher={"Ms Avadhani"}
            puzzleNumber={1}
            title={"Trivia Question"}
            question={
                "We have discussed all of these topics in class, except ..."
            }
            optionOne={"Education for Women"}
            optionTwo={"AI and jobs"}
            optionThree={"Racial Inequality"}
            optionFour={"Climate Change"}
            correctOption={"optionFour"}
        ></Puzzle>
    );
}
