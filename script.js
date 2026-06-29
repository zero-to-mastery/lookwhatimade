fetch("./submissions.json")
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
        <p><strong>Description:</strong> ${item.project_description}</p>
        <p><strong>Author:</strong> ${item.project_author}</p>
        <a href="${item.project_url}" target="_blank">View Project</a>
      `;
      container.appendChild(div);
    });
  })
  .catch((error) => {
    console.error("Error loading submissions:", error);
  });
