# PBL6-Travalid
Project at Da Nang University of Technology. PBL6 project (Specialized information system project). The project creates connections between locations of travel companies. The project creates a website and mobile application for customers to choose tourist destinations according to their personal preferences and travel service providers

Steps to create a swagger file (for backend developers):
1. Write API listings with swagger
2. Merge the swagger file you wrote with the previous files
    - Run `cd BackEnd` 
    - Run `npm run create-swagger`

Steps to run Database:
1. Create database:
    - Create new .env file in BackEnd/src/database/prisma as sample .env.example
    - Run `cd BackEnd` command
    - Run `npx prisma db push` command
2. Create sample data:
    - Run `npm run insert-data-test` command

Steps to run this project:
1. Run `npm i` command
2. Run `npm start` command