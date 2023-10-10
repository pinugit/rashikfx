import ProfileView from "./ProfileView";

const Sidebar = () => {
  return (
    <div className="w-[20%] h-screen fixed z-50 right-0 bg-base-100 p-3 ">
      <ProfileView />
    </div>
  );
};

export default Sidebar;
