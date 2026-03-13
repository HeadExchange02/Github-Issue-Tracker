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
            <div class ="flex items-center gap-2">
                <div>
                    <h3 class="font-semibold text-xl">Issues </h3>
                </div>
            </div>
        `
        // 4- append into container
        issuesContainer.append(issuesDiv);
    }
}

