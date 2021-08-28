import Head from "next/head";

export default function Home() {
    const login = async (event) => {
        event.preventDefault();

        const res = await fetch("/api/login", {
            body: JSON.stringify({
                loginid: event.target.loginid.value,
            }),
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
        });

        // If you are reading this, I would like to thank you for taking the time to view the code for the website!
        // However, please do NOT use the Login IDs which are not yours!
        // I was too lazy to use environment variables 😂
        const ID_TEACHERS = {
            458585: "dr-ong",
            892002: "mr-wong",
            172391: "mr-ng",
            374716: "ms-lin",
            339540: "ms-avadhani",
            675202: "mrs-tan",
            144588: "ms-leong",
            466877: "mr-iqbal",
            778037: "cikgu-malek",
        };

        const IDS = Object.keys(ID_TEACHERS);

        const result = await res.json();
        IDS.includes(result.loginid)
            ? (window.location.href = "/" + ID_TEACHERS[result.loginid])
            : alert("Please input a valid Login ID 👀");
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <Head>
                <title>Happy Teachers' Day</title>
                <meta name="description" content="Coded with ❤️ by Nyx" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                <h1 className="text-6xl font-bold">Happy Teachers' Day 🎉</h1>

                <p className="mt-3 text-2xl">Here's my gift to you 😊</p>

                <br></br>
                <br></br>

                <form onSubmit={login}>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 font-bold mb-2 text-xl"
                            htmlFor="loginid"
                        >
                            Login ID
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight border-blue-500 text-center text-xl focus:bg-blue-200 focus:outline-none"
                            name="loginid"
                            id="loginid"
                            type="text"
                            placeholder="******"
                            required
                        ></input>
                    </div>
                    <div className="flex items-center justify-center">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Login
                        </button>
                    </div>
                </form>

                <br></br>
                <br></br>

                <p className="mt-3 text-xl">
                    Check out the code for this website (by yours truly){" "}
                    <a
                        className="text-blue-600"
                        href="https://github.com/xyntechx/Teachers-Day-2021"
                    >
                        here
                    </a>
                    !
                </p>
            </main>
        </div>
    );
}
