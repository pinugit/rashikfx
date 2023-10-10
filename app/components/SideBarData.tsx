import {
  BiSolidDashboard,
  BiMoneyWithdraw,
  BiWalletAlt,
  BiTransfer,
} from "react-icons/bi";

import { PiConfettiBold } from "react-icons/pi";
import { AiOutlineHistory } from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md";

export const sideBarData = [
  {
    logo: <BiSolidDashboard />,
    title: "DASHBOARD",
    path: "/",
    isDropDown: false,
  },
  {
    logo: <BiMoneyWithdraw />,
    title: "WITHDRAW",
    path: "/",
    isDropDown: false,
  },
  {
    logo: <BiWalletAlt />,
    title: "WALLET",
    path: "/",
    isDropDown: true,
    subMenu: ["DEPOSIT", "WITHDRAW"],
  },
  {
    logo: <BiTransfer />,
    title: "INTERNAL TRANSFER",
    path: "/",
    isDropDown: false,
  },
  {
    logo: <PiConfettiBold />,
    title: "PROMOTIONS",
    path: "/",
    isDropDown: false,
  },
  {
    logo: <AiOutlineHistory />,
    title: "OPERATION HISTORY",
    path: "/",
    isDropDown: true,
    subMenu: [
      "DEPOSIT HISTORY",
      "WITHDRAW HISTORY",
      "WALLET HISTORY",
      "TRANSFER HISTORY",
    ],
  },
  {
    logo: <MdAccountCircle />,
    title: "TRADING ACCOUNTS",
    path: "/  ",
    isDropDown: true,
    subMenu: ["ACCOUNT LIST", "MANAGE BONUSES", "MONGERING"],
  },
];
