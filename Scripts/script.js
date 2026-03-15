console.log("ok")
const allIssues = () => {
    fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
        .then((response) => response.json())
        .then((json) => displayIssues(json.data))
}

const displayIssues = (issues) => {
    // 1- get the container & empty
    const issuesContainer = document.getElementById("issues-container");
    issuesContainer.innerHTML = "";
    // 2- get into every issue
    for (let issue of issues) {
        console.log(issue);
        // 3- create Element

        // id	1
        // title	"Fix navigation menu on mobile devices"
        // description	"The navigation menu doesn't collapse properly on mobile devices. Need to fix the responsive behavior."
        // status	"open"
        // labels	
        // 0	"bug"
        // 1	"help wanted"
        // priority	"high"
        // author	"john_doe"
        // assignee	"jane_smith"
        // createdAt	"2024-01-15T10:30:00Z"
        // updatedAt	"2024-01-15T10:30:00Z"

        const issuesDiv = document.createElement("div");
        issuesDiv.innerHTML = `
            <div class="card bg-base-100 w-96 shadow-sm">
                <div class="flex justify-between p-5">
                    <img src="Assets/Open-Status.png" alt="">
                    <p class="text-red-500 font-semibold bg-[#ef444448] px-2 py-1 rounded-2xl">${issue.priority}</p>
                </div>

                <div class="card-body">
                    <h2 class="card-title">
                        ${issue.title}
                    </h2>
                    <p class = "text-gray-400">${issue.description}</p>
                    <div class="flex gap-2">
                        <h3 class="text-red-500 font-semibold bg-[#ef444448] px-2 py-1 rounded-2xl">BUG</h3>
                        <h3 class="text-yellow-500 font-semibold bg-[#fde68aa2] px-2 py-1 rounded-2xl">HELP WANTED</h3>
                        <h3 class="text-green-500 font-semibold bg-[#8afd8aa2] px-2 py-1 rounded-2xl">ENHANCEMENT</h3>
                    </div>

                    <div class="border-2 border-gray-400 p-4 rounded-xl space-y-3">
                        <p class = "text-gray-400">${issue.author}</p>
                        <p class = "text-gray-400">${issue.createdAt}</p>
                    </div>
                </div>
            </div>
        `
        // 4- append into container
        issuesContainer.append(issuesDiv);
    }
}
allIssues();