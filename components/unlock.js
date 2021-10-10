export default function Unlock({ teacher }) {

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

        const PASSCODE = process.env.NEXT_PUBLIC_PASSCODE;

        const result = await res.json();
        result.passcode.toUpperCase() === PASSCODE
            ? (window.location.href = "/" + teacher + "/gift")
            : alert("Please input the right passcode 👀");
    };
    return (
        <form onSubmit={unlock}>
            <div className="mb-4">
                <label
                    className="block text-gray-700 font-bold mb-2 text-xl"
                    htmlFor="passcode"
                >
                    The 4 letters from the 4 puzzles
                </label>
                <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight border-blue-500 text-center text-xl focus:bg-blue-200 focus:outline-none"
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
    );
}
