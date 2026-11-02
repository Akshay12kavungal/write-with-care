import React from 'react';
import { XCircle, CheckCircle2, AlertTriangle, Sparkles, Award } from 'lucide-react';
import Badge from './Badge';

export default function PresentationComparison() {
  return (
    <div className="rounded-3xl bg-paper-cream border border-blush-300 p-6 sm:p-10 shadow-stationery relative overflow-hidden">
      <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
        <Badge variant="rose" size="md">
          Internal Marks Impact
        </Badge>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal-800">
          The Presentation Advantage
        </h3>
        <p className="text-xs sm:text-sm text-charcoal-600">
          Evaluators spend an average of 45 seconds skimming each student assignment. Presentation makes all the difference!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {/* Rushed Self-Writing Card */}
        <div className="rounded-2xl bg-paper-pure p-6 border-2 border-dashed border-red-200/80 shadow-xs flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 bg-red-50 px-3 py-1 rounded-full border border-red-200">
                <XCircle className="h-4 w-4" />
                <span>Rushed Last-Minute Writing</span>
              </span>
              <span className="text-xs text-charcoal-muted font-medium">Late Night Rush</span>
            </div>

            <div className="p-3.5 rounded-xl bg-red-50/50 border border-red-100 text-xs text-charcoal-700 italic font-mono space-y-1">
              <p className="line-through text-red-400">~ messy scratches and ink smudges ~</p>
              <p>Ragged margins, unequal line gaps, hand cramps...</p>
            </div>

            <ul className="space-y-2 text-xs text-charcoal-600 pt-1">
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">✕</span>
                <span>Inconsistent slant and illegible letters in Malayalam/English.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">✕</span>
                <span>Missing observation table headers and unaligned formulas.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">✕</span>
                <span>Risk of poor impression and deducted internal assignment marks.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">✕</span>
                <span>Exhausting 6-8 hours of wrist pain before exam week.</span>
              </li>
            </ul>
          </div>

          <div className="pt-3 border-t border-red-100 text-[11px] font-semibold text-red-700">
            Result: Stress, fatigue, and lower evaluation scores.
          </div>
        </div>

        {/* Write With Care Presentation Card */}
        <div className="rounded-2xl bg-paper-pure p-6 border-2 border-emerald-300 shadow-paper flex flex-col justify-between space-y-4 relative overflow-hidden">
          {/* Top highlight ribbon */}
          <div className="absolute top-0 right-0 bg-emerald-500 text-white text-[10px] font-bold px-3 py-0.5 rounded-bl-xl shadow-xs uppercase tracking-wider">
            100% Guaranteed Neat
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                <span>Written By Write With Care</span>
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-100 text-xs text-emerald-900 font-handwriting text-base space-y-0.5">
              <p className="font-bold">✨ Every Page Is Written With Care! ✨</p>
              <p className="font-sans text-[11px] text-emerald-700">Pristine 3cm margins, two-tone ink discipline &amp; flawless letterforms.</p>
            </div>

            <ul className="space-y-2 text-xs text-charcoal-700 pt-1">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span>Uniform, elegant English cursive or print handwriting.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span>Flawless Malayalam aksharangal with traditional curves.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span>Clear boxed formulas, aligned lab record observation columns.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span>Zero stress for students; spend your time studying for university exams!</span>
              </li>
            </ul>
          </div>

          <div className="pt-3 border-t border-emerald-100 text-[11px] font-bold text-emerald-800 flex items-center justify-between">
            <span>Result: Teacher compliments &amp; top internal grades.</span>
            <span className="font-serif text-rose-600">From ₹5 - ₹10/pg</span>
          </div>
        </div>
      </div>
    </div>
  );
}

