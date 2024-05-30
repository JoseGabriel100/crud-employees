import app from "./app.js";

app.listen(app.get("port"), () => {
  console.log(`Server lisning ${app.get("port")}`);
});
