// AI-style Website Assistant (BPA Safe, Site-Only)
document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("assistant-input");
  const messages = document.getElementById("assistant-messages");
  const toggle = document.getElementById("assistant-toggle");
  const box = document.getElementById("assistant-box");

  if (!input || !messages || !toggle || !box) return;

  // Toggle assistant box
  toggle.addEventListener("click", () => {
    box.classList.toggle("show"); // matches CSS
    if (box.classList.contains("show")) {
      input.focus();
    }
  });

  // Knowledge base (site-specific)
  const knowledge = [
    {
      keywords: ["who", "john peter smith", "john smith"],
      answer:
        "John Peter Smith was a 19th-century community leader, mayor of Fort Worth, veteran, philanthropist, and businessman."
    },
    {
      keywords: ["career", "job", "profession", "business"],
      answer:
        "John Peter Smith worked as a teacher, lawyer, real estate investor, and served multiple terms as mayor of Fort Worth."
    },
    {
      keywords: ["mayor", "politics", "political"],
      answer:
        "Smith served several terms as mayor of Fort Worth, focusing on infrastructure, education, and public health."
    },
    {
      keywords: ["hospital", "health", "medical"],
      answer:
        "He donated land and funds that helped establish John Peter Smith Hospital, which still serves the community today."
    },
    {
      keywords: ["donation", "donate", "philanthropy", "giving"],
      answer:
        "Smith donated land for schools, churches, parks, and healthcare facilities throughout Fort Worth."
    },
    {
      keywords: ["education", "school", "schools"],
      answer:
        "He strongly supported education and is often called the 'Father of Fort Worth Schools.'"
    },
    {
      keywords: ["family", "wife", "children"],
      answer:
        "John Peter Smith was a family man whose values influenced his dedication to community service."
    },
    {
      keywords: ["early life", "childhood", "born"],
      answer:
        "Smith was born in the early 1800s and later settled in Fort Worth, where he became a major civic leader."
    },
    {
      keywords: ["awards", "honors", "recognized"],
      answer:
        "Many buildings and institutions in Fort Worth are named in honor of John Peter Smith for his contributions."
    },
    {
      keywords: ["timeline", "years", "dates"],
      answer:
        "The timeline page highlights major milestones in Smith’s life, including his career, philanthropy, and legacy."
    },
    {
      keywords: ["website", "site", "bpa"],
      answer:
        "This is a BPA Website Design project created to educate users about the life and impact of John Peter Smith."
    }
  ];

  // Add a message to chat
  function addMessage(text, sender) {
    const div = document.createElement("div");
    div.className = sender;
    div.textContent = text;
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight; // always scroll to bottom
  }

  // Simple keyword-based answer lookup
  function getAnswer(question) {
    const q = question.toLowerCase();
    for (const item of knowledge) {
      if (item.keywords.some(k => q.includes(k))) {
        return item.answer;
      }
    }
    return "This assistant only answers questions related to the information on this website.";
  }

  // Handle enter key
  input.addEventListener("keydown", e => {
    if (e.key === "Enter" && input.value.trim() !== "") {
      const question = input.value.trim();
      addMessage(question, "user");
      input.value = "";

      setTimeout(() => {
        const answer = getAnswer(question);
        addMessage(answer, "bot");
      }, 400);
    }
  });
});
