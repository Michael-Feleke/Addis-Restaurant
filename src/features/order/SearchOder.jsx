import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOder() {
  const [query, setQuery] = useState("");
  const navigation = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigation(`/order/${query}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search by order number"
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}

export default SearchOder;
