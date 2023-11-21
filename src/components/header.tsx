import Link from "next/link";
// import { ThemeToggler } from "./theme-toggler";

export default function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-[999] bg-secondary-900/80 backdrop-blur border-b border-b-secondary-700">
      <div className="mx-auto flex max-w-screen-lg items-center justify-between px-4 py-3">
        <Link
          href="/"
          className="text-xl font-semibold tracking-wider sm:text-2xl "
        >
          MYR
        </Link>

        {/* <ThemeToggler /> */}
      </div>
    </header>
  );
}
