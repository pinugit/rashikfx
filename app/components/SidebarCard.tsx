const SidebarCard = () => {
  return (
    <div className="card-custom p-4 bg-base-200 w-full ">
      <div className="border-b-4 border-base-100 pb-3">
        <h2>Bronze</h2>
      </div>
      <div className="flex justify-between">
        <div className="py-4">
          <p className="text-base-300">OverAll Balance</p>
          <p>$0</p>
        </div>
        <div className="py-4">
          <p className="text-base-300">OverAll Balance</p>
          <p>$0</p>
        </div>
      </div>

      <a className="link-secondary font-bold">DEPOSIT</a>
    </div>
  );
};

export default SidebarCard;
