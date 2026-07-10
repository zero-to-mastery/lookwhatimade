function truncateText(text, maxLength = 105) {
  if (text.length <= maxLength) {
    return text;
  }
  return text.slice(0, maxLength).trim() + "…";
}

fetch("submissions.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    const container = document.getElementById("submissions");
    data.forEach((item) => {
      const div = document.createElement("div");
      div.className = "submission-card";
      div.innerHTML = `
        <h3>${item.project_name}</h3>
        <div class="card-height">
        <p><strong>Description:</strong> ${truncateText(item.project_description)}</p>
        </div>
        <p><strong>Author:</strong> ${item.project_author}</p>
        <a href="${item.project_url}" target="_blank">View Project</a>
      `;
      container.appendChild(div);
    });
  })
  .catch((error) => {
    console.error("Error loading submissions:", error);
  });
