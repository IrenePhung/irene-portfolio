
"use client";

import { useEffect } from "react";
import { X, Download } from "lucide-react";

type Props = {
	open: boolean;
	onClose: () => void;
	pdfHref?: string;
};

export default function ResumeModal({ open, onClose, pdfHref = "/resume.pdf" }: Props) {
	useEffect(() => {
		if (!open) return;

		const prevOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";

		const onKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") onClose();
		};

		window.addEventListener("keydown", onKeyDown);
		return () => {
			document.body.style.overflow = prevOverflow;
			window.removeEventListener("keydown", onKeyDown);
		};
	}, [open, onClose]);

	if (!open) return null;

	return (
		<div className="fixed inset-0 z-[60] flex items-center justify-center px-4 py-8">
			<button
				type="button"
				aria-label="Close resume modal"
				className="absolute inset-0 bg-black/60"
				onClick={onClose}
			/>

			<div className="relative z-10 w-full max-w-[1000px] overflow-hidden rounded-[26px] bg-white shadow-[0_30px_120px_rgba(0,0,0,0.45)] ring-1 ring-black/5">
				<div className="flex items-center justify-between gap-3 border-b border-black/10 bg-white px-5 py-4">
					<div className="truncate text-[15px] font-semibold text-neutral-900">Resume</div>

					<div className="flex items-center gap-2">
						<a
							href={pdfHref}
							download
							className="inline-flex items-center gap-2 rounded-xl border border-black/10 bg-white px-3 py-2 text-[13px] font-semibold text-neutral-900 hover:bg-neutral-50 transition"
						>
							<Download className="h-4 w-4" />
							Download
						</a>

						<button
							type="button"
							onClick={onClose}
							className="grid h-10 w-10 place-items-center rounded-xl border border-black/10 bg-white text-neutral-800 hover:bg-neutral-50 transition"
							aria-label="Close"
						>
							<X className="h-4 w-4" />
						</button>
					</div>
				</div>

				<div className="h-[78vh] w-full bg-neutral-50">
					<iframe
						title="Resume PDF"
						src={pdfHref}
						className="h-full w-full"
					/>
				</div>

				<div className="px-5 py-3 text-center text-[12px] text-neutral-500">
					Tip: press ESC to close
				</div>
			</div>
		</div>
	);
}
