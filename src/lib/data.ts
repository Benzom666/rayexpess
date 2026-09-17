import {
  Cpu, Briefcase, Calculator, HeartPulse, Cog, Megaphone,
  Palette, ConciergeBell, Forklift, GraduationCap, HardHat, ClipboardList,
  type LucideIcon,
} from "lucide-react";

export const TRIPETTO_URL = "https://tripetto.app/run/RS7RIX2M6W";

/* ------------------------------------------------------------------ */
/* Types — ready to swap with a real jobs DB / API later               */
/* ------------------------------------------------------------------ */
export type EmploymentType = "Part-Time" | "Full-Time" | "Contract" | "Internship" | "Flexible";
export type Workplace = "On-site" | "Hybrid" | "Remote";
export type ExperienceLevel = "Entry" | "Intermediate" | "Student-friendly";

export interface Opportunity {
  id: string;
  title: string;
  field: string;
  type: EmploymentType;
  workplace: Workplace;
  level: ExperienceLevel;
  location: string;
  pay?: string;
  tags: string[];
  matchScore: number;
  blurb: string;
}

export interface Field {
  slug: string;
  name: string;
  code: string; // mono station code, e.g. "T-01"
  icon: LucideIcon;
  roles: string[];
  programs: string;
  tint: string; // tailwind bg for icon chip
  dot: string;  // station dot color
}

/* ------------------------------------------------------------------ */
/* Field matching — EDITABLE                                           */
/* ------------------------------------------------------------------ */
export const FIELDS: Field[] = [
  { slug: "technology", name: "Technology & IT", code: "T·01", icon: Cpu, roles: ["Junior Web Developer", "IT Support Assistant", "QA Tester", "Technical Support"], programs: "Computer Science · IT · Software", tint: "bg-ink text-ray", dot: "bg-ink" },
  { slug: "business", name: "Business", code: "B·02", icon: Briefcase, roles: ["Operations Assistant", "Sales Associate", "Customer Service Rep", "Office Coordinator"], programs: "Business Admin · Commerce · Management", tint: "bg-line text-white", dot: "bg-line" },
  { slug: "accounting", name: "Accounting & Finance", code: "F·03", icon: Calculator, roles: ["Accounting Assistant", "Bookkeeper", "Finance Admin", "Payroll Support"], programs: "Accounting · Finance · CPA-track", tint: "bg-moss text-white", dot: "bg-moss" },
  { slug: "healthcare", name: "Healthcare", code: "H·04", icon: HeartPulse, roles: ["Clinic Support", "Medical Office Assistant", "Healthcare Admin", "Patient Coordinator"], programs: "Health Sci · Nursing · Pre-med", tint: "bg-[#E5484D] text-white", dot: "bg-[#E5484D]" },
  { slug: "engineering", name: "Engineering", code: "E·05", icon: Cog, roles: ["Engineering Assistant", "CAD Drafter", "Lab Technician", "Field Helper"], programs: "Mechanical · Electrical · Civil", tint: "bg-ink text-white", dot: "bg-ink" },
  { slug: "marketing", name: "Marketing", code: "M·06", icon: Megaphone, roles: ["Marketing Assistant", "Social Media Coordinator", "Content Creator", "SEO Helper"], programs: "Marketing · Comms · Media", tint: "bg-ray text-ink", dot: "bg-ray-deep" },
  { slug: "design", name: "Design & Creative", code: "D·07", icon: Palette, roles: ["Graphic Design Assistant", "Video Editor", "UX Support", "Photo Assistant"], programs: "Design · Fine Arts · Media", tint: "bg-[#7C5CFF] text-white", dot: "bg-[#7C5CFF]" },
  { slug: "hospitality", name: "Hospitality", code: "H·08", icon: ConciergeBell, roles: ["Guest Services", "Event Operations", "Restaurant Support", "Hotel Front Desk"], programs: "Hospitality · Tourism · Culinary", tint: "bg-[#B25E09] text-white", dot: "bg-[#B25E09]" },
  { slug: "supply", name: "Supply Chain & Logistics", code: "L·09", icon: Forklift, roles: ["Warehouse Coordinator", "Inventory Associate", "Dispatch Support", "Logistics Admin"], programs: "Supply Chain · Operations", tint: "bg-[#0E6E6E] text-white", dot: "bg-[#0E6E6E]" },
  { slug: "education", name: "Education", code: "E·10", icon: GraduationCap, roles: ["Childcare Assistant", "Tutor", "Education Assistant", "Camp Leader"], programs: "ECE · Education · Child Studies", tint: "bg-line text-white", dot: "bg-line" },
  { slug: "trades", name: "Skilled Trades", code: "S·11", icon: HardHat, roles: ["Apprentice Helper", "Electrical Mate", "Plumbing Assistant", "General Labour"], programs: "Trades · Apprenticeship · Tech", tint: "bg-ink text-ray", dot: "bg-ink" },
  { slug: "admin", name: "Administration", code: "A·12", icon: ClipboardList, roles: ["Admin Assistant", "Data Entry", "Receptionist", "Scheduling Coordinator"], programs: "Any program · Transferable skills", tint: "bg-mist text-ink", dot: "bg-muted" },
];

/* ------------------------------------------------------------------ */
/* Opportunities — SAMPLE DATA. Replace with fetch('/api/jobs') later  */
/* ------------------------------------------------------------------ */
export const OPPORTUNITIES: Opportunity[] = [
  { id: "rx-101", title: "Junior Web Developer", field: "Technology & IT", type: "Part-Time", workplace: "Hybrid", level: "Student-friendly", location: "London, Ontario", pay: "$22–$28/hr", tags: ["React", "CSS", "Git"], matchScore: 96, blurb: "Ship real features for a local SaaS team, 15–20 hrs/week around classes." },
  { id: "rx-102", title: "Marketing Assistant", field: "Marketing", type: "Part-Time", workplace: "Hybrid", level: "Entry", location: "Toronto, Ontario", pay: "$20–$24/hr", tags: ["Social", "Content", "Canva"], matchScore: 93, blurb: "Run social calendars and campaign reporting for a D2C brand." },
  { id: "rx-103", title: "Accounting Assistant", field: "Accounting & Finance", type: "Part-Time", workplace: "On-site", level: "Student-friendly", location: "Kitchener, Ontario", pay: "$21–$25/hr", tags: ["QuickBooks", "Excel", "AP/AR"], matchScore: 91, blurb: "Bookkeeping, reconciliations and month-end support at a CPA firm." },
  { id: "rx-104", title: "IT Support Assistant", field: "Technology & IT", type: "Flexible", workplace: "On-site", level: "Entry", location: "Ottawa, Ontario", pay: "$20–$26/hr", tags: ["Helpdesk", "M365", "Hardware"], matchScore: 89, blurb: "Tier-1 support across campus clinics — perfect for IT students." },
  { id: "rx-105", title: "Operations Assistant", field: "Business", type: "Part-Time", workplace: "On-site", level: "Entry", location: "Mississauga, Ontario", pay: "$19–$23/hr", tags: ["Ops", "Sheets", "Vendors"], matchScore: 88, blurb: "Keep a logistics hub running: scheduling, inventory, dispatch." },
  { id: "rx-106", title: "Clinic Support Associate", field: "Healthcare", type: "Part-Time", workplace: "On-site", level: "Student-friendly", location: "Hamilton, Ontario", pay: "$20–$24/hr", tags: ["Admin", "EMR", "Patients"], matchScore: 90, blurb: "Front-desk + medical office support while you study health sciences." },
];

/* Future API shape — keep components decoupled:
 * async function listJobs(filters): Promise<Opportunity[]>
 * async function applyToJob(jobId, studentProfileId)
 * StudentProfile { education, skills, availability, goals }
 */
