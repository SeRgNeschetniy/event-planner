import { ThreeCircles } from "react-loader-spinner";
import { Wrapp } from "./Loader.styled";

export const Loader = () => {
  return (
    <Wrapp>
      <ThreeCircles
        height="200"
        width="200"
        color="#7B61FF"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
    </Wrapp>
  );
};
