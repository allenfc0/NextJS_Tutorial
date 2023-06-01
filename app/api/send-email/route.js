
import { NextResponse } from "next/server";
import { HANDLE_URL } from "./URL";

const DATA_SOURCE_URL = "";


export async function POST(req) {
    const { email, title } = await req.json();

    console.log(email, title);

    return NextResponse.json({message: "post successfull"}, {status: 200});
    
    /* const res = await fetch(`${HANDLE_URL}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email, title
        })
    }) */ 
} 

/* export async function POST(req, res) {
    //res.status(200).json({pageName: "Home Page"});

    const { method, query } = req;
    console.log("method: ", method, query);

    switch(method) {
        case 'GET':
            // Get data
            res.status(200).json({"response": "Successfull GET"});
            break;
        case 'POST': 
            res.status(200).json({response: "Successfull POST"});
            break;
        default:
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${method} Not Allowed`)
    }
    

} */
