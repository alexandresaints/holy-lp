'use client'
import { useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import foto2 from '../../../public/1.jpeg'
import foto3 from '../../../public/2.jpeg'
import foto4 from '../../../public/3.jpeg'

import { ImQuotesLeft } from "react-icons/im";
import { BiPlus } from "react-icons/bi";

const testimonials = [
    {
        title: "Facilitou a vida do pastor!",
        quote: "Nunca foi tão fácil gerenciar as finanças da igreja. Agora o pastor pode focar no que realmente importa!",
        name: "Leandro Cruz",
        photo: foto3,
    },
    {
        title: "Comunidade mais unida",
        quote: "Com o app, conseguimos organizar melhor nossos membros e envolver mais pessoas. Nossa comunidade nunca esteve tão forte.",
        name: "Pr. Jorge Guimarães",
        photo: foto2,
    },
    {
        title: "Simples e intuitivo",
        quote: "O app é super fácil de usar, até mesmo para aqueles que não têm muita afinidade com tecnologia. Recomendo!",
        name: "Yasmim Bonelli",
        photo: foto4,
    },
]

export const FourthyContainer = () => {
    const constraintsRef = useRef(null)

    return (
        <div className="bg-white w-full py-24">
            <div className="w-[88vw] max-w-[1100px] mx-auto">

                <div className="flex items-center gap-1.5 font-medium text-sm mb-4" style={{ color: "#3A4DE0" }}>
                    O QUE FALAM DO HOLY <BiPlus size={16} />
                </div>
                <h2 className="text-3xl md:text-[2.75rem] font-bold leading-tight max-w-xl mb-14" style={{ color: "#0B0B0F" }}>
                    Quem usa, recomenda.
                </h2>

                <div ref={constraintsRef} className="overflow-hidden">
                    <motion.div
                        className="flex flex-row gap-5 cursor-grab active:cursor-grabbing"
                        drag="x"
                        dragConstraints={constraintsRef}
                        dragElastic={0.12}
                    >
                        {testimonials.map((t) => (
                            <div
                                key={t.name}
                                className="rounded-[28px] bg-white w-[300px] md:w-[340px] h-[320px] shrink-0 flex flex-col justify-between p-7 select-none"
                                style={{ border: "1px solid #E4E6F5" }}
                            >
                                <div>
                                    <ImQuotesLeft size={22} color="#3A4DE0" />
                                    <h3 className="text-[17px] font-semibold mt-4 mb-2" style={{ color: "#0B0B0F" }}>{t.title}</h3>
                                    <p className="text-sm" style={{ color: "#55596B" }}>"{t.quote}"</p>
                                </div>
                                <div className="flex flex-row items-center">
                                    <Image width={40} height={40} src={t.photo} className="rounded-full" alt={t.name} draggable={false} style={{ width: 40, height: 40, objectFit: "cover" }} />
                                    <h4 className="text-sm font-medium ml-3" style={{ color: "#0B0B0F" }}>{t.name}</h4>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
                <p className="text-center text-sm mt-5" style={{ color: "#8A8FA8" }}>← arraste para o lado →</p>
            </div>
        </div>
    )
}
