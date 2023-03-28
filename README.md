# Verify links from file

This is a project for JavaScript/Node.js learning. It's goal is verify the links from a file, path given, it's working.

This project was made based on an Alura's formation: [Aprenda a programar em JavaScript com foco no back-end](https://cursos.alura.com.br/formacao-js-backend)

## Running project
1. To run, will be necessary have de node installed (v. 18);
2. Then run on terminal (inside the project's directory): 

    ```
        npm install
    ``` 

3. To run the project using the test file and recieve the links list, run on terminal:

    ```
        npm run cli:testfile
    ``` 

4. To run the project using the test file and recieve the links list and it's validation, run on terminal:

    ```
        npm run cli:testfile:validate
    ``` 

5. To run the project using the test directory and recieve the links list, run on terminal:

    ```
        npm run cli:testdirectory
    ``` 

6. To run the project using the test directory and recieve the links list and it's validation, run on terminal:

    ```
        npm run cli:testdirectory:validate
    ``` 

7. If you want to list all URLs from a new .md file, you need to run the follow comand on termial, informing the path for it:

    ```
        npm run cli <path>
    ``` 
    
8. If you want to validate URLs from a new .md file, you need to run the follow comand on termial, informing the path for it:

    ```
        npm run cli <path> --validate
    ``` 