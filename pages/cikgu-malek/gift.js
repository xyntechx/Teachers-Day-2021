import Head from "next/head";

export default function CikguMalekGift() {
    return (
        <div className="flex flex-col items-center justify-center min-w-full min-h-screen py-10">
            <Head>
                <title>Selamat Hari Guru, Cikgu Malek</title>
                <meta name="description" content="Coded with ❤️ by Nyx" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="flex flex-col items-center justify-center w-9/12 flex-1 text-center">
                <h1 className="font-bold text-5xl md:text-6xl">
                    Syabas, Cikgu Malek 🎉
                </h1>

                <br></br>

                <p className="mt-3 md:text-lg text-base">
                    Cikgu telah mendapatkan hadiah utama lelaman web ini!
                </p>

                <br></br>

                <video className="w-96 md:w-1/2" controls>
                    <source src="/cikgu_malek.mov" />
                </video>

                <br></br>
                <br></br>

                <a
                    href="/cikgu-malek"
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
