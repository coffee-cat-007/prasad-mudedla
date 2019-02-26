'use strict';

const superagent = require('superagent');
require('superagent-retry')(superagent);
const request = require('supertest');
const testData = require('../../testdata/products.json');
const config = require('../../configuration/config.json');

describe('Products API Test', () => {

    test('Get products by limit query', async() => {
        for (let limit = 0; limit < 10; limit++) {
            const response = await request(config.baseUrl)
                .get('products?$limit=' + limit)
                .set('Content-Type', 'application/json')
                .retry(3);
            await expect(response.statusCode).toBe(200);
            await expect(response.body.data.length).toBe(limit);
        }
    });

    test('Get products by applying skip query', async() => {
        let skipArray = [20000, 25000, 30000];
        for (let count = 0; count < skipArray.length; count++) {
            const response = await request(config.baseUrl)
                .get('products?$skip=' + skipArray[count])
                .set('Content-Type', 'application/json')
                .retry(3);
            await expect(response.statusCode).toBe(200);
            await expect(response.body.skip).toBe(skipArray[count]);
        }
    });

    test('Get products by applying descending sort query', async() => {
        let lastprice = 1000000000;
        const response = await request(config.baseUrl)
            .get('products?$sort[price]=-1')
            .set('Content-Type', 'application/json')
            .retry(3);
        await expect(response.statusCode).toBe(200);
        const data = await response.body.data;
        await data.forEach(element => {
            expect(element.price).toBeLessThanOrEqual(lastprice);
            lastprice = element.price;
        });
    });

    test('Get products by applying ascending sort query', async() => {
        let lastprice = 0;
        const response = await request(config.baseUrl)
            .get('products?$sort[price]=1')
            .set('Content-Type', 'application/json')
            .retry(3);
        await expect(response.statusCode).toBe(200);
        const data = await response.body.data;
        await data.forEach(element => {
            expect(element.price).toBeGreaterThanOrEqual(lastprice);
            lastprice = element.price;
        });
    });

    test('Get the products by applying selected data query', async() => {
        const response = await request(config.baseUrl)
            .get('products?$select[]=name&$select[]=price')
            .set('Content-Type', 'application/json')
            .retry(3);
        await expect(response.statusCode).toBe(200);
        const data = await response.body.data;
        await data.forEach(element => {
            expect(Object.keys(element).sort())
                .toEqual(['name', 'price'].sort());
        })
    });

    test('Get products by applying type query', async() => {
        const response = await request(config.baseUrl)
            .get('products?type=' + testData.product_type)
            .set('Content-Type', 'application/json')
            .retry(3);
        await expect(response.statusCode).toBe(200);
        const data = await response.body.data;
        data.forEach(element => {
            expect(element.type).toBe(testData.product_type);
        });
    });

    //Less than or equal to price query
    test('Get products by applying lte price query', async() => {
        const response = await request(config.baseUrl)
            .get('products?price[$lte]=' + testData.product_price)
            .set('Content-Type', 'application/json')
            .retry(3);
        await expect(response.statusCode).toBe(200);
        const data = await response.body.data;
        data.forEach(element => {
            expect(element.price).toBeLessThanOrEqual(testData.product_price);
        });
    });

    //Less than price query
    test('Get products by applying lt price query', async() => {
        const response = await request(config.baseUrl)
            .get('products?price[$lt]=' + testData.product_price)
            .set('Content-Type', 'application/json')
            .retry(3);
        await expect(response.statusCode).toBe(200);
        const data = await response.body.data;
        data.forEach(element => {
            expect(element.price).toBeLessThan(testData.product_price);
        });
    });

    //Greater than or equal to price query
    test('Get products by applying gte price query', async() => {
        const response = await request(config.baseUrl)
            .get('products?price[$gte]=' + testData.product_price)
            .set('Content-Type', 'application/json')
            .retry(3);
        await expect(response.statusCode).toBe(200);
        const data = await response.body.data;
        data.forEach(element => {
            expect(element.price).toBeGreaterThanOrEqual(testData.product_price);
        });
    });

    //Greater than price query
    test('Get products by applying gt price query', async() => {
        const response = await request(config.baseUrl)
            .get('products?price[$gt]=' + testData.product_price)
            .set('Content-Type', 'application/json')
            .retry(3);
        await expect(response.statusCode).toBe(200);
        const data = await response.body.data;
        data.forEach(element => {
            expect(element.price).toBeGreaterThan(testData.product_price);
        });
    });

    //Name and Less than price query
    test('Get products by applying name and price query', async() => {
        const response = await request(config.baseUrl)
            .get('products?name[$like]=*' + testData.product_name + '*&price[$lt]=' + testData.product_price_1)
            .set('Content-Type', 'application/json')
            .retry(3);
        await expect(response.statusCode).toBe(200);
        const data = await response.body.data;
        data.forEach(element => {
            expect(element.price).toBeLessThan(testData.product_price_1);
            expect((element.name).toLowerCase()).toMatch(testData.product_name);
        });
    });

    //Name and Greater than price query
    test('Get products by applying name and price query', async() => {
        const response = await request(config.baseUrl)
            .get('products?name[$like]=*' + testData.product_name + '*&price[$gt]=' + testData.product_price_1)
            .set('Content-Type', 'application/json')
            .retry(3);
        await expect(response.statusCode).toBe(200);
        const data = await response.body.data;
        data.forEach(element => {
            expect(element.price).toBeGreaterThan(testData.product_price_1);
            expect((element.name).toLowerCase()).toMatch(testData.product_name);
        });
    });

    //Shipping price Less than Query
    test('Get products by applying shipping price lt query', async() => {
        const response = await request(config.baseUrl)
            .get('products?shipping[$lt]=' + testData.shipping_price)
            .set('Content-Type', 'application/json')
            .retry(3);
        await expect(response.statusCode).toBe(200);
        const data = await response.body.data;
        data.forEach(element => {
            expect(element.shipping).toBeLessThan(testData.shipping_price);
        });
    });

    //Shipping price Greater than Query
    test('Get products by applying shipping price gt query', async() => {
        const response = await request(config.baseUrl)
            .get('products?shipping[$gt]=' + testData.shipping_price)
            .set('Content-Type', 'application/json')
            .retry(3);
        await expect(response.statusCode).toBe(200);
        const data = await response.body.data;
        data.forEach(element => {
            expect(element.shipping).toBeGreaterThan(testData.shipping_price);
        });
    });

    test('Get products by applying select multiple prices query', async() => {
        const response = await request(config.baseUrl)
            .get('products?type[$in][]=' + testData.product_price + '&type[$in][]=' + testData.product_price_1)
            .set('Content-Type', 'application/json')
            .retry(3);
        await expect(response.statusCode).toBe(200);
        const data = await response.body.data;
        data.forEach(element => {
            expect(element.price).not.toBe(testData.product_price_1);
            expect(element.price).not.toBe(testData.product_price);
        });
    });

    test('Get products by applying exclude multiple types query', async() => {
        const response = await request(config.baseUrl)
            .get('products?type[$nin][]=' + testData.product_type + '&type[$nin][]=' + testData.product_type_1)
            .set('Content-Type', 'application/json')
            .retry(3);
        await expect(response.statusCode).toBe(200);
        const data = await response.body.data;
        data.forEach(element => {
            expect(element.type).not.toBe(testData.product_type);
            expect(element.type).not.toBe(testData.product_type_1);
        });
    });

    test('Get products by applying category name query', async() => {
        const response = await request(config.baseUrl)
            .get('products?category.name=' + testData.product_category)
            .set('Content-Type', 'application/json')
            .retry(3);
        await expect(response.statusCode).toBe(200);
        const data = await response.body.data;
        data.forEach(element => {
            let categories = [];
            const categoryData = element.categories;
            categoryData.forEach(element1 => {
                categories.push(element1.name);
            });
            expect(categories).toEqual(expect.arrayContaining([testData.product_category]));
        });
    });

    test('Get products by applying category Id query', async() => {
        const response = await request(config.baseUrl)
            .get('products?category.id=' + testData.product_category_id)
            .set('Content-Type', 'application/json')
            .retry(3);
        await expect(response.statusCode).toBe(200);
        const data = await response.body.data;
        data.forEach(element => {
            let categoryIds = [];
            const categoryData = element.categories;
            categoryData.forEach(element1 => {
                categoryIds.push(element1.id);
            });
            expect(categoryIds).toEqual(expect.arrayContaining([testData.product_category_id]));
        });
    });

});