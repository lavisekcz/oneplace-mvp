export default function Home() {
  return (
    <>
      <header>
        <h1>OnePlace</h1>
        <nav>
          <ul>
            <li><a href="#onas">O nás</a></li>
            <li><a href="#sluzby">Služby</a></li>
            <li><a href="#odbornici">Odborníci</a></li>
            <li><a href="#kontakt">Kontakt</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section>
          <h2>Fix it Fast. Fix it Right.</h2>
          <p>Spojte se s ověřenými odborníky na domácí služby ve vašem okolí.</p>
        </section>

        <section>
          <h3>Co potřebujete opravit?</h3>
          <form onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Hledat" aria-label="Hledat" />
            <button type="submit">Hledat</button>
          </form>
        </section>

        <section id="onas">
          <h2>O nás</h2>
          <p>Jsme platforma pro rychlé a kvalitní propojení klientů s ověřenými odborníky v oblasti domácích a technických služeb.</p>
        </section>

        <section id="sluzby">
          <h2>Služby</h2>
          <ul>
            <li>Instalatér</li>
            <li>Elektrikář</li>
            <li>Zedník</li>
          </ul>
        </section>

        <section id="odbornici">
          <h2>Odborníci</h2>
          <p>Všichni naši spolupracovníci jsou prověření, pojištění a hodnoceni klienty.</p>
        </section>

        <section id="kontakt">
          <h2>Kontakt</h2>
          <p><a href="mailto:info@oneplacefoundation.eu">info@oneplacefoundation.eu</a></p>
        </section>
      </main>

      <footer>
        <p>© 2025 OnePlace. Všechna práva vyhrazena.</p>
      </footer>
    </>
  );
}
