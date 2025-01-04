import axios from "axios";

const token = process.env.LANGFLOW_TOKEN

export const fetchData = async (prompt: string) => {
    try {
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

        return data
    } catch (error) {
        console.log(error)
        return error
    }
};