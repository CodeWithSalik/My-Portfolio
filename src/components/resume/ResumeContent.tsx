'use client';

import React from 'react';
import { Printer, Download } from 'lucide-react';
import Button from '@/components/ui/Button';
import Section from '@/components/ui/Section';
import FadeIn from '@/components/ui/FadeIn';

export default function ResumeContent() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="pt-32 pb-16 print:pt-0 print:pb-0">
      <Section className="print:max-w-none print:px-0">
        <FadeIn className="print:hidden flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-text-primary">Resume</h1>
            <p className="text-text-secondary mt-2">ATS-conscious, verifiable engineering resume.</p>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-sm text-text-muted hidden md:flex items-center gap-2">
              <Download className="w-4 h-4" /> Save as PDF from browser print dialog
            </p>
            <Button onClick={handlePrint} className="flex items-center gap-2">
              <Printer className="w-4 h-4" /> Print Resume
            </Button>
          </div>
        </FadeIn>

        <div className="print:block bg-surface print:bg-white rounded-2xl border border-border-subtle print:border-none p-8 md:p-12 shadow-sm print:shadow-none max-w-4xl mx-auto text-text-primary print:text-black">
          
          {/* Header */}
          <div className="border-b border-border-subtle print:border-gray-300 pb-8 mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-text-primary print:text-black mb-1">
                Salik Pirzada
              </h1>
              <p className="text-base md:text-lg text-indigo-600 dark:text-indigo-400 print:text-gray-800 font-semibold">
                Computer Science Student · Full-Stack Builder · Product Thinker
              </p>
              <p className="text-xs font-mono text-text-muted print:text-gray-600 mt-1">
                Brand: CodeWithSalik · Srinagar, Jammu & Kashmir, India
              </p>
            </div>
            <div className="text-xs md:text-sm font-mono text-text-secondary print:text-gray-700 space-y-1 text-left sm:text-right shrink-0">
              <p>pirzadasalik543@gmail.com</p>
              <p>github.com/CodeWithSalik</p>
              <p>instagram.com/codewithsalik</p>
            </div>
          </div>

          <div className="space-y-8 text-sm leading-relaxed">
            
            {/* Professional Summary */}
            <section>
              <h2 className="text-xs font-mono uppercase tracking-widest text-text-muted print:text-gray-600 font-bold mb-3 border-b border-border-subtle print:border-gray-300 pb-1.5">
                Professional Summary
              </h2>
              <p className="text-text-secondary print:text-gray-800 leading-relaxed">
                Computer Science undergraduate student and full-stack builder with hands-on experience designing and deploying production software systems. Creator of KashmirStag, a production B2C e-commerce platform featuring atomic two-phase inventory reservations, timing-safe payment verification, and an audited admin suite. Strong focus on systems thinking, data integrity, defensive security, and shipping software that works in real-world conditions.
              </p>
            </section>

            {/* Education */}
            <section>
              <h2 className="text-xs font-mono uppercase tracking-widest text-text-muted print:text-gray-600 font-bold mb-3 border-b border-border-subtle print:border-gray-300 pb-1.5">
                Education
              </h2>
              <div className="space-y-4">
                <div>
                  <div className="flex flex-col sm:flex-row justify-between sm:items-baseline">
                    <h3 className="font-bold text-text-primary print:text-black text-sm md:text-base">
                      B.Tech in Computer Science & Engineering
                    </h3>
                    <span className="text-xs font-mono text-text-muted print:text-gray-600">2025 – Present (1st Semester)</span>
                  </div>
                  <p className="text-text-secondary print:text-gray-700">Lovely Professional University (LPU)</p>
                </div>
                
                <div>
                  <div className="flex flex-col sm:flex-row justify-between sm:items-baseline">
                    <h3 className="font-bold text-text-primary print:text-black text-sm md:text-base">
                      Class XII (Higher Secondary) — Distinction
                    </h3>
                    <span className="text-xs font-mono text-indigo-600 dark:text-indigo-400 print:text-black font-semibold">439 / 500 (87.8%)</span>
                  </div>
                  <p className="text-text-secondary print:text-gray-700">JKBOSE · Focus on Physics, Chemistry, Mathematics & IT</p>
                </div>
                
                <div>
                  <div className="flex flex-col sm:flex-row justify-between sm:items-baseline">
                    <h3 className="font-bold text-text-primary print:text-black text-sm md:text-base">
                      Class X (Matriculation) — Distinction
                    </h3>
                    <span className="text-xs font-mono text-indigo-600 dark:text-indigo-400 print:text-black font-semibold">442 / 500 (88.4%)</span>
                  </div>
                  <p className="text-text-secondary print:text-gray-700">Student of the Year — 2023 (Academic Recognition)</p>
                </div>
              </div>
            </section>

            {/* Featured Projects */}
            <section>
              <h2 className="text-xs font-mono uppercase tracking-widest text-text-muted print:text-gray-600 font-bold mb-3 border-b border-border-subtle print:border-gray-300 pb-1.5">
                Key Engineering Projects
              </h2>
              
              <div className="space-y-6">
                {/* KashmirStag */}
                <div className="space-y-2">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-baseline">
                    <h3 className="font-bold text-text-primary print:text-black text-sm md:text-base">
                      KashmirStag — Full-Stack B2C E-Commerce Marketplace
                    </h3>
                    <span className="text-xs font-mono text-text-muted print:text-gray-600">Next.js 15, TypeScript, MongoDB, Razorpay</span>
                  </div>
                  <p className="text-xs font-mono text-text-muted print:text-gray-600">
                    Live: kashmir-stag.vercel.app · GitHub: CodeWithSalik
                  </p>
                  <ul className="list-disc list-outside ml-4 text-xs md:text-sm text-text-secondary print:text-gray-800 space-y-1">
                    <li>Architected and shipped a production commerce platform with 19 normalized Mongoose schemas and 14 domain services.</li>
                    <li>Designed an atomic two-phase inventory reservation engine (<code>availableQty = onHand - reservedQty</code>) preventing concurrent overselling.</li>
                    <li>Engineered secure payment verification using <code>crypto.timingSafeEqual</code> and idempotent webhook handling.</li>
                    <li>Built an audited back-office operations dashboard verified through an automated 28-step end-to-end regression suite.</li>
                    <li>Attained clean Lighthouse metrics: 100 SEO, 100 Accessibility, 100 Best Practices, and 0.4s FCP.</li>
                  </ul>
                </div>

                {/* Fragments of Me */}
                <div className="space-y-2">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-baseline">
                    <h3 className="font-bold text-text-primary print:text-black text-sm md:text-base">
                      Fragments of Me — Emotion-First Literary & Journaling Platform
                    </h3>
                    <span className="text-xs font-mono text-text-muted print:text-gray-600">Next.js 16, React 19, Firebase Firestore, Express</span>
                  </div>
                  <p className="text-xs font-mono text-text-muted print:text-gray-600">
                    Live: fragmants-of-me.vercel.app
                  </p>
                  <ul className="list-disc list-outside ml-4 text-xs md:text-sm text-text-secondary print:text-gray-800 space-y-1">
                    <li>Developed an emotion-first reading sanctuary with dynamic ambient audio soundscapes and line-by-line emoji reactions.</li>
                    <li>Designed Firestore subcollections to scale line reactions and threaded commentary (&quot;Echoes&quot;) without document threshold limits.</li>
                    <li>Built a dedicated Node.js/Express microservice for transactional email verification and broadcast newsletters.</li>
                    <li>Created an author peer-application system with editorial review and administrative moderation tools.</li>
                  </ul>
                </div>

                {/* Azad Associates */}
                <div className="space-y-2">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-baseline">
                    <h3 className="font-bold text-text-primary print:text-black text-sm md:text-base">
                      Azad Associates Solar — Commercial Platform & Solar Estimator
                    </h3>
                    <span className="text-xs font-mono text-text-muted print:text-gray-600">HTML5, CSS3, JavaScript, Express 5, Nodemailer</span>
                  </div>
                  <ul className="list-disc list-outside ml-4 text-xs md:text-sm text-text-secondary print:text-gray-800 space-y-1">
                    <li>Developed commercial web presence for an authorized KPDCL rooftop solar provider under PM Surya Ghar Muft Bijli Yojana.</li>
                    <li>Implemented an interactive solar savings calculator computing monthly generation, tariff savings, and payback period.</li>
                    <li>Engineered an Express 5 lead dispatch service on Render sending dual automated notifications to owners and clients.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Technical Skills */}
            <section>
              <h2 className="text-xs font-mono uppercase tracking-widest text-text-muted print:text-gray-600 font-bold mb-3 border-b border-border-subtle print:border-gray-300 pb-1.5">
                Technical Skills
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs md:text-sm">
                <div>
                  <h3 className="font-semibold text-text-primary print:text-black mb-1">Languages</h3>
                  <p className="text-text-secondary print:text-gray-800">Python, TypeScript, JavaScript, Kotlin, HTML5, CSS3</p>
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary print:text-black mb-1">Frontend & Mobile</h3>
                  <p className="text-text-secondary print:text-gray-800">React, Next.js (App & Pages Router), Tailwind CSS, React Native, Expo, Jetpack Compose</p>
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary print:text-black mb-1">Backend & Database</h3>
                  <p className="text-text-secondary print:text-gray-800">Node.js, Express, REST APIs, MongoDB, Mongoose, MongoDB Atlas, Firebase Firestore</p>
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary print:text-black mb-1">Systems & Engineering</h3>
                  <p className="text-text-secondary print:text-gray-800">Atomic Operations, Concurrency Protection, Payment Verification (Razorpay), Webhook Idempotency, RBAC, IDOR Defense, Rate Limiting</p>
                </div>
              </div>
            </section>

            {/* Achievements & Certifications */}
            <section>
              <h2 className="text-xs font-mono uppercase tracking-widest text-text-muted print:text-gray-600 font-bold mb-3 border-b border-border-subtle print:border-gray-300 pb-1.5">
                Verified Achievements & Recognitions
              </h2>
              <ul className="list-disc list-outside ml-4 text-xs md:text-sm text-text-secondary print:text-gray-800 space-y-1.5">
                <li>
                  <strong className="text-text-primary print:text-black font-semibold">Student of the Year (2023)</strong> — Matriculation. Awarded for academic excellence and overall institutional performance.
                </li>
                <li>
                  <strong className="text-text-primary print:text-black font-semibold">Certified Game Developer (2022)</strong> — WhiteHat Jr / BYJU&apos;S FutureSchool. Certified for outcomes and applied skills in game development.
                </li>
                <li>
                  <strong className="text-text-primary print:text-black font-semibold">Certificate of Appreciation (2025)</strong> — District Institute of Education & Trainings (DIET), Kupwara. Seminar &quot;Millets for Health & Sustainable Planet&quot; on 16/04/2025.
                </li>
                <li>
                  <strong className="text-text-primary print:text-black font-semibold">Certificate of Participation & Appreciation (2024)</strong> — Khyber Medical Institute. Free holistic medical camp service at GBHSS Laderwan on 30/10/2024.
                </li>
              </ul>
            </section>

          </div>
        </div>
      </Section>
    </div>
  );
}
