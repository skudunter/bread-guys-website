import { Database, OPEN_READWRITE, OPEN_CREATE } from "sqlite3";
//connect to the db in orders.db
export const db = new Database(
  "./orders.db",
  OPEN_CREATE | OPEN_READWRITE,
  (err) => {
    if (err) console.error(err);
  }
);
console.log("created db connection");

//create the table orders
db.serialize(() => {
  db.run(
    "CREATE TABLE IF NOT EXISTS orders (email TEXT, mobileNumber INTEGER, address TEXT, numberOfLoaves INTEGER);",
    (err) => {
      if (err) console.error(err);
    }
  );
  console.log("created table orders");
});

export default function updateDB(
  email: string,
  mobileNumber: number,
  address: string,
  numberOfLoaves: number
) {
  // insert new record into db
  db.serialize(() => {
    db.run(
      "INSERT INTO orders (email, mobileNumber, address, numberOfLoaves) VALUES (?, ?, ?, ?);",
      email,
      mobileNumber,
      address,
      numberOfLoaves,
      (err: any) => {
        if (err) console.error(err);
      }
    );
    console.log("created new user record");
  });
}
