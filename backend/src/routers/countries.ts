import express from "express";
import { getAvailableCountries } from "../controllers/getAvailabelsCoutries";
import { getCoutnryInfo } from "../controllers/getCountryInfo";
const router = express.Router();

router.get("/available", getAvailableCountries);

router.get("/info/:country/:code", getCoutnryInfo);

export default router;
