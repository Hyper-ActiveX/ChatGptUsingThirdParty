import { PrismaClient } from "@prisma/client";
import { Request, Response,NextFunction } from "express";
import brcypt from "bcrypt";
import path from "path";

const prisma = new PrismaClient();

export const signUp = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name, email, password } = req.body;

  
      // Check if a user with the same email already exists
      const existingUser = await prisma.user.findFirst({
        where: {
          email: email,
        },
      });
  
      if (existingUser) {
        return res.status(401).json({
          message: 'User with this email already exists',
        });
      }
  
      // Hash the password
      const passwordHash = await brcypt.hash(password, 10);
  
      // Create a new user
      const newUser = await prisma.user.create({
        data: {
          email,
          name,
          password: passwordHash,
        },
      });
  
      return next();
    } catch (error) {
      // Handle any errors that occurred during the process
      console.error('Error during signup:', error);
      return res.status(500).json({
        message: 'Internal server error',
      });
    }
  };