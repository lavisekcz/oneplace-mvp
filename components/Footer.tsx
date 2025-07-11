export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div>
          <span className="font-bold text-green-500">ONEPLACE</span> © {new Date().getFullYear()}
        </div>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="/privacy" className="hover:text-green-400">Ochrana osobních údajů</a>
          <a href="/contact" className="hover:text-green-400">Kontakt</a>
        </div>
      </div>
    </footer>
  );
}