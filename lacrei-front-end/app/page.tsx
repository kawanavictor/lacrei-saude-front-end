import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        <section className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
          <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-green-600 mb-4">
                Olá, você está na Lacrei Saúde!
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8">
                Conectamos pessoas LGBTQIAPN+ com profissionais de saúde qualificados, proporcionando experiências de cuidado seguras e inclusivas.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link href="/pacientes" className="bg-green-600 text-white px-6 py-3 rounded-md text-center hover:bg-green-700 transition duration-300">
                  Para pacientes
                </Link>
                <Link href="/profissionais" className="bg-green-600 text-white px-6 py-3 rounded-md text-center hover:bg-green-700 transition duration-300">
                  Para profissionais
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <Image src="https://app-lacrei-saude-4nn3.vercel.app/assets/home-icon-cca9946c.svg" alt="Stethoscope on rainbow background" width={500} height={300} className="rounded-lg shadow-lg" />
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
              Conheça o jeito Lacrei Saúde de cuidar
            </h2>
            <div className="text-center">
              <p className="text-xl text-gray-600">
                Atendimento de qualidade e inclusivo
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}