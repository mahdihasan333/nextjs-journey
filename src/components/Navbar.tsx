"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav>
      <div className="w-full bg-gray-900 text-white px-6 py-3 flex items-center justify-between">
        <div className="text-xl font-bold">
          <Link href="/" className="hover:text-gray-300">
            NextJs
          </Link>
        </div>

        <div className="flex space-x-6">
          <Link href="/products" className={`${pathname === "/products" ? "text-blue-500 font-semibold underline" : "text-white hover:underline"}`}>
            Products
          </Link>
          <Link href="/about" className={`${pathname === "/about" ? "text-blue-500 font-semibold underline" : "text-white hover:underline"}`}>
            About
          </Link>
          <Link href="/contact" className={`${pathname === "/contact" ? "text-red-500 font-semibold underline" : "text-white hover:underline"}`}>
            Contact
          </Link>
          <Link href="/dashboard" className={`${pathname === "/dashboard" ? "text-blue-500 font-semibold underline" : "text-white hover:underline"}`}>
            Dashboard
          </Link>
          <Link href="/login" className="hover:text-gray-300">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
