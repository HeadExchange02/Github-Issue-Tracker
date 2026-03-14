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
    for(let issue of issues){
        console.log(issue);
        // 3- create Element
        const issuesDiv = document.createElement("div");
        issuesDiv.innerHTML = `
            <div class="card bg-base-100 w-96 shadow-sm">
                <div class="flex justify-between p-5">
                    <img src="Assets/Open-Status.png" alt="">
                    <p class="text-red-500 font-semibold bg-[#ef444448] px-2 py-1 rounded-2xl">High</p>
                </div>

                <div class="card-body">
                    <h2 class="card-title">
                        Fix navigation menu on mobile devices
                    </h2>
                    <p>The navigation menu doesn't collapse properly on mobile devices...</p>
                    <div class="flex gap-2">
                        <h3 class="text-red-500 font-semibold bg-[#ef444448] px-2 py-1 rounded-2xl">BUG</h3>
                        <h3 class="text-yellow-500 font-semibold bg-[#fde68aa2] px-2 py-1 rounded-2xl">HELP WANTED</h3>
                    </div>

                    <div class="border-2 border-gray-400 p-4 rounded-xl">
                        <p>#1 by john_doe</p>
                        <p>1/15/2024</p>
                    </div>
                </div>
            </div>
        `
        // 4- append into container
        issuesContainer.append(issuesDiv);
    }
}
allIssues();