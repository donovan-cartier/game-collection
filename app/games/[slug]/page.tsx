import { fetchGameDetails } from "@/lib/rawg"

export default async function GamePage({params}: {  params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const gameDetails = await fetchGameDetails(slug)

    return (
        <div>
            <h1>Game: {slug}</h1>
            <p>Name: {gameDetails.name}</p>
            <p>desc: {gameDetails.description}</p>
        </div>
    )
}