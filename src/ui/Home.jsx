import CreateUser from "../features/user/CreateUser";

function Home() {
  return (
    <div className="flex justify-around items-center m-16  ">
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
      <div>
        <img src="./public/chefs.png" alt="chefs" className="w-96" />
      </div>
    </div>
  );
}

export default Home;
