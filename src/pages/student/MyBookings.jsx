export default function MyBookings() {
    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">My Bookings</h1>

            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 flex flex-col md:flex-row gap-6 items-start md:items-center">
                <div className="w-full md:w-48 h-32 bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=2069" className="w-full h-full object-cover" />
                </div>

                <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                        <div>
                            <h3 className="text-xl font-bold">Alpha Hostel</h3>
                            <p className="text-slate-500">Room 104 (Single)</p>
                        </div>
                        <span className="bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400 px-3 py-1 rounded-full text-xs font-bold uppercase">
                            Active
                        </span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
                        <div>
                            <p className="text-slate-500">Check-in</p>
                            <p className="font-medium">Aug 1, 2024</p>
                        </div>
                        <div>
                            <p className="text-slate-500">Valid Till</p>
                            <p className="font-medium">July 31, 2025</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-2 w-full md:w-auto">
                    <button className="px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg text-sm font-medium transition-colors">
                        View Receipt
                    </button>
                    <button className="px-4 py-2 border border-rose-200 text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-900/20 rounded-lg text-sm font-medium transition-colors">
                        Report Issue
                    </button>
                </div>
            </div>
        </div>
    );
}
