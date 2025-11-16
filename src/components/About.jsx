export default function About() {
  return (
    <section id="about" className="relative bg-slate-50 py-20 dark:bg-slate-950/95">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid items-start gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Led by Eduard van Deventer
            </h2>
            <p className="mt-4 text-slate-700 dark:text-slate-300">
              We’re a specialist studio focused on designing, building, and operating AI voice & chat agents that feel human and deliver value. We approach every engagement as product builders: discovery, data, prototyping, and iteration with clear success metrics.
            </p>
            <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-slate-900">
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Domains: SaaS onboarding, appointment setting, support deflection, renewals & retention, lead qualification, payments, verifications, and more.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-900">
            <dl className="grid grid-cols-2 gap-6">
              {[
                ['Avg. CSAT lift', '12-25%'],
                ['Deflection rate', '30-60%'],
                ['Lead conversion', '2-5x'],
                ['Deployment time', '2-6 weeks'],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="text-sm text-slate-500">{k}</dt>
                  <dd className="text-2xl font-semibold text-slate-900 dark:text-white">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
