import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link href="" className="text-xl font-bold">
            <img
              src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fnohat.cc%2Ff%2Fswoosh-logo-designs-stock-vector-four-clipart-header-and-footer-design-png%2Fm2i8K9d3G6Z5m2G6-202208011740.html&psig=AOvVaw1EuyId93R-xtMTcArIBHgZ&ust=1701279302587000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMDujrad54IDFQAAAAAdAAAAABAE"
              alt="logo"
            />
          </Link>
        </div>
        <div className="flex items-center space-x-6">
          <div>
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-200 rounded p-1 focus:outline-none"
            />
          </div>
          <div>
            <Link href="/auth/signin" className="text-white">
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
