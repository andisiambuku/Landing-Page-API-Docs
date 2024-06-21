
import ResponseParams2 from "@/components/response-params-2";
import ResponseSection from "@/components/response-section";
import Link from "next/link";

const characterSchema = [
  { contentOne: 'id', contentTwo: 'int', contentThree: '	The id of the character.' },
  { contentOne: 'name', contentTwo: 'string', contentThree: '	The name of the character.' },
  { contentOne: 'status', contentTwo: 'string', contentThree: '	The status of the character ("Alive", "Dead" or "unknown").' },
  { contentOne: 'species', contentTwo: 'string', contentThree: '	The species of the character.' },
  { contentOne: 'type', contentTwo: 'string', contentThree: '	The type or subspecies of the character.' },
  { contentOne: 'gender', contentTwo: 'string', contentThree: '	The gender of the character ("Female", "Male", "Genderless" or "unknown").' },
  { contentOne: 'origin', contentTwo: 'object', contentThree: '	Name and link to the character`s origin location.' },
  { contentOne: 'location', contentTwo: 'object', contentThree: '	Name and link to the characters last known location endpoint.' },
  { contentOne: 'image', contentTwo: 'string (url)', contentThree: '	Link to the character`s image. All images are 300x300px and most are medium shots or portraits since they are intended to be used as avatars.' },
  { contentOne: 'episode', contentTwo: 'array (urls)', contentThree: '	List of episodes in which this character appeared.' },
  { contentOne: 'url', contentTwo: 'string (url)', contentThree: '	Link to the character`s own URL endpoint.' },
  { contentOne: 'created', contentTwo: 'string', contentThree: '	Time at which the character was created in the database.' },

];

const locationSchema = [
  { contentOne: 'id', contentTwo: 'int', contentThree: 'The id of the location.' },
  { contentOne: 'name', contentTwo: 'string', contentThree: 'The name of the location.' },
  { contentOne: 'type', contentTwo: 'string', contentThree: 'The type of the location.' },
  { contentOne: 'dimension', contentTwo: 'string', contentThree: 'The dimension in which the location is located.' },
  { contentOne: 'residents', contentTwo: 'array (urls)', contentThree: 'List of character who have been last seen in the location.' },
  { contentOne: 'url', contentTwo: 'string (url)', contentThree: 'Link to the location`s own endpoint.' },
  { contentOne: 'created', contentTwo: 'string', contentThree: 'Time at which the location was created in the database.' },
];

const episodeSchema = [
  { contentOne: 'id', contentTwo: '	int', contentThree: '	The id of the episode.' },
  { contentOne: 'name', contentTwo: '	string', contentThree: '	The name of the episode.' },
  { contentOne: 'air_date', contentTwo: '	string', contentThree: '	The air date of the episode.' },
  { contentOne: 'episode', contentTwo: '	string', contentThree: '	The code of the episode.' },
  { contentOne: 'characters', contentTwo: '	array (urls)', contentThree: '	List of characters who have been seen in the episode.' },
  { contentOne: 'url', contentTwo: '	string (url)', contentThree: '	Link to the episode`s own endpoint.' },
  { contentOne: 'created', contentTwo: '	string', contentThree: '	Time at which the episode was created in the database.' },
];


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
    <main className="flex min-h-screen mt-10 flex-col items-center ">
      <h1 className="text-2xl font-bold mb-6">Rick & Morty GraphQL Documentation</h1>
      <h2 className="text-xl font-bold">Getting started</h2>
      <p className="text-sm py-2 max-w-prose leading-relaxed mb-6">This page describes the resources that make up the Rick and Morty GraphQL API. If you are new to GraphQL learn more about it <Link href="https://graphql.org/learn/" className="underline first-line:underline-offset-4 ">here. The schema of the parameters from the endpoint are provided</Link>.</p>
      <p className="text-sm py-2 max-w-prose leading-relaxed mb-6"></p>
      <section className="my-4">
        <h2 className="text-xl font-bold">The Endpoint</h2>
        <Link href="https://rickandmortyapi.com/graphql" className="text-sm my-4 underline first-line:underline-offset-4 ">https://rickandmortyapi.com/graphql</Link>
        <p className="text-sm py-2 font-semibold"></p>
        <ResponseSection content={query} />
      </section>
      <div className="mx-auto">
        <section className="my-4">
          <h2 className="text-xl font-bold">Character Schema</h2>
          <div className="text-sm py-2 max-w-prose leading-relaxed">
          <ResponseParams2  headerOne={"Key"} headerTwo={"Type"} headerThree={"Description"} rows={characterSchema} />
          </div>
        </section>
        <section className="my-4">
          <h2 className="text-xl font-bold">Location Schema</h2>
          <ResponseParams2 headerOne={"Key"} headerTwo={"Type"} headerThree={"Description"} rows={locationSchema} />
        </section>
        <section className="my-4">
          <h2 className="text-xl font-bold">Episode Schema</h2>
          <ResponseParams2 headerOne={"Key"} headerTwo={"Type"} headerThree={"Description"} rows={episodeSchema} />
        </section>
      </div>
    </main>
  );
}
