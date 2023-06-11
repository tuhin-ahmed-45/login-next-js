import Link from "next/link";

const links = ["Services", "Blog", "About"];

export default function Header() {
  return (
    <nav className="bg-gray-800 flex justify-between items-center h-20 p-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="w-6 h-6 text-white"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
        />
      </svg>

      <p className="text-lime-200 ml-4 font-semibold text-2xl mr-auto">
        30 Minute Coding
      </p>
      <ul className="flex md:gap-6 xs:gap-2 list-none text-gray-200 font-semibold">
        {links.map((link) => (
          <li key={link}>
            <Link
              href={link.toLowerCase()}
              className="p-2 hover:bg-gray-700 hover:rounded-md active:bg-purple-700 focus:outline-none focus:ring focus:rounded-md focus:ring-emerald-400"
            >
              {link}
            </Link>
            <p className="text-red-500"></p>
          </li>
        ))}
      </ul>
    </nav>
  );
}
