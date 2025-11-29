interface PageHeaderProps {
  badge?: string
  title: string
  description: string
}

export function PageHeader({ badge, title, description }: PageHeaderProps) {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#FF2D55]/20 via-[#FF2D55]/5 to-transparent blur-3xl" />
        <div className="absolute top-20 left-0 w-96 h-96 bg-[#FF2D55]/5 blur-3xl rounded-full" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-[#FF2D92]/5 blur-3xl rounded-full" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 45, 85, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 45, 85, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {badge && (
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#FF2D55]/30 bg-[#FF2D55]/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#FF2D55] animate-pulse" />
            <span className="text-sm text-[#FF2D55] font-medium tracking-wider uppercase">{badge}</span>
          </div>
        )}

        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
            {title}
          </span>
        </h1>

        <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">{description}</p>

        {/* Decorative line */}
        <div className="mt-12 flex items-center justify-center gap-2">
          <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#FF2D55]/50" />
          <div className="w-2 h-2 rounded-full bg-[#FF2D55]" />
          <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#FF2D55]/50" />
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-24 left-4 w-12 h-12 border-l-2 border-t-2 border-[#FF2D55]/30" />
      <div className="absolute top-24 right-4 w-12 h-12 border-r-2 border-t-2 border-[#FF2D55]/30" />
    </section>
  )
}
