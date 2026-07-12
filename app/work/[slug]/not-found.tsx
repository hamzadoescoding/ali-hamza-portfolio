import Link from "next/link";
import { Home } from "lucide-react";
import CloudBackground from "@/components/CloudBackground";

export default function ProjectNotFound() {
  return (
    <div className="min-h-screen bg-brand-charcoal text-brand-white flex flex-col items-center justify-center p-6 text-center">
      <CloudBackground />
      <h1 className="text-3xl font-black uppercase mb-4 tracking-wider">Project Not Found</h1>
      <p className="text-brand-med-gray max-w-md mb-8">
        The project work case-study you are looking for does not exist or has been relocated.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 bg-brand-bg text-brand-black rounded-full font-bold uppercase text-xs tracking-wider"
      >
        <Home size={14} />
        <span>Return Home</span>
      </Link>
    </div>
  );
}
