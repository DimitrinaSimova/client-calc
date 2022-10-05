function getClientsData() {

    let newClients = parseInt(document.getElementById('newClients').value);
    let oldClients = parseInt(document.getElementById('oldClients').value);
    let numNewClients = document.getElementById('numNewClients');
    let percentageLabel = document.getElementById('percentageLabel');
    let modalWarning = document.getElementById('modalWarning');
    let totalClientsPercent = 0;

    //  Validations
    if (!newClients || typeof (newClients) != 'number' || newClients <= 0) {
        modalWarning.classList.add('show-modal');
        return;
    }

    if (!oldClients || typeof (oldClients) != 'number' || oldClients <= 0) {
        modalWarning.classList.add('show-modal');
        return;
    }

    // Calculation
    totalClientsPercent = newClients * 100 / oldClients;

    numNewClients.innerHTML = totalClientsPercent;
    numNewClients.style.strokeDasharray = totalClientsPercent + ', 100';
    percentageLabel.innerHTML = totalClientsPercent.toFixed(0) + '%';
}

function closeModal() {
    modalWarning.classList.remove('show-modal');
}

//  Initial reset on load
numNewClients.innerHTML = 0;
numNewClients.style.strokeDasharray = 0 + ', 100';
percentageLabel.innerHTML = '0 %';