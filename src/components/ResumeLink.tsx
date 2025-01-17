import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const ResumeLink = () => (
    <a
      href="https://lechlak.com/resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-sky-500 transition flex items-center space-x-2"
      title="Download Resume"
    >
      <Download className="h-5 w-5" />
      <span className="sm:inline">Resume</span>
    </a>
  );
  
  export default ResumeLink;
  