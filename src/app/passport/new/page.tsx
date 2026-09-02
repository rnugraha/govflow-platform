import {
	AlertCircle,
	CheckCircle2,
	ChevronRight,
	Clock,
	Info,
	Shield,
	Upload,
} from "lucide-react";
import Link from "next/link";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";

const requirements = [
	"National ID card (original + photocopy)",
	"Birth certificate (original + photocopy)",
	"2 recent passport photos (4×6 cm, white background)",
	"Proof of address (utility bill, dated within 3 months)",
	"Payment receipt (collected after submission)",
];

export default function NewPassportPage() {
	return (
		<div className="min-h-screen bg-muted/30">
			{/* Page header */}
			<Header currentStep={1} />

			<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				<div className="grid lg:grid-cols-3 gap-6">
					{/* Main form */}
					<div className="lg:col-span-2 flex flex-col gap-6">
						{/* Applicant info */}
						<Card className="border-border/60">
							<CardHeader>
								<CardTitle className="text-base flex items-center gap-2">
									<Shield className="w-4 h-4 text-blue-600" />
									Applicant Information
								</CardTitle>
								<CardDescription>
									Enter details exactly as they appear on your National ID card.
								</CardDescription>
							</CardHeader>
							<CardContent className="grid sm:grid-cols-2 gap-4">
								<div className="flex flex-col gap-1.5">
									<Label htmlFor="first-name">
										First Name <span className="text-red-500">*</span>
									</Label>
									<Input id="first-name" placeholder="e.g. John" />
								</div>
								<div className="flex flex-col gap-1.5">
									<Label htmlFor="last-name">
										Last Name <span className="text-red-500">*</span>
									</Label>
									<Input id="last-name" placeholder="e.g. Smith" />
								</div>
								<div className="flex flex-col gap-1.5">
									<Label htmlFor="national-id">
										National ID Number <span className="text-red-500">*</span>
									</Label>
									<Input id="national-id" placeholder="3271XXXXXXXXXXXX" />
								</div>
								<div className="flex flex-col gap-1.5">
									<Label htmlFor="dob">
										Date of Birth <span className="text-red-500">*</span>
									</Label>
									<Input id="dob" type="date" />
								</div>
								<div className="flex flex-col gap-1.5">
									<Label htmlFor="gender">
										Gender <span className="text-red-500">*</span>
									</Label>
									<Select>
										<SelectTrigger id="gender">
											<SelectValue placeholder="Select gender" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="male">Male</SelectItem>
											<SelectItem value="female">Female</SelectItem>
										</SelectContent>
									</Select>
								</div>
								<div className="flex flex-col gap-1.5">
									<Label htmlFor="place-of-birth">
										Place of Birth <span className="text-red-500">*</span>
									</Label>
									<Input id="place-of-birth" placeholder="e.g. Arkadia City" />
								</div>
								<div className="sm:col-span-2 flex flex-col gap-1.5">
									<Label htmlFor="address">
										Current Address <span className="text-red-500">*</span>
									</Label>
									<Textarea
										id="address"
										placeholder="Street, district, city, postal code"
										className="resize-none"
										rows={3}
									/>
								</div>
							</CardContent>
						</Card>

						{/* Contact */}
						<Card className="border-border/60">
							<CardHeader>
								<CardTitle className="text-base">Contact Details</CardTitle>
								<CardDescription>
									We will use these to notify you about your application status.
								</CardDescription>
							</CardHeader>
							<CardContent className="grid sm:grid-cols-2 gap-4">
								<div className="flex flex-col gap-1.5">
									<Label htmlFor="email">
										Email Address <span className="text-red-500">*</span>
									</Label>
									<Input
										id="email"
										type="email"
										placeholder="you@example.com"
									/>
								</div>
								<div className="flex flex-col gap-1.5">
									<Label htmlFor="phone">
										Mobile Number <span className="text-red-500">*</span>
									</Label>
									<Input
										id="phone"
										type="tel"
										placeholder="+62 812 XXXX XXXX"
									/>
								</div>
							</CardContent>
						</Card>

						{/* Passport type */}
						<Card className="border-border/60">
							<CardHeader>
								<CardTitle className="text-base">Passport Details</CardTitle>
							</CardHeader>
							<CardContent className="grid sm:grid-cols-2 gap-4">
								<div className="flex flex-col gap-1.5">
									<Label htmlFor="passport-type">
										Passport Type <span className="text-red-500">*</span>
									</Label>
									<Select>
										<SelectTrigger id="passport-type">
											<SelectValue placeholder="Select type" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="regular">
												Regular (48 pages)
											</SelectItem>
											<SelectItem value="regular-24">
												Regular (24 pages)
											</SelectItem>
											<SelectItem value="diplomatic">Diplomatic</SelectItem>
											<SelectItem value="official">
												Official / Service
											</SelectItem>
										</SelectContent>
									</Select>
								</div>
								<div className="flex flex-col gap-1.5">
									<Label htmlFor="processing">
										Processing Speed <span className="text-red-500">*</span>
									</Label>
									<Select>
										<SelectTrigger id="processing">
											<SelectValue placeholder="Select option" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="standard">
												Standard (3–5 days) · Free
											</SelectItem>
											<SelectItem value="express">
												Express (1–2 days) · +€ 15
											</SelectItem>
										</SelectContent>
									</Select>
								</div>
								<div className="sm:col-span-2 flex flex-col gap-1.5">
									<Label htmlFor="office">
										Passport Office <span className="text-red-500">*</span>
									</Label>
									<Select>
										<SelectTrigger id="office">
											<SelectValue placeholder="Choose pick-up office" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="central">
												Arkadia Central Office — 1 Merdeka Square
											</SelectItem>
											<SelectItem value="north">
												North District Office — 12 Utara St.
											</SelectItem>
											<SelectItem value="south">
												South District Office — 7 Selatan Ave.
											</SelectItem>
										</SelectContent>
									</Select>
								</div>
							</CardContent>
						</Card>

						{/* Photo upload */}
						<Card className="border-border/60">
							<CardHeader>
								<CardTitle className="text-base">Passport Photo</CardTitle>
								<CardDescription>
									Upload a digital passport photo (4×6 cm, white background,
									face clearly visible). JPEG or PNG, max 2 MB.
								</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="border-2 border-dashed border-border rounded-xl p-8 flex flex-col items-center justify-center gap-3 text-center cursor-pointer hover:bg-muted/50 transition-colors">
									<div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-950 flex items-center justify-center">
										<Upload className="w-5 h-5 text-blue-600" />
									</div>
									<div>
										<p className="text-sm font-medium">
											Click to upload or drag and drop
										</p>
										<p className="text-xs text-muted-foreground mt-0.5">
											JPEG, PNG · Max 2 MB
										</p>
									</div>
									<Button variant="outline" size="sm" type="button">
										Choose File
									</Button>
								</div>
							</CardContent>
						</Card>

						{/* Declaration */}
						<Card className="border-border/60 bg-amber-50/50 dark:bg-amber-950/10 border-amber-200 dark:border-amber-800/40">
							<CardContent className="pt-5">
								<div className="flex gap-3">
									<AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
									<div className="text-sm">
										<p className="font-semibold text-amber-800 dark:text-amber-400 mb-1">
											Declaration
										</p>
										<p className="text-amber-700 dark:text-amber-300 leading-relaxed">
											By submitting this application I declare that all
											information provided is true and correct. Submission of
											false information is a criminal offence under Municipal
											Regulation No. 4/2021.
										</p>
										<label className="flex items-start gap-2 mt-3 cursor-pointer">
											<input
												type="checkbox"
												className="mt-0.5 accent-blue-700"
											/>
											<span className="text-amber-800 dark:text-amber-300 font-medium">
												I confirm the above declaration
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
								<Link href="/passport/new/documents">
									Continue to Documents
									<ChevronRight className="ml-1 w-4 h-4" />
								</Link>
							</Button>
							<Button variant="outline" size="lg" asChild>
								<Link href="/">Cancel</Link>
							</Button>
						</div>
					</div>

					{/* Sidebar */}
					<div className="flex flex-col gap-4">
						{/* Fee info */}
						<Card className="border-border/60">
							<CardHeader className="pb-3">
								<CardTitle className="text-sm">Application Fee</CardTitle>
							</CardHeader>
							<CardContent className="text-sm space-y-2">
								<div className="flex justify-between">
									<span className="text-muted-foreground">
										Regular passport
									</span>
									<span className="font-medium">€ 35</span>
								</div>
								<div className="flex justify-between">
									<span className="text-muted-foreground">
										Express (optional)
									</span>
									<span className="font-medium">+ € 15</span>
								</div>
								<Separator className="my-2" />
								<p className="text-xs text-muted-foreground">
									Payment is collected at the passport office during document
									verification.
								</p>
							</CardContent>
						</Card>

						{/* Requirements */}
						<Card className="border-border/60">
							<CardHeader className="pb-3">
								<CardTitle className="text-sm flex items-center gap-1.5">
									<Info className="w-4 h-4 text-blue-600" />
									Required Documents
								</CardTitle>
								<CardDescription className="text-xs">
									Bring originals + photocopies to your office visit.
								</CardDescription>
							</CardHeader>
							<CardContent>
								<ul className="space-y-2">
									{requirements.map((req) => (
										<li key={req} className="flex items-start gap-2 text-xs">
											<CheckCircle2 className="w-3.5 h-3.5 text-green-600 shrink-0 mt-0.5" />
											<span className="text-muted-foreground">{req}</span>
										</li>
									))}
								</ul>
							</CardContent>
						</Card>

						{/* Processing time */}
						<Card className="border-border/60 bg-blue-50/50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800/40">
							<CardContent className="pt-5 text-sm">
								<p className="font-semibold text-blue-800 dark:text-blue-300 flex items-center gap-1.5 mb-2">
									<Clock className="w-4 h-4" />
									Processing Time
								</p>
								<p className="text-blue-700 dark:text-blue-400 text-xs leading-relaxed">
									Standard applications take <strong>3–5 business days</strong>{" "}
									from document verification. You will receive an SMS and email
									when your passport is ready for collection.
								</p>
							</CardContent>
						</Card>

						{/* Help */}
						<Card className="border-border/60">
							<CardContent className="pt-5 text-xs text-muted-foreground space-y-1">
								<p className="font-medium text-foreground text-sm">
									Need help?
								</p>
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
