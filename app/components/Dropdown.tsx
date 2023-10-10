"use client";

import { ChangeEvent } from "react";

interface dropDownItemsData {
  accNo: number;
}

interface props {
  dropDownItems: dropDownItemsData[];
  onAccSelect: (accNo: number) => void;
}

const Dropdown = ({ dropDownItems, onAccSelect }: props) => {
  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    // Get the selected value from the event
    const selectedValue = event.target.value;

    // Convert the selected value to a number (since accNo is of type number)
    const accNo = parseInt(selectedValue, 10);

    // Call the onAccSelect function with the selected accNo
    onAccSelect(accNo);
  };

  return (
    <>
      <p className="pl-3 pb-2">SELECT ACCOUNT</p>
      <select
        onChange={(event) => handleSelectChange(event)}
        className="select select-bordered w-[60%]"
      >
        {dropDownItems.map((item, index) => (
          <option
            key={index}
            value={item.accNo}
            className="flex justify-between"
          >
            {item.accNo}
          </option>
        ))}
      </select>
    </>
  );
};

export default Dropdown;
