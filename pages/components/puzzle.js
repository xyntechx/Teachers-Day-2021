import Head from "next/head";

export default function Puzzle({
    teacher,
    puzzleNumber,
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
            ? alert("✅ That's correct! Here's your letter: " + letter)
            : alert("❌ Oops! Try again!");
    };

    return (
        <div className="flex flex-col items-center justify-center min-w-max py-20">
            <Head>
                <title>
                    {teacher} | Puzzle {puzzleNumber}
                </title>
                <meta name="description" content="Coded with ❤️ by Nyx" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                <h1 className="text-6xl font-bold">Puzzle {puzzleNumber}</h1>

                <p className="mt-3 text-2xl">{question}</p>

                <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
                    <button
                        id="optionOne"
                        onClick={submitAnswer}
                        className="p-6 mt-6 text-left border border-red-600 w-96 rounded-xl hover:bg-red-600 hover:bg-opacity-70 focus:bg-red-600 focus:bg-opacity-70"
                    >
                        <h3
                            id="optionOne"
                            className="text-2xl font-bold text-center"
                        >
                            A
                        </h3>
                        <p id="optionOne" className="mt-4 text-xl">
                            {optionOne}
                        </p>
                    </button>

                    <button
                        id="optionTwo"
                        onClick={submitAnswer}
                        className="p-6 mt-6 text-left border border-green-600 w-96 rounded-xl hover:bg-green-600 hover:bg-opacity-70 focus:bg-green-600 focus:bg-opacity-70"
                    >
                        <h3
                            id="optionTwo"
                            className="text-2xl font-bold text-center"
                        >
                            B
                        </h3>
                        <p id="optionTwo" className="mt-4 text-xl">
                            {optionTwo}
                        </p>
                    </button>

                    <button
                        id="optionThree"
                        onClick={submitAnswer}
                        className="p-6 mt-6 text-left border border-blue-600 w-96 rounded-xl hover:bg-blue-600 hover:bg-opacity-70 focus:bg-blue-600 focus:bg-opacity-70"
                    >
                        <h3
                            id="optionThree"
                            className="text-2xl font-bold text-center"
                        >
                            C
                        </h3>
                        <p id="optionThree" className="mt-4 text-xl">
                            {optionThree}
                        </p>
                    </button>

                    <button
                        id="optionFour"
                        onClick={submitAnswer}
                        className="p-6 mt-6 text-left border border-yellow-400 w-96 rounded-xl hover:bg-yellow-400 hover:bg-opacity-70 focus:bg-yellow-400 focus:bg-opacity-70"
                    >
                        <h3
                            id="optionFour"
                            className="text-2xl font-bold text-center"
                        >
                            D
                        </h3>
                        <p id="optionFour" className="mt-4 text-xl">
                            {optionFour}
                        </p>
                    </button>
                </div>
            </main>
        </div>
    );
}
