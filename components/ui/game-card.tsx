import { CollectionGame } from "@/types/game";
import Image from "next/image";
import Link from "next/link";

import {
  Card,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { CollectionButton } from "@/components/ui/collection-button"


export function GameCard({ game }: { game: CollectionGame }) {
  return (
      <Card className="relative mx-auto w-full max-w-sm pt-0">
        <Link href={`/games/${game.slug}`}>
            <div className="absolute inset-0 z-30 aspect-square" />
            {game.background_image && (
                <Image
                    src={game.background_image}
                    width="400"
                    height="100"
                    alt="Event cover"
                    className="relative z-20 aspect-square w-full object-cover"
                />
            )}
        </Link>
        <CardHeader className="flex justify-between items-center">
            {/* <CardAction>
            <Badge variant="secondary">Featured</Badge>
            </CardAction> */}
            <CardTitle>{game.name}</CardTitle>
            <CollectionButton game={game}/>

            {/* <CardDescription> */}

            {/* </CardDescription> */}
        </CardHeader>
        {/* <CardFooter>
            <Button className="w-full">View Event</Button>
        </CardFooter> */}
        </Card>
  )
}