import { ArrowLeft, ChevronRight, Clock, FileText } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "./theme-toggle";

const steps = [
	{ label: "Personal Info", backToUrl: "/" },
	{ label: "Documents", backToUrl: "/passport/new" },
	{ label: "Review & Pay", backToUrl: "/passport/documents" },
];

interface IHeader {
	currentStep: number;
}

export default function Header({ currentStep }: IHeader) {
	return (
		<div className="bg-blue-800 text-white">
			<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
				<div className="flex items-center justify-between mb-4">
					<Link
						href={steps[currentStep - 1].backToUrl}
						className="inline-flex items-center gap-1.5 text-sm text-blue-200 hover:text-white transition-colors"
					>
						<ArrowLeft className="w-4 h-4" />
						Back to{" "}
						{currentStep - 2 >= 0 ? steps[currentStep - 2].label : "Portal"}
					</Link>
					<ThemeToggle />
				</div>
				<div className="flex items-start justify-between gap-4">
					<div>
						<div className="flex items-center gap-2 mb-1">
							<FileText className="w-5 h-5 text-blue-300" />
							<span className="text-xs text-blue-300 uppercase tracking-wider font-medium">
								Citizen Services / Passport
							</span>
						</div>
						<h1 className="text-2xl md:text-3xl font-bold">
							New Passport Application
						</h1>
						<p className="text-blue-200 mt-1 text-sm">
							Form PA-01 · Municipality of Arkadia · Passport Office
						</p>
					</div>
					<Badge className="bg-blue-600/40 text-blue-100 border-blue-500/30 hover:bg-blue-600/40 shrink-0 hidden sm:flex">
						<Clock className="w-3 h-3 mr-1" />
						~10 min
					</Badge>
				</div>

				{/* Step indicator */}
				<div className="flex items-center gap-2 mt-6">
					{steps.map((step, i) => {
						return (
							<div key={step.label} className="flex items-center gap-2">
								<div
									className={`flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full ${
										i + 1 === currentStep
											? "bg-white text-blue-800"
											: "bg-blue-700/50 text-blue-300"
									}`}
								>
									<span
										className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold ${
											i + 1 === currentStep
												? "bg-blue-700 text-white"
												: "bg-blue-600/50"
										}`}
									>
										{i + 1}
									</span>
									{step.label}
								</div>
								{i < steps.length - 1 && (
									<ChevronRight className="w-3.5 h-3.5 text-blue-500" />
								)}
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
