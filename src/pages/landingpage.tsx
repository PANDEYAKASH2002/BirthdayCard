
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";


export default function LandingPage() {
const navigate = useNavigate();
return (
<div className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-pink-400 to-purple-600">
<motion.h1
className="text-5xl text-white font-bold mb-8"
initial={{ opacity: 0, y: -50 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 1 }}
>
Welcome!
</motion.h1>
<motion.button
className="px-6 py-3 bg-white text-pink-600 rounded-full text-xl shadow-lg hover:scale-105 transition"
whileHover={{ scale: 1.1 }}
whileTap={{ scale: 0.9 }}
onClick={() => navigate("/birthday")}
>
Click Me for Surprise!
</motion.button>
</div>
);
}