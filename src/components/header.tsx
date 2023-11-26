import Link from "next/link";
import ThemeToggler from "./themes/theme-toggler";

export default function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-[50] border-b bg-background/30 backdrop-blur">
      <div className="mx-auto flex max-w-screen-lg items-center justify-between px-4 py-3">
        <Link
          href="/"
          className="text-xl font-semibold tracking-wider sm:text-2xl "
        >
          MYR
        </Link>

        <ThemeToggler />
      </div>
    </header>
  );
}
