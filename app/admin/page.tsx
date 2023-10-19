import { order } from "../lib/types";
import PageIllustration from "@/components/page-illustration";
export const metadata = {
  title: "Admin page | The Bread People",
  description: "yo",
};
export default async function AdminPage() {
  // console.log('how tf did u get here can u please not do anything bad? and direct my site weaknesses to danielgruttercpt@gmail.com');

  let orders: order[] = [];

  const res: Response = await fetch("http://localhost:3000/api/getOrderData", {
    method: "POST",
    body: JSON.stringify({ password: process.env.COOKIE_NAME }),
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to get data");
  }

  let data = await res.json();
  orders = data;

  return (
    orders !== undefined &&
    orders.length > 0 && (
      <div>
        <PageIllustration />
        <h1 className="text-4xl font-bold mx-auto text-center">
          Admin Page🔥🔥
        </h1>
        <table className="min-w-full divide-y divide-gray-600">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-md font-extrabold text-gray-700 uppercase tracking-wider"></th>
              <th className="px-6 py-3 text-left text-md font-extrabold text-gray-700 uppercase tracking-wider">
                ID
              </th>
              <th className="px-6 py-3 text-left text-md font-extrabold text-gray-700 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-md font-extrabold text-gray-700 uppercase tracking-wider">
                MobileNumber
              </th>
              <th className="px-6 py-3 text-left text-md font-extrabold text-gray-700 uppercase tracking-wider">
                Address
              </th>
              <th className="px-6 py-3 text-left text-md font-extrabold text-gray-700 uppercase tracking-wider">
                NumberOfLoaves
              </th>
              <th className="px-6 py-3 text-left text-md font-extrabold text-gray-700 uppercase tracking-wider">
                Order Time
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order: order, index: number) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 font-bold">
                  <button>jiiji</button>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 font-bold">
                  {order.ID}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 font-bold">
                  {order.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 font-bold">
                  {order.mobileNumber}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 font-bold">
                  {order.address}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 font-bold">
                  {order.numberOfLoaves}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 font-bold">
                  {order.time.toString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  );
}
