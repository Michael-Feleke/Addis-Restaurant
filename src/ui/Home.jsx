import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "../../../fast-pizza/src/ui/Button";

function Home() {
  const { username } = useSelector((state) => state.user);

  return (
    <div className="  mx-16 space-x-8 medium:space-x-32 h-full medium:flex medium:justify-around medium:items-center">
      <div className="mt-10 h-auto">
        <h1 className="text-stone-700 font-semibold text-center mb-8 text-2xl xlarge:text-5xl">
          Savor the Flavors.
          <br />
          <span className="text-yellow-400">
            From our kitchen direct
            <br />
            to your table.
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
      <div className="hidden medium:block">
        <div className=" medium:flex justify-center items-center w-64 h-64 xlarge:w-96 xlarge:h-96 bg-yellow-400 rounded-full   shadow-lg">
          <img
            src="/chefs.png"
            alt="chefs"
            className=" w-52 h-52 xlarge:w-80 xlarge:h-80 object-cover rounded-full border-8 border-white"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
