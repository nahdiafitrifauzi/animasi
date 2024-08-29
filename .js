
async function loadData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data Loaded");
        }, 3000); 
    });
}


async function main() {
    
    document.getElementById('loading').classList.remove('hidden');

    
    await loadData();

    
    document.getElementById('loading').classList.add('hidden');
    document.getElementById('content').classList.remove('hidden');
}


main();
