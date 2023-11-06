import { Link } from "./Link";

export const Header = () => {
  return (
    <header>
      <div className="flex space-between border-b p-4 dark:bg-slate-900 dark:border-slate-600">
        <div className="flex-1 text-red-400 dark:text-red-300 font-bold">
          <Link href="/">Abandoned Products Hunt</Link>
        </div>
        <div className="flex-[2]">
          <nav className="flex">
            <ul className="flex space-between flex-[3] text-slate-500 dark:text-slate-100">
              <li className="flex-1">
                <Link href="/products">Products</Link>
              </li>
              <li className="flex-1">
                <Link href="/about">About</Link>
              </li>
              <li className="flex-1">
                <Link href="/advertise">Advertise</Link>
              </li>
            </ul>
            <ul className="flex space-between flex-1">
              <li className="flex-1 text-red-400 dark:text-red-300">
                <Link href="/submit">Submit</Link>
              </li>
              <li className="flex-1">Profile</li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
