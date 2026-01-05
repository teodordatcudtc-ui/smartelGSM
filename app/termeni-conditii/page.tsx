import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Termeni și Condiții - Smartel GSM',
  description: 'Termenii și condițiile de utilizare a serviciilor Smartel GSM. Informații despre garanții, responsabilități și condiții de serviciu.',
}

export default function TermeniConditii() {
  return (
    <div className="pt-32 pb-20">
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-dark">
              Termeni și <span className="text-primary">Condiții</span>
            </h1>
            
            <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
              <p className="text-sm text-gray-500">Ultima actualizare: {new Date().toLocaleDateString('ro-RO', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

              <section>
                <h2 className="text-2xl font-bold mt-8 mb-4 text-dark">1. Prezentare generală</h2>
                <p>
                  Prezentele Termeni și Condiții reglementează utilizarea site-ului Smartel GSM și prestarea 
                  serviciilor de reparație telefoane. Prin accesarea și utilizarea site-ului nostru, 
                  accepti acești termeni și condiții în totalitate.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mt-8 mb-4 text-dark">2. Servicii oferite</h2>
                <p>Smartel GSM oferă următoarele servicii:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Schimb display și componente</li>
                  <li>Schimb baterie</li>
                  <li>Reparații conector încărcare</li>
                  <li>Reparații placă de bază</li>
                  <li>Deblocări telefoane</li>
                  <li>Update software</li>
                  <li>Recuperare date</li>
                  <li>Curățare profesională</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mt-8 mb-4 text-dark">3. Prețuri și plăți</h2>
                <p>
                  Prețurile pentru serviciile noastre sunt afișate în service sau comunicate telefonic. 
                  Toate prețurile sunt exprimate în lei (RON) și includ TVA, dacă este cazul. 
                  Plățile se pot face numerar sau prin transfer bancar, conform acordului cu clientul.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mt-8 mb-4 text-dark">4. Garanție</h2>
                <p>
                  Toate reparațiile efectuate de Smartel GSM beneficiază de garanție conform următoarelor condiții:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Garanția acoperă defectele de material sau de execuție</li>
                  <li>Durata garanției este specificată în documentul de garanție</li>
                  <li>Garanția nu acoperă deteriorările cauzate de utilizator sau de factori externi</li>
                  <li>În cazul unei reparații în garanție, serviciul este gratuit</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mt-8 mb-4 text-dark">5. Responsabilități</h2>
                <p>
                  Smartel GSM își asumă responsabilitatea pentru reparațiile efectuate în limitele garanției. 
                  Nu suntem responsabili pentru:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Datele pierdute înainte de predarea dispozitivului (recomandăm backup)</li>
                  <li>Deteriorările cauzate de utilizator după reparație</li>
                  <li>Problemele preexistente care nu au fost comunicate la diagnosticare</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mt-8 mb-4 text-dark">6. Timp de reparație</h2>
                <p>
                  Străduim să finalizăm majoritatea reparațiilor în aceeași zi sau în 24 de ore. 
                  Timpul exact de reparație depinde de complexitatea problemei și de disponibilitatea pieselor. 
                  Vom comunica un termen estimativ la predarea dispozitivului.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mt-8 mb-4 text-dark">7. Predarea și ridicarea dispozitivului</h2>
                <p>
                  La predarea dispozitivului, clientul primește un bon de predare cu descrierea problemei. 
                  Ridicarea se face doar pe baza bonului de predare sau a unei identități valide. 
                  Dispozitivele neridicate în termen de 90 de zile pot fi considerate abandonate.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mt-8 mb-4 text-dark">8. Anularea comenzii</h2>
                <p>
                  Clientul poate anula o comandă înainte de începerea reparației. 
                  Dacă reparația a început deja, se poate percepe o taxă pentru lucrările efectuate.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mt-8 mb-4 text-dark">9. Proprietate intelectuală</h2>
                <p>
                  Conținutul site-ului, inclusiv textele, imaginile, logo-urile și design-ul, 
                  sunt proprietatea Smartel GSM și sunt protejate de legile privind drepturile de autor.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mt-8 mb-4 text-dark">10. Modificări ale termenilor</h2>
                <p>
                  Ne rezervăm dreptul de a modifica acești termeni și condiții în orice moment. 
                  Modificările vor fi publicate pe această pagină. Continuarea utilizării serviciilor 
                  după modificări constituie acceptarea noilor termeni.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mt-8 mb-4 text-dark">11. Contact</h2>
                <p>
                  Pentru întrebări despre acești termeni și condiții, ne poți contacta la:
                </p>
                <div className="bg-gray-50 rounded-lg p-6 mt-4">
                  <p className="font-semibold">Smartel GSM</p>
                  <p>📱 <a href="tel:0771145335" className="text-primary hover:text-primary-dark">0771145335</a></p>
                  <p className="mt-2">
                    📍 Munții Apuseni 13, Calea Crângași 29, Spațiul comercial 2, 060334 București
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

