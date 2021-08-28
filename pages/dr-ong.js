import Head from "next/head";
import Unlock from "./components/unlock";

export default function DrOng() {
    const unlock = async (event) => {
        event.preventDefault();

        const res = await fetch("/api/unlock", {
            body: JSON.stringify({
                passcode: event.target.passcode.value,
            }),
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
        });

        // I was too lazy to use environment variables 😂
        const PASSCODE = "CHER";

        const result = await res.json();
        result.passcode === PASSCODE
            ? (window.location.href = "/dr-ong/gift")
            : alert("Please input the right passcode 👀");
    };
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-10">
            <Head>
                <title>Happy Teachers' Day, Dr Ong</title>
                <meta name="description" content="Coded with ❤️ by Nyx" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex flex-col items-center justify-center w-9/12 flex-1 text-center">
                <h1 className="font-bold text-5xl md:text-6xl">
                    Welcome, Dr Ong!
                </h1>

                <br></br>

                <p className="mt-3 md:text-xl text-base">
                    Collect 1 letter from each of the 4 puzzles to unlock the
                    ultimate gift!
                </p>

                <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
                    <a
                        href="/dr-ong/puzzle-one"
                        className="p-6 mt-6 border w-72 md:w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
                    >
                        <h3 className="font-bold text-center text-lg md:text-2xl">
                            Puzzle 1️⃣ &rarr;
                        </h3>
                        <p className="mt-4 md:text-xl text-base">
                            Solve this Math joke and get your first letter!
                        </p>
                    </a>

                    <a
                        href="/dr-ong/puzzle-two"
                        className="p-6 mt-6 border w-72 md:w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
                    >
                        <h3 className="font-bold text-center text-lg md:text-2xl">
                            Puzzle 2️⃣ &rarr;
                        </h3>
                        <p className="mt-4 md:text-xl text-base">
                            Solve this trivia question and get your second
                            letter!
                        </p>
                    </a>

                    <a
                        href="/dr-ong/puzzle-three"
                        className="p-6 mt-6 border w-72 md:w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
                    >
                        <h3 className="font-bold text-center text-lg md:text-2xl">
                            Puzzle 3️⃣ &rarr;
                        </h3>
                        <p className="mt-4 md:text-xl text-base">
                            Identify your famous quote and get your third
                            letter!
                        </p>
                    </a>

                    <a
                        href="/dr-ong/puzzle-four"
                        className="p-6 mt-6 border w-72 md:w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
                    >
                        <h3 className="font-bold text-center text-lg md:text-2xl">
                            Puzzle 4️⃣ &rarr;
                        </h3>
                        <p className="mt-4 md:text-xl text-base">
                            Solve this other Math joke and get your fourth
                            letter!
                        </p>
                    </a>
                </div>

                <br></br>
                <br></br>

                <Unlock teacher="dr-ong"></Unlock>
            </main>
        </div>
    );
}
