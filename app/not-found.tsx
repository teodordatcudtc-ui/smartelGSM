import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="pt-32 pb-20 min-h-screen flex items-center justify-center">
      <div className="container-custom text-center">
        <h1 className="text-6xl font-bold mb-4 text-primary">404</h1>
        <h2 className="text-3xl font-bold mb-4 text-dark">Pagina nu a fost găsită</h2>
        <p className="text-lg text-gray-700 mb-8">
          Pagina pe care o cauți nu există sau a fost mutată.
        </p>
        <Link href="/" className="btn-primary">
          Înapoi la pagina principală
        </Link>
      </div>
    </div>
  )
}

