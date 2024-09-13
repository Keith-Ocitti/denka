import Image from "next/image";
import Link from "next/link";
import {
	ArrowDown,
	ArrowRight,
	ArrowUpRight,
	ChevronRight,
	Cog,
	Crown,
	Frame,
	Maximize2,
	PencilRuler,
	Star,
	Trophy,
	Truck,
} from "lucide-react";
// import { Button } from "@/components/ui/button";
// import {
// 	Card,
// 	CardContent,
// 	CardDescription,
// 	CardFooter,
// 	CardHeader,
// 	CardTitle,
// } from "@/components/ui/card";
// import { Separator } from "@/components/ui/separator";

export default function DenkaConsultsWebsite() {
	return (
		<div className="min-h-screen bg-gray-100">
			{/* Homepage */}
			<header className="bg-white shadow-sm">
				<div className="container mx-auto px-4 py-4 flex justify-between items-center">
					<Link href="/" className="flex items-center space-x-2">
						<div className="w-8 h-8 bg-orange-500 rounded-md"></div>
						<span className="text-2xl font-bold text-gray-800">DENKA</span>
					</Link>
					<nav className="hidden md:flex space-x-6">
						<Link href="#" className="text-gray-600 hover:text-gray-800">
							HOME
						</Link>
						<Link href="#" className="text-gray-600 hover:text-gray-800">
							ABOUT US
						</Link>
						<Link href="#" className="text-gray-600 hover:text-gray-800">
							SERVICE
						</Link>
						<Link href="#" className="text-gray-600 hover:text-gray-800">
							BLOG
						</Link>
						<Link href="#" className="text-gray-600 hover:text-gray-800">
							CONTACT US
						</Link>
					</nav>
					<button className="bg-orange-500 hover:bg-orange-600 text-white">
						Let's Talk
					</button>
				</div>
			</header>
			<main>
				<section className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
					<div className="w-full md:w-2/3 mb-8 md:mb-0">
						<h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-4">
							CONSULTING THAT
							<br />
							EMPOWERS BUSINESSES
							<br />
							TO THRIVE
						</h1>
						<p className="text-xl text-gray-600 mb-8">
							Transforming ideas into successful strategies
						</p>
						<button className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-3">
							Get Started
						</button>
					</div>
					<div className="w-full md:w-1/3">
						<div className="bg-white p-6 rounded-lg shadow-lg">
							<div className="flex mb-4">
								{[...Array(5)].map((_, i) => (
									<Star
										key={i}
										className="w-6 h-6 text-yellow-400 fill-current"
									/>
								))}
							</div>
							<p className="text-gray-600 mb-4">
								Denka Consults provides exceptional consulting services that
								have significantly improved our business operations and
								strategy.
							</p>
							<div className="flex items-center">
								<Image
									src=""
									width={50}
									height={50}
									alt="Client"
									className="rounded-full mr-4"
								/>
								<div>
									<p className="font-semibold">John Doe</p>
									<p className="text-sm text-gray-500">CEO, Tech Innovators</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Stats and Showcase */}
				<section className="container mx-auto px-4 py-16">
					<div className="flex flex-col md:flex-row items-center justify-between mb-12">
						<div className="mb-8 md:mb-0">
							<ArrowDown className="w-24 h-24 text-orange-500" />
						</div>
						<div className="flex flex-col md:flex-row items-center md:space-x-12">
							<div className="text-center mb-8 md:mb-0">
								<h2 className="text-6xl font-bold text-gray-900">500+</h2>
								<p className="text-xl text-gray-600">Completed Projects</p>
							</div>
							<div className="text-center">
								<h2 className="text-6xl font-bold text-gray-900">20</h2>
								<p className="text-xl text-gray-600">Years Experience</p>
							</div>
						</div>
					</div>
					<div className="relative w-full h-[400px] md:h-[600px]">
						<Image
							src="/placeholder.svg?height=600&width=1200"
							alt="Modern architectural design showcase"
							layout="fill"
							objectFit="cover"
							className="rounded-lg"
						/>
					</div>
				</section>

				{/* Quality Stats */}
				<section className="bg-gray-100 py-16 md:py-24">
					<div className="container mx-auto px-4">
						<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-gray-900">
							OPEN TO QUALITY BUILT TO LAST
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
							<div>
								<p className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
									500+
								</p>
								<p className="text-lg text-gray-600">
									Completed Projects
									<br />
									Across East Africa
								</p>
							</div>
							<div>
								<p className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
									98%
								</p>
								<p className="text-lg text-gray-600">
									Client Satisfaction
									<br />
									Rate
								</p>
							</div>
							<div>
								<p className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
									20+
								</p>
								<p className="text-lg text-gray-600">
									Years of Industry
									<br />
									Experience
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Services Overview */}
				<section className="bg-white py-16 md:py-24">
					<div className="container mx-auto px-4">
						<div className="grid gap-6 lg:grid-cols-3">
							<div className="text-center">
								<Trophy className="w-16 h-16 mx-auto mb-4 text-orange-500" />
								<h3 className="text-xl font-semibold mb-2">Client Support</h3>
								<p className="text-gray-600">
									Dedicated support throughout the project lifecycle, ensuring
									client satisfaction and project success.
								</p>
							</div>
							<div className="text-center">
								<Truck className="w-16 h-16 mx-auto mb-4 text-orange-500" />
								<h3 className="text-xl font-semibold mb-2">Timely Delivery</h3>
								<p className="text-gray-600">
									Efficient project management and execution to deliver
									high-quality results within agreed timelines.
								</p>
							</div>
							<div className="text-center">
								<Cog className="w-16 h-16 mx-auto mb-4 text-orange-500" />
								<h3 className="text-xl font-semibold mb-2">
									Expert Implementation
								</h3>
								<p className="text-gray-600">
									Skilled professionals ensuring proper implementation of
									designs and plans for optimal results.
								</p>
							</div>
						</div>

						<div className="text-center mt-16">
							<p className="text-orange-500 font-semibold mb-2">
								SERVICES WE PROVIDE
							</p>
							<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
								OUR SERVICES WILL HELP MAKE
								<br />
								YOUR VISION A REALITY
							</h2>
							<button
								variant="outline"
								size="lg"
								className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
							>
								VIEW ALL SERVICES
							</button>
						</div>
					</div>
				</section>

				{/* Services List */}
				<section className="py-16 md:py-24">
					<div className="container mx-auto px-4">
						{[
							{ id: "01", title: "ARCHITECTURE & PLANNING" },
							{ id: "02", title: "CIVIL & STRUCTURAL ENGINEERING" },
							{ id: "03", title: "PROJECT MANAGEMENT" },
							{ id: "04", title: "INTERIOR & LANDSCAPE DESIGN" },
						].map((service) => (
							<div
								key={service.id}
								className="group flex items-center justify-between py-8 px-4 bg-white hover:bg-orange-500 transition-colors duration-300 cursor-pointer"
							>
								<div className="flex items-center">
									<span className="text-6xl md:text-8xl font-bold text-gray-200 group-hover:text-orange-300 mr-8 transition-colors duration-300">
										{service.id}
									</span>
									<h3 className="text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-white transition-colors duration-300">
										{service.title}
									</h3>
								</div>
								<ArrowRight className="w-8 h-8 text-orange-500 group-hover:text-white transition-colors duration-300" />
							</div>
						))}
					</div>
				</section>

				{/* Core Features */}
				<section className="py-16 md:py-24 bg-white">
					<div className="container mx-auto px-4">
						<div className="flex flex-col md:flex-row">
							<div className="w-full md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
								<p className="text-orange-500 font-semibold mb-2">
									CORE FEATURES
								</p>
								<h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
									YOU HAVE TO CHOOSE US.
									<br />
									WHY?
								</h2>
								<p className="text-gray-600 mb-8">
									At Denka Consults, we take ultimate responsibility for the
									success of your projects. Our team of experts brings years of
									experience and a commitment to excellence, ensuring that every
									aspect of your project is handled with the utmost care and
									professionalism.
								</p>
								<div className="space-y-6">
									<div className="flex items-start">
										<PencilRuler className="w-12 h-12 text-orange-500 mr-4 flex-shrink-0" />
										<div>
											<h3 className="text-xl font-semibold mb-2">
												We Deliver Excellence
											</h3>
											<p className="text-gray-600">
												Our team of skilled professionals ensures that every
												project is executed with precision and attention to
												detail, exceeding client expectations.
											</p>
										</div>
									</div>
									<div className="flex items-start">
										<Crown className="w-12 h-12 text-orange-500 mr-4 flex-shrink-0" />
										<div>
											<h3 className="text-xl font-semibold mb-2">
												A Premium Service
											</h3>
											<p className="text-gray-600">
												We offer a comprehensive range of high-quality
												consulting and construction services, tailored to meet
												the unique needs of each client and project.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="w-full md:w-1/2">
								<div className="relative h-[400px] md:h-[500px] rounded-full overflow-hidden">
									<Image
										src="/placeholder.svg?height=500&width=500"
										alt="Modern architectural design"
										layout="fill"
										objectFit="cover"
										className="rounded-full"
									/>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Quality Living Gateway */}
				<section className="relative bg-gradient-to-br from-gray-900 to-gray-700 text-white py-24 md:py-32">
					<div className="container mx-auto px-4">
						<div className="flex flex-col md:flex-row items-center justify-between">
							<div className="w-full md:w-1/3 mb-8 md:mb-0">
								<h2 className="text-4xl md:text-5xl font-bold leading-tight">
									YOUR GATEWAY TO QUALITY INFRASTRUCTURE
								</h2>
							</div>
							<div className="w-full md:w-1/3 mb-8 md:mb-0">
								<p className="text-lg">
									Denka Consults provides comprehensive solutions for
									infrastructure development, ensuring quality, sustainability,
									and innovation in every project we undertake.
								</p>
							</div>
							<div className="w-full md:w-1/3 flex justify-end">
								<div className="relative w-32 h-32">
									<div className="absolute inset-0 flex items-center justify-center">
										<ArrowUpRight className="w-8 h-8 text-orange-500" />
									</div>
									<svg className="w-full h-full" viewBox="0 0 100 100">
										<path
											id="circlePath"
											d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
											fill="none"
										/>
										<text fill="currentColor">
											<textPath xlinkHref="#circlePath" className="text-xs">
												Since 2002 • Best in Consulting
											</textPath>
										</text>
									</svg>
								</div>
							</div>
						</div>
						<div className="flex justify-center mt-12 space-x-4">
							<button className="px-6 py-2 border border-white rounded-full hover:bg-white hover:text-gray-900 transition-colors duration-300">
								Expert Consulting
							</button>
							<button className="px-6 py-2 border border-white rounded-full hover:bg-white hover:text-gray-900 transition-colors duration-300">
								Quality Construction
							</button>
						</div>
					</div>
				</section>
			</main>
			<footer className="bg-gray-900 text-white py-12">
				<div className="container mx-auto px-4">
					<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
						<div>
							<h3 className="text-xl font-bold mb-4">About Denka</h3>
							<p className="text-gray-400">
								Providing top-notch consulting and construction services since
								2002.
							</p>
						</div>
						<div>
							<h3 className="text-xl font-bold mb-4">Our Services</h3>
							<ul className="space-y-2">
								<li>
									<Link href="#" className="text-gray-400 hover:text-white">
										Architecture & Planning
									</Link>
								</li>
								<li>
									<Link href="#" className="text-gray-400 hover:text-white">
										Civil & Structural Engineering
									</Link>
								</li>
								<li>
									<Link href="#" className="text-gray-400 hover:text-white">
										Project Management
									</Link>
								</li>
								<li>
									<Link href="#" className="text-gray-400 hover:text-white">
										Interior & Landscape Design
									</Link>
								</li>
							</ul>
						</div>
						<div>
							<h3 className="text-xl font-bold mb-4">Contact Us</h3>
							<p className="text-gray-400">Plot 8B Impala Avenue, Kampala</p>
							<p className="text-gray-400">P.O Box 702176 Entebbe, Uganda</p>
							<p className="text-gray-400">Tel: +256-780-540187</p>
							<p className="text-gray-400">
								Email: denkaconsultinggroup@gmail.com
							</p>
						</div>
						<div>
							<h3 className="text-xl font-bold mb-4">Follow Us</h3>
							<div className="flex space-x-4">
								<Link href="#" className="text-gray-400 hover:text-white">
									<svg
										className="w-6 h-6"
										fill="currentColor"
										viewBox="0 0 24 24"
										aria-hidden="true"
									>
										<path
											fillRule="evenodd"
											d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
											clipRule="evenodd"
										/>
									</svg>
								</Link>
								<Link href="#" className="text-gray-400 hover:text-white">
									<svg
										className="w-6 h-6"
										fill="currentColor"
										viewBox="0 0 24 24"
										aria-hidden="true"
									>
										<path
											fillRule="evenodd"
											d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
											clipRule="evenodd"
										/>
									</svg>
								</Link>
								<Link href="#" className="text-gray-400 hover:text-white">
									<svg
										className="w-6 h-6"
										fill="currentColor"
										viewBox="0 0 24 24"
										aria-hidden="true"
									>
										<path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
									</svg>
								</Link>
							</div>
						</div>
					</div>
					<div className="mt-8 pt-8 border-t border-gray-800 text-center">
						<p className="text-gray-400">
							&copy; 2023 Denka Consults Limited. All rights reserved.
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
}
