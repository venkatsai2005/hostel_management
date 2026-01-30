import { useParams, useNavigate } from 'react-router-dom';
import { hostelData, hostels } from '../../lib/data';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, User, Info, Wifi, Coffee, BookOpen, ArrowLeft } from 'lucide-react';
import { cn } from '../../lib/utils';

export default function BookingPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const hostel = hostels.find(h => h.id === id);
    const rooms = hostelData[id] || [];

    const [selectedRoom, setSelectedRoom] = useState(null);
    const [isSuccess, setIsSuccess] = useState(false);

    if (!hostel) return <div>Hostel not found</div>;

    const handleBook = () => {
        // Mock API call
        setTimeout(() => {
            setIsSuccess(true);
        }, 1000);
    }

    if (isSuccess) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-4">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mb-6 text-emerald-600 dark:text-emerald-400"
                >
                    <Check size={40} />
                </motion.div>
                <h2 className="text-3xl font-bold mb-2">Booking Confirmed!</h2>
                <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-md">
                    You have successfully booked <span className="font-semibold text-slate-900 dark:text-white">Room {selectedRoom.number}</span> in {hostel.name}.
                </p>
                <div className="flex gap-4">
                    <button onClick={() => navigate('/student')} className="px-6 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                        Back to Home
                    </button>
                    <button onClick={() => navigate('/student/my-bookings')} className="px-6 py-2.5 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors">
                        View My Bookings
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column: Room Selection */}
            <div className="lg:col-span-2 space-y-8">
                <div>
                    <button onClick={() => navigate('/student')} className="flex items-center text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors mb-4">
                        <ArrowLeft size={16} className="mr-1" /> Back to Hostels
                    </button>
                    <h1 className="text-3xl font-bold mb-2">{hostel.name}</h1>
                    <p className="text-slate-600 dark:text-slate-400">{hostel.description}</p>

                    <div className="flex gap-4 mt-6">
                        <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-full">
                            <Wifi size={14} /> Free WiFi
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-full">
                            <Coffee size={14} /> Mess Included
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-full">
                            <BookOpen size={14} /> Study Room
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className="text-xl font-semibold mb-4">Select a Room</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                        {rooms.map((room) => (
                            <button
                                key={room.id}
                                disabled={room.status !== 'available'}
                                onClick={() => setSelectedRoom(room)}
                                className={cn(
                                    "relative p-4 rounded-xl border text-left transition-all",
                                    selectedRoom?.id === room.id
                                        ? "border-indigo-600 ring-2 ring-indigo-600 bg-indigo-50 dark:bg-indigo-900/10"
                                        : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:border-indigo-300 dark:hover:border-instagram-700",
                                    room.status !== 'available' && "opacity-50 cursor-not-allowed bg-slate-50 dark:bg-slate-800 border-slate-100 dark:border-slate-800"
                                )}
                            >
                                <div className="flex justify-between items-start mb-2">
                                    <span className="font-bold text-lg">{room.number}</span>
                                    {room.status === 'available' ? (
                                        <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                                    ) : (
                                        <div className="w-2 h-2 rounded-full bg-rose-500" />
                                    )}
                                </div>
                                <p className="text-xs text-slate-500 capitalize mb-2">{room.type}</p>
                                <p className="font-medium text-sm">₹{room.price}/mo</p>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right Column: Booking Summary */}
            <div className="lg:col-span-1">
                <div className="sticky top-24 bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
                    <h3 className="text-xl font-bold mb-6">Booking Summary</h3>

                    {selectedRoom ? (
                        <div className="space-y-6">
                            <div className="space-y-1">
                                <p className="text-sm text-slate-500">Hostel</p>
                                <p className="font-medium text-lg">{hostel.name}</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-sm text-slate-500">Selected Room</p>
                                <div className="flex justify-between items-center">
                                    <p className="font-medium text-lg">{selectedRoom.number} <span className="text-sm font-normal text-slate-400">({selectedRoom.type})</span></p>
                                    <span className="font-bold text-indigo-600">₹{selectedRoom.price}/mo</span>
                                </div>
                            </div>

                            <div className="border-t border-slate-200 dark:border-slate-800 pt-4">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-slate-600 dark:text-slate-400">Security Deposit</span>
                                    <span className="font-medium">₹5,000</span>
                                </div>
                                <div className="flex justify-between items-center text-lg font-bold mt-4">
                                    <span>Total Due</span>
                                    <span>₹{selectedRoom.price + 5000}</span>
                                </div>
                            </div>

                            <button
                                onClick={handleBook}
                                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold shadow-lg shadow-indigo-500/20 transition-all active:scale-[0.98]"
                            >
                                Confirm Booking
                            </button>
                            <p className="text-xs text-center text-slate-500">
                                You won't be charged yet.
                            </p>
                        </div>
                    ) : (
                        <div className="text-center py-12 text-slate-500">
                            <Info className="mx-auto mb-4 opacity-50" size={32} />
                            <p>Select an available room to proceed with booking.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
