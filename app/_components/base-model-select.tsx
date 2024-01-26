import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

interface BaseModelSelectProps {
	selectedModel: string;
	setSelectedModel: (value: string) => void;
	customModel: string;
	setCustomModel: (value: string) => void;
}

const BaseModelSelect: React.FC<BaseModelSelectProps> = ({
	selectedModel,
	setSelectedModel,
	customModel,
	setCustomModel,
}) => {
	const handleSelectChange = (selectedValue: string) => {
		setSelectedModel(selectedValue);
	};

	return (
		<>
			<Select onValueChange={handleSelectChange}>
				<SelectTrigger className="w-[180px]">
					<SelectValue placeholder="baseModel" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="custom-model">Custom</SelectItem>
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
			{selectedModel === "custom-model" && (
				<Input
					type="text"
					value={customModel}
					onChange={(e) => setCustomModel(e.target.value)}
					placeholder="Enter custom model details"
				/>
			)}
		</>
	);
};

export default BaseModelSelect;
