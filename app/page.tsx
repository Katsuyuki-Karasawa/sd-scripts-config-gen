"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { useState } from "react";
import toml from "@iarna/toml/stringify";
import BaseModelSelect from "./_components/base-model-select";

export default function Home() {
	const [inputData, setInputData] = useState({});
	const [selectedModel, setSelectedModel] = useState("");
	const [customModel, setCustomModel] = useState("");
	const [tomlData, setTomlData] = useState("");

	const handleInputChange = (e) => {
		setInputData({ ...inputData, [e.target.name]: e.target.value });
	};

	// TOML変換関数の更新
	const convertToToml = () => {
		try {
			// customModel が選択されている場合、その値を baseModel として使用
			const baseModelValue =
				selectedModel === "custom-model" ? customModel : selectedModel;
			const dataToConvert = { ...inputData, baseModel: baseModelValue };
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
					<BaseModelSelect
						selectedModel={selectedModel}
						setSelectedModel={setSelectedModel}
						customModel={customModel}
						setCustomModel={setCustomModel}
					/>
				</TabsContent>
				<TabsContent value="parameters">
					{" "}
					<Input type="text" name="key" onChange={handleInputChange} />
					<Input type="text" name="anotherKey" onChange={handleInputChange} />
				</TabsContent>
			</Tabs>
			<Button onClick={convertToToml}>Generate</Button>
			<Textarea value={tomlData} readOnly />
		</main>
	);
}
