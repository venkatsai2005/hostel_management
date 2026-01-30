import { RoomCard } from './RoomCard';
import { motion } from 'framer-motion';

export function RoomGrid({ rooms }) {
    return (
        <motion.div
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
        >
            {rooms.map((room) => (
                <RoomCard key={room.id} room={room} />
            ))}
        </motion.div>
    );
}
