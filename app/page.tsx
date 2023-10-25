import AccountTable from "./components/AccountTable";
import AccountType from "./components/AccountType";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 items-center mt-28 mb-20">
      <div className="card-custom">
        <h1>For You</h1>
        <div className="carousel"></div>
      </div>
      <AccountType />
      <div className="card-custom">
        <h1>50% BONUSES</h1>
        <div className="flex justify-between gap-6 mt-3">
          <p className="text-base">
            Here you&apos;ll find information about all your active and
            available bonuses. You can claim a bonus on each deposit.
          </p>
          <div className="btn btn-neutral">Get Bonus</div>
        </div>
        <a className="link-secondary text-xs mt-6" href="">
          Learn More About Deposit Bonuses
        </a>
      </div>
      <AccountTable />
    </div>
  );
}
