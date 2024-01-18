 sudo systemctl start fuseki




putting in graph

<http://hyperdata.it/gloss/>



PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

SELECT * FROM <http://hyperdata.it/gloss/> WHERE {
  ?sub ?pred ?obj .
} LIMIT 10
