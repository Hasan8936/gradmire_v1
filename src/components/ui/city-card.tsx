import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";

interface CityCardProps {
  name: string;
  description: string;
  universities: number;
  imageUrl: string;
  href?: string;
}

export function CityCard({
  name,
  description,
  universities,
  imageUrl,
  href = "#",
}: CityCardProps) {
  const content = (
    <div className="card-premium group relative overflow-hidden transition-all duration-300 hover:shadow-xl">
      {/* Image Container */}
      <div className="relative h-56 w-full overflow-hidden rounded-xl bg-paper-dim">
        <Image
          src={imageUrl}
          alt={`${name} cityscape`}
          fill
          sizes="(min-width: 1024px) 280px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
          priority={false}
          quality={85}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-ink/50 via-transparent to-ink/40 transition-opacity duration-300 group-hover:from-ink/40 group-hover:to-ink/30" />

        {/* Icon badge */}
        <div className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full glass transition-transform duration-300 group-hover:scale-110">
          <MapPin size={20} className="text-coral" />
        </div>
      </div>

      {/* Content Overlay */}
      <div className="relative -mt-12 pb-4 pt-4 transition-all duration-300">
        <div className="rounded-lg bg-white px-4 py-3 transition-all duration-300 group-hover:shadow-md">
          <h3 className="mb-1.5 text-xl font-semibold text-ink transition-colors duration-300 group-hover:text-coral-text">{name}</h3>
          <p className="mb-3 text-sm text-ink-soft transition-colors duration-300 group-hover:text-ink">{description}</p>

          {/* Universities Badge */}
          <div className="inline-flex items-center gap-1 rounded-full bg-coral-dim px-3 py-1.5 transition-all duration-300 group-hover:bg-coral/20">
            <span className="text-xs font-semibold text-coral-text transition-colors duration-300 group-hover:text-coral">
              {universities} Universities
            </span>
          </div>
        </div>
      </div>

      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-xl opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100" />
    </div>
  );

  if (href && href !== "#") {
    return <Link href={href} className="transition-all duration-300">{content}</Link>;
  }

  return content;
}
