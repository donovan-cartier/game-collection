import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { SiGithub } from "@icons-pack/react-simple-icons";
import Link from "next/link";

export default function HomePage() {

  return (
    <div className="container py-12 mx-auto text-center h-screen flex flex-col justify-center">
      <div className="flex flex-col gap-2">
        <h1 className="scroll-m-20 text-7xl font-extrabold tracking-tight text-balance">Game Collection</h1>
        <p className="leading-7 text-2xl">
          Parcourir, découvrir et organiser votre collection de jeux vidéo.
        </p>
      </div>


      <div className="flex gap-4 justify-center mt-4">
        <Button variant="default" size="lg" asChild>
          <Link href="/games">Parcourir les jeux</Link>
        </Button>

        <Button variant="outline" size="lg" asChild>
          <Link href="https://github.com/donovan-cartier/game-collection" target="_blank" className="flex gap-2 items-center">
            <SiGithub /> Voir le code source
          </Link>
        </Button>

      </div>

      <p className="mt-16 text-sm">Ceci est un projet personnel démontrant l&apos;utilisation de Next.js, couplé à l&apos;API RAWG pour récupérer les données des jeux vidéo.</p>
      <div className="flex justify-center gap-4 mt-4">
        <Link href="https://donovancartier.fr" target="_blank" className="text-sm text-muted-foreground">
          Donovan Cartier
        </Link>

        <Link href="https://rawg.io/apidocs" target="_blank" className="text-sm text-muted-foreground">
          API RAWG
        </Link>
      </div>
    </div>
  )
}
