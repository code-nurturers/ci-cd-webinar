import { test, expect, request } from '@playwright/test';

test('get candy-locations returns status 200', async ({ request, baseURL }) => {
  const candyLocations = await request.get(baseURL + `/candy-locations`);

  await expect(candyLocations.ok()).toBeTruthy();
});

test('get candy-locations returns correctly formatted body', async ({ request, baseURL }) => {
  const candyLocations = await request.get(baseURL + `/candy-locations`);
  const responseBody = await candyLocations.json();

  await expect(Object.keys(responseBody[0]).length).toEqual(2);
  await expect(responseBody[0]).toHaveProperty('name');
  await expect(responseBody[0]).toHaveProperty('address');
   
});
