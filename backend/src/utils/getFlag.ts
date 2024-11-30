import axios from "axios";

export const getFlag = async (code: string) => {
	try {
		const resp = await axios.post(`${process.env.DATA_URL_2}/flag/images`, {
			iso2: code,
		});
		return resp.data.data.flag;
	} catch (error: any) {
		throw new Error(error.message);
	}
};
