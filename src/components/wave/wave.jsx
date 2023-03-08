import { motion } from "framer-motion";

export const Wave = ({ width }) => {
  const icon = {
    hidden: {
      pathLength: 0,
      opacity: 0,
    },
    visible: {
      pathLength: 1,
      opacity: 1,
    },
  };
  return (
    <motion.svg
      viewBox="0 0 1926 475"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        initial="hidden"
        animate="visible"
        variants={icon}
        d="M1 79.9995C776 1151 1050 -346.5 1925 79.9995"
        stroke="#BFA181"
        strokeWidth={3}
        transition={{
          default: { duration: 1, ease: "easeInOut" },
          fill: { duration: 1, ease: [1, 0, 0.8, 1] },
        }}
      />
    </motion.svg>
  );
};
