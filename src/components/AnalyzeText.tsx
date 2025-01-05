import React from "react";
import Table from "./Table";

interface PostData {
  type: string;
  likes: number;
  comments: number;
  shares: number;
}

const AnalyzeText = ({ text }: any) => {

  // Extract post data
  const postDataRegex = /(\w+),([\d.]+),([\d.]+),([\d.]+)/g;
  const postData: PostData[] = [];
  let match: RegExpExecArray | null;

  while ((match = postDataRegex.exec(text)) !== null) {
    postData.push({
      type: match[1],
      likes: parseFloat(match[2]),
      comments: parseFloat(match[3]),
      shares: parseFloat(match[4]),
    });
  }

  // Extract insight
  const insight = text.match(/Insight: ([\s\S]*?)Recommendation:/)?.[1]?.trim() || "";

  // Extract recommendation
  const recommendation = text.match(/Recommendation: ([\s\S]*)/)?.[1]?.trim() || "";

  return (
    <div className="container mx-auto">

      <div className="bg-white rounded-lg ">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800">Engagement</h2>
        </div>

        <Table postData={postData} />

        <div className="">
            
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden my-10" id="insights">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800">Key Insight</h2>
        </div>
        <div className="p-6">
          <p className="text-gray-700 leading-relaxed">{insight}</p>
        </div>
      </div>


      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden" id="recommendations">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800">Recommendations</h2>
        </div>
        <div className="p-6">
          <p className="text-gray-700 leading-relaxed">{recommendation}</p>
        </div>
      </div>

    </div>
  );
};

export default AnalyzeText;