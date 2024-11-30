import { Response, Request } from "express";
import { getBordered } from "../utils/getBordered";
import { getPopulations } from "../utils/getPopulations";
import { getFlag } from "../utils/getFlag";
import { getMainInfo } from "../utils/getMainInfo";

export const getCoutnryInfo = async (req: Request, res: Response) => {
	const { country, code } = req.params;
	const mainInfo = await getMainInfo(code);
	const borderedCountries = await getBordered(code);
	const population = await getPopulations(country);
	const flag = await getFlag(code);
	res.json({
		...mainInfo,
		flag,
		borderedCountries,
		population,
	});
};
