import { Response, Request } from "express";
import axios from "axios";
import { getAvailable } from "../utils/getAvailable";
export const getAvailableCountries = async (req: Request, res: Response) => {
	const resp = await getAvailable();

	res.json({
		code: 200,
		availables: resp,
	});
};
