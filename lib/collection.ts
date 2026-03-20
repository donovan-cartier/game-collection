import { CollectionGame, Game } from "@/types/game";

const STORAGE_KEY = "collection";

// Utilities
function readCollection(): CollectionGame[] {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        const parsed: unknown = JSON.parse(raw || "[]");
        return Array.isArray(parsed) ? (parsed as CollectionGame[]) : [];
    } catch {
        return [];
    }
}

function writeCollection(collection: CollectionGame[]): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(collection));
}

// Public functions
export function addToCollection(game: CollectionGame) {
    const collection = readCollection();
    if (collection.some((g) => g.id === game.id)) return;
    writeCollection([...collection, game]);
}

export function removeFromCollection(game: CollectionGame) {
    const collection = readCollection();
    writeCollection(collection.filter((g) => g.id !== game.id));
}

export function getCollection(): CollectionGame[] {
    return readCollection();
}

export function isInCollection(gameId: number): boolean {
    return readCollection().some((game) => game.id === gameId);
}

export function toCollectionGame(game: Game): CollectionGame {
  return {
    id: game.id,
    name: game.name,
    slug: game.slug,
    background_image: game.background_image
  }
}