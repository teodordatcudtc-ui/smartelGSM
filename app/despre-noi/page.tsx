import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Despre Noi - Smartel GSM | Service Telefoane București',
  description: 'Smartel GSM - Service GSM profesional în București, Crângași. Ani de experiență în reparații telefoane, profesionalism și garanție pentru toate serviciile.',
  keywords: 'despre smartel gsm, service gsm bucuresti, service telefoane crangasi, reparatii telefoane profesionale',
}

export default function DespreNoi() {
  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-dark">
              Despre <span className="text-primary">Smartel GSM</span>
            </h1>
            <p className="text-xl text-gray-700">
              Service GSM profesional dedicat reparațiilor de calitate pentru telefoane
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="animate-fade-in-up">
              <h2 className="text-3xl font-bold mb-6 text-dark">Cine suntem</h2>
              <p className="text-lg text-gray-700 mb-4">
                Smartel GSM este un service GSM profesional situat în București, zona Crângași, dedicat oferirii de soluții complete și de calitate pentru toate problemele telefonului tău.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Cu ani de experiență în domeniu, echipa noastră de tehnicieni specializați are cunoștințele și echipamentele necesare pentru a repara telefoanele de toate mărcile și modelele, de la iPhone și Samsung la alte branduri populare.
              </p>
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <h2 className="text-3xl font-bold mb-6 text-dark">Misiunea noastră</h2>
              <p className="text-lg text-gray-700 mb-4">
                Misiunea noastră este să oferim servicii de reparații rapide, profesionale și accesibile, punând întotdeauna clientul pe primul loc. Ne străduim să restabilim funcționalitatea telefonului tău în cel mai scurt timp posibil, fără a compromite calitatea.
              </p>
              <p className="text-lg text-gray-700">
                Fiecare reparație este realizată cu atenție la detalii, folosind piese de calitate și respectând cele mai înalte standarde profesionale.
              </p>
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-3xl font-bold mb-6 text-dark">De ce să ne alegi</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Experiență</h3>
                  <p className="text-gray-700">
                    Ani de experiență în domeniu și mii de telefoane reparate cu succes. Știm cum să rezolvăm orice problemă.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Profesionalism</h3>
                  <p className="text-gray-700">
                    Tehnicieni specializați și echipamente profesionale pentru diagnosticare și reparații precise.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Viteză</h3>
                  <p className="text-gray-700">
                    Majoritatea reparațiilor sunt finalizate în aceeași zi sau în 24 de ore, minimizând timpul fără telefon.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Garanție</h3>
                  <p className="text-gray-700">
                    Toate reparațiile beneficiază de garanție, oferindu-ți liniște și încredere în serviciile noastre.
                  </p>
                </div>
              </div>
            </div>

            <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <h2 className="text-3xl font-bold mb-6 text-dark">Locația noastră</h2>
              <p className="text-lg text-gray-700 mb-4">
                Ne găsești în București, zona Crângași, la adresa:
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-lg font-semibold mb-2">Smartel GSM</p>
                <p className="text-gray-700">
                  📍 Munții Apuseni 13<br />
                  Calea Crângași 29<br />
                  Spațiul comercial 2<br />
                  060334 București
                </p>
                <p className="text-gray-700 mt-4">
                  📱 <a href="tel:0771145335" className="text-primary hover:text-primary-dark">0771145335</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container-custom text-center animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ai nevoie de ajutor cu telefonul tău?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contactează-ne acum pentru o consultație gratuită
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0771145335" className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-0.5">
              📞 Sună: 0771145335
            </a>
            <Link href="/contact" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300">
              Trimite mesaj
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

