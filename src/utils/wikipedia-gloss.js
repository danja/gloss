const https = require('https');
const { DOMParser, XMLSerializer } = require('@xmldom/xmldom')

const url = 'https://en.wikipedia.org/wiki/Glossary_of_artificial_intelligence'


https.get(url, { Accept: 'text/html' }, res => {
    let data = [];
    // console.log('Status Code:', res.statusCode);

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