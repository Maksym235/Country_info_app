import axios from "axios";

export const getMainInfo = async (code: string) => {
	try {
		const resp = await axios.get(
			`${process.env.DATA_URL_1}/CountryInfo/${code}`,
		);
		const mainInfo = {
			commonName: resp.data.commonName,
			officialName: resp.data.officialName,
			code: resp.data.countryCode,
			region: resp.data.region,
		};
		return mainInfo;
	} catch (error: any) {
		throw new Error(error.message);
	}
};
