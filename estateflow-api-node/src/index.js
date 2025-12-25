import app from "./app.js";
import connectDB from "./db/connection.js";

connectDB()
.then(() => {
  app.listen(process.env.PORT,  () => {
    console.log("\nExpress  server is running at port: ", process.env.PORT);
  });
})
.catch((error) => {
  console.error("Mongodb connection failed! ", error);
});