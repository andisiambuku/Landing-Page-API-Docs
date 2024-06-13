import ResponseParams from "@/components/response-params";
import ResponseSection from "@/components/response-section";

const linkRel = [
    { contentOne: 'self', contentTwo: 'API location of this photo' },
    { contentOne: 'html', contentTwo: 'HTML location of this photo' },
    { contentOne: 'download', contentTwo: 'Download location of this photo' },
];

const listPhotos = [
    { contentOne: 'page', contentTwo: 'Page number to retrieve. (Optional; default: 1)' },
    { contentOne: 'per_page', contentTwo: 'Number of items per page. (Optional; default: 10)'},
    { contentOne: 'order_by', contentTwo: 'How to sort the photos. Optional. (Valid values; latest, oldest, popular; dafault: latest)' },
];

const getPhoto = [
    { contentOne: 'id', contentTwo: 'The ID of the photo. Required' },
];

const getRandomPhoto = [
    { contentOne: 'collections', contentTwo: 'Public collection ID to filter selection. If multiple, comma-separated' },
    { contentOne: 'topics', contentTwo: 'Public topic ID to filter selection. If multiple, comma-separated' },
    { contentOne: 'username', contentTwo: 'Limit selection to single user' },
    { contentOne: 'query', contentTwo: 'Limit selection to photos matching a search term' },
    { contentOne: 'orientation', contentTwo: 'Filter by photo orientation.(Valid values: landscape, portait, squarish)' },
    { contentOne: 'content_filter', contentTwo: 'Limit results by content safety. Default: low. Valid values are low and high' },
    { contentOne: 'count', contentTwo: 'The number of photos to return. (Default:1; max:30)' },
];

const getPhotoStats = [
    { contentOne: 'id', contentTwo: 'The public id of the photo. Required.' },
    { contentOne: 'resolution', contentTwo: 'The frequency of the stats. (Optional; default: "days")' },
    { contentOne: 'quality', contentTwo: 'The amount of each stat. (Optional; default: 30)' },
];

const trackDownload = [
    { contentOne: 'id', contentTwo: 'The ID of the photo. Required' },
];

const updatePhoto = [
    { contentOne: 'id', contentTwo: 'The ID of the photo. Required' },
    { contentOne: 'description', contentTwo: 'The description of the photo. (Optional)' },
    { contentOne: 'show_on_profile', contentTwo: 'The visibility of the photo. (Optional)' },
    { contentOne: 'tags', contentTwo: 'The tags of the photo. (Optional)' },
    { contentOne: 'location[latitude]', contentTwo: 'The full location latitude (rounded to 6 dedcimals) of the photo(Optional)' },
    { contentOne: 'location[longitude]', contentTwo: 'The full location longitude (rounded to 6 dedcimals) of the photo(Optional)' },
    { contentOne: 'location[name]', contentTwo: 'The full location string of the photo (Optional)' },
    { contentOne: 'location[city]', contentTwo: 'The  city location of the photo (Optional)' },
    { contentOne: 'location[country]', contentTwo: 'The country location of the photo. (Optional)' },
    { contentOne: 'exif[make]', contentTwo: 'The brand of the camera  (Optional)' },
    { contentOne: 'sexif[model]', contentTwo: 'The model of the camera  (Optional)' },
    { contentOne: 'exif[exposure_time]', contentTwo: 'The exposure time of the camera (Optional)' },
    { contentOne: 'exif[aperture_value]', contentTwo: 'The aperture value of the camera (Optional)' },
    { contentOne: 'exif[focal_length]', contentTwo: 'The focal length of the camera  (Optional)' },
    { contentOne: 'exif[iso_speed_ratings]', contentTwo: 'The iso of the camera (Optional)' },
];

const likePhoto = [
    { contentOne: 'id', contentTwo: 'The ID of the photo. Required' },
];

const unlikePhoto = [
    { contentOne: 'id', contentTwo: 'The ID of the photo. Required' },
];

export default function UnsplashDocs() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between mx-auto">
            <h1 className="text-2xl font-bold">Unsplash Photo Documentation</h1>
            <div className="flex flex-col">
                <section>
                   <h2 className="text-xl font-bold">Link relations</h2>
                    <ResponseParams headerOne={"Relation"} headerTwo={"Description"} rows={linkRel} />
                </section>
                <section>
                  <h2 className="text-xl font-bold">List photos</h2>
                    <ResponseParams headerOne={"Parameter"} headerTwo={"Description"} rows={listPhotos} />
                </section>
                <section>
                  <h2 className="text-xl font-bold">Get a photo</h2>
                    <ResponseParams headerOne={"Parameter"} headerTwo={"Description"} rows={getPhoto} />
                </section>
                <section>
                  <h2 className="text-xl font-bold">Get a random photo</h2>
                    <ResponseParams headerOne={"Parameter"} headerTwo={"Description"} rows={getRandomPhoto} />
                </section>
                <section>
                  <h2 className="text-xl font-bold">Get a photos statitics</h2>
                    <ResponseParams headerOne={"Parameter"} headerTwo={"Description"} rows={getPhotoStats} />
                </section>
                <section>
                  <h2 className="text-xl font-bold">Track a photo download</h2>
                    <ResponseParams headerOne={"Parameter"} headerTwo={"Description"} rows={trackDownload} />
                </section>
                <section>
                  <h2 className="text-xl font-bold">Update a photo</h2>
                    <ResponseParams headerOne={"Parameter"} headerTwo={"Description"} rows={updatePhoto} />
                </section>
                <section>
                  <h2 className="text-xl font-bold">Like a photo</h2>
                    <ResponseParams headerOne={"Parameter"} headerTwo={"Description"} rows={likePhoto} />
                </section>
                <section>
                  <h2 className="text-xl font-bold">Unlike a photo</h2>
                    <ResponseParams headerOne={"Parameter"} headerTwo={"Description"} rows={unlikePhoto} />
                </section>
            </div>
        </main>
    )
}