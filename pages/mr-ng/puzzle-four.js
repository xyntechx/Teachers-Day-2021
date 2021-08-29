import Puzzle from "../components/puzzle";

export default function MrNgFour() {
    return (
        <Puzzle
            teacher={"Mr Ng"}
            puzzleNumber={4}
            title={"Our Inside Joke"}
            question={
                "You say these often (and we love it, no sarcasm 😜), except ..."
            }
            optionOne={"... for YOUR level ..."}
            optionTwo={"You know, some students ... (proceeds to rant)"}
            optionThree={"6G is the worst class 😒"}
            optionFour={"Mr Ng isn't too fast right?"}
            correctOption={"optionThree"}
        ></Puzzle>
    );
}
