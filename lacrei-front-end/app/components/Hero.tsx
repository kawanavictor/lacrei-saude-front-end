import Image from "next/image";
import Link from "next/link";
import Pacientes from "../pages/pacientes";

export default function Hero() {
    return (
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
                <Link href="/pages/pacientes" className="bg-[rgb(1,135,98)] text-white px-6 py-3 rounded-md text-center hover:bg-[rgb(0,108,78)] transition duration-300 shadow-lg">
                  Para pacientes
                </Link>
                <Link href="/profissionais" className="bg-[rgb(1,135,98)] text-white px-6 py-3 rounded-md text-center hover:bg-[rgb(0,108,78)] transition duration-300 shadow-lg">
                  Para profissionais
                </Link>
                </div>
            </div>
            <div className="md:w-1/2">
              <Image src="https://app-lacrei-saude-4nn3.vercel.app/assets/home-icon-cca9946c.svg" alt="A doctor and a smartphone" width={500} height={300}   />
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
      </main>)
      }