import { Database, OPEN_READWRITE, OPEN_CREATE } from "sqlite3";

//create a class to connect to the db
class sqliteDB {
  db: Database | null = null;
  constructor(dbPath: string) {
    // make db connection if does not exist
    this.db = new Database(dbPath, OPEN_CREATE | OPEN_READWRITE, (err) => {
      if (err) console.error(err);
    });
    console.log("created db connection");
    if (this.db) {
      //create the order table in orders.db
      this.db.serialize(() => {
        this.db!.run(
          "CREATE TABLE IF NOT EXISTS orders (email TEXT, mobileNumber INTEGER, address TEXT, numberOfLoaves INTEGER, time TEXT);",
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
  insertNewRecord(
    email: string,
    mobileNumber: number,
    address: string,
    numberOfLoaves: number
  ) {
    // insert new record into db
    if (this.db) {
      this.db.serialize(() => {
        let time = convertDate();
        this.db!.run(
          "INSERT INTO orders (email, mobileNumber, address, numberOfLoaves,time) VALUES (?, ?, ?, ?, ?);",
          email,
          mobileNumber,
          address,
          numberOfLoaves,
          time,
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
  async getAllRecords() {
    // get all records from db
    let items: any = "pie";
    if (this.db) {
      this.db.serialize( () => {
        items =  this.db!.run("SELECT * FROM orders;", (err: any, rows: any) => {
          if (err) console.error(err);
        });
      });
    } else {
      console.log("db error while getting all records");
    }
    return items;
  }
}
const customDB: sqliteDB = new sqliteDB("./orders.db");
export default customDB;

function convertDate() {
  let date = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  //@ts-ignore
  return date.toLocaleString("en-US", options);
}
