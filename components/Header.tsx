'use client';

import Link from 'next/link';
import { FaUserTie, FaUser, FaShoppingCart, FaBuilding, FaLeaf, FaBookOpen, FaGraduationCap, FaSignInAlt, FaRegRegistered } from 'react-icons/fa';

const menuLinks = [
  { href: "/professionals", label: "Pro Profíky", icon: <FaUserTie /> },
  { href: "/clients", label: "Pro Klienty", icon: <FaUser /> },
  { href: "/eshop", label: "E-shop", icon: <FaShoppingCart /> },
  { href: "/properties", label: "Nemovitosti", icon: <FaBuilding /> },
  { href: "/sustainability", label: "Udržitelnost & Smart", icon: <FaLeaf /> },
  { href: "/magazine", label: "Magazín", icon: <FaBookOpen /> },
  { href: "/academy", label: "Academy", icon: <FaGraduationCap /> },
];

export default function Header() {
  return (
    <nav className="bg-gray-900 text-white sticky top-0 z-20 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-3">
        <Link href="/" className="flex items-center gap-2 text-3xl font-bold text-green-500">
          ONEPLACE
        </Link>
        <div className="flex items-center space-x-6">
          {menuLinks.map(link => (
            <Link key={link.href} href={link.href} className="flex items-center gap-2 hover:text-green-400 transition">
              {link.icon}
              <span>{link.label}</span>
            </Link>
          ))}
          <span className="hover:text-green-400 cursor-pointer">EN</span>
        </div>
        <div className="flex items-center space-x-4">
          <button className="flex items-center gap-2 hover:text-green-400 transition"><FaSignInAlt />Sign In</button>
          <button className="flex items-center gap-2 bg-green-600 px-4 py-2 rounded hover:bg-green-700 transition text-white"><FaRegRegistered />Register</button>
        </div>
      </div>
    </nav>
  );
}