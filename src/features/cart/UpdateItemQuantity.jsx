import Button from "../../ui/Button";

function UpdateItemQuantity() {
  return (
    <div className="flex gap-1">
      <Button type="round" onClick={handleIncreaseQuantity}>
        +
      </Button>
      <Button type="round" onClick={handleDecreaseQuantity}>
        -
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
