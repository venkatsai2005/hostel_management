import { Link } from 'react-router-dom';
import { ShieldCheck, GraduationCap, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[100px]" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-violet-500/20 rounded-full blur-[100px]" />

            <div className="relative z-10 max-w-4xl w-full">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
                        Hostel Management <span className="text-indigo-400">System</span>
                    </h1>
                    <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto">
                        A unified platform for seamless hostel administration and student accommodation.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                    <Link to="/admin" className="group">
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="h-full bg-slate-900/50 backdrop-blur border border-slate-800 hover:border-indigo-500/50 p-8 rounded-2xl transition-all cursor-pointer"
                        >
                            <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-500 group-hover:text-white transition-colors text-indigo-400">
                                <ShieldCheck size={28} />
                            </div>
                            <h2 className="text-2xl font-bold text-white mb-2">Admin Portal</h2>
                            <p className="text-slate-400 mb-6">Access dashboard, manage rooms, view stats, and handle maintenance.</p>
                            <div className="flex items-center text-indigo-400 font-medium group-hover:translate-x-2 transition-transform">
                                Login as Admin <ArrowRight size={16} className="ml-2" />
                            </div>
                        </motion.div>
                    </Link>

                    <Link to="/student" className="group">
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="h-full bg-slate-900/50 backdrop-blur border border-slate-800 hover:border-violet-500/50 p-8 rounded-2xl transition-all cursor-pointer"
                        >
                            <div className="w-12 h-12 bg-violet-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-violet-500 group-hover:text-white transition-colors text-violet-400">
                                <GraduationCap size={28} />
                            </div>
                            <h2 className="text-2xl font-bold text-white mb-2">Student Portal</h2>
                            <p className="text-slate-400 mb-6">Browse hostels, check availability, book rooms, and view your stay details.</p>
                            <div className="flex items-center text-violet-400 font-medium group-hover:translate-x-2 transition-transform">
                                Enter as Student <ArrowRight size={16} className="ml-2" />
                            </div>
                        </motion.div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
