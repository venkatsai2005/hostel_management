import { useParams } from 'react-router-dom';
import { useState, useMemo } from 'react';
import { RoomGrid } from '../components/RoomGrid';
import { motion } from 'framer-motion';
import { Filter } from 'lucide-react';
import { hostelData } from '../lib/data';

export default function HostelView() {
    const { id } = useParams();
    const rooms = hostelData[id] || [];
    const [filter, setFilter] = useState('all');

    const filteredRooms = useMemo(() => {
        if (filter === 'all') return rooms;
        return rooms.filter(room => room.status === filter);
    }, [rooms, filter]);

    const stats = useMemo(() => {
        return {
            total: rooms.length,
            available: rooms.filter(r => r.status === 'available').length,
            occupied: rooms.filter(r => r.status === 'occupied').length,
            maintenance: rooms.filter(r => r.status === 'maintenance').length
        }
    }, [rooms]);

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h2 className="text-2xl font-bold capitalize text-slate-900 dark:text-white">{id} Hostel</h2>
                    <p className="text-slate-500 dark:text-slate-400">Manage rooms and occupancy</p>
                </div>

                <div className="flex bg-white dark:bg-slate-900 p-1 rounded-lg border border-slate-200 dark:border-slate-800">
                    {['all', 'available', 'occupied', 'maintenance'].map((f) => (
                        <button
                            key={f}
                            onClick={() => setFilter(f)}
                            className={`px-4 py-2 rounded-md text-sm font-medium transition-all capitalize ${filter === f
                                ? 'bg-indigo-600 text-white shadow-sm'
                                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                                }`}
                        >
                            {f}
                        </button>
                    ))}
                </div>
            </div>

            {/* Quick Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-800">
                    <span className="text-xs text-slate-500 uppercase font-bold tracking-wider">Total</span>
                    <p className="text-2xl font-bold text-slate-900 dark:text-white">{stats.total}</p>
                </div>
                <div className="bg-white dark:bg-slate-900 p-4 rounded-lg border border-emerald-200 dark:border-emerald-900/30">
                    <span className="text-xs text-emerald-600 dark:text-emerald-400 uppercase font-bold tracking-wider">Available</span>
                    <p className="text-2xl font-bold text-emerald-700 dark:text-emerald-400">{stats.available}</p>
                </div>
                <div className="bg-white dark:bg-slate-900 p-4 rounded-lg border border-rose-200 dark:border-rose-900/30">
                    <span className="text-xs text-rose-600 dark:text-rose-400 uppercase font-bold tracking-wider">Occupied</span>
                    <p className="text-2xl font-bold text-rose-700 dark:text-rose-400">{stats.occupied}</p>
                </div>
                <div className="bg-white dark:bg-slate-900 p-4 rounded-lg border border-amber-200 dark:border-amber-900/30">
                    <span className="text-xs text-amber-600 dark:text-amber-400 uppercase font-bold tracking-wider">Maintenance</span>
                    <p className="text-2xl font-bold text-amber-700 dark:text-amber-400">{stats.maintenance}</p>
                </div>
            </div>

            <RoomGrid rooms={filteredRooms} />
        </div>
    );
}
