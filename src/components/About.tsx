"use client"

const About = () => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden" >
      <div className="p-6">
        <div className="text-gray-700 leading-relaxed space-y-4">
          <p>
            Welcome to our Social Media Performance Analysis module! This dynamic tool analyzes and provides insights into social media engagement trends using cutting-edge technologies like DataStax Astra DB and Langflow.
          </p>

          <h3 className="text-lg font-semibold text-gray-800 mt-4">Key Technologies:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>DataStax Astra DB for scalable and reliable cloud-native NoSQL data storage</li>
            <li>Langflow for intuitive workflow automation and processing</li>
            <li>GPT integration for generating AI-driven actionable insights</li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-800 mt-4">How It Works:</h3>
          <p>
            The module starts by storing mock social media engagement data (likes, shares, comments, post types) in DataStax Astra DB. Using Langflow's automated workflow, it processes this data to calculate average engagement metrics across different post types like Carousels, Reels, and Static Images. The integrated GPT model then analyzes these metrics to generate comparative insights and content strategy recommendations.
          </p>

          <h3 className="text-lg font-semibold text-gray-800 mt-4">Development Process:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Created and stored comprehensive mock datasets in Astra DB</li>
            <li>Implemented Langflow workflows for efficient data processing</li>
            <li>Integrated AI capabilities for automated insight generation</li>
            <li>Developed interactive visualization features for better data understanding</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
