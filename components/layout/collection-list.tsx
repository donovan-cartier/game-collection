"use client"

import { GameCard } from "@/components/ui/game-card"
import { CollectionGame } from "@/types/game"
import { getCollection } from "@/lib/collection"
import { useState, useEffect } from "react"

export function CollectionList() {
    const [collection, setCollection] = useState<CollectionGame[]>([])

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setCollection(getCollection())
    }, [])

    
    return (
      (collection.length === 0) ? (
        <p>Votre collection est pour le moment vide. Ajoutez des jeux pour les voir apparaître ici.</p>
      ) : (

       <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {collection.map((game: CollectionGame) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    )
  )
}