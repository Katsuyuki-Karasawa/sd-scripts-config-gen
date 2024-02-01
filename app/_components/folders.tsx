import { Input } from "@/components/ui/input";
import React from "react";

interface FoldersProps {
	inputData: {
		output_name: string;
		output_dir: string;
		train_data_dir: string;
		reg_data_dir: string;
		logging_dir: string;
	};
	handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Folders: React.FC<FoldersProps> = ({ inputData, handleInputChange }) => {
	return (
		<>
			<Input
				type="text"
				name="output_name"
				placeholder="Output model name"
				value={inputData.output_name}
				onChange={handleInputChange}
			/>
			<Input
				type="text"
				name="output_dir"
				placeholder="Output directory"
				value={inputData.output_dir}
				onChange={handleInputChange}
			/>
			<Input
				type="text"
				name="train_data_dir"
				placeholder="Training data directory"
				value={inputData.train_data_dir}
				onChange={handleInputChange}
			/>
			<Input
				type="text"
				name="reg_data_dir"
				placeholder="Registration data directory"
				value={inputData.reg_data_dir}
				onChange={handleInputChange}
			/>
			<Input
				type="text"
				name="logging_dir"
				placeholder="Logging directory"
				value={inputData.logging_dir}
				onChange={handleInputChange}
			/>
		</>
	);
};

export default Folders;
