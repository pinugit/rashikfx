import { AiOutlineQuestionCircle } from "react-icons/ai";
import Dropdown from "./components/Dropdown";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 items-center mt-28">
      <div className="card-custom">
        <h1>For You</h1>
        <div className="carousel"></div>
      </div>
      <div className="card-custom flex flex-col gap-3 ">
        <h1>
          Primary Account <AiOutlineQuestionCircle className="text-xl pt-1" />
        </h1>
        <div className="w-[100%]">
          <Dropdown
            dropDownItems={[
              { accNo: 13434322, accBalance: 200 },
              { accNo: 13434333, accBalance: 3 },
            ]}
          />
        </div>
      </div>
      <div className="card-custom">this</div>
      <div className="card-custom">is </div>
    </div>
  );
}
