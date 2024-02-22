function MenuNav() {
  return (
    <nav className="bg-gray-800 my-8">
      <div className="mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-auto items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="sm:ml-6 sm:block">
              <div className="flex flex-wrap items-center justify-center space-x-2">
                <a
                  href="#"
                  className="tracking-wide bg-gray-700 text-white rounded-md px-3 py-2 text-sm font-medium hover:border-l-2 hover:border-yellow-400 border-l-2 border-yellow-400"
                  aria-current="page"
                >
                  VEGETARIAN ENTREE
                </a>
                <a
                  href="#"
                  className="tracking-wide text-gray-300 hover:bg-gray-700 hover:border-l-2 hover:border-yellow-400 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  BEEF ENTREE
                </a>
                <a
                  href="#"
                  className=" hover:border-l-2 hover:border-yellow-400 tracking-wide text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  LAMB ENTREE
                </a>
                <a
                  href="#"
                  className="hover:border-l-2 hover:border-yellow-400 tracking-wide text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  CHICKEN ENTREE
                </a>
                <a
                  href="#"
                  className="hover:border-l-2 hover:border-yellow-400 tracking-wide text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  MEAT COMBINATION
                </a>
                <a
                  href="#"
                  className="hover:border-l-2 hover:border-yellow-400 tracking-wide text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  PASTA & RICE
                </a>
                <a
                  href="#"
                  className="hover:border-l-2 hover:border-yellow-400 tracking-wide text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  DRINKS
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default MenuNav;
