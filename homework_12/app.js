// Your code goes here
const root = document.getElementById('root');

const container = document.createElement('div');
container.setAttribute('class', 'thumbnails');

function renderAllList() {
    const heading = document.createElement('h1');
    const main = root.appendChild(container);
    main.appendChild(heading);
    heading.innerHTML = 'Most popular tanks';
    heading.setAttribute('class', 'title');
    const flexContainer = document.createElement('div');
    flexContainer.setAttribute('class', 'flex-container');

    tanks.forEach(key => {
        const flexItem = document.createElement('div');
        flexItem.setAttribute('class', 'flex-item');


        let tankPicture = document.createElement('img');
        tankPicture.setAttribute('class', 'tank-picture');
        let countryFlag = document.createElement('img');
        countryFlag.setAttribute('class', 'tank-flag');


        flexItem.appendChild(tankPicture);
        flexItem.appendChild(countryFlag);

        countryFlag.src = `images/countries/${key.country}.png`;
        tankPicture.src = key.preview;

        const tankModel = document.createElement('span');
        tankModel.setAttribute('class', 'tank-model');
        tankModel.innerHTML = key.model;
        flexItem.appendChild(tankModel);
        flexContainer.appendChild(flexItem);
        flexItem.addEventListener('click', () => {
            location.hash = key.model;
        });
    });
    main.appendChild(flexContainer);
    return main;
}

function renderDetails(tank) {
    //change class and rerender html with current tank
}

function tankDetail() {
    //render tank details
    let model = location.hash.slice(1);
    tanks.forEach(el => {
        console.log(el.model);
        if (el.model === model) {
            renderDetails(el);
        }
    });
}

root.appendChild(renderAllList());
window.onhashchange = tankDetail;


