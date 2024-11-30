import styles from "./BorderedCountries.module.css";
import { useMatchMedia } from "@/hooks/useMatchMedia";
import { Grid } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
export type BorderedCountriesPropsType = {
	brCont: {
		commonName: string;
		countryCode: string;
		officialName: string;
		region: string;
		border: unknown;
	}[];
};
export const BorderedCountries: FC<BorderedCountriesPropsType> = ({
	brCont,
}) => {
	console.log(brCont);
	const { isMobile } = useMatchMedia();
	return (
		<>
			<h2>Bordered countries</h2>
			<Grid
				maxWidth={"100%"}
				columns={isMobile ? "2" : "4"}
				gap="3"
				rows="repeat(2, 64px)"
				width="auto"
			>
				{brCont &&
					brCont.map((el) => (
						<Link
							href={{
								pathname: `${el.commonName}`,
								query: { code: el.countryCode },
							}}
							className={styles.list_item}
							key={el.commonName}
						>
							{el.officialName}
							<Image
								width={20}
								height={20}
								src={"arrow-up-right-from-square-svgrepo-com.svg"}
								alt="arrow link"
							></Image>
						</Link>
					))}
			</Grid>
		</>
	);
};
