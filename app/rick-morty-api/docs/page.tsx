
import ResponseSection from "@/components/response-section";

export default function RickMortyDocs() {
  const query = `query {
    characters(page: 2, filter: {name: "rick" }) {
      info {
        count
      }
      results {
        name
      }
    }
    location(id: 1) {
      id
    }
    episodesByIds(ids: [1, 2]) {
      id
    }
  }`;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between mx-auto">
      <h1 className="text-2xl font-bold">Rick & Morty GraphQL Documentation</h1>
      <ResponseSection content={query} />
    </main>
  );
}
