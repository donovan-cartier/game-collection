import { GameList } from "@/components/layout/game-list"
import { Heading } from "@/components/ui/heading"
import { Suspense } from "react"
import Loading from "./loading"

export default async function BrowseGamesPage({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>
}) {
  const params = await searchParams
  const search = params.query

  return (
    <div className="container mx-auto py-12 flex flex-col gap-4">
      <Heading>Tous les jeux</Heading>

      <Suspense fallback={<Loading />}>
        <GameList search={search}/>
      </Suspense>
    </div>
  )
}
