return fetch("http://localhost:8088/iteneraries", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(iteneraries)
})