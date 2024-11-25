import Link from "next/link";

export default function SubNavigation() {
  return (
    <nav className="bg-gray-700 p-3 text-white">
      <ul className="flex justify-around text-sm">
        <li><Link href="/categories/fruits-vegetables" className="hover:text-green-400">Fruits & Vegetables</Link></li>
        <li><Link href="/categories/dairy" className="hover:text-green-400">Dairy</Link></li>
        <li><Link href="/categories/snacks" className="hover:text-green-400">Snacks</Link></li>
        <li><Link href="/categories/bakery" className="hover:text-green-400">Bakery</Link></li>
        <li><Link href="/categories/frozen" className="hover:text-green-400">Frozen</Link></li>
      </ul>
    </nav>
  );
}
