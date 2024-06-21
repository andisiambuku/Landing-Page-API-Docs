'use client'
// import React from 'react';
// import { useQuery, gql, TypedDocumentNode } from '@apollo/client';
// import { RickMortyDetails } from '@/types/rickmortyDetails';

// interface RickMortyData {
//     rickmortyDetails: RickMortyDetails[];
// }


// const GET_ALL_CHARACTERS: TypedDocumentNode<RickMortyData> = gql`
//  query Character($page: Int!) {
//         characters(page: $page) {
//             results {
//                 id
//                 name
//                 image
//                 status
//                 species
//                 location {
//                     name
//                 }
//             }
//         }
// }
// `;

// export default function RickMortyData() {
//     const { loading, data } = useQuery(GET_ALL_CHARACTERS, {
//         variables: { page: 1 }, 
//       });
//     return (
//         <div>
//             <h3>Character List</h3>
//             {loading ? (
//                 <p>Loading ...</p>
//             ) : (
//                 <table>
//                     <thead>
//                         <tr>
//                             <th>Name</th>
//                             <th>Location</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {data && data.rickmortyDetails.map(character => (
//                             <tr key={character.id}>
//                                 <td>{character.name}</td>
//                                 <td>{character.location.name}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             )}
//         </div>
//     );
// }

// lib/data/rick-morty-data.tsx
import * as React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_ALL_CHARACTERS = gql`
  query GetAllCharacters {
    characters {
      results {
        id
        name
        status
        species
        type
        gender
        image
      }
    }
  }
`;

const RickMortyData: React.FC = () => {

  const { loading, data } = useQuery(GET_ALL_CHARACTERS);

  if (loading) {
    return <div>Loading...</div>; // Loading state or SSR fallback
  }

  return (
    <div>
      {data.characters.results.map((character: any) => (
        <div key={character.id}>
          <h2>{character.name}</h2>
          <img src={character.image} alt={character.name} />
          <p>Status: {character.status}</p>
          <p>Species: {character.species}</p>
          <p>Gender: {character.gender}</p>
        </div>
      ))}
    </div>
  );
};

export default RickMortyData;
