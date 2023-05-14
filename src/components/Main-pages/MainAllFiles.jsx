import React from "react";
import DragAndDrop from "../DragAndDrop";
// Import Framer Motion for animation on main pages
import { motion, AnimatePresence } from "framer-motion";

export const MainAllFiles = () => {
  return (
    <AnimatePresence>
      <motion.div
        // for styling the animation
        initial={{ y: 1000 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
        //
        style={{ height: "70vh" }}>
        <div className="mb-5">
          <h4 className="fw-bold">Recently Edited</h4>
        </div>
        <div className="d-flex flex-column justify-content-between h-50">
          <div className="mt-5">{/* Main= contet */}</div>
          <hr className="text-secondary" />
          <div>
            <h4 className="fw-bold">Upload Files</h4>
            {/* Upload files section */}
            <DragAndDrop />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
