import Link from "next/link";
import styles from "./page.module.css";
import { Button } from "@radix-ui/themes";

export default function Home() {
	return (
		<div className={styles.container}>
			<h1>Wellcome to country info app</h1>
			<Button size="4">
				<Link style={{ color: "#fff" }} href="/countries">
					Go to countries list
				</Link>
			</Button>
		</div>
	);
}
