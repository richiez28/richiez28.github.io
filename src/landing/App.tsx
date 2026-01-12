import React from 'react';

function App() {
    return (
        <div className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-rose-500 selection:text-white">
            <div className="container mx-auto px-4 py-20">
                <header className="mb-20 text-center">
                    <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent mb-6">
                        Richie Zhou
                    </h1>
                    <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
                        Welcome to my interactive portfolio.
                    </p>
                </header>

                <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Resume Stack Card */}
                    <a
                        href="/projects/resume-stack/"
                        className="group relative block p-8 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-teal-500/50 transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(45,212,191,0.3)]"
                    >
                        <div className="mb-6 h-12 w-12 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-400 group-hover:scale-110 transition-transform">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /></svg>
                        </div>
                        <h2 className="text-2xl font-bold mb-3 group-hover:text-teal-400 transition-colors">Resume Stack</h2>
                        <p className="text-neutral-400">
                            A block-based resume builder using React, DnD-Kit, and ShadCN UI. Direct path to my latest resume technology.
                        </p>
                    </a>

                    {/* Poker Game Card */}
                    <a
                        href="/projects/poker/"
                        className="group relative block p-8 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-violet-500/50 transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(139,92,246,0.3)]"
                    >
                        <div className="mb-6 h-12 w-12 rounded-full bg-violet-500/10 flex items-center justify-center text-violet-400 group-hover:scale-110 transition-transform">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M6 12c0-1.7 1.3-3 3-3s3 1.3 3 3" /><path d="M18 12c0 1.7-1.3 3-3 3s-3-1.3-3-3" /></svg>
                        </div>
                        <h2 className="text-2xl font-bold mb-3 group-hover:text-violet-400 transition-colors">Black Gold Poker</h2>
                        <p className="text-neutral-400">
                            An immersive 3D Poker experience built with React Three Fiber.
                        </p>
                    </a>

                    {/* Legacy Portfolio Card */}
                    <a
                        href="/legacy/index.html"
                        className="group relative block p-8 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-amber-500/50 transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(245,158,11,0.3)]"
                    >
                        <div className="mb-6 h-12 w-12 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><line x1="3" x2="21" y1="9" y2="9" /><path d="m9 16 3-3 3 3" /></svg>
                        </div>
                        <h2 className="text-2xl font-bold mb-3 group-hover:text-amber-400 transition-colors">Classic Portfolio</h2>
                        <p className="text-neutral-400">
                            My original static portfolio showcasing academic history, timeline, and previous projects.
                        </p>
                    </a>
                </main>
            </div>
        </div>
    );
}

export default App;
