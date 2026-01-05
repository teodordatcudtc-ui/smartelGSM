import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Smartel GSM - Service Telefoane București | Reparații iPhone & Samsung',
  description: 'Service GSM profesional în București, Crângași. Reparații telefoane, schimb display, schimb baterie, deblocări și recuperare date. Experiență și profesionalism garantat.',
  keywords: 'service gsm, reparatii telefoane, service telefoane bucuresti, service gsm crangasi, reparatii iphone, reparatii samsung, schimb display telefon, schimb baterie telefon',
}

const services = [
  {
    title: 'Schimb Display',
    description: 'Schimbăm display-ul telefonului tău cu piese originale sau compatibile de înaltă calitate. Reparație rapidă și profesională.',
    icon: '📱',
  },
  {
    title: 'Schimb Baterie',
    description: 'Bateria telefonului tău nu mai ține? O înlocuim rapid cu o baterie nouă, garantând autonomie optimă.',
    icon: '🔋',
  },
  {
    title: 'Reparații Conector Încărcare',
    description: 'Probleme cu încărcarea? Reparăm sau înlocuim conectorul de încărcare pentru a-ți restabili funcționalitatea completă.',
    icon: '🔌',
  },
  {
    title: 'Reparații Placă de Bază',
    description: 'Reparații complexe la placa de bază pentru telefoane care nu mai pornesc sau au probleme de funcționare.',
    icon: '⚙️',
  },
  {
    title: 'Deblocări',
    description: 'Deblocăm telefoanele de la orice operator, restabilind libertatea de a folosi orice SIM card.',
    icon: '🔓',
  },
  {
    title: 'Update Software',
    description: 'Actualizăm software-ul telefonului tău la cea mai recentă versiune, asigurând performanță și securitate optimă.',
    icon: '💾',
  },
  {
    title: 'Recuperare Date',
    description: 'Recuperăm datele importante din telefoanele deteriorate sau care nu mai funcționează.',
    icon: '💿',
  },
  {
    title: 'Curățare Profesională',
    description: 'Curățare profundă a telefonului pentru a preveni problemele cauzate de praf, apă sau alte substanțe.',
    icon: '🧹',
  },
]

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 pb-8 md:pt-28 md:pb-12 min-h-[400px] md:min-h-[500px] flex items-center overflow-visible">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/hero-bg.jpg")',
          }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        <div className="container-custom section-padding relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content Left */}
            <div className="text-left animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                Service GSM București pentru <span className="text-primary">orice model</span> de telefon
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                Service GSM București, specializat în reparații telefoane pentru orice model. Echipa noastră efectuează orice tip de reparație, inclusiv înlocuiri de ecrane sparte, baterii defecte și probleme hardware complexe.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:0771145335" className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-all duration-300 text-base text-center">
                  📞 0771145335
                </a>
                <Link href="/servicii" className="bg-transparent border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300 text-base text-center">
                  Vezi servicii
                </Link>
              </div>
            </div>
            
            {/* Image Right */}
            <div className="hidden lg:block animate-fade-in-up relative z-30" style={{ animationDelay: '0.2s' }}>
              <img 
                src="/hero-image.jpg" 
                alt="Smartel GSM" 
                className="w-full h-auto rounded-lg object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="section-padding bg-white -mt-16 lg:-mt-24 relative z-10">
        <div className="container-custom">
          <div className="mb-12 animate-fade-in-up text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
              Oferim Servicii GSM pentru <span className="text-primary">orice model</span> de telefon
            </h2>
          </div>
          
          <div className="flex items-center justify-center animate-fade-in-up">
            <img 
              src="/brands.jpg" 
              alt="Branduri telefoane - Oppo, OnePlus, Motorola, Xiaomi, Huawei, Google, Apple" 
              className="w-full max-w-4xl h-auto rounded-lg object-contain"
            />
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
              Serviciile <span className="text-primary">noastre</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Oferim soluții complete pentru toate problemele telefonului tău
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="bg-white border border-gray-200 rounded-lg p-6 card-hover animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-dark">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <Link
                  href="/servicii"
                  className="text-primary font-medium hover:text-primary-dark transition-colors duration-300 text-sm"
                >
                  Află mai mult →
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/servicii" className="btn-primary">
              Vezi toate serviciile
            </Link>
          </div>
        </div>
      </section>

      {/* New Section - Process/How It Works */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
              Cum <span className="text-primary">funcționăm</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Proces simplu și rapid pentru reparația telefonului tău
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3 text-dark">Contactează-ne</h3>
              <p className="text-gray-700">
                Sună-ne sau trimite un mesaj pentru a descrie problema telefonului tău.
              </p>
            </div>
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3 text-dark">Diagnosticare</h3>
              <p className="text-gray-700">
                Analizăm telefonul și îți oferim un devis clar și transparent.
              </p>
            </div>
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3 text-dark">Reparație & Garanție</h3>
              <p className="text-gray-700">
                Reparăm telefonul rapid și îți oferim garanție pentru serviciul efectuat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-dark text-white">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              De ce să ne <span className="text-primary">alegi</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-3">Reparații Rapide</h3>
              <p className="text-gray-300">
                Majoritatea reparațiilor sunt finalizate în aceeași zi sau în 24 de ore.
              </p>
            </div>
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold mb-3">Garanție Completă</h3>
              <p className="text-gray-300">
                Toate reparațiile beneficiază de garanție pentru liniștea ta.
              </p>
            </div>
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-3">Experiență & Profesionalism</h3>
              <p className="text-gray-300">
                Ani de experiență în domeniu și mii de telefoane reparate cu succes.
              </p>
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
    </>
  )
}

