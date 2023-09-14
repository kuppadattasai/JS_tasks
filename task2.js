function validate(){
    table = document.getElementsByClassName("table1")[0];
    table.innerHTML = "";
    var from = document.getElementsByClassName("from")[0].value;
    var to = document.getElementsByClassName("to")[0].value;
    // if(to < from){
    //     alert("Starting Number should be lesser than the number that Ends ")
    // }
    from = parseInt(from)
    to = parseInt(to)

    if(from > to ){
        alert("Starting Number should be lesser than the ending Number")
    }

    table = document.getElementsByClassName("table1")[0];
    table.innerHTML = "<tr><th>Number</th><th>Square</th><th>Cube</th></tr>"
    for(let i =from;i<=to;i++){
        console.log(i**2,i**3)
        console.log(table)
        table.innerHTML = table.innerHTML + "<tr><td>"+i+"</td><td>"+i**2+"</td><td>"+i**3+"</td></tr>"
        console.log(table.innerHTML)

    }

}

    