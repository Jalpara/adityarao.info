import { Icon } from "@iconify/react";

const BrandAssets = () => {
  return (
    <main className="min-h-screen w-full text-black pb-20">
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto space-y-20">
          {/* Header */}
          <div className="space-y-6 text-center">
            <h1 className="font-serif text-5xl md:text-7xl leading-tight">
              Brand <span className="text-primary italic">Assets</span>.
            </h1>
            <p className="text-xl opacity-70 font-serif max-w-2xl mx-auto">
              Shared language for the colours, typography, and textures that
              shape my digital footprint.
              <br />
              <span className="text-sm opacity-60">
                Updated for 2025. Version 2.0.
              </span>
            </p>
          </div>

          {/* Palette */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="h-px bg-black/10 flex-1"></div>
              <h2 className="text-3xl font-serif italic">Palette</h2>
              <div className="h-px bg-black/10 flex-1"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Primary */}
              <div className="space-y-4">
                <div className="h-40 rounded-3xl bg-primary shadow-sm flex items-end p-6 justify-between">
                  <span className="text-white font-medium text-lg">
                    Primary
                  </span>
                  <code className="bg-white/60 text-black px-2 py-1 rounded text-sm">
                    #F76F53
                  </code>
                </div>
              </div>

              {/* Ink */}
              <div className="space-y-4">
                <div className="h-40 rounded-3xl bg-black shadow-sm flex items-end p-6 justify-between">
                  <span className="text-white font-medium text-lg">Ink</span>
                  <code className="bg-white/60 text-black px-2 py-1 rounded text-sm">
                    #000000
                  </code>
                </div>
              </div>

              {/* Surface */}
              <div className="space-y-4">
                <div className="h-40 rounded-3xl bg-white border border-black/5 shadow-sm flex items-end p-6 justify-between">
                  <span className="text-black font-medium text-lg">
                    Surface
                  </span>
                  <code className="bg-white/60 text-black px-2 py-1 rounded text-sm">
                    #FFFFFF
                  </code>
                </div>
              </div>

              {/* Subtle */}
              <div className="space-y-4">
                <div className="h-40 rounded-3xl bg-black/5 shadow-sm flex items-end p-6 justify-between">
                  <span className="text-black font-medium text-lg">Subtle</span>
                  <code className="bg-black/5 px-2 py-1 rounded text-sm opacity-60">
                    5% Black
                  </code>
                </div>
              </div>
            </div>
          </div>

          {/* Typography */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="h-px bg-black/10 flex-1"></div>
              <h2 className="text-3xl font-serif italic">Typography</h2>
              <div className="h-px bg-black/10 flex-1"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Serif */}
              <div className="space-y-4">
                <div className="border-b border-black/10 pb-4">
                  <h3 className="text-2xl font-serif">Junicode</h3>
                  <p className="opacity-50 text-sm">Serif · Display</p>
                </div>
                <div className="space-y-2">
                  <p className="text-6xl font-serif">Aa Bb Cc</p>
                  <p className="text-4xl font-serif italic">Italic Style</p>
                  <p className="opacity-70 font-serif leading-relaxed mt-4">
                    Used for headlines, titles, and expressive moments. It
                    brings a classic, grounded feel to the interface.
                  </p>
                </div>
              </div>

              {/* Sans */}
              <div className="space-y-4">
                <div className="border-b border-black/10 pb-4">
                  <h3 className="text-2xl font-sans">DM Sans</h3>
                  <p className="opacity-50 text-sm">Sans-Serif · UI</p>
                </div>
                <div className="space-y-2">
                  <p className="text-6xl font-sans font-medium">Aa Bb Cc</p>
                  <p className="text-4xl font-sans opacity-60">
                    Regular Weight
                  </p>
                  <p className="opacity-70 font-sans leading-relaxed mt-4">
                    Used for body text, UI elements, and data. Clean, legible,
                    and modern.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* UI Components */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="h-px bg-black/10 flex-1"></div>
              <h2 className="text-3xl font-serif italic">UI Components</h2>
              <div className="h-px bg-black/10 flex-1"></div>
            </div>

            <div className="bg-black/5 p-12 rounded-3xl flex flex-col md:flex-row gap-12 items-center justify-center">
              <button className="bg-[#2e2e2e] text-white/90 px-6 py-3 rounded-xl text-lg hover:bg-black/10 hover:text-black/90 hover:border-black/10 border transition flex items-center gap-2">
                <Icon icon="fa-solid:mouse-pointer" className="text-2xl" />
                Primary Button
              </button>

              <button className="bg-black/10 text-black px-6 py-3 rounded-xl text-lg hover:bg-[#2e2e2e] hover:text-white/90 transition flex items-center gap-2">
                <Icon icon="fa7-solid:hand-pointer" className="text-2xl" />
                Secondary Button
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BrandAssets;
