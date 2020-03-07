
const mainBox = [...new Array(9)].map((val,index)=>[...new Array(9)].map((value,index)=>index));

let divBox = mainBox.map((arr,i)=>
    arr.map((val,j)=>{
        let e = document.createElement('div');
        let idValue = ''+i+j;
        e.setAttribute("id",idValue);
        e.setAttribute("class","ele");
        return e
    })
)
console.log(divBox);

let mainDiv = document.createElement('div');
mainDiv.setAttribute("id","mainDiv");
mainDiv.innerHTML = divBox;
document.body.insertBefore(mainDiv,document.getElementById('m'));