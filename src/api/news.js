const STRAPI_URL = "http://localhost:1337";
const API_TOKEN = "f880447d79bb4d82109a3403423ea51ef648c787680071b6225be006d6df6f32242d23661478d68889ce7899b376bf4a3010138d106d4e28c32fa51893a96ad25e522667adab0e0aa75c9b7d9f6f9baa39ed4635fb4028a05b1204b5812cac131ed8338a15bc1c865bea9c0f3c54b32e7934fae86a9fe66a87b0c8ab6dbbed19";

export const fetchNews = async () => {
    try {
        // Сортуємо за датою (спочатку новіші) та підтягуємо обкладинку
        const response = await fetch(`${STRAPI_URL}/api/news?sort=publishedDate:desc&populate=cover`, {
            headers: {
                // Якщо використовуєте публічний доступ без токена, цей рядок можна прибрати
                Authorization: `Bearer ${API_TOKEN}`, 
            },
        });

        if (!response.ok) {
            throw new Error("Помилка завантаження новин");
        }

        const data = await response.json();
        return data.data; // Strapi повертає масив у полі data
    } catch (error) {
        console.error("Fetch error:", error);
        return [];
    }
};