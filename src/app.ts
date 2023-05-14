import express, { json, Request, Response, NextFunction } from "express";
import router from "./routes/taskRoutes";

const app = express();

app.use(json());
app.use("/tasks", router);

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(500).send("Something broke!");
});

app.listen(3000, () => {
  console.log("App listening on port 3000...");
});
