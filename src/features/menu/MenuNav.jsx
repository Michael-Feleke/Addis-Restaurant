function MenuNav() {
  return (
    <nav className="bg-gray-800 my-12">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="tracking-wide bg-gray-700 text-white rounded-md px-3 py-2 text-sm font-medium"
                  aria-current="page"
                >
                  VEGETARIAN ENTREE
                </a>
                <a
                  href="#"
                  className="tracking-wide text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  BEEF ENTREE
                </a>
                <a
                  href="#"
                  className="tracking-wide text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  LAMB ENTREE
                </a>
                <a
                  href="#"
                  className="tracking-wide text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  CHICKEN ENTREE
                </a>
                <a
                  href="#"
                  className="tracking-wide text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  MEAT COMBINATION
                </a>
                <a
                  href="#"
                  className="tracking-wide text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  PASTA & RICE
                </a>
                <a
                  href="#"
                  className="tracking-wide text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
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
