export function Resume() {
  const experience = [
    {
      title: "Machine Learning Intern",
      company: "RVNS Technologies",
      type: "Intern · Current",
      dates: "Jan 2025 — Present",
      description:
        "Developing end-to-end machine learning pipelines including data preprocessing, feature engineering, model training, and evaluation using Python and scikit-learn. Building and optimizing deep learning models such as CNNs and neural networks using TensorFlow for real-world classification and prediction tasks.",
      highlight: false,
    },
    {
      title: "Data Science Intern",
      company: "Microsoft Elevate",
      type: "Intern",
      dates: "2025",
      description:
        "Selected for Microsoft Elevate Program — a prestigious initiative for high-potential student developers. Worked on data-driven business insights using Power BI, building interactive dashboards and reports. Performed data wrangling, trend analysis, and visualization pipelines to support strategic decision-making. Gained hands-on experience with Microsoft Azure data services and the broader Microsoft ecosystem.",
      highlight: true,
    },
    {
      title: "Front-End Development Intern",
      company: "Horama",
      type: "Intern",
      dates: "May 2024 — Jun 2024",
      description:
        "Developed a responsive Food Ordering System using HTML, CSS, and JavaScript to improve ordering efficiency and user interaction. Built a Car Washing Booking System with interactive UI and booking functionality to streamline scheduling processes.",
      highlight: false,
    },
  ]

  const education = [
    {
      degree: "B.Tech Computer Science and Engineering (AI & ML)",
      school: "Institute of Aeronautical Engineering",
      dates: "2023 — 2027",
      description:
        "Pursuing a Bachelor's Degree in Computer Science and Engineering (AI & ML) at Institute of Aeronautical Engineering, Hyderabad. CGPA: 8.18/10. Coursework includes Data Structures, Operating Systems, DBMS, Computer Networks, and OOP.",
    },
    {
      degree: "Intermediate (MPC) — 12th Grade",
      school: "Chaitanya Junior College",
      dates: "2021 — 2023",
      description:
        "Completed Intermediate with Mathematics, Physics, and Chemistry (MPC) stream. Scored 96.6%, preparing for JEE/EAMCET competitive examinations.",
    },
    {
      degree: "10th Grade",
      school: "ZPHS Nandigama",
      dates: "2018 — 2021",
      description:
        "Completed secondary schooling at ZPHS, Nandigama, Andhra Pradesh. Built foundational academic skills during formative years.",
    },
  ]

  const certifications = [
    { name: "Azure Fundamentals AZ-900", issuer: "Microsoft" },
    { name: "Azure AI Fundamentals", issuer: "Microsoft" },
    { name: "Artificial Intelligence", issuer: "IBM" },
    { name: "Generative AI", issuer: "Oracle" },
    { name: "Building LLM Applications with Prompt Engineering", issuer: "NVIDIA" },
  ]

  const skills = {
    Programming: ["Java", "Python", "HTML", "CSS", "JavaScript"],
    "Frameworks & Libraries": [
      "React", "Node.js", "Express", "Django", "Bootstrap",
      "NumPy", "Pandas", "TensorFlow", "Keras", "Matplotlib", "Scikit-Learn",
    ],
    Databases: ["MySQL", "MongoDB", "SQLite"],
    "Developer Tools": ["Git", "GitHub", "VS Code", "Google Colab", "Anaconda"],
  }

  return (
    <div className="overflow-y-auto scrollbar-custom" style={{ maxHeight: "calc(100vh - 120px)" }}>
      <div className="max-w-4xl mx-auto p-8 space-y-12">

        {/* Experience Section */}
        <section className="space-y-6">
          <h2 className="text-4xl font-bold text-white">
            <span className="text-[#667eea]">Experience</span>
          </h2>
          <div className="space-y-6">
            {experience.map((item, index) => (
              <div
                key={index}
                className={`rounded-lg p-6 border-l-4 ${
                  item.highlight
                    ? "bg-gradient-to-br from-[#1a1a2e] to-[#16213e] border-[#00a4ef] shadow-lg shadow-[#00a4ef]/10"
                    : "bg-gradient-to-br from-[#1E1E1E] to-[#2C2C2C] border-[#667eea]"
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <div className="flex items-center gap-2">
                      {item.highlight && <span className="text-lg">🪟</span>}
                      <h3 className="text-lg font-bold text-white">{item.title}</h3>
                    </div>
                    <p className={`font-medium ${item.highlight ? "text-[#00a4ef]" : "text-[#667eea]"}`}>
                      {item.company}
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    {item.highlight && (
                      <span className="text-xs bg-[#00a4ef]/20 text-[#00a4ef] px-3 py-1 rounded-full border border-[#00a4ef]/50 font-semibold">
                        ⭐ Featured
                      </span>
                    )}
                    <span className={`text-xs px-3 py-1 rounded-full border ${
                      item.highlight
                        ? "bg-[#1a1a2e] text-[#00a4ef] border-[#00a4ef]"
                        : "bg-[#2C2C2C] text-[#667eea] border-[#667eea]"
                    }`}>
                      {item.type}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-[#6c6b70] mb-3">{item.dates}</p>
                <p className="text-[#b0b0b0]">{item.description}</p>
                {item.highlight && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {["Power BI", "Azure", "Data Analytics", "DAX", "Data Visualization"].map((tag) => (
                      <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-[#00a4ef]/10 text-[#00a4ef] border border-[#00a4ef]/30">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="space-y-6">
          <h2 className="text-4xl font-bold text-white">
            <span className="text-[#667eea]">Education</span>
          </h2>
          <div className="space-y-6">
            {education.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#1E1E1E] to-[#2C2C2C] rounded-lg p-6 border-l-4 border-[#667eea]"
              >
                <div>
                  <h3 className="text-lg font-bold text-white">{item.degree}</h3>
                  <p className="text-[#667eea] font-medium">{item.school}</p>
                </div>
                <p className="text-sm text-[#6c6b70] mt-2 mb-3">{item.dates}</p>
                <p className="text-[#b0b0b0]">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="space-y-6">
          <h2 className="text-4xl font-bold text-white">
            <span className="text-[#667eea]">Technical Skills</span>
          </h2>
          <div className="space-y-4">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="bg-gradient-to-br from-[#1E1E1E] to-[#2C2C2C] rounded-lg p-5 border-l-4 border-[#667eea]"
              >
                <h3 className="text-sm font-semibold text-[#667eea] uppercase tracking-widest mb-3">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-3 py-1 rounded-full bg-[#667eea]/10 text-white border border-[#667eea]/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section className="space-y-6">
          <h2 className="text-4xl font-bold text-white">
            <span className="text-[#667eea]">Certifications</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#1E1E1E] to-[#2C2C2C] rounded-lg p-4 border-l-4 border-[#667eea] flex items-center gap-4"
              >
                <span className="text-2xl">🏅</span>
                <div>
                  <p className="text-white font-medium text-sm">{cert.name}</p>
                  <p className="text-[#667eea] text-xs mt-0.5">{cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}