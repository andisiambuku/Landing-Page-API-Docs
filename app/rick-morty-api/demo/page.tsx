'use client'
import RickMortyData from '@/lib/data/rick-morty-data';


export default function RickMortyDemo() {

    return (
        <main className="flex min-h-screen mt-10 flex-col items-center justify-between p-24">
            <h1 className="text-2xl font-bold mb-8">Rick & Morty Demo</h1>
            <div className="w-full">
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
                    <RickMortyData/>
                </div>
            </div>
        </main>
    )
}
