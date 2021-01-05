const http = require('http'); /* Initilialisation serveur */
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

function defineContent(ContentType) { /* Fonction qui va définir le type de contenu à chaque appel de fichier */

    switch (ContentType) { /* Fonction qui définit le type de contenu pour chaque fichier demandé */
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
            return 'Nothing';
    }
}

const server = http.createServer((request, response) => {
    let reqUrl = request.url.split('/');

    if (request.url === `/${reqUrl[1]}/${reqUrl[2]}`) { /* On demande de récupéerer les diférents fichiers dans les odssiers respectifs */
        fs.readFile(`./${reqUrl[1]}/${reqUrl[2]}`, (error, buffer) => {

            response.writeHead(200, {"Content-Type": defineContent(reqUrl[1])}); /* Le fichier exise bien, on définit son type avec la fonction */
            response.write(buffer); /* Stockage de l'info */
            response.end(); /* Tout a bien fonctionné */

        });

    } else {
        fs.readFile(displayPages(reqUrl[1]), (error, buffer) => { /*Permet d'afficher les pages HTML dmeandées */

            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(buffer);
            response.end();

        });
    }
});

server.listen(port, hostname, () => {
    console.log(`Serveur ouvert à http://${hostname}:${port}/`); /* Console.log pour afficher l'URL */
});