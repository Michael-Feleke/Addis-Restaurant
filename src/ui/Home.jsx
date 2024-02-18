import CreateUser from "../features/user/CreateUser";

function Home() {
  return (
    <div className="flex justify-around items-center mx-16   space-x-[100px] h-full ">
      <div>
        <h1 className="text-stone-700 font-semibold text-center mb-8 text-xl md:text-5xl">
          Savor the Flavors,
          <br />
          <span className="text-yellow-400">
            From our kitchen to your table.
          </span>
        </h1>
        <CreateUser />
      </div>
      <div className="flex flex-col justify-center items-center w-96 h-96 bg-yellow-400 rounded-full overflow-hidden shadow-lg">
        <img
          src="./public/chefs.png"
          alt="chefs"
          className="my-3 w-80 h-80 object-cover rounded-full border-8 border-white"
        />
      </div>
    </div>
  );
}

export default Home;
