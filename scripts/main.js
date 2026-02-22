const jobs = [
  {
    company: "TechNova Solutions",
    role: "Frontend Developer",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    salary: "$800 - $1200/month",
    requirement: "Strong knowledge of React, Tailwind CSS, and REST APIs.",
  },
  {
    company: "PixelCraft Studio",
    role: "UI/UX Designer",
    location: "Remote",
    type: "Part-time",
    salary: "$500 - $900/month",
    requirement: "Experience with Figma and modern design systems.",
  },
  {
    company: "CodeSphere Ltd.",
    role: "Backend Developer",
    location: "Chittagong, Bangladesh",
    type: "Full-time",
    salary: "$1000 - $1500/month",
    requirement: "Proficient in Node.js, Express, and MongoDB.",
  },
  {
    company: "CloudEdge Tech",
    role: "Full Stack Developer",
    location: "Remote",
    type: "Full-time",
    salary: "$1200 - $2000/month",
    requirement: "Experience with Next.js, PostgreSQL, and API integration.",
  },
  {
    company: "BrightPath IT",
    role: "Junior Web Developer",
    location: "Sylhet, Bangladesh",
    type: "Full-time",
    salary: "$400 - $700/month",
    requirement: "Good understanding of HTML, CSS, JavaScript, and Git.",
  },
  {
    company: "DataNest Analytics",
    role: "Data Analyst",
    location: "Remote",
    type: "Part-time",
    salary: "$900 - $1300/month",
    requirement: "Strong skills in Excel, SQL, and data visualization tools.",
  },
  {
    company: "AppVenture Labs",
    role: "Mobile App Developer",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    salary: "$1100 - $1600/month",
    requirement: "Experience with React Native and Firebase.",
  },
  {
    company: "CyberWave Security",
    role: "Cyber Security Specialist",
    location: "Remote",
    type: "Full-time",
    salary: "$1500 - $2500/month",
    requirement:
      "Knowledge of network security, penetration testing, and ethical hacking.",
  },
];
const interviews = [];
const rejections = [];

const center = document.querySelector(".center");

const allSecBtn = document.querySelector(".all");
const interviewSecBtn = document.querySelector(".interview");
const rejectedSecBtn = document.querySelector(".reject");

// 🔥 Main render function
function renderSection(array) {
  center.innerHTML = ""; // clear previous section

  if (array.length === 0) {
    const card = document.createElement("div");
    card.className =
      "no-job bg-white rounded-lg border-2 border-border px-8 md:px-10 py-12 md:py-15";

    card.innerHTML = `
      <div class="flex flex-col items-center">
        <img class="md:size-25 size-20 md:mb-5 mb-4" src="./assets/jobs.png" alt="" />
        <h2 class="font-semibold text-2xl text-blue mb-1">
          No Jobs Available
        </h2>
        <p class="text-grey">Check back soon for new job opportunities</p>
      </div>
    `;

    center.appendChild(card);
    return;
  }

  array.forEach((job, index) => {
    const card = document.createElement("div");
    card.className = "job-card";

    card.innerHTML = `
      <div class="bg-white rounded-lg border-2 border-border md:p-6 p-4">
        <div class="flex justify-between">
          <h3 class="text-blue text-lg font-semibold">${job.company}</h3>
          <button class="deleteBtn border-grey border-2 size-8 rounded-full flex-center">
            <img src="./assets/trash.svg" alt=""/>
          </button>
        </div>

        <p class="text-grey mb-3">${job.role}</p>

        <div class="mb-3 text-sm text-grey">
          ${job.location} • ${job.type} • ${job.salary}
        </div>

        <p class="mb-3 text-sm text-dark-grey">${job.requirement}</p>

        <div class="flex gap-3">
          <button class="uppercase px-3 py-2 text-green border-2 border-green rounded-lg text-sm">
            Interview
          </button>

          <button class="uppercase px-3 py-2 text-red border-2 border-red rounded-lg text-sm">
            Rejected
          </button>
        </div>
      </div>
    `;
    const deleteBtn = card.querySelector(".deleteBtn");

    deleteBtn.addEventListener("click", () => {
    array.splice(index, 1);
    renderSection(array);
  });

    center.appendChild(card);
  });
}
let active =
  " bg-light-blue text-white text-center rounded-lg " +
  "w-25 px-4 py-3" +
  " opacity-90 hover:opacity-100 active:scale-105";
let inactive =
  "bg-white border-border border text-grey text-center rounded-lg " +
  "w-25 px-4 py-3 " +
  "opacity-90 hover:opacity-100 active:scale-105";

allSecBtn.className = active;
interviewSecBtn.className = inactive;
rejectedSecBtn.className = inactive;

// 🔥 Initial load → show all jobs
renderSection(jobs);

// 🔥 Button Events
allSecBtn.addEventListener("click", () => {
  renderSection(jobs);
  allSecBtn.className = active;
  interviewSecBtn.className = inactive;
  rejectedSecBtn.className = inactive;
});

interviewSecBtn.addEventListener("click", () => {
  renderSection(interviews);
  allSecBtn.className = inactive;
  interviewSecBtn.className = active;
  rejectedSecBtn.className = inactive;
});

rejectedSecBtn.addEventListener("click", () => {
  renderSection(rejections);
  allSecBtn.className = inactive;
  interviewSecBtn.className = inactive;
  rejectedSecBtn.className = active;
});


function deleteJob(index, array) {
  array.splice(index, 1);
}