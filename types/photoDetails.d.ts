export type photoDetails =  {
    "id": string,
    "slug": string,
    "created_at": string,
    "updated_at": string,
    "promoted_at": string,
    "width": number,
    "height": number,
    "color": string,
    "blur_hash": string,
    "description": string,
    "alt_description": string,
    "urls": {
      "raw": string,
      "full": string,
      "regular": string,
      "small": string,
      "thumb": string,
      "small_s3": string,
    },
    "links": {
      "self": string,
      "html": string,
      "download": string,
      "download_location": string,
    },
    "likes": number,
    "sponsorship": string,
    "asset_type": string,
    "user": {
      "id": string,
      "updated_at": string,
      "username": string,
      "name": string,
      "twitter_username": string,
      "portfolio_url": string,
      "bio": string,
      "location": string,
      "profile_image": ProfileImage,
      "instagram_username": string,
      "for_hire": boolean,
    }
  }
  type ProfileImage = {
    "small": string;
    "medium": string;
    "large": string;
  }