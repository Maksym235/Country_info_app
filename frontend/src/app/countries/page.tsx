import React from "react";
import styles from "./page.module.css";
import { CountriesList } from "@/Components/CountriesList/CountriesList";
import { Button } from "@radix-ui/themes";
import Link from "next/link";

const page = () => {
	return (
		<div className={styles.container}>
			<Button style={{ marginTop: "20px" }}>
				<Link href="/" style={{ color: "#fff" }}>
					Go home{" "}
				</Link>
			</Button>
			<h1>List of countries</h1>
			<CountriesList />
		</div>
	);
};

export default page;
