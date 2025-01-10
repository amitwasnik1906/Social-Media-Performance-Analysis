
# **Social Media Performance Analysis**

[![Watch the video](https://img.youtube.com/vi/UuQDxm6AsKw/0.jpg)](https://youtu.be/UuQDxm6AsKw?si=b03NouAH07uytsA6)  
*Click the image above to watch the demo video.*

---

## **Project Overview**  
Social Media Performance Analysis is an analytics module designed to analyze engagement metrics from mock social media accounts. By leveraging tools like **Langflow** and **DataStax Astra DB**, this project delivers data-driven insights to optimize social media strategies.

---

## **Features**

- **Engagement Data Storage**  
  Simulates user engagement data (e.g., likes, comments, shares, and post types) using a Python script and stores it in **DataStax Astra DB**.

- **Data Retrieval & Analysis**  
  - Uses Langflow workflows to retrieve data and calculate average engagement metrics for different post types.  
  - Converts user queries into vector representations for semantic similarity analysis and provides actionable insights.

- **Web Integration**  
  - A Next.js-based web application displays average engagement metrics for each post type.  
  - Offers key insights and tailored recommendations for enhancing engagement.  

- **Interactive Chatbot**  
  - Integrates a chatbot using Langflow APIs to answer user queries based on stored data in Astra DB.

---

## **Tech Stack**

### **Backend**
- Langflow for workflow creation and GPT integration.
- DataStax Astra DB for database operations and data storage.
- Python for data simulation and CSV creation.

### **Frontend**
- Next.js for server-side rendering and API integration.
- Tailwind CSS for responsive and modern UI design.

### **Other Tools**
- Langchain for semantic query embedding.
- OpenAI GPT for generating actionable insights.
- Astra DB APIs for efficient data operations.

---

## **Tools and Technologies**

- **Database:** DataStax Astra DB  
- **AI Integration:** Langflow, OpenAI GPT  
- **Web Framework:** Next.js  
- **UI Styling:** Tailwind CSS  
- **Programming Languages:** Python, TypeScript  
- **Version Control:** Git and GitHub  
- **Others:** Langchain, Vercel (Deployment)

---

## **How It Works**

1. **Data Creation and Storage**
   - Simulated engagement data is generated as a CSV file using Python.  
   - This data is uploaded to **DataStax Astra DB** via the **Load Data Flow** in Langflow.

2. **Data Retrieval and Insights**
   - The **Retriever Flow** queries the database based on user input.
   - Embeddings are calculated for documents and user queries to determine semantic similarity.
   - Results include average engagement metrics and key insights for post optimization.

3. **Web Integration**
   - The Next.js application fetches data from Langflow APIs to display detailed analytics.  
   - Users can interact with the chatbot to ask questions about the stored data.

4. **Key Insights and Recommendations**
   - Insights like "Carousels have the highest engagement" are provided to users.  
   - Recommendations help optimize social media strategies (e.g., using interactive carousels).

---

## **Challenges and Solutions**

### Challenge:  
Encountered a **CORS issue** when connecting Langflow APIs to the web application.  

### Solution:  
Resolved the issue by migrating from React to Next.js for better server-side integration and handling cross-origin requests.

---

## **How to Run Locally**

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/your-username/social-media-performance-analysis.git
   cd social-media-performance-analysis
   npm install
   npm run dev
