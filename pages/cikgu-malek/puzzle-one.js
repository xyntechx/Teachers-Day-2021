import Puzzle from "../../components/puzzle";

export default function CikguMalekOne() {
    return (
        <Puzzle
            teacher={"Cikgu Malek"}
            puzzleNumber={1}
            title={"Peribahasa #1"}
            question={"Mendengar nasihat yang baik"}
            optionOne={"Bagai hujan jatuh ke pasir"}
            optionTwo={"Bagai menelan mestika embun"}
            optionThree={"Garam jatuh ke air"}
            optionFour={"Jauhari juga yang mengenal manikam"}
            correctOption={"optionTwo"}
        ></Puzzle>
    );
}
