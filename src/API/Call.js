export const callLogin = (body) => {
    return fetch("http://localhost:3001/api/v1/user/login", {
        body: body,
        headers: {Accept: "application/json", "Content-Type": "application/json"},
        method: "POST"
    }).then(data => data)
    .catch(err => {
        alert("impossible de se connecter à l'Api, veuiller réessayer plus tard ou vous assurer d'être en mesure de contacter l'api")
        window.location = '/'
    })
}

export const callSignUp = (body) => {
    return fetch("http://localhost:3001/api/v1/user/signup", {
        body: body,
        headers: {Accept: "application/json", "Content-Type": "application/json"},
        method: "POST"
    }).then(data => data).catch(err => {
        alert("impossible de se connecter à l'Api, veuiller réessayer plus tard ou vous assurer d'être en mesure de contacter l'api")
        window.location = '/'
    })
}

export const callGetProfile = (token) => {
    return fetch("http://localhost:3001/api/v1/user/profile", {
        headers: { Accept: "application/json", Authorization: 'Bearer ' + token},
        method: "POST"
    }).then(data => data.json()).catch(err => {
        alert("impossible de se connecter à l'Api, veuiller réessayer plus tard ou vous assurer d'être en mesure de contacter l'api")
        window.location = '/'
    })
}

export const callSetProfile = (body, token) => {
    return fetch("http://localhost:3001/api/v1/user/profile", {
        body: body,
        headers: {
            Accept: "application/json",
            Authorization: "Bearer " + token,
            "Content-Type": "application/json"},
        method: "PUT"
    }).then(data => data.json()).catch(err => {
        alert("impossible de se connecter à l'Api, veuiller réessayer plus tard ou vous assurer d'être en mesure de contacter l'api")
        window.location = '/'
    })
}