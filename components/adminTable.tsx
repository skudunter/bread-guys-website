import { order } from "@/app/lib/types";
import DeleteButton from "./deleteButton";
export default function AdminTable({ orders }: { orders: order[] }) {
  return (
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
              <DeleteButton ID={order.ID!}/>
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
  );
}
