import { Game } from "@/types/game";
import Image from "next/image";
import Link from "next/link";

import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function GameCard({ game }: { game: Game }) {
  return (
    <Link href={`/games/${game.slug}`}>
        <Card className="relative mx-auto w-full max-w-sm pt-0">
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
        <CardHeader>
            {/* <CardAction>
            <Badge variant="secondary">Featured</Badge>
            </CardAction> */}
            <CardTitle>{game.name}</CardTitle>
            {/* <CardDescription>
            A practical talk on component APIs, accessibility, and shipping
            faster.
            </CardDescription> */}
        </CardHeader>
        {/* <CardFooter>
            <Button className="w-full">View Event</Button>
        </CardFooter> */}
        </Card>
    </Link>
  )
}