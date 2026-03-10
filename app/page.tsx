'use client'

import { Button } from "@/components/ui/button"
import { Game } from "@/types/game"
import { fetchGames } from "@/lib/rawg"
import { useState } from "react"
import { GameCard } from "@/components/ui/game-card"

export default function Page() {
  function handleClick() {
    fetchGames("devil may cry").then((data) => {
      setGames(data)
    })
  }

  const [games, setGames] = useState<Game[]>([])

  return (
    <div>
      <h1>Games</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {games.map((game: Game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
      <Button onClick={handleClick}>Test</Button>
    </div>
  )
}
