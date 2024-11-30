"use client";
import styles from "./page.module.css";
import { BorderedCountries } from "@/Components/BorderedCountries/BorderedCountries";
import { CountryInfo } from "@/Components/CountryInfo/CountryInfo";
import { Populations } from "@/Components/Populations/Populations";
import { Button } from "@radix-ui/themes";
import axios from "axios";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
export type CountryDataType = {
	commonName: string;
	code: string;
	officialName: string;
	region: string;
	flag: string;
	borderedCountries: {
		commonName: string;
		countryCode: string;
		officialName: string;
		region: string;
		border: unknown;
	}[];
	population: {
		year: number;
		value: number;
	}[];
};
const Page = () => {
	const params = useParams();
	const query = useSearchParams();
	const code = query.get("code");
	const [countryData, setCountryData] = useState<CountryDataType | null>(null);
	// const coutnry = params.get('coutnry');
	useEffect(() => {
		const fetchData = async () => {
			try {
				const resp = await axios.get(
					`http://localhost:3001/api/countries/info/${params.country}/${code}`,
				);
				setCountryData(resp.data);
				return resp.data;
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, [code, params.country]);
	return (
		<div className={styles.container}>
			<div className={styles.btn_wrapper}>
				<Button>
					<Link href="/" style={{ color: "#fff" }}>
						Go home{" "}
					</Link>
				</Button>
				<Button>
					<Link href="/countries" style={{ color: "#fff" }}>
						Go list{" "}
					</Link>
				</Button>
			</div>
			{countryData ? (
				<div className={styles.wrapper}>
					<CountryInfo
						info={{
							officialName: countryData?.officialName,
							code: countryData?.code,
							commonName: countryData?.commonName,
							region: countryData?.region,
							flag: countryData ? countryData.flag : "",
						}}
					/>
					<BorderedCountries brCont={countryData.borderedCountries} />
					<Populations populations={countryData.population} />
				</div>
			) : (
				<div>loading...</div>
			)}
		</div>
	);
};

export default Page;
