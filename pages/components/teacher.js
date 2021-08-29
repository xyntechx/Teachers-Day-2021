import Head from "next/head";
import Unlock from "../components/unlock";

export default function Teacher({
    teacher,
    puzzleOne,
    puzzleTwo,
    puzzleThree,
    puzzleFour,
}) {
    const redirect = async (event) => {
        event.preventDefault();
        window.location.href =
            "/" +
            teacher.split(" ").join("-").toLowerCase() +
            "/puzzle-" +
            event.target.id;
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-10">
            <Head>
                <title>Happy Teachers' Day, {teacher}</title>
                <meta name="description" content="Coded with ❤️ by Nyx" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex flex-col items-center justify-center w-9/12 flex-1 text-center">
                <h1 className="font-bold text-5xl md:text-6xl">
                    Welcome, {teacher}!
                </h1>

                <br></br>

                <p className="mt-3 md:text-xl text-base">
                    Collect 1 letter from each of the 4 puzzles to unlock the
                    ultimate gift!
                </p>

                <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
                    <a
                        id="one"
                        onClick={redirect}
                        className="p-6 mt-6 border w-72 md:w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
                    >
                        <h3
                            id="one"
                            onClick={redirect}
                            className="font-bold text-center text-lg md:text-2xl"
                        >
                            Puzzle 1️⃣ &rarr;
                        </h3>
                        <p
                            id="one"
                            onClick={redirect}
                            className="mt-4 md:text-xl text-base"
                        >
                            {puzzleOne}
                        </p>
                    </a>

                    <a
                        id="two"
                        onClick={redirect}
                        className="p-6 mt-6 border w-72 md:w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
                    >
                        <h3
                            id="two"
                            onClick={redirect}
                            className="font-bold text-center text-lg md:text-2xl"
                        >
                            Puzzle 2️⃣ &rarr;
                        </h3>
                        <p
                            id="two"
                            onClick={redirect}
                            className="mt-4 md:text-xl text-base"
                        >
                            {puzzleTwo}
                        </p>
                    </a>

                    <a
                        id="three"
                        onClick={redirect}
                        className="p-6 mt-6 border w-72 md:w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
                    >
                        <h3
                            id="three"
                            onClick={redirect}
                            className="font-bold text-center text-lg md:text-2xl"
                        >
                            Puzzle 3️⃣ &rarr;
                        </h3>
                        <p
                            id="three"
                            onClick={redirect}
                            className="mt-4 md:text-xl text-base"
                        >
                            {puzzleThree}
                        </p>
                    </a>

                    <a
                        id="four"
                        onClick={redirect}
                        className="p-6 mt-6 border w-72 md:w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
                    >
                        <h3
                            id="four"
                            onClick={redirect}
                            className="font-bold text-center text-lg md:text-2xl"
                        >
                            Puzzle 4️⃣ &rarr;
                        </h3>
                        <p
                            id="four"
                            onClick={redirect}
                            className="mt-4 md:text-xl text-base"
                        >
                            {puzzleFour}
                        </p>
                    </a>
                </div>

                <br></br>
                <br></br>

                <Unlock
                    teacher={teacher.split(" ").join("-").toLowerCase()}
                ></Unlock>
            </main>
        </div>
    );
}
