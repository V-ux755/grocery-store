import Link from "next/link";

export default function MainNavigation() {
  return (
    <nav className="bg-blue-800 p-4 text-white">
      <ul className="flex justify-around font-medium">
        <li>
          <Link href="/" className="hover:text-yellow-500">Home</Link>
        </li>
        <li>
          <Link href="/products" className="hover:text-yellow-500">Products</Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-yellow-500">About</Link>
        </li>
      </ul>
    </nav>
  );
}
