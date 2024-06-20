
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
    <main className="flex min-h-screen mt-10 flex-col items-center justify-between ">
      <h1 className="text-2xl font-bold">Rick & Morty GraphQL Documentation</h1>
      <section className="my-4">
      <h2 className="text-xl font-bold">GraphQL Documentation</h2>
      <p className="text-sm py-2 font-semibold">https://rickandmortyapi.com/graphql</p>
      <ResponseSection content={query} />
      </section>
    </main>
  );
}
