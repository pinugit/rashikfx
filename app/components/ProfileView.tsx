import React from "react";
import { AiFillSetting } from "react-icons/ai";
import { IoIosNotifications } from "react-icons/io";

const ProfileView = () => {
  return (
    <div className="flex justify-between">
      <div className="avatar">
        <div className="w-12 rounded-full">
          <img src="https://th.bing.com/th/id/R.5a0ca145cd59e75337e41bf74cdce1b9?rik=vYT8u59JKboRow&riu=http%3a%2f%2fwww.buckinghamandcompany.com.au%2fwp-content%2fuploads%2f2016%2f03%2fprofile-placeholder.png&ehk=utyTQPtGFj87RTm1YalDJ78egfurl4att7Q3FrKAY2k%3d&risl=&pid=ImgRaw&r=0 " />
        </div>
      </div>
      <div>
        <h2 className="mb-2">RASHIK SHEKHAR</h2>
        <div className="rounded-2xl bg-green-600 text-[10px] w-fit p-1 py-0.5">
          Verified
        </div>
      </div>
      <details className="dropdown dropdown-end">
        <summary className="flex justify-center items-center text-2xl">
          <AiFillSetting />
        </summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li>
            <a>Your Detail</a>
          </li>
          <li>
            <a>Change Password</a>
          </li>
          <li>
            <a>NewsLetter</a>
          </li>
          <li>
            <a>More Settings</a>
          </li>
          <li>
            <a>Account Logs</a>
          </li>
          <li>
            <a>Languages</a>
          </li>
          <li>
            <a> Log Out</a>
          </li>
        </ul>
      </details>
      <div className="flex justify-center  text-2xl">
        <IoIosNotifications />
      </div>
    </div>
  );
};

export default ProfileView;
