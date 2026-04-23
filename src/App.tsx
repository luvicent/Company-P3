import { motion } from "motion/react";
import { 
  Terminal, 
  Bolt, 
  Shield, 
  Search, 
  Settings, 
  CheckCircle2, 
  Play, 
  Star, 
  Check, 
  Plus, 
  ChevronDown,
  Share2,
  Globe,
  ArrowRight
} from "lucide-react";
import { useState } from "react";

const Navbar = () => (
  <header className="fixed top-0 w-full z-50 border-b border-slate-200/20 bg-white/70 backdrop-blur-md shadow-sm">
    <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
      <div className="flex items-center gap-2">
        <Terminal className="w-6 h-6 text-secondary" />
        <span className="text-xl font-bold text-slate-900 tracking-tight">P3 WAAS</span>
      </div>
      <nav className="hidden md:flex gap-8 items-center">
        <a className="text-slate-600 hover:text-secondary font-medium transition-colors" href="#benefits">Benefits</a>
        <a className="text-slate-600 hover:text-secondary font-medium transition-colors" href="#mechanism">Mechanism</a>
        <a className="text-slate-600 hover:text-secondary font-medium transition-colors" href="#pricing">Pricing</a>
      </nav>
      <button className="bg-primary px-6 py-2 rounded-lg text-white font-semibold hover:opacity-90 transition-all active:scale-95">
        Get Started
      </button>
    </div>
  </header>
);

const Hero = () => (
  <section className="relative px-6 pt-32 pb-20 md:pt-48 md:pb-32 flex flex-col items-center text-center max-w-7xl mx-auto overflow-hidden">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="inline-flex items-center gap-2 px-4 py-1.5 bg-secondary/10 rounded-full mb-8"
    >
      <span className="font-sans font-semibold text-secondary uppercase tracking-[0.2em] text-[10px]">Version 3.0 Live</span>
    </motion.div>
    
    <motion.h1 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="text-5xl md:text-7xl font-extrabold text-primary mb-8 max-w-4xl leading-[1.1] tracking-tight"
    >
      High-Performance Websites <br />
      <span className="text-secondary italic">As A Service</span>.
    </motion.h1>
    
    <motion.p 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="text-lg md:text-xl text-on-surface-variant mb-12 max-w-2xl leading-relaxed"
    >
      Stop managing infrastructure. Start scaling your business. We build, host, and maintain your enterprise-grade web presence for a flat monthly fee.
    </motion.p>

    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3 }}
      className="w-full max-w-5xl aspect-video rounded-3xl overflow-hidden shadow-2xl relative group mb-16 border border-white/20 bg-slate-200"
    >
      <img 
        alt="Clean dashboard analytics and code editor" 
        className="w-full h-full object-cover" 
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9fIXSSFVH4Hh50BtYCtHXXpEfCxlWtAxs5kdr_wdoU5nTzxYlH5AnpKYrnnRcgLsglUmUi4h3qO5mivVzI44oj3M6fYlBHLRGIMLg0EnISSc4TAuDl75SMtbu6vVvjHqgioLypSeT5X-3isQIB9R2ig8yBAgdkTtuWgllguk5iu3JKfHJ8ty6RbbAO3mTkJWpwZY6XQW1rY5vOWI4WCVFh1R9YN0B46VSGc7qUSKKdrw5HqAVQkQc_IwEOEdfIbCYqwJjm9ym8i9x"
      />
      <div className="absolute inset-0 bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-all cursor-pointer">
        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
          <Play className="w-8 h-8 text-secondary fill-secondary" />
        </div>
      </div>
    </motion.div>

    <div className="flex flex-col items-center">
      <p className="font-sans font-semibold text-on-surface-variant/60 mb-8 uppercase tracking-[0.2em] text-[11px]">
        No setup fees. No hidden costs. Pure performance.
      </p>
      <button className="bg-secondary text-white font-sans font-bold text-xl px-12 py-5 rounded-2xl shadow-violet-glow hover:scale-105 transition-transform active:scale-95">
        Get Started Now
      </button>
    </div>
  </section>
);

const Benefits = () => (
  <section className="bg-surface-container px-6 py-24" id="benefits">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Engineered for Excellence</h2>
        <p className="text-on-surface-variant max-w-xl mx-auto">The pillars of a P3-powered digital ecosystem, designed for ultimate scale and speed.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { icon: Bolt, title: "Ultra Speed", desc: "99+ PageSpeed scores out of the box. Zero bloat, pure optimization." },
          { icon: Shield, title: "Fortress Security", desc: "Military-grade encryption and daily backups. We sleep so you don't have to." },
          { icon: Search, title: "SEO Dominance", desc: "Semantic HTML and automated schema markup for top search rankings." },
          { icon: Settings, title: "Zero Maintenance", desc: "Infinite updates. We handle the tech stack while you handle the sales." }
        ].map((benefit, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -8 }}
            className="glass-card p-8 rounded-3xl transition-all shadow-diffused"
          >
            <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center mb-8 text-secondary">
              <benefit.icon className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
            <p className="text-on-surface-variant leading-relaxed text-sm">{benefit.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const BigIdea = () => (
  <section className="px-6 py-32 bg-primary text-white overflow-hidden relative">
    <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] -mr-48 -mt-48"></div>
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] -ml-48 -mb-48"></div>
    
    <div className="max-w-4xl mx-auto text-center relative z-10">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold mb-12 leading-tight tracking-tight"
      >
        Your website is not an expense—it's your <span className="text-secondary italic">24/7 top-performing salesperson</span>.
      </motion.h2>
      <div className="w-24 h-1 bg-secondary mx-auto mb-12"></div>
      <p className="text-lg md:text-xl text-primary-fixed-dim leading-relaxed font-body">
        Most businesses treat their website like a brochure. We treat it like an investment engine. By shifting from one-time builds to a continuous service model, you ensure your digital storefront never becomes obsolete. P3 WAAS keeps you at the cutting edge of tech, every single day.
      </p>
    </div>
  </section>
);

const Expertise = () => (
  <section className="px-6 py-24 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
    <div className="relative">
      <div className="absolute -inset-4 bg-secondary/10 blur-3xl rounded-full"></div>
      <img 
        alt="Two professionals looking at a sleek laptop screen" 
        className="rounded-[2.5rem] shadow-2xl relative z-10 w-full" 
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5k0ksZQweUBwKDCgLdvBWZX7FB4ByOSUfbm7OcufLqD6czVLMJ-dQIv2-HaF9mQeAkJYCQemqAdiwytA3fxGqPCZBmRm7GYQw04zGb-S4bAw0mM6V1Wusi03wUnDqI-HmPqrAQCMiKi1Xas5iJgSApiU4nI8u-8P3iKQMwvYUS7PUEZ1rSMt-a3lH7igfOBriQUOiAIQxBimCi89fGH55NScVKUs0oufMR-5DAYVG6TGoMAtBVL9b09ENmwdkIf9jciUgtwTCZNUu"
      />
    </div>
    <div className="space-y-8">
      <span className="font-sans font-bold text-secondary tracking-[0.2em] text-xs uppercase">Elite Expertise</span>
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Why P3?</h2>
      <p className="text-lg text-on-surface-variant leading-relaxed">
        We aren't a generic agency. We are a specialized technical collective that bridges the gap between high-level design and hardcore performance engineering.
      </p>
      <ul className="space-y-6">
        {[
          "Proprietary Next-Gen Framework",
          "Dedicated Success Managers",
          "Performance-First DNA"
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-4">
            <div className="mt-1 w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-4 h-4 text-secondary" />
            </div>
            <span className="font-semibold text-primary">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

const Mechanism = () => (
  <section className="bg-surface-container-low px-6 py-24" id="mechanism">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 tracking-tight">Guaranteed Approval Process</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
        {[
          { step: "01", title: "Development", desc: "Our engineers build your custom high-performance architecture based on your initial specs." },
          { step: "02", title: "Staging", desc: "Review your site in a private environment. Test all features, forms, and speeds before anyone else sees it." },
          { step: "03", title: "Revisions", desc: "We fine-tune the details based on your feedback until it meets our rigorous 'Guaranteed Approval' standards." },
          { step: "04", title: "Go Live", desc: "Final launch with full DNS management, 24/7 monitoring, and performance optimization enabled." }
        ].map((step, i) => (
          <div key={i} className="flex flex-col items-center text-center group">
            <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center mb-8 border-4 border-surface group-hover:border-secondary transition-colors font-sans font-bold text-secondary text-xl">
              {step.step}
            </div>
            <h3 className="text-xl font-bold mb-4">{step.title}</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Transparency = () => (
  <section className="px-6 py-24 max-w-4xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-16 tracking-tight">Total Transparency</h2>
    <div className="space-y-6">
      {[
        { q: "Is it expensive?", a: "Actually, it's cheaper. A traditional custom site costs $15k+ upfront. We offer that same quality with $0 down and a manageable monthly fee that includes all hosting and updates." },
        { q: "How long does it take?", a: "We typically deliver the first production-ready version within 14 business days of your request being finalized." },
        { q: "Do I own the site?", a: "As a service provider, we host and maintain it. If you ever want to leave, you can buy out your site's code at a prorated discount based on your subscription length." }
      ].map((item, i) => (
        <div key={i} className="p-8 bg-white rounded-3xl shadow-diffused border border-outline-variant hover:border-secondary transition-colors">
          <h4 className="font-bold text-lg mb-4 text-primary">"{item.q}"</h4>
          <p className="text-on-surface-variant leading-relaxed font-body">{item.a}</p>
        </div>
      ))}
    </div>
  </section>
);

const Testimonials = () => (
  <section className="bg-primary px-6 py-24 overflow-hidden relative">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-20 tracking-tight">Trusted by High-Growth Teams</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { name: "James R.", role: "CTO, TechFlow", comment: "P3 completely changed how we handle our web presence. No more stressing about updates or broken plugins.", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuD75D65UbkT-hb5Q0jfaz23yz4YLlSNvJbsXOC-Z-XJF7JFPMxm8l77ru36nKCnBj5TW0gR9q8o4jGfTxDHIr5UvmJ6Ykk4mEzgdhBIGtihhCcugWrammymygz7k-IhGl6ZFyniO2KprhgArEsCqyRbSosGYusQRlW85zEl_PGzwgs9uaLHTtfzkompK677g61oRFbCK2NXxOlqocT9abuAcq5wgc2Od8ZTncmvNIJjjGQogbpM7p9NASSGgGHcHxR3NViTFjH441-i" },
          { name: "Sarah L.", role: "Marketing Director, Nova", comment: "The speed is insane. Our conversion rate jumped by 20% just from the performance improvements alone.", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXu2znUh3ceS8MIsNJKA_-0p0hOvJHRjwCSWlJ3hPHnk2b3LY5r3wKPdtQORN7wzWhOSSZM-XGJcUCFFIhoKYWYrkLdkm_Zamjj2dPWHR63ux7Cy1wKBvkDuHcBUSFTn-QJDVmbF2oZ5mDyVJY79_Y1g6OKpmiV6-pSDfpJZgMQkzoHfvvP-RDmHSidDayG48pr7lOOhln9XJzXY2HBgpEuCl4RhPBZ2lnNv0EBca5C9cEaWOXWslxFEUwCxz0GXzjMYmEk9-2wPuMa-" },
          { name: "Marcus T.", role: "Founder, Apex Creative", comment: "Finally, a service that understands enterprise reliability. P3 is basically our outsourced dev team.", avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtTgosEoc3ivKBhsiAqzwLv-BCJqSgSFPu9mPEv8gpUOCG8xwlaurWPin8mwuQ5Ed1p77fxmAJ6652d7V6Vx3e2-DpovNpc5PYuXcTnm_8pyfLjTp1VFgftqugZlEZoSzrrLbmG_iCcjIok57ZJu_QPP4bXXFiHNY89JRZUCURigaP5NWK5zehV2UdqNa4H3zB8unHEoAAm1snOa_p0SpMmNZhv9e1c8KULfPqZzpyDSH7kfW0nK0Wa9el3qv2cvRmzsydYrxV2M3K" }
        ].map((t, i) => (
          <div key={i} className="bg-primary-container p-10 rounded-3xl border border-white/5">
            <div className="flex gap-1 text-secondary mb-6">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-secondary" />)}
            </div>
            <p className="text-white italic mb-10 text-lg leading-relaxed font-body">"{t.comment}"</p>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-secondary/20">
                <img alt={t.name} className="w-full h-full object-cover" src={t.avatar} />
              </div>
              <div>
                <div className="text-white font-bold">{t.name}</div>
                <div className="text-on-primary-container text-xs tracking-wider uppercase">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Pricing = () => (
  <section className="px-6 py-24 bg-surface" id="pricing">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Simple, Scalable Pricing</h2>
        <p className="text-on-surface-variant max-w-xl mx-auto">Choose the plan that fits your growth trajectory. No hidden setup fees.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 items-stretch">
        {/* Starter Plan */}
        <div className="bg-white p-10 rounded-3xl border border-outline-variant hover:border-secondary transition-all flex flex-col shadow-sm">
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-1">Starter Plan</h3>
            <p className="text-secondary text-xs font-bold uppercase tracking-widest">Foundation</p>
          </div>
          <div className="mb-4">
            <span className="text-5xl font-extrabold text-primary">$100</span>
            <span className="text-on-surface-variant text-lg">/mo</span>
          </div>
          <p className="text-sm text-green-600 font-bold mb-6">$85/mo billed annually</p>
          <div className="text-on-surface-variant text-sm mb-8 pb-8 border-b border-slate-100 italic">
            1-5 pages • 1 professional email<br /><strong>14-day trial</strong>
          </div>
          <ul className="space-y-4 mb-10 flex-grow">
            {[
              "Custom responsive site",
              "Premium hosting / SSL / Backups",
              "WAF / CDN Security",
              "AI ChatBot integration",
              "Basic SEO & Pixel tracking",
              "2 updates / month"
            ].map((feature, i) => (
              <li key={i} className="flex items-start gap-3 text-sm">
                <Check className="w-5 h-5 text-secondary shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <button className="w-full py-4 rounded-xl border-2 border-primary font-bold hover:bg-primary hover:text-white transition-all active:scale-95">
            Start Trial
          </button>
        </div>

        {/* Growth Plan */}
        <div className="bg-white p-10 rounded-3xl border-2 border-secondary relative shadow-2xl scale-105 flex flex-col z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary text-white text-[10px] px-6 py-1.5 rounded-full font-bold uppercase tracking-[0.2em] shadow-lg">
            Most Popular
          </div>
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-1">Growth Plan</h3>
            <p className="text-secondary text-xs font-bold uppercase tracking-widest">Structure</p>
          </div>
          <div className="mb-4">
            <span className="text-5xl font-extrabold text-primary">$149</span>
            <span className="text-on-surface-variant text-lg">/mo</span>
          </div>
          <p className="text-sm text-green-600 font-bold mb-6">$127/mo billed annually</p>
          <div className="text-on-surface-variant text-sm mb-8 pb-8 border-b border-secondary/10 italic">
            6-15 pages • 1-3 emails<br /><strong>21-day trial</strong>
          </div>
          <ul className="space-y-4 mb-10 flex-grow">
            <li className="flex items-start gap-3 text-sm font-bold text-secondary">
              <Plus className="w-5 h-5 shrink-0" />
              <span>Everything in Starter plus:</span>
            </li>
            {[
              "E-commerce setup",
              "Adv. SEO + 5 blog posts/mo",
              "HubSpot & Automated reviews",
              "Monthly performance reports",
              "5 updates / month"
            ].map((feature, i) => (
              <li key={i} className="flex items-start gap-3 text-sm">
                <Check className="w-5 h-5 text-secondary shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <button className="w-full py-4 rounded-xl bg-secondary text-white font-bold shadow-violet-glow hover:opacity-90 transition-all active:scale-95">
            Start Trial
          </button>
        </div>

        {/* Enterprise Plan */}
        <div className="bg-white p-10 rounded-3xl border border-outline-variant hover:border-secondary transition-all flex flex-col shadow-sm">
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-1">Enterprise Plan</h3>
            <p className="text-secondary text-xs font-bold uppercase tracking-widest">Automation</p>
          </div>
          <div className="mb-4">
            <span className="text-5xl font-extrabold text-primary">$399</span>
            <span className="text-on-surface-variant text-lg">/mo</span>
          </div>
          <p className="text-sm text-green-600 font-bold mb-6">$339/mo billed annually</p>
          <div className="text-on-surface-variant text-sm mb-8 pb-8 border-b border-slate-100 italic">
            Unlimited pages • 1-5 emails<br />White-label • <strong>30-day trial</strong>
          </div>
          <ul className="space-y-4 mb-10 flex-grow">
            <li className="flex items-start gap-3 text-sm font-bold text-secondary">
              <Plus className="w-5 h-5 shrink-0" />
              <span>Everything in Growth plus:</span>
            </li>
            {[
              "Full E-commerce sync",
              "Marketing Automation & API",
              "AI Sales Agent & AEO",
              "Missed Call Text-back",
              "99.99% SLA & 24/7 Analytics"
            ].map((feature, i) => (
              <li key={i} className="flex items-start gap-3 text-sm">
                <Check className="w-5 h-5 text-secondary shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <button className="w-full py-4 rounded-xl border-2 border-primary font-bold hover:bg-primary hover:text-white transition-all active:scale-95">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  </section>
);

const FinalCTA = () => (
  <section className="px-6 py-24">
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className="max-w-7xl mx-auto bg-primary rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-transparent pointer-events-none"></div>
      <div className="relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">Ready to Upgrade Your <br /> Digital Future?</h2>
        <p className="text-lg md:text-xl text-primary-fixed-dim mb-12 max-w-2xl mx-auto leading-relaxed">
          Join hundreds of businesses who have replaced their slow, outdated websites with high-performance engines.
        </p>
        <button className="bg-secondary px-12 py-6 rounded-2xl font-sans font-bold text-xl shadow-violet-glow hover:scale-105 transition-transform active:scale-95">
          Buy Now & Launch in 14 Days
        </button>
      </div>
    </motion.div>
  </section>
);

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);
  
  return (
    <section className="px-6 py-24 bg-surface-container">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-20 tracking-tight">Common Questions</h2>
        <div className="space-y-4 mb-24">
          {[
            { q: "What if I need a complex feature?", a: "Our Pro and Enterprise plans are built for complexity. From custom booking systems to complex API integrations, our engineers can handle it." },
            { q: "Do you handle domain names?", a: "Yes, we can manage your DNS and domain registration, or point your existing domain to our high-performance servers." },
            { q: "Is there a long-term contract?", a: "No, we operate on a month-to-month basis. You can cancel at any time, though we're confident you'll love the results." }
          ].map((faq, i) => (
            <div 
              key={i} 
              className="bg-white rounded-3xl border border-outline-variant overflow-hidden cursor-pointer shadow-sm group"
              onClick={() => setOpen(open === i ? null : i)}
            >
              <div className="flex justify-between items-center p-8 font-bold text-lg text-primary">
                {faq.q}
                <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`} />
              </div>
              <motion.div 
                initial={false}
                animate={{ height: open === i ? 'auto' : 0, opacity: open === i ? 1 : 0 }}
                className="overflow-hidden"
              >
                <div className="p-8 pt-0 text-on-surface-variant leading-relaxed font-body">
                  {faq.a}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-diffused border-4 border-secondary/10 mb-8 overflow-hidden">
            <CheckCircle2 className="w-12 h-12 text-secondary" />
          </div>
          <h3 className="text-3xl font-bold mb-6 tracking-tight">The P3 Promise</h3>
          <p className="text-lg text-on-surface-variant max-w-xl leading-relaxed font-body">
            We offer a <strong>30-day satisfaction guarantee</strong>. If you're not absolutely thrilled with your new high-performance site, we'll refund your first month, no questions asked.
          </p>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="w-full pt-32 pb-12 bg-primary-container text-white border-t border-white/5">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2 mb-8">
            <Terminal className="w-6 h-6 text-secondary" />
            <span className="text-xl font-bold tracking-tight">P3 WAAS</span>
          </div>
          <p className="text-on-primary-container max-w-sm font-body leading-relaxed">
            Providing high-performance reliability for the next generation of web-based businesses. Built for speed, secured for scale.
          </p>
        </div>
        <div>
          <h5 className="font-sans font-bold text-white uppercase tracking-widest text-xs mb-8">Navigation</h5>
          <ul className="space-y-4">
            {["Benefits", "Mechanism", "Pricing"].map(item => (
              <li key={item}>
                <a className="text-on-primary-container hover:text-secondary transition-colors font-body" href={`#${item.toLowerCase()}`}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className="font-sans font-bold text-white uppercase tracking-widest text-xs mb-8">Legal</h5>
          <ul className="space-y-4">
            {["FAQ", "Terms", "Privacy"].map(item => (
              <li key={item}>
                <a className="text-on-primary-container hover:text-secondary transition-colors font-body" href="#">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
        <span className="text-sm font-body text-on-primary-container">
          © {new Date().getFullYear()} P3 Website as a Service. All rights reserved.
        </span>
        <div className="flex gap-8">
          <button className="text-on-primary-container hover:text-white transition-colors">
            <Share2 className="w-5 h-5" />
          </button>
          <button className="text-on-primary-container hover:text-white transition-colors">
            <Globe className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        <Benefits />
        <BigIdea />
        <Expertise />
        <Mechanism />
        <Transparency />
        <Testimonials />
        <Pricing />
        <FinalCTA />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
