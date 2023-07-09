export default function swDev(){
    let swUrl = `${process.env.PUBLIC_URL}/sw.js`
    if ('serviceWorker' in navigator)
        navigator.serviceWorker.register(swUrl);
    else
        console.log("service is not worked")
}