import Head from "next/head";

export default function Puzzle({
    teacher,
    puzzleNumber,
    title,
    question,
    optionOne,
    optionTwo,
    optionThree,
    optionFour,
    correctOption,
}) {

    const submitAnswer = async (event) => {
        event.preventDefault();
        var letter;

        if (puzzleNumber === 1) {
            letter = "C";
        } else if (puzzleNumber === 2) {
            letter = "H";
        } else if (puzzleNumber === 3) {
            letter = "E";
        } else if (puzzleNumber === 4) {
            letter = "R";
        }

        event.target.id === correctOption
            ? alert("✅ That's correct! Remember this letter: " + letter)
            : alert("❌ Oops! Try again!");
    };

    return (
        <div className="flex flex-col items-center justify-center min-w-full min-h-screen py-10">
            <Head>
                <title>
                    {teacher} | Puzzle {puzzleNumber}
                </title>
                <meta name="description" content="Coded with ❤️ by Nyx" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="flex flex-col items-center justify-center w-9/12 flex-1 text-center">
                <h1 className="font-bold text-5xl md:text-6xl">{title}</h1>

                <br></br>

                <p className="mt-3 md:text-lg text-base">{question}</p>

                <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
                    <button
                        id="optionOne"
                        onClick={submitAnswer}
                        className="p-6 mt-6 border border-red-600 w-72 md:w-96 rounded-xl hover:bg-red-600 hover:bg-opacity-70 focus:bg-red-600 focus:bg-opacity-70"
                    >
                        <h3
                            id="optionOne"
                            className="font-bold text-center text-lg md:text-2xl"
                        >
                            A
                        </h3>
                        <p id="optionOne" className="mt-4 md:text-lg text-base">
                            {optionOne}
                        </p>
                    </button>

                    <button
                        id="optionTwo"
                        onClick={submitAnswer}
                        className="p-6 mt-6 border border-green-600 w-72 md:w-96 rounded-xl hover:bg-green-600 hover:bg-opacity-70 focus:bg-green-600 focus:bg-opacity-70"
                    >
                        <h3
                            id="optionTwo"
                            className="font-bold text-center text-lg md:text-2xl"
                        >
                            B
                        </h3>
                        <p id="optionTwo" className="mt-4 md:text-lg text-base">
                            {optionTwo}
                        </p>
                    </button>

                    <button
                        id="optionThree"
                        onClick={submitAnswer}
                        className="p-6 mt-6 border border-blue-600 w-72 md:w-96 rounded-xl hover:bg-blue-600 hover:bg-opacity-70 focus:bg-blue-600 focus:bg-opacity-70"
                    >
                        <h3
                            id="optionThree"
                            className="font-bold text-center text-lg md:text-2xl"
                        >
                            C
                        </h3>
                        <p
                            id="optionThree"
                            className="mt-4 md:text-lg text-base"
                        >
                            {optionThree}
                        </p>
                    </button>

                    <button
                        id="optionFour"
                        onClick={submitAnswer}
                        className="p-6 mt-6 border border-yellow-400 w-72 md:w-96 rounded-xl hover:bg-yellow-400 hover:bg-opacity-70 focus:bg-yellow-400 focus:bg-opacity-70"
                    >
                        <h3
                            id="optionFour"
                            className="font-bold text-center text-lg md:text-2xl"
                        >
                            D
                        </h3>
                        <p
                            id="optionFour"
                            className="mt-4 md:text-lg text-base"
                        >
                            {optionFour}
                        </p>
                    </button>
                </div>

                <br></br>
                <br></br>

                <a
                    href={"/" + teacher.split(" ").join("-").toLowerCase()}
                    className="p-6 mt-6 text-center border w-72 md:w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
                >
                    <h3 className="font-bold text-lg md:text-2xl">
                        &larr; Back
                    </h3>
                </a>
            </main>
        </div>
    );
}
