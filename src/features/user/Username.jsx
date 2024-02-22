import { useSelector } from "react-redux";

function Username() {
  const { username } = useSelector((state) => state.user);

  if (!username) return null;

  return (
    <div className="text-sm tracking-wider font-semibold text-white">
      {username}
    </div>
  );
}

export default Username;
