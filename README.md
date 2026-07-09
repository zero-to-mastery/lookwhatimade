# Look What I Made

A community showcase site where Zero to Mastery Academy students display and share the projects they've built.

## How it works

The site is static. Project data lives in `submissions.json`, and `script.js` fetches that file and builds a card on the page for each project.

- `index.html` — page structure
- `styles.css` — visual styling
- `script.js` — fetches `submissions.json` and renders the project cards
- `submissions.json` — the list of student project submissions

## Adding your project

Open `submissions.json` and add a new entry to the array:

​```json
{
  "project_name": "Your Project Name",
  "project_description": "A short description of what your project does.",
  "project_author": "Your Name",
  "project_url": "https://link-to-your-project.com"
}
​```

**Field guide:**

| Field | Description |
|---|---|
| `project_name` | The title of your project, shown at the top of the card |
| `project_description` | A brief summary of what you built (long descriptions are automatically truncated on the card) |
| `project_author` | Your name, as you'd like it to appear |
| `project_url` | A link to your live project, GitHub repo, or demo |

### Steps

1. Fork this repository (or clone it if you have write access).
2. Open `submissions.json`.
3. Add a new object to the array with your project details. Make sure to add a comma after the previous entry.
4. Save the file and double-check it's still valid JSON (no trailing commas, matching brackets).
5. Commit your change and open a pull request — or push directly if you have access.
6. Once merged and deployed, your project card will appear on the site automatically.

## Previewing your changes before you commit

Since this site loads `submissions.json` with `fetch()`, opening `index.html` directly by double-clicking it won't work — browsers block local file fetches for security reasons. Use the **Live Server** extension in VS Code instead:

1. Open the **Extensions** panel in VS Code (icon on the left sidebar, or `Cmd+Shift+X` / `Ctrl+Shift+X`).
2. Search for **"Live Server"** (by Ritwick Dey) and click **Install**.
3. Once installed, right-click `index.html` in the file explorer.
4. Select **"Open with Live Server"**.
5. Your default browser will open showing the site — any time you save a change to `submissions.json`, `styles.css`, or `index.html`, the page will automatically refresh.

When you're happy with how it looks, commit and push your changes.
