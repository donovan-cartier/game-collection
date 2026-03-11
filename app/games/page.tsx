import { GameList } from "@/components/layout/game-list"
import { Heading } from "@/components/ui/heading"
import { Suspense } from "react"
import Loading from "./loading"

export default function BrowseGamesPage() {
  return (
    <div className="container mx-auto py-12 flex flex-col gap-4">
      <Heading>Tous les jeux</Heading>

      <Suspense fallback={<Loading />}>
        <GameList />
      </Suspense>
    </div>
  )
}
