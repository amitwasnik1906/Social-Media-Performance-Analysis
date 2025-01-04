import About from "@/components/About";
import AnalyzeText from "@/components/AnalyzeText";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { fetchData } from "@/lib/fetchAction";

export default async function Home() {
  // const res = await fetchData("Analyze the provided social media engagement data and return a concise summary with average likes, comments, and shares for each post type (e.g., carousel, reels, static images). Additionally, provide a brief insight into the best-performing post type and a short recommendation for optimizing engagement. Ensure the output is suitable for direct visualization in graphs")

  // const output = res.outputs[0].outputs[0].artifacts?.message
  // console.log(output)
  // const text = output

  const text = `
    Post Type,Average Likes,Average Comments,Average Shares
    Carousel,128.24,62.44,43.64
    Reel,107.11,55.67,34.44
    Static_Image,51.12,27.24,16.00
    Insight: Carousels have the highest average engagement across all metrics (likes, comments, shares), significantly outperforming other post types. Reels also perform well, especially in terms of likes and comments, exceeding static images.
    Recommendation: Focus on creating more carousel posts to maximize overall engagement. Experiment with interactive elements within carousels (e.g., polls, quizzes) to further boost interaction. While Reels show strong performance, explore incorporating calls to action to potentially improve share counts. Static images could benefit from more engaging visuals and captions to increase interaction.
  `;

  return (
    <div>
      <Header />

      <div className="px-36 justify-center items-center">
        <div className="py-10 flex justify-center">
          <h1><a className="btn-shine">Social Media Performance Analysis</a></h1>
        </div>
        <AnalyzeText text = {text}/>

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
