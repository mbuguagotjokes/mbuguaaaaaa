async function message(){
    let request = await fetch("https://api.mbuguaaaaaa.xyz/api/message", {
        method: "POST",
        body: document.querySelector('body').innerHTML
    });
    if (request.ok){
        let content = await request.json();
        document.querySelector('body').innerHTML = content['info'];
    } else {
        alert("womp womp");
    }
}
