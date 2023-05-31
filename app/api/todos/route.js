import { headers } from "next/dist/client/components/headers";
import { NextResponse } from "next/server";

const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos";
const API_KEY = process.env.DATA_SOURCE_URL + "";


export async function GET() {
    const res = await fetch(DATA_SOURCE_URL);

     const todos = await res.json();

     return NextResponse.json(todos);
}

export async function POST(req) {
    const { userId, title } = await req.json();

    if(!userId || !title) return NextResponse.json({'message': "missing required data"});

    const res = await fetch(`${DATA_SOURCE_URL}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'API_Key': API_KEY,
        },
        body: JSON.stringify({
            userId, title, completed: false
        })
    })

    const newTodo = await res.json();

    return NextResponse.json(newTodo);
}

export async function PUT(req) {
    const { userId, id, title } = await req.json();

    if(!userId || !id || !title || typeof(completed) !== 'boolean') return NextResponse.json({'message': "missing required data"});

    const res = await fetch(`${DATA_SOURCE_URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'API_Key': API_KEY,
        },
        body: JSON.stringify({
            userId, title, completed
        })
    })

    const updatedTodo = await res.json();

    return NextResponse.json(updatedTodo);
}

export async function DELETE(req) {
    const { id } = await req.json();

    if(!id) return NextResponse.json({'message': "todo id required"});

    await fetch(`${DATA_SOURCE_URL}/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'API_Key': API_KEY,
        }
    })
    return NextResponse.json({"message": `todo ${id} deleted`});
}