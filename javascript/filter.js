function nameFilter() {
    // Declaration des variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("Listing");
    li = ul.getElementsByTagName('li');

    // Passage en revue de tous les éléments de la liste et masquer ceux qui ne correspondent pas à la requête de recherche

    for (i = 0; i < li.length; i++) { //Pour chaque element dans Listing
        a = li[i].getElementsByTagName("a")[0]; //récupère les éléments 1 par 1
        txtValue = a.textContent || a.innerText; //récupère le contenu de l'élément choisi
        if (txtValue.toUpperCase().indexOf(filter) > -1) { //si le contenu de l'élément contient txtvalue, alors
            li[i].style.display = ""; //mettre le display par défaut
        } else {
            li[i].style.display = "none"; //sinon, le cacher
        }
    }
}