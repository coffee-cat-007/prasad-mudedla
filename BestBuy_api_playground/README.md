
# BestBuy_api_playground


### **Basically, In API testing we need to check the following :**
- Validation : To ensure correct development against the stated user needs and requirements (like correct environemnt integration and adherence to standards).
- Functional - To check how the API techincally works. We will cover Testing the schema of request & response, response codes, error handling, edge cases, redirections and consistent results (reliability).
- Load Testing - To check if the API can handle large amount of calls.
- Security Testing - To check if the API has defined security requirements including authentication, authoriation (permissions and access controls).
- Usability - To check how easy it is to use the API.
- Documentation - To check the API documentation is clear and easy to refer.

### **As per the Swagger documentation, Lets divide the test into five parts according to endpoints**
- Products
- Stores
- Services
- Categories
- Utilities

### **All the end points except Utilities supports 4 most popular Http methods such as GET, POST, PATCH and DELETE. For the Utilities only GET method is supported**

* for all the GET requets :
	* Test that ensure a  valid GET request returns a 200-OK status code
	* Test that ensure GET request to a specific resource returns the correct data. For example, GET /products returns a list of products.
	* Test that ensure throwing a 404-Not Found status code if a wrong id has been sent in the GET request.

* for all the POST requests :
	* Test that ensure a valid POST request returns 201-Created status code.
	* Next, Test to ensure that the posted data was saved correctly.
	* Test that ensure POST requests throws 400-Bad Request status code with incorrect/ill-formatted/empty data.

* for all the PATCH requests :
	* Test to ensure valid PATCH request returns 200-OK status code.
	* Test to ensure PATCH requests returns 200-OK status code incase of empty data supplied -- nothing should be updated.
	* Test that ensure patching a invalid product id gives 404-Not FOund status code.

* for all the DELETE requests :
    * Create a new user with a POST request to /products
    * With the user id returned from the POST, make a DELETE request to /products/{{productid}}
    * A subsequent GET request to /products/{{productid}} should throws 404-Not FOund status code.
	* Test that ensure deleting a invalid product throws 404-Not FOund status code

* Querying in GET requests
	* Get products by limit query
	* Get products by applying skip query
	* Get products by applying descending sort query
	* Get products by applying ascending sort query
	* Get the products by applying selected data query
	* Get products by applying type query
	* Get products by applying lte(less than on equal to) price query
	* Get products by applying lt(less than) price query
	* Get products by applying gte(greater than on equal to) price query
	* Get products by applying gt(greater than) price query
	* Get products by applying name and lt(less than) price query
	* Get products by applying name and gt(greater than) price query
	* Get products by applying shipping price lt(less than) query
	* Get products by applying shipping price gt(greater than) query
	* Get products by applying select multiple prices query
	* Get products by applying exclude multiple types query
	* Get products by applying category name query
	* Get products by applying category Id query

### **In the same way, we can extend the tests to services, Stores, Services, Categories and Utilities**

## **Prerequisites**

Make sure the Bestbuy api playground is running at http://localhost:3030

## Running the tests

```bash
git clone https://github.com/coffee-cat-007/prasad-mudedla.git
cd prasad-mudedla/BestBuy_api_playground/
npm install
npm run test

# Reports will be available in Reports folder.

```
## Linting the Code

```
npm run lint
```

## Vulnerability Check(for Dependencies)

```
npm run vulnerabilityCheck
```

## Built With

* [Jest](https://github.com/facebook/jest) - Runner and Assertions
* [Jest Html Reporter](https://github.com/Hargne/jest-html-reporter) - To Generate HTML reports
* [Supertest](https://github.com/visionmedia/supertest) - The library used for HTTP calls. Super-agent driven library for testing node.js HTTP servers using a fluent API
* [Superagent retry](https://github.com/segmentio/superagent-retry) - To add retry functionlaity to supertest.
Extends the node version of visionmedia/superagent's Request, adds a .retry method to add retrying logic to the request. Calling this will retry the request however many additional times you'd like.
* [Superagent](https://github.com/visionmedia/superagent) - Prerequisite for  superagent retry
* [ES Lint](https://github.com/eslint/eslint) - For Linting purpose. Using airbnb linting for this project.
