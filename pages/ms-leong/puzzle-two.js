import Puzzle from "../../components/puzzle";

export default function MsLeongTwo() {
    return (
        <Puzzle
            teacher={"Ms Leong"}
            puzzleNumber={2}
            title={"Trivia Question #2"}
            question={"6G kiddos are part of the following CCAs, except ..."}
            optionOne={"Computer Science Society"}
            optionTwo={"Volleyball"}
            optionThree={"Basketball"}
            optionFour={"Netball"}
            correctOption={"optionThree"}
        ></Puzzle>
    );
}
