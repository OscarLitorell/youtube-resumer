function setTimestamp() {
    let t = document.querySelector(".ytp-time-current").innerText.split(":")
    let addr = location.href.split("?")
    let params = new URLSearchParams(addr[1])
    let seconds = t.reduce((prev, curr) => prev * 60 + Number(curr), 0)
    params.set("t", `${seconds}s`)
    location.href = `${addr[0]}?${params.toString()}`
}

chrome.runtime.onMessage.addListener(
    (request, sender, sendResponse) => {
        if (request.message === "clicked_browser_action") setTimestamp()
    }
)