import { Menu, Phone, MessageSquare } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-white/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-purple-500 via-pink-500 to-amber-400" />
            <div className="flex flex-col leading-tight">
              <span className="text-sm text-gray-500">Virtual Agent Agency</span>
              <span className="font-semibold text-gray-900">Eduard van Deventer</span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#features" className="text-gray-700 hover:text-gray-900">Features</a>
            <a href="#about" className="text-gray-700 hover:text-gray-900">About</a>
            <a href="#contact" className="text-gray-700 hover:text-gray-900">Contact</a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-gray-900 text-white px-4 py-2 hover:bg-gray-800 transition">
              <Phone className="h-4 w-4" /> Book a demo
            </a>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100">
            <Menu className="h-6 w-6" />
          </button>
        </div>
        {open && (
          <div className="md:hidden py-4 space-y-2">
            <a href="#features" className="block px-2 py-2 rounded hover:bg-gray-100">Features</a>
            <a href="#about" className="block px-2 py-2 rounded hover:bg-gray-100">About</a>
            <a href="#contact" className="block px-2 py-2 rounded hover:bg-gray-100">Contact</a>
            <a href="#contact" className="mt-2 inline-flex items-center gap-2 rounded-full bg-gray-900 text-white px-4 py-2">
              <MessageSquare className="h-4 w-4" /> Book a demo
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
