import Image from 'next/image'
import Link from 'next/link'
import { FaInstagram, FaGooglePlay, FaLinkedin } from "react-icons/fa"
import logo from '../../../public/holy.png'

const socialLinks = [
    { href: 'https://play.google.com/store/apps/details?id=com.nextsolutions.holy', icon: FaGooglePlay, label: 'Google Play' },
    { href: 'https://www.instagram.com/appholy/', icon: FaInstagram, label: 'Instagram' },
    { href: 'https://www.linkedin.com/company/next-academy-growth', icon: FaLinkedin, label: 'LinkedIn' },
]

const legalLinks = [
    { label: 'Termos de uso', href: '/legal/termos' },
    { label: 'Política de privacidade', href: '/legal/privacidade' },
    { label: 'Política de reembolso', href: '/legal/reembolso' },
    { label: 'Quem somos', href: '/legal/nos' },
]

export default function Footer() {
    return (
        <footer className="w-full py-16" style={{ background: "#F5F6FD" }}>
            <div className="w-[88vw] max-w-[1100px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

                    <div className="md:col-span-2">
                        <Image src={logo} width={58} alt="Holy" className="mb-5" />
                        <p className="text-sm leading-relaxed max-w-[300px]" style={{ color: "#55596B" }}>
                            Com o Holy você pode facilmente organizar as finanças da igreja, gerenciar membros e promover o crescimento da sua comunidade.
                        </p>
                        <div className="flex gap-3 mt-6">
                            {socialLinks.map(({ href, icon: Icon, label }) => (
                                <Link
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    aria-label={label}
                                    className="w-9 h-9 rounded-full flex items-center justify-center border"
                                    style={{ borderColor: "#E4E6F5", color: "#55596B" }}
                                >
                                    <Icon size={15} />
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-sm font-semibold mb-4" style={{ color: "#3A4DE0" }}>Atendimento</h4>
                        <p className="text-sm" style={{ color: "#55596B" }}>contato@holyapp.com.br</p>
                    </div>

                    <div>
                        <h4 className="text-sm font-semibold mb-4" style={{ color: "#3A4DE0" }}>Suporte</h4>
                        <nav className="flex flex-col gap-2.5">
                            {legalLinks.map(({ label, href }) => (
                                <Link key={label} href={href} target="_blank" className="text-sm hover:opacity-70" style={{ color: "#55596B" }}>
                                    {label}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-3 pt-8 border-t" style={{ borderColor: "#E4E6F5" }}>
                    <p className="text-xs" style={{ color: "#8A8FA8" }}>© 2024 — Alexandre Saints. Todos os direitos reservados.</p>
                    <p className="text-xs" style={{ color: "#8A8FA8" }}>CNPJ: 44.031.553/0001-87</p>
                </div>
            </div>
        </footer>
    )
}
