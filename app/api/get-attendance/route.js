import { NextResponse } from "next/server";
import { Meta } from "@/models/models";
import { connectToMongoDB } from "@/database/mongo-config";



export const POST = async (req) => {

    const {user} = await req.json()

    console.log("Logging user from API:", user)
    
    try {
        await connectToMongoDB()

        // query meta collection
        const metaArray = await Meta.find({$or: [{teacher: "demo1"}, {teacher: "demo2"}, {teacher: "demo3"}]}).limit(3)
        return NextResponse.json({metaArray})

    } catch (error) {
        console.log("Error getting data from db")
    }

}