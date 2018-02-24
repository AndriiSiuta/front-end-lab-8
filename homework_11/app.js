let rootNode = document.getElementById("root");

let createTree = (jsx) => {
    const {folder, title, children} = jsx;
    const listItem = document.createElement('li');
    const row = document.createElement('h4');
    const icon = document.createElement('i');
    row.setAttribute('class', 'folder');
    icon.setAttribute('class', 'material-icons');
    icon.innerHTML = folder ? 'folder' : 'insert_drive_file';
    const span = document.createElement('span');
    span.innerHTML = title;
    row.appendChild(icon);
    row.appendChild(span);
    listItem.appendChild(row);

    if (!children && folder) {
        const lastUl = document.createElement('ul');
        const lastItem = document.createElement('li');
        const lastRow = document.createElement('h4');
        lastRow.innerHTML = 'Folder is empty';
        lastItem.appendChild(lastRow);
        lastUl.appendChild(lastItem);
        listItem.appendChild(lastUl);
    }

    let moveNext = document.createElement('ul');
    if (children) {
        listItem.appendChild(moveNext);
        children.forEach(key => {
            moveNext.appendChild(createTree(key));
        });
    }

    return listItem;
};

const container = document.createElement('ul');
structure.forEach(key => {
    container.appendChild(createTree(key));
});
rootNode.appendChild(container);
