"use client"

import { useState } from "react"

export function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const projects = [
    {
      id: 1,
      title: "GeoConnect",
      description:
        "A secure full-stack MERN application implementing JWT authentication, REST APIs, CRUD operations, and image upload functionality.",
      tags: ["React", "Node.js", "Express", "MongoDB", "JWT"],
      image: "/web-app.jpg",
    },
    {
      id: 2,
      title: "Generative AI System",
      description:
        "A Retrieval-Augmented Generation (RAG) system integrating document retrieval and NLP pipelines to produce context-aware AI responses with an Agents system.",
      tags: ["Python", "NLP", "OpenAI API", "RAG"],
      image: "/ai-project.jpg",
    },
    {
      id: 3,
      title: "Intelligent Real-Time Vision System",
      description:
        "A real-time computer vision pipeline including object detection, face recognition, object tracking, and segmentation models optimized for accurate detection in video streams.",
      tags: ["OpenCV", "PyTorch", "TensorFlow", "YOLOv5"],
      image: "/computer-vision-abstract.png",
    },
    {
      id: 4,
      title: "NLP Sentiment Analysis",
      description:
        "An end-to-end sentiment analysis system using transformer-based models (BERT/RoBERTa) to classify text sentiment across product reviews, social media, and customer feedback with high accuracy.",
      tags: ["Python", "BERT", "HuggingFace", "NLP", "Scikit-learn"],
      image: "/nlp-project.jpg",
    },
    {
      id: 5,
      title: "Data Science Analysis Platform",
      description:
        "A comprehensive data analysis and visualization platform that performs EDA, statistical analysis, and predictive modeling on large datasets with interactive dashboards powered by Plotly and Streamlit.",
      tags: ["Python", "Pandas", "NumPy", "Matplotlib", "Streamlit"],
      image: "/data-science-concept.png",
    },
    {
      id: 6,
      title: "FastAPI Backend Service",
      description:
        "A high-performance RESTful API service built with FastAPI featuring async endpoints, Pydantic validation, JWT auth, SQLAlchemy ORM, and auto-generated OpenAPI docs for seamless integration.",
      tags: ["FastAPI", "Python", "SQLAlchemy", "Pydantic", "JWT"],
      image: "/ml-model.jpg",
    },
  ]

  return (
    <div className="overflow-y-auto scrollbar-custom" style={{ maxHeight: "calc(100vh - 120px)" }}>
      <div className="max-w-6xl mx-auto p-8 space-y-8">
        <h1 className="text-4xl font-bold text-white">
          My <span className="text-[#667eea]">Projects</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-[#1E1E1E] rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#667eea]/20"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 bg-gradient-to-t from-[#0D0D0D] to-[#1E1E1E] space-y-2">
                <h3 className="font-bold text-white text-lg">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded-full bg-[#667eea]/20 text-[#667eea] border border-[#667eea]/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {hoveredId === project.id && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-300">
                  <span className="text-4xl text-[#667eea]">👁</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
