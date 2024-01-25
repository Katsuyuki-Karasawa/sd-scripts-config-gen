"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

import { useState } from "react";
import toml from "@iarna/toml/stringify";

export default function Home() {
	const [inputData, setInputData] = useState({});
	const [selectedModel, setSelectedModel] = useState("");
	const [tomlData, setTomlData] = useState("");

	const handleSelectChange = (selectedValue) => {
		setSelectedModel(selectedValue);
	};

	const handleInputChange = (e) => {
		// ここで入力データを適切に解析し、オブジェクトに格納します。
		// 例: { key: "value", anotherKey: "another value" }
		setInputData({ ...inputData, [e.target.name]: e.target.value });
	};

	const convertToToml = () => {
		try {
			// Include the selected model in inputData before converting to TOML
			const dataToConvert = { ...inputData, baseModel: selectedModel };
			const tomlString = toml(dataToConvert);
			setTomlData(tomlString);
		} catch (error) {
			console.error("Error converting to TOML:", error);
		}
	};

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<Select onValueChange={handleSelectChange}>
				<SelectTrigger className="w-[180px]">
					<SelectValue placeholder="baseModel" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="stabilityai/stable-diffusion-xl-base-1.0">
						SDXL Base 1.0
					</SelectItem>
					<SelectItem value="stabilityai/stable-diffusion-xl-refiner-1.0">
						SDXL Refiner 1.0
					</SelectItem>
					<SelectItem value="stabilityai/stable-diffusion-2-1-base">
						SD v2.1 Base
					</SelectItem>
					<SelectItem value="stabilityai/stable-diffusion-2-base">
						SD v2 Base
					</SelectItem>
					<SelectItem value="runwayml/stable-diffusion-v1-5">SD 1.5</SelectItem>
					<SelectItem value="CompVis/stable-diffusion-v1-4">SD v1.4</SelectItem>
				</SelectContent>
			</Select>
			<Input type="text" name="key" onChange={handleInputChange} />
			<Input type="text" name="anotherKey" onChange={handleInputChange} />
			<Button onClick={convertToToml}>テスト</Button>
			<Textarea value={tomlData} readOnly />
		</main>
	);
}
