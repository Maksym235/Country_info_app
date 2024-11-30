import axios from "axios";
type IPopulationDataType = {
	country: string;
	code: string;
	iso3: string;
	populationCounts: {
		value: number;
		year: number;
	}[];
};

export const getPopulations = async (country: string) => {
	try {
		const resp = await axios.get(`${process.env.DATA_URL_2}/population`);
		const respone = resp.data.data as IPopulationDataType[];
		const filteredByCode = respone.find(
			(el) => el.country.toLocaleLowerCase() === country.toLocaleLowerCase(),
		)?.populationCounts;
		return filteredByCode;
	} catch (error: any) {
		throw new Error(error.message);
	}
};
