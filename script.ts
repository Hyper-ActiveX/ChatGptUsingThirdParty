import { PrismaClient } from '@prisma/client'

import express from "express";

import dotenv from 'dotenv'
const prisma = new PrismaClient()

const app=express();

dotenv.config()

const PORT = process.env.PORT;

app.get("/", (_, res) => res.send("Hello From Price Tracker Backend"));
app.listen(PORT, async () => {
  
  try {
    console.info(`Server running at PORT:${PORT}`);
  } catch (err) {
    console.log(err);
  }
});

// app.post("/", async (req:any , res:any) => {
//   const data= req.body;

//   try {
//     const user = client.user;
//   } catch (err) {
    
//   }
// })









async function main() {
    // ... you will write your Prisma Client queries here
    const allUsers = await prisma.user.findMany()
    console.log(allUsers)
    console.log("hii")
  }
  
  main()
    .then(async () => {
      await prisma.$disconnect()
    })
    .catch(async (e) => {
      console.error(e)
      await prisma.$disconnect()
      process.exit(1)
    })