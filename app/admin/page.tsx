import { order } from "../lib/types";
import PageIllustration from "@/components/page-illustration";
import AdminTable from "@/components/adminTable";
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
    cache:'no-cache'
  });

  if (!res.ok) {
    throw new Error("Failed to get data");
  }

  let data = await res.json();
  orders = data;

  return (
    <main>
      <PageIllustration />
      <h1 className="text-4xl font-extrabold mx-auto text-center text-gray-700">
        Admin Page
      </h1>
      {orders.length > 0 && orders !== undefined && (
        <AdminTable orders={orders} />
      )}
    </main>
  );
}
