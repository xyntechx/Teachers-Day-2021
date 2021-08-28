import Head from "next/head";
import Unlock from "./components/unlock-malay";

export default function CikguMalek() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-10">
            <Head>
                <title>Selamat Hari Guru, Cikgu Malek</title>
                <meta name="description" content="Coded with ❤️ by Nyx" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex flex-col items-center justify-center w-9/12 flex-1 text-center">
                <h1 className="font-bold text-5xl md:text-6xl">
                    Salam Sejahtera, Cikgu Malek!
                </h1>

                <br></br>

                <p className="mt-3 md:text-xl text-base">
                    Kumpulkan satu huruf daripada setiap kuiz untuk mendapatkan
                    hadiah utama!
                </p>

                <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
                    <a
                        href="/cikgu-malek/puzzle-one"
                        className="p-6 mt-6 border w-72 md:w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
                    >
                        <h3 className="font-bold text-center text-lg md:text-2xl">
                            Kuiz 1️⃣ &rarr;
                        </h3>
                        <p className="mt-4 md:text-xl text-base">
                            Pilih peribahasa yang tepat untuk mendapatkan huruf
                            yang pertama!
                        </p>
                    </a>

                    <a
                        href="/cikgu-malek/puzzle-two"
                        className="p-6 mt-6 border w-72 md:w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
                    >
                        <h3 className="font-bold text-center text-lg md:text-2xl">
                            Kuiz 2️⃣ &rarr;
                        </h3>
                        <p className="mt-4 md:text-xl text-base">
                            Pilih peribahasa yang tepat untuk mendapatkan huruf
                            yang kedua!
                        </p>
                    </a>

                    <a
                        href="/cikgu-malek/puzzle-three"
                        className="p-6 mt-6 border w-72 md:w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
                    >
                        <h3 className="font-bold text-center text-lg md:text-2xl">
                            Kuiz 3️⃣ &rarr;
                        </h3>
                        <p className="mt-4 md:text-xl text-base">
                            Pilih peribahasa yang tepat untuk mendapatkan huruf
                            yang ketiga!
                        </p>
                    </a>

                    <a
                        href="/cikgu-malek/puzzle-four"
                        className="p-6 mt-6 border w-72 md:w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
                    >
                        <h3 className="font-bold text-center text-lg md:text-2xl">
                            Kuiz 4️⃣ &rarr;
                        </h3>
                        <p className="mt-4 md:text-xl text-base">
                            Pilih peribahasa yang tepat untuk mendapatkan huruf
                            yang keempat!
                        </p>
                    </a>
                </div>

                <br></br>
                <br></br>

                <Unlock teacher="cikgu-malek"></Unlock>
            </main>
        </div>
    );
}
