import DuvidasFrequentes from "../FrequentlyQuestions"
import { BiPlus } from "react-icons/bi"
import Link from "next/link"

export const SixtyContainer = () => {
    return (
        <div className="w-full py-24 bg-white">
            <div className="w-[88vw] max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-[300px_1fr] gap-14">
                <div>
                    <div className="flex items-center gap-1.5 font-medium text-sm mb-4" style={{ color: "#3A4DE0" }}>
                        FAQ <BiPlus size={16} />
                    </div>
                    <h2 className="text-3xl font-bold leading-tight mb-8" style={{ color: "#0B0B0F" }}>
                        Ainda tem dúvidas?
                    </h2>
                    <Link
                        href="https://play.google.com/store/apps/details?id=com.nextsolutions.holy"
                        target="_blank"
                        className="inline-flex items-center justify-center px-6 py-3 rounded-full text-white text-sm font-medium"
                        style={{ background: "#3A4DE0" }}
                    >
                        Baixar o app
                    </Link>
                </div>
                <div>
                    <DuvidasFrequentes />
                </div>
            </div>
        </div>
    )
}
