
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix skos: <http://www.w3.org/2004/02/skos/core#> .


<uri> skos:Concept ;
dc:title
skos:definition
skos:inScheme <https://en.wikipedia.org/wiki/>

rdfs:label
rdfs:seeAlso

dc:description
skos:inScheme <https://en.wikipedia.org/wiki/>


// from bookmarker

@prefix w: <http://hyperdata.it/wiki/> .
@prefix tag: <http://hyperdata.it/tags/> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix dc: <http://purl.org/dc/terms/> .
@prefix foaf: <http://xmlns.com/foaf/0.1/> .
<http:__test> a w:Bookmark ;
w:url <http://test> ;
dc:title "the title";
dc:description """some description""";
foaf:nick "danja";
dc:topic tag:tag1 ;
dc:topic tag:tag2 ;
dc:topic tag:tag3 ;
dc:created "2018-07-24T12:16:57.716Z" .
tag:tag1 rdfs:label "tag1".
tag:tag2 rdfs:label "tag2".
tag:tag3 rdfs:label "tag3".
