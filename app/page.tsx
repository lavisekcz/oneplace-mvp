export default function HomePage() {
  return (
    <>
      <section className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Fix it Fast. Fix it Right.</h2>
        <p className="text-lg text-gray-700">
          Spojte se s ověřenými odborníky na domácí služby ve vašem okolí.
        </p>
      </section>

      <section className="mb-12 max-w-md mx-auto">
        <h3 className="text-xl font-semibold mb-4">Co potřebujete opravit?</h3>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex items-center"
          aria-label="Formulář vyhledávání služeb"
        >
          <input
            type="text"
            placeholder="Hledat"
            aria-label="Vyhledat službu"
            className="flex-grow border border-gray-300 rounded-l px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-5 py-2 rounded-r hover:bg-blue-700 transition-colors"
          >
            Hledat
          </button>
        </form>
      </section>

      <section id="onas" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">O nás</h2>
        <p>Jsme platforma pro rychlé a kvalitní propojení klientů s ověřenými odborníky v oblasti domácích a technických služeb.</p>
      </section>

      <section id="sluzby" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Služby</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Instalatér</li>
          <li>Elektrikář</li>
          <li>Zedník</li>
        </ul>
      </section>

      <section id="odbornici" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Odborníci</h2>
        <p>Všichni naši spolupracovníci jsou prověření, pojištění a hodnoceni klienty.</p>
      </section>

      <section id="kontakt" className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Kontakt</h2>
        <p>
          <a href="mailto:info@oneplacefoundation.eu" className="text-blue-600 hover:underline">
            info@oneplacefoundation.eu
          </a>
        </p>
      </section>
    </>
  )
}
