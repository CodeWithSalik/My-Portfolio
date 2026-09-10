import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import { GitHubIcon } from '@/components/ui/Icons';
import { ArchitectureDiagram } from '@/components/projects/ArchitectureDiagram';
import { PerformanceMetrics } from '@/components/projects/PerformanceMetrics';
import { TestingEvidence } from '@/components/projects/TestingEvidence';

export const metadata: Metadata = {
  title: 'KashmirStag — Production E-Commerce Platform | Salik Pirzada',
  description: 'In-depth engineering case study of KashmirStag: a full-stack B2C e-commerce platform with atomic inventory operations, Razorpay payment verification, and an audited admin operations suite.',
};

export default function KashmirStagPage() {
  const verifiedTech = [
    'Next.js 15 App Router',
    'TypeScript',
    'React 19',
    'MongoDB Atlas',
    'Mongoose 8',
    'Zod Validation',
    'JWT (jose)',
    'bcryptjs',
    'Razorpay SDK',
    'Tailwind CSS',
    'Nodemailer',
    'Vercel Analytics',
  ];

  const adminE2ESteps = [
    'Create product category in admin back-office',
    'Create seasonal or curated collection',
    'Create product with title, description, and base metadata',
    'Assign product to verified category',
    'Assign product to collection',
    'Create product variant (size, colorHex, SKU)',
    'Assign unique inventory SKU',
    'Set initial stock level to 10 units',
    'Admin inventory ledger reflects exact on-hand quantity of 10',
    'Public storefront reflects in-stock status in real time',
    'Execute manual stock adjustment to 7 units via admin interface',
    'Public storefront instantly updates available stock to 7',
    'Rename parent category in admin',
    'Product automatically reflects renamed category association',
    'Remove product from collection',
    'Collection product count aggregates update accordingly',
    'Re-add product back to collection',
    'Collection listing dynamically restores product card',
    'Soft-archive product from active catalog',
    'Storefront catalog hides archived product from search and browsing',
    'Inventory ledger continues accurately tracking physical stock for archived product',
    'Restore product from archive',
    'Storefront restores product availability without SKU duplicates',
    'Place authenticated test order through customer checkout',
    'Two-phase inventory reservation is recorded (availableQty drops accordingly)',
    'Order accurately references immutable product and variant line-item snapshot',
    'Server verification & webhook processing commits inventory reservation',
    'Immutable audit records and inventory transaction ledgers are created',
  ];

  const securityFeatures = [
    { title: 'Role-Based Access Control (RBAC)', desc: 'Granular permissions restricting admin routes and mutations from customer accounts.' },
    { title: 'IDOR Protection', desc: 'Strict ownership validation on customer addresses, order details, and account records.' },
    { title: 'HTTP-Only JWT Cookies', desc: 'Stateless session tokens signed with jose, eliminating XSS token theft vectors.' },
    { title: 'Sliding-Window Rate Limiting', desc: 'Protects authentication, search, and checkout endpoints from abuse and brute-force attacks.' },
    { title: 'Magic-Byte Validation', desc: 'Inspects binary file headers on image uploads to prevent disguised executable uploads.' },
    { title: 'Path Traversal Protection', desc: 'Sanitizes dynamic upload serving paths against relative traversal attacks.' },
    { title: 'Timing-Safe Payment Verification', desc: 'Uses crypto.timingSafeEqual to verify Razorpay HMAC signatures, preventing timing side-channel attacks.' },
    { title: 'Centralized Error Handling', desc: 'AppError class hierarchy preventing raw database error leakage to client responses.' },
  ];

  const models = [
    'User', 'Address', 'Product', 'ProductVariant', 'Category', 
    'Collection', 'InventoryTransaction', 'Cart', 'Order', 'Payment', 
    'Coupon', 'CouponUsage', 'Review', 'AuditLog', 'Notification', 
    'Wishlist', 'Setting', 'Shipment', 'UploadedImage'
  ];

  return (
    <article className="min-h-screen py-24 md:py-32 bg-canvas">
      <div className="max-w-5xl mx-auto px-6 md:px-12 space-y-24">
        
        {/* Navigation & Header */}
        <section className="space-y-6">
          <Link 
            href="/projects" 
            className="inline-flex items-center gap-2 text-sm font-medium text-text-muted hover:text-text-primary transition-colors mb-4"
          >
            <ArrowLeft size={16} /> Back to Projects
          </Link>

          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span className="text-xs font-mono uppercase tracking-widest text-amber-600 dark:text-amber-400 font-semibold">Flagship Production Case Study</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text-primary">
              KashmirStag
            </h1>
            
            <p className="text-xl md:text-2xl text-text-secondary font-medium max-w-3xl leading-relaxed">
              A production B2C e-commerce platform built from the ground up for Kashmiri crafts and local artisans.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2 pt-2">
            {verifiedTech.map(tech => (
              <span key={tech} className="px-3 py-1 text-xs font-mono rounded-full bg-surface border border-border-subtle text-text-secondary">
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a 
              href="https://kashmir-stag.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-text-primary text-canvas font-semibold hover:bg-text-secondary transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Live Marketplace
            </a>
            <a 
              href="https://github.com/CodeWithSalik" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-surface text-text-primary border border-border-subtle hover:bg-surface-elevated transition-colors"
            >
              <GitHubIcon size={18} />
              GitHub
            </a>
          </div>
        </section>

        {/* Overview */}
        <section className="space-y-6 pt-12 border-t border-border-subtle">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-text-primary">1. Overview</h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            KashmirStag connects Kashmiri products, artisans, and local sellers with customers through an online marketplace. The project was engineered as a serious full-stack commerce system rather than a cosmetic frontend demo, addressing complex operational requirements including atomic inventory reservations, payment idempotency, state machine transitions, and historical order resilience.
          </p>
        </section>

        {/* Why I Built It */}
        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-text-primary">2. Why I Built It</h2>
          <div className="bg-surface border border-border-subtle rounded-2xl p-6 md:p-8 space-y-4">
            <p className="text-lg text-text-secondary leading-relaxed">
              I wanted to build a real commerce system to thoroughly understand software architecture where mistakes have tangible consequences:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-text-secondary text-sm">
              <li className="flex items-start gap-2 p-3 bg-canvas rounded-xl border border-border-subtle">
                <span className="text-accent font-bold">01.</span>
                <span>Preventing overselling under high concurrency through atomic operations.</span>
              </li>
              <li className="flex items-start gap-2 p-3 bg-canvas rounded-xl border border-border-subtle">
                <span className="text-accent font-bold">02.</span>
                <span>Handling payment webhooks that retry, arrive out of order, or fail mid-flight.</span>
              </li>
              <li className="flex items-start gap-2 p-3 bg-canvas rounded-xl border border-border-subtle">
                <span className="text-accent font-bold">03.</span>
                <span>Preserving order history integrity when products are modified or archived in the future.</span>
              </li>
              <li className="flex items-start gap-2 p-3 bg-canvas rounded-xl border border-border-subtle">
                <span className="text-accent font-bold">04.</span>
                <span>Designing an operational back-office where catalog changes propagate accurately across the system.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Product Architecture */}
        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-text-primary">3. Product Architecture</h2>
          <p className="text-text-secondary leading-relaxed">
            The application is built on Next.js 15 App Router using React Server Components for the storefront, ensuring minimal client-side JavaScript, immediate Time-to-First-Byte, and zero layout shift.
          </p>
          <ArchitectureDiagram layers={[
            { name: 'Storefront (Next.js 15)', items: ['Server Components', 'React 19', 'Edge Middleware JWT Guard', 'Tailwind CSS'] },
            { name: 'API Layer', items: ['REST Endpoints', 'Zod Input Validation', 'Sliding-Window Rate Limiting', 'HTTP-only Cookies'] },
            { name: 'Service Layer (14 Services)', items: ['Inventory Service', 'Payment Service', 'Order Service', 'Checkout Service', 'Catalog Service'] },
            { name: 'Data Layer', items: ['MongoDB Atlas', 'Mongoose 8', '19 Normalized Models', 'Atomic Transactions'] },
          ]} />
        </section>

        {/* Commerce Architecture & Data Relationships */}
        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-text-primary">4. Commerce Architecture & Relational Flow</h2>
          <div className="bg-surface border border-border-subtle rounded-2xl p-6 md:p-8 space-y-6">
            <p className="text-text-secondary leading-relaxed">
              In KashmirStag, catalog and order relationships are strictly modeled to decouple public discovery from fulfillment:
            </p>

            <div className="p-4 bg-canvas rounded-xl border border-border-subtle font-mono text-xs md:text-sm text-text-secondary overflow-x-auto">
              <div className="flex flex-wrap items-center gap-2 text-text-primary font-semibold">
                <span className="px-2 py-1 rounded bg-surface border border-border-subtle">Category</span>
                <span>→</span>
                <span className="px-2 py-1 rounded bg-surface border border-border-subtle">Collection</span>
                <span>→</span>
                <span className="px-2 py-1 rounded bg-surface border border-border-subtle">Product</span>
                <span>→</span>
                <span className="px-2 py-1 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 font-medium">ProductVariant (Source of Truth)</span>
                <span>→</span>
                <span className="px-2 py-1 rounded bg-surface border border-border-subtle">Inventory</span>
                <span>→</span>
                <span className="px-2 py-1 rounded bg-surface border border-border-subtle">Cart</span>
                <span>→</span>
                <span className="px-2 py-1 rounded bg-surface border border-border-subtle">Checkout</span>
                <span>→</span>
                <span className="px-2 py-1 rounded bg-surface border border-border-subtle">Order</span>
                <span>→</span>
                <span className="px-2 py-1 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-medium">Payment</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-text-secondary">
              <div className="p-4 bg-canvas rounded-xl border border-border-subtle space-y-2">
                <h4 className="font-semibold text-text-primary">ProductVariant is the Source of Truth</h4>
                <p>
                  Products act as catalog containers, while <code>ProductVariant</code> holds actual SKUs, pricing in integer paise, dimensions, and inventory levels.
                </p>
              </div>
              <div className="p-4 bg-canvas rounded-xl border border-border-subtle space-y-2">
                <h4 className="font-semibold text-text-primary">Historical Order Line-Item Snapshots</h4>
                <p>
                  When an order is created, complete title, SKU, variant, and price snapshots are written into the order document so future product edits or deletions never corrupt past order history.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Inventory System */}
        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-text-primary">5. Two-Phase Inventory System</h2>
          <div className="bg-surface border border-border-subtle rounded-2xl p-6 md:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-amber-500/5 border border-amber-500/20">
              <span className="text-sm font-mono text-amber-600 dark:text-amber-400 font-semibold">Core Invariant:</span>
              <code className="text-base font-mono font-bold text-text-primary">availableQty = onHand - reservedQty</code>
            </div>

            <p className="text-text-secondary leading-relaxed">
              To guarantee zero overselling during flash sales or competing checkout sessions, the inventory service implements atomic reservation semantics:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 bg-canvas rounded-xl border border-border-subtle">
                <h4 className="font-semibold text-text-primary text-sm mb-1">Atomic Reservation</h4>
                <p className="text-xs text-text-secondary">Stock is atomically reserved upon checkout initiation using conditional database increments only if <code>availableQty &gt;= requestedQty</code>.</p>
              </div>
              <div className="p-4 bg-canvas rounded-xl border border-border-subtle">
                <h4 className="font-semibold text-text-primary text-sm mb-1">Concurrency Protection</h4>
                <p className="text-xs text-text-secondary">Verified via concurrency regression suites: exactly 1 purchaser succeeds when 10 concurrent requests compete for a single available unit.</p>
              </div>
              <div className="p-4 bg-canvas rounded-xl border border-border-subtle">
                <h4 className="font-semibold text-text-primary text-sm mb-1">Audit Ledger</h4>
                <p className="text-xs text-text-secondary">Every reservation, release, manual adjustment, and purchase commits an immutable <code>InventoryTransaction</code> ledger record.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Payment Architecture */}
        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-text-primary">6. Payment Architecture & Webhook Idempotency</h2>
          <div className="bg-surface border border-border-subtle rounded-2xl p-6 md:p-8 space-y-6">
            <p className="text-text-secondary leading-relaxed">
              Payments are orchestrated through Razorpay with end-to-end server verification and deterministic state machine transitions:
            </p>

            <div className="p-4 bg-canvas rounded-xl border border-border-subtle font-mono text-xs text-text-secondary space-y-2">
              <div className="text-accent font-semibold mb-2">Payment Lifecycle Pipeline:</div>
              <div>1. Customer initiates checkout → Inventory validation & atomic stock reservation</div>
              <div>2. Server creates Razorpay Order with integer paise precision (no float rounding errors)</div>
              <div>3. Customer completes checkout modal in client</div>
              <div>4. Server receives payment payload → verifies HMAC signature via <span className="text-text-primary font-bold">crypto.timingSafeEqual</span></div>
              <div>5. Webhook listener processes asynchronously with idempotency key deduplication</div>
              <div>6. Inventory reservation commits to permanently deducted on-hand stock</div>
              <div>7. Order transitions deterministically to <span className="text-status-green font-bold">CONFIRMED</span> and sends customer receipt email</div>
            </div>
          </div>
        </section>

        {/* Security Architecture */}
        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-text-primary">7. Security Architecture</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {securityFeatures.map(item => (
              <div key={item.title} className="p-5 rounded-xl bg-surface border border-border-subtle space-y-2">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-status-green shrink-0" />
                  <h3 className="text-sm font-semibold text-text-primary">{item.title}</h3>
                </div>
                <p className="text-xs text-text-secondary leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Operational Admin System */}
        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-text-primary">8. Operational Back-Office Admin System</h2>
          <p className="text-text-secondary leading-relaxed">
            The admin system was built as an operational control center rather than a static UI shell. It directly controls:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {[
              'KPI Analytics Dashboard',
              'Product & Variant CRUD',
              'SKU Stock Adjustments',
              'Category Management',
              'Collection Curator',
              'Order Fulfillment Tracking',
              'Customer LTV Metrics',
              'Coupon Engine',
              'Review Moderation',
              'Image Magic-Byte Manager',
              'Immutable Audit Logs',
              'Storefront Settings',
            ].map(item => (
              <div key={item} className="p-3 bg-surface border border-border-subtle rounded-xl text-xs font-mono text-text-secondary flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Data Models */}
        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-text-primary">9. Data Models (19 Mongoose Schemas)</h2>
          <div className="flex flex-wrap gap-2">
            {models.map(model => (
              <span key={model} className="px-3 py-1.5 bg-surface border border-border-subtle rounded-lg text-xs font-mono text-text-secondary">
                {model}
              </span>
            ))}
          </div>
        </section>

        {/* Verified Testing Proof */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-text-primary">10. Verified Testing Evidence</h2>
            <p className="text-sm font-mono text-status-green uppercase tracking-widest">All Verified Regression Suites Passed</p>
          </div>

          <TestingEvidence tests={[
            'TypeScript 0 errors, production build verified',
            '67+ routes audited and verified in production state',
            'Atomic concurrency testing: exactly 1 successful purchase when competing for single stock unit',
            'Two-phase inventory reservation and release lifecycle testing',
            'Order state machine transition integrity tests',
            'Payment idempotency and duplicate webhook suppression tests',
            'Security test suite: sliding-window rate limiter, path traversal, magic-byte validation',
            'Catalog soft-archiving vs hard-deletion rules',
            'Archive → restore without duplicate variant SKU conflicts',
            'Product image reordering and thumbnail selection tests',
          ]} />

          <div className="mt-8 bg-surface border border-border-subtle rounded-2xl p-6 md:p-8 space-y-6">
            <h3 className="text-lg font-bold text-text-primary flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-status-green" />
              Audited 28-Step Admin End-to-End Workflow
            </h3>
            <p className="text-sm text-text-secondary">
              The connected admin regression suite validated this complete lifecycle without manual interventions:
            </p>

            <ol className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs font-mono text-text-secondary">
              {adminE2ESteps.map((step, idx) => (
                <li key={idx} className="flex items-start gap-2.5 p-2.5 bg-canvas rounded-lg border border-border-subtle">
                  <span className="text-accent font-bold shrink-0">{String(idx + 1).padStart(2, '0')}.</span>
                  <span className="leading-snug">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Production Performance */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-text-primary">11. Production Performance</h2>
            <p className="text-xs font-mono uppercase tracking-widest text-text-muted">
              "Performance is part of the product." · Clean Deployed Lighthouse Results
            </p>
          </div>
          <PerformanceMetrics metrics={[
            { label: 'FCP', value: 0.4, suffix: 's', decimals: 1 },
            { label: 'LCP', value: 0.6, suffix: 's', decimals: 1 },
            { label: 'Speed Index', value: 0.4, suffix: 's', decimals: 1 },
            { label: 'CLS', value: 0 },
            { label: 'Accessibility', value: 100 },
            { label: 'Best Practices', value: 100 },
            { label: 'SEO', value: 100 },
          ]} />
        </section>

        {/* Production Deployment */}
        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-text-primary">12. Production Deployment</h2>
          <div className="bg-surface border border-border-subtle rounded-2xl p-6 md:p-8 space-y-4">
            <p className="text-text-secondary leading-relaxed">
              Hosted on the Vercel Edge Network for the Next.js 15 application, with MongoDB Atlas providing multi-region managed database replication. Vercel Edge Middleware executes lightweight cryptographic checks and routing rules before reaching origin nodes, maximizing TTFB and availability.
            </p>
          </div>
        </section>

        {/* Engineering Insights */}
        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-text-primary">13. Engineering Lessons Learned</h2>
          <div className="space-y-4">
            {[
              {
                title: 'Concurrency must be handled at the database engine level',
                desc: 'Application-level state checks cannot prevent race conditions during simultaneous requests. Using atomic conditional updates (e.g. availableQty >= reqQty) is essential for inventory correctness.',
              },
              {
                title: 'External webhooks require mandatory idempotency',
                desc: 'Payment gateways frequently dispatch duplicate webhook notifications or deliver events out of order. Verifying signatures with timingSafeEqual and deduplicating via transaction records prevents duplicate order processing.',
              },
              {
                title: 'Domain service boundaries keep server components clean',
                desc: 'Isolating business logic into 14 domain services allowed API route handlers and server actions to remain minimal, while ensuring the exact same validation and audit logging rules apply across both storefront and admin operations.',
              },
            ].map((lesson, idx) => (
              <div key={idx} className="p-6 bg-surface rounded-2xl border border-border-subtle space-y-2">
                <h3 className="font-bold text-text-primary text-base flex items-center gap-2">
                  <span className="font-mono text-accent">0{idx + 1}.</span>
                  {lesson.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed pl-7">{lesson.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Links */}
        <section className="pt-8 border-t border-border-subtle flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-4">
            <a 
              href="https://kashmir-stag.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-6 py-3 rounded-xl bg-text-primary text-canvas font-semibold hover:bg-text-secondary transition-colors"
            >
              Visit Live Marketplace
            </a>
            <a 
              href="https://github.com/CodeWithSalik" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-6 py-3 rounded-xl bg-surface text-text-primary border border-border-subtle hover:bg-surface-elevated transition-colors"
            >
              View GitHub Profile
            </a>
          </div>

          <Link 
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-text-muted hover:text-text-primary transition-colors"
          >
            Browse Other Projects <ArrowRight size={14} />
          </Link>
        </section>
      </div>
    </article>
  );
}
