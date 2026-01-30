import { useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { LayoutDashboard, Building2, Menu, X, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';

const Sidebar = ({ isOpen, setIsOpen }) => {
    const location = useLocation();

    // Updated paths to include /admin prefix
    const links = [
        { name: 'Dashboard', path: '/admin', icon: LayoutDashboard },
        { name: 'Alpha Hostel', path: '/admin/hostel/alpha', icon: Building2 },
        { name: 'Beta Hostel', path: '/admin/hostel/beta', icon: Building2 },
        { name: 'Gamma Hostel', path: '/admin/hostel/gamma', icon: Building2 },
        { name: 'Delta Hostel', path: '/admin/hostel/delta', icon: Building2 },
    ];

    return (
        <>
            {/* Mobile Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="fixed inset-0 bg-black z-20 md:hidden"
                    />
                )}
            </AnimatePresence>

            {/* Sidebar */}
            <motion.aside
                className={cn(
                    "fixed top-0 left-0 z-30 h-screen w-64 bg-slate-900 text-white shadow-xl transition-transform duration-300 md:translate-x-0",
                    isOpen ? "translate-x-0" : "-translate-x-full"
                )}
            >
                <div className="flex h-16 items-center justify-between px-6 border-b border-slate-800">
                    <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                        HostelAdmin
                    </span>
                    <button onClick={() => setIsOpen(false)} className="md:hidden text-slate-400 hover:text-white">
                        <X size={24} />
                    </button>
                </div>

                <nav className="mt-6 px-3 space-y-1">
                    {links.map((link) => {
                        const Icon = link.icon;
                        // Exact match for dashboard, startswith for others
                        const isActive = link.path === '/admin'
                            ? location.pathname === '/admin'
                            : location.pathname.startsWith(link.path);

                        return (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={({ isActive }) => cn(
                                    "flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium transition-all duration-200 group",
                                    isActive
                                        ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/30"
                                        : "text-slate-400 hover:bg-slate-800 hover:text-white"
                                )}
                            >
                                <Icon size={20} className={cn("transition-colors", isActive ? "text-white" : "text-slate-500 group-hover:text-white")} />
                                {link.name}
                            </NavLink>
                        );
                    })}
                </nav>

                <div className="absolute bottom-0 w-full p-4 border-t border-slate-800">
                    <div className="flex items-center gap-3 px-2 py-2">
                        <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center">
                            <User size={16} className="text-slate-300" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm font-medium text-slate-200">Admin User</span>
                            <span className="text-xs text-slate-500">View Profile</span>
                        </div>
                    </div>
                </div>
            </motion.aside>
        </>
    );
};

export default function AdminLayout() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

            <div className="md:ml-64 transition-all duration-300">
                <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 px-6 backdrop-blur">
                    <button onClick={() => setIsOpen(true)} className="md:hidden text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200">
                        <Menu size={24} />
                    </button>
                    <div className="flex-1">
                        <h1 className="text-lg font-semibold text-slate-800 dark:text-slate-100">
                            Overview
                        </h1>
                    </div>
                </header>

                <main className="p-4 md:p-8 max-w-7xl mx-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
