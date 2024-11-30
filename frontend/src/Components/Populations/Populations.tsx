import React, { FC } from "react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
export type PopylationsPropsType = {
	populations: {
		year: number;
		value: number;
	}[];
};
export const Populations: FC<PopylationsPropsType> = ({ populations }) => {
	return (
		<div>
			<h2>Population</h2>
			<LineChart
				width={800}
				height={250}
				data={populations}
				margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
			>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="year" />
				<YAxis dataKey="value" />

				<Line type="monotone" dataKey="value" stroke="#8884d8" />
				{/* <Line type="monotone" dataKey="value" stroke="#82ca9d" /> */}
			</LineChart>
		</div>
	);
};
