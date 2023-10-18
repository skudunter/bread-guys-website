import { NextRequest, NextResponse } from "next/server";
import { db } from "../handleSubmit/updateDB";

type order = {
  email: string;
  mobileNumber: number;
  adddress: string;
  numberOfLoaves: number;
};

let orders: order[] = [];
export function GET(req: NextRequest, res: NextResponse) {
    console.log('request made');
    
  db.each("SELECT * FROM users", (err, row: any) => {
    orders.push({
      email: row?.email,
      mobileNumber: row?.mobileNumber,
      adddress: row?.address,
      numberOfLoaves: row?.numberOfLoaves,
    });
    console.log(orders);
  });
  return NextResponse.json(orders);
}
