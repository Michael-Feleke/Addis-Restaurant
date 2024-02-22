import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "../../../fast-pizza/src/ui/Button";

function Home() {
  const { username } = useSelector((state) => state.user);

  return (
    <div className="flex flex-col-reverse justify-around items-center mx-16 space-x-8 h-full ">
      <div className="h-full mt-10">
        <h1 className="text-stone-700 font-semibold text-center mb-8 text-2xl">
          Savor the Flavors.
          <br />
          <span className="text-yellow-400">
            From our kitchen to your table.
          </span>
        </h1>
        {!username ? (
          <CreateUser />
        ) : (
          <div className="text-center">
            <Button to="/menu" type="primary">
              Continuer ordering, {username}!
            </Button>
          </div>
        )}
      </div>
      <div className="hidden mb-10 flex justify-center items-center w-full h-full mt-96 bg-yellow-400 shadow-lg">
        <img
          src="/chefs.png"
          alt="chefs"
          className=" w-[85%] h-[85%] object-cover  border-8 border-white"
        />
      </div>
    </div>
  );
}

export default Home;
