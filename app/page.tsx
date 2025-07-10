export default function Home() {
  return (
    <main>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-green-700">OnePlace</h1>
          <nav className="space-x-4">
            <a href="#about" className="text-gray-600 hover:text-green-700">O nás</a>
            <a href="#services" className="text-gray-600 hover:text-green-700">Služby</a>
            <a href="#experts" className="text-gray-600 hover:text-green-700">Odborníci</a>
            <a href="#contact" className="text-gray-600 hover:text-green-700">Kontakt</a>
          </nav>
        </div>
      </header>
      <section className="text-center py-20 bg-gradient-to-br from-green-50 to-white">
        <h2 className="text-4xl font-bold text-green-700">Fix it Fast. Fix it Right.</h2>
        <p className="mt-4 max-w-xl mx-auto text-gray-600">Spojte se s ověřenými odborníky na domácí služby ve vašem okolí.</p>
        <div className="mt-6 flex justify-center">
          <input className="border p-2 rounded-l-md" placeholder="Co potřebujete opravit?" />
          <button className="bg-green-600 text-white px-4 py-2 rounded-r-md">Hledat</button>
        </div>
      </section>
      <section id="about" className="py-12 px-4 text-center">
        <h3 className="text-2xl font-semibold">O nás</h3>
        <p className="mt-2 max-w-2xl mx-auto text-gray-600">Jsme platforma pro rychlé a kvalitní propojení klientů s ověřenými odborníky v oblasti domácích a technických služeb.</p>
      </section>
      <section id="services" className="py-12 px-4 bg-gray-100 text-center">
        <h3 className="text-2xl font-semibold">Služby</h3>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white p-4 shadow rounded">Instalatér</div>
          <div className="bg-white p-4 shadow rounded">Elektrikář</div>
          <div className="bg-white p-4 shadow rounded">Zedník</div>
        </div>
      </section>
      <section id="experts" className="py-12 px-4 text-center">
        <h3 className="text-2xl font-semibold">Odborníci</h3>
        <p className="mt-2 text-gray-600">Všichni naši spolupracovníci jsou prověření, pojištění a hodnoceni klienty.</p>
      </section>
      <section id="contact" className="py-12 px-4 bg-gray-100 text-center">
        <h3 className="text-2xl font-semibold">Kontakt</h3>
        <p className="mt-2 text-gray-600">info@oneplacefoundation.eu</p>
      </section>
      <footer className="text-center py-6 text-sm text-gray-500 bg-white border-t">
        © 2025 OnePlace. Všechna práva vyhrazena.
      </footer>
    </main>
  );
}
