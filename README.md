# web-crawler

Thing done by this web-crawler
---
Recursively crawls https://stackoverflow.com/questions using Node.js based crawler, harvests all questions on Stack Overflow and stores them in MongoDB Database. 

What exactly will be stored

1. Every unique URL (Stack Overflow question).
2. The total reference count for every URL (How many time this URL was encountered).
3. Total # of upvotes and total # of answers for every question.


Finally it dumps the data in a CSV file when the user kills the script.


Project Setup 
---

1. Install npm package required by the project using the command
  
    ```
    npm install 
    ```

2. Create a config.env file in root folder of the project and add these line with connection of your mongoDB database
   
   ```
   DATABASE=YOUR_MONGODB_DATABASE_CONNECTION_URI
   ```
  
3. To start the script 
    
   ```
   npm start
   ```
