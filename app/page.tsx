import AccountType from "./components/AccountType";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 items-center mt-28">
      <div className="card-custom">
        <h1>For You</h1>
        <div className="carousel"></div>
      </div>
      <AccountType />
      <div className="card-custom">this</div>
      <div className="card-custom">is </div>
    </div>
  );
}
