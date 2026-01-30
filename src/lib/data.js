// Mock Data Generator
const generateRooms = (hostelInitial) => {
    return Array.from({ length: 20 }, (_, i) => ({
        id: `${hostelInitial}-${i + 1}`,
        number: `${hostelInitial}${100 + i}`,
        status: Math.random() > 0.4 ? 'occupied' : Math.random() > 0.8 ? 'maintenance' : 'available',
        type: i % 2 === 0 ? 'Single' : 'Double',
        price: i % 2 === 0 ? 5000 : 3500, // Price per month
        floor: Math.floor(i / 10) + 1,
    }));
};

export const hostels = [
    { id: 'alpha', name: 'Alpha Hostel', image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=2069', description: "Premium accommodation for engineering students.", type: "Boys" },
    { id: 'beta', name: 'Beta Hostel', image: 'https://images.unsplash.com/photo-1596276020587-8044fe049813?auto=format&fit=crop&q=80&w=2039', description: "Modern living spaces with garden views.", type: "Girls" },
    { id: 'gamma', name: 'Gamma Hostel', image: 'https://images.unsplash.com/photo-1520699049698-acd2fcc510d9?auto=format&fit=crop&q=80&w=2070', description: "Budget-friendly options with great community.", type: "Boys" },
    { id: 'delta', name: 'Delta Hostel', image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&q=80&w=1883', description: "Quiet and study-focused environment.", type: "Girls" },
]

export const hostelData = {
    alpha: generateRooms('A'),
    beta: generateRooms('B'),
    gamma: generateRooms('G'),
    delta: generateRooms('D'),
};
