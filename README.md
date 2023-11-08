﻿# ChatGptUsingThirdParty

## commands to setup the repo   
Go to folder where you want to clone and open terminal  
  ``git clone https://github.com/Hyper-ActiveX/ChatGptUsingThirdParty.git `` 

Next, set up your Prisma project by creating your Prisma schema file with the following command:  
  ``npx prisma``
  ``npx prisma init``

Create a dotenv file and give path accourding to your postgress
  ``DATABASE_URL="postgresql://postgress:randompassword@localhost:5432/chatapp"``  

Install all the Dependancies  

To map your data model to the database schema, you need to use the prisma migrate CLI commands:  
``npx prisma migrate dev --name init``  

To get started with Prisma Client, you need to install the @prisma/client package:
``npm install @prisma/client``

Now run the command 
``npm run dev``

  
  
