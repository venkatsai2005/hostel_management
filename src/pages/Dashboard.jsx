import { Users, Building, BedDouble, AlertCircle } from 'lucide-react';
import { StatCard } from '../components/StatCard';
import { motion } from 'framer-motion';

export default function Dashboard() {
    const stats = [
        { title: 'Total Students', value: '845', icon: Users, color: 'bg-indigo-500', trend: 12 },
        { title: 'Total Rooms', value: '320', icon: Building, color: 'bg-blue-500', trend: 0 },
        { title: 'Available Beds', value: '45', icon: BedDouble, color: 'bg-emerald-500', trend: -5 },
        { title: 'Maintenance Issues', value: '3', icon: AlertCircle, color: 'bg-amber-500', trend: -2 },
    ];

    const recents = [
        { id: 1, text: "Room 101 (Alpha) reported a plumbing issue", time: "2 hours ago" },
        { id: 2, text: "New student registered in Beta Hostel", time: "4 hours ago" },
        { id: 3, text: "Gamma Hostel cleaning scheduled completed", time: "Yesterday" },
    ]

    return (
        <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <StatCard key={index} {...stat} />
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm"
                >
                    <h2 className="text-lg font-bold mb-4 text-slate-900 dark:text-white">Recent Activity</h2>
                    <div className="space-y-4">
                        {recents.map((item) => (
                            <div key={item.id} className="flex items-start gap-4 pb-4 border-b border-slate-100 dark:border-slate-800 last:border-0 last:pb-0">
                                <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2" />
                                <div>
                                    <p className="text-sm text-slate-700 dark:text-slate-300">{item.text}</p>
                                    <p className="text-xs text-slate-400 mt-1">{item.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Placeholder for a chart or map */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl p-6 shadow-lg text-white flex flex-col justify-between"
                >
                    <div>
                        <h2 className="text-lg font-bold">Quick Actions</h2>
                        <p className="text-indigo-100 text-sm mt-1">Manage common tasks efficiently</p>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mt-6">
                        <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm p-3 rounded-lg text-sm font-medium transition-colors text-left">
                            + Add Student
                        </button>
                        <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm p-3 rounded-lg text-sm font-medium transition-colors text-left">
                            + Book Room
                        </button>
                        <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm p-3 rounded-lg text-sm font-medium transition-colors text-left">
                            ! Report Issue
                        </button>
                        <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm p-3 rounded-lg text-sm font-medium transition-colors text-left">
                            View Reports
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
