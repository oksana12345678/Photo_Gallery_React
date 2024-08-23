import { Hourglass } from "react-loader-spinner";
import css from "./Loader.module.css";
const Loader = () => {
  return (
    <div className={css.loader}>
      <Hourglass
        visible={true}
        height="40"
        width="40"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={["rgb(0, 0, 239)", "rgb(0, 0, 239)"]}
      />
    </div>
  );
};
export default Loader;
