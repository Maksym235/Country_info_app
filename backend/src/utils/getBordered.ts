import axios from "axios";

export const getBordered = async (code: string) => {
	try {
		const resp = await axios.get(
			`${process.env.DATA_URL_1}/CountryInfo/${code}`,
		);
		return resp.data.borders;
	} catch (error: any) {
		throw new Error(error.message);
	}
};
