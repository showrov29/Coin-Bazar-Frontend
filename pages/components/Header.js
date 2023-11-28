import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link href="" className="text-xl font-bold">
            <img className=" w-100 h-10" src="/images/header.png" alt="logo" />
          </Link>
        </div>
        <div className="flex items-center space-x-1">
          <div>
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-200 rounded p-1 focus:outline-none"
            />
          </div>
          <div>
            <Link
              className="bg-orange-500 text-white rounded px-4 py-2"
              href="/auth/signin"
            >
              Sign In
            </Link>
          </div>
          <div>
            <Link
              href="/auth/signup"
              className="bg-orange-500 text-white rounded px-4 py-2"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
