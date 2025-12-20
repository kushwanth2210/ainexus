import { motion } from 'framer-motion'

export default function RobotAnimation() {
    return (
        <div className="relative w-64 h-64 md:w-96 md:h-96 flex items-center justify-center">
            {/* Background Glow VFX */}
            <motion.div
                className="absolute inset-0 bg-ai-indigo/20 rounded-full blur-[100px]"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* Energy Rings VFX */}
            {[1, 2, 3].map((i) => (
                <motion.div
                    key={i}
                    className="absolute border border-ai-blue/30 rounded-full"
                    style={{ width: i * 100, height: i * 100 }}
                    animate={{
                        rotate: 360,
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        rotate: { duration: 10 + i * 5, repeat: Infinity, ease: "linear" },
                        scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                    }}
                />
            ))}

            {/* Robot Body */}
            <motion.div
                className="relative z-10 flex flex-col items-center"
                animate={{
                    y: [0, -20, 0],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                {/* Head */}
                <motion.div
                    className="w-32 h-24 bg-gradient-to-br from-slate-100 to-slate-300 rounded-2xl border-2 border-slate-400 relative shadow-xl overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                >
                    {/* Face/Screen */}
                    <div className="absolute inset-2 bg-slate-900 rounded-lg flex items-center justify-center gap-4 overflow-hidden">
                        {/* Eyes */}
                        <motion.div
                            className="w-4 h-4 bg-ai-cyan rounded-full shadow-[0_0_15px_rgba(6,182,212,0.8)]"
                            animate={{
                                scaleY: [1, 1, 0.1, 1, 1],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                times: [0, 0.45, 0.5, 0.55, 1]
                            }}
                        />
                        <motion.div
                            className="w-4 h-4 bg-ai-cyan rounded-full shadow-[0_0_15px_rgba(6,182,212,0.8)]"
                            animate={{
                                scaleY: [1, 1, 0.1, 1, 1],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                times: [0, 0.45, 0.5, 0.55, 1]
                            }}
                        />

                        {/* Scanning Line VFX */}
                        <motion.div
                            className="absolute inset-x-0 h-0.5 bg-ai-cyan/50 blur-sm"
                            animate={{
                                top: ['0%', '100%', '0%'],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        />
                    </div>
                </motion.div>

                {/* Neck */}
                <div className="w-8 h-4 bg-slate-400 rounded-sm -mt-1" />

                {/* Torso */}
                <motion.div className="w-40 h-48 bg-gradient-to-br from-slate-100 to-slate-300 rounded-3xl border-2 border-slate-400 relative shadow-2xl overflow-hidden">
                    {/* Core Energy VFX */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                            className="w-16 h-16 bg-ai-indigo rounded-full blur-xl"
                            animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0.5, 0.8, 0.5],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                        <motion.div
                            className="w-8 h-8 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.8)] z-20"
                            animate={{
                                scale: [1, 1.2, 1],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    </div>

                    {/* Internal Details */}
                    <div className="absolute top-4 left-4 w-12 h-1 bg-slate-400/50 rounded-full" />
                    <div className="absolute top-8 left-4 w-8 h-1 bg-slate-400/50 rounded-full" />
                </motion.div>

                {/* Floating Arms */}
                <motion.div
                    className="absolute -left-12 top-32 w-8 h-24 bg-gradient-to-b from-slate-200 to-slate-400 rounded-full border-2 border-slate-400 shadow-lg"
                    animate={{
                        rotate: [-5, 5, -5],
                        y: [0, 10, 0],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute -right-12 top-32 w-8 h-24 bg-gradient-to-b from-slate-200 to-slate-400 rounded-full border-2 border-slate-400 shadow-lg"
                    animate={{
                        rotate: [5, -5, 5],
                        y: [0, 10, 0],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5
                    }}
                />
            </motion.div>

            {/* Data Particles VFX */}
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-ai-cyan rounded-full"
                    initial={{
                        x: (Math.random() - 0.5) * 200,
                        y: (Math.random() - 0.5) * 200,
                        opacity: 0
                    }}
                    animate={{
                        y: [null, -100],
                        opacity: [0, 1, 0],
                    }}
                    transition={{
                        duration: 2 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                        ease: "linear"
                    }}
                />
            ))}
        </div>
    )
}
