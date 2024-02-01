"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";

import toml from "@iarna/toml/stringify";
import { useState } from "react";
import Folders from "./_components/folders";
import ParametersHome from "./parameters/page";

export default function Home() {
	const [inputData, setInputData] = useState({});
	const [tomlData, setTomlData] = useState("");

	const handleInputChange = (e) => {
		setInputData({
			...inputData,
			[e.target.name]: e.target.value,
		});
	};

	const convertToToml = () => {
		try {
			const dataToConvert = {
				...inputData,
			};
			const tomlString = toml(dataToConvert);
			setTomlData(tomlString);
		} catch (error) {
			console.error("Error converting to TOML:", error);
		}
	};

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<Tabs defaultValue="models">
				<TabsList>
					<TabsTrigger value="models">Models</TabsTrigger>
					<TabsTrigger value="folders">Folders</TabsTrigger>
					<TabsTrigger value="parameters">Parameters</TabsTrigger>
					<TabsTrigger value="dataset">Dataset</TabsTrigger>
				</TabsList>
				<TabsContent value="models">
					<Input
						type="text"
						name="pretrainedModelPath"
						placeholder="Enter model file path"
						value={inputData.pretrained_model_name_or_path}
						onChange={handleInputChange}
					/>
				</TabsContent>
				<TabsContent value="folders">
					<Folders
						inputData={inputData}
						handleInputChange={handleInputChange}
					/>
				</TabsContent>
				<TabsContent value="parameters">
					{" "}
					<ParametersHome />
					<Input type="text" name="anotherKey" onChange={handleInputChange} />
				</TabsContent>
			</Tabs>
			<Button onClick={convertToToml}>Generate</Button>
			<Textarea value={tomlData} readOnly />
		</main>
	);
}
