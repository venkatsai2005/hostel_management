import { motion } from 'framer-motion';
import { cn } from '../lib/utils';
import { User, Check, Wrench } from 'lucide-react';

export function RoomCard({ room }) {
    const statusColors = {
        available: "bg-emerald-500",
        occupied: "bg-rose-500",
        maintenance: "bg-amber-500"
    };

    const statusIcons = {
        available: Check,
        occupied: User,
        maintenance: Wrench
    };

    const StatusIcon = statusIcons[room.status];

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.02 }}
            className="group relative bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer overflow-hidden"
        >
            <div className={cn("absolute top-0 right-0 p-2 rounded-bl-xl text-white shadow-sm", statusColors[room.status])}>
                <StatusIcon size={14} />
            </div>

            <div className="mt-2">
                <h4 className="text-2xl font-bold text-slate-800 dark:text-slate-100">{room.number}</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 capitalize">{room.type} Room</p>
            </div>

            <div className="mt-4 flex items-center gap-2">
                <span className={cn(
                    "inline-flex items-center px-2 py-1 rounded text-xs font-semibold capitalize",
                    room.status === 'available' && "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400",
                    room.status === 'occupied' && "bg-rose-100 text-rose-700 dark:bg-rose-500/20 dark:text-rose-400",
                    room.status === 'maintenance' && "bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-400",
                )}>
                    {room.status}
                </span>
            </div>
        </motion.div>
    );
}
