export const callLogin = (body) => {
    return fetch("http://localhost:3001/api/v1/user/login", {
        body: body,
        headers: {Accept: "application/json", "Content-Type": "application/json"},
        method: "POST"
    }).then(data => data)
}

export const callSignUp = (body) => {
    return fetch("http://localhost:3001/api/v1/user/signup", {
        body: body,
        headers: {Accept: "application/json", "Content-Type": "application/json"},
        method: "POST"
    }).then(data => data)
}

export const callGetProfile = (token) => {
    return fetch("http://localhost:3001/api/v1/user/profile", {
        headers: { Accept: "application/json", Authorization: 'Bearer ' + token},
        method: "POST"
    }).then(data => data.json())
}

export const callSetProfile = (body) => {
    return fetch("http://localhost:3001/api/v1/user/profile", {
        body: body,
        headers: {
            Accept: "application/json",
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOWZiNjhiMTcyNmM1MTY1NDQ3MjdkMCIsImlhdCI6MTY1NDcxNjg3NiwiZXhwIjoxNjU0ODAzMjc2fQ.JnshhzlNt0yzmvhIGgOMvZA54ys-O4Xm3Eqo_oVxYnQ",
            "Content-Type": "application/json"},
        method: "PUT"
    }).then(data => data.json())
}