import {
	AlertCircle,
	ArrowRight,
	BookOpen,
	Building2,
	Calendar,
	ChevronRight,
	Clock,
	FileText,
	Globe,
	Heart,
	MapPin,
	Phone,
	Shield,
	Star,
	Users,
} from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/components/theme-toggle";

const services = [
	{
		icon: FileText,
		title: "Passport Application",
		description: "Apply for a new passport or renew your existing one.",
		href: "/passport/new",
		badge: "Online",
		featured: true,
	},
	{
		icon: Shield,
		title: "National ID Card",
		description: "Register or replace your national identity card.",
		href: "#",
		badge: "Online",
	},
	{
		icon: Heart,
		title: "Birth Certificate",
		description: "Request birth certificates for newborns or replacements.",
		href: "#",
		badge: "Online",
	},
	{
		icon: Building2,
		title: "Business License",
		description: "Apply for permits and licenses for your business.",
		href: "#",
		badge: "In Office",
	},
	{
		icon: Globe,
		title: "Marriage Certificate",
		description: "Register your marriage and obtain official documentation.",
		href: "#",
		badge: "In Office",
	},
	{
		icon: BookOpen,
		title: "Property Records",
		description: "Access and manage land and property registration.",
		href: "#",
		badge: "Online",
	},
];

const announcements = [
	{
		date: "12 May 2026",
		tag: "Passport",
		title: "Extended Passport Service Hours During Summer Season",
		summary:
			"The Passport Office will operate on Saturdays from 8:00 AM to 2:00 PM throughout June and July to accommodate increased demand.",
	},
	{
		date: "5 May 2026",
		tag: "System",
		title: "Online Portal Maintenance — 17 May 2026",
		summary:
			"Scheduled maintenance will occur from 00:00 to 04:00. All online services will be temporarily unavailable during this window.",
	},
	{
		date: "28 April 2026",
		tag: "Notice",
		title: "New Biometric Requirements for Passport Applicants",
		summary:
			"Effective 1 June 2026, all passport applicants must provide updated biometric data. Please book an appointment in advance.",
	},
];

const stats = [
	{ value: "47,200+", label: "Citizens Served" },
	{ value: "98%", label: "Application Approval Rate" },
	{ value: "3 Days", label: "Average Processing Time" },
	{ value: "24/7", label: "Online Portal Access" },
];

export default function Home() {
	return (
		<div className="flex flex-col min-h-screen">
			{/* Top bar */}
			<div className="bg-blue-900 text-blue-100 text-xs py-2">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
					<div className="flex items-center gap-4">
						<span className="flex items-center gap-1.5">
							<Phone className="w-3 h-3" />
							Emergency: 112
						</span>
						<Separator orientation="vertical" className="h-3 bg-blue-700" />
						<span className="flex items-center gap-1.5">
							<Clock className="w-3 h-3" />
							Office Hours: Mon–Fri, 08:00–16:00
						</span>
					</div>
					<div className="flex items-center gap-1.5">
						<MapPin className="w-3 h-3" />
						<span>1 Merdeka Square, Arkadia City, 10110</span>
					</div>
				</div>
			</div>

			{/* Header */}
			<header className="bg-blue-800 text-white shadow-lg">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between h-20">
						{/* Logo & Name */}
						<Link href="/" className="flex items-center gap-4">
							<div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-md shrink-0">
								<Shield className="w-8 h-8 text-blue-800" />
							</div>
							<div className="leading-tight">
								<p className="text-xs text-blue-200 uppercase tracking-widest font-medium">
									Official Government Portal
								</p>
								<p className="text-lg font-bold">Municipality of Arkadia</p>
							</div>
						</Link>

						{/* Nav */}
						<nav className="hidden md:flex items-center gap-6 text-sm font-medium text-blue-100">
							<Link href="#" className="hover:text-white transition-colors">
								About
							</Link>
							<Link href="#" className="hover:text-white transition-colors">
								Services
							</Link>
							<Link href="#" className="hover:text-white transition-colors">
								News
							</Link>
							<Link href="#" className="hover:text-white transition-colors">
								Contact
							</Link>
							<ThemeToggle />
							<Button
								size="sm"
								className="bg-white text-blue-800 hover:bg-blue-50 font-semibold"
							>
								My Account
							</Button>
						</nav>
					</div>
				</div>
			</header>

			<main className="flex-1">
				{/* Hero */}
				<section className="bg-linear-to-br from-blue-800 via-blue-700 to-blue-600 text-white">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
						<div className="max-w-3xl">
							<Badge className="mb-4 bg-blue-500/30 text-blue-100 border-blue-400/40 hover:bg-blue-500/30">
								<Star className="w-3 h-3 mr-1" />
								Trusted by 47,200+ citizens
							</Badge>
							<h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-6">
								Your City Services,
								<br />
								<span className="text-blue-200">All in One Place</span>
							</h1>
							<p className="text-lg text-blue-100 mb-8 max-w-xl leading-relaxed">
								Access government services online — from passport applications
								to business permits. Fast, secure, and available 24/7.
							</p>
							<div className="flex flex-wrap gap-3">
								<Button
									asChild
									size="lg"
									className="bg-white text-blue-800 hover:bg-blue-50 font-semibold shadow-lg"
								>
									<Link href="/passport/new">
										Apply for Passport
										<ArrowRight className="ml-2 w-4 h-4" />
									</Link>
								</Button>
								<Button
									asChild
									size="lg"
									variant="outline"
									className="border-white/40 text-white hover:bg-white/10 bg-transparent"
								>
									<Link href="#services">Browse All Services</Link>
								</Button>
							</div>
						</div>
					</div>

					{/* Wave divider */}
					<div className="overflow-hidden">
						<svg
							viewBox="0 0 1440 48"
							className="w-full block"
							preserveAspectRatio="none"
							aria-hidden="true"
						>
							<path
								d="M0,48 L1440,48 L1440,0 C1200,40 900,48 720,32 C540,16 240,0 0,24 Z"
								className="fill-background"
							/>
						</svg>
					</div>
				</section>

				{/* Stats */}
				<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4 mb-16">
					<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
						{stats.map((stat) => (
							<Card
								key={stat.label}
								className="text-center border-border/60 shadow-sm"
							>
								<CardContent className="pt-6 pb-5">
									<p className="text-2xl font-bold text-blue-700">
										{stat.value}
									</p>
									<p className="text-sm text-muted-foreground mt-1">
										{stat.label}
									</p>
								</CardContent>
							</Card>
						))}
					</div>
				</section>

				{/* Services */}
				<section
					id="services"
					className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20"
				>
					<div className="mb-10">
						<h2 className="text-2xl font-bold text-foreground">
							Citizen Services
						</h2>
						<p className="text-muted-foreground mt-1">
							Apply, renew, and manage your official documents online.
						</p>
					</div>

					<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
						{services.map((service) => {
							const Icon = service.icon;
							return (
								<Card
									key={service.title}
									className={`group relative flex flex-col transition-shadow hover:shadow-md ${
										service.featured
											? "border-blue-300 bg-blue-50/50 dark:bg-blue-950/20 ring-1 ring-blue-200 dark:ring-blue-800"
											: "border-border/60"
									}`}
								>
									{/* {service.featured && (
										<div className="absolute -top-2.5 left-4">
											<Badge className="bg-blue-600 text-white text-[10px] px-2 py-0.5 hover:bg-blue-600">
												Featured Service
											</Badge>
										</div>
									)} */}
									<CardHeader className="pb-3">
										<div
											className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${
												service.featured
													? "bg-blue-100 dark:bg-blue-900"
													: "bg-muted"
											}`}
										>
											<Icon
												className={`w-5 h-5 ${service.featured ? "text-blue-700 dark:text-blue-300" : "text-muted-foreground"}`}
											/>
										</div>
										<div className="flex items-start justify-between gap-2">
											<CardTitle className="text-base leading-snug">
												{service.title}
											</CardTitle>
											<Badge
												variant="secondary"
												className="text-[10px] shrink-0 mt-0.5"
											>
												{service.badge}
											</Badge>
										</div>
										<CardDescription className="text-sm leading-relaxed">
											{service.description}
										</CardDescription>
									</CardHeader>
									<CardContent className="pt-0 mt-auto">
										<Button
											asChild
											variant={service.featured ? "default" : "outline"}
											size="sm"
											className={`w-full ${service.featured ? "bg-blue-700 hover:bg-blue-800" : ""}`}
										>
											<Link href={service.href}>
												{service.featured ? "Apply Now" : "Learn More"}
												<ChevronRight className="ml-1 w-3.5 h-3.5" />
											</Link>
										</Button>
									</CardContent>
								</Card>
							);
						})}
					</div>
				</section>

				{/* Announcements */}
				<section className="bg-muted/40 py-16">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<div className="flex items-center justify-between mb-10">
							<div>
								<h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
									<AlertCircle className="w-5 h-5 text-blue-600" />
									Latest Announcements
								</h2>
								<p className="text-muted-foreground mt-1">
									Stay up to date with important notices from the municipality.
								</p>
							</div>
							<Button
								variant="ghost"
								size="sm"
								asChild
								className="hidden sm:flex"
							>
								<Link href="#">
									View All <ArrowRight className="ml-1 w-3.5 h-3.5" />
								</Link>
							</Button>
						</div>

						<div className="flex flex-col gap-4">
							{announcements.map((item) => (
								<Card
									key={item.title}
									className="border-border/60 hover:shadow-sm transition-shadow"
								>
									<CardContent className="py-5 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
										<div className="flex items-center gap-2 shrink-0">
											<Calendar className="w-4 h-4 text-muted-foreground" />
											<span className="text-xs text-muted-foreground whitespace-nowrap">
												{item.date}
											</span>
										</div>
										<Separator
											orientation="vertical"
											className="h-8 hidden sm:block bg-border"
										/>
										<div className="flex-1 min-w-0">
											<div className="flex items-center gap-2 mb-1">
												<Badge variant="outline" className="text-[10px] px-1.5">
													{item.tag}
												</Badge>
												<h3 className="text-sm font-semibold text-foreground leading-snug">
													{item.title}
												</h3>
											</div>
											<p className="text-xs text-muted-foreground leading-relaxed">
												{item.summary}
											</p>
										</div>
										<ChevronRight className="w-4 h-4 text-muted-foreground shrink-0 hidden sm:block" />
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</section>

				{/* Passport CTA Banner */}
				<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
					<div className="rounded-2xl bg-linear-to-r from-blue-800 to-blue-600 text-white p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
						<div className="max-w-lg">
							<div className="flex items-center gap-2 mb-3">
								<Users className="w-5 h-5 text-blue-200" />
								<span className="text-sm text-blue-200 font-medium">
									Open to All Arkadia Residents
								</span>
							</div>
							<h2 className="text-2xl md:text-3xl font-bold mb-3">
								Ready to Apply for Your Passport?
							</h2>
							<p className="text-blue-100 leading-relaxed">
								Complete your application online in under 10 minutes. Bring your
								documents to any Passport Office for verification. Processing
								time is 3–5 business days.
							</p>
						</div>
						<div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0">
							<Button
								asChild
								size="lg"
								className="bg-white text-blue-800 hover:bg-blue-50 font-semibold whitespace-nowrap shadow-lg"
							>
								<Link href="/passport/new">
									Start Application
									<ArrowRight className="ml-2 w-4 h-4" />
								</Link>
							</Button>
							<Button
								asChild
								size="lg"
								variant="outline"
								className="border-white/40 text-white hover:bg-white/10 bg-transparent whitespace-nowrap"
							>
								<Link href="#">Check Status</Link>
							</Button>
						</div>
					</div>
				</section>
			</main>

			{/* Footer */}
			<footer className="bg-blue-950 text-blue-200">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
						<div className="col-span-1 sm:col-span-2 lg:col-span-1">
							<div className="flex items-center gap-3 mb-4">
								<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0">
									<Shield className="w-6 h-6 text-blue-800" />
								</div>
								<p className="font-bold text-white text-sm leading-tight">
									Municipality
									<br />
									of Arkadia
								</p>
							</div>
							<p className="text-sm leading-relaxed text-blue-300">
								Serving the citizens of Arkadia with transparency, efficiency,
								and integrity since 1948.
							</p>
						</div>

						<div>
							<h3 className="text-white font-semibold text-sm mb-4">
								Quick Services
							</h3>
							<ul className="space-y-2 text-sm">
								{[
									"New Passport",
									"ID Card",
									"Birth Certificate",
									"Marriage Certificate",
									"Business License",
								].map((s) => (
									<li key={s}>
										<Link
											href="#"
											className="hover:text-white transition-colors"
										>
											{s}
										</Link>
									</li>
								))}
							</ul>
						</div>

						<div>
							<h3 className="text-white font-semibold text-sm mb-4">
								Municipality
							</h3>
							<ul className="space-y-2 text-sm">
								{[
									"About Arkadia",
									"Mayor's Office",
									"City Council",
									"Departments",
									"Careers",
								].map((s) => (
									<li key={s}>
										<Link
											href="#"
											className="hover:text-white transition-colors"
										>
											{s}
										</Link>
									</li>
								))}
							</ul>
						</div>

						<div>
							<h3 className="text-white font-semibold text-sm mb-4">Contact</h3>
							<ul className="space-y-2 text-sm">
								<li className="flex items-start gap-2">
									<MapPin className="w-4 h-4 shrink-0 mt-0.5" />1 Merdeka
									Square, Arkadia City, 10110
								</li>
								<li className="flex items-center gap-2">
									<Phone className="w-4 h-4 shrink-0" />
									(021) 555-0100
								</li>
								<li className="flex items-center gap-2">
									<Clock className="w-4 h-4 shrink-0" />
									Mon–Fri, 08:00–16:00
								</li>
							</ul>
						</div>
					</div>

					<Separator className="bg-blue-800 mb-6" />

					<div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-blue-400">
						<p>&copy; 2026 Municipality of Arkadia. All rights reserved.</p>
						<div className="flex gap-4">
							<Link href="#" className="hover:text-white transition-colors">
								Privacy Policy
							</Link>
							<Link href="#" className="hover:text-white transition-colors">
								Terms of Use
							</Link>
							<Link href="#" className="hover:text-white transition-colors">
								Accessibility
							</Link>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}
