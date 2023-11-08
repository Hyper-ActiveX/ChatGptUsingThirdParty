import { Router } from "express";
import { signUp } from "../controllers/userControlles";

const router = Router();

router.post("signUp/", signUp);