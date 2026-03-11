import { GameCard } from "@/components/ui/game-card"
import { fetchGames } from "@/lib/rawg"
import { Game } from "@/types/game"


export async function GameList() {
    const games = await fetchGames("")
    
    return (
       <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {games.map((game: Game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    )
}