'use client'

import { useState } from 'react'

const phoneModels = [
  { id: 'iphone', name: 'iPhone', brand: 'Apple', icon: '📱' },
  { id: 'samsung', name: 'Samsung', brand: 'Samsung', icon: '📱' },
  { id: 'huawei', name: 'Huawei', brand: 'Huawei', icon: '📱' },
  { id: 'xiaomi', name: 'Xiaomi', brand: 'Xiaomi', icon: '📱' },
  { id: 'oppo', name: 'Oppo', brand: 'Oppo', icon: '📱' },
  { id: 'oneplus', name: 'OnePlus', brand: 'OnePlus', icon: '📱' },
]

const availableServices = [
  {
    id: 'schimb-display',
    title: 'Schimb Display',
    description: 'Schimbăm display-ul telefonului tău cu piese originale sau compatibile de înaltă calitate.',
    icon: '📱',
    availableFor: ['iphone', 'samsung', 'huawei', 'xiaomi', 'oppo', 'oneplus'],
  },
  {
    id: 'schimb-baterie',
    title: 'Schimb Baterie',
    description: 'Înlocuim bateria cu una nouă, garantând autonomie optimă.',
    icon: '🔋',
    availableFor: ['iphone', 'samsung', 'huawei', 'xiaomi', 'oppo', 'oneplus'],
  },
  {
    id: 'reparatii-conector',
    title: 'Reparații Conector Încărcare',
    description: 'Reparăm sau înlocuim conectorul de încărcare pentru a restabili funcționalitatea completă.',
    icon: '🔌',
    availableFor: ['iphone', 'samsung', 'huawei', 'xiaomi', 'oppo', 'oneplus'],
  },
  {
    id: 'reparatii-placa',
    title: 'Reparații Placă de Bază',
    description: 'Reparații complexe la placa de bază pentru telefoane care nu mai pornesc.',
    icon: '⚙️',
    availableFor: ['iphone', 'samsung', 'huawei', 'xiaomi'],
  },
  {
    id: 'deblocari',
    title: 'Deblocări',
    description: 'Deblocăm telefoanele de la orice operator, restabilind libertatea de a folosi orice SIM card.',
    icon: '🔓',
    availableFor: ['iphone', 'samsung', 'huawei', 'xiaomi', 'oppo', 'oneplus'],
  },
  {
    id: 'update-software',
    title: 'Update Software',
    description: 'Actualizăm software-ul telefonului tău la cea mai recentă versiune.',
    icon: '💾',
    availableFor: ['iphone', 'samsung', 'huawei', 'xiaomi', 'oppo', 'oneplus'],
  },
  {
    id: 'recuperare-date',
    title: 'Recuperare Date',
    description: 'Recuperăm datele importante din telefoane deteriorate sau care nu mai funcționează.',
    icon: '💿',
    availableFor: ['iphone', 'samsung', 'huawei', 'xiaomi'],
  },
  {
    id: 'curatare',
    title: 'Curățare Profesională',
    description: 'Curățare profundă a telefonului pentru a preveni problemele cauzate de praf, apă sau alte substanțe.',
    icon: '🧹',
    availableFor: ['iphone', 'samsung', 'huawei', 'xiaomi', 'oppo', 'oneplus'],
  },
]

export default function PhoneSelector() {
  const [selectedPhone, setSelectedPhone] = useState<string | null>(null)

  const filteredServices = selectedPhone
    ? availableServices.filter(service => service.availableFor.includes(selectedPhone))
    : []

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
            Alegeți <span className="text-primary">modelul</span> de telefon
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Selectați marca telefonului pentru a vedea serviciile disponibile
          </p>
        </div>

        {/* Phone Selection */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {phoneModels.map((phone) => (
            <button
              key={phone.id}
              onClick={() => setSelectedPhone(phone.id)}
              className={`p-6 rounded-lg border-2 transition-all duration-300 text-center card-hover ${
                selectedPhone === phone.id
                  ? 'border-primary bg-primary text-white'
                  : 'border-gray-200 bg-white hover:border-primary'
              }`}
            >
              <div className="text-4xl mb-2">{phone.icon}</div>
              <div className="font-semibold text-sm">{phone.name}</div>
            </button>
          ))}
        </div>

        {/* Services for Selected Phone */}
        {selectedPhone && (
          <div className="animate-fade-in-up">
            <h3 className="text-2xl font-bold mb-6 text-dark text-center">
              Servicii disponibile pentru{' '}
              <span className="text-primary">
                {phoneModels.find(p => p.id === selectedPhone)?.name}
              </span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className="bg-white border border-gray-200 rounded-lg p-6 card-hover"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h4 className="text-lg font-semibold mb-2 text-dark">{service.title}</h4>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {!selectedPhone && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              Selectați un model de telefon pentru a vedea serviciile disponibile
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

