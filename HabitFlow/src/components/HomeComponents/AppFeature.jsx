import { motion } from "framer-motion";
import { CheckCircle, Calendar, BarChart3 } from "lucide-react";

const features = [
  {
    icon: <CheckCircle className="w-8 h-8 text-blue-600" />,
    title: "Build Daily Habits",
    desc: "Create habits and mark them complete with a single tap.",
  },
  {
    icon: <Calendar className="w-8 h-8 text-green-600" />,
    title: "Track Every Day",
    desc: "Stay consistent with daily tracking and reminders.",
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-purple-600" />,
    title: "See Your Progress",
    desc: "Visualize streaks and progress that keep you motivated.",
  },
];

const AppFeature = () => {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-gray-800">
          Why Habit Flow?
        </h2>
        <p className="text-gray-500 mt-3 max-w-xl mx-auto">
          Habit Flow helps you build consistency through simple actions,
          clean tracking, and motivating progress.
        </p>
      </motion.div>

      {/* Feature Cards */}
      <div className="grid gap-8 md:grid-cols-3">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-xl p-6 shadow-sm border hover:shadow-md transition"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800">
              {feature.title}
            </h3>
            <p className="text-gray-500 mt-2 text-sm">
              {feature.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Subtle interaction hint */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        viewport={{ once: true }}
        className="text-center text-sm text-gray-400 mt-10"
      >
        ✨ Simple actions. Real progress. Every day.
      </motion.p>
    </section>
  );
};

export default AppFeature;
