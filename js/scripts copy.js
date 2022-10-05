function getClientsData() {
    let xnewClients = document.getElementById('newClients').innerHTML;
    let oldClients = document.getElementById('oldClients').value;
    let percentageLabel = document.getElementById('percentageLabel');

    // newClients = '56';

    // let numNewClients = document.getElementById('numNewClients');
    // numNewClients.innerHTML = newClients;
    // numNewClients.style.strokeDasharray = newClients + ', 100';
    // percentageLabel.innerHTML = newClients + '%';

    console.log(xnewClients);

    document.getElementById('numNewClients').innerHTML = xnewClients;
}

getClientsData();

function myFunction() {
    var x = document.getElementById("myText").value;
    document.getElementById("demo").innerHTML = x;
}

myFunction();