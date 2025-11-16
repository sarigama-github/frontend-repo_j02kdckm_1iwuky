import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -inset-[20%] bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.25),rgba(59,130,246,0.2),rgba(251,146,60,0.15)_70%,transparent_80%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-24 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/70 px-3 py-1 text-xs text-gray-600 mb-4">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-amber-400 animate-pulse" />
            AI Voice Agent Agency
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900">
            Virtual Agents that speak, listen, and sell for you
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-xl">
            We build and deploy human-sounding voice agents that handle inbound and outbound calls, qualify leads, book appointments, and close deals — 24/7.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-gray-900 text-white px-6 py-3 text-sm font-medium shadow hover:bg-gray-800">
              Book a demo
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-900 hover:bg-gray-50">
              See capabilities
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 text-sm text-gray-600">
            <div className="flex -space-x-2">
              <img src="https://i.pravatar.cc/40?img=1" alt="client" className="h-8 w-8 rounded-full ring-2 ring-white" />
              <img src="https://i.pravatar.cc/40?img=2" alt="client" className="h-8 w-8 rounded-full ring-2 ring-white" />
              <img src="https://i.pravatar.cc/40?img=3" alt="client" className="h-8 w-8 rounded-full ring-2 ring-white" />
            </div>
            <span>Trusted by modern service businesses</span>
          </div>
        </div>

        <div className="relative h-[420px] sm:h-[520px] lg:h-[620px]">
          <div className="absolute -inset-6 rounded-3xl bg-white/60 backdrop-blur shadow-lg border border-white/50" />
          <div className="relative h-full w-full overflow-hidden rounded-3xl">
            <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" />
          </div>
        </div>
      </div>
    </section>
  );
}
