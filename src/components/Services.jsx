import { CheckCircle2, Phone, Headset, MessageSquare, LineChart, Zap, Shield, Mic2 } from 'lucide-react'

const services = [
  {
    icon: Phone,
    title: 'Inbound Voice Agents',
    desc: 'Answer calls 24/7 with natural, human-like conversations that resolve issues and route intelligently.',
  },
  {
    icon: Headset,
    title: 'Outbound Sales Agents',
    desc: 'Automate outreach, qualify leads, and book meetings using compliant, contextual calling.',
  },
  {
    icon: MessageSquare,
    title: 'Omnichannel Chat',
    desc: 'Deploy chat + SMS agents that understand intent and integrate with your CRM and helpdesk.',
  },
]

const capabilities = [
  'Calendar + CRM integrations',
  'Call recording and analytics',
  'Multi-language support',
  'Custom voice + persona design',
  'Fallback to human escalation',
  'Compliance & guardrails',
]

export default function Services() {
  return (
    <section id="services" className="relative bg-white py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            What we build
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
            Production-ready agents tailored to your workflows, stack, and brand voice.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-white/10 dark:bg-slate-900">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 via-blue-500 to-orange-400 text-white">
                  <Icon size={20} />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid items-start gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-900">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Capabilities</h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {capabilities.map((cap) => (
                <li key={cap} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="text-emerald-500" size={18} /> {cap}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-900">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Stack & Reliability</h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {[
                { icon: LineChart, label: 'Analytics & KPIs' },
                { icon: Zap, label: 'Real-time inference' },
                { icon: Shield, label: 'Security by design' },
                { icon: Mic2, label: 'Studio-quality voices' },
              ].map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <Icon size={18} className="text-blue-600" /> {label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
