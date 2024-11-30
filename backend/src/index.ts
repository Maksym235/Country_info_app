import express from "express";
import cors from "cors";
import "dotenv/config";
import CountriesRouter from "./routers/countries";

const app = express();
app.use(cors());
app.use("/api/countries", CountriesRouter);
const port = process.env.PORT || 3002;
app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});
