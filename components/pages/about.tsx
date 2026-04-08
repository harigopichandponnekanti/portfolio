export function About() {
  const activities = [
    {
      title: "Artificial Intelligence",
      description:
        "Passionate about Artificial Intelligence with hands-on experience in Machine Learning, Deep Learning, Computer Vision, and NLP.",
      icon: "🤖",
    },
    {
      title: "Web Development",
      description:
        "HTML, CSS, JavaScript for the front-end, and languages/frameworks such as Python, Node.js, and databases like MySQL or MongoDB for the back-end.",
      icon: "💻",
    },
    {
      title: "Machine Learning",
      description:
        "I have knowledge in Machine Learning, where I work with data to train models that can learn patterns and make predictions. I use tools like NumPy, Pandas, Matplotlib, and Scikit-learn to build and test models.",
      icon: "📊",
    },
    {
      title: "Events",
      description:
        "I have experience in organizing and managing events, where I focus on planning, coordination, and smooth execution. Events help bring people together, share knowledge, and create meaningful experiences.",
      icon: "🎯",
    },
  ]

  return (
    <div className="overflow-y-auto scrollbar-custom" style={{ maxHeight: "calc(100vh - 120px)" }}>
      <div className="max-w-4xl mx-auto p-8 space-y-12">
        {/* About Me Section */}
        <section className="space-y-6">
          <h1 className="text-4xl font-bold text-white">
            About <span className="text-purple-500">Me</span>
          </h1>
          <div className="space-y-4 text-slate-300 leading-relaxed">
            <p>
              I am a passionate and results-driven AI & Machine Learning enthusiast with hands-on experience in
              developing and deploying projects across Machine Learning, Deep Learning, Computer Vision, and Natural
              Language Processing (NLP).
            </p>
            <p>
              I have successfully built and implemented 8+ projects that showcase my ability to design models,
              preprocess data, and solve real-world problems using modern AI techniques. My work has involved building
              intelligent systems in areas such as image recognition, text processing, and predictive analytics.
            </p>
          </div>
        </section>

        {/* What I'm Doing Section */}
        <section className="space-y-6">
          <h2 className="text-4xl font-bold text-white">
            What I'm <span className="text-purple-500">Doing</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-6 border border-slate-700 hover:border-purple-500 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{activity.icon}</span>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-2">{activity.title}</h3>
                    <p className="text-sm text-slate-400">{activity.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
