import { Database, OPEN_READWRITE, OPEN_CREATE } from "sqlite3";
import { existsSync } from "fs";

//create a class to connect to the db
class sqliteDB {
  db: Database | null = null;
  constructor(dbPath: string) {
    // make db connection if does not exist
    if (!existsSync(dbPath)) {
      this.db = new Database(dbPath, OPEN_CREATE | OPEN_READWRITE, (err) => {
        if (err) console.error(err);
      });
      console.log("created db connection");
      if (this.db) {
        //create the order table in orders.db
        this.db.serialize(() => {
          this.db!.run(
            "CREATE TABLE IF NOT EXISTS orders (email TEXT, mobileNumber INTEGER, address TEXT, numberOfLoaves INTEGER);",
            (err: any) => {
              if (err) console.error(err);
            }
          );
          console.log("created table orders if not exists");
        });
      } else {
        console.log("db error while creating table");
      }
    }
  }
  insertNewRecord(
    email: string,
    mobileNumber: number,
    address: string,
    numberOfLoaves: number
  ) {
    // insert new record into db
    if (this.db) {
      this.db.serialize(() => {
        this.db!.run(
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
    } else {
      console.log("db error while adding new record");
    }
  }
}
const customDB: sqliteDB = new sqliteDB("./orders.db");
export default customDB;
