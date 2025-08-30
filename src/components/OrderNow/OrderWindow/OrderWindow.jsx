import OrderNow from "../OrderNow";
import css from "./OrderWindow.module.css";
import { useEffect } from "react";

const OrderWindow = ({ orderOpen, close }) => {
  useEffect(() => {
    if (orderOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [orderOpen]);

  return (
    <div className={`${css.container} ${orderOpen ? css.open : ""}`}>
      <OrderNow close={close} />
    </div>
  );
};

export default OrderWindow;
