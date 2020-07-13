function setTimestamp() {
    let t = document.querySelector(".ytp-time-current").innerText.split(":")
    let addr = location.href.split("?")
    let params = new URLSearchParams(addr[1])
    
    if (params.length == 1) {
        params.set("t", `${t[0]}m${t[1]}s`)
    } else {
        params.set("t", `${t[0]}h${t[1]}m${t[2]}s`)
    }
    location.href = `${addr[0]}?${params.toString()}`
}

chrome.runtime.onMessage.addListener(
    (request, sender, sendResponse) => {
        if (request.message === "clicked_browser_action") setTimestamp()
    }
)