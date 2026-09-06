import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { SiteHeader } from "@/components/brand/site-header";
import { SiteFooter } from "@/components/brand/site-footer";
import { CoursePassCard } from "@/components/brand/course-pass-card";
import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/ui/container";
import { Cta } from "@/components/ui/cta";
import { CityCard } from "@/components/ui/city-card";
import { courseHubs } from "@/data/courses";
import { cn } from "@/lib/utils";

export const revalidate = 3600;

// UK Cities data
const UK_CITIES = [
  {
    name: "London",
    description: "Vibrant capital with endless opportunities and cultural diversity",
    universities: 22,
    imageUrl:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&h=400&fit=crop",
  },
  {
    name: "Manchester",
    description: "Creative hub known for innovation and world-class research",
    universities: 5,
    imageUrl:
      "https://images.unsplash.com/photo-1603695785203-d87d5b14b47a?w=600&h=400&fit=crop",
  },
  {
    name: "Edinburgh",
    description: "Historic city blending heritage with cutting-edge research",
    universities: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1535050487db-2b1f38f37aa3?w=600&h=400&fit=crop",
  },
  {
    name: "Birmingham",
    description: "Second city with strong engineering and business schools",
    universities: 3,
    imageUrl:
      "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=600&h=400&fit=crop",
  },
];

const UK_HIGHLIGHTS = [
  { stat: "1 year", label: "Master's degrees — a year less than US or Canada" },
  { stat: "2 years", label: "Graduate Route post-study work visa" },
  { stat: "4 of 10", label: "Of the world's top ten universities" },
];

export default async function UKPage() {
  const ukCourses = courseHubs.filter((c) => c.countrySlug === "uk");
  const liveCourses = ukCourses.filter((c) => !c.isStub);
  const comingSoonCourses = ukCourses.filter((c) => c.isStub);

  return (
    <>
      <SiteHeader />

      <main id="main">
        {/* Breadcrumb */}
        <section className="gutter py-6 border-b border-line bg-paper">
          <Container>
            <nav className="flex items-center gap-2 text-sm text-ink-soft">
              <Link href="/" className="hover:text-ink transition-colors">
                Home
              </Link>
              <ChevronRight size={14} aria-hidden="true" />
              <span className="text-ink font-medium">UK</span>
            </nav>
          </Container>
        </section>

        {/* Hero Section */}
        <section className="gutter overflow-hidden pb-10 pt-16">
          <Container>
            <div className="max-w-[640px] mb-12">
              <span className="eyebrow">Study in the UK</span>
              <h1 className="my-[18px] max-w-[15ch] text-[clamp(34px,4.6vw,58px)] font-semibold leading-[1.05]">
                Explore <em className="font-medium italic text-coral">the United Kingdom</em>
              </h1>
              <p className="mb-[30px] max-w-[46ch] text-[17.5px] text-ink-soft">
                The UK offers world-class education with 1-year Master's degrees, a 2-year graduate work visa, and unmatched career opportunities. Explore cities, courses, and universities.
              </p>
              <div className="flex flex-wrap gap-3.5">
                <Cta
                  href="#courses"
                  variant="coral"
                  className="shadow-[0_10px_22px_-10px_rgba(228,57,14,0.55)]"
                >
                  Explore courses
                  <ArrowRight size={15} aria-hidden="true" />
                </Cta>
                <Cta href="/tools/course-finder" variant="outline">
                  Take the quiz
                </Cta>
              </div>
            </div>
          </Container>
        </section>

        {/* Why UK Stats */}
        <section className="gutter py-16">
          <Container>
            <Reveal className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
              {UK_HIGHLIGHTS.map((item) => (
                <div key={item.stat} className="bg-paper p-6">
                  <p className="font-display text-[28px] font-semibold text-ink">
                    {item.stat}
                  </p>
                  <p className="mt-1.5 text-body text-ink-soft">{item.label}</p>
                </div>
              ))}
            </Reveal>
          </Container>
        </section>

        {/* UK Cities Section */}
        <section className="gutter py-[70px] bg-paper-dim">
          <Container>
            <Reveal group className="mb-10">
              <span className="eyebrow">Study destinations</span>
              <h2 className="mt-2.5 max-w-[20ch] text-[clamp(26px,3vw,36px)] font-semibold">
                Major UK cities
              </h2>
            </Reveal>

            <Reveal group step={50} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {UK_CITIES.map((city) => (
                <CityCard
                  key={city.name}
                  name={city.name}
                  description={city.description}
                  universities={city.universities}
                  imageUrl={city.imageUrl}
                />
              ))}
            </Reveal>
          </Container>
        </section>

        {/* Courses Section */}
        <section
          id="courses"
          className="bg-ink gutter py-[70px] text-paper [--perf-bg:var(--ink)]"
        >
          <Container>
            <Reveal group className="mb-10">
              <span className="eyebrow !text-gold before:!bg-gold">
                Browse by course
              </span>
              <h2 className="mt-2.5 max-w-[20ch] text-[clamp(26px,3vw,36px)] font-semibold text-white">
                All UK courses
              </h2>
              <p className="mt-3 max-w-[50ch] text-lede text-paper/60">
                {liveCourses.length} courses live with full university rankings, fees, and career outcomes. {comingSoonCourses.length} more research guides coming soon.
              </p>
            </Reveal>

            {/* Live Courses */}
            {liveCourses.length > 0 && (
              <div className="mb-8">
                <Reveal className="mb-4">
                  <h3 className="text-lg font-semibold text-gold uppercase tracking-widest">
                    Live Guides
                  </h3>
                </Reveal>
                <Reveal group step={55} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {liveCourses.map((hub) => (
                    <CoursePassCard
                      key={hub.slug}
                      code={hub.icon ? "" : ""}
                      name={hub.name}
                      description={hub.oneLiner}
                      universityCount={hub.universities?.length ?? 0}
                      isStub={false}
                      href={`/uk/courses/${hub.slug}`}
                    />
                  ))}
                </Reveal>
              </div>
            )}

            {/* Coming Soon Courses */}
            {comingSoonCourses.length > 0 && (
              <div>
                <Reveal className="mb-4">
                  <h3 className="text-lg font-semibold text-paper/60 uppercase tracking-widest">
                    Research Guides
                  </h3>
                </Reveal>
                <Reveal group step={55} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {comingSoonCourses.map((hub) => (
                    <CoursePassCard
                      key={hub.slug}
                      code={hub.icon ? "" : ""}
                      name={hub.name}
                      description={hub.oneLiner}
                      universityCount={0}
                      isStub={true}
                      href={`/uk/courses/${hub.slug}`}
                    />
                  ))}
                </Reveal>
              </div>
            )}
          </Container>
        </section>

        {/* CTA Section */}
        <section className="gutter pb-[90px] pt-5">
          <Container>
            <Reveal className="relative overflow-hidden rounded-3xl bg-ink px-8 py-14 text-center">
              <span className="eyebrow justify-center !text-gold before:!bg-gold">
                Ready to start?
              </span>
              <h2 className="mx-auto mb-4 mt-3 max-w-[16ch] text-[clamp(28px,3.6vw,42px)] font-semibold text-white">
                Let's find your course
              </h2>
              <p className="mx-auto mb-8 max-w-[42ch] text-lede text-paper/60">
                Book a free consultation. We'll help you shortlist the right programmes and guide you through every step, from applications to visa.
              </p>
              <div className="flex flex-wrap justify-center gap-3.5">
                <Cta
                  href="/contact"
                  variant="onDark"
                  className="hover:bg-gold hover:text-white"
                >
                  Book free consultation
                  <ArrowRight size={15} aria-hidden="true" />
                </Cta>
                <Cta
                  href="/tools/course-finder"
                  variant="outline"
                  className="border-white/35 text-white hover:bg-white/10 hover:text-white"
                >
                  Try course finder
                </Cta>
              </div>
            </Reveal>
          </Container>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
