export function Skills() {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Python", "JavaScript", "TypeScript", "Java", "C++", "SQL"],
    },
    {
      category: "Machine Learning & AI",
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy", "OpenCV"],
    },
    {
      category: "Web Development",
      skills: ["React", "Next.js", "Node.js", "Express", "MongoDB", "PostgreSQL"],
    },
    {
      category: "Tools & Platforms",
      skills: ["Git", "Docker", "AWS", "Google Cloud", "Jupyter", "VS Code"],
    },
    {
      category: "Data Science",
      skills: ["Data Analysis", "Data Visualization", "Statistical Analysis", "Feature Engineering"],
    },
    {
      category: "Soft Skills",
      skills: ["Problem Solving", "Team Leadership", "Communication", "Project Management"],
    },
  ]

  return (
    <div className="overflow-y-auto scrollbar-custom" style={{ maxHeight: "calc(100vh - 120px)" }}>
      <div className="max-w-4xl mx-auto p-8 space-y-8">
        <h1 className="text-4xl font-bold text-white">
          Technical <span className="text-purple-500">Skills</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-6 border border-slate-700 hover:border-purple-500 transition-colors"
            >
              <h3 className="text-lg font-bold text-purple-400 mb-4">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-slate-700 text-slate-200 px-3 py-1 rounded-full text-sm hover:bg-purple-600 hover:text-white transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
