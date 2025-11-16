import { ArrowRight, PhoneCall } from 'lucide-react'

export default function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 py-20 text-white">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-white blur-3xl" />
        <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-orange-300 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h3 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to launch your AI agent?
            </h3>
            <p className="mt-3 text-white/90">
              Share your goals and current stack. We’ll map a clear plan, timeline, and outcomes. No fluff.
            </p>
          </div>
          <div className="">
            <form className="grid gap-3 rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur">
              <input placeholder="Name" className="rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm placeholder-white/70 outline-none" />
              <input placeholder="Email" className="rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm placeholder-white/70 outline-none" />
              <textarea placeholder="What are you looking to build?" rows={3} className="rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm placeholder-white/70 outline-none" />
              <button type="button" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow hover:shadow-lg transition">
                <PhoneCall size={16} /> Book a Call <ArrowRight size={16} />
              </button>
              <p className="text-xs text-white/80">Or email eduard@virtualagents.studio</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
