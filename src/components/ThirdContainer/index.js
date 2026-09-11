import Image from "next/image"
import { BiPlus } from "react-icons/bi"
import foto1 from '../../../public/pic.png'

const roles = [
    { label: "PASTOR", title: "Visão completa da igreja.", desc: "Finanças, membros e células, tudo num painel só." },
    { label: "TESOUREIRO", title: "Contas sempre em dia.", desc: "Registre entradas e saídas sem depender de planilha." },
    { label: "LÍDER DE CÉLULA", title: "Sua célula, organizada.", desc: "Presença, visitantes e aviso de multiplicação." },
]

export const ThirdContainer = () => {
    return (
        <div className="w-full py-24" style={{ background: "#0B0B0F" }}>
            <div className="w-[88vw] max-w-[1100px] mx-auto text-center">

                <div className="flex items-center justify-center gap-1.5 font-medium text-sm mb-4" style={{ color: "#7C8CFF" }}>
                    PARA TODA LIDERANÇA <BiPlus size={16} />
                </div>
                <h2 className="text-3xl md:text-[2.75rem] font-bold text-white leading-tight mb-14 mx-auto max-w-2xl">
                    Feito para quem lidera, do púlpito à célula.
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-left mb-16">
                    {roles.map((r) => (
                        <div key={r.label} className="rounded-[24px] p-7" style={{ background: "#15182B", border: "1px solid #23273F" }}>
                            <p className="text-xs font-semibold mb-3 tracking-wide" style={{ color: "#7C8CFF" }}>{r.label}</p>
                            <h3 className="text-xl font-semibold text-white mb-2">{r.title}</h3>
                            <p className="text-sm text-white/55">{r.desc}</p>
                        </div>
                    ))}
                </div>

                <Image src={foto1} alt="Tela do Holy" width={380} className="float-animation mx-auto" />
            </div>
        </div>
    )
}
