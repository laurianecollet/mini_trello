# VueJS Bus - Store


But: Refaire un Mini-Trello


Créer une liste de 10 tâches (tableau d’objet direct) dans le Store avec ces données : 

* Une tâche est décrite par les éléments suivants:
* Un intitulé
* Une criticité (de 0 à 10)
* Un nb d’heure
* Visibilité (true ou false)

* On affichera que les tâches visibles dans un composant Liste et un composant Tâche pour le détail de la tâche.
* Créer un composant formulaire permettant d’ajouter une tâche dans un tableau.

* Créer un composant Navbar qui réagit quand une nouvelle tâche arrive (Bus) et affiche un icon “alert”.


* Ajouter des boutons permettant de supprimer une tâche

* Changer la couleur du fond en rouge de la Navbar quand il me reste plus que 1 tâche dans ma liste

* Afficher dans la Navbar le nombre d’heures en moyenne des tâches 
* Afficher dans la Navbar le nombre d’heures total du projet (somme des tâches)
* Au bout de 3 tâches supprimées, afficher un message “Hé oh ! Doucement” dans le composant Form en dessous du formulaire
* Créer un composant Search qui permet de filtrer les tâches par leur intitulé : Pour le search https://gist.github.com/Symfomany/026cdaa7a48da31c33d08a33ccfc18b2


* Créer un composant Range qui permettra de filtrer les tâches par leur nombre d’heure avec un input range

-------------


* Créer une route “/critique” que les tâches à criticité de 7 à 10
* Créer une route “/invisible” qui listerons les tâches qui sont invisibles (visible = false)

