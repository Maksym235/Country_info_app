import styles from "./CountryInfo.module.css";

import Image from "next/image";
import { FC } from "react";

export type CountryInfoPropsType = {
	info: {
		commonName: string | undefined;
		code: string | undefined;
		officialName: string | undefined;
		region: string | undefined;
		flag: string;
	};
};
export const CountryInfo: FC<CountryInfoPropsType> = ({ info }) => {
	return (
		<div>
			<Image src={info.flag} alt="flag country" width={200} height={200} />
			<h1>{info.officialName}</h1>
			<p className={styles.text}>
				<span className={styles.span}>Common name: </span> {info.commonName}
			</p>
			<p className={styles.text}>
				<span className={styles.span}>Country code: </span> {info.code}
			</p>
			<p className={styles.text}>
				<span className={styles.span}>Region: </span>
				{info.region}
			</p>
		</div>
	);
};
