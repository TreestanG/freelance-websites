import { IconBrandInstagram, IconMail } from "@tabler/icons-react";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="bg-black flex items-center lg:px-40 p-20 h-[15rem] w-full text-white flex-col gap-8">
            <div className="w-full flex justify-between items-center">
                <h3 className="font-bold text-3xl">Company Name</h3>
                <div className="flex gap-4">
                    <Link href="mailto:"><IconMail size={36} className="text-white" /></Link>
                    <Link href=""><IconBrandInstagram size={36} className="text-white" /></Link>
                </div>
            </div>
            <span>Made by Tristan Gee</span>
        </div>
    )
}