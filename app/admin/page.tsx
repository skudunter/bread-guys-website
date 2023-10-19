type order = {
  email: string;
  mobileNumber: number;
  adddress: string;
  numberOfLoaves: number;
};

export default async function AdminPage() {
  let orders: order[] = [];
  const res: Response = await fetch("http://localhost:3000/api/getOrderData", {
    cache: "no-cache",
  });
  let data = await res.json();
  orders = data;

  if (!res.ok) {
    throw new Error("Failed to get data");
  }

  return (
    <div>
      <h1>Admin Page</h1>
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Email
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              MobileNumber
            </th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order: any, index: number) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {order.email}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {order.mobileNumber}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
