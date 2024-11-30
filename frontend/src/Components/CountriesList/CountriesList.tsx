"use client";
import React, { useEffect, useState } from "react";
import styles from "./CountriesList.module.css";
import axios from "axios";
import Image from "next/image";
import { Grid } from "@radix-ui/themes";
import { useMatchMedia } from "@/hooks/useMatchMedia";
import Link from "next/link";
export type AvCountriesType = {
	name: string;
	countryCode: string;
};
export const CountriesList = () => {
	const [availableCountries, seAvailableCountries] = useState<
		AvCountriesType[]
	>([]);
	const { isMobile } = useMatchMedia();
	useEffect(() => {
		const fethData = async () => {
			try {
				const resp = await axios.get(
					"http://localhost:3001/api/countries/available",
				);
				seAvailableCountries(resp.data.availables);
				return resp.data;
			} catch (error: unknown) {
				console.log(error);
			}
			return;
		};
		fethData();
	}, []);

	return (
		// <ul className={styles.list}>
		<Grid
			maxWidth={"100%"}
			columns={isMobile ? "2" : "4"}
			gap="3"
			rows="repeat(2, 64px)"
			width="auto"
		>
			{availableCountries &&
				availableCountries.map((el) => (
					<Link
						href={{
							pathname: `${el.name}`,
							query: { code: el.countryCode },
						}}
						className={styles.list_item}
						key={el.countryCode}
					>
						{el.name}
						<Image
							width={20}
							height={20}
							src={"arrow-up-right-from-square-svgrepo-com.svg"}
							alt="arrow link"
						></Image>
					</Link>
				))}
		</Grid>
		// </ul>
	);
};
