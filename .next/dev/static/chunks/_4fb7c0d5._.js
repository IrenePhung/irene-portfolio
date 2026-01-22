(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/work/trailblazer/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TrailBlazerCaseStudy
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
// app/(site)/work/trailblazer/page.tsx
"use client";
;
;
const tags = [
    "Django",
    "Angular",
    "PostgreSQL",
    "PostGIS",
    "AWS EC2",
    "Terraform",
    "Nginx",
    "uWSGI",
    "HTTPS",
    "Security Hardening"
];
const stats = [
    {
        label: "Role",
        value: "Deployment + Security + QA contributions",
        note: "Production-style setup & verification"
    },
    {
        label: "Focus",
        value: "Secure exposure, reliability, reproducibility",
        note: "Reverse proxy, TLS, IaC mindset"
    },
    {
        label: "Delivery",
        value: "Team build deployed to AWS",
        note: "From design → deployment → validation"
    }
];
const overviewBullets = [
    {
        title: "What the product does",
        items: [
            "Helps users discover hiking routes and explore route details in a consistent UX flow.",
            "Supports community contributions (reviews/photos) to enrich route quality and trust.",
            "Stores geospatial route data for location-aware features using PostGIS-backed persistence."
        ]
    },
    {
        title: "Why it matters",
        items: [
            "Public-facing web apps need secure exposure and reliable runtime behavior to be credible.",
            "This project focused on production-style deployment (proxy boundary, TLS, safer defaults) and evidence-based verification."
        ]
    }
];
const myOwnership = [
    {
        title: "What I owned / contributed",
        items: [
            "Deployment & security focus: reverse proxy boundary, TLS/HTTPS, and safer runtime configuration.",
            "Helped validate production readiness using clear checks and documented outcomes.",
            "Collaborated on data model integration for PostgreSQL/PostGIS and route-related features."
        ]
    },
    {
        title: "Collaboration",
        items: [
            "Worked with teammates to align deployment constraints with app requirements (ports, proxy headers, static/media handling).",
            "Reviewed issues discovered during deployment validation and helped refine configuration for stability.",
            "Documented approach so reviewers can understand the deployment/security decisions quickly."
        ]
    }
];
const approach = [
    {
        title: "How I approached deployment & security",
        items: [
            "Reverse proxy as a boundary: isolate app server behind Nginx and expose only required entrypoints.",
            "TLS/HTTPS: ensure secure access and reduce accidental plaintext access (where applicable).",
            "Infrastructure-as-code mindset: prefer repeatability and auditable changes (Terraform).",
            "Verification mindset: validate the critical parts (routing, TLS, service exposure) and document the results."
        ]
    },
    {
        title: "What I verified (examples)",
        items: [
            "Correct reverse proxy routing to the application and stable navigation through typical flows.",
            "Nginx/uWSGI integration and reliable serving under expected usage.",
            "DB integration with PostGIS enabled for route-related storage/querying.",
            "Inbound exposure constrained to necessary ports (least privilege where applicable)."
        ]
    }
];
const results = [
    {
        title: "Results & outcomes",
        items: [
            "Delivered a production-style deployment setup that is easier to reason about and review.",
            "Improved confidence by validating critical paths and documenting the setup clearly.",
            "Strengthened credibility by using secure exposure patterns and reproducibility intent."
        ]
    },
    {
        title: "Key learnings",
        items: [
            "Proxy boundaries simplify security decisions: you can reason about a single entrypoint and enforce safer defaults.",
            "Documentation is evidence: clear setup notes help others trust your system quickly.",
            "Reproducibility reduces drift: IaC and documented configs prevent “works on my machine” issues."
        ]
    }
];
const nextSteps = [
    {
        title: "If I had more time",
        items: [
            "Add observability: structured logs, basic dashboards, and error monitoring.",
            "Expand CI automation for deployment validation (lint configs, run smoke tests after deploy).",
            "Performance tune frequent geospatial queries and add caching for common route pages.",
            "Add resilience checks (restart policies, health checks, controlled rollouts)."
        ]
    }
];
const evidences = [
    {
        title: "Final report",
        description: "Project documentation and deployment/security discussion in the final report.",
        reportHref: "https://github.com/IrenePhung/trailblazer-hiking-platform/blob/main/FinalReport.pdf"
    }
];
function Pill({ text }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "shrink-0 rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-[13px] text-white/80",
        children: text
    }, void 0, false, {
        fileName: "[project]/src/app/work/trailblazer/page.tsx",
        lineNumber: 155,
        columnNumber: 3
    }, this);
}
_c = Pill;
function SectionHeader({ kicker, title, desc }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            kicker ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-white/55 t-kicker text-xs md:text-sm",
                children: kicker
            }, void 0, false, {
                fileName: "[project]/src/app/work/trailblazer/page.tsx",
                lineNumber: 164,
                columnNumber: 14
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "mt-2 text-white/90 t-heading text-xl md:text-2xl font-semibold",
                children: title
            }, void 0, false, {
                fileName: "[project]/src/app/work/trailblazer/page.tsx",
                lineNumber: 165,
                columnNumber: 4
            }, this),
            desc ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-3 text-white/70 t-body text-[14px] md:text-[15px]",
                children: desc
            }, void 0, false, {
                fileName: "[project]/src/app/work/trailblazer/page.tsx",
                lineNumber: 166,
                columnNumber: 12
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/work/trailblazer/page.tsx",
        lineNumber: 163,
        columnNumber: 3
    }, this);
}
_c1 = SectionHeader;
function BulletCard({ title, items }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "glass noise rounded-[28px] p-7",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-white/90 t-heading text-base md:text-lg font-semibold",
                children: title
            }, void 0, false, {
                fileName: "[project]/src/app/work/trailblazer/page.tsx",
                lineNumber: 174,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "mt-4 space-y-2 text-white/70 t-body text-[14px] md:text-[15px]",
                children: items.map((x)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: [
                            "• ",
                            x
                        ]
                    }, x, true, {
                        fileName: "[project]/src/app/work/trailblazer/page.tsx",
                        lineNumber: 177,
                        columnNumber: 6
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/work/trailblazer/page.tsx",
                lineNumber: 175,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/work/trailblazer/page.tsx",
        lineNumber: 173,
        columnNumber: 3
    }, this);
}
_c2 = BulletCard;
function Modal({ open, title, children, onClose }) {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Modal.useEffect": ()=>{
            if (!open) return;
            const prevOverflow = document.body.style.overflow;
            document.body.style.overflow = "hidden";
            const onKeyDown = {
                "Modal.useEffect.onKeyDown": (e)=>{
                    if (e.key === "Escape") onClose();
                }
            }["Modal.useEffect.onKeyDown"];
            window.addEventListener("keydown", onKeyDown);
            return ({
                "Modal.useEffect": ()=>{
                    document.body.style.overflow = prevOverflow;
                    window.removeEventListener("keydown", onKeyDown);
                }
            })["Modal.useEffect"];
        }
    }["Modal.useEffect"], [
        open,
        onClose
    ]);
    if (!open) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center px-4 py-10",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": title ?? "Modal",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                "aria-label": "Close",
                className: "absolute inset-0 bg-black/70 backdrop-blur-[2px]",
                onClick: onClose
            }, void 0, false, {
                fileName: "[project]/src/app/work/trailblazer/page.tsx",
                lineNumber: 221,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 w-full max-w-3xl rounded-[28px] border border-white/10 bg-neutral-950/70 shadow-2xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between gap-3 border-b border-white/10 px-5 py-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-white/85 font-medium truncate",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/src/app/work/trailblazer/page.tsx",
                                lineNumber: 230,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: onClose,
                                className: "rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm text-white/80 hover:bg-white/10 transition",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/src/app/work/trailblazer/page.tsx",
                                lineNumber: 231,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/work/trailblazer/page.tsx",
                        lineNumber: 229,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-5",
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/src/app/work/trailblazer/page.tsx",
                        lineNumber: 240,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/work/trailblazer/page.tsx",
                lineNumber: 228,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/work/trailblazer/page.tsx",
        lineNumber: 215,
        columnNumber: 3
    }, this);
}
_s(Modal, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c3 = Modal;
function TrailBlazerCaseStudy() {
    _s1();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [activeEvidenceIdx, setActiveEvidenceIdx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const activeEvidence = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TrailBlazerCaseStudy.useMemo[activeEvidence]": ()=>{
            if (activeEvidenceIdx === null) return null;
            return evidences[activeEvidenceIdx] ?? null;
        }
    }["TrailBlazerCaseStudy.useMemo[activeEvidence]"], [
        activeEvidenceIdx
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "glass-strong noise rounded-[32px] p-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-white/55 t-kicker text-xs md:text-sm",
                                    children: "Case Study"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/work/trailblazer/page.tsx",
                                    lineNumber: 261,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "mt-3 font-display italic t-heading text-[34px] leading-[1.05] md:text-[54px] md:leading-[1.02]",
                                    children: [
                                        "TrailBlazer ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-white/70",
                                            children: "(Hiking Platform)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/work/trailblazer/page.tsx",
                                            lineNumber: 263,
                                            columnNumber: 20
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/work/trailblazer/page.tsx",
                                    lineNumber: 262,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-4 max-w-2xl text-white/70 t-body text-[15px] md:text-[16px]",
                                    children: "A hiking platform deployed to AWS with production-style networking, reverse proxy configuration, secure service exposure, and reliable runtime behavior."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/work/trailblazer/page.tsx",
                                    lineNumber: 265,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-6 flex flex-wrap gap-2",
                                    children: tags.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Pill, {
                                            text: t
                                        }, t, false, {
                                            fileName: "[project]/src/app/work/trailblazer/page.tsx",
                                            lineNumber: 272,
                                            columnNumber: 9
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/work/trailblazer/page.tsx",
                                    lineNumber: 270,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/work/trailblazer/page.tsx",
                            lineNumber: 260,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3 relative z-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>{
                                        if (window.history.length > 1) router.back();
                                        else router.push("/work");
                                    },
                                    className: "rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-white/85 hover:bg-white/10 transition",
                                    children: "← Back"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/work/trailblazer/page.tsx",
                                    lineNumber: 278,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#contact",
                                    className: "rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-white/85 hover:bg-white/10 transition",
                                    children: "Contact"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/work/trailblazer/page.tsx",
                                    lineNumber: 289,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/work/trailblazer/page.tsx",
                            lineNumber: 277,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/work/trailblazer/page.tsx",
                    lineNumber: 259,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/work/trailblazer/page.tsx",
                lineNumber: 258,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "grid gap-6 lg:grid-cols-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "glass noise rounded-[32px] p-7 lg:col-span-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-white/90 t-heading text-lg md:text-xl font-semibold",
                                children: "Snapshot"
                            }, void 0, false, {
                                fileName: "[project]/src/app/work/trailblazer/page.tsx",
                                lineNumber: 301,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 grid gap-4 md:grid-cols-3",
                                children: stats.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-2xl border border-white/10 bg-white/5 p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-white/55 text-xs",
                                                children: s.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/work/trailblazer/page.tsx",
                                                lineNumber: 305,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-1 text-white/90 font-semibold",
                                                children: s.value
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/work/trailblazer/page.tsx",
                                                lineNumber: 306,
                                                columnNumber: 9
                                            }, this),
                                            s.note ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-1 text-white/60 text-xs leading-5",
                                                children: s.note
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/work/trailblazer/page.tsx",
                                                lineNumber: 307,
                                                columnNumber: 19
                                            }, this) : null
                                        ]
                                    }, s.label, true, {
                                        fileName: "[project]/src/app/work/trailblazer/page.tsx",
                                        lineNumber: 304,
                                        columnNumber: 8
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/work/trailblazer/page.tsx",
                                lineNumber: 302,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/work/trailblazer/page.tsx",
                        lineNumber: 300,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "glass noise rounded-[32px] p-7",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-white/90 t-heading text-lg md:text-xl font-semibold",
                                children: "Highlights"
                            }, void 0, false, {
                                fileName: "[project]/src/app/work/trailblazer/page.tsx",
                                lineNumber: 314,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 space-y-3 text-white/70 leading-7 t-body text-[14px] md:text-[15px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            "• Secure exposure via ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                className: "text-white",
                                                children: "TLS + reverse proxy boundary"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/work/trailblazer/page.tsx",
                                                lineNumber: 317,
                                                columnNumber: 30
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/work/trailblazer/page.tsx",
                                        lineNumber: 316,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            "• Reproducibility intent with ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                className: "text-white",
                                                children: "Terraform (IaC)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/work/trailblazer/page.tsx",
                                                lineNumber: 320,
                                                columnNumber: 38
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/work/trailblazer/page.tsx",
                                        lineNumber: 319,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            "• Evidence-driven validation via ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                className: "text-white",
                                                children: "clear documentation"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/work/trailblazer/page.tsx",
                                                lineNumber: 323,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/work/trailblazer/page.tsx",
                                        lineNumber: 322,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/work/trailblazer/page.tsx",
                                lineNumber: 315,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/work/trailblazer/page.tsx",
                        lineNumber: 313,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/work/trailblazer/page.tsx",
                lineNumber: 299,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "glass-strong noise rounded-[32px] p-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeader, {
                        title: "Overview",
                        desc: "A quick explanation of the product and why production-style deployment/security mattered."
                    }, void 0, false, {
                        fileName: "[project]/src/app/work/trailblazer/page.tsx",
                        lineNumber: 330,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 grid gap-6 lg:grid-cols-2",
                        children: overviewBullets.map((b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BulletCard, {
                                title: b.title,
                                items: b.items
                            }, b.title, false, {
                                fileName: "[project]/src/app/work/trailblazer/page.tsx",
                                lineNumber: 336,
                                columnNumber: 7
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/work/trailblazer/page.tsx",
                        lineNumber: 334,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/work/trailblazer/page.tsx",
                lineNumber: 329,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "glass-strong noise rounded-[32px] p-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeader, {
                        title: "My role & scope",
                        desc: "What I owned, what I contributed, and how I worked with the team."
                    }, void 0, false, {
                        fileName: "[project]/src/app/work/trailblazer/page.tsx",
                        lineNumber: 342,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 grid gap-6 lg:grid-cols-2",
                        children: myOwnership.map((b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BulletCard, {
                                title: b.title,
                                items: b.items
                            }, b.title, false, {
                                fileName: "[project]/src/app/work/trailblazer/page.tsx",
                                lineNumber: 345,
                                columnNumber: 7
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/work/trailblazer/page.tsx",
                        lineNumber: 343,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/work/trailblazer/page.tsx",
                lineNumber: 341,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "glass-strong noise rounded-[32px] p-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeader, {
                        title: "Implementation approach",
                        desc: "A recruiter-friendly breakdown of how I approached deployment/security and what I verified."
                    }, void 0, false, {
                        fileName: "[project]/src/app/work/trailblazer/page.tsx",
                        lineNumber: 351,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 grid gap-6 lg:grid-cols-2",
                        children: approach.map((b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BulletCard, {
                                title: b.title,
                                items: b.items
                            }, b.title, false, {
                                fileName: "[project]/src/app/work/trailblazer/page.tsx",
                                lineNumber: 357,
                                columnNumber: 7
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/work/trailblazer/page.tsx",
                        lineNumber: 355,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/work/trailblazer/page.tsx",
                lineNumber: 350,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "glass-strong noise rounded-[32px] p-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeader, {
                        title: "Reports",
                        desc: "Documentation that supports the deployment/security decisions (no screenshots included)."
                    }, void 0, false, {
                        fileName: "[project]/src/app/work/trailblazer/page.tsx",
                        lineNumber: 363,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 grid gap-6 lg:grid-cols-2",
                        children: evidences.map((e, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "glass noise rounded-[28px] p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start justify-between gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-white/90 t-heading text-base md:text-lg font-semibold",
                                                        children: e.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/work/trailblazer/page.tsx",
                                                        lineNumber: 373,
                                                        columnNumber: 10
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-2 text-white/70 t-body text-[14px] md:text-[15px]",
                                                        children: e.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/work/trailblazer/page.tsx",
                                                        lineNumber: 374,
                                                        columnNumber: 10
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/work/trailblazer/page.tsx",
                                                lineNumber: 372,
                                                columnNumber: 9
                                            }, this),
                                            e.reportHref ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: e.reportHref,
                                                className: "shrink-0 rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-[13px] hover:bg-white/10 text-white/80 transition",
                                                target: "_blank",
                                                rel: "noreferrer",
                                                children: "Open →"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/work/trailblazer/page.tsx",
                                                lineNumber: 378,
                                                columnNumber: 10
                                            }, this) : null
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/work/trailblazer/page.tsx",
                                        lineNumber: 371,
                                        columnNumber: 8
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setActiveEvidenceIdx(idx),
                                        className: "mt-4 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-left hover:bg-white/10 transition",
                                        "aria-label": `Open ${e.title}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-white/80 font-medium",
                                                children: "View details"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/work/trailblazer/page.tsx",
                                                lineNumber: 395,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-1 text-white/55 text-sm",
                                                children: "Opens a small summary panel."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/work/trailblazer/page.tsx",
                                                lineNumber: 396,
                                                columnNumber: 9
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/work/trailblazer/page.tsx",
                                        lineNumber: 389,
                                        columnNumber: 8
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-3 text-sm text-white/50",
                                        children: "Tip: press ESC to close."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/work/trailblazer/page.tsx",
                                        lineNumber: 399,
                                        columnNumber: 8
                                    }, this)
                                ]
                            }, e.title, true, {
                                fileName: "[project]/src/app/work/trailblazer/page.tsx",
                                lineNumber: 370,
                                columnNumber: 7
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/work/trailblazer/page.tsx",
                        lineNumber: 368,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/work/trailblazer/page.tsx",
                lineNumber: 362,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "glass-strong noise rounded-[32px] p-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeader, {
                        title: "Results & learnings",
                        desc: "Outcomes that matter for hiring: impact + what you learned."
                    }, void 0, false, {
                        fileName: "[project]/src/app/work/trailblazer/page.tsx",
                        lineNumber: 406,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 grid gap-6 lg:grid-cols-2",
                        children: results.map((b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BulletCard, {
                                title: b.title,
                                items: b.items
                            }, b.title, false, {
                                fileName: "[project]/src/app/work/trailblazer/page.tsx",
                                lineNumber: 409,
                                columnNumber: 7
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/work/trailblazer/page.tsx",
                        lineNumber: 407,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/work/trailblazer/page.tsx",
                lineNumber: 405,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "glass noise rounded-[32px] p-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeader, {
                        title: "Limitations",
                        desc: "Short and honest constraints show maturity."
                    }, void 0, false, {
                        fileName: "[project]/src/app/work/trailblazer/page.tsx",
                        lineNumber: 415,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "mt-4 space-y-2 text-white/70 t-body text-[14px] md:text-[15px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "• No screenshots included in the public portfolio version."
                            }, void 0, false, {
                                fileName: "[project]/src/app/work/trailblazer/page.tsx",
                                lineNumber: 417,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "• Some validation depends on deployment environment constraints (e.g., restricted SSH / staging setup)."
                            }, void 0, false, {
                                fileName: "[project]/src/app/work/trailblazer/page.tsx",
                                lineNumber: 418,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "• Performance checks are baseline; deeper load testing would increase confidence for long-term operation."
                            }, void 0, false, {
                                fileName: "[project]/src/app/work/trailblazer/page.tsx",
                                lineNumber: 419,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/work/trailblazer/page.tsx",
                        lineNumber: 416,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/work/trailblazer/page.tsx",
                lineNumber: 414,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "glass-strong noise rounded-[32px] p-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeader, {
                        title: "Next improvements",
                        desc: "What I’d do next if this shipped long-term."
                    }, void 0, false, {
                        fileName: "[project]/src/app/work/trailblazer/page.tsx",
                        lineNumber: 424,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 grid gap-6 lg:grid-cols-2",
                        children: nextSteps.map((b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BulletCard, {
                                title: b.title,
                                items: b.items
                            }, b.title, false, {
                                fileName: "[project]/src/app/work/trailblazer/page.tsx",
                                lineNumber: 427,
                                columnNumber: 7
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/work/trailblazer/page.tsx",
                        lineNumber: 425,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/work/trailblazer/page.tsx",
                lineNumber: 423,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "contact",
                className: "glass-strong noise rounded-[48px] px-10 py-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-8 md:flex-row md:items-center md:justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-display italic t-heading text-white/90 text-[34px] leading-[1.08] md:text-[52px] md:leading-[1.02]",
                                children: "Let’s connect—I’d love to hear from you."
                            }, void 0, false, {
                                fileName: "[project]/src/app/work/trailblazer/page.tsx",
                                lineNumber: 434,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "mailto:irenephung.work@gmail.com",
                                className: "inline-flex items-center gap-4 rounded-2xl border border-white/15 bg-white/5 px-7 py-4 text-white/90 hover:bg-white/10 transition",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-base font-semibold",
                                        children: "Email Me"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/work/trailblazer/page.tsx",
                                        lineNumber: 442,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-2xl leading-none",
                                        "aria-hidden": "true",
                                        children: "✉️"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/work/trailblazer/page.tsx",
                                        lineNumber: 443,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/work/trailblazer/page.tsx",
                                lineNumber: 438,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/work/trailblazer/page.tsx",
                        lineNumber: 433,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-10 flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "https://www.linkedin.com/in/irene-phung-029a3b222",
                            target: "_blank",
                            rel: "noreferrer",
                            className: "inline-flex items-center gap-4 rounded-2xl border border-white/15 bg-white/5 px-8 py-4 text-white/90 hover:bg-white/10 transition",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-base font-semibold",
                                    children: "LinkedIn"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/work/trailblazer/page.tsx",
                                    lineNumber: 456,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    "aria-hidden": "true",
                                    className: "grid h-10 w-10 place-items-center rounded-xl border border-white/15 bg-white/5 text-white/80",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "18",
                                        height: "18",
                                        viewBox: "0 0 24 24",
                                        fill: "currentColor",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5ZM.4 24h4.2V7.9H.4V24ZM8.1 7.9H12v2.2h.1c.5-1 1.9-2.3 4.1-2.3 4.4 0 5.2 2.9 5.2 6.7V24h-4.2v-7.6c0-1.8 0-4.1-2.5-4.1s-2.9 2-2.9 4V24H8.1V7.9Z"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/work/trailblazer/page.tsx",
                                            lineNumber: 462,
                                            columnNumber: 9
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/work/trailblazer/page.tsx",
                                        lineNumber: 461,
                                        columnNumber: 8
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/work/trailblazer/page.tsx",
                                    lineNumber: 457,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/work/trailblazer/page.tsx",
                            lineNumber: 450,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/work/trailblazer/page.tsx",
                        lineNumber: 449,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/work/trailblazer/page.tsx",
                lineNumber: 432,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "pb-6 text-center text-white/35 text-sm",
                children: [
                    "© ",
                    new Date().getFullYear(),
                    " Irene. Built with Next.js."
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/work/trailblazer/page.tsx",
                lineNumber: 469,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Modal, {
                open: activeEvidence !== null,
                title: activeEvidence?.title,
                onClose: ()=>setActiveEvidenceIdx(null),
                children: activeEvidence ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-white/70 text-[14px] leading-7",
                            children: activeEvidence.description
                        }, void 0, false, {
                            fileName: "[project]/src/app/work/trailblazer/page.tsx",
                            lineNumber: 476,
                            columnNumber: 7
                        }, this),
                        activeEvidence.reportHref ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: activeEvidence.reportHref,
                            className: "inline-flex rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 hover:bg-white/10 transition",
                            target: "_blank",
                            rel: "noreferrer",
                            children: "Open report →"
                        }, void 0, false, {
                            fileName: "[project]/src/app/work/trailblazer/page.tsx",
                            lineNumber: 479,
                            columnNumber: 8
                        }, this) : null
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/work/trailblazer/page.tsx",
                    lineNumber: 475,
                    columnNumber: 6
                }, this) : null
            }, void 0, false, {
                fileName: "[project]/src/app/work/trailblazer/page.tsx",
                lineNumber: 473,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/work/trailblazer/page.tsx",
        lineNumber: 257,
        columnNumber: 3
    }, this);
}
_s1(TrailBlazerCaseStudy, "Oi2R/pymGWWt6jsUSInumoN29BU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c4 = TrailBlazerCaseStudy;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "Pill");
__turbopack_context__.k.register(_c1, "SectionHeader");
__turbopack_context__.k.register(_c2, "BulletCard");
__turbopack_context__.k.register(_c3, "Modal");
__turbopack_context__.k.register(_c4, "TrailBlazerCaseStudy");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_4fb7c0d5._.js.map