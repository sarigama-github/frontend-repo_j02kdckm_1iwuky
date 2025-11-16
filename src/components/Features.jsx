import { Sparkles, PhoneCall, Calendar, ShieldCheck, Gauge } from "lucide-react";

const features = [
  {
    icon: PhoneCall,
    title: "Natural voice conversations",
    desc: "Lifelike prosody, interruptions, memory, and emotional nuance for frictionless calls.",
  },
  {
    icon: Calendar,
    title: "Bookings & CRM updates",
    desc: "Qualify leads, book meetings, send reminders, and push data to your tools.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance & security",
    desc: "Call recording ethics, opt-in flows, and data protection baked-in.",
  },
  {
    icon: Gauge,
    title: "Real-time analytics",
    desc: "Dashboards for pickup rates, conversions, A/B tests, and agent performance.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-2 text-sm text-purple-600">
          <Sparkles className="h-4 w-4" />
          Capabilities
        </div>
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
          What your virtual agents can do
        </h2>
        <p className="mt-3 text-gray-600 max-w-2xl">
          We craft domain-specific voice agents that understand your business and deliver measurable outcomes.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-gray-200 p-6 hover:shadow-md transition bg-white">
              <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-purple-500 via-blue-500 to-amber-400 grid place-items-center text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
