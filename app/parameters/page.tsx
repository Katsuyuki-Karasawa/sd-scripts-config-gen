import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import useState from "react";

export default function ParametersHome({}) {
	// Propsを受け取るように修正

	return (
		<Tabs defaultValue="basic" className="w-[400px]">
			<TabsList>
				<TabsTrigger value="basic">Basic</TabsTrigger>
				<TabsTrigger value="advanced">Advanced</TabsTrigger>
				<TabsTrigger value="samples">Samples</TabsTrigger>
			</TabsList>
			<TabsContent value="basic">
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button>LoRA Type</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						<DropdownMenuLabel>LoRA Type</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuItem>LoRA-LierLa(Standard)</DropdownMenuItem>
						<DropdownMenuItem>
							DyLoRA-C3Lier(Kohya DyLoRA LoCon)
						</DropdownMenuItem>
						<DropdownMenuItem>DyLoRA-LierLa(Kohya DyLoRA)</DropdownMenuItem>
						<DropdownMenuItem>
							DyLoRA-C3Lier(Kohya DyLoRA LoCon)
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</TabsContent>
			<TabsContent value="advanced">Change your password here.</TabsContent>
			<TabsContent value="samples">Change your password here.</TabsContent>
		</Tabs>
	);
}
