import {
	ArrowRight,
	Calendar,
	CheckCircle2,
	Clock,
	Copy,
	Download,
	FileText,
	MapPin,
	Phone,
	Printer,
	Shield,
} from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const REF = "PA-2026-047821";

const offices = [
	{
		name: "Arkadia Central Office",
		address: "1 Merdeka Square, Arkadia City",
		hours: "Mon–Fri, 08:00–16:00",
	},
	{
		name: "North District Office",
		address: "12 Utara St., North Arkadia",
		hours: "Mon–Fri, 08:00–15:00",
	},
	{
		name: "South District Office",
		address: "7 Selatan Ave., South Arkadia",
		hours: "Mon–Fri, 08:00–15:00",
	},
];

export default function ConfirmationPage() {
	return (
		<div className="min-h-screen bg-muted/30">
			{/* Slim header */}
			<header className="bg-blue-800 text-white">
				<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
					<Link href="/" className="flex items-center gap-3">
						<div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shrink-0">
							<Shield className="w-5 h-5 text-blue-800" />
						</div>
						<span className="font-semibold text-sm hidden sm:block">
							Municipality of Arkadia
						</span>
					</Link>
					<ThemeToggle />
				</div>
			</header>

			<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				{/* Success hero */}
				<div className="text-center mb-10">
					<div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 dark:bg-green-950/40 mb-5">
						<CheckCircle2 className="w-10 h-10 text-green-600 dark:text-green-400" />
					</div>
					<h1 className="text-3xl font-bold text-foreground mb-2">
						Application Submitted!
					</h1>
					<p className="text-muted-foreground text-base max-w-md mx-auto">
						Your passport application has been received. Save your reference
						number — you will need it at the passport office.
					</p>
				</div>

				{/* Reference number */}
				<Card className="border-blue-200 dark:border-blue-800/40 bg-blue-50/60 dark:bg-blue-950/20 mb-6">
					<CardContent className="pt-6 pb-6">
						<p className="text-xs text-blue-600 dark:text-blue-400 uppercase tracking-widest font-medium text-center mb-2">
							Reference Number
						</p>
						<div className="flex items-center justify-center gap-3">
							<span className="text-3xl font-bold tracking-widest text-blue-800 dark:text-blue-200 font-mono">
								{REF}
							</span>
							<Button
								variant="ghost"
								size="icon"
								className="text-blue-600 hover:text-blue-700 hover:bg-blue-100 dark:hover:bg-blue-900/40"
								aria-label="Copy reference number"
							>
								<Copy className="w-4 h-4" />
							</Button>
						</div>
						<p className="text-xs text-center text-blue-600/70 dark:text-blue-400/70 mt-3">
							A confirmation email and SMS have been sent to{" "}
							<strong>john.smith@example.com</strong> and{" "}
							<strong>+62 812 3456 7890</strong>
						</p>
					</CardContent>
				</Card>

				{/* What happens next */}
				<Card className="border-border/60 mb-6">
					<CardHeader className="pb-3">
						<CardTitle className="text-base flex items-center gap-2">
							<Clock className="w-4 h-4 text-blue-600" />
							What Happens Next
						</CardTitle>
					</CardHeader>
					<CardContent>
						<ol className="space-y-5">
							<li className="flex gap-4">
								<div className="flex flex-col items-center">
									<div className="w-7 h-7 rounded-full bg-blue-100 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 flex items-center justify-center text-xs font-bold shrink-0">
										1
									</div>
									<div className="w-px flex-1 bg-border mt-2" />
								</div>
								<div className="pb-5">
									<p className="text-sm font-semibold">Visit a Passport Office</p>
									<p className="text-sm text-muted-foreground mt-0.5">
										Bring your original documents and payment (€ 35) within{" "}
										<strong>14 days</strong>. Quote your reference number at the
										counter.
									</p>
								</div>
							</li>
							<li className="flex gap-4">
								<div className="flex flex-col items-center">
									<div className="w-7 h-7 rounded-full bg-blue-100 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 flex items-center justify-center text-xs font-bold shrink-0">
										2
									</div>
									<div className="w-px flex-1 bg-border mt-2" />
								</div>
								<div className="pb-5">
									<p className="text-sm font-semibold">Document Verification</p>
									<p className="text-sm text-muted-foreground mt-0.5">
										A passport officer will verify your originals and collect
										biometric data. This takes approximately 15–20 minutes.
									</p>
								</div>
							</li>
							<li className="flex gap-4">
								<div className="flex flex-col items-center">
									<div className="w-7 h-7 rounded-full bg-green-100 dark:bg-green-950/50 text-green-700 dark:text-green-400 flex items-center justify-center shrink-0">
										<CheckCircle2 className="w-4 h-4" />
									</div>
								</div>
								<div>
									<p className="text-sm font-semibold">Passport Ready</p>
									<p className="text-sm text-muted-foreground mt-0.5">
										Standard processing takes <strong>3–5 business days</strong>{" "}
										after verification. You will receive an SMS when your passport
										is ready for collection.
									</p>
								</div>
							</li>
						</ol>
					</CardContent>
				</Card>

				{/* Application summary */}
				<Card className="border-border/60 mb-6">
					<CardHeader className="pb-3">
						<CardTitle className="text-base flex items-center gap-2">
							<FileText className="w-4 h-4 text-blue-600" />
							Application Summary
						</CardTitle>
					</CardHeader>
					<CardContent className="text-sm space-y-3">
						<div className="grid grid-cols-2 gap-3">
							<div>
								<p className="text-xs text-muted-foreground">Applicant</p>
								<p className="font-medium">John Smith</p>
							</div>
							<div>
								<p className="text-xs text-muted-foreground">Passport Type</p>
								<p className="font-medium">Regular (48 pages)</p>
							</div>
							<div>
								<p className="text-xs text-muted-foreground">Processing</p>
								<p className="font-medium">Standard · 3–5 days</p>
							</div>
							<div>
								<p className="text-xs text-muted-foreground">Submitted</p>
								<p className="font-medium">13 May 2026, 14:32</p>
							</div>
						</div>
						<Separator />
						<div className="flex justify-between font-semibold">
							<span>Total due at office</span>
							<span>€ 35</span>
						</div>
					</CardContent>
				</Card>

				{/* Office locations */}
				<Card className="border-border/60 mb-8">
					<CardHeader className="pb-3">
						<CardTitle className="text-base flex items-center gap-2">
							<MapPin className="w-4 h-4 text-blue-600" />
							Passport Office Locations
						</CardTitle>
					</CardHeader>
					<CardContent className="space-y-4">
						{offices.map((o) => (
							<div key={o.name} className="flex items-start gap-3">
								<div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center shrink-0 mt-0.5">
									<MapPin className="w-4 h-4 text-muted-foreground" />
								</div>
								<div>
									<p className="text-sm font-medium">{o.name}</p>
									<p className="text-xs text-muted-foreground">{o.address}</p>
									<p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
										<Clock className="w-3 h-3" />
										{o.hours}
									</p>
								</div>
							</div>
						))}
						<div className="flex items-center gap-2 pt-1 text-xs text-muted-foreground border-t border-border">
							<Phone className="w-3.5 h-3.5 shrink-0" />
							<span>
								General enquiries:{" "}
								<strong className="text-foreground">(021) 555-0100</strong>
							</span>
						</div>
					</CardContent>
				</Card>

				{/* Actions */}
				<div className="flex flex-col sm:flex-row gap-3 justify-center">
					<Button variant="outline" size="lg" className="gap-2">
						<Printer className="w-4 h-4" />
						Print Confirmation
					</Button>
					<Button variant="outline" size="lg" className="gap-2">
						<Download className="w-4 h-4" />
						Download PDF
					</Button>
					<Button
						size="lg"
						className="bg-blue-700 hover:bg-blue-800 gap-2"
						asChild
					>
						<Link href="/">
							Back to Portal
							<ArrowRight className="w-4 h-4" />
						</Link>
					</Button>
				</div>

				<p className="text-center text-xs text-muted-foreground mt-8">
					Application reference{" "}
					<span className="font-mono font-semibold">{REF}</span> ·{" "}
					Municipality of Arkadia · Passport Office · 2026
				</p>
			</div>
		</div>
	);
}
