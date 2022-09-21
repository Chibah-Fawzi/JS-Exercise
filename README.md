# JS-Practice
Créer 3 listes : names - emails - passwords

Créer une liste vide d'users = users[]

on fait une loop qui tourne sur une des listes et on crée un objet
des infos qu'on a récup

on push l'objet vers users

On crée une function Login(email,password) => {
    on fais un find sur la listes users ou on cherche l'élement.email
    qui est égale à celui que l'utilisateur à tappé
    && l'élement.password qui est égale à celui que l'utilisateur 
    à tappé aussi

On crée une function Register(name, email,password) => {
    on crée un objet égale au premier et on remplace les valeurs par name,email
    et password,
    enfin on check si lelemnt.email et element.password éxiste dans la liste
    et on push l'objet si l'élement néxiste pas
