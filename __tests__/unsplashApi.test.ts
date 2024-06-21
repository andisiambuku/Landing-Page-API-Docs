import fetchMock from 'jest-fetch-mock';
import { getAllPhotos, getOnePhoto, getPhotoStatistics, getRandomPhoto } from '@/lib/data/unsplash-data';
import test, { describe, beforeEach } from 'node:test';

fetchMock.enableMocks();

describe('Unsplash API Tests', () => {
    beforeEach(() => {
        fetchMock.resetMocks();
    });

    test('fetches all photos', async () => {
        fetchMock.mockResponseOnce(JSON.stringify([{ id: '1', url: 'http://example.com/photo1' }]));

        const photos = await getAllPhotos();

        expect(photos).toEqual([{ id: '1', url: 'http://example.com/photo1' }]);
        expect(fetchMock).toHaveBeenCalledWith('https://api.unsplash.com/photos?client_id=undefined', {
            method: 'GET',
        });
    });

    test('fetches a single photo by id', async () => {
        const photoId = '1';
        fetchMock.mockResponseOnce(JSON.stringify({ id: '1', url: 'http://example.com/photo1' }));

        const photo = await getOnePhoto(photoId);

        expect(photo).toEqual({ id: '1', url: 'http://example.com/photo1' });
        expect(fetchMock).toHaveBeenCalledWith(`https://api.unsplash.com/photos/${photoId}?client_id=undefined`, {
            method: 'GET',
        });
    });

    test('fetches photo statistics', async () => {
        const photoId = '1';
        fetchMock.mockResponseOnce(JSON.stringify({ id: '1', downloads: 100, views: 1000 }));

        const statistics = await getPhotoStatistics(photoId);

        expect(statistics).toEqual({ id: '1', downloads: 100, views: 1000 });
        expect(fetchMock).toHaveBeenCalledWith(`https://api.unsplash.com/${photoId}/statistics?client_id=undefined`, {
            method: 'GET',
        });
    });

    test('fetches a random photo', async () => {
        fetchMock.mockResponseOnce(JSON.stringify({ id: 'random', url: 'http://example.com/randomphoto' }));

        const randomPhoto = await getRandomPhoto();

        expect(randomPhoto).toEqual({ id: 'random', url: 'http://example.com/randomphoto' });
        expect(fetchMock).toHaveBeenCalledWith('https://api.unsplash.com/photos/random?client_id=undefined', {
            method: 'GET',
        });
    });
});
