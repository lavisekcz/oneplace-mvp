{/* Navigace - Desktop */}
<nav className="bg-gray-800 text-white sticky top-0 z-10 shadow-md">
  <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
    <div className="flex items-center space-x-4">
      <span className="text-2xl font-bold">🏠 ONEPLACE</span>
    </div>
    <div className="hidden md:flex items-center space-x-8">
      <div className="relative group">
        <Link href="/professionals" className="hover:text-gray-300">Pro Profíky</Link>
        <div className="absolute hidden group-hover:block bg-gray-700 text-white p-2 rounded mt-2 w-48">
          <Link href="/professionals#benefits" className="block hover:bg-gray-600 p-1">Přehled Výhod</Link>
          <Link href="/professionals#membership" className="block hover:bg-gray-600 p-1">Členství</Link>
        </div>
      </div>
      <div className="relative group">
        <Link href="/clients" className="hover:text-gray-300">Pro Klienty</Link>
        <div className="absolute hidden group-hover:block bg-gray-700 text-white p-2 rounded mt-2 w-48">
          <Link href="/clients#portal" className="block hover:bg-gray-600 p-1">Projektový Portál</Link>
          <Link href="/clients#membership" className="block hover:bg-gray-600 p-1">Členství</Link>
        </div>
      </div>
      <Link href="/eshop" className="hover:text-gray-300">E-shop</Link>
      <Link href="/properties" className="hover:text-gray-300">Nemovitosti</Link>
      <Link href="/sustainability" className="hover:text-gray-300">Udržitelnost & Smart</Link>
      <Link href="/magazine" className="hover:text-gray-300">Magazín</Link>
      <Link href="/academy" className="hover:text-gray-300">Academy</Link>
      <span className="hover:text-gray-300">🇬🇧 EN</span>
    </div>
    <div className="hidden md:flex items-center space-x-6">
      <button className="hover:text-gray-300">Sign In</button>
      <button className="bg-green-600 px-4 py-2 rounded hover:bg-green-700">Register</button>
    </div>
  </div>
</nav>
