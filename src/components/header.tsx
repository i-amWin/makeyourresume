import Link from "next/link";
import GetStarted from "./get-started";

export default function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-[50] border-b bg-background/30 backdrop-blur">
      <div className="mx-auto flex max-w-[77.5rem] items-center justify-between px-4 py-2 pr-6">
        <Link
          href="/"
          className="-ml-1 flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          <svg
            width="50"
            height="50"
            viewBox="0 0 70 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.0212 13.6247C29.6649 6.62089 40.3351 6.62089 45.9788 13.6247V13.6247C47.5462 15.5699 49.6022 17.0636 51.9365 17.9532V17.9532C60.3415 21.1564 63.6388 31.3044 58.7217 38.8361V38.8361C57.3561 40.9279 56.5708 43.3449 56.4461 45.8398V45.8398C55.997 54.8233 47.3646 61.0951 38.6821 58.7461V58.7461C36.2707 58.0938 33.7293 58.0938 31.3179 58.7461V58.7461C22.6354 61.0951 14.003 54.8233 13.5539 45.8398V45.8398C13.4292 43.3449 12.6439 40.9279 11.2783 38.8361V38.8361C6.36123 31.3044 9.6585 21.1564 18.0635 17.9532V17.9532C20.3978 17.0636 22.4538 15.5699 24.0212 13.6247V13.6247Z"
              fill="#FFB400"
            />
            <path
              d="M35 32.2778C38.0069 32.2778 40.4444 29.8402 40.4444 26.8333C40.4444 23.8264 38.0069 21.3889 35 21.3889C31.9931 21.3889 29.5555 23.8264 29.5555 26.8333C29.5555 29.8402 31.9931 32.2778 35 32.2778Z"
              fill="#FFF8E6"
            />
            <path
              d="M46.2778 41.125C46.2778 44.5078 46.2778 47.25 35.3889 47.25C24.5 47.25 24.5 44.5078 24.5 41.125C24.5 37.7422 29.3751 35 35.3889 35C41.4027 35 46.2778 37.7422 46.2778 41.125Z"
              fill="#FEE6AD"
            />
          </svg>

          <span className="inline-block text-lg font-bold uppercase text-accent">
            Make Your Resume
          </span>
        </Link>

        <GetStarted />
      </div>
    </header>
  );
}
