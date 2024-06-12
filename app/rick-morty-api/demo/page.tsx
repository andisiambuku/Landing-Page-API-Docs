
import { useQuery } from '@apollo/client';
import { GET_ALL_CHARACTERS } from '@/lib/data/rick-morty-queries'


export default function RickMortyDemo() {
    // const { loading, data } = useQuery(GET_ALL_CHARACTERS);
    // console.log(data)
    return (

        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            Rick & Morty Page

        </main>

    )
}