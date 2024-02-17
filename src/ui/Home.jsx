import CreateUser from "../features/user/CreateUser";

function Home() {
  return (
    <div className="flex justify-around items-center mx-16  h-full ">
      <div>
        <h1 className="text-stone-700 font-semibold text-center mb-8 text-xl md:text-5xl">
          Savor the Flavors.
          <br />
          <span className="text-yellow-500">
            From our kitchen to your table.
          </span>
        </h1>
        <CreateUser />
      </div>
      <div className="flex flex-col justify-center items-center w-[500px] h-[500px] bg-yellow-500 rounded-full overflow-hidden">
        <p className="uppercase font-bold text-3xl text-slate-700">Addis</p>
        <img src="./public/chefs.png" alt="chefs" className="my-3" />
        <p className="uppercase font-bold text-3xl text-slate-700">
          Restaurant
        </p>
      </div>
    </div>
  );
}

export default Home;
