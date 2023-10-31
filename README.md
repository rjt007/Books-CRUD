# Books CRUD API
It is a basic CRUD API created using Node.js, Express and MongoDB to manage books.  
This API is deployed on cloud hosting provider *Render*, To access the API use this the link [https://books-4z6s.onrender.com/](https://books-4z6s.onrender.com/).
## Endpoints
### Books

- Add a Book
    - Endpoint: /api/books/
    - Method: POST
    - Description: Add a new book to the database.
    - Request Body:
        ```
        {
            "title": "book title",
            "author": "book author",
            "summary": "book summary"
        }
        ```
    - Response:
        HTTP Status: 201 Created.

- Get list of all Books
    - Endpoint: /api/books/
    - Method: GET
    - Description: Get a list of all books present in Database.
    - Response:
        - HTTP Status: 200 OK
        - A JSON array containing all the books.

- Get a single book
    - Endpoint: /api/books/id
    - Method: GET
    - Description: Get a book with particular ID.
    - Response:
        - HTTP Status: 200 OK
        - A JSON object containing the information about the book.

- Update a book
    - Endpoint: /api/books/id
    - Method: PUT
    - Description: Update a book with particular ID.
    - Request Body:
        ```
        {
            "title": "book title",
            "author": "book author",
            "summary": "book summary"
        }
        ```
    - Response:
        - HTTP Status: 201 Created
        - A JSON object with message that Book updated successfully.
    
- Delete a book
    - Endpoint: /api/books/id
    - Method: DELETE
    - Description: Delete a book with particular ID.
    - Response:
        - HTTP Status: 200 Created
        - A JSON object with message that Book deleted successfully.

## Run on local machine
Steps to be followed to run on local machine.

1. Clone the repository.
    ```
    git clone https://github.com/rjt007/Books-CRUD.git
    ```
2. Run npm install or npm i to download all the required packages.
    ```
    npm install
    ```
3. Create a *.env* file and configure enviroment variables present in the *.env.example* file.

4. Connect to mongoDB Atlas or MongoDB locally in your system.

5. After all the above steps, run this command to start your server.
    ```
    npm run devStart
    ```
## Conclusion
Happy Coding!