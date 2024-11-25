import MainNavigation from "./components/MainNavigation";
import SubNavigation from "./components/SubNavigation";

export default function Home() {
  return (
    <div>
      <MainNavigation />
      <SubNavigation />
      <main className="p-8">
        <h1 className="text-2xl font-bold">Welcome to My Grocery Store</h1>
        <p>Discover fresh produce, dairy, bakery, and more.</p>
      </main>
    </div>
  );
}
