import { GameCard } from "@/components/ui/game-card"
import { fetchGames } from "@/lib/rawg"
import { CollectionGame } from "@/types/game"


export async function GameList({ search = "" }: { search?: string }) {
    const games = await fetchGames(search)
    
    return (
       <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {games.map((game: CollectionGame) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    )
}