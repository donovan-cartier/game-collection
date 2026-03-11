import Link from "next/link"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Field } from "@/components/ui/field"

export function Header() {
    return (
        <header className="w-full flex items-center justify-between border-b bg-background/50 p-4">
            <p className="text-2xl font-bold tracking-tight">GAME COLLECTION</p>
            <NavigationMenu className="ml-auto">
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                            <Link href="/">Accueil</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                            <Link href="/games">Jeux</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <Field orientation="horizontal">
                            <Input type="search" placeholder="Rechercher un jeu..." />
                            <Button type="submit">Rechercher</Button>
                        </Field>
                    </NavigationMenuItem>

                </NavigationMenuList>
            </NavigationMenu>
        </header>
    )
}