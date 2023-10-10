"use client";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import Dropdown from "./Dropdown";
import { accountData } from "./AccountData";
import { useEffect, useState } from "react";

interface AccountDataItem {
  accNo: number;
  accBalance: number;
  server: string;
  leverage: string;
  noSwap: string;
  fixedRate: string;
  freeMargin: number;
  equity: number;
}

const AccountType = () => {
  const [selectedAccount, setSelectedAccount] = useState<number>();
  const [selectedAccountObject, setSElectedAccountObject] =
    useState<AccountDataItem>();

  useEffect(() => {
    setSElectedAccountObject(
      selectedAccount
        ? accountData.find((obj) => obj.accNo === selectedAccount)
        : accountData[0]
    );
  }, [selectedAccount]);

  return (
    <div className="card-custom flex flex-col gap-3 ">
      <h1>
        Primary Account <AiOutlineQuestionCircle className="text-xl pt-1" />
      </h1>
      <div className="w-[100%]">
        <Dropdown
          dropDownItems={accountData}
          onAccSelect={(accNo) => setSelectedAccount(accNo)}
        />
      </div>

      <div className="flex gap-6">
        <div id="overview" className="">
          <h2>OVERVIEW</h2>

          <ul>
            <li>
              <p>Server</p> <p>{selectedAccountObject?.server}</p>
            </li>
            <li>
              <p>Leverage</p> <p>{selectedAccountObject?.leverage}</p>
            </li>
            <li>
              <p>No Swap</p> <p>{selectedAccountObject?.noSwap}</p>
            </li>
            <li>
              <p>Fixed Rate</p> <p>{selectedAccountObject?.fixedRate}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AccountType;
