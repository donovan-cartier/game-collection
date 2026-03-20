"use client"

import { Button } from "@/components/ui/button"
import { PackagePlus, PackageMinus } from "lucide-react"
import {
    addToCollection,
    removeFromCollection,
    isInCollection,
} from "@/lib/collection"
import { CollectionGame } from "@/types/game"

import { useEffect, useState } from "react"

export function CollectionButton({ game }: { game: CollectionGame }) {
    const [inCollection, setInCollection] = useState(false)

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setInCollection(isInCollection(game.id))
    }, [game.id])

    return !inCollection ? (
        <Button
            variant="default"
            size="sm"
            onClick={() => {
                addToCollection(game)
                setInCollection(true)
            }}
        >
            Ajouter
            <PackagePlus data-icon="inline-end" />
        </Button>
    ) : (
        <Button
            variant="secondary"
            size="sm"
            onClick={() => {
                removeFromCollection(game)
                setInCollection(false)
            }}
        >
            Retirer
            <PackageMinus data-icon="inline-end" />
        </Button>
    )
}