export default function ProfessionalsPage() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <h1 className="text-3xl font-bold text-gray-800 text-center py-12">Pro Profesionály</h1>
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-lg text-gray-600 mb-6">Získejte zakázky, spravujte svůj profil a zvyšte svou důvěryhodnost.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Výhody Členství</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Získávání zakázek</li>
              <li>Správa profilu</li>
              <li>Dostupnost kategorií</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Úrovně Členství</h3>
            <p>BASIC (zdarma), PROFI (placené), ELITE (prémiové)</p>
            <button className="bg-green-600 text-white px-4 py-2 rounded mt-4 hover:bg-green-700">Zaregistrujte se</button>
          </div>
        </div>
      </div>
    </div>
  );
}
