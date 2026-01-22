"use client";

import Image from "next/image";
import { useState } from "react";
import { MapPin, Check, FileText, GraduationCap } from "lucide-react";
import profileImg from "@/image/profile.png";
import ProfileModal from "@/app/(site)/components/ProfileModal";
import ResumeModal from "@/app/(site)/components/ResumeModal";

type SidebarProps = {
	active?: "profile" | "resume";
};

export default function Sidebar({ active = "resume" }: SidebarProps) {
	const [openProfile, setOpenProfile] = useState(false);
	const [openResume, setOpenResume] = useState(false);

	return (
		<>
			<aside className="rounded-[32px] bg-white px-8 py-10 text-neutral-900 shadow-[0_20px_60px_rgba(0,0,0,0.18)] ring-1 ring-black/5 md:sticky md:top-10">
				<div className="flex flex-col items-center text-center">
					<div className="h-[108px] w-[108px] overflow-hidden rounded-full bg-white ring-1 ring-black/10">
						<Image src={profileImg} alt="Irene profile photo" className="h-full w-full object-cover" priority />
					</div>

					<h1 className="mt-6 text-[34px] font-semibold leading-tight tracking-[-0.02em]">Irene Phung</h1>

					<div className="mt-2 text-[15px] font-semibold text-neutral-500">
						<div>@irenephung.work@gmail.com</div>
						<div className="mt-1 inline-flex items-center gap-2">
							<MapPin className="h-4 w-4" />
							Mascot, Sydney, Australia
						</div>
						<div className="mt-2 inline-flex items-center gap-2">
							<GraduationCap className="h-4 w-4" />
							The University of Sydney
						</div>
					</div>

					<p className="mt-3 text-[16px] font-semibold text-neutral-800">Final-year Software Engineering</p>

					<div className="my-8 h-px w-full bg-neutral-200" />

					<div className="w-full space-y-3">
						<button
							type="button"
							onClick={() => setOpenProfile(true)}
							className={[
								"flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left transition",
								active === "profile"
									? "bg-neutral-900 text-white shadow-[0_12px_30px_rgba(0,0,0,0.18)]"
									: "text-neutral-500 hover:bg-neutral-100",
							].join(" ")}
						>
							<span
								className={[
									"grid h-9 w-9 place-items-center rounded-xl",
									active === "profile" ? "bg-white/10" : "bg-neutral-100",
								].join(" ")}
							>
								<Check className="h-4 w-4" />
							</span>
							<span className="text-[16px] font-semibold">Profile</span>
						</button>

						<button
							type="button"
							onClick={() => setOpenResume(true)}
							className={[
								"flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left transition",
								active === "resume"
									? "bg-neutral-900 text-white shadow-[0_12px_30px_rgba(0,0,0,0.18)]"
									: "text-neutral-500 hover:bg-neutral-100",
							].join(" ")}
						>
							<span
								className={[
									"grid h-9 w-9 place-items-center rounded-xl",
									active === "resume" ? "bg-white/10" : "bg-neutral-100",
								].join(" ")}
							>
								<FileText className="h-4 w-4" />
							</span>
							<span className="text-[16px] font-semibold">Resume</span>
						</button>
					</div>
				</div>
			</aside>

			<ProfileModal open={openProfile} onClose={() => setOpenProfile(false)} />
			<ResumeModal open={openResume} onClose={() => setOpenResume(false)} pdfHref="/resume.pdf" />
		</>
	);
}