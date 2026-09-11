import { BiPlus } from "react-icons/bi"
import { MdOutlineAutorenew } from "react-icons/md"

export const SecondContainer = () => {
    return (
        <div className="bg-white w-full py-24">
            <div className="w-[88vw] max-w-[1100px] mx-auto">

                <div className="flex items-center gap-1.5 font-medium text-sm mb-4" style={{ color: "#3A4DE0" }} id="PlanoTop">
                    RECURSOS <BiPlus size={16} />
                </div>
                <h2 className="text-3xl md:text-[2.75rem] font-bold leading-tight max-w-xl mb-14" style={{ color: "#0B0B0F" }}>
                    Pare de perder tempo organizando a igreja.
                </h2>

                <div className="flex flex-col gap-5">

                    {/* Row 1: Células (featured) + Financeiro/Relatórios stacked */}
                    <div className="flex flex-col md:flex-row gap-5 items-start">

                        <div className="md:w-[62%] rounded-[28px] p-7 flex flex-col gap-7" style={{ background: "#EEF0FC" }}>
                            <div>
                                <h3 className="text-xl font-semibold mb-2" style={{ color: "#0B0B0F" }}>Controle de células</h3>
                                <p className="text-sm max-w-[320px]" style={{ color: "#55596B" }}>Presença, visitantes e o momento certo de multiplicar, sem depender de planilha.</p>
                            </div>

                            <CellNetwork />

                            <div className="bg-white rounded-2xl p-5 shadow-sm mt-auto">
                                <div className="flex items-center justify-between mb-3">
                                    <p className="font-semibold text-sm" style={{ color: "#0B0B0F" }}>Célula Vida Nova</p>
                                    <span className="text-xs px-2.5 py-1 rounded-full" style={{ background: "#EEF0FC", color: "#3A4DE0" }}>8 membros</span>
                                </div>
                                <div className="flex items-center justify-between text-xs mb-1.5" style={{ color: "#8A8FA8" }}>
                                    <span>Presença</span><span>92%</span>
                                </div>
                                <div className="h-2 rounded-full overflow-hidden mb-4" style={{ background: "#EEF0FC" }}>
                                    <div className="h-full rounded-full" style={{ width: "92%", background: "#1FAE64" }} />
                                </div>
                                <div className="flex items-center gap-2 text-xs font-medium" style={{ color: "#1FAE64" }}>
                                    <MdOutlineAutorenew size={14} /> Pronta para multiplicar
                                </div>
                            </div>
                        </div>

                        <div className="md:w-[38%] flex flex-col gap-5">
                            <div className="flex-1 rounded-[28px] p-7 flex flex-col justify-between text-white" style={{ background: "#12162B" }}>
                                <div>
                                    <h3 className="text-lg font-semibold mb-1.5">Gestão financeira</h3>
                                    <p className="text-sm text-white/60">Saldo do mês sempre à vista.</p>
                                </div>
                                <div className="flex flex-col gap-2.5 mt-6">
                                    <Row label="Dízimo" value="+R$ 350" color="#4ADE80" />
                                    <Row label="Oferta" value="+R$ 120" color="#4ADE80" />
                                    <Row label="Conta de luz" value="-R$ 80" color="#F87171" />
                                </div>
                            </div>

                            <div className="flex-1 rounded-[28px] p-7 flex flex-col justify-between border" style={{ borderColor: "#E4E6F5" }}>
                                <div>
                                    <h3 className="text-lg font-semibold mb-1.5" style={{ color: "#0B0B0F" }}>Relatórios personalizados</h3>
                                    <p className="text-sm" style={{ color: "#55596B" }}>Prontos em poucos toques.</p>
                                </div>
                                <div className="flex flex-col gap-2.5 mt-6">
                                    <Bar label="Dízimos" pct={60} color="#3A4DE0" />
                                    <Bar label="Ofertas" pct={25} color="#1FAE64" />
                                    <Bar label="Eventos" pct={15} color="#F5A623" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Row 2: Membros + Comunicação */}
                    <div className="flex flex-col md:flex-row gap-5 items-start">
                        <div className="md:w-[38%] rounded-[28px] p-7 flex flex-col justify-between" style={{ background: "#EEF0FC" }}>
                            <div>
                                <h3 className="text-lg font-semibold mb-1.5" style={{ color: "#0B0B0F" }}>Gerenciamento de membros</h3>
                                <p className="text-sm" style={{ color: "#55596B" }}>Cadastro completo e histórico de participação.</p>
                            </div>
                            <div className="flex flex-col gap-3 mt-6">
                                <Person name="Luiz Teixeira" tag="+ Membro" tagColor="#1FAE64" />
                                <Person name="Ana Souza" tag="Aniversário 🎂" tagColor="#3A4DE0" />
                            </div>
                        </div>

                        <div className="md:w-[62%] rounded-[28px] p-7 flex flex-col md:flex-row md:items-center gap-6 border" style={{ borderColor: "#E4E6F5" }}>
                            <div className="md:flex-1">
                                <h3 className="text-lg font-semibold mb-1.5" style={{ color: "#0B0B0F" }}>Comunicação facilitada</h3>
                                <p className="text-sm" style={{ color: "#55596B" }}>Avisos direto para o grupo certo, sem depender de grupo de WhatsApp.</p>
                            </div>
                            <div className="rounded-2xl px-5 py-4 text-sm text-white max-w-[260px] shrink-0" style={{ background: "#3A4DE0" }}>
                                Culto especial domingo às 19h, não falte! 🙏
                                <p className="text-[11px] text-white/70 mt-2">Enviado para Célula Vida Nova</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

function CellNetwork() {
    return (
        <svg width="100%" height="64" viewBox="0 0 320 64" fill="none">
            <line x1="40" y1="32" x2="120" y2="16" stroke="#B9C0F0" strokeWidth="1.5" />
            <line x1="40" y1="32" x2="120" y2="48" stroke="#B9C0F0" strokeWidth="1.5" />
            <line x1="120" y1="16" x2="200" y2="10" stroke="#B9C0F0" strokeWidth="1.5" />
            <line x1="120" y1="16" x2="200" y2="30" stroke="#B9C0F0" strokeWidth="1.5" />
            <line x1="120" y1="48" x2="200" y2="54" stroke="#B9C0F0" strokeWidth="1.5" />
            <circle cx="40" cy="32" r="10" fill="#DDE2F8" stroke="#3A4DE0" strokeWidth="1.4" />
            <circle cx="120" cy="16" r="7" fill="#DDE2F8" stroke="#3A4DE0" strokeWidth="1.2" />
            <circle cx="120" cy="48" r="7" fill="#DDE2F8" stroke="#3A4DE0" strokeWidth="1.2" />
            <circle cx="200" cy="10" r="5.5" fill="#1FAE64" />
            <circle cx="200" cy="30" r="5.5" fill="#DDE2F8" stroke="#3A4DE0" strokeWidth="1.1" />
            <circle cx="200" cy="54" r="5.5" fill="#DDE2F8" stroke="#3A4DE0" strokeWidth="1.1" />
        </svg>
    )
}

function Row({ label, value, color }) {
    return (
        <div className="flex items-center justify-between text-sm">
            <span className="text-white/80">{label}</span>
            <span style={{ color }}>{value}</span>
        </div>
    )
}

function Bar({ label, pct, color }) {
    return (
        <div>
            <div className="flex items-center justify-between text-xs mb-1" style={{ color: "#8A8FA8" }}>
                <span>{label}</span><span>{pct}%</span>
            </div>
            <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "#F1F2F9" }}>
                <div className="h-full rounded-full" style={{ width: `${pct}%`, background: color }} />
            </div>
        </div>
    )
}

function Person({ name, tag, tagColor }) {
    const initials = name.split(" ").map(n => n[0]).slice(0, 2).join("")
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold" style={{ background: "rgba(58,77,224,0.15)", color: "#3A4DE0" }}>
                    {initials}
                </div>
                <span className="text-sm" style={{ color: "#0B0B0F" }}>{name}</span>
            </div>
            <span className="text-xs font-medium" style={{ color: tagColor }}>{tag}</span>
        </div>
    )
}
