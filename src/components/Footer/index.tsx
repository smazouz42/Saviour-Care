'use client'
import Image from "next/image";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const footerSections: FooterSection[] = [
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Testimonials", href: "#" },
      { label: "Find a doctor", href: "#" },
      { label: "Apps", href: "#" },
    ],
  },
  {
    title: "Region",
    links: [
      { label: "Link", href: "#" },
      { label: "Link", href: "#" },
      { label: "Link", href: "#" },
      { label: "Link", href: "#" },
    ],
  },
  {
    title: "Help",
    links: [
      { label: "Help center", href: "#" },
      { label: "Contact support", href: "#" },
      { label: "Instructions", href: "#" },
      { label: "How it works", href: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <div className="pt-20">
      <footer className="bg-blue-500">
        <div className="container mx-auto flex justify-between py-10">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Image
                src="/saviour-logo.png"
                alt="Saviour Care Logo"
                width={30}
                height={30}
                className="bg-white rounded-full p-1"
              />
              <h1 className="text-xl text-white">Saviour Care</h1>
            </div>
            <p className="text-sm text-white max-w-[400px]">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
            </p>
            <p className="text-sm text-gray-300">©AK PVT LTD 2021. All rights reserved.</p>
          </div>
            {footerSections.map((section, index) => (
              <div key={index}>
                <h2 className="text-lg text-white mb-4">{section.title}</h2>
                <ul className="flex flex-col gap-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href={link.href} className="text-sm text-gray-300 hover:text-white transition-colors">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </footer>
    </div>
  );
};

export { Footer };