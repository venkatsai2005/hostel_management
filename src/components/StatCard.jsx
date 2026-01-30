import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

export function StatCard({ title, value, icon: Icon, color, trend }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm"
        >
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{title}</p>
                    <h3 className="text-2xl font-bold mt-1 text-slate-900 dark:text-white">{value}</h3>

                    {trend && (
                        <span className={cn(
                            "inline-flex items-center gap-1 text-xs font-medium mt-2 px-2 py-0.5 rounded-full",
                            trend > 0 ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400" : "bg-rose-100 text-rose-700 dark:bg-rose-500/20 dark:text-rose-400"
                        )}>
                            {trend > 0 ? "+" : ""}{trend}% from last month
                        </span>
                    )}
                </div>
                <div className={cn("p-3 rounded-lg", color)}>
                    <Icon size={24} className="text-white" />
                </div>
            </div>
        </motion.div>
    );
}
