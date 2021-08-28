import Head from "next/head";

export default function CikguMalek() {
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
            ? (window.location.href = "/cikgu-malek/gift")
            : alert("Please input the right passcode 👀");
    };
    return (
        <div className="flex flex-col items-center justify-center w-screen h-full py-10">
            <Head>
                <title>Selamat Hari Guru, Cikgu Malek</title>
                <meta name="description" content="Coded with ❤️ by Nyx" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex flex-col items-center justify-center w-9/12 flex-1 text-center">
                <h1 className="font-bold text-3xl md:text-6xl">
                    Salam Sejahtera, Cikgu Malek!
                </h1>

                <br></br>

                <p className="mt-3 md:text-xl text-base">
                    Kumpulkan satu huruf daripada setiap kuiz untuk mendapatkan hadiah utama!
                </p>

                <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
                    <a
                        href="/cikgu-malek/puzzle-one"
                        className="p-6 mt-6  border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
                    >
                        <h3 className="font-bold text-center text-lg md:text-2xl">
                            Kuiz 1️⃣ &rarr;
                        </h3>
                        <p className="mt-4 md:text-xl text-base">
                            {/* TODO */}
                            Solve this Math joke and get your first letter!
                        </p>
                    </a>

                    <a
                        href="/cikgu-malek/puzzle-two"
                        className="p-6 mt-6  border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
                    >
                        <h3 className="font-bold text-center text-lg md:text-2xl">
                            Kuiz 2️⃣ &rarr;
                        </h3>
                        <p className="mt-4 md:text-xl text-base">
                            {/* TODO */}
                            Solve this trivia question and get your second
                            letter!
                        </p>
                    </a>

                    <a
                        href="/cikgu-malek/puzzle-three"
                        className="p-6 mt-6  border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
                    >
                        <h3 className="font-bold text-center text-lg md:text-2xl">
                            Kuiz 3️⃣ &rarr;
                        </h3>
                        <p className="mt-4 md:text-xl text-base">
                            {/* TODO */}
                            Identify your famous quote and get your third
                            letter!
                        </p>
                    </a>

                    <a
                        href="/cikgu-malek/puzzle-four"
                        className="p-6 mt-6  border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
                    >
                        <h3 className="font-bold text-center text-lg md:text-2xl">
                            Kuiz 4️⃣ &rarr;
                        </h3>
                        <p className="mt-4 md:text-xl text-base">
                            {/* TODO */}
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
                            4 huruf daripada 4 kuiz
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
                            Dapatkan Hadiah
                        </button>
                    </div>
                </form>
            </main>
        </div>
    );
}