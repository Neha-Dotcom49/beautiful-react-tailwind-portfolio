import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    id: 1,
    title: "AWS Well-Architected Proficient",
    issuer: "Amazon Web Services (AWS)",
    issued: "May 2026",
    credential:
      "https://www.credly.com/badges/da9a6700-cfde-41fe-ae6d-7d3dbe7a54e9/linked_in_profile",
  },
  {
    id: 2,
    title: "Full Stack Developer",
    issuer: "Naresh i Technologies",
    issued: "February 2023",
    credential:
      "https://drive.google.com/file/d/1zYjxI2HUTPp2BlfOq9MgohZTsTx76zBR/view",
  },
  {
    id: 3,
    title: "Web Development",
    issuer: "Mstrong Management Pvt. Ltd.",
    issued: "February 2023",
    credential:
      "https://drive.google.com/file/d/1dnbKyzHFmxUar0MPQ8PW5yrVAfmlRklO/view",
  },
  {
    id: 4,
    title: ".NET Core MVC - The Complete Guide (.NET 8)",
    issuer: "Udemy",
    issued: "January 2025",
    credential:
      "https://www.udemy.com/certificate/UC-ab3bca81-7963-4228-9ba9-321cf63a9762/",
  },
];

export const CertificationSection = () => {
  return (
    <section id="certifications" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
          My <span className="text-primary">Certifications</span>
        </h2>

        <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
          Professional certifications and technical training that have strengthened
          my expertise in Full Stack Development, Cloud Architecture, and Modern
          Web Technologies.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-card border rounded-2xl p-6 hover:border-primary hover:shadow-lg transition-all duration-300"
            >
              <div className="flex justify-between items-start">
                <div className="flex gap-4">
                  <div className="p-3 rounded-full">
                    <Award className="w-7 h-7 text-primary" />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold">{cert.title}</h3>

                    <p className="text-primary font-medium mt-1">
                      {cert.issuer}
                    </p>

                    <p className="text-sm text-muted-foreground mt-2">
                      Issued: {cert.issued}
                    </p>
                  </div>
                </div>

                {cert.credential !== "#" && (
                  <a
                    href={cert.credential}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-primary"
                  >
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};