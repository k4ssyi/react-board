const DEV = {
    APIHOST: "http://e1017901.ngrok.io/api/",
}

const PROD = {
    APIHOST: window.location.origin,
}

let CONST = null;
if (process.env.NODE_ENV === 'development') {
    CONST = DEV;
} else if (process.env.NODE_ENV === 'production') {
    CONST = PROD;
}

export default CONST;
