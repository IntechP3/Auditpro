const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

function defineContent(ContentType) { /* Fonction qui va définir le type de contenu à chaque appel de fichier */

    switch (ContentType) {
        case 'css':
            return "text/css";
        case 'javascript':
            return "text/javascript";
        case 'img':
            return "image/png";
        default:
            return "text/plain";
    }
}

function displayPages(Pages) { /* Fonction qui va récupérer la page demandée */

    switch (Pages) {
        case '':
            return './html/Accueil.html';
        case 'Medico-Social':
            return './html/Medico-Social.html';
        case 'Education':
            return './html/Education.html';
        case 'Entreprise':
            return './html/Entreprise.html';
        case 'Access':
            return './html/AccesSecu.html';
        case 'Documentation':
            return './html/Documentation.html';
        case 'InfosEduc':
            return './html/InfosEduc.html';
        case 'InfosEntreprise':
            return './html/InfosEntreprise.html';
        case 'InfosMedico':
            return './html/InfosMedico.html';
        default:
            return './html/error.html';
    }
}

const server = http.createServer((request, response) => {
    let reqUrl = request.url.split('/');

    if (request.url === `/${reqUrl[1]}/${reqUrl[2]}`) {
        fs.readFile(`./${reqUrl[1]}/${reqUrl[2]}`, (error, buffer) => {

            response.writeHead(200, {"Content-Type": defineContent(reqUrl[1])});
            response.write(buffer);
            response.end();

        });

    } else {
        fs.readFile(displayPages(reqUrl[1]), (error, buffer) => {

            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(buffer);
            response.end();

        });
    }
});

server.listen(port, hostname, () => {
    console.log(`Serveur ouvert à http://${hostname}:${port}/`);
});