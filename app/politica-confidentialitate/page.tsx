import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politică de Confidențialitate - Smartel GSM',
  description: 'Politica de confidențialitate Smartel GSM. Informații despre modul în care colectăm, folosim și protejăm datele tale personale.',
}

export default function PoliticaConfidentialitate() {
  return (
    <div className="pt-32 pb-20">
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-dark">
              Politică de <span className="text-primary">Confidențialitate</span>
            </h1>
            
            <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
              <p className="text-sm text-gray-500">Ultima actualizare: {new Date().toLocaleDateString('ro-RO', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

              <section>
                <h2 className="text-2xl font-bold mt-8 mb-4 text-dark">1. Introducere</h2>
                <p>
                  Smartel GSM respectă confidențialitatea vizitatorilor site-ului nostru și se angajează să protejeze datele personale colectate în conformitate cu legislația în vigoare, inclusiv Regulamentul General privind Protecția Datelor (GDPR).
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mt-8 mb-4 text-dark">2. Datele pe care le colectăm</h2>
                <p>Colectăm următoarele tipuri de date:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Date de identificare: nume, prenume</li>
                  <li>Date de contact: număr de telefon, adresă de email</li>
                  <li>Date tehnice: adresă IP, tip de browser, pagini accesate</li>
                  <li>Date despre dispozitivul tău: model telefon, problemă raportată</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mt-8 mb-4 text-dark">3. Scopul prelucrării datelor</h2>
                <p>Folosim datele tale personale pentru:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Procesarea comenzilor și oferirea serviciilor de reparație</li>
                  <li>Comunicarea cu tine privind serviciile noastre</li>
                  <li>Îmbunătățirea experienței tale pe site</li>
                  <li>Conformarea cu obligațiile legale</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mt-8 mb-4 text-dark">4. Baza legală pentru prelucrare</h2>
                <p>
                  Prelucrăm datele tale personale pe baza următoarelor motive legale:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Executarea unui contract sau pregătirea încheierii unui contract</li>
                  <li>Consimțământul tău explicit</li>
                  <li>Interesul legitim al nostru de a îmbunătăți serviciile</li>
                  <li>Conformarea cu obligațiile legale</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mt-8 mb-4 text-dark">5. Partajarea datelor</h2>
                <p>
                  Nu vindem, nu închiriem și nu partajăm datele tale personale cu terți în scopuri comerciale. 
                  Putem partaja datele doar cu furnizori de servicii tehnice care ne ajută să operăm site-ul, 
                  și doar în măsura în care este necesar pentru prestarea acestor servicii.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mt-8 mb-4 text-dark">6. Drepturile tale</h2>
                <p>În conformitate cu GDPR, ai următoarele drepturi:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Dreptul de acces la datele tale personale</li>
                  <li>Dreptul de rectificare a datelor inexacte</li>
                  <li>Dreptul la ștergerea datelor („dreptul de a fi uitat”)</li>
                  <li>Dreptul la restricționarea prelucrării</li>
                  <li>Dreptul la portabilitatea datelor</li>
                  <li>Dreptul de opoziție la prelucrare</li>
                  <li>Dreptul de a retrage consimțământul</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mt-8 mb-4 text-dark">7. Securitatea datelor</h2>
                <p>
                  Implementăm măsuri tehnice și organizatorice adecvate pentru a proteja datele tale personale 
                  împotriva accesului neautorizat, pierderii, distrugerii sau alterării.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mt-8 mb-4 text-dark">8. Păstrarea datelor</h2>
                <p>
                  Păstrăm datele tale personale doar atât timp cât este necesar pentru îndeplinirea scopurilor 
                  pentru care au fost colectate sau conform cerințelor legale.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mt-8 mb-4 text-dark">9. Cookie-uri</h2>
                <p>
                  Site-ul nostru folosește cookie-uri pentru a îmbunătăți experiența ta. Poți gestiona preferințele 
                  pentru cookie-uri în setările browser-ului tău.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mt-8 mb-4 text-dark">10. Contact</h2>
                <p>
                  Pentru întrebări sau pentru a-ți exercita drepturile, ne poți contacta la:
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

