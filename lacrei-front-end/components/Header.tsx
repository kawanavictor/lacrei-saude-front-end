import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image src="https://lacreisaude.com.br/_next/static/media/logo_lacrei_desktop.7ae004ab.svg" alt="Lacrei Saúde" width={150} height={40} />
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/quem-somos" className="text-gray-600 hover:text-green-600">
            Quem Somos
          </Link>
          <Link href="/ajuda" className="text-gray-600 hover:text-green-600">
            Ajuda
          </Link>
            <Link 
            href="/login" 
            className="bg-[rgb(1,135,98)] text-white px-4 py-2 rounded-md hover:bg-[rgb(0,108,78)] transition duration-300"
            >
            Entrar
            </Link>
        </nav>
        <button className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}