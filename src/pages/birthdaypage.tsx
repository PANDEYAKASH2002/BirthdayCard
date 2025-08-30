
import Confetti from "react-confetti";
import { motion } from "framer-motion";


export default function BirthdayPage() {
return (
<div className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-yellow-300 to-pink-500 relative overflow-hidden">
<Confetti width={window.innerWidth} height={window.innerHeight} />
<motion.h1
className="text-6xl font-bold text-white drop-shadow-lg"
initial={{ scale: 0 }}
animate={{ scale: 1 }}
transition={{ duration: 1 }}
>
🎉 Happy Birthday Manoj! 🎉
</motion.h1>
</div>
);
}