export default function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-slate-950 text-slate-100">
      <div className="max-w-md w-full text-center space-y-4 rounded-xl border border-slate-800 bg-slate-900/50 p-6 shadow-2xl backdrop-blur">
        <h1 className="text-3xl font-bold tracking-tight text-white">
          Vibelearn
        </h1>
        <p className="text-sm text-slate-400">
          Foundation initialized successfully with Vite, React, and Tailwind CSS.
        </p>
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
          Phase 1 Foundation Active
        </div>
      </div>
    </main>
  );
}
