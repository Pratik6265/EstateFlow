import app from "./app.js";
import dotenv from  "dotenv";
import connectDB from "./db/connection.js";

dotenv.config();

connectDB()
.then(() => {
  app.listen(process.env.PORT,  () => {
    console.log("\nExpress  server is running at port: ", process.env.PORT);
  });
})
.catch((error) => {
  console.error("Mongodb connection failed! ", error);
});