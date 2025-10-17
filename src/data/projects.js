export const projects = [
  {
  slug: "h2atlas",
  title: "H2ATLAS",
  tag: "Data Visualization / Sustainable Energy",
  summary: "A Map-Based Decision Support Tool for Hydrogen Infrastructure Planning",
  image: "./assets/h2atlas.png",
  gallery: [],
  github: "https://github.com/vishakha-sharma21/h2Atlas-Hackout",
  content: `
    <div>
      <p>
        H2Atlas is a geospatial decision-support tool designed to evaluate and visualize optimal locations 
        for hydrogen infrastructure development. It integrates data on renewable energy sources, demand areas, 
        existing hydrogen plants, and transportation networks (road, rail, and port) to provide actionable insights 
        for policymakers and energy planners.
      </p>
      <p>
        By assigning adjustable weightages to key parameters like demand, renewable availability, and power sources, 
        H2Atlas enables users to make data-driven decisions about sustainable hydrogen production and distribution. 
        The tool empowers users with an intuitive interface for exploring spatial data interactively.
      </p>
      <p>
        <b>FEATURES</b>
      </p>
      <ul>
        <li>Interactive map visualization of hydrogen demand and supply zones</li>
        <li>Dynamic weightage sliders for demand, renewable, and power source factors</li>
        <li>Integration of real-world geospatial datasets for infrastructure planning</li>
        <li>Support for multi-criteria analysis and visual prioritization</li>
        <li>Responsive and visually engaging UI for data exploration</li>
        <li>Real-time data updates and configurable analysis layers</li>
      </ul>
      <p>
        <b>TECH STACK USED:</b>
      </p>
      <table class="tech-table">
        <tr>
          <td><b>Frontend</b></td>
          <td>React.js</td>
        </tr>
        <tr>
          <td><b>Styling</b></td>
          <td>Tailwind CSS, Material UI</td>
        </tr>
        <tr>
          <td><b>Backend</b></td>
          <td>Node.js, Express.js</td>
        </tr>
        <tr>
          <td><b>Database</b></td>
          <td>MySQL</td>
        </tr>
        <tr>
          <td><b>Visualization</b></td>
          <td>Mapbox / Leaflet.js</td>
        </tr>
        <tr>
          <td><b>Computation</b></td>
          <td>Weighted Scoring Algorithm for site prioritization</td>
        </tr>
        <tr>
          <td><b>State Management</b></td>
          <td>React Hooks</td>
        </tr>
        <tr>
          <td><b>Deployment</b></td>
          <td>Vercel / Render</td>
        </tr>
      </table>
      <br /><br />
        <div class="screenshots">
          <img src="./assets/image5.png" alt="sc1" />
          <img src="./assets/image6.png" alt="sc2" />
        </div>
    </div>
  `,
},

  {
    slug: "formcraft",
    title: "FORMCRAFT",
    tag: "Web design / Presentation",
    summary: "An AI Powered Dynamic Form Builder",
    image: "./assets/formcraft.png",
    gallery: [],
    github: "https://github.com/vishakha-sharma21/FormCraft-Dynamic-Form-Builder",
    content: `
      <div>
        <p>
          FormCraft is a smart, AI-powered dynamic form builder that enables
          users to design custom forms effortlessly. With a drag-and-drop
          interface, built-in validations, and reusable templates, users can
          create surveys, registration forms, feedback forms, and more — without
          writing any code.
        </p>
        <p>
          <b>FEATURES</b>
        </p>
        <ul>
          <li>
            Drag-and-drop form elements (inputs, checkboxes, radios, dropdowns)
          </li>
          <li>Real-time preview and built-in validation system</li>
          <li>Save, edit, and share custom forms securely</li>
          <li>Responsive design for desktop and mobile</li>
          <li>User authentication for form ownership and editing</li>
          <li>
            Supports predefined templates and AI-assisted field suggestions
          </li>
        </ul>
        <p>
          <b>TECH STACK USED:</b>
        </p>
        <table class="tech-table">
          <tr>
            <td><b>Frontend</b></td>
            <td>React.js</td>
          </tr>
          <tr>
            <td><b>Styling</b></td>
            <td>Tailwind CSS</td>
          </tr>
          <tr>
            <td><b>Backend</b></td>
            <td>Node.js, Express.js</td>
          </tr>
          <tr>
            <td><b>Database</b></td>
            <td>MySQL</td>
          </tr>
          <tr>
            <td><b>Authentication</b></td>
            <td>JWT (JSON Web Tokens)</td>
          </tr>
          <tr>
            <td><b>State Management</b></td>
            <td>Redux Toolkit</td>
          </tr>
          <tr>
            <td><b>Routing</b></td>
            <td>React Router</td>
          </tr>
          <tr>
            <td><b>AI Features</b></td>
            <td>OpenAI API (for field suggestions)</td>
          </tr>
        </table>
        <br /><br />
      </div>
    `,
  },
  {
    slug: "period",
    title: "LEETMETRICS",
    tag: "Web design / Presentation",
    summary: "A tool to track your LeetCode Progress.",
    image: "./assets/leetmetrics.png",
    gallery: [],
    github: "https://github.com/vishakha-sharma21/LeetMetrics-LeetCode-Progress-Tracker",
    content: `
      <div>
        <p>
          LeetMetrics is a minimalistic web application that tracks any LeetCode
          user's progress using real-time data. It displays problems solved by
          difficulty and submission statistics with intuitive visualizations.
        </p>
        <p>
          <b>FEATURES</b>
        </p>
        <ul>
          <li>Username-based lookup for real-time LeetCode stats</li>
          <li>
            Pie charts to show solved problems by difficulty (Easy/Medium/Hard)
          </li>
          <li>Total and difficulty-wise submission counts</li>
          <li>Dark mode toggle for a better user experience</li>
          <li>Uses LeetCode’s GraphQL API (via CORS proxy) for live data</li>
          <li>Responsive UI optimized for all devices</li>
        </ul>

        <p>
          <b>TECH STACK USED:</b>
        </p>

        <table class="tech-table">
          <tr>
            <td><b>Frontend</b></td>
            <td>HTML,CSS,JavaScript</td>
          </tr>
          <tr>
            <td><b>Styling</b></td>
            <td>CSS</td>
          </tr>
          <tr>
            <td><b>Data Source</b></td>
            <td>LeetCode GraphQL API</td>
          </tr>
          <tr>
            <td><b>CORS Handling</b></td>
            <td>cors-anywhere proxy</td>
          </tr>
        </table>
        <br /><br />
        <div class="screenshots">
          <img src="./assets/image3.png" alt="sc1" />
          <img src="./assets/image4.png" alt="sc2" />
        </div>
      </div>
    `,
  },
  {
  slug: "notesdrop",
  title: "NOTESDROP",
  tag: "Web App / Productivity",
  summary: "A Cloud-Based Platform for Sharing and Organizing Study Notes",
  image: "./assets/notesdrop.png",
  gallery: [],
  github: "https://github.com/vishakha-sharma21/NotesDrop-OnlineNotesApp",
  content: `
    <div>
      <p>
        NotesDrop is a collaborative, cloud-based platform designed for students to share, organize, and access 
        academic notes seamlessly. It provides a centralized hub where users can upload handwritten or digital notes, 
        categorize them by subject or topic, and download shared resources with ease.
      </p>
      <p>
        Built with a focus on simplicity and collaboration, NotesDrop aims to make learning more efficient 
        and community-driven — helping students stay organized, connected, and productive.
      </p>
      <p>
        <b>FEATURES</b>
      </p>
      <ul>
        <li>Upload and share handwritten or digital notes instantly</li>
        <li>Organize notes by subject, topic, or semester</li>
        <li>Search and filter resources using tags or keywords</li>
        <li>Secure user authentication and personalized dashboards</li>
        <li>Real-time syncing and responsive design across devices</li>
        <li>Downloadable PDFs and preview support for shared files</li>
      </ul>
      <p>
        <b>TECH STACK USED:</b>
      </p>
      <table class="tech-table">
        <tr>
          <td><b>Frontend</b></td>
          <td>React.js</td>
        </tr>
        <tr>
          <td><b>Styling</b></td>
          <td>Tailwind CSS</td>
        </tr>
        <tr>
          <td><b>Backend</b></td>
          <td>Node.js, Express.js</td>
        </tr>
        <tr>
          <td><b>Database</b></td>
          <td>MySQL</td>
        </tr>
        <tr>
          <td><b>Authentication</b></td>
          <td>JWT (JSON Web Tokens)</td>
        </tr>
        <tr>
          <td><b>File Storage</b></td>
          <td>Cloudinary / Firebase Storage</td>
        </tr>
        <tr>
          <td><b>State Management</b></td>
          <td>React Context API</td>
        </tr>
        <tr>
          <td><b>Deployment</b></td>
          <td>Vercel / Render</td>
        </tr>
      </table>
      <br /><br />
        <div class="screenshots">
          <img src="./assets/image.png" alt="sc1" />
          <img src="./assets/image1.png" alt="sc2" />
        </div>
        <br /><br />
    </div>
  `,
},

];
