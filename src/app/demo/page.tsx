import { Button } from "@/components/ui/button";
import { InfiniteMovingCards } from "@/components/ui/moving-cards";
import Image from "next/image";

export default function Home() {
    return (
        <main className="min-h-screen items-center w-screen flex justify-center flex-col p-6 max-w-screen overflow-x-hidden">
            {/* Hero */}
            <div className="min-h-screen w-screen flex items-center justify-center">
                <div className="flex flex-col items-center justify-center min-h-screen w-full lg:w-1/3 z-10">
                    <h1 className="text-5xl font-bold text-white text-center">Business Name</h1>
                    <span className="text-zinc-200 text-center tracking-wide leading-loose pt-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
                    <div className="flex gap-4 pt-6">
                        <Button>Get Started</Button>
                    </div>
                </div>
                <div className="h-screen w-full brightness-50 bg-no-repeat bg-hero-pattern absolute bg-cover" ></div>

            </div>

            {/* Statistics */}

            <h2 className="text-4xl lg:text-5xl font-bold mt-40">Our Statistics</h2>

            <div className="flex gap-16 lg:gap-24 flex-col lg:flex-row py-12">
                <div className="flex justify-center flex-col items-center gap-8">
                    <h2 className="text-2xl">Some Statistic</h2>
                    <span className="text-4xl font-semibold">50+</span>
                </div>
                <div className="flex justify-center flex-col items-center gap-8">
                    <h2 className="text-2xl">Some Statistic</h2>
                    <span className="text-4xl font-semibold">99+</span>
                </div>
                <div className="flex justify-center flex-col items-center gap-8">
                    <h2 className="text-2xl">Some Statistic</h2>
                    <span className="text-4xl font-semibold">20+</span>
                </div>
            </div>

            {/* Features */}
            <h2 className="text-4xl lg:text-5xl font-bold mt-40 py-12">Why choose us?</h2>

            <div className="flex gap-20 flex-col items-center lg:flex-row w-full lg:w-1/2 ">
                <div className="lg:w-5/12">
                    <Image src="/deconstructed.svg" width={500} height={400} alt="mockup" className="" sizes="(max-width: 640px) 100vw, 50vw" />
                </div>
                <div className="w-full lg:w-1/2">
                    <h3 className="text-2xl font-bold ">Feature 1</h3>
                    <span className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </span>
                </div>
            </div>
            <div className="flex gap-20 flex-col items-center w-full py-20 lg:w-1/2 lg:flex-row-reverse">
                <div className="lg:w-5/12">
                    <Image src="/logic.svg" width={500} height={400} alt="mockup" className="" sizes="(max-width: 640px) 100vw, 50vw" />
                </div>
                <div className="w-full lg:w-1/2">
                    <h3 className="text-2xl font-bold ">Feature 2</h3>
                    <span className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </span>
                </div>
            </div>
            <div className="flex gap-20 flex-col items-center lg:flex-row w-full lg:w-1/2">
                <div className="lg:w-5/12">
                    <Image src="/solution.svg" width={500} height={400} alt="mockup" className=" " sizes="(max-width: 640px) 100vw, 50vw" />
                </div>
                <div className="w-full lg:w-1/2">
                    <h3 className="text-2xl font-bold ">Feature 3</h3>
                    <span className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </span>
                </div>
            </div>

            {/* Testimonials */}

            <h2 className="text-4xl lg:text-5xl font-bold mt-40">Testimonials</h2>

            <div className="rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="slow"
                    className="my-8"
                />
            </div>

            {/* CTA */}
            <div className="flex flex-col items-center justify-center my-40 py-10 px-6 -mx-12 lg:px-20 bg-accent p-0 lg:rounded-full w-screen lg:w-1/2 text-card-foreground">
                <h2 className="text-3xl lg:text-5xl font-bold text-center">Get Started Today</h2>
                <span className="text-lg pt-8 w-full lg:w-3/4 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                <div className="flex gap-4 pt-6">
                    <Button className="rounded-xl py-6 px-8 text-lg">Schedule a demo</Button>
                </div>
            </div>

        </main>
    );
}

const testimonials = [
    {
        name: "John Doe",
        quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        title: "CEO of Company",
        profile: "/blank.jpg",
    },
    {
        name: "Jane Doe",
        quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        title: "CEO of Company",
        profile: "/blank.jpg",

    },
    {
        name: "John Smith",
        quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        title: "CEO of Company",
        profile: "/blank.jpg",
    },
    {
        name: "Jane Smith",
        quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        title: "CEO of Company",
        profile: "/blank.jpg",
    },
];
