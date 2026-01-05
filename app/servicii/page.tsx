import type { Metadata } from 'next'
import Link from 'next/link'
import PhoneSelector from './PhoneSelector'

export const metadata: Metadata = {
  title: 'Servicii GSM - Smartel GSM | Reparații Telefoane București',
  description: 'Servicii complete GSM: schimb display, schimb baterie, reparații conector încărcare, reparații placă de bază, deblocări, update software, recuperare date, curățare profesională.',
  keywords: 'schimb display telefon, schimb baterie telefon, reparatii conector incarcare, reparatii placa de baza, deblocari telefoane, update software telefon, recuperare date telefon, curatare profesionala telefon',
}

const services = [
  {
    title: 'Schimb Display',
    description: 'Display-ul telefonului tău este spart sau nu mai funcționează corect? Oferim servicii profesionale de schimb display pentru toate modelele de telefoane.',
    benefits: [
      'Piese originale sau compatibile de înaltă calitate',
      'Reparație rapidă în aceeași zi',
      'Garanție pentru display-ul montat',
      'Prețuri competitive',
    ],
    icon: '📱',
  },
  {
    title: 'Schimb Baterie',
    description: 'Bateria telefonului tău nu mai ține deloc sau se descarcă foarte repede? Înlocuim bateria cu una nouă, garantând autonomie optimă.',
    benefits: [
      'Baterii originale sau compatibile premium',
      'Instalare profesională',
      'Testare completă după montaj',
      'Garanție pentru baterie',
    ],
    icon: '🔋',
  },
  {
    title: 'Reparații Conector Încărcare',
    description: 'Telefonul tău nu se încarcă sau are probleme cu conectorul? Reparăm sau înlocuim conectorul de încărcare pentru a restabili funcționalitatea completă.',
    benefits: [
      'Diagnosticare precisă a problemei',
      'Reparație sau înlocuire conform necesității',
      'Testare completă după reparație',
      'Garanție pentru serviciu',
    ],
    icon: '🔌',
  },
  {
    title: 'Reparații Placă de Bază',
    description: 'Telefonul tău nu mai pornește sau are probleme de funcționare? Oferim reparații complexe la placa de bază pentru toate modelele.',
    benefits: [
      'Diagnosticare avansată cu echipamente profesionale',
      'Reparații la nivel de componentă',
      'Piese de calitate pentru reparații',
      'Garanție pentru reparație',
    ],
    icon: '⚙️',
  },
  {
    title: 'Deblocări',
    description: 'Telefonul tău este blocat la un operator și vrei să folosești orice SIM card? Oferim servicii de deblocare pentru toate modelele de telefoane.',
    benefits: [
      'Deblocare legală și sigură',
      'Suport pentru toate operatorii',
      'Proces rapid și eficient',
      'Garanție că telefonul rămâne deblocat',
    ],
    icon: '🔓',
  },
  {
    title: 'Update Software',
    description: 'Actualizăm software-ul telefonului tău la cea mai recentă versiune, asigurând performanță optimă, securitate îmbunătățită și acces la cele mai noi funcții.',
    benefits: [
      'Actualizare la ultima versiune disponibilă',
      'Backup al datelor înainte de update',
      'Verificare completă după actualizare',
      'Asistență pentru configurare',
    ],
    icon: '💾',
  },
  {
    title: 'Recuperare Date',
    description: 'Ai pierdut date importante din telefon? Recuperăm fotografiile, contactele, mesajele și alte fișiere din telefoane deteriorate sau care nu mai funcționează.',
    benefits: [
      'Recuperare date din telefoane deteriorate',
      'Suport pentru toate tipurile de fișiere',
      'Proces sigur și confidențial',
      'Rata de succes ridicată',
    ],
    icon: '💿',
  },
  {
    title: 'Curățare Profesională',
    description: 'Curățare profundă a telefonului pentru a preveni problemele cauzate de praf, apă sau alte substanțe. Serviciu esențial pentru menținerea performanței.',
    benefits: [
      'Curățare completă internă și externă',
      'Eliminare praf și particule',
      'Tratament anti-umiditate',
      'Verificare și testare după curățare',
    ],
    icon: '🧹',
  },
]

export default function Servicii() {
  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-dark">
              Serviciile <span className="text-primary">noastre</span>
            </h1>
            <p className="text-xl text-gray-700">
              Oferim soluții complete și profesionale pentru toate problemele telefonului tău. Fiecare serviciu este realizat cu experiență, atenție la detalii și garanție.
            </p>
          </div>
        </div>
      </section>

      {/* Phone Selector Section */}
      <PhoneSelector />

      {/* Services List */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={index % 2 === 0 ? '' : 'lg:order-2'}>
                  <div className="text-6xl mb-6">{service.icon}</div>
                  <h2 className="text-3xl font-bold mb-4 text-dark">{service.title}</h2>
                  <p className="text-lg text-gray-700 mb-6">{service.description}</p>
                  <h3 className="text-xl font-semibold mb-4 text-primary">Beneficii:</h3>
                  <ul className="space-y-3 mb-6">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-primary mr-3">✓</span>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`bg-gray-50 rounded-lg p-8 ${index % 2 === 0 ? 'lg:order-2' : ''}`}>
                  <div className="aspect-video bg-white rounded-lg flex items-center justify-center text-6xl">
                    {service.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-dark text-white">
        <div className="container-custom text-center animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ai nevoie de unul dintre aceste servicii?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Contactează-ne acum pentru o consultație gratuită și un devis rapid
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0771145335" className="btn-primary bg-primary hover:bg-primary-dark">
              📞 Sună: 0771145335
            </a>
            <Link href="/contact" className="btn-secondary border-white text-white hover:bg-white hover:text-primary">
              Trimite mesaj
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

