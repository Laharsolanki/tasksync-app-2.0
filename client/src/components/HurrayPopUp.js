import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function HurrayPopup({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5 }}
          className="hurray-popup"
        >
          🎉 Hurray! All tasks completed 🎉
        </motion.div>
      )}
    </AnimatePresence>
  );
}