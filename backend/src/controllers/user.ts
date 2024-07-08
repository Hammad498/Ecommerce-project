import { NextFunction ,Request,Response} from "express";
import { NewUserRequestBody } from "../types/types.js";
import { User } from "../models/user.js";

export const newUser=async (

    req:Request<{},{},NewUserRequestBody>,
    res:Response,
    next:NextFunction)=>{

        Promise<any>

    try {

        const {name,email,_id,dob,role,gender,photo}=req.body;


        const user= await User.create({

            name,
            email,
            _id,
            dob,
            role,
            gender,
            photo,

        });

        return res.status(200).json({
            success:true,
            message:`Welcome user ${user.name}`
        })

        
    } catch (error) {
        
    }

}