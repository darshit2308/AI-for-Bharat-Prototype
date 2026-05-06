import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { Shield, ArrowRight, Sparkles, CheckCircle2, Moon, Sun } from 'lucide-react'

export function Landing() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true)
      document.documentElement.classList.add('dark')
    } else {
      setIsDark(false)
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const toggleDark = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
      setIsDark(false)
    } else {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
      setIsDark(true)
    }
  }

  return (
    <div className="min-h-screen bg-[#f7f9fc] text-slate-800 relative overflow-hidden dark:bg-slate-900 dark:text-slate-200">
      <div className="absolute top-4 right-4 z-50">
        <button onClick={toggleDark} className="p-2 rounded-full bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow-sm text-slate-600 dark:text-slate-300">
          {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </div>
      <div className="absolute inset-0 editorial-surface pointer-events-none" />

      <main className="relative z-10 px-7 lg:px-10 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <section className="mb-16 grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
            <div className="glass-card p-8 lg:p-12 landing-panel">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-[0_10px_30px_rgba(180,83,9,0.22)]">
                  <Shield className="w-6 h-6 text-slate-950" />
                </div>
                <p className="section-eyebrow mb-0">PROCUREMENT INTELLIGENCE SYSTEM</p>
              </div>

              <h1 className="text-4xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[0.96] max-w-4xl">
                Tender review that feels like a real control room, not a generic AI demo.
              </h1>
              <p className="mt-6 text-slate-600 text-lg leading-relaxed max-w-3xl">
                Structure clauses, compare bidders, and preserve a human-readable decision trail in a workspace designed for scrutiny.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  'Criteria Extraction',
                  'Bidder Matrix',
                  'Manual Review Queue',
                  'Decision Audit Trail',
                ].map((item) => (
                  <div
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-white/88 border border-stone-200 text-sm font-medium text-slate-700"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link to="/dashboard" className="btn-primary px-8 py-3.5 text-base font-bold">
                  <Sparkles className="w-5 h-5" />
                  Open Workspace
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <p className="text-sm text-slate-500 max-w-xs">
                  Built for procurement teams that need confident records, not just fast summaries.
                </p>
              </div>
            </div>

          </section>
        </div>
      </main>
    </div>
  )
}
