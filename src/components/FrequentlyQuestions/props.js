'use client'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { BiPlus, BiMinus } from 'react-icons/bi'

export default function DuvidaItem({ index, pergunta, resposta }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b py-6" style={{ borderColor: "#E4E6F5" }}>
      <button onClick={() => setOpen(!open)} className="w-full flex items-start gap-4 text-left" aria-expanded={open}>
        <span className="text-sm font-semibold mt-0.5 shrink-0" style={{ color: "#3A4DE0" }}>
          {String(index).padStart(2, "0")}.
        </span>
        <span className="flex-1 text-lg font-medium" style={{ color: "#0B0B0F" }}>{pergunta}</span>
        <span className="mt-1 shrink-0" style={{ color: "#3A4DE0" }}>
          {open ? <BiMinus size={20} /> : <BiPlus size={20} />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="text-sm leading-relaxed pl-9 pt-3" style={{ color: "#55596B" }}>{resposta}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
