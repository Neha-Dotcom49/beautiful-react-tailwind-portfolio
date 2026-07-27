import {
 ArrowRight,
 ExternalLink,
 Github,
 Building2,
 Hospital,
 FileText,
 ShoppingCart,
 Home,
 Factory,
 Cpu,
 Database,
 Briefcase,
 Layers,
 Zap,
 Shield,
 Users,
 Clock,
 Award,
 Star,
 } from "lucide-react";

const projects = [
 {
 id: 1,
 company: "PDB Technology",
 title: "DigiCX",
 description:
 "Enterprise pharma platform for HCP onboarding, contract management, approval workflows, SAP integration, digital signatures, payment processing, and workflow automation.",
 tags: ["Angular", "TypeScript", ".NET Web API", "SQL Server"],
 highlights: ["SAP Integration", "Digital Signatures", "Workflow Automation"],
 githubUrl: "#",
 demoUrl: "#",
 },
 {
 id: 2,
 company: "PDB Technology",
 title: "DMF Automation System",
 description:
 "Drug Master File automation platform for CTD-compliant document generation, review workflows, version control, and Word/PDF export.",
 tags: ["Angular", "Python", "Word", "PDF"],
 highlights: ["CTD Compliance", "Version Control", "Automated Export"],
 githubUrl: "#",
 demoUrl: "#",
 },
 {
 id: 3,
 company: "PDB Technology",
 title: "Notice Management System",
 description:
 "Enterprise workflow application with RBAC, notifications, document uploads, and approval workflows.",
 tags: ["Angular", ".NET", "SQL", "RBAC"],
 highlights: ["Role-Based Access", "Approval Workflows", "Real-time Notifications"],
 githubUrl: "#",
 demoUrl: "#",
 },
 {
 id: 4,
 company: "PDB Technology",
 title: "E-LogBook",
 description:
 "Pharma manufacturing lifecycle management system for equipment inspection, warehouse tracking, and production.",
 tags: ["Angular", "Workflow", "SQL"],
 highlights: ["Equipment Tracking", "Warehouse Management", "Production Monitoring"],
 githubUrl: "#",
 demoUrl: "#",
 },
  {
 id: 5,
 company: "PDB Technology",
 title: "RFQ",
 description:
 "Manufacturing workflow solution automating RFQ processing, BOM validation, SCM, logistics, and approvals.",
 tags: ["Angular", "Workflow", "Manufacturing"],
 highlights: ["RFQ Automation", "BOM Validation", "Supply Chain Management"],
 githubUrl: "#",
 demoUrl: "#",
 },
 {
  id: 6,
  company: "PDB Technology",
  title: "Intranet Portal",
  description:
    "Internal employee collaboration portal for managing company information, announcements, documents, employee services, and role-based access.",
  tags: [
    "Angular",
    "TypeScript",
    ".NET Web API",
    "SQL Server",
    "RBAC",
  ],
  highlights: [
    "Employee Portal",
    "Document Management",
    "Announcements",
    "Role-Based Access",
  ],
},
 {
 id: 7,
 company: "Kautilyam",
 title: "Hospital Management System",
 description:
 "Healthcare application for managing patients, appointments, billing, dashboards, and authentication.",
 tags: ["Angular", ".NET Web API", "Healthcare"],
 highlights: ["Patient Management", "Appointment Scheduling", "Billing System"],
 
 },
 {
 id: 8,
 company: "Sky IT Solutions",
 title: "GK House",
 description:
 "Real estate platform with property listings, authentication, filtering, and responsive UI.",
 tags: ["Angular", "REST API", "Bootstrap"],
 highlights: ["Property Listings", "Advanced Filtering", "Responsive UI"],
 githubUrl: "#",
 demoUrl: "#",
 },
 {
 id: 9,
 company: "Sky IT Solutions",
 title: "ElectroHub",
 description:
 "E-commerce application with shopping cart, checkout, product catalog, and responsive interface.",
 tags: ["Angular", "REST API", "E-Commerce"],
 highlights: ["Shopping Cart", "Checkout Flow", "Product Catalog"],
 githubUrl: "#",
 demoUrl: "#",
 },

 {
 id: 10,
 company: "Sky IT Solutions",
 title: "Invoice Automation",
 description:
 "AI-powered Accounts Payable automation with SAP integration, invoice extraction, RPA, and dashboards.",
 tags: ["Angular", "AI", "SAP", "RPA"],
 highlights: ["AI-Powered Extraction", "SAP Integration", "RPA Automation"],
 githubUrl: "#",
 demoUrl: "#",
 },
 {
 id: 10,
 company: "Personal Project",
 title: "Home Hunter",
 description:
 "Responsive real estate application with authentication, maps, search, filtering, and modern Angular UI.",
 tags: ["Angular", "TypeScript", "Bootstrap"],
 highlights: ["Map Integration", "Search & Filter", "Modern UI"],
 githubUrl: "https://github.com/Neha-Dotcom49/home-hunter-angular",
 demoUrl: "#",
 },
 ];

const getProjectIcon = (title) => {
 const iconClass = "w-12 h-12 text-primary";
 switch (title) {
 case "DigiCX":
 return <Database className={iconClass} />;
 case "DMF Automation System":
 return <FileText className={iconClass} />;
 case "Notice Management System":
 return <Briefcase className={iconClass} />;
 case "Hospital Management System":
 return <Hospital className={iconClass} />;
 case "GK House":
 case "Home Hunter":
 return <Home className={iconClass} />;
 case "ElectroHub":
 return <ShoppingCart className={iconClass} />;
 case "RFQ to CPPL Automation":
 return <Factory className={iconClass} />;
 case "Invoice Automation":
 return <Cpu className={iconClass} />;
 default:
 return <Building2 className={iconClass} />;
 }
 };

const getCompanyColor = (company) => {
 switch (company) {
 case "PDB Technology":
 return "bg-blue-500/10 text-blue-500 border-blue-500/20";
 case "Kautilyam":
 return "bg-purple-500/10 text-purple-500 border-purple-500/20";
 case "Sky IT Solutions":
 return "bg-emerald-500/10 text-emerald-500 border-emerald-500/20";
 case "Personal Project":
 return "bg-orange-500/10 text-orange-500 border-orange-500/20";
 default:
 return "bg-primary/10 text-primary border-primary/20";
 }
 };

export const ProjectsSection = () => {
 return (
 <section id="projects" className="py-24 px-4 bg-gradient-to-b from-background to-secondary/5">
 <div className="container mx-auto max-w-7xl">
 {/* Header */}
 <div className="text-center mb-16">
 <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
 <Layers size={16} />
 Portfolio
 </div>
 <h2 className="text-4xl md:text-5xl font-bold mb-4">
 Featured <span className="text-primary">Projects</span>
 </h2>
 <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
 Enterprise-grade applications built with modern technologies like Angular, 
 TypeScript, .NET Core, and AI-powered solutions.
 </p>
 </div>

 {/* Stats */}
 <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
 <div className="text-center p-6 rounded-2xl bg-card border">
 <div className="text-3xl font-bold text-primary">10+</div>
 <div className="text-sm text-muted-foreground">Projects Completed</div>
 </div>
 <div className="text-center p-6 rounded-2xl bg-card border">
 <div className="text-3xl font-bold text-primary">5+</div>
 <div className="text-sm text-muted-foreground">Enterprise Solutions</div>
 </div>
 <div className="text-center p-6 rounded-2xl bg-card border">
 <div className="text-3xl font-bold text-primary">3</div>
 <div className="text-sm text-muted-foreground">Companies Worked</div>
 </div>
 <div className="text-center p-6 rounded-2xl bg-card border">
 <div className="text-3xl font-bold text-primary">10+</div>
 <div className="text-sm text-muted-foreground">Technologies Used</div>
 </div>
 </div>

 {/* Projects Grid */}
 <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
 {projects.map((project, index) => (
 <div
 key={project.id}
 className="group relative rounded-2xl border bg-card hover:border-primary/50 hover:shadow-xl transition-all duration-300 overflow-hidden"
 >
 {/* Gradient overlay on hover */}
 <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

 {/* Header with icon */}
 <div className="relative h-32 flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5 border-b">
 <div className="p-4 rounded-2xl bg-background/50 backdrop-blur-sm shadow-lg">
 {getProjectIcon(project.title)}
 </div>
 {/* Company badge */}
 <span className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium border ${getCompanyColor(project.company)}`}>
 {project.company}
 </span>
 </div>

 {/* Content */}
 <div className="relative p-6">
 <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
 {project.title}
 </h3>

 <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
 {project.description}
 </p>

 {/* Highlights */}
 <div className="flex flex-wrap gap-1.5 mb-4">
 {project.highlights.map((highlight) => (
 <span
 key={`${project.id}-${highlight}`}
 className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-primary/5 text-primary/70 border border-primary/10"
 >
 {highlight}
 </span>
 ))}
 </div>

 {/* Tech Tags */}
 <div className="flex flex-wrap gap-1.5 mb-5">
 {project.tags.map((tag) => (
 <span
 key={`${project.id}-${tag}`}
 className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-secondary text-secondary-foreground border border-border/50"
 >
 {tag}
 </span>
 ))}
 </div>

 {/* Footer */}
 <div className="flex items-center justify-between pt-4 border-t">
 <div className="flex items-center gap-3">
 {project.demoUrl && project.demoUrl !== "#" && (
 <a
 href={project.demoUrl}
 target="_blank"
 rel="noreferrer"
 className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
 >
 <ExternalLink size={18} className="text-muted-foreground hover:text-primary transition-colors" />
 </a>
 )}
 {project.githubUrl && project.githubUrl !== "#" && (
 <a
 href={project.githubUrl}
 target="_blank"
 rel="noreferrer"
 className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
 >
 <Github size={18} className="text-muted-foreground hover:text-primary transition-colors" />
 </a>
 )}
 </div>
 <span className="text-xs text-muted-foreground">
 {project.company === "Personal Project" ? "Personal" : "Enterprise"}
 </span>
 </div>
 </div>
 </div>
 ))}
 </div>


 </div>
 </section>
 );
 };