import Puzzle from "../../components/puzzle";

export default function MrIqbalFour() {
    return (
        <Puzzle
            teacher={"Mr Iqbal"}
            puzzleNumber={4}
            title={"Joke for LOLs"}
            question={"What do badminton players say to the shuttlecock?"}
            optionOne={"WHY CAN'T YOU JUST LAND ON THE OTHER SIDE AHHHH?!?!"}
            optionTwo={"You will fly till your last feather..."}
            optionThree={
                "This racket is over! You're not flying back and forth anymore!"
            }
            optionFour={"Time to abuse the heck out of you!"}
            correctOption={"optionThree"}
        ></Puzzle>
    );
}
