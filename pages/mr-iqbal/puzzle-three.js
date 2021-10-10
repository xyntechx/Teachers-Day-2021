import Puzzle from "../../components/puzzle";

export default function MrIqbalThree() {
    return (
        <Puzzle
            teacher={"Mr Iqbal"}
            puzzleNumber={3}
            title={"The Sports We've Played"}
            question={"Which two sports have we played with you?"}
            optionOne={"Badminton and Table Tennis"}
            optionTwo={"Badminton and Ultimate Frisbee"}
            optionThree={"Ultimate Frisbee and Basketball"}
            optionFour={"Basketball and Volleyball"}
            correctOption={"optionTwo"}
        ></Puzzle>
    );
}
