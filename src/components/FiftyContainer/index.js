'use client'
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MdOutlineArrowOutward } from "react-icons/md"
import { BiCheckCircle, BiPlus } from "react-icons/bi"
import Link from "next/link"

const perks = [
    "Todas as funcionalidades, incluindo células.",
    "Suporte 24/7.",
    "Atualizações gratuitas.",
    "Relatórios detalhados.",
    "7 dias grátis.",
]

export const FiftyContainer = () => {
    const [annual, setAnnual] = useState(false)

    return (
        <div className="w-full py-24" style={{ background: "#F5F6FD" }}>
            <div className="w-[88vw] max-w-[1100px] mx-auto flex flex-col items-center">

                <div className="flex items-center gap-1.5 font-medium text-sm mb-4" style={{ color: "#3A4DE0" }}>
                    PLANOS <BiPlus size={16} />
                </div>
                <h2 className="text-3xl md:text-[2.75rem] font-bold text-center leading-tight mb-12" style={{ color: "#0B0B0F" }}>
                    Planinhos que cabem no bolso.
                </h2>

                <div className="relative flex items-center bg-white rounded-full p-1 mb-10 shadow-sm" style={{ width: 224 }}>
                    <motion.div
                        className="absolute top-1 bottom-1 rounded-full"
                        style={{ width: "calc(50% - 4px)", background: "#3A4DE0" }}
                        animate={{ x: annual ? "calc(100% + 4px)" : 4 }}
                        transition={{ type: "spring", stiffness: 320, damping: 28 }}
                    />
                    <button
                        onClick={() => setAnnual(false)}
                        className={`relative z-10 flex-1 text-sm py-2.5 rounded-full transition-colors ${!annual ? "text-white" : "text-gray-500"}`}
                    >
                        Mensal
                    </button>
                    <button
                        onClick={() => setAnnual(true)}
                        className={`relative z-10 flex-1 text-sm py-2.5 rounded-full transition-colors ${annual ? "text-white" : "text-gray-500"}`}
                    >
                        Anual
                    </button>
                </div>

                <div className="flex flex-col p-8 w-[300px] md:w-[360px] rounded-[28px] shadow-lg" style={{ background: "#12162B" }}>

                    <div className="h-9 flex items-center justify-center mb-6">
                        <AnimatePresence mode="wait" initial={false}>
                            {annual ? (
                                <motion.span
                                    key="annual-badge"
                                    initial={{ opacity: 0, y: -8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 8 }}
                                    transition={{ duration: 0.2 }}
                                    className="text-sm text-white px-5 py-1.5 rounded-[20px] font-medium"
                                    style={{ backgroundColor: "#1FAE64" }}
                                >
                                    R$ 192 de desconto
                                </motion.span>
                            ) : (
                                <motion.span
                                    key="monthly-badge"
                                    initial={{ opacity: 0, y: -8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 8 }}
                                    transition={{ duration: 0.2 }}
                                    className="text-sm px-8 py-1.5 rounded-[20px] font-medium bg-white"
                                    style={{ color: "#12162B" }}
                                >
                                    por apenas
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </div>

                    <div className="flex flex-row text-white mx-auto items-baseline mb-8 overflow-hidden h-[40px]">
                        <AnimatePresence mode="wait" initial={false}>
                            <motion.p
                                key={annual ? "annual" : "monthly"}
                                initial={{ y: 24, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -24, opacity: 0 }}
                                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                                className="text-white text-center font-bold text-[32px]"
                            >
                                {annual ? "R$ 527,90" : "R$ 59,90"}
                            </motion.p>
                        </AnimatePresence>
                        <p className="ml-1">{annual ? "/ano" : "/mês"}</p>
                    </div>

                    <ul className="space-y-4">
                        {perks.map((p, i) => (
                            <li key={i} className="flex flex-row items-center">
                                <BiCheckCircle size={22} color="#1FAE64" />
                                <p className="text-white font-light ml-2 text-sm">{p}</p>
                            </li>
                        ))}
                    </ul>

                    <Link
                        href="https://play.google.com/store/apps/details?id=com.nextsolutions.holy"
                        target="_blank"
                        className="flex flex-row items-center justify-center bg-white py-3.5 mt-8 rounded-full"
                    >
                        <p className="font-medium mr-2" style={{ color: "#12162B" }}>Baixar o app</p>
                        <MdOutlineArrowOutward size={20} color="#12162B" />
                    </Link>
                </div>
            </div>
        </div>
    )
}
