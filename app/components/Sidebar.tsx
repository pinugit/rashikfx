import ProfileView from "./ProfileView";
import SidebarCard from "./SidebarCard";

const Sidebar = () => {
  return (
    <div className="w-[20%] h-screen fix ed z-50 right-0 bg-base-100 p-3 flex flex-col gap-6">
      <ProfileView />
      <SidebarCard />
    </div>
  );
};

export default Sidebar;
