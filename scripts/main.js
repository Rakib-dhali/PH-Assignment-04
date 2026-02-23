document.getElementById("total-jobs-counts").innerText = jobs.length;
document.getElementById("interview-counts").innerText = interviews.length;
document.getElementById("rejected-counts").innerText = rejections.length;

const allSecBtn = document.querySelector(".all");
const interviewSecBtn = document.querySelector(".interview");
const rejectedSecBtn = document.querySelector(".reject");

const center = document.querySelector(".center");

function renderSection(array) {
  center.innerHTML = "";

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
          <button class="interview-btn uppercase px-3 py-2 text-green border-2 border-green rounded-lg text-sm">
            Interview
          </button>

          <button class="rejected-btn uppercase px-3 py-2 text-red border-2 border-red rounded-lg text-sm">
            Rejected
          </button>
        </div>
      </div>
    `;

    const deleteBtn = card.querySelector(".deleteBtn");
    const interviewButton = card.querySelector(".interview-btn");
    const rejectedButton = card.querySelector(".rejected-btn");

    deleteBtn.addEventListener("click", () => {
      array.splice(index, 1);
      updateCounts();
      renderSection(array);
    });

    interviewButton.addEventListener("click", () => {
      interviewBtn(index, array);
      updateCounts();
      renderSection(array);
    });

    rejectedButton.addEventListener("click", () => {
      rejectedBtn(index, array);
      updateCounts();
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

renderSection(jobs);

allSecBtn.addEventListener("click", () => {
  renderSection(jobs);
  updateSectionCount(jobs);
  allSecBtn.className = active;
  interviewSecBtn.className = inactive;
  rejectedSecBtn.className = inactive;
});

interviewSecBtn.addEventListener("click", () => {
  renderSection(interviews);
  updateSectionCount(interviews);
  console.log(interviews.length);
  allSecBtn.className = inactive;
  interviewSecBtn.className = active;
  rejectedSecBtn.className = inactive;
});

rejectedSecBtn.addEventListener("click", () => {
  renderSection(rejections);
  updateSectionCount(rejections);
  allSecBtn.className = inactive;
  interviewSecBtn.className = inactive;
  rejectedSecBtn.className = active;
});

function deleteJob(index, array) {
  array.splice(index, 1);
}

function updateCounts() {
  document.getElementById("total-jobs-counts").innerText = jobs.length;
  document.getElementById("interview-counts").innerText = interviews.length;
  document.getElementById("rejected-counts").innerText = rejections.length;
}

function interviewBtn(index, array) {
  const job = array[index];
  const alreadyExists = interviews.includes(job);
  if (alreadyExists) return;
  interviews.unshift(job);
}

function rejectedBtn(index, array) {
  const job = array[index];
  const alreadyExists = rejections.includes(job);
  if (alreadyExists) return;
  rejections.unshift(job);
}

function updateSectionCount(array) {
  document.getElementById("job-counts").innerText = array.length;
}
