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
    <div className="card-custom flex flex-col gap-6 ">
      <h1>
        Primary Account <AiOutlineQuestionCircle className="text-xl pt-1" />
      </h1>
      <div className="w-[100%]">
        <Dropdown
          dropDownItems={accountData}
          onAccSelect={(accNo) => setSelectedAccount(accNo)}
        />
      </div>

      <div className="flex gap-14 w-[100%]">
        <div id="overview" className="flex-1">
          <h2>OVERVIEW</h2>

          <ul>
            <li className="li-custom">
              <div>Server</div>{" "}
              <div className="text-white">{selectedAccountObject?.server}</div>
            </li>
            <li className="li-custom">
              <div>Leverage</div>{" "}
              <div className="text-white">
                {selectedAccountObject?.leverage}
              </div>
            </li>
            <li className="li-custom">
              <div>No Swap</div>{" "}
              <div className="text-secondary">
                {selectedAccountObject?.noSwap}
              </div>
            </li>
            <li className="li-custom">
              <div>Fixed Rate</div>{" "}
              <div className="text-white">
                {selectedAccountObject?.fixedRate}
              </div>
            </li>
          </ul>
        </div>
        <div className="w-2/4 flex flex-col gap-4">
          <h2>Current Funds</h2>
          <div className="flex justify-between">
            <div>
              <div className="text-base-300 mb-3">Free Margin</div>
              <div className="text-lg font-bold">
                ${selectedAccountObject?.freeMargin}
              </div>
            </div>
            <div>
              <div className="text-base-300 mb-3">Equity</div>
              <div className="text-lg font-bold">
                ${selectedAccountObject?.equity}
              </div>
            </div>
            <div>
              <div className="text-base-300 mb-3">Balance</div>
              <div className="text-lg font-bold">
                ${selectedAccountObject?.accBalance}
              </div>
            </div>
          </div>
          <div className="flex justify-between gap-3 px-3 mt-3">
            <div className="btn btn-primary rounded-4xl flex-1">
              NEW DEPOSIT
            </div>
            <div className="btn btn-default rounded-4xl flex-1">Trade</div>
          </div>

          <a className="link-secondary fot-sm" href="">
            FORGOT TRADING ACCOUNT PASSWORD?
          </a>
        </div>
      </div>
    </div>
  );
};

export default AccountType;
