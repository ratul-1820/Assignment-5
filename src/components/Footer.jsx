import React from "react";
import logoText from "../assets/logo-text.png";

const footerLinks = [
  {
    title: "Product",
    links: [
      { label: "Home", href: "#home" },
      { label: "Technologies", href: "#technologies" },
      { label: "Projects", href: "#projects" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
      { label: "Careers", href: "#careers" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Terms of Service", href: "#terms" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-white px-6 py-12 text-gray-600 sm:px-8 lg:px-12 border-t border-gray-100">
      <div className="container mx-auto grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-x-7 lg:gap-y-12">
        <div className="sm:col-span-2 lg:col-span-4">
          <img src={logoText} alt="Dev Stack" className="h-8 mb-6 object-contain" />
          <p className="max-w-[550px] text-[17px] leading-[1.45] text-gray-500 sm:text-lg">
            Curated tools, technologies, and resources for developers building modern software.
          </p>
          <div className="flex items-center gap-6 pt-4 text-sm font-semibold text-gray-700">
            <a href="#github" className="hover:text-gray-900 transition">GitHub</a>
            <a href="#twitter" className="hover:text-gray-900 transition">Twitter</a>
            <a href="#linkedin" className="hover:text-gray-900 transition">LinkedIn</a>
          </div>
        </div>

        {footerLinks.map((section) => (
          <div key={section.title} className="lg:col-span-2">
            <h3 className="mb-6 text-xl font-bold leading-tight text-gray-900 uppercase tracking-wider">
              {section.title}
            </h3>
            <ul className="space-y-4">
              {section.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[17px] text-gray-500 leading-snug transition-colors duration-200 hover:text-gray-900 sm:text-lg"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="container mx-auto mt-10 border-t border-gray-100 pt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-center text-sm text-gray-400 sm:text-base">
          © 2026 Dev Stack. All rights reserved.
        </p>
        <div className="flex items-center gap-6 text-sm text-gray-400">
          <a href="#privacy" className="hover:text-gray-600 transition">Privacy</a>
          <a href="#terms" className="hover:text-gray-600 transition">Terms</a>
        </div>
      </div>
    </footer>
  );
}