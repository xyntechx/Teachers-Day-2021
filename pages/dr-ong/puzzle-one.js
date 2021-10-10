import Puzzle from "../../components/puzzle";

export default function DrOngOne() {
    return (
        <Puzzle
            teacher={"Dr Ong"}
            puzzleNumber={1}
            title={"Math Joke #1"}
            question={
                "One day, π and e were arguing with each other. How did the conversation go?"
            }
            optionOne={"'Get real,' said π. 'Be rational,' said e."}
            optionTwo={
                "They're mathematical constants... they can't talk let alone argue 😂"
            }
            optionThree={
                "'You have such irrational fears,' e exclaimed. 'Oh yeah? You don't scare me!' π retorted."
            }
            optionFour={
                "π and e would never argue because they're the same #3EqualsπAndeSaidEngineers"
            }
            correctOption={"optionThree"}
        ></Puzzle>
    );
}
