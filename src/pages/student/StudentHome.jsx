import { hostels } from '../../lib/data';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function StudentHome() {
    return (
        <div className="space-y-12">
            {/* Hero Section */}
            <section className="text-center space-y-4 py-12">
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-400 bg-clip-text text-transparent">
                    Find Your Perfect Student Home
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                    Browse through our premium hostels, check real-time availability, and book your room in seconds. Comfort and community await.
                </p>
            </section>

            {/* Hostel Grid */}
            <div className="grid md:grid-cols-2 gap-8">
                {hostels.map((hostel) => (
                    <motion.div
                        key={hostel.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5 }}
                        className="group block bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 transition-all hover:shadow-xl"
                    >
                        <div className="relative h-64 overflow-hidden">
                            <img
                                src={hostel.image}
                                alt={hostel.name}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/90 backdrop-blur px-3 py-1 rounded-full text-sm font-semibold shadow-sm">
                                {hostel.type}
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 pt-24 text-white">
                                <h3 className="text-2xl font-bold">{hostel.name}</h3>
                                <div className="flex items-center gap-2 text-slate-300 text-sm mt-1">
                                    <MapPin size={14} /> <span>Campus Main Road</span>
                                </div>
                            </div>
                        </div>

                        <div className="p-6">
                            <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-2">
                                {hostel.description}
                            </p>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-1 text-amber-500">
                                    <Star size={18} fill="currentColor" />
                                    <span className="font-bold text-slate-900 dark:text-white">4.8</span>
                                    <span className="text-slate-400 text-sm">(124 reviews)</span>
                                </div>

                                <Link
                                    to={`/student/book/${hostel.id}`}
                                    className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-lg font-medium transition-colors"
                                >
                                    Check Rooms <ArrowRight size={18} />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
