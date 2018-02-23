var rootNode = document.getElementById("root");

// Your code goes here
console.log(`${JSON.stringify(structure, null, 2)}`);
let createTree = (jsx) => {
    const { folderStatus, title, children } = jsx;
    let tagName, className;

    if(folderStatus) {
        [tagName, className] = ['ul', 'folder'];
    } else {
        [tagName, className] = ['li', 'file']
    }

    const domElement = document.createElement(tagName);
    domElement.setAttribute('class', className);

    domElement.appendChild(title);

    if (children) {
        children.forEach(child => {
            domElement.appendChild(createTree(child));
        });
    }

    return domElement;
};

const tree1 = createTree(structure[0]);
// const tree2 = createTree(structure[1]);
rootNode.appendChild(tree1);
