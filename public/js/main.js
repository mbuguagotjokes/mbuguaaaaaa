async function fetchDocument(){
    let request = await fetch("http://127.0.0.1:1000/api/v1", {
        method: "POST",
        body: document.querySelector('body').innerHTML
    });
    if (request.ok){
        let content = await request.json();
        document.querySelector('body').innerHTML = content['info'];
    } else {
        alert("womp womp");
        return;
    }
}