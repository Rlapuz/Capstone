import React from "react";
// Import Framer Motion for animation on main pages
import { motion, AnimatePresence } from "framer-motion";

export const MainDashboard = ({ selectedFiles }) => {
  return (
    <AnimatePresence>
      <motion.div
        // for styling the animation
        initial={{ y: 1000 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
        //
      >
        <h1>Files</h1>
        {selectedFiles.length > 0 && (
          <ul>
            {selectedFiles.map((file) => (
              <li key={file.name}>{file.name}</li>
            ))}
          </ul>
        )}
      </motion.div>
    </AnimatePresence>
  );
};
