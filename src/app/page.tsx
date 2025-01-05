"use client"
import About from "@/components/About";
import AnalyzeText from "@/components/AnalyzeText";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "./loading";

const fetchData = async (prompt: string) => {
  try {
    const { data } = await axios.post('/api/langflow', {
      prompt
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!data) {
      throw new Error('Network response was not ok');
    }
    console.log("in page of fetchdata fun", data);

    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};


export default function Home() {

  const prompt = "Analyze the provided social media engagement data and return a concise summary with average likes, comments, and shares for each post type (e.g., carousel, reels, static images). Additionally, provide a brief insight into the best-performing post type and a short recommendation for optimizing engagement. Ensure the output is suitable for direct visualization in graphs"

  const [text, setText] = useState()

  useEffect(() => {
    const fetchAndSetText = async () => {
      const res = await fetchData(prompt)
      setText(res)
    }
    fetchAndSetText()
  }, [])

  return (
    <div>
      <Header />

      <div className="px-36 justify-center items-center">
        <div className="py-10 flex justify-center">
          <h1><a className="btn-shine">Social Media Performance Analysis</a></h1>
        </div>

        {
          !text ? <Loading /> :
            <AnalyzeText text={text} />
        }

      </div>

      <hr className="border-t border-gray-300 w-full my-10" />

      <div className="px-36 justify-center items-center">
        <h1 id="about"><a className="btn-shine">About</a></h1>
        <About />
      </div>
      <Footer />
    </div>
  );
}
