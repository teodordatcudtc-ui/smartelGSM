import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">Smartel GSM</h3>
            <p className="text-gray-300 text-sm">
              Service GSM profesional în București, Crângași. Reparații telefoane cu experiență și profesionalism.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Link-uri rapide</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/" className="hover:text-primary transition-colors duration-300">
                  Acasă
                </Link>
              </li>
              <li>
                <Link href="/servicii" className="hover:text-primary transition-colors duration-300">
                  Servicii
                </Link>
              </li>
              <li>
                <Link href="/despre-noi" className="hover:text-primary transition-colors duration-300">
                  Despre noi
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-semibold">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/politica-confidentialitate" className="hover:text-primary transition-colors duration-300">
                  Politică de confidențialitate
                </Link>
              </li>
              <li>
                <Link href="/termeni-conditii" className="hover:text-primary transition-colors duration-300">
                  Termeni și condiții
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="tel:0771145335" className="hover:text-primary transition-colors duration-300">
                  📱 0771145335
                </a>
              </li>
              <li className="text-gray-300">
                📍 Munții Apuseni 13<br />
                Calea Crângași 29<br />
                Spațiul comercial 2<br />
                060334 București
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Smartel GSM. Toate drepturile rezervate.</p>
        </div>
      </div>
    </footer>
  )
}

