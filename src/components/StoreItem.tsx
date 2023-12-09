import { Button, Card } from "react-bootstrap";
import { formatCurrnecy } from "../utilities/formatCurrancy";
import useShoppingCart from "../context/useShoppingCart";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  const {
    getItemQuantity,
    increaseCartQuntity,
    decreaseCartQuntity,
    removeFromCart,
  } = useShoppingCart();

  const quantity = getItemQuantity(id);

  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={imgUrl}
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-felx flex-column">
        <Card.Title className="d-felx justify-content-space-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{formatCurrnecy(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button
              className="w-100"
              onClick={() => increaseCartQuntity(id)}
            >
              + Add to Cart
            </Button>
          ) : (
            <div
              className="d-flex align-items-center justify-content-center flex-column"
              style={{ gap: ".5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: ".5rem" }}
              >
                <Button onClick={() => decreaseCartQuntity(id)}>-</Button>
                <div className="fs-3">
                  <div>
                    <span>{quantity}</span>
                  </div>
                </div>
                <Button onClick={() => increaseCartQuntity(id)}>+</Button>
              </div>
              <Button
                variant="danger"
                size="sm"
                onClick={() => removeFromCart(id)}
              >
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
