"use client";

import { motion, Variants } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Glassmorphism from "@/components/ui/shared/Glassmorphism";

// --- New 10-Year Resume Data Structure ---
const resumeData = {
  name: "Supasak Najaireeb",
  title: "Web Developer",
  profile:
    "Innovative and detail-oriented web developer with 9+ years of experience in full-stack development. Proficient in VB.NET with SQL Server (3 years) and modern JavaScript frameworks (React.js, Next.js, Node.js) with API development (4+ years). Adept at building high-performance, scalable web applications that streamline business processes across multiple departments. Passionate about automation, efficiency, and delivering user-friendly solutions.",
  experience: [
    {
      title: "QR Register System (Company-wide Event & Attendance Tracking)",
      description:
        "Developed a QR code-based registration system used across multiple departments for tracking employee check-in/out. Integrated real-time reporting and Excel export for further processing. Enhanced engagement by adding mini random rewards games for seminars.",
      tech: ["Next.js 15", "TypeScript", "TailwindCSS"],
    },
    {
      title: "IT Inventory & Asset Management System",
      description:
        "Designed and deployed a web-based fulfillment system for tracking IT equipment and assets. Features include real-time inventory monitoring, check-in/out system, automated email alerts, and reporting for IT managers. Improved asset traceability and reduced manual tracking errors.",
      tech: ["Next.js", "TypeScript", "SQL Server", "Docker"],
    },
    {
      title: "HRMS – Centralized Employee Service Access Approval",
      description:
        "Developed an automated approval system for employee service access requests, replacing the manual multi-step approval process. Consolidated all necessary service requests into a single-page approval workflow, reducing paperwork and processing time. Cut down new employee service activation time from months to just days.",
      tech: ["Next.js (Full-stack)", "TypeScript", "ShadCN UI", "TailwindCSS"],
    },
    {
      title: "Smartphone Transfer Approval System",
      description:
        "Built a secure web platform for managing company smartphone transfers between employees, ensuring proper documentation and compliance. Added digital asset tracking to mitigate fraud risks and enforce accountability. Expanded existing asset management functionality by incorporating ownership transfer records.",
      tech: ["Next.js", "TypeScript", "SQL Server"],
    },
    {
      title: "Double A Vendor Management",
      description:
        "Improved vendor registration and categorization, enhancing SEO and vendor comparison. Integrated vendor approval data into ERP systems, reducing paperwork and increasing efficiency.",
      tech: [], // Assuming you'll add tech stacks later if needed
    },
    {
      title: "Control Room Export",
      description:
        "Developed a container tracking web app with automated approvals and real-time notifications via Line Notify.",
      tech: [],
    },
    {
      title: "Microservices Email Group Management",
      description:
        "Implemented single-page sign-on (SSO) for microservices, reducing manual workload in email group verification.",
      tech: [],
    },
    {
      title: "Seamless Login API (Cross-Platform Authentication)",
      description:
        "Created a RESTful API to enable secure session sharing between two applications, eliminating redundant logins.",
      tech: [],
    },
    {
      title: "Ethics Survey System",
      description:
        "Developed a React.js-based survey tool, saving over 1 million baht in outsourcing costs. Enabled rapid survey deployment within three days.",
      tech: ["React.js"],
    },
    {
      title: "PMS Online (Performance Management System)",
      description:
        "Designed an employee evaluation platform with hierarchical selection and radar graph analysis.",
      tech: ["VB.NET"],
    },
    {
      title: "CAR/PAR Document Management System",
      description:
        "Built an approval-based document tracking system with file uploads, reporting, and email notifications.",
      tech: [],
    },
  ],
  skills: [
    "Next.js",
    "React.js",
    "TailwindCSS",
    "ShadCN UI",
    "Ant Design",
    "Aceternity UI",
    "Node.js",
    "Express",
    "VB.NET",
    "SQL Server",
    "JavaScript",
    "TypeScript",
    "Docker",
    "Git",
    "PM2",
    "Nginx",
  ],
  education: [
    {
      school: "Mahidol University",
      degree:
        "Faculty of Engineering, Department of Electrical Communication Engineering",
    },
  ],
};

// --- Framer Motion Variant Types (Corrected) ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Stagger the appearance of sections
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
};

export default function ResumeLandingPage() {
  return (
    // Note: The outer div padding and centering is handled in layout.tsx
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-12 py-4" // Increased vertical space
    >
      {/* ------------------------------------------------------------------
        1. HEADER & PROFILE 
      -------------------------------------------------------------------*/}
      <motion.header
        variants={itemVariants}
        className="text-center space-y-2 pt-4"
      >
        {/* Profile Image */}
        <div className="mx-auto mb-4">
          <div className="border-4 ring-4 ring-gray-500 w-fit rounded-full shadow-2xl bg-gray-400 p-0">
            <Image
              src={`/resume/images/profile.jpg`}
              alt={`${resumeData.name} Profile Photo`}
              width={150}
              height={150}
              className="rounded-full object-cover border-4 border-primary shadow-2xl"
              priority
            />
          </div>
        </div>

        <h1 className="text-5xl font-extrabold tracking-tight lg:text-6xl">
          {resumeData.name}
        </h1>
        <h2 className="text-3xl font-semibold text-gray-700 dark:text-gray-300">
          {resumeData.title}
        </h2>
        {/* Gradient Title - Preserved your custom styling */}
        <p className="text-xl text-muted-foreground">
          <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-xl font-bold text-transparent">
            {`${resumeData.experience.length}+ Projects | 9+ Years of Experience`}
          </span>
        </p>
      </motion.header>

      <motion.section variants={itemVariants}>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Profile</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base leading-relaxed">
              {resumeData.profile}
            </CardDescription>
          </CardContent>
        </Card>
      </motion.section>

      <Separator />

      {/* ------------------------------------------------------------------
        2. SKILLS 
      -------------------------------------------------------------------*/}
      <motion.section variants={itemVariants}>
        <h2 className="text-3xl font-bold mb-5 text-primary">
          Developer Skills
        </h2>
        <Glassmorphism className="p-2">
          <Card>
            <div className="flex flex-wrap gap-3 p-4">
              {resumeData.skills.map((skill, index) => (
                <Badge
                  key={index}
                  variant="default" // Using default for prominence
                  className="px-4 py-1.5 text-md font-medium shadow-md transition-transform hover:scale-[1.03]"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>
        </Glassmorphism>
      </motion.section>

      <Separator />

      {/* ------------------------------------------------------------------
        3. EXPERIENCE & PROJECTS 
      -------------------------------------------------------------------*/}
      <motion.section variants={itemVariants}>
        <h2 className="text-3xl font-bold mb-6 text-primary">
          Professional Experience & Key Projects
        </h2>

        <div className="space-y-10">
          {resumeData.experience.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }} // Less amount for better trigger
              transition={{ duration: 0.6, delay: index * 0.05 }} // Faster stagger
            >
              <Card className="hover:shadow-xl transition-shadow duration-300 border-l-4 border-l-violet-500 dark:border-l-pink-500">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">
                    {project.title}
                  </CardTitle>
                  {project.tech && project.tech.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tech.map((t, i) => (
                        <Badge
                          key={i}
                          variant="outline"
                          className="text-xs text-muted-foreground"
                        >
                          {t}
                        </Badge>
                      ))}
                    </div>
                  )}
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <Separator />

      {/* ------------------------------------------------------------------
        4. EDUCATION 
      -------------------------------------------------------------------*/}
      <motion.section variants={itemVariants}>
        <h2 className="text-3xl font-bold mb-4 text-primary">Education</h2>
        {resumeData.education.map((edu, index) => (
          <Card key={index} className="border-2">
            <CardHeader>
              <CardTitle className="text-lg">{edu.degree}</CardTitle>
              <CardDescription className="text-base text-gray-500 dark:text-gray-400">
                {edu.school}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </motion.section>
    </motion.div>
  );
}
