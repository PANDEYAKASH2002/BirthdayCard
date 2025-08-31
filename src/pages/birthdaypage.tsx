
import Confetti from "react-confetti";
import { motion } from "framer-motion";

export default function BirthdayPage() {
  const cakes = Array.from({ length: 5 });
  const pandas = Array.from({ length: 5 });

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-yellow-300 to-pink-500 relative overflow-hidden">
      {/* Confetti */}
      <Confetti width={window.innerWidth} height={window.innerHeight} />

      {/* Title */}
      <motion.h1
        className="text-6xl font-bold text-white drop-shadow-lg text-center"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      >
        💌 Happy Birthday Simmu! 🎂
      </motion.h1>

      {/* Message */}
      <motion.h6
        className="text-2xl font-bold text-white drop-shadow-lg p-5 mt-5 text-center"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      >
        Door rehke bhi tu mere liye hamesha special hai ✨ <br />
        Tere bina yeh din celebrate karna thoda mushkil lagta hai,<br />
        par tujhe hamesha khush dekhna hi meri dua hai. ❤️<br />
        Tu wo har chiz deserve kare jo tujhe chahiye.💫<br />
        Aaj ke din full enjoy kar!
      </motion.h6>

      {/* Flying Cakes */}
      {cakes.map((_, index) => (
        <motion.div
          key={`cake-${index}`}
          className="absolute text-4xl"
          initial={{ y: -100, x: Math.random() * window.innerWidth }}
          animate={{ y: window.innerHeight + 100 }}
          transition={{
            duration: 5 + Math.random() * 3,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          🎂
        </motion.div>
      ))}

      {/* Flying Pandas */}
      {pandas.map((_, index) => (
        <motion.div
          key={`panda-${index}`}
          className="absolute text-4xl"
          initial={{ y: window.innerHeight + 100, x: Math.random() * window.innerWidth }}
          animate={{ y: -100 }}
          transition={{
            duration: 6 + Math.random() * 3,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          🐼
        </motion.div>
      ))}
    </div>
  );
}
