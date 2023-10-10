"use client";

interface dropDownItemsData {
  accNo: number;
  accBalance: number;
}

interface props {
  dropDownItems: dropDownItemsData[];
}

const Dropdown = ({ dropDownItems }: props) => {
  return (
    <select className="select select-bordered w-[60%]">
      {dropDownItems.map((item, index) => (
        <option key={index} className="flex justify-between">
          {item.accNo}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
