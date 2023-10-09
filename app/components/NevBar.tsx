import Link from "next/link";
import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { BiSolidBarChartSquare } from "react-icons/bi";
import { PiShootingStarBold } from "react-icons/pi";
import { AiFillGift } from "react-icons/ai";
import { HiOutlineCash } from "react-icons/hi";
import { SiSitecore } from "react-icons/si";

const NevBar = () => {
  return (
    <div className="navbar bg-base-100 fixed z-50">
      <Link className=" btn btn-ghost text-xl ml-4 text-primary" href="/">
        <SiSitecore className="" />
        RashikFX
      </Link>
      <ul className="menu menu-horizontal text-base font-bold gap-10 ml-10">
        <li>
          <Link href={""}>
            {" "}
            <BsCurrencyDollar />
            NEW DEPOSIT
          </Link>
        </li>
        <li>
          <details>
            <summary>
              <BiSolidBarChartSquare />
              TRADING
            </summary>
            <ul className="w-80 text-sm">
              <li>
                <Link href="">TRADE ON WEB</Link>
              </li>
              <li>
                <Link href="">DOWNLOAD PC APP</Link>
              </li>
              <li>
                <Link href="">DOWNLOAD ANDROID APP</Link>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <details>
            <summary>
              <PiShootingStarBold />
              BONUSES
            </summary>
            <ul className="w-80 text-sm">
              <li>
                <Link href="">Available</Link>
              </li>
              <li>
                <Link href="">Active and apply</Link>
              </li>
              <li>
                <Link href="">Auto-apply Settings</Link>
              </li>
              <li>
                <Link href="">Detailed Information</Link>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <Link href={""}>
            <AiFillGift /> PRIZE LOTS
          </Link>
        </li>
        <li>
          <Link href={""}>
            <HiOutlineCash />
            WITHDRAWS
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NevBar;
