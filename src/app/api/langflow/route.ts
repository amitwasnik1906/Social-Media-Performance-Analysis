import { NextResponse } from 'next/server';
import axios from 'axios';

const token = process.env.LANGFLOW_TOKEN;

export async function POST(request: Request) {
    try {
        const { prompt } = await request.json();

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        };

        const { data } = await axios.post('https://api.langflow.astra.datastax.com/lf/31bafa26-ffd7-4262-8193-4ecbdf520091/api/v1/run/3dbb9ee6-a13e-49a5-93cc-67f23769e705?stream=false', {
            input_value: prompt,
            output_type: "chat",
            input_type: "chat",
        }, config);

        return NextResponse.json(data.outputs[0].outputs[0].artifacts?.message);
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

export const GET = async () => {

    return NextResponse.json({
        message: "You are here"
    }, {
        status: 200
    })
}