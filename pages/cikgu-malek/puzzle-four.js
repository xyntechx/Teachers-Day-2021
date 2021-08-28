import Puzzle from "../components/puzzle";

export default function CikguMalekFour() {
    return (
        <Puzzle
            teacher={"Cikgu Malek"}
            puzzleNumber={4}
            title={"Peribahasa #4"}
            question={
                "Orang besar atau mulia tidak akan hilang martabatnya jika ia merendahkan dirinya sekalipun"
            }
            optionOne={"Jika ular menyusur akar, tidak akan hilang bisanya"}
            optionTwo={"Nasi tak dingin pinggan tak retak"}
            optionThree={"Kuat burung kerana sayap, kuat ketam kerana sepit"}
            optionFour={"Alah bisa tegal biasa"}
            correctOption={"optionOne"}
        ></Puzzle>
    );
}
