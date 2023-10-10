import ProfileView from "./ProfileView";
import { sideBarData } from "./SideBarData";
import SidebarCard from "./SidebarCard";

const Sidebar = () => {
  return (
    <div className="w-[20%] h-screen fixed z-50 right-0 bg-base-100 p-3 flex flex-col gap-6">
      <ProfileView />
      <SidebarCard />
      <div className="overflow-auto">
        <ul className="menu bg-base-100">
          {sideBarData.map((item, index) =>
            item.isDropDown ? (
              <li key={index} className="p-3 text-lg">
                <details>
                  <summary>
                    {item.logo}
                    {item.title}
                  </summary>
                  {item.subMenu?.map((subItem, index) => (
                    <li key={index} className="pl-5">
                      <a>{subItem}</a>
                    </li>
                  ))}
                </details>
              </li>
            ) : (
              <li key={index} className="p-3 text-lg">
                <a>
                  {" "}
                  {item.logo}
                  {item.title}
                </a>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
