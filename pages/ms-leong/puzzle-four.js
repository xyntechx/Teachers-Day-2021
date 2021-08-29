import Puzzle from "../components/puzzle";

export default function MsLeongFour() {
    return (
        <Puzzle
            teacher={"Ms Leong"}
            puzzleNumber={4}
            title={"Joke for LOLs"}
            question={"Why can't volleyball players cross the road?"}
            optionOne={"🤷‍♀️"}
            optionTwo={"Because they forgot to set their alarms!"}
            optionThree={"There were too many bumps!"}
            optionFour={"Because they stepped on some spikes!"}
            correctOption={"optionThree"}
        ></Puzzle>
    );
}
