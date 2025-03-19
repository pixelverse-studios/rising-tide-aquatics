import { FaInstagram } from 'react-icons/fa'
import { Mail } from 'lucide-react'

import { email } from '@/lib/constants'
import { pageRoutes } from '@/lib/routes'
import NavItems from './nav-items'

export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className="bg-primary text-white">
            <div className="max-w-custom mx-auto px-6 py-8 flex flex-col gap-2">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <div className="w-fit text-center">
                            <img src="/imgs/LogoCap.svg" alt="logo" />
                            <p className="text- font-bold">Tampa Aquatics</p>
                        </div>
                    </div>
                    <div>
                        <p className="text-xl font-semibold pb-4">
                            Quick Links
                        </p>
                        <NavItems
                            footer
                            items={pageRoutes}
                            containerClass="flex-col gap-4 w-fit"
                            itemClass="ml-2 text-lg"
                        />
                    </div>
                    <div>
                        <p className="text-xl font-semibold pb-4">
                            Connect With Us
                        </p>
                        <ul className="flex gap-4 items-center">
                            <li>
                                <a
                                    href="https://www.instagram.com/tampaaquatics/"
                                    target="_blank"
                                >
                                    <FaInstagram className="text-2xl cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-125" />
                                </a>
                            </li>
                            <li>
                                <a href={`mailto:${email}`}>
                                    <Mail className="h-7 w-7 cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-125" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-4 py-6 border-t-2 border-t-white text-center">
                    {year} Tampa Aquatics. All rights reserved.
                </div>
            </div>
        </footer>
    )
}
