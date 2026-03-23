import axios from 'axios';

// Базовый URL для тестов (JSONPlaceholder)
const BASE_URL = 'https://jsonplaceholder.typicode.com';

describe('Интеграционные тесты API (JSONPlaceholder) - Вариант 28', () => {
  
  // 1. Тест метода GET (все записи)
  test('GET /posts должен возвращать статус 200 и массив', async () => {
    const response = await axios.get(`${BASE_URL}/posts`);
    expect(response.status).toBe(200);
    expect(Array.isArray(response.data)).toBe(true);
    expect(response.data.length).toBeGreaterThan(0);
  });

  // 2. Тест метода GET (конкретный пост)
  test('GET /posts/1 должен возвращать объект с правильным ID', async () => {
    const response = await axios.get(`${BASE_URL}/posts/1`);
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('id', 1);
  });

  // 3. Тест метода POST (создание ресурса)
  test('POST /posts должен успешно создавать новый ресурс', async () => {
    const newPost = {
      title: 'Тест Кирилл',
      body: 'Лабораторная работа 4',
      userId: 28
    };
    const response = await axios.post(`${BASE_URL}/posts`, newPost);
    expect(response.status).toBe(201);
    expect(response.data.title).toBe(newPost.title);
  });

  // 4. Тест метода PUT (обновление)
  test('PUT /posts/1 должен обновлять данные', async () => {
    const updatedPost = {
      id: 1,
      title: 'Обновленный заголовок',
      body: 'Обновленное тело',
      userId: 28
    };
    const response = await axios.put(`${BASE_URL}/posts/1`, updatedPost);
    expect(response.status).toBe(200);
    expect(response.data.title).toBe('Обновленный заголовок');
  });

  // 5. Тест метода DELETE (удаление)
  test('DELETE /posts/1 должен возвращать статус успеха', async () => {
    const response = await axios.delete(`${BASE_URL}/posts/1`);
    expect(response.status).toBe(200);
  });
});