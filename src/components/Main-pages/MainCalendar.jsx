// API Calendar
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import bootstrap5Plugin from "@fullcalendar/bootstrap5";
// Import Framer Motion for animation on main pages
import { motion, AnimatePresence } from "framer-motion";

export const MainCalendar = () => {
  return (
    <AnimatePresence>
      <motion.div
        // for styling the animation
        initial={{ y: 1000 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, ease: "easeInOut" }}
        //
      >
        <FullCalendar
          plugins={[
            dayGridPlugin,
            timeGridPlugin,
            interactionPlugin,
            bootstrap5Plugin,
          ]}
          initialView="dayGridMonth"
          headerToolbar={{
            start: "today prev,next",
            center: "title",
            end: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          height="70vh"
          themeSystem="bootstrap5"
        />
      </motion.div>
    </AnimatePresence>
  );
};
