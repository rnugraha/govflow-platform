import {
	AlertCircle,
	ArrowLeft,
	CheckCircle2,
	ChevronRight,
	Clock,
	FileText,
	Info,
	Upload,
	X,
} from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

const steps = [
	{ label: "Personal Info", active: false, done: true },
	{ label: "Documents", active: true, done: false },
	{ label: "Review & Pay", active: false, done: false },
];

const uploads = [
	{
		id: "national-id-front",
		label: "National ID Card — Front",
		hint: "Clear photo of the front side. JPEG or PNG, max 5 MB.",
		required: true,
	},
	{
		id: "national-id-back",
		label: "National ID Card — Back",
		hint: "Clear photo of the back side. JPEG or PNG, max 5 MB.",
		required: true,
	},
	{
		id: "birth-cert",
		label: "Birth Certificate",
		hint: "Original or certified copy. PDF, JPEG, or PNG, max 10 MB.",
		required: true,
	},
	{
		id: "proof-address",
		label: "Proof of Address",
		hint: "Utility bill or bank statement dated within 3 months. PDF, JPEG, or PNG, max 10 MB.",
		required: true,
	},
	{
		id: "support-letter",
		label: "Supporting Letter (if applicable)",
		hint: "Required for diplomatic and official passports only. PDF, max 5 MB.",
		required: false,
	},
];

function UploadZone({
	id,
	label,
	hint,
	required,
}: {
	id: string;
	label: string;
	hint: string;
	required: boolean;
}) {
	return (
		<div className="flex flex-col gap-1.5">
			<div className="flex items-center gap-1.5">
				<label htmlFor={id} className="text-sm font-medium leading-none">
					{label}
				</label>
				{required ? (
					<span className="text-red-500 text-sm">*</span>
				) : (
					<Badge variant="secondary" className="text-[10px] px-1.5 py-0">
						Optional
					</Badge>
				)}
			</div>
			<div className="border-2 border-dashed border-border rounded-xl p-6 flex flex-col items-center justify-center gap-2.5 text-center cursor-pointer hover:bg-muted/50 transition-colors group">
				<div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-950/50 flex items-center justify-center group-hover:bg-blue-100 dark:group-hover:bg-blue-950 transition-colors">
					<Upload className="w-4 h-4 text-blue-600" />
				</div>
				<div>
					<p className="text-sm font-medium">
						Click to upload or drag and drop
					</p>
					<p className="text-xs text-muted-foreground mt-0.5">{hint}</p>
				</div>
				<Button variant="outline" size="sm" type="button">
					Choose File
				</Button>
			</div>
		</div>
	);
}

export default function DocumentsPage() {
	return (
		<div className="min-h-screen bg-muted/30">
			{/* Page header */}
			<div className="bg-blue-800 text-white">
				<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
					<div className="flex items-center justify-between mb-4">
						<Link
							href="/passport/new"
							className="inline-flex items-center gap-1.5 text-sm text-blue-200 hover:text-white transition-colors"
						>
							<ArrowLeft className="w-4 h-4" />
							Back to Personal Info
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
						{steps.map((step, i) => (
							<div key={step.label} className="flex items-center gap-2">
								<div
									className={`flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full ${
										step.active
											? "bg-white text-blue-800"
											: step.done
												? "bg-blue-600/60 text-blue-100"
												: "bg-blue-700/50 text-blue-300"
									}`}
								>
									<span
										className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold ${
											step.active
												? "bg-blue-700 text-white"
												: step.done
													? "bg-blue-400/60 text-white"
													: "bg-blue-600/50"
										}`}
									>
										{step.done ? "✓" : i + 1}
									</span>
									{step.label}
								</div>
								{i < steps.length - 1 && (
									<ChevronRight className="w-3.5 h-3.5 text-blue-500" />
								)}
							</div>
						))}
					</div>
				</div>
			</div>

			<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				<div className="grid lg:grid-cols-3 gap-6">
					{/* Main form */}
					<div className="lg:col-span-2 flex flex-col gap-6">
						{/* Upload instructions */}
						<Card className="border-border/60 bg-blue-50/50 dark:bg-blue-950/10 border-blue-200 dark:border-blue-800/40">
							<CardContent className="pt-5">
								<div className="flex gap-3">
									<Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
									<div className="text-sm">
										<p className="font-semibold text-blue-800 dark:text-blue-300 mb-1">
											Document Requirements
										</p>
										<ul className="text-blue-700 dark:text-blue-400 space-y-1 text-xs leading-relaxed list-disc list-inside">
											<li>All files must be clear and fully legible — no blurry or cropped images</li>
											<li>Documents must be valid and not expired</li>
											<li>Bring original documents to the passport office for verification</li>
											<li>Accepted formats: JPEG, PNG, PDF — maximum 10 MB per file</li>
										</ul>
									</div>
								</div>
							</CardContent>
						</Card>

						{/* Upload zones */}
						<Card className="border-border/60">
							<CardHeader>
								<CardTitle className="text-base flex items-center gap-2">
									<Upload className="w-4 h-4 text-blue-600" />
									Document Uploads
								</CardTitle>
								<CardDescription>
									Upload digital copies of each required document below.
								</CardDescription>
							</CardHeader>
							<CardContent className="flex flex-col gap-6">
								{uploads.map((u) => (
									<UploadZone key={u.id} {...u} />
								))}
							</CardContent>
						</Card>

						{/* Declaration */}
						<Card className="border-border/60 bg-amber-50/50 dark:bg-amber-950/10 border-amber-200 dark:border-amber-800/40">
							<CardContent className="pt-5">
								<div className="flex gap-3">
									<AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
									<div className="text-sm">
										<p className="font-semibold text-amber-800 dark:text-amber-400 mb-1">
											Document Authenticity
										</p>
										<p className="text-amber-700 dark:text-amber-300 leading-relaxed">
											I confirm that all uploaded documents are authentic, unaltered,
											and belong to the applicant named in Step 1. Submission of
											forged documents is a criminal offence under Municipal
											Regulation No. 4/2021.
										</p>
										<label className="flex items-start gap-2 mt-3 cursor-pointer">
											<input
												type="checkbox"
												className="mt-0.5 accent-blue-700"
											/>
											<span className="text-amber-800 dark:text-amber-300 font-medium">
												I confirm all documents are authentic
											</span>
										</label>
									</div>
								</div>
							</CardContent>
						</Card>

						{/* Actions */}
						<div className="flex flex-col sm:flex-row gap-3 pb-8">
							<Button
								size="lg"
								className="bg-blue-700 hover:bg-blue-800 flex-1 sm:flex-none sm:min-w-[180px]"
								asChild
							>
								<Link href="/passport/new/review">
									Continue to Review
									<ChevronRight className="ml-1 w-4 h-4" />
								</Link>
							</Button>
							<Button variant="outline" size="lg" asChild>
								<Link href="/passport/new">
									<ArrowLeft className="mr-1 w-4 h-4" />
									Back
								</Link>
							</Button>
							<Button variant="ghost" size="lg" asChild className="sm:ml-auto">
								<Link href="/">Cancel</Link>
							</Button>
						</div>
					</div>

					{/* Sidebar */}
					<div className="flex flex-col gap-4">
						{/* Progress */}
						<Card className="border-border/60">
							<CardHeader className="pb-3">
								<CardTitle className="text-sm">Your Progress</CardTitle>
							</CardHeader>
							<CardContent className="space-y-2 text-sm">
								<div className="flex items-center gap-2 text-green-700 dark:text-green-400">
									<CheckCircle2 className="w-4 h-4 shrink-0" />
									<span>Personal Info — complete</span>
								</div>
								<div className="flex items-center gap-2 font-medium text-blue-700 dark:text-blue-300">
									<div className="w-4 h-4 rounded-full border-2 border-blue-600 shrink-0" />
									<span>Documents — in progress</span>
								</div>
								<div className="flex items-center gap-2 text-muted-foreground">
									<div className="w-4 h-4 rounded-full border-2 border-border shrink-0" />
									<span>Review & Pay</span>
								</div>
							</CardContent>
						</Card>

						{/* Checklist */}
						<Card className="border-border/60">
							<CardHeader className="pb-3">
								<CardTitle className="text-sm flex items-center gap-1.5">
									<Info className="w-4 h-4 text-blue-600" />
									Upload Checklist
								</CardTitle>
							</CardHeader>
							<CardContent>
								<ul className="space-y-2">
									{uploads.map((u) => (
										<li key={u.id} className="flex items-start gap-2 text-xs">
											<div className="w-3.5 h-3.5 rounded border border-border shrink-0 mt-0.5" />
											<span className="text-muted-foreground">
												{u.label}
												{!u.required && (
													<span className="text-muted-foreground/60"> (optional)</span>
												)}
											</span>
										</li>
									))}
								</ul>
							</CardContent>
						</Card>

						{/* Help */}
						<Card className="border-border/60">
							<CardContent className="pt-5 text-xs text-muted-foreground space-y-1">
								<p className="font-medium text-foreground text-sm">Need help?</p>
								<p>Call us at (021) 555-0100</p>
								<p>Mon–Fri · 08:00–16:00</p>
								<Link
									href="#"
									className="text-blue-600 hover:underline mt-1 inline-block"
								>
									View FAQ
								</Link>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</div>
	);
}
