const center = document.querySelector(".center");
if (jobs.length !== 0) {
  jobs.map((job, index) => {
    const cards = document.createElement("div");
    cards.className =
      "card bg-white rounded-lg border-2 border-border md:p-6 p-4";
    cards.innerHTML = `
   <div data-index="${index}" class="flex justify-between">
                    <h3 class="text-blue text-lg font-semibold leading-12.5">${job.company}</h3>
                   <button class="border-grey border-2 size-8 rounded-full flex-center"><img src="./assets/trash.svg" alt=""/></button>
                </div><p class="text-grey leading-5.5 mb-3 md:mb-5 ">${job.role}</p>
                    <div class="mb-3 md:mb-5 leading-5 text-sm text-grey">
                        ${job.location} • ${job.type} • ${job.salary}
                    </div>
                    <p class="mb-3 md:mb-5 leading-5 text-sm text-dark-grey">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, dicta.</p>
                    <div class="flex gap-3">
                        <button class="uppercase px-3 py-2 text-green border-2 border-green rounded-lg font-semibold leading-5 text-sm">Interview</button><button class="uppercase px-3 py-2 text-red border-2 border-red rounded-lg font-semibold leading-5 text-sm">rejected</button>
                    </div>
                `;

    center.appendChild(cards);
  });
} else {
  const cards = document.createElement("div");
  cards.className =
    "card bg-white rounded-lg border-2 border-border px-8 md:px-10 py-12 md:py-15";
  cards.innerHTML = `
  <div data-index="${index}" class="flex flex-col justify-between items-center">
      <img class="md:size-25 size-20 md:mb-5 mb-4" src="./assets/jobs.png" alt="" />
      <h2 class="font-semibold text-2xl text-blue mb-1 leading-8">No Jobs Available</h2>
      <p class="leading-5.5 text-grey">Check back soon for new job opportunities</p>
    </div>`;
}

if (interviews.length !== 0) {
  interviews.map((job, index) => {
    const cards = document.createElement("div");
    cards.className =
      "card bg-white rounded-lg border-2 border-border md:p-6 p-4";
    cards.innerHTML = `
   <div data-index="${index}" class="flex justify-between">
                    <h3 class="text-blue text-lg font-semibold leading-12.5">${job.company}</h3>
                   <button class="border-grey border-2 size-8 rounded-full flex-center"><img src="./assets/trash.svg" alt=""/></button>
                </div><p class="text-grey leading-5.5 mb-3 md:mb-5 ">${job.role}</p>
                    <div class="mb-3 md:mb-5 leading-5 text-sm text-grey">
                        ${job.location} • ${job.type} • ${job.salary}
                    </div>
                    <p class="mb-3 md:mb-5 leading-5 text-sm text-dark-grey">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, dicta.</p>
                    <div class="flex gap-3">
                        <button class="uppercase px-3 py-2 text-green border-2 border-green rounded-lg font-semibold leading-5 text-sm">Interview</button><button class="uppercase px-3 py-2 text-red border-2 border-red rounded-lg font-semibold leading-5 text-sm">rejected</button>
                    </div>
                `;

    center.appendChild(cards);
  });
} else {
  const cards = document.createElement("div");
  cards.className =
    "inter-card bg-white rounded-lg border-2 border-border px-8 md:px-10 py-12 md:py-15";
  cards.innerHTML = `
  <div data-index="${index}" class="flex flex-col justify-between items-center">
      <img class="md:size-25 size-20 md:mb-5 mb-4" src="./assets/jobs.png" alt="" />
      <h2 class="font-semibold text-2xl text-blue mb-1 leading-8">No Jobs Available</h2>
      <p class="leading-5.5 text-grey">Check back soon for new job opportunities</p>
    </div>`;
}

if (rejections.length !== 0) {
  rejections.map((job, index) => {
    const cards = document.createElement("div");
    cards.className =
      "card bg-white rounded-lg border-2 border-border md:p-6 p-4";
    cards.innerHTML = `
   <div data-index="${index}" class="flex justify-between">
                    <h3 class="text-blue text-lg font-semibold leading-12.5">${job.company}</h3>
                   <button class="border-grey border-2 size-8 rounded-full flex-center"><img src="./assets/trash.svg" alt=""/></button>
                </div><p class="text-grey leading-5.5 mb-3 md:mb-5 ">${job.role}</p>
                    <div class="mb-3 md:mb-5 leading-5 text-sm text-grey">
                        ${job.location} • ${job.type} • ${job.salary}
                    </div>
                    <p class="mb-3 md:mb-5 leading-5 text-sm text-dark-grey">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, dicta.</p>
                    <div class="flex gap-3">
                        <button class="uppercase px-3 py-2 text-green border-2 border-green rounded-lg font-semibold leading-5 text-sm">Interview</button><button class="uppercase px-3 py-2 text-red border-2 border-red rounded-lg font-semibold leading-5 text-sm">rejected</button>
                    </div>
                `;

    center.appendChild(cards);
  });
} else {
  const cards = document.createElement("div");
  cards.className =
    "reject-card bg-white rounded-lg border-2 border-border px-8 md:px-10 py-12 md:py-15";
  cards.innerHTML = `
  <div data-index="${index}" class="flex flex-col justify-between items-center">
      <img class="md:size-25 size-20 md:mb-5 mb-4" src="./assets/jobs.png" alt="" />
      <h2 class="font-semibold text-2xl text-blue mb-1 leading-8">No Jobs Available</h2>
      <p class="leading-5.5 text-grey">Check back soon for new job opportunities</p>
    </div>`;
}
