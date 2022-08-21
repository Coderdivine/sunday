let centered_text = document.getElementById("centered_text");
let btn = document.getElementById("btn");

btn.addEventListener("click",function(){
    //&callback=callback
    axios.get("https://labs.bible.org/api/?passage=random&type=json")
    .then(({data})=>{
        let bookname = data[0].bookname;
        let verse = data[0].verse;
        let chapter = data[0].chapter;
        let text = data[0].text;
        console.log(data)
        centered_text.innerHTML = `
        <b>${bookname}</b> ${chapter}:${verse} <br/>
        <p>${text}</p>
        `;
    }).catch(err=>{
        alert("Something went wrong")
    })

})
