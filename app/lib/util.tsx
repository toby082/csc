import axios from 'axios';
import pLimit from 'p-limit';

// Interface for the cat JSON structure
export interface Cat {
    _id: string;
    size: number;
    tags: string[];
    mimetype: string;
    createdAt: string;
    updatedAt: string;
}

const END_POINT = 'https://cataas.com/cat?json=true';
const MAX_PICTURES = 22;
const CONCURRENCY = 3;

// Function to fetch cat JSON from the API
async function fetchCat(): Promise<Cat> {

    try {
        const response = await axios.get<Cat>(END_POINT);
        return response.data;
    } catch (error) {
        console.error('Error fetching cat:', error);
        throw error;
    }
}

// Limiting concurrency to 3 requests at a time
const limit = pLimit(CONCURRENCY);

// Function to fetch 22 cat JSON structures
async function fetchCats(): Promise<Cat[]> {
    const cats: Cat[] = [];
    const promises: Promise<Cat>[] = [];

    for (let i = 0; i < MAX_PICTURES; i++) {
        promises.push(limit(() => fetchCat()));
    }

    const results = await Promise.all(promises);

    results.forEach(cat => {
        cats.push(cat);
    });

    return cats;
}

export default fetchCats