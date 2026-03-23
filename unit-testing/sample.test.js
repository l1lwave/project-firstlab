import { getSeconds } from './sample.js';

describe('Функції роботи з датою - getSeconds (Варіант 28)', () => {
  
  test('Має повертати коректну кількість секунд для фіксованої дати', () => {
    const date = new Date('2026-03-23T15:00:45');
    expect(getSeconds(date)).toBe(45);
  });

  test('Має повертати 0 на початку хвилини', () => {
    const date = new Date('2026-03-23T15:00:00');
    expect(getSeconds(date)).toBe(0);
  });

  test('Має повертати 59 для останньої секунди хвилини', () => {
    const date = new Date('2026-03-23T15:00:59');
    expect(getSeconds(date)).toBe(59);
  });

  test('Результат має бути числового типу (Number)', () => {
    const date = new Date();
    expect(typeof getSeconds(date)).toBe('number');
  });

  test('Результат не повинен бути більшим або рівним 60', () => {
    const date = new Date();
    expect(getSeconds(date)).toBeLessThan(60);
  });
});
