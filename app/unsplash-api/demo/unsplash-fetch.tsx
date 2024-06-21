
import { getAllPhotos } from "@/lib/data/unsplash-data"
import { photoDetails } from "@/types/photoDetails";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image"
import { Card } from "@/components/ui/card";

export default async function UnsplashDemo() {
    const data = await getAllPhotos()

    return (
        <main className="flex min-h-screen mt-10 flex-col items-center justify-between sm:mx-auto p-4">
            <h1 className="text-2xl font-bold mb-8">Unsplash Demo</h1>
            <div className="w-full">
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-fr">
                    {data.map((photo: photoDetails) => (
                        <Card key={photo.id} className="relative p-2 break-inside-avoid" style={{ width: '300px', height: '300px' }}>
                            <Image
                                src={photo.urls.small}
                                alt={photo.description}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-lg"
                            />
                            <div className="absolute bottom-4 left-4 flex items-center p-1 rounded-lg">
                                <Avatar className="flex flex-row">
                                    <AvatarImage src={photo.user.profile_image.small} alt="user profile picture" />
                                    <AvatarFallback>UN</AvatarFallback>
                                </Avatar>
                                <p className="pl-2 text-sm font-bold text-white">{photo.user.name}</p>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </main>
    )
}