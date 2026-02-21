const center = document.querySelector(".center");
console.log(center);
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
