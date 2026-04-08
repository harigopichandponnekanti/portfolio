"use client"
import { useState } from "react"

export function Sidebar() {
  const [showContacts, setShowContacts] = useState(false)

  return (
    <aside className="w-full md:w-80 bg-gradient-to-b from-[#1E1E1E] to-[#2C2C2C] border-r border-[#333333] p-8 flex flex-col gap-6 overflow-y-auto md:border-r md:border-b-0 border-b">
      {/* Profile Section */}
      <div className="space-y-4">
        <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-[#667eea] to-[#5b21b6] flex items-center justify-center">
          <span className="text-2xl font-bold text-white">PH</span>
        </div>
        <div>
          <h1 className="text-2xl font-bold text-white">Ponnekanti HariGopichand</h1>
          <p className="text-sm text-[#6c6b70] bg-[#2C2C2C] rounded-full px-3 py-1 inline-block mt-2">
            AI/ML Engineer and web designer
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="space-y-3">
        <div className="flex items-center justify-between md:block">
          <h3 className="text-xs font-semibold text-[#6c6b70] uppercase tracking-wider">Contact</h3>
          <button
            onClick={() => setShowContacts(!showContacts)}
            className="md:hidden text-[#667eea] hover:text-[#7c8aff] text-xl transition-colors"
          >
            {showContacts ? "✕" : "☰"}
          </button>
        </div>

        <div className={`space-y-3 ${showContacts ? "block" : "hidden md:block"}`}>
          <a
            href="mailto:harigopichanda@gmail.com"
            className="flex items-center gap-3 p-3 rounded-lg bg-[#2C2C2C] hover:bg-[#333333] transition-colors group"
          >
            <span className="w-5 h-5 text-[#667eea] group-hover:text-[#7c8aff] text-lg">✉</span>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-[#6c6b70]">Gmail</p>
              <p className="text-sm font-medium truncate text-white">harigopichanda@gmail.com</p>
            </div>
          </a>

          <a
            href="https://linkedin.com/in/harigopichand-ponnekanti"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 rounded-lg bg-[#2C2C2C] hover:bg-[#333333] transition-colors group"
          >
            <span className="w-5 h-5 text-[#667eea] group-hover:text-[#7c8aff] text-lg">in</span>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-[#6c6b70]">LinkedIn</p>
              <p className="text-sm font-medium truncate text-white">HariGopichand Ponnekanti</p>
            </div>
          </a>

          <a
            href="https://github.com/Harigopichand"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 rounded-lg bg-[#2C2C2C] hover:bg-[#333333] transition-colors group"
          >
            <span className="w-5 h-5 text-[#667eea] group-hover:text-[#7c8aff] text-lg">⚙</span>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-[#6c6b70]">GitHub</p>
              <p className="text-sm font-medium truncate text-white">Harigopichand</p>
            </div>
          </a>

          <a
            href="/resume main.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Harigopichand_Resume.pdf"
            className="flex items-center gap-3 p-3 rounded-lg bg-[#2C2C2C] hover:bg-[#333333] transition-colors group"
          >
            <span className="w-5 h-5 text-[#667eea] group-hover:text-[#7c8aff] text-lg">📄</span>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-[#6c6b70]">Download</p>
              <p className="text-sm font-medium text-white">Resume</p>
            </div>
          </a>
        </div>
      </div>
    </aside>
  )
}