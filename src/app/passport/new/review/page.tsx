import {
	AlertCircle,
	ArrowLeft,
	CheckCircle2,
	CreditCard,
	Edit2,
	FileText,
	Info,
	Lock,
	Shield,
	Upload,
} from "lucide-react";
import Link from "next/link";
import Header from "@/components/header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

function ReviewSection({
	title,
	icon: Icon,
	editHref,
	children,
}: {
	title: string;
	icon: React.ComponentType<{ className?: string }>;
	editHref: string;
	children: React.ReactNode;
}) {
	return (
		<Card className="border-border/60">
			<CardHeader className="pb-3">
				<div className="flex items-center justify-between">
					<CardTitle className="text-base flex items-center gap-2">
						<Icon className="w-4 h-4 text-blue-600" />
						{title}
					</CardTitle>
					<Button
						variant="ghost"
						size="sm"
						asChild
						className="h-7 text-xs text-blue-600 hover:text-blue-700 gap-1"
					>
						<Link href={editHref}>
							<Edit2 className="w-3 h-3" />
							Edit
						</Link>
					</Button>
				</div>
			</CardHeader>
			<CardContent>{children}</CardContent>
		</Card>
	);
}

function Field({ label, value }: { label: string; value: string }) {
	return (
		<div className="flex flex-col gap-0.5 min-w-0">
			<dt className="text-xs text-muted-foreground">{label}</dt>
			<dd className="text-sm font-medium truncate">{value}</dd>
		</div>
	);
}

function DocRow({ label, uploaded }: { label: string; uploaded: boolean }) {
	return (
		<div className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
			<span className="text-sm text-muted-foreground">{label}</span>
			{uploaded ? (
				<Badge className="bg-green-100 text-green-700 dark:bg-green-950/40 dark:text-green-400 border-green-200 dark:border-green-800/40 hover:bg-green-100">
					<CheckCircle2 className="w-3 h-3 mr-1" />
					Uploaded
				</Badge>
			) : (
				<Badge variant="outline" className="text-muted-foreground text-[10px]">
					Not provided
				</Badge>
			)}
		</div>
	);
}

export default function ReviewPage() {
	return (
		<div className="min-h-screen bg-muted/30">
			{/* Page header */}
			<Header currentStep={3} />

			<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
				<div className="grid lg:grid-cols-3 gap-6">
					{/* Main content */}
					<div className="lg:col-span-2 flex flex-col gap-6">
						{/* Info banner */}
						<Card className="border-blue-200 dark:border-blue-800/40 bg-blue-50/50 dark:bg-blue-950/10">
							<CardContent className="pt-5">
								<div className="flex gap-3">
									<Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
									<p className="text-sm text-blue-700 dark:text-blue-400 leading-relaxed">
										Please review all details carefully before submitting. After
										submission you will receive a reference number by email and
										SMS. Bring your original documents to the passport office
										within <strong>14 days</strong> to complete verification.
									</p>
								</div>
							</CardContent>
						</Card>

						{/* Personal info */}
						<ReviewSection
							title="Applicant Information"
							icon={Shield}
							editHref="/passport/new"
						>
							<dl className="grid grid-cols-2 sm:grid-cols-3 gap-4">
								<Field label="First Name" value="John" />
								<Field label="Last Name" value="Smith" />
								<Field label="National ID" value="3271XXXXXXXXXX01" />
								<Field label="Date of Birth" value="15 March 1990" />
								<Field label="Gender" value="Male" />
								<Field label="Place of Birth" value="Arkadia City" />
								<div className="col-span-2 sm:col-span-3">
									<Field
										label="Current Address"
										value="12 Jalan Merdeka, District 3, Arkadia City, 10110"
									/>
								</div>
							</dl>
						</ReviewSection>

						{/* Contact */}
						<ReviewSection
							title="Contact Details"
							icon={FileText}
							editHref="/passport/new"
						>
							<dl className="grid grid-cols-2 gap-4">
								<Field label="Email Address" value="john.smith@example.com" />
								<Field label="Mobile Number" value="+62 812 3456 7890" />
							</dl>
						</ReviewSection>

						{/* Passport details */}
						<ReviewSection
							title="Passport Details"
							icon={FileText}
							editHref="/passport/new"
						>
							<dl className="grid grid-cols-2 gap-4">
								<Field label="Passport Type" value="Regular (48 pages)" />
								<Field
									label="Processing Speed"
									value="Standard (3–5 days) · Free"
								/>
								<div className="col-span-2">
									<Field
										label="Pick-up Office"
										value="Arkadia Central Office — 1 Merdeka Square"
									/>
								</div>
							</dl>
						</ReviewSection>

						{/* Documents */}
						<ReviewSection
							title="Uploaded Documents"
							icon={Upload}
							editHref="/passport/new/documents"
						>
							<div>
								<DocRow label="National ID Card — Front" uploaded={true} />
								<DocRow label="National ID Card — Back" uploaded={true} />
								<DocRow label="Birth Certificate" uploaded={true} />
								<DocRow label="Proof of Address" uploaded={true} />
								<DocRow label="Passport Photo" uploaded={true} />
								<DocRow label="Supporting Letter (optional)" uploaded={false} />
							</div>
						</ReviewSection>

						{/* Final declaration */}
						<Card className="border-amber-200 dark:border-amber-800/40 bg-amber-50/50 dark:bg-amber-950/10">
							<CardContent className="pt-5">
								<div className="flex gap-3">
									<AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
									<div className="text-sm">
										<p className="font-semibold text-amber-800 dark:text-amber-400 mb-1">
											Final Declaration
										</p>
										<p className="text-amber-700 dark:text-amber-300 leading-relaxed">
											By submitting this application I confirm that all
											information and documents provided are true, complete, and
											correct. I understand that submitting false information is
											a criminal offence under Municipal Regulation No. 4/2021
											and may result in prosecution.
										</p>
										<label className="flex items-start gap-2 mt-3 cursor-pointer">
											<input
												type="checkbox"
												className="mt-0.5 accent-blue-700"
											/>
											<span className="text-amber-800 dark:text-amber-300 font-medium">
												I confirm the above declaration and consent to
												processing of my personal data for this application
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
								className="bg-blue-700 hover:bg-blue-800 flex-1 sm:flex-none sm:min-w-[200px]"
								asChild
							>
								<Link href="/passport/new/confirmation">
									<Lock className="mr-2 w-4 h-4" />
									Submit Application
								</Link>
							</Button>
							<Button variant="outline" size="lg" asChild>
								<Link href="/passport/new/documents">
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
						{/* Fee summary */}
						<Card className="border-border/60">
							<CardHeader className="pb-3">
								<CardTitle className="text-sm flex items-center gap-1.5">
									<CreditCard className="w-4 h-4 text-blue-600" />
									Fee Summary
								</CardTitle>
							</CardHeader>
							<CardContent className="text-sm space-y-2">
								<div className="flex justify-between">
									<span className="text-muted-foreground">
										Regular passport (48 pages)
									</span>
									<span className="font-medium">€ 35</span>
								</div>
								<div className="flex justify-between">
									<span className="text-muted-foreground">
										Standard processing
									</span>
									<span className="font-medium text-green-600">Free</span>
								</div>
								<Separator className="my-2" />
								<div className="flex justify-between font-semibold text-base">
									<span>Total due</span>
									<span>€ 35</span>
								</div>
								<p className="text-xs text-muted-foreground pt-1">
									Payment is collected at the passport office during document
									verification. Cash and card accepted.
								</p>
							</CardContent>
						</Card>

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
								<div className="flex items-center gap-2 text-green-700 dark:text-green-400">
									<CheckCircle2 className="w-4 h-4 shrink-0" />
									<span>Documents — complete</span>
								</div>
								<div className="flex items-center gap-2 font-medium text-blue-700 dark:text-blue-300">
									<div className="w-4 h-4 rounded-full border-2 border-blue-600 shrink-0" />
									<span>Review & Pay — in progress</span>
								</div>
							</CardContent>
						</Card>

						{/* Next steps */}
						<Card className="border-border/60 bg-muted/40">
							<CardHeader className="pb-2">
								<CardTitle className="text-sm">After You Submit</CardTitle>
							</CardHeader>
							<CardContent className="text-xs text-muted-foreground space-y-2.5">
								<div className="flex gap-2">
									<span className="font-bold text-foreground shrink-0">1.</span>
									<span>You receive a reference number by email & SMS.</span>
								</div>
								<div className="flex gap-2">
									<span className="font-bold text-foreground shrink-0">2.</span>
									<span>
										Visit any Passport Office within 14 days with your original
										documents and payment.
									</span>
								</div>
								<div className="flex gap-2">
									<span className="font-bold text-foreground shrink-0">3.</span>
									<span>
										Passport ready in 3–5 business days after verification. You
										will be notified by SMS.
									</span>
								</div>
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
