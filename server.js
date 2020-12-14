const http = require('http'); /* Initialisation du server NodeJS - Importantation module HTTP */
const fs = require('fs'); /* Importantation module FileSystem */
const hostname = '127.0.0.1'; /*Nom de redirection du serveur */
const port = 3000;

const server = http.createServer((request, response) => {
    let reqUrl = request.url.split('/'); /* Ligne permettent de récupérer l'URL */

    if (request.url === "/") {
        fs.readFile('./Accueil.html', function (error, buffer) { /* Lecture du fichier HTML */

            if (error) throw error; /* Si erreur, le serveur l'affiche */
            response.writeHead(200, {"Content-Type": "text/html"}); /* Le serveur définit le type de contenu */
            response.write(buffer); /* Le buffer à une fonction de stockage */
            response.end(); /* Le serveur a renvoyé la page */
        });

    } else if (request.url === "/Medico-Social") {
        fs.readFile('./Medico-Social.html', function (error, buffer) {

            if (error) throw error;
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(buffer);
            response.end();
        });

    } else if (request.url === "/Education") {
        fs.readFile('./Education.html', function (error, buffer) {

            if (error) throw error;
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(buffer);
            response.end();
        });

    } else if (request.url === "/Entreprise") {
        fs.readFile('./Entreprise.html', function (error, buffer) {

            if (error) throw error;
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(buffer);
            response.end();
        });

    } else if (request.url === "/Design/" + reqUrl[2] + "/" + reqUrl[3]) {/* On récupère les CSS de notre dossier "css" afin de les appliquer */
        fs.readFile("./Design/" + reqUrl[2] + "/" + reqUrl[3], function (error, buffer) {

            if (error) throw error; /* Si erreur, le serveur l'affiche */
            response.writeHead(200, {"Content-Type": "text/" + reqUrl[2]}); /* Le serveur définit le type de contenu */
            response.write(buffer); /* Le buffer à une fonction de stockage */
            response.end(); /* Le serveur a renvoyé la page */
        });

    } else if (request.url === "/Design/" + reqUrl[2] + "/Icones/" + reqUrl[4]) {/* On récupère les images/icones de notre dossier "img" afin de les appliquer */
        fs.readFile("./Design/" + reqUrl[2] + "/Icones/" + reqUrl[4], function (error, buffer) {

            if (error) throw error;
            response.writeHead(200, {"Content-Type": "text/" + reqUrl[2]});
            response.write(buffer);
            response.end();
        });

    } else {/* Si l'URL n'est pas la bonne, le serveur renvoie une erreur */
        response.statusCode = 404; /* Définit le type d'erreur */
        response.setHeader('Content-Type', 'text/plain'); /* Définit le type de contenu, en l'occurrence un simple texte */
        response.end("Erreur 404, mauvaise URL."); /* Renvoie un texte qui montre l'erreur */
    }
});

server.listen(port, hostname, () => {
    console.log(`Le serveur est ouvert à http://${hostname}:${port}/`);
});