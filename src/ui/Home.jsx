import CreateUser from "../features/user/CreateUser";

function Home() {
  return (
    <div>
      <h1 className="text-stone-700 font-semibold text-center text-xl">
        Savor the Flavors.
        <br />
        <span className="text-yellow-500">From our kitchen to your table.</span>
      </h1>
      <CreateUser />
    </div>
  );
}

export default Home;
