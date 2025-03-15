'use client'

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuContent
} from '@/components/ui/navigation-menu'
import { headerRoutes } from '@/lib/routes'
import { Button } from '../ui/button'

export default function FloatingHeader() {
    return (
        <header className="w-screen h-8">
            <nav className="fixed top-4 left-0 right-0 mx-auto z-10 bg-[rgba(255,255,255,0.5)] p-6 rounded-lg max-w-[40rem] flex gap-6">
                <ul className="flex gap-6">
                    {/* <NavigationMenuList className="space-x-6"> */}
                    {headerRoutes.map(link => {
                        return <li>{link.label}</li>
                    })}
                </ul>
                <Button>Contact</Button>
                {/* </NavigationMenuList> */}
            </nav>
        </header>
    )
}
