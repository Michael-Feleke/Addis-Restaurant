import CreateUser from "../features/user/CreateUser";

function Home() {
  return (
    <div className="flex justify-between items-center m-16  ">
      <div>
        <h1 className="text-stone-700 font-semibold text-center mb-8 text-xl">
          Savor the Flavors.
          <br />
          <span className="text-yellow-500">
            From our kitchen to your table.
          </span>
        </h1>
        <CreateUser />
      </div>
      <div>Image</div>
    </div>
  );
}

export default Home;
