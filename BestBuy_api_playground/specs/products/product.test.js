'use strict';

const superagent = require('superagent');
require('superagent-retry')(superagent);
const request = require('supertest');
const testData = require('../../testdata/products.json');
const config = require('../../configuration/config.json');

describe('Products API Test', () => {

    let post_id;
    let post_request = testData.product_post_request;
    let patch_request = testData.product_post_request;
    test('Get all the products', async() => {
        const response = await request(config.baseUrl).get('products')
            .set('Content-Type', 'application/json')
            .retry(3);
        await expect(response.statusCode).toBe(200);
        await expect(Object.keys(response.body))
            .toEqual(expect.arrayContaining(Object.keys(testData.product_schema)));
        await expect(response.body.data).toContainEqual(testData.product_data);
    });

    test('Get a product by existing Id', async() => {
        const response = await request(config.baseUrl)
            .get('products/' + testData.product_data.id)
            .set('Content-Type', 'application/json')
            .retry(3);
        await expect(response.statusCode).toBe(200);
        await expect(response.body).toEqual(testData.product_data);
    });

    test('Get a product by non-existing Id', async() => {
        const response = await request(config.baseUrl)
            .get('products/' + testData.no_record_id)
            .set('Content-Type', 'application/json')
            .retry(3);
        await expect(response.statusCode).toBe(404);
        await expect(response.body).toEqual(testData.product_not_found);
    });

    test('Post a product to the service', async() => {
        const response = await request(config.baseUrl)
            .post('products')
            .set('Content-Type', 'application/json')
            .send(post_request)
            .retry(3);
        post_id = await response.body.id;
        await expect(response.statusCode).toBe(201);
    });

    test('Verify the post request data', async() => {
        const response = await request(config.baseUrl)
            .get('products/' + post_id)
            .set('Content-Type', 'application/json')
            .retry(3);
        await expect(response.statusCode).toBe(200);
        await expect(response.body.name).toBe(post_request.name)
        await expect(response.body.type).toBe(post_request.type)
        await expect(response.body.price).toBe(post_request.price)
        await expect(response.body.shipping).toBe(post_request.shipping)
        await expect(response.body.upc).toBe(post_request.upc)
        await expect(response.body.description).toBe(post_request.description)
        await expect(response.body.manufacturer).toBe(post_request.manufacturer)
        await expect(response.body.model).toBe(post_request.model)
        await expect(response.body.url).toBe(post_request.url)
        await expect(response.body.image).toBe(post_request.image)
    });

    test('Post with a bad request should Fail', async() => {
        const response = await request(config.baseUrl)
            .post('products')
            .set('Content-Type', 'application/json')
            .send(testData.product_bad_request)
            .retry(3);
        await expect(response.statusCode).toBe(400);
        await expect(response.body).toEqual(testData.product_bad_response);
    });

    test('Post with a empty body should Fail', async() => {
        const response = await request(config.baseUrl)
            .post('products')
            .set('Content-Type', 'application/json')
            .send('{}')
            .retry(3);
        await expect(response.statusCode).toBe(400);
        await expect(response.body).toEqual(testData.product_empty_post_response);
    });

    test('Patch a product to the service', async() => {
        patch_request.upc = "123456789";
        const response = await request(config.baseUrl)
            .patch('products/' + post_id)
            .set('Content-Type', 'application/json')
            .send(patch_request)
            .retry(3);
        await expect(response.statusCode).toBe(200);
    });

    test('Patch request to a non-exisiting product Id should fail', async() => {
        const response = await request(config.baseUrl)
            .patch('products/' + testData.no_record_id)
            .set('Content-Type', 'application/json')
            .send(patch_request)
            .retry(3);
        await expect(response.statusCode).toBe(404);
        await expect(response.body).toEqual(testData.product_not_found);
    });

    test('Patch request with empty body should not update anything', async() => {
        const response = await request(config.baseUrl)
            .patch('products/' + post_id)
            .set('Content-Type', 'application/json')
            .send('{}')
            .retry(3);
        await expect(response.statusCode).toBe(200);
        await expect(response.body.name).toBe(patch_request.name)
        await expect(response.body.type).toBe(patch_request.type)
        await expect(response.body.price).toBe(patch_request.price)
        await expect(response.body.shipping).toBe(patch_request.shipping)
        await expect(response.body.upc).toBe(patch_request.upc)
        await expect(response.body.description).toBe(patch_request.description)
        await expect(response.body.manufacturer).toBe(patch_request.manufacturer)
        await expect(response.body.model).toBe(patch_request.model)
        await expect(response.body.url).toBe(patch_request.url)
        await expect(response.body.image).toBe(patch_request.image)
    });

    test('Delete a product by product id', async() => {
        const response = await request(config.baseUrl)
            .delete('products/' + post_id)
            .set('Content-Type', 'application/json')
            .retry(3);
        await expect(response.statusCode).toBe(200);
    });

    test('Verify the deletion of product', async() => {
        const response = await request(config.baseUrl)
            .get('products/' + post_id)
            .set('Content-Type', 'application/json')
            .retry(3);
        await expect(response.statusCode).toBe(404);
    });

});