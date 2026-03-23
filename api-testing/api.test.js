import axios from 'axios';

// Базовий URL для тестів (JSONPlaceholder)
const BASE_URL = 'https://jsonplaceholder.typicode.com';

describe('Інтеграційні тести API (JSONPlaceholder) - Варіант 28', () => {
  
  // 1. Тест методу GET (всі записи)
  test('GET /posts має повертати статус 200 та масив', async () => {
    const response = await axios.get(`${BASE_URL}/posts`);
    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
    expect(response.data.length).toBeGreaterThan(0);
  });

  // 2. Тест методу GET (конкретний пост)
  test('GET /posts/1 має повертати об’єкт з правильним ID', async () => {
    const response = await axios.get(`${BASE_URL}/posts/1`);
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('id', 1);
  });

  // 3. Тест методу POST (створення ресурсу)
  test('POST /posts має успішно створювати новий ресурс', async () => {
    const newPost = {
      title: 'Тест Кирило',
      body: 'Лабораторна робота 4',
      userId: 28
    };
    const response = await axios.post(`${BASE_URL}/posts`, newPost);
    expect(response.status).toBe(201);
    expect(response.data.title).toBe(newPost.title);
  });

  // 4. Тест методу PUT (оновлення)
  test('PUT /posts/1 має оновлювати дані', async () => {
    const updatedPost = {
      id: 1,
      title: 'Оновлений заголовок',
      body: 'Оновлене тіло',
      userId: 28
    };
    const response = await axios.put(`${BASE_URL}/posts/1`, updatedPost);
    expect(response.status).toBe(200);
    expect(response.data.title).toBe('Оновлений заголовок');
  });

  // 5. Тест методу DELETE (видалення)
  test('DELETE /posts/1 має повертати статус успіху', async () => {
    const response = await axios.delete(`${BASE_URL}/posts/1`);
    expect(response.status).toBe(200);
  });
});