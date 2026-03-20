import { Heading } from "@/components/ui/heading";
import { CollectionList } from "@/components/layout/collection-list";

export default function CollectionPage() {
  return (
    <div className="container mx-auto py-12 flex flex-col gap-4">
      <Heading>Ma collection</Heading>

        <CollectionList/>
    </div>
  )
}