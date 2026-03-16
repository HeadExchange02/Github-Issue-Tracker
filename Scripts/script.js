console.log("ok")

let allData = [];

async function allIssues() {
    try {
        const response = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
        const data = await response.json();
        allData = data.data;
        console.log(allData);
        renderData(allData);
    } catch (error) { console.error(error); }
}

function renderData(dataList) {
    const container = document.getElementById('issues-container')
    console.log(container);
    container.innerHTML = "";

    document.getElementById('issue-total').innerText = `${dataList.length} Issues Found`;
    document.getElementById('open-total').innerText = allData.filter(i => i.status === 'open').length;
    document.getElementById('closed-total').innerText = allData.filter(i => i.status === 'closed').length;
}

function changeTab(type, btn) {
    const tabButtons = document.querySelectorAll('#tab-btn button');
    console.log(tabButtons);
    tabButtons.forEach(button => {
        button.classList.remove('bg-gray-200', 'font-bold', 'border-gray-300')
        button.classList.add('btn-ghost', 'text-gray-500', 'border-none')
    })
    btn.classList.add('bg-gray-200', 'font-bold', 'border-gray-300');
    btn.classList.remove('btn-ghost', 'text-gray-500', 'border-none');

    if (type === 'all') renderData(allData);
    else renderData(allData.filter(i => i.status === type));
}





allIssues();