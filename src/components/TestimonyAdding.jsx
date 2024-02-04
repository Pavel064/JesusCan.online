import { Link } from "react-router-dom";

import NeumorphicButton from "./NeumorphicButton";

const TestimonyAdding = () => {
  return (
    <div className="h-52 bg-[#EDEDE9] flex items-center">
      <div className="mx-auto uppercase text-5xl font-semibold 2xl:max-w-7xl">
        <Link to="/adding-testimony">
          <NeumorphicButton
            label="Add your testimony"
            btnStyle={{
              width: "208px",
              height: "88px",
              border: "6px solid transparent",
            }}
          />
        </Link>
      </div>
    </div>
  );
};

export default TestimonyAdding;
