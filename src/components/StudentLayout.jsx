import { Link, Outlet } from 'react-router-dom';
import { UserCircle2, LogOut } from 'lucide-react';

export default function StudentLayout() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans">
            <nav className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <Link to="/student" className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">H</div>
                        <span className="text-lg font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">HostelPortal</span>
                    </Link>

                    <div className="flex items-center gap-4">
                        <Link to="/student/my-bookings" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                            My Bookings
                        </Link>
                        <div className="h-6 w-px bg-slate-200 dark:bg-slate-800" />
                        <div className="flex items-center gap-2">
                            <span className="text-sm font-medium hidden md:block">John Doe</span>
                            <UserCircle2 className="text-slate-500" />
                        </div>
                    </div>
                </div>
            </nav>

            <main className="container mx-auto px-4 py-8">
                <Outlet />
            </main>

            <footer className="border-t border-slate-200 dark:border-slate-800 py-8 mt-12 bg-white dark:bg-slate-900">
                <div className="container mx-auto px-4 text-center text-slate-500 text-sm">
                    &copy; 2024 Hostel Management System. All rights reserved.
                </div>
            </footer>
        </div>
    );
}
