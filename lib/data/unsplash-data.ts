
const accessKey: any = process.env.UNSPLASH_ACCESS_KEY;

export async function getAllPhotos() {
  const url = `https://api.unsplash.com/photos?client_id=${accessKey}`;
  try {
    const res = await fetch(url,{
      method: "GET",
    });
    if (!res.ok) {
      throw new Error('Failed to fetch random photo');
    }
    return await res.json();
  } catch (error) {
    throw new Error('Failed to fetch or parse data');
  }
}

export async function getOnePhoto(id: string) {
  const url = `https://api.unsplash.com/photos/${id}?client_id=${accessKey}`;
  try {
    const res = await fetch(url,{
      method: "GET",
    });
    if (!res.ok) {
      throw new Error('Failed to fetch photo');
    }
    return await res.json();
  } catch (error) {
    throw new Error('Failed to fetch or parse data');
  }
}

export async function getPhotoStatistics(id: string) {
  const url = `https://api.unsplash.com/${id}/statistics?client_id=${accessKey}`;
  try {
    const res = await fetch(url,{
      method: "GET",
    });
    if (!res.ok) {
      throw new Error('Failed to fetch photo');
    }
    return await res.json();
  } catch (error) {
    throw new Error('Failed to fetch or parse data');
  }
}

export async function getRandomPhoto() {
  const url = `https://api.unsplash.com/photos/random?client_id=${accessKey}`;
  try {
    const res = await fetch(url,{
      method: "GET",
    });
    if (!res.ok) {
      throw new Error('Failed to fetch random photo');
    }
    return await res.json();
  } catch (error) {
    throw new Error('Failed to fetch or parse data');
  }
}