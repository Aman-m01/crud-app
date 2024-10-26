# CRUD Operations in Node.js with Express and MongoDB 
- This is a simple CRUD application built using Node.js, Express, and MongoDB.
## steps to run the project locally 
1. Clone the repository 
   ```bash
   git clone 
   ```
2. Navigate to the project directory
    ```bash
    cd simple-crud-app
   ```

3. Set up environment variables
   ```bash
   # Create a .env file in the root directory and add your MongoDB URI and other configurations.
    PORT=2000
    MONGO_URI=mongodb://localhost:27017/mydatabase
   ```

4. Install dependencies
     ```bash 
    npm install
     ```

5. Start the server
    ```bash 
    npm start
    ```   
## API Endpoints 
### base url: http://localhost:2000/api/users 
```
http method       Endpoint        Description
GET              /api/users       get all users 
GET              /api/users/:id   get a user by ID
POST             /api/users       create a new user
PUT              /api/users/:id   update a user by ID 
DELETE           /api/users/:id   delete a user by ID
```