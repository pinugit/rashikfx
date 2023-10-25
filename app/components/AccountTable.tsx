import { accountData } from "./AccountData";

const AccountTable = () => {
  return (
    <div className="card-custom ">
      <div className="flex justify-between">
        <h1>Your Account</h1>
        <h2>
          <a className="link-secondary" href="">
            CREATE ACCOUNT
          </a>
        </h2>
      </div>

      <table className="table mt-8">
        <thead>
          <tr>
            <th>Account </th>
            <th>Type</th>
            <th>Server </th>
            <th>Balance</th>
            <th>Equity</th>
          </tr>
        </thead>
        <tbody>
          {accountData.map((item, index) => (
            <tr key={index}>
              <td className="flex gap-3">
                <div className="text-orange-500 text-sm">MT5</div> {item.accNo}
              </td>
              <td>
                {item.isReal ? (
                  <div className="rounded-3xl bg-blue-700 w-fit text-xs p-1 py-[0.5]  ">
                    REAL
                  </div>
                ) : (
                  <div className="rounded-3xl bg-orange-600 w-fit text-xs p-1 py-[0.5]  ">
                    FIXED
                  </div>
                )}
              </td>
              <td>{item.server}</td>
              <td>{item.accBalance}</td>
              <td>{item.equity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AccountTable;
