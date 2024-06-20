import ResponseParams from "@/components/response-params";
import ResponseSection from "@/components/response-section";

const linkRel = [
  { contentOne: 'self', contentTwo: 'API location of this photo' },
  { contentOne: 'html', contentTwo: 'HTML location of this photo' },
  { contentOne: 'download', contentTwo: 'Download location of this photo' },
];

const listPhotos = [
  { contentOne: 'page', contentTwo: 'Page number to retrieve. (Optional; default: 1)' },
  { contentOne: 'per_page', contentTwo: 'Number of items per page. (Optional; default: 10)' },
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
  { contentOne: 'exif[model]', contentTwo: 'The model of the camera  (Optional)' },
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
  const listRes = `200 OK
    Link: <https://api.unsplash.com/photos?page=1>; rel="first", <https://api.unsplash.com/photos?page=1>; rel="prev", <https://api.unsplash.com/photos?page=346>; rel="last", <https://api.unsplash.com/photos?page=3>; rel="next"
    X-Ratelimit-Limit: 1000
    X-Ratelimit-Remaining: 999`;
  const listResExample = `[
  {
    "id": "LBI7cgq3pbM",
    "created_at": "2016-05-03T11:00:28-04:00",
    "updated_at": "2016-07-10T11:00:01-05:00",
    "width": 5245,
    "height": 3497,
    "color": "#60544D",
    "blur_hash": "LoC%a7IoIVxZ_NM|M{s:%hRjWAo0",
    "likes": 12,
    "liked_by_user": false,
    "description": "A man drinking a coffee.",
    "user": {
      "id": "pXhwzz1JtQU",
      "username": "poorkane",
      "name": "Gilbert Kane",
      "portfolio_url": "https://theylooklikeeggsorsomething.com/",
      "bio": "XO",
      "location": "Way out there",
      "total_likes": 5,
      "total_photos": 74,
      "total_collections": 52,
      "instagram_username": "instantgrammer",
      "twitter_username": "crew",
      "profile_image": {
        "small": "https://images.unsplash.com/face-springmorning.jpg?q=80&fm=jpg&crop=faces&fit=crop&h=32&w=32",
        "medium": "https://images.unsplash.com/face-springmorning.jpg?q=80&fm=jpg&crop=faces&fit=crop&h=64&w=64",
        "large": "https://images.unsplash.com/face-springmorning.jpg?q=80&fm=jpg&crop=faces&fit=crop&h=128&w=128"
      },
      "links": {
        "self": "https://api.unsplash.com/users/poorkane",
        "html": "https://unsplash.com/poorkane",
        "photos": "https://api.unsplash.com/users/poorkane/photos",
        "likes": "https://api.unsplash.com/users/poorkane/likes",
        "portfolio": "https://api.unsplash.com/users/poorkane/portfolio"
      }
    },
    "current_user_collections": [ // The *current user's* collections that this photo belongs to.
      {
        "id": 206,
        "title": "Makers: Cat and Ben",
        "published_at": "2016-01-12T18:16:09-05:00",
        "last_collected_at": "2016-06-02T13:10:03-04:00",
        "updated_at": "2016-07-10T11:00:01-05:00",
        "cover_photo": null,
        "user": null
      },
      // ... more collections
    ],
    "urls": {
      "raw": "https://images.unsplash.com/face-springmorning.jpg",
      "full": "https://images.unsplash.com/face-springmorning.jpg?q=75&fm=jpg",
      "regular": "https://images.unsplash.com/face-springmorning.jpg?q=75&fm=jpg&w=1080&fit=max",
      "small": "https://images.unsplash.com/face-springmorning.jpg?q=75&fm=jpg&w=400&fit=max",
      "thumb": "https://images.unsplash.com/face-springmorning.jpg?q=75&fm=jpg&w=200&fit=max"
    },
    "links": {
      "self": "https://api.unsplash.com/photos/LBI7cgq3pbM",
      "html": "https://unsplash.com/photos/LBI7cgq3pbM",
      "download": "https://unsplash.com/photos/LBI7cgq3pbM/download",
      "download_location": "https://api.unsplash.com/photos/LBI7cgq3pbM/download"
    }
  },
  // ... more photos
]
`;
  const getRes = `200 OK
X-Ratelimit-Limit: 1000
X-Ratelimit-Remaining: 999`;
  const getResExample = `{
  "id": "Dwu85P9SOIk",
  "created_at": "2016-05-03T11:00:28-04:00",
  "updated_at": "2016-07-10T11:00:01-05:00",
  "width": 2448,
  "height": 3264,
  "color": "#6E633A",
  "blur_hash": "LFC$yHwc8^$yIAS$%M%00KxukYIp",
  "downloads": 1345,
  "likes": 24,
  "liked_by_user": false,
  "public_domain": false,
  "description": "A man drinking a coffee.",
  "exif": {
    "make": "Canon",
    "model": "Canon EOS 40D",
    "name": "Canon, EOS 40D",
    "exposure_time": "0.011111111111111112",
    "aperture": "4.970854",
    "focal_length": "37",
    "iso": 100
  },
  "location": {
    "city": "Montreal",
    "country": "Canada",
    "position": {
      "latitude": 45.473298,
      "longitude": -73.638488
    }
  },
  "tags": [
    { "title": "man" },
    { "title": "drinking" },
    { "title": "coffee" }
  ],
  "current_user_collections": [ // The *current user's* collections that this photo belongs to.
    {
      "id": 206,
      "title": "Makers: Cat and Ben",
      "published_at": "2016-01-12T18:16:09-05:00",
      "last_collected_at": "2016-06-02T13:10:03-04:00",
      "updated_at": "2016-07-10T11:00:01-05:00",
      "cover_photo": null,
      "user": null
    },
    // ... more collections
  ],
  "urls": {
    "raw": "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d",
    "full": "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg",
    "regular": "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=1080&fit=max",
    "small": "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=400&fit=max",
    "thumb": "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=200&fit=max"
  },
  "links": {
    "self": "https://api.unsplash.com/photos/Dwu85P9SOIk",
    "html": "https://unsplash.com/photos/Dwu85P9SOIk",
    "download": "https://unsplash.com/photos/Dwu85P9SOIk/download"
    "download_location": "https://api.unsplash.com/photos/Dwu85P9SOIk/download"
  },
  "user": {
    "id": "QPxL2MGqfrw",
    "updated_at": "2016-07-10T11:00:01-05:00",
    "username": "exampleuser",
    "name": "Joe Example",
    "portfolio_url": "https://example.com/",
    "bio": "Just an everyday Joe",
    "location": "Montreal",
    "total_likes": 5,
    "total_photos": 10,
    "total_collections": 13,
    "links": {
      "self": "https://api.unsplash.com/users/exampleuser",
      "html": "https://unsplash.com/exampleuser",
      "photos": "https://api.unsplash.com/users/exampleuser/photos",
      "likes": "https://api.unsplash.com/users/exampleuser/likes",
      "portfolio": "https://api.unsplash.com/users/exampleuser/portfolio"
    }
  }
}
`;

  const randomResExampleNoCount = `{
  "id": "Dwu85P9SOIk",
  "created_at": "2016-05-03T11:00:28-04:00",
  "updated_at": "2016-07-10T11:00:01-05:00",
  "width": 2448,
  "height": 3264,
  "color": "#6E633A",
  "blur_hash": "LFC$yHwc8^$yIAS$%M%00KxukYIp",
  "downloads": 1345,
  "likes": 24,
  "liked_by_user": false,
  "description": "A man drinking a coffee.",
  "exif": {
    "make": "Canon",
    "model": "Canon EOS 40D",
    "exposure_time": "0.011111111111111112",
    "aperture": "4.970854",
    "focal_length": "37",
    "iso": 100
  },
  "location": {
    "name": "Montreal, Canada",
    "city": "Montreal",
    "country": "Canada",
    "position": {
      "latitude": 45.473298,
      "longitude": -73.638488
    }
  },
  "current_user_collections": [ // The *current user's* collections that this photo belongs to.
    {
      "id": 206,
      "title": "Makers: Cat and Ben",
      "published_at": "2016-01-12T18:16:09-05:00",
      "last_collected_at": "2016-06-02T13:10:03-04:00",
      "updated_at": "2016-07-10T11:00:01-05:00",
      "cover_photo": null,
      "user": null
    },
    // ... more collections
  ],
  "urls": {
    "raw": "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d",
    "full": "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg",
    "regular": "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=1080&fit=max",
    "small": "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=400&fit=max",
    "thumb": "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=200&fit=max"
  },
  "links": {
    "self": "https://api.unsplash.com/photos/Dwu85P9SOIk",
    "html": "https://unsplash.com/photos/Dwu85P9SOIk",
    "download": "https://unsplash.com/photos/Dwu85P9SOIk/download"
    "download_location": "https://api.unsplash.com/photos/Dwu85P9SOIk/download"
  },
  "user": {
    "id": "QPxL2MGqfrw",
    "updated_at": "2016-07-10T11:00:01-05:00",
    "username": "exampleuser",
    "name": "Joe Example",
    "portfolio_url": "https://example.com/",
    "bio": "Just an everyday Joe",
    "location": "Montreal",
    "total_likes": 5,
    "total_photos": 10,
    "total_collections": 13,
    "instagram_username": "instantgrammer",
    "twitter_username": "crew",
    "links": {
      "self": "https://api.unsplash.com/users/exampleuser",
      "html": "https://unsplash.com/exampleuser",
      "photos": "https://api.unsplash.com/users/exampleuser/photos",
      "likes": "https://api.unsplash.com/users/exampleuser/likes",
      "portfolio": "https://api.unsplash.com/users/exampleuser/portfolio"
    }
  }
}
`;
  const randomResExampleCount = `[
  {
    "id": "Dwu85P9SOIk",
    "created_at": "2016-05-03T11:00:28-04:00",
    "updated_at": "2016-07-10T11:00:01-05:00",
    "width": 2448,
    "height": 3264,
    "color": "#6E633A",
    "blur_hash": "LFC$yHwc8^$yIAS$%M%00KxukYIp",
    "downloads": 1345,
    "likes": 24,
    "liked_by_user": false,
    "description": "A man drinking a coffee.",
    "exif": {
      "make": "Canon",
      "model": "Canon EOS 40D",
      "exposure_time": "0.011111111111111112",
      "aperture": "4.970854",
      "focal_length": "37",
      "iso": 100
    },
    "location": {
      "name": "Montreal, Canada",
      "city": "Montreal",
      "country": "Canada",
      "position": {
        "latitude": 45.473298,
        "longitude": -73.638488
      }
    },
    "current_user_collections": [ // The *current user's* collections that this photo belongs to.
      {
        "id": 206,
        "title": "Makers: Cat and Ben",
        "published_at": "2016-01-12T18:16:09-05:00",
        "last_collected_at": "2016-06-02T13:10:03-04:00",
        "updated_at": "2016-07-10T11:00:01-05:00",
        "cover_photo": null,
        "user": null
      },
      // ... more collections
    ],
    "urls": {
      "raw": "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d",
      "full": "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg",
      "regular": "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=1080&fit=max",
      "small": "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=400&fit=max",
      "thumb": "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=200&fit=max"
    },
    "links": {
      "self": "https://api.unsplash.com/photos/Dwu85P9SOIk",
      "html": "https://unsplash.com/photos/Dwu85P9SOIk",
      "download": "https://unsplash.com/photos/Dwu85P9SOIk/download"
      "download_location": "https://api.unsplash.com/photos/Dwu85P9SOIk/download"
    },
    "user": {
      "id": "QPxL2MGqfrw",
      "updated_at": "2016-07-10T11:00:01-05:00",
      "username": "exampleuser",
      "name": "Joe Example",
      "portfolio_url": "https://example.com/",
      "bio": "Just an everyday Joe",
      "location": "Montreal",
      "total_likes": 5,
      "total_photos": 10,
      "total_collections": 13,
      "instagram_username": "instantgrammer",
      "twitter_username": "crew",
      "links": {
        "self": "https://api.unsplash.com/users/exampleuser",
        "html": "https://unsplash.com/exampleuser",
        "photos": "https://api.unsplash.com/users/exampleuser/photos",
        "likes": "https://api.unsplash.com/users/exampleuser/likes",
        "portfolio": "https://api.unsplash.com/users/exampleuser/portfolio"
      }
    }
  },
  // ... more photos
]`;

  const statsResExample = `{
    "id": "LF8gK8-HGSg",
    "downloads": {
        "total": 49771,
        "historical": {
            "change": 1474, // total number of downloads for the past 30 days
            "resolution": "days",
            "quantity": 30,
            "values": [
              { "date": "2017-02-07", "value": 6 },
              { "date": "2017-02-08", "value": 102 },
              { "date": "2017-02-09", "value": 82 },
              { "date": "2017-02-10", "value": 63 },
              { "date": "2017-02-11", "value": 37 },
              { "date": "2017-02-12", "value": 33 },
              { "date": "2017-02-13", "value": 62 },
              { "date": "2017-02-14", "value": 59 },
              { "date": "2017-02-15", "value": 64 },
              { "date": "2017-02-16", "value": 46 },
              { "date": "2017-02-17", "value": 49 },
              { "date": "2017-02-18", "value": 21 },
              { "date": "2017-02-19", "value": 32 },
              { "date": "2017-02-20", "value": 55 },
              { "date": "2017-02-21", "value": 53 },
              { "date": "2017-02-22", "value": 48 },
              { "date": "2017-02-23", "value": 59 },
              { "date": "2017-02-24", "value": 60 },
              { "date": "2017-02-25", "value": 21 },
              { "date": "2017-02-26", "value": 14 },
              { "date": "2017-02-27", "value": 44 },
              { "date": "2017-02-28", "value": 58 },
              { "date": "2017-03-01", "value": 47 },
              { "date": "2017-03-02", "value": 60 },
              { "date": "2017-03-03", "value": 42 },
              { "date": "2017-03-04", "value": 23 },
              { "date": "2017-03-05", "value": 24 },
              { "date": "2017-03-06", "value": 55 },
              { "date": "2017-03-07", "value": 64 },
              { "date": "2017-03-08", "value": 37 }
            ] // array of hashes with all the dates requested and number of new downloads for each date
        }
    },
    "views": {
        "total": 5165988,
        "historical": {
            "change": 165009, // total number of views for the past 30 days
            "resolution": "days",
            "quantity": 30,
            "values": [
              { "date": "2017-02-07", "value": 8422 },
              { "date": "2017-02-08", "value": 8770 },
              { "date": "2017-02-09", "value": 8625 },
              { "date": "2017-02-10", "value": 7534 },
              { "date": "2017-02-11", "value": 3812 },
              { "date": "2017-02-12", "value": 4565 },
              { "date": "2017-02-13", "value": 8435 },
              { "date": "2017-02-14", "value": 8054 },
              { "date": "2017-02-15", "value": 7884 },
              { "date": "2017-02-16", "value": 5054 },
              { "date": "2017-02-17", "value": 7518 },
              { "date": "2017-02-18", "value": 3848 },
              { "date": "2017-02-19", "value": 4531 },
              { "date": "2017-02-20", "value": 7990 },
              { "date": "2017-02-21", "value": 9852 },
              { "date": "2017-02-22", "value": 7679 },
              { "date": "2017-02-23", "value": 7664 },
              { "date": "2017-02-24", "value": 6482 },
              { "date": "2017-02-25", "value": 3692 },
              { "date": "2017-02-26", "value": 3908 },
              { "date": "2017-02-27", "value": 9779 },
              { "date": "2017-02-28", "value": 11230 },
              { "date": "2017-03-01", "value": 7243 },
              { "date": "2017-03-02", "value": 7857 },
              { "date": "2017-03-03", "value": 7521 },
              { "date": "2017-03-04", "value": 3779 },
              { "date": "2017-03-05", "value": 4452 },
              { "date": "2017-03-06", "value": 7885 },
              { "date": "2017-03-07", "value": 7649 },
              { "date": "2017-03-08", "value": 7227 }
            ] // array of hashes with all the dates requested and the number of new views for each date
        }
    },
    "likes": {
        "total": 263,
        "historical": {
            "change": 19, // total number of likes for the past 30 days
            "resolution": "days",
            "quantity": 30,
            "values": [
              { "date": "2017-02-07", "value": 2 },
              { "date": "2017-02-08", "value": 0 },
              { "date": "2017-02-09", "value": 2 },
              { "date": "2017-02-10", "value": 0 },
              { "date": "2017-02-11", "value": 0 },
              { "date": "2017-02-12", "value": 0 },
              { "date": "2017-02-13", "value": 0 },
              { "date": "2017-02-14", "value": 1 },
              { "date": "2017-02-15", "value": 3 },
              { "date": "2017-02-16", "value": 0 },
              { "date": "2017-02-17", "value": 1 },
              { "date": "2017-02-18", "value": 0 },
              { "date": "2017-02-19", "value": 1 },
              { "date": "2017-02-20", "value": 1 },
              { "date": "2017-02-21", "value": 0 },
              { "date": "2017-02-22", "value": 0 },
              { "date": "2017-02-23", "value": 0 },
              { "date": "2017-02-24", "value": 0 },
              { "date": "2017-02-25", "value": 0 },
              { "date": "2017-02-26", "value": 2 },
              { "date": "2017-02-27", "value": 0 },
              { "date": "2017-02-28", "value": 1 },
              { "date": "2017-03-01", "value": 1 },
              { "date": "2017-03-02", "value": 1 },
              { "date": "2017-03-03", "value": 1 },
              { "date": "2017-03-04", "value": 0 },
              { "date": "2017-03-05", "value": 0 },
              { "date": "2017-03-06", "value": 1 },
              { "date": "2017-03-07", "value": 0 },
              { "date": "2017-03-08", "value": 1 }
            ] // array of hashes with all the dates requested and the number of new likes for each date
        }
    }
}
`;
  const downloadResExample = `{
  "url": "https://image.unsplash.com/example"
}`
  const updateRes = `201 Created
X-Ratelimit-Limit: 1000
X-Ratelimit-Remaining: 999`
  const updateResExample = `{
  "id": "Dwu85P9SOIk",
  "created_at": "2016-05-03T11:00:28-04:00",
  "updated_at": "2016-07-10T11:00:01-05:00",
  "width": 2448,
  "height": 3264,
  "color": "#6E633A",
  "blur_hash": "LFC$yHwc8^$yIAS$%M%00KxukYIp",
  "downloads": 1345,
  "likes": 24,
  "liked_by_user": false,
  "public_domain": false,
  "description": "A man drinking a coffee.",
  "exif": {
    "make": "Canon",
    "model": "Canon EOS 40D",
    "name": "Canon, EOS 40D",
    "exposure_time": "0.011111111111111112",
    "aperture": "4.970854",
    "focal_length": "37",
    "iso": 100
  },
  "location": {
    "city": "Montreal",
    "country": "Canada",
    "position": {
      "latitude": 45.473298,
      "longitude": -73.638488
    }
  },
  "tags": [
    { "title": "man" },
    { "title": "drinking" },
    { "title": "coffee" }
  ],
  "current_user_collections": [ // The *current user's* collections that this photo belongs to.
    {
      "id": 206,
      "title": "Makers: Cat and Ben",
      "published_at": "2016-01-12T18:16:09-05:00",
      "last_collected_at": "2016-06-02T13:10:03-04:00",
      "updated_at": "2016-07-10T11:00:01-05:00",
      "cover_photo": null,
      "user": null
    },
    // ... more collections
  ],
  "urls": {
    "raw": "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d",
    "full": "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg",
    "regular": "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=1080&fit=max",
    "small": "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=400&fit=max",
    "thumb": "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=200&fit=max"
  },
  "links": {
    "self": "https://api.unsplash.com/photos/Dwu85P9SOIk",
    "html": "https://unsplash.com/photos/Dwu85P9SOIk",
    "download": "https://unsplash.com/photos/Dwu85P9SOIk/download"
    "download_location": "https://api.unsplash.com/photos/Dwu85P9SOIk/download"
  },
  "user": {
    "id": "QPxL2MGqfrw",
    "updated_at": "2016-07-10T11:00:01-05:00",
    "username": "exampleuser",
    "name": "Joe Example",
    "portfolio_url": "https://example.com/",
    "bio": "Just an everyday Joe",
    "location": "Montreal",
    "total_likes": 5,
    "total_photos": 10,
    "total_collections": 13,
    "links": {
      "self": "https://api.unsplash.com/users/exampleuser",
      "html": "https://unsplash.com/exampleuser",
      "photos": "https://api.unsplash.com/users/exampleuser/photos",
      "likes": "https://api.unsplash.com/users/exampleuser/likes",
      "portfolio": "https://api.unsplash.com/users/exampleuser/portfolio"
    }
  }
}
`
  const likeResExample = `{
  "photo": {
    "id": "LF8gK8-HGSg",
    "width": 5245,
    "height": 3497,
    "color": "#60544D",
    "blur_hash": "LED+e[?GI8-PITbwkD$#0M-Tof9b",
    "likes": 10,
    "liked_by_user": true,
    "description": "A man drinking a coffee.",
    "urls": {
      "raw": "https://images.unsplash.com/1/type-away.jpg",
      "full": "https://images.unsplash.com/1/type-away.jpg?q=80&fm=jpg",
      "regular": "https://images.unsplash.com/1/type-away.jpg?q=80&fm=jpg&w=1080&fit=max",
      "small": "https://images.unsplash.com/1/type-away.jpg?q=80&fm=jpg&w=400&fit=max",
      "thumb": "https://images.unsplash.com/1/type-away.jpg?q=80&fm=jpg&w=200&fit=max"
    },
    "links": {
      "self": "http://api.unsplash.com/photos/LF8gK8-HGSg",
      "html": "http://unsplash.com/photos/LF8gK8-HGSg",
      "download": "http://unsplash.com/photos/LF8gK8-HGSg/download"
    }
  },
  "user": {
    "id": "8VpB0GYJMZQ",
    "username": "williamnot",
    "name": "Thomas R.",
    "links": {
      "self": "http://api.unsplash.com/users/williamnot",
      "html": "http://api.unsplash.com/williamnot",
      "photos": "http://api.unsplash.com/users/williamnot/photos",
      "likes": "http://api.unsplash.com/users/williamnot/likes"
    }
  }
}`

  const unlikeResExample = `{
  "photo": {
    "id": "LF8gK8-HGSg",
    "width": 5245,
    "height": 3497,
    "color": "#60544D",
    "blur_hash": "LED+e[?GI8-PITbwkD$#0M-Tof9b",
    "likes": 10,
    "liked_by_user": false,
    "description": "A man drinking a coffee.",
    "urls": {
      "raw": "https://images.unsplash.com/1/type-away.jpg",
      "full": "https://images.unsplash.com/1/type-away.jpg?q=80&fm=jpg",
      "regular": "https://images.unsplash.com/1/type-away.jpg?q=80&fm=jpg&w=1080&fit=max",
      "small": "https://images.unsplash.com/1/type-away.jpg?q=80&fm=jpg&w=400&fit=max",
      "thumb": "https://images.unsplash.com/1/type-away.jpg?q=80&fm=jpg&w=200&fit=max"
    },
    "links": {
      "self": "http://api.unsplash.com/photos/LF8gK8-HGSg",
      "html": "http://unsplash.com/photos/LF8gK8-HGSg",
      "download": "http://unsplash.com/photos/LF8gK8-HGSg/download"
    }
  },
  "user": {
    "id": "8VpB0GYJMZQ",
    "username": "williamnot",
    "name": "Thomas R.",
    "links": {
      "self": "http://api.unsplash.com/users/williamnot",
      "html": "http://api.unsplash.com/williamnot",
      "photos": "http://api.unsplash.com/users/williamnot/photos",
      "likes": "http://api.unsplash.com/users/williamnot/likes"
    }
  }
}`

  return (
    <main className="flex flex-col min-h-screen mt-10 items-center justify-between mb-10">
      <h1 className="text-2xl font-bold">Unsplash Photo Documentation</h1>
      <p>This is the documenation </p>
      <section className="my-4">
      <h2 className="text-xl font-bold">The Endpoint</h2>
        <p className="text-sm py-2 font-semibold mb-4">https://api.unsplash.com/</p>
        <h2 className="text-xl font-bold">Link relations</h2>
        <p className="text-sm py-2">Photos have the following link relations:</p>
        <h3 className="text-lg font-bold">Parameters</h3>
        <ResponseParams headerOne={"Relation"} headerTwo={"Description"} rows={linkRel} />

        <h2 className="text-xl font-bold">List photos</h2>
        <p className="text-sm py-2">Get a single page from the Editorial feed.</p>
        <ResponseSection content="GET /photos" />
        <h3 className="text-lg font-bold">Parameters</h3>
        <ResponseParams headerOne={"Parameter"} headerTwo={"Description"} rows={listPhotos} />
        <h3 className="text-lg font-bold">Response</h3>
        <p className="text-sm py-2">The photo objects returned here are abbreviated. For full details use GET /photos/:id</p>
        <ResponseSection content={listRes} />
        <ResponseSection content={listResExample} />
      </section>
      <section className="my-4">
        <h2 className="text-xl font-bold">Get a photo</h2>
        <p className="text-sm py-2">Retrieve a single photo.</p>
        <ResponseSection content="GET /photos/:id" />
        <h3 className="text-lg font-bold">Parameters</h3>
        <ResponseParams headerOne={"Parameter"} headerTwo={"Description"} rows={getPhoto} />
        <h3 className="text-lg font-bold">Response</h3>
        <ResponseSection content={getRes} />
        <ResponseSection content={getResExample} />
      </section>
      <section className="my-4">
        <h2 className="text-xl font-bold">Get a random photo</h2>
        <p className="text-sm py-2">Retrieve a single random photo, given optional filters.</p>
        <ResponseSection content="GET /photos/random" />
        <h3 className="text-lg font-bold">Parameters</h3>
        <p className="text-sm py-2">All parameters are optional, and can be combined to narrow the pool of photos from which a random one will be chosen.</p>
        <ResponseParams headerOne={"Parameter"} headerTwo={"Description"} rows={getRandomPhoto} />
        <p className="text-sm py-2">Note: You can’t use the collections or topics filtering with query parameters in the same request</p>
        <p className="text-sm py-2">Note: When supplying a count parameter - and only then - the response will be an array of photos, even if the value of count is 1.</p>
        <h3 className="text-lg font-bold">Response</h3>
        <ResponseSection content={getRes} />
        <p className="text-sm py-2">Without the count parameter:</p>
        <ResponseSection content={randomResExampleNoCount} />
        <p className="text-sm py-2">With the count parameter:</p>
        <ResponseSection content={randomResExampleCount} />
      </section>
      <section className="my-4">
        <h2 className="text-xl font-bold">Get a photos statistics</h2>
        <p className="text-sm py-2">Retrieve total number of downloads, views and likes of a single photo, as well as the historical breakdown of these stats in a specific timeframe (default is 30 days).</p>
        <ResponseSection content="GET /photos/:id/statistics" />
        <h3 className="text-lg font-bold">Parameters</h3>
        <ResponseParams headerOne={"Parameter"} headerTwo={"Description"} rows={getPhotoStats} />
        <p className="text-sm py-2">Currently, the only resolution param supported is “days”. The quantity param can be any number between 1 and 30.</p>
        <h3 className="text-lg font-bold">Response</h3>
        <ResponseSection content={getRes} />
        <ResponseSection content={downloadResExample} />
      </section>
      <section className="my-4">
        <h2 className="text-xl font-bold">Track a photo download</h2>
        <p className="text-sm py-2">To abide by the API guidelines, you need to trigger a GET request to this endpoint every time your application performs a download of a photo. To understand what constitutes a download, please refer to the ‘Triggering a download’ guideline.</p>
        <p className="text-sm py-2">This is purely an event endpoint used to increment the number of downloads a photo has. You can think of it very similarly to the pageview event in Google Analytics—where you’re incrementing a counter on the backend. This endpoint is not to be used to embed the photo (use the photo.urls.* properties instead) or to direct the user to the downloaded photo (use the photo.urls.full instead), it is for tracking purposes only.</p>
        <p className="text-sm py-2">Note: This is different than the concept of a view, which is tracked automatically when you hotlink an image</p>
        <ResponseSection content="GET /photos/:id/download" />
        <h3 className="text-lg font-bold">Parameters</h3>
        <ResponseParams headerOne={"Parameter"} headerTwo={"Description"} rows={trackDownload} />
        <h3 className="text-lg font-bold">Response</h3>
        <ResponseSection content={getRes} />
        <ResponseSection content={statsResExample} />
      </section>
      <section className="my-4">
        <h2 className="text-xl font-bold">Update a photo</h2>
        <p className="text-sm py-2">Update a photo on behalf of the logged-in user. This requires the write_photos scope.</p>
        <ResponseSection content="PUT /photos/:id" />
        <h3 className="text-lg font-bold">Parameters</h3>
        <ResponseParams headerOne={"Parameter"} headerTwo={"Description"} rows={updatePhoto} />
        <h3 className="text-lg font-bold">Response</h3>
        <p className="text-sm py-2">Responds with the uploaded photo:</p>
        <ResponseSection content={updateRes} />
        <ResponseSection content={updateResExample} />
      </section>
      <section className="my-4">
        <h2 className="text-xl font-bold">Like a photo</h2>
        <p className="text-sm py-2">Like a photo on behalf of the logged-in user. This requires the write_likes scope.</p>
        <p className="text-sm py-2">Note: This action is idempotent; sending the POST request to a single photo multiple times has no additional effect.</p>
        <ResponseSection content="POST /photos/:id/like" />
        <h3 className="text-lg font-bold">Parameters</h3>
        <ResponseParams headerOne={"Parameter"} headerTwo={"Description"} rows={likePhoto} />
        <h3 className="text-lg font-bold">Response</h3>
        <p className="text-sm py-2">Responds with the abbreviated versions of the user and the liked photo.</p>
        <ResponseSection content={updateRes} />
        <ResponseSection content={likeResExample} />
      </section>
      <section className="my-4">
        <h2 className="text-xl font-bold">Unlike a photo</h2>
        <p className="text-sm py-2">Remove a user’s like of a photo.</p>
        <p className="text-sm py-2">Note: This action is idempotent; sending the DELETE request to a single photo multiple times has no additional effect.</p>
        <ResponseSection content="DELETE /photos/:id/like" />
        <h3 className="text-lg font-bold">Parameters</h3>
        <ResponseParams headerOne={"Parameter"} headerTwo={"Description"} rows={unlikePhoto} />
        <h3 className="text-lg font-bold">Response</h3>
        <p className="text-sm py-2">Responds with a 204 status and an empty body.</p>
        <ResponseSection content={getRes} />
        <ResponseSection content={unlikeResExample} />
      </section>
    </main>
  )
}