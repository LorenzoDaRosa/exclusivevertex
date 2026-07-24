import { useRef, useState } from "react";
import { Reveal } from "@/components/site/Reveal";
import { SectionLabel } from "@/components/site/SectionLabel";
import vertexVideo1 from "@/assets/videos/vertex-video-1.mp4.asset.json";

// ============================================================
// EDITÁVEL — troque vídeos, títulos, descrições e links aqui
// ============================================================

const INSTAGRAM_URL = "https://www.instagram.com/exclusive.vertex/";

const featuredVideo = {
  src: vertexVideo1.url,
  poster: "", // opcional: cole aqui a URL de uma imagem de capa
  title: "Bastidores Exclusive Vertex",
  description:
    "Um recorte do nosso processo — estratégia, design e desenvolvimento premium.",
};

type SecondaryPost = {
  title: string;
  description: string;
  thumbnail: string; // URL da miniatura
  href: string; // link do Instagram
};

const secondaryPosts: SecondaryPost[] = [
  // Preencher em seguida — grade pronta para 3 posts
];

// ============================================================

export function ContentSection() {
  return (
    <section className="px-6 lg:px-10 py-28 lg:py-36 bg-surface">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionLabel>Conteúdos</SectionLabel>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-ink">
            Conteúdos que geram resultados.
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-6 max-w-2xl text-lg text-ink-muted leading-relaxed">
            Compartilhamos estratégias, tendências e insights sobre marketing
            digital, desenvolvimento de sites, branding e vendas para ajudar
            empresas a crescerem no digital.
          </p>
        </Reveal>

        <Reveal delay={220}>
          <div className="mt-16">
            <FeaturedVideoPlayer video={featuredVideo} />
          </div>
        </Reveal>

        <SecondaryGrid posts={secondaryPosts} />

        <Reveal delay={120}>
          <div className="mt-16 flex justify-center">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-brand px-8 py-4 text-sm font-medium text-primary-foreground transition-all duration-300 hover:bg-brand-hover hover:-translate-y-0.5 shadow-premium hover:shadow-premium-hover"
            >
              Ver mais conteúdos
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M7 17L17 7M17 7H8M17 7V16" />
              </svg>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FeaturedVideoPlayer({ video }: { video: typeof featuredVideo }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    const el = videoRef.current;
    if (!el) return;
    el.play();
    setPlaying(true);
  };

  return (
    <div
      className="group relative w-full overflow-hidden bg-surface-2 border hairline"
      style={{
        borderRadius: 20,
        aspectRatio: "16 / 9",
        boxShadow: "0 30px 80px -30px rgba(17,24,39,0.18)",
      }}
    >
      <video
        ref={videoRef}
        src={video.src}
        poster={video.poster || undefined}
        preload="metadata"
        controls={playing}
        playsInline
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
        className="absolute inset-0 h-full w-full object-cover"
      />
      {!playing && (
        <button
          type="button"
          onClick={handlePlay}
          aria-label={`Reproduzir vídeo: ${video.title}`}
          className="absolute inset-0 flex items-center justify-center transition-all duration-500"
          style={{
            background:
              "linear-gradient(180deg, rgba(17,24,39,0.15) 0%, rgba(17,24,39,0.45) 100%)",
          }}
        >
          <span
            className="flex h-20 w-20 items-center justify-center rounded-full bg-surface/95 backdrop-blur-sm transition-transform duration-500 group-hover:scale-110 shadow-premium"
            aria-hidden
          >
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="var(--brand)"
              className="translate-x-[2px]"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
          <div className="absolute bottom-6 left-6 right-6 text-left">
            <p className="text-primary-foreground/90 text-xs uppercase tracking-[0.28em]">
              Vídeo em destaque
            </p>
            <p className="mt-2 font-display text-2xl md:text-3xl text-primary-foreground">
              {video.title}
            </p>
          </div>
        </button>
      )}
    </div>
  );
}

function SecondaryGrid({ posts }: { posts: SecondaryPost[] }) {
  const slots = posts.length > 0 ? posts : [null, null, null];

  return (
    <div className="mt-10 grid gap-6 md:grid-cols-3">
      {slots.map((post, i) => (
        <Reveal key={i} delay={80 * i}>
          {post ? (
            <a
              href={post.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden bg-surface border hairline transition-all duration-500 hover:-translate-y-1 shadow-premium hover:shadow-premium-hover"
              style={{ borderRadius: 20 }}
            >
              <div className="relative w-full overflow-hidden" style={{ aspectRatio: "4 / 5" }}>
                <img
                  src={post.thumbnail}
                  alt={post.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl text-ink leading-tight">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-ink-muted leading-relaxed">
                  {post.description}
                </p>
              </div>
            </a>
          ) : (
            <div
              className="flex aspect-[4/5] items-center justify-center bg-surface-2 border hairline text-xs uppercase tracking-[0.28em] text-ink-subtle"
              style={{ borderRadius: 20 }}
            >
              Em breve
            </div>
          )}
        </Reveal>
      ))}
    </div>
  );
}
