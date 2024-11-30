import axios from "axios";

export const getAvailable = async () => {
	try {
		const resp = await axios.get(
			`${process.env.DATA_URL_1}/AvailableCountries`,
		);
		return resp.data;
	} catch (error: any) {
		throw new Error(error.message);
	}
};
