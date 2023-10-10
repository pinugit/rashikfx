export const sideBarData = [
  {
    logo: "",
    title: "DASHBOARD",
    path: "/",
    isDropDown: false,
  },
  {
    logo: "",
    title: "WITHDRAW",
    path: "/",
    isDropDown: false,
  },
  {
    logo: "",
    title: "WALLET",
    path: "/",
    isDropDown: true,
    subMenu: ["DEPOSIT", "WITHDRAW"],
  },
  {
    logo: "",
    title: "INTERNAL TRANSFER",
    path: "/",
    isDropDown: false,
  },
  {
    logo: "",
    title: "PROMOTIONS",
    path: "/",
    isDropDown: false,
  },
  {
    logo: "",
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
    logo: "",
    title: "TRADING ACCOUNTS",
    path: "/  ",
    isDropDown: true,
    subMenu: ["ACCOUNT LIST", "MANAGE BONUSES", "MONGERING"],
  },
];
