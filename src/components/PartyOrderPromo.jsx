import { motion } from 'framer-motion';
import { useTheme } from '../themeContext'; // optional, if you support dark mode

export default function PartyOrderPromo() {
  const { darkMode } = useTheme?.() || { darkMode: false };

  return (
    <motion.div
      className={`container my-5 px-4 py-5 rounded-4 shadow-lg ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1950&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1 }}
      ></div>

      <div className="position-relative z-2 text-center">
        <motion.h2
          className="display-5 fw-bold text-warning mb-3"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          🎉 We Take Party & Bulk Orders!
        </motion.h2>

        <p className="lead mb-4 text-white">
          Planning a celebration, wedding, or corporate event? <br />
          Let us bake the joy into your moments with custom-designed cakes, cupcakes, and treats.
        </p>

        <motion.button
          className="btn btn-warning btn-lg fw-semibold px-4 py-2 shadow"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          📞 Contact Us for Bulk Orders
        </motion.button>
      </div>
    </motion.div>
  );
}
