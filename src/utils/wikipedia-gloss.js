const https = require('https');
const { DOMParser, XMLSerializer } = require('@xmldom/xmldom')
const fs = require('fs')

// const url = 'https://en.wikipedia.org/wiki/Glossary_of_artificial_intelligence'

const filename = '../../data/wiki-gloss-tidy.html'

var raw = fs.readFileSync(filename, 'utf8').toString();

const doc = new DOMParser().parseFromString(raw, 'text/xml')

const sr = new XMLSerializer()


function normalize(text) {
    //  text.replace(/\s+/g, ' ')
    if (text === undefined) {
        return ''
    }
    //  console.log('text - ' + text);
    //  text.replace(/\[\d+\]/g, '')
    return text.replace(/\s+/g, ' ').trim()
}

// console.log(sr.serializeToString(doc))


var dlNodes = doc.getElementsByTagName('dl');

for (let i = 0; i < dlNodes.length; i++) {

    let dl = dlNodes[i]

    var dtNode = ''

    for (let i = 0; i < dl.childNodes.length; i++) {
        let childNode = dl.childNodes[i];
        if (childNode.nodeType === 1 && childNode.nodeName === 'dt') { // 1 is an element node
            // printNodeNames(childNode);
            //  console.log(childNode.nodeName);
            dtNode = childNode
        }
        if (childNode.nodeType === 1 && childNode.nodeName === 'dd') { // 1 is an element node
            console.log(dtNode.nodeName);
            console.log(normalize(dtNode.textContent));
            console.log(childNode.nodeName);
            console.log(normalize(childNode.textContent));
        }
    }
}

/*
function printNodeNames(node) {
    console.log(node.nodeName);
    for (let i = 0; i < node.childNodes.length; i++) {
        let childNode = node.childNodes[i];
        if (childNode.nodeType === 1) { // Check if the node is an element node
            printNodeNames(childNode);
        }
    }
}

// Start printing node names from the root
printNodeNames(dl);
*/
/*
https.get(url, { Accept: 'text/html' }, res => {
    let data = [];
    console.log('Status Code:', res.statusCode);

    res.on('data', chunk => {
        data.push(chunk);
    });

    res.on('end', () => {
        let raw = Buffer.concat(data).toString();

        console.log('Retrieved. Parsing...');
        //  console.log(raw);
        const doc = new DOMParser().parseFromString(raw, 'text/xml')

        console.log('Doing...');
        var childNodes = doc.getElementsByTagName('body')[0].childNodes;


        for (var node in childNodes) {

            // if (node.nodeType === node.ELEMENT_NODE) {
            // if (node.nodeName === 'dt') {
            console.log(node.toString());
            // }
            //}
        }
    });
}).on('error', err => {
    console.log('Error: ', err.message);
});
*/