import React from "react";
import {
  BookOpen,
  Users,
  Award,
  Target,
  Heart,
  Sparkles,
  GraduationCap,
  Globe,
} from "lucide-react";

const stats = [
  { label: "Expert Tutors", value: "500+", icon: GraduationCap },
  { label: "Happy Students", value: "15K+", icon: Users },
  { label: "Courses Offered", value: "200+", icon: BookOpen },
  { label: "Countries Reached", value: "50+", icon: Globe },
];

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To make quality education accessible to every student, everywhere. We connect passionate tutors with eager learners to create transformative learning experiences.",
    gradient: "from-violet-500 to-purple-600",
    bg: "from-violet-50 to-purple-50 dark:from-violet-950/30 dark:to-purple-950/30",
  },
  {
    icon: Heart,
    title: "Our Passion",
    description:
      "We believe in the power of personalized learning. Every student is unique, and our platform ensures they get the attention and guidance they deserve.",
    gradient: "from-pink-500 to-rose-600",
    bg: "from-pink-50 to-rose-50 dark:from-pink-950/30 dark:to-rose-950/30",
  },
  {
    icon: Award,
    title: "Our Promise",
    description:
      "Excellence is not just a goal — it's our standard. We carefully vet every tutor to ensure our students receive nothing but the best education.",
    gradient: "from-amber-500 to-orange-600",
    bg: "from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30",
  },
  {
    icon: Sparkles,
    title: "Our Vision",
    description:
      "A world where learning knows no boundaries. We're building the future of education — one lesson, one student, one breakthrough at a time.",
    gradient: "from-blue-500 to-cyan-600",
    bg: "from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30",
  },
];

const team = [
  {
    name: "Sarah Johnson",
    role: "Founder & CEO",
    bio: "Former educator with 15+ years of experience in transforming learning outcomes.",
    avatar: "SJ",
    color: "from-violet-500 to-purple-600",
  },
  {
    name: "Michael Chen",
    role: "Head of Education",
    bio: "PhD in Education Technology. Passionate about making learning personal.",
    avatar: "MC",
    color: "from-pink-500 to-rose-600",
  },
  {
    name: "Emily Rodriguez",
    role: "Lead Designer",
    bio: "Award-winning UX designer focused on creating delightful learning interfaces.",
    avatar: "ER",
    color: "from-blue-500 to-cyan-600",
  },
  {
    name: "David Kim",
    role: "CTO",
    bio: "Tech visionary building the infrastructure for the next generation of EdTech.",
    avatar: "DK",
    color: "from-amber-500 to-orange-600",
  },
];

const AboutUsPage = () => {
  return (
    <div className="relative overflow-hidden">
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50 dark:from-slate-950 dark:via-purple-950 dark:to-blue-950 py-24 px-4">
        {/* Animated blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 dark:bg-purple-700 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-25 animate-blob" />
          <div className="absolute top-40 right-10 w-72 h-72 bg-pink-300 dark:bg-pink-700 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-25 animate-blob animation-delay-2000" />
          <div className="absolute -bottom-10 left-1/3 w-72 h-72 bg-blue-300 dark:bg-blue-700 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-25 animate-blob animation-delay-4000" />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-200 dark:border-purple-800 bg-white/60 dark:bg-white/5 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span className="text-sm font-medium text-purple-700 dark:text-purple-300">
              About Tutor House
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tight">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Empowering Minds,
            </span>
            <br />
            <span className="text-zinc-900 dark:text-white">
              Shaping Futures
            </span>
          </h1>

          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            We&apos;re on a mission to revolutionize education by connecting
            world-class tutors with students who dream big. Welcome to the
            future of learning.
          </p>

          {/* Glowing line */}
          <div className="flex justify-center pt-4">
            <div className="h-1.5 w-48 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full shadow-lg shadow-purple-500/30 animate-pulse" />
          </div>
        </div>
      </section>

      {/* ===== STATS SECTION ===== */}
      <section className="relative py-16 bg-white dark:bg-zinc-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="group relative p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-white dark:from-zinc-800 dark:to-zinc-900 border border-zinc-100 dark:border-zinc-800 hover:border-purple-300 dark:hover:border-purple-700 transition-all duration-300 hover:shadow-xl hover:shadow-purple-100 dark:hover:shadow-purple-900/20 hover:-translate-y-1 text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/25">
                  <stat.icon className="w-6 h-6" />
                </div>
                <p className="text-3xl md:text-4xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== OUR STORY SECTION ===== */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50 dark:from-zinc-900 dark:to-zinc-950 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Side */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/40">
                <BookOpen className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <span className="text-xs font-semibold text-purple-700 dark:text-purple-300 uppercase tracking-wide">
                  Our Story
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white leading-tight">
                It started with a{" "}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  simple idea
                </span>
              </h2>

              <div className="space-y-4 text-zinc-600 dark:text-zinc-400 leading-relaxed">
                <p>
                  Back in 2020, we noticed something broken in education —
                  brilliant students struggling to find the right guidance, and
                  talented tutors unable to reach those who needed them most.
                </p>
                <p>
                  So we built Tutor House — a platform that bridges this gap. We
                  started with just 10 tutors and a dream. Today, we&apos;re a
                  thriving community of educators and learners spanning over 50
                  countries.
                </p>
                <p>
                  Every connection made on our platform is a step toward a world
                  where quality education isn&apos;t a privilege — it&apos;s a
                  right.
                </p>
              </div>
            </div>

            {/* Visual Side — Decorative Card Stack */}
            <div className="relative flex justify-center items-center">
              <div className="relative w-full max-w-sm">
                {/* Background cards */}
                <div className="absolute -top-4 -left-4 w-full h-full rounded-3xl bg-gradient-to-br from-pink-200 to-purple-200 dark:from-pink-900/40 dark:to-purple-900/40 rotate-3" />
                <div className="absolute -top-2 -left-2 w-full h-full rounded-3xl bg-gradient-to-br from-purple-200 to-blue-200 dark:from-purple-900/40 dark:to-blue-900/40 rotate-1" />

                {/* Main card */}
                <div className="relative rounded-3xl bg-gradient-to-br from-violet-600 via-purple-600 to-blue-600 p-8 text-white shadow-2xl shadow-purple-500/30">
                  <div className="space-y-6">
                    <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center">
                      <GraduationCap className="w-7 h-7" />
                    </div>
                    <div>
                      <p className="text-4xl font-black">5+ Years</p>
                      <p className="text-purple-200 mt-1">
                        of transforming education
                      </p>
                    </div>
                    <div className="h-px bg-white/20" />
                    <div className="flex items-center gap-3">
                      <div className="flex -space-x-2">
                        {[
                          "bg-pink-400",
                          "bg-amber-400",
                          "bg-blue-400",
                          "bg-green-400",
                        ].map((color, i) => (
                          <div
                            key={i}
                            className={`w-8 h-8 rounded-full ${color} border-2 border-white/30 flex items-center justify-center text-xs font-bold`}
                          >
                            {String.fromCharCode(65 + i)}
                          </div>
                        ))}
                      </div>
                      <p className="text-sm text-purple-200">
                        15,000+ students trust us
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== VALUES SECTION ===== */}
      <section className="py-20 bg-white dark:bg-zinc-900 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-14 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/40">
              <Heart className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <span className="text-xs font-semibold text-purple-700 dark:text-purple-300 uppercase tracking-wide">
                What Drives Us
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white">
              Our Core{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Values
              </span>
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 max-w-lg mx-auto">
              These principles guide everything we do — from building features
              to connecting tutors with students.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((item) => (
              <div
                key={item.title}
                className={`group relative p-8 rounded-2xl bg-gradient-to-br ${item.bg} border border-zinc-100 dark:border-zinc-800 hover:border-transparent transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 overflow-hidden`}
              >
                {/* Hover glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />

                <div className="relative z-10 flex gap-5">
                  <div
                    className={`shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TEAM SECTION ===== */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-zinc-950 dark:to-zinc-900 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-14 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/40">
              <Users className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <span className="text-xs font-semibold text-purple-700 dark:text-purple-300 uppercase tracking-wide">
                Meet The Team
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white">
              The People Behind{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Tutor House
              </span>
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 max-w-lg mx-auto">
              A dedicated team of educators, designers, and engineers building
              the future of learning.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="group relative p-6 rounded-2xl bg-white dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-800 hover:border-purple-300 dark:hover:border-purple-700 transition-all duration-300 hover:shadow-xl hover:shadow-purple-100 dark:hover:shadow-purple-900/20 hover:-translate-y-2 text-center"
              >
                {/* Avatar */}
                <div
                  className={`mx-auto w-20 h-20 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center text-white text-2xl font-black shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 mb-5`}
                >
                  {member.avatar}
                </div>

                <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                  {member.name}
                </h3>
                <p
                  className={`text-sm font-semibold bg-gradient-to-r ${member.color} bg-clip-text text-transparent mt-1`}
                >
                  {member.role}
                </p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-3 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl bg-gradient-to-br from-violet-600 via-purple-600 to-blue-600 p-10 md:p-16 text-center text-white overflow-hidden shadow-2xl shadow-purple-500/30">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl" />
            <div className="absolute bottom-0 right-0 w-56 h-56 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3 blur-2xl" />

            <div className="relative z-10 space-y-6">
              <h2 className="text-3xl md:text-5xl font-black tracking-tight">
                Ready to Start Your
                <br />
                Learning Journey?
              </h2>
              <p className="text-purple-200 text-lg max-w-xl mx-auto">
                Join thousands of students who are already achieving their goals
                with Tutor House. Your perfect tutor is just a click away.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <a
                  href="/signup"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-white text-purple-700 font-bold text-sm hover:bg-purple-50 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  <GraduationCap className="w-5 h-5" />
                  Get Started Free
                </a>
                <a
                  href="/tutor"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-white/15 text-white font-bold text-sm hover:bg-white/25 backdrop-blur transition-all duration-200 border border-white/20"
                >
                  Browse Tutors
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
