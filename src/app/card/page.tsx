"use client";

import { ArrowLeft, Download, Share2 } from "lucide-react";
import Link from "next/link";
import ProfileCard from "@/components/ui/ProfileCard";

export default function CardPage() {
  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Sai Vivek Reddy - Full Stack Developer",
          text: "Check out Sai Vivek Reddy's developer card!",
          url: window.location.href,
        })
        .catch((error) => console.error("Share failed:", error));
    } else {
      alert("Share not supported on this browser.");
    }
  };

  const handleDownload = () => {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:Sai Vivek Reddy
TITLE:Full Stack Developer
ORG:IIIT Kottayam; IdeaConnect
EMAIL:sai.vivek@example.com
ADR:;;Kerala;India
URL:https://github.com/yourusername
END:VCARD`;

    const blob = new Blob([vCardData], { type: "text/vcard" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "sai-vivek-reddy.vcf";
    link.click();
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white flex flex-col items-center px-4 py-8">
       <div className="self-start p-4">
  <Link
    href="/"
    className="flex items-center gap-2 text-white hover:text-gray-400 transition duration-200 cursor-pointer"
  >
    <ArrowLeft size={20} />
    <span className="text-sm font-medium">Visit Portfolio</span>
  </Link>
</div>


      <ProfileCard />

      <div className="mt-8 flex justify-center space-x-4">
        <button
          onClick={handleDownload}
          className="flex items-center gap-2 text-sm text-white border border-[#444] px-4 py-2 rounded hover:bg-[#2a2a2a] transition"
        >
          <Download size={16} />
          Download
        </button>
        <button
          onClick={handleShare}
          className="flex items-center gap-2 text-sm text-white border border-[#444] px-4 py-2 rounded hover:bg-[#2a2a2a] transition"
        >
          <Share2 size={16} />
          Share
        </button>
      </div>
    </div>
  );
}
