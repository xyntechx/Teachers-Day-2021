import Head from "next/head";

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
        <div className="flex flex-col items-center justify-center w-screen h-full py-10">
            <Head>
                <title>Happy Teachers' Day, Dr Ong</title>
                <meta name="description" content="Coded with ❤️ by Nyx" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex flex-col items-center justify-center w-9/12 flex-1 text-center">
                <h1 className="font-bold text-3xl md:text-6xl">
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
                        className="p-6 mt-6  border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
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
                        className="p-6 mt-6  border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
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
                        className="p-6 mt-6  border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
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
                        className="p-6 mt-6  border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
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

                <form onSubmit={unlock}>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 font-bold mb-2 text-xl"
                            htmlFor="passcode"
                        >
                            The 4 letters from the 4 puzzles
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none border-blue-500 text-center text-xl"
                            name="passcode"
                            id="passcode"
                            type="text"
                            placeholder="XXXX"
                            required
                        ></input>
                    </div>
                    <div className="flex items-center justify-center">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Unlock Ultimate Gift
                        </button>
                    </div>
                </form>
            </main>
        </div>
    );
}
