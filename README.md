--------------------------------------------JEU GEO ESCAPE 2022------------------------------------------
Réalisé par Lilian WECKER et Tristan HILLAIRET en novembre 2022

--------------------------------------------DESCRPTION DU JEU--------------------------------------------
Le jeu est un escape game se déroulant sur une carte. Il s'agit de se mettre dans la peau d'un enquêteur 
à la poursuite d'un serial-killer qui sévit à l'international. 

Le git est décomposé en trois page HTML liées chacune à leur propre page JavaScript et CSS. Il y a également
3 fichiers PHP : un fichier connect qui sert à connecter les autres à la BDD sur phpMyAdmin et 2 autres 
permettant de réaliser les fetch utilisés par les fichiers JavaScript. 
Enfin le dernier fichier est un mySQL qui sert à importer localement la BDD objets_geoescape composée de 3 
tables (objets, joueurs, icone).

Ce jeu est programmé avec 4 types de languages : HTML, JavaScript, PHP, CSS.

-------------------------------------------TELECHARGEMENT-------------------------------------------------
Pour pouvoir jouer, l'installation de MAMP est nécéssaire : si vous ne le possèdez pas, il faut l'installer
(lien vers mamp : https://www.mamp.info/en/downloads/ ). Il exsite deux façons pour télécharger le jeu:

1- (Version conseillée) Si vous possèdez GIT, il faut cloner le projet git depuis github dans un fichier 
GeoEscape. Puis depuis localhost, connectez-vous à phpMyAdmin (avec Windows : http://localhost/phpMyAdmin/ 
ou MacOS : http://localhost:8888/phpMyAdmin5) depuis cette page, créez une bdd se nommant "bddgeoescape" 
puis importez le fichier "BDDGEOESCAPE.sql". Vous possédez dorénavant la base de données localement.
Une fois ceci réalisé, vérifiez que le fichier de lecture de MAMP est bien GeoEscape (Préférences > Serveur > Dossier racine)
puis lancez en localhost sur un navigateur le fichier GeoEscape_acceuil.html .

2- Si vous ne possèdez pas git, clquez sur code (bouton en vert), puis "download ZIP". 
Une fois le ZIP téléchargé, il vous suffit de l'extraire dans un fichier GeoEscape. Puis depuis localhost,
connectez-vous à phpMyAdmin (avec Windows : http://localhost/phpMyAdmin/ ou MacOS : http://localhost:8888/phpMyAdmin5 )
depuis cette page importez le fichier BDDGEOESCAPE.sql, exécutez en créant une bdd du même nom (et seulement 
ce nom) puis en important le fichier SQL. Vous possédez dorénavant la base de données localement. Une 
fois ceci réalisé vérifiez que le fichier de lecture de MAMP est bien GeoEscape (Préférences > Serveur > 
Dossier racine). Puis lancez en localhost sur un navigateur le fichier  GeoEscape_acceuil.html .


---------------------------------------SOLUTION--------------------------------------------------------
ATTENTION !! Cette partie est réservé à la notation du jeu et du projet (si vous voulez vraiment jouer
ne lisez pas !)



PARIS : - A côté du corps, cliquez sur les billets pour les mettre dans votre inventaire.
        - Le corps est disposé de manière à indiquer le Nord-Est, ce qui indique l'aéroport.
        - Une fois à l'aéroport cliquez sur le PDG qui vous indique que vous devez vous rendre à Amsterdam.

AMSTERDAM : - Au poste de police dévérouillez la lettre avec le mot NEMO
            - La lettre vous indique le zoo au sud-est du centre ville
            - Passer votre souris sur la statue de la liberté et retenez la longitude (51)
            - La statue de la liberté vous donne l'indice de vous rendre à New York

NEW YORK :  - Rendez vous directement à la statue de la liberté où se trouve un big ben miniature
            - Passez votre souris au dessus du big ben et retenez la latitude donnée (00)
            - Dans l'ordinateur de police donnez le code 5100 (lon+lat)
            - La carte vous indique ou vous rendre précisément à Londres.

LONDRES :   - A l'adresse donnée par la carte, récupérez l'empreinte digitale.
            - Une fois l'empreinte dans votre inventaire, cliquez sur l'ordinateur de police.
            - L'ordinateur vous donne un fichier de police avec les caractéristiques de l'individu 
            en passant votre souris dessus.
            - Rendez vous à l'adresse donnée sur le fichier à Saint-Germain en Laye (Ouest de
            Paris et Nanterre)

SAINT-GERMAIN-EN-LAYE : - L'adresse se trouve prêt de la gare RER, à l'Ouest (ou juste en dessous de la forêt)
                        - Cliquez sur le criminel pour le mettre dans votre inventaire une fois cela fait, 
                        cliquez vite sur le bouton Arrestation pour arrêter le chrono.
                        - La partie est finie !!!!

