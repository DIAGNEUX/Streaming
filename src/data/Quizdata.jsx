import Films from "./data"
import img_b_panther from "../assets/BlackPanther/black_panther.jpg"
import img_avengers from "../assets/Avengers/avengers_endgame.jpg"
import img_f_furious from "../assets/FastandFurious/fast_furious_9.jpg"
import img_joker from "../assets/joker/joker grand.jpg"
import img_lalaland from "../assets/La La Land/la_la_land.jpg"
import img_SDA from "../assets/SeigneurdesAnneaux/le_seigneur_des_anneaux.jpg"
import img_titanic from "../assets/Titanic/titanic.jpg"
import img_WAF from "../assets/We Are Your Friends/we_are_your_friends.jpg"

    const QuizData = {
      joker: [ 
        {
          question: "Qui joue le rôle principal du Joker dans le film ?",
          img:img_joker,
          options: ["Johnny Depp", "Robert De Niro", "Joaquin Phoenix", "Leonardo DiCaprio"],
          reponse: "Joaquin Phoenix"
        },
        {
          question: "Où se déroule principalement l'intrigue du film 'Joker' ?",
          options: ["New York", "Los Angeles", "Gotham City", "Chicago"],
          reponse: "Gotham City"
        },
        {
          question: "Pourquoi le personnage d'Arthur Fleck devient-il le Joker ?",
          options: [
            "Il veut devenir un super-héros",
            "Il est poussé à bout par la société",
            "Il perd un pari",
            "Il souhaite devenir un comique célèbre"
          ],
          reponse: "Il est poussé à bout par la société"
        },
        {
          question: "Quel prix a remporté Joaquin Phoenix pour son rôle de Joker aux Oscars ?",
          options: ["Meilleur acteur dans un second rôle", "Meilleur acteur", "Meilleur réalisateur", "Meilleur scénario original"],
          reponse: "Meilleur acteur"
        },
        {
          question: "Qui a réalisé le film 'Joker' ?",
          options: ["Martin Scorsese", "Quentin Tarantino", "Christopher Nolan", "Todd Phillips"],
          reponse: "Todd Phillips"
        },
        {
          question: "Quel trouble mental souffre le personnage principal du film ?",
          options: ["Schizophrénie", "Trouble bipolaire", "Amnésie", "Agoraphobie"],
          reponse: "Trouble bipolaire"
        },
        {
          question: "Quelle est la profession du personnage d'Arthur Fleck avant de devenir le Joker ?",
          options: ["Comédien de stand-up", "Avocat", "Médecin", "Policier"],
          reponse: "Comédien de stand-up"
        },
        {
          question: "Quel est le nom de la mère du personnage d'Arthur Fleck ?",
          options: ["Martha Wayne", "Sarah Connor", "Penny Fleck", "Alice Johnson"],
          reponse: "Penny Fleck"
        }
      ],
      LaLaLand: [
        {
          question: "Quels acteurs principaux jouent les rôles de Mia et Sebastian dans 'La La Land' ?",
          img:img_lalaland,
          options: ["Ryan Gosling et Emma Stone", "Brad Pitt et Angelina Jolie", "Tom Hanks et Julia Roberts", "Leonardo DiCaprio et Kate Winslet"],
          reponse: "Ryan Gosling et Emma Stone"
        },
        {
          question: "Où se déroule principalement l'intrigue du film 'La La Land' ?",
          options: ["New York", "Los Angeles", "Chicago", "Paris"],
          reponse: "Los Angeles"
        },
        {
          question: "Quelle est la profession de Mia, le personnage joué par Emma Stone, dans le film ?",
          options: ["Actrice", "Danseuse", "Chanteuse", "Serveuse"],
          reponse: "Actrice"
        },
        {
          question: "Quel réalisateur a dirigé le film 'La La Land' ?",
          options: ["Steven Spielberg", "Quentin Tarantino", "Christopher Nolan", "Damien Chazelle"],
          reponse: "Damien Chazelle"
        },
        {
          question: "Combien d'Oscars a remporté le film 'La La Land' en 2017 ?",
          options: ["Aucun", "3", "6", "11"],
          reponse: "6"
        },
        {
          question: "Quelle célèbre scène de danse a lieu sur un pont d'autoroute dans le film ?",
          options: ["La valse des étoiles", "La valse de la lune", "Le tango du crépuscule", "Le tango des étoiles"],
          reponse: "La valse des étoiles"
        },
        {
          question: "Quelle est la principale ambition de Sebastian, le personnage de Ryan Gosling, dans le film ?",
          options: ["Devenir acteur", "Ouvrir un restaurant de jazz", "Gagner une compétition de danse", "Devenir un artiste de rue"],
          reponse: "Ouvrir un restaurant de jazz"
        },
        {
          question: "Quelle chanson remporte le duo Mia et Sebastian dans le film ?",
          options: ["City of Stars", "Another Day of Sun", "Audition (The Fools Who Dream)", "Someone in the Crowd"],
          reponse: "City of Stars"
        }
      ],
      BlackPanther: [
        {
          titre:"Black Panther" ,
          question: "Qui joue le rôle de Black Panther/T'Challa dans le film 'Black Panther' ?",
          img:img_b_panther ,
          options: ["Chadwick Boseman", "Michael B. Jordan", "Lupita Nyong'o", "Danai Gurira"],
          reponse: "Chadwick Boseman"
        },
        {
          question: "Quelle est la nation fictive dont T'Challa est le roi et Black Panther ?",
          options: ["Wakanda", "Zamunda", "Genovia", "Atlantis"],
          reponse: "Wakanda"
        },
        {
          question: "Quel métal rare est abondant dans le sol de Wakanda et est utilisé pour fabriquer la tenue de Black Panther ?",
          options: ["Vibranium", "Kryptonite", "Mithril", "Adamantium"],
          reponse: "Vibranium"
        },
        {
          question: "Quelle actrice joue le rôle de Nakia, une espionne de Wakanda, dans le film ?",
          options: ["Lupita Nyong'o", "Letitia Wright", "Angela Bassett", "Danai Gurira"],
          reponse: "Lupita Nyong'o"
        },
        {
          question: "Qui est l'antagoniste principal du film 'Black Panther' ?",
          options: ["Killmonger", "Loki", "Ultron", "Red Skull"],
          reponse: "Killmonger"
        },
        {
          question: "Quel réalisateur a dirigé le film 'Black Panther' ?",
          options: ["Steven Spielberg", "Quentin Tarantino", "Christopher Nolan", "Ryan Coogler"],
          reponse: "Ryan Coogler"
        },
        {
          question: "Quel membre de la royauté de Wakanda est également connu sous le nom de Shuri ?",
          options: ["La sœur de T'Challa", "La mère de T'Challa", "La grand-mère de T'Challa", "La tante de T'Challa"],
          reponse: "La sœur de T'Challa"
        },
        {
          question: "Quelle cérémonie doit être accomplie pour qu'un individu devienne le roi de Wakanda et le Black Panther ?",
          options: ["La cérémonie de l'épée", "La cérémonie du trône", "La cérémonie du corbeau", "La cérémonie du lion"],
          reponse: "La cérémonie du corbeau"
        }
      ],
      FastAndFurious9: [
        {
          question: "Qui joue le rôle de Dominic Toretto dans le film 'Fast & Furious 9' ?",
          img:img_f_furious ,
          options: ["Vin Diesel", "Dwayne Johnson", "Jason Statham", "Paul Walker"],
          reponse: "Vin Diesel"
        },
        {
          question: "Quel acteur incarne le personnage de Luke Hobbs dans la franchise 'Fast & Furious' ?",
          options: ["Dwayne Johnson", "Jason Statham", "Kurt Russell", "Tyrese Gibson"],
          reponse: "Dwayne Johnson"
        },
        {
          question: "Quel est le surnom de Dominic Toretto dans la franchise 'Fast & Furious' ?",
          options: ["Dom", "Speedster", "Torpedo", "Nitro"],
          reponse: "Dom"
        },
        {
          question: "Quelle est la principale compétence de Tej Parker dans l'équipe de Dom Toretto ?",
          options: ["Pilote", "Hacker", "Mécanicien", "Artificier"],
          reponse: "Hacker"
        },
        {
          question: "Qui est le méchant principal du film 'Fast & Furious 9' ?",
          options: ["Cipher", "Shaw", "Jakob Toretto", "Deckard"],
          reponse: "Jakob Toretto"
        },
        {
          question: "Quel membre de la famille Toretto revient après avoir été présumé mort dans le film ?",
          options: ["Brian O'Conner", "Letty Ortiz", "Mia Toretto", "Han Lue"],
          reponse: "Han Lue"
        },
        {
          question: "Quel objet est souvent utilisé comme arme par les personnages de la franchise 'Fast & Furious' ?",
          options: ["Clé à molette", "Clé USB", "Clé de contact", "Clé anglaise"],
          reponse: "Clé à molette"
        },
        {
          question: "Quelle est la devise de Dom Toretto dans la franchise 'Fast & Furious' ?",
          options: ["Rapidité avant tout", "Famille avant tout", "Justice avant tout", "Adrénaline avant tout"],
          reponse: "Famille avant tout"
        }
      ],
      SeigneurdesAnneaux: [
        {
          question: "Qui est l'auteur du roman 'Le Seigneur des Anneaux' ?",
          img:img_SDA ,
          options: ["J.K. Rowling", "C.S. Lewis", "George R.R. Martin", "J.R.R. Tolkien"],
          reponse: "J.R.R. Tolkien"
        },
        {
          question: "Quel est le nom de l'anneau magique au centre de l'intrigue de 'Le Seigneur des Anneaux' ?",
          options: ["Anneau de puissance", "Anneau unique", "Anneau d'or", "Anneau de contrôle"],
          reponse: "Anneau unique"
        },
        {
          question: "Qui est l'ennemi principal de la Terre du Milieu dans la trilogie 'Le Seigneur des Anneaux' ?",
          options: ["Sauron", "Dumbledore", "Gandalf", "Voldemort"],
          reponse: "Sauron"
        },
        {
          question: "Quel personnage est chargé de détruire l'Anneau unique dans la trilogie ?",
          options: ["Frodo Baggins", "Aragorn", "Legolas", "Gimli"],
          reponse: "Frodo Baggins"
        },
        {
          question: "Comment s'appelle la langue fictive inventée par J.R.R. Tolkien pour les peuples de la Terre du Milieu ?",
          options: ["Élfique", "Klingon", "Dothraki", "Quenya"],
          reponse: "Élfique"
        },
        {
          question: "Qui est le roi des Rohirrim, le peuple des cavaliers, dans 'Le Seigneur des Anneaux' ?",
          options: ["Théoden", "Éomer", "Denethor", "Aragorn"],
          reponse: "Théoden"
        },
        {
          question: "Quel personnage est surnommé 'Gris-Gandalf' en raison de sa transformation ?",
          options: ["Saruman", "Radagast", "Gollum", "Gimli"],
          reponse: "Saruman"
        },
        {
          question: "Quel est le titre du premier livre de la trilogie 'Le Seigneur des Anneaux' ?",
          options: ["La Communauté de l'Anneau", "Les Deux Tours", "Le Retour du Roi", "Le Hobbit"],
          reponse: "La Communauté de l'Anneau"
        }
      ],
      Avengers : [
        {
          question: "Qui est le leader des Avengers dans le Marvel Cinematic Universe (MCU) ?",
          img: img_avengers,
          options: ["Iron Man", "Thor", "Hulk", "Captain America"],
          reponse: "Captain America"
        },
        {
          question: "Quel super-héros possède un puissant marteau appelé Mjolnir ?",
          options: ["Iron Man", "Thor", "Hawkeye", "Black Widow"],
          reponse: "Thor"
        },
        {
          question: "Quelle pierre d'infinité est la première à être introduite dans le MCU ?",
          options: ["Pierre de l'âme", "Pierre de l'esprit", "Pierre du temps", "Pierre de l'espace"],
          reponse: "Pierre de l'espace"
        },
        {
          question: "Qui est l'antagoniste principal dans le premier film des Avengers ?",
          options: ["Loki", "Thanos", "Ultron", "Red Skull"],
          reponse: "Loki"
        },
        {
          question: "Quel super-héros est connu pour sa super-force et son apparence verte lorsque sa colère monte ?",
          options: ["Black Widow", "Iron Man", "Spider-Man", "Hulk"],
          reponse: "Hulk"
        },
        {
          question: "Qui est l'archer habile au sein des Avengers ?",
          options: ["Captain America", "Hawkeye", "Black Widow", "Ant-Man"],
          reponse: "Hawkeye"
        },
        {
          question: "Quel super-héros porte un arc rétractable et est surnommé 'l'homme fourmi' ?",
          options: ["Thor", "Spider-Man", "Ant-Man", "Black Panther"],
          reponse: "Ant-Man"
        },
        {
          question: "Quelle actrice joue le rôle de Black Widow dans le MCU ?",
          options: ["Scarlett Johansson", "Natalie Portman", "Elizabeth Olsen", "Gwyneth Paltrow"],
          reponse: "Scarlett Johansson"
        }
      ],
      Titanic: [
        {
          question: "Qui sont les deux acteurs principaux du film 'Titanic' ?",
          img:  img_titanic,
          options: ["Leonardo DiCaprio et Kate Winslet", "Brad Pitt et Angelina Jolie", "Tom Hanks et Meg Ryan", "Johnny Depp et Keira Knightley"],
          reponse: "Leonardo DiCaprio et Kate Winslet"
        },
        {
          question: "Dans quel océan le naufrage du Titanic s'est-il produit ?",
          options: ["Océan Pacifique", "Océan Atlantique Nord", "Océan Indien", "Océan Arctique"],
          reponse: "Océan Atlantique Nord"
        },
        {
          question: "Quel est le nom du paquebot qui a recueilli les survivants du Titanic ?",
          options: ["Queen Mary", "Carpathia", "Lusitania", "Mauretania"],
          reponse: "Carpathia"
        },
        {
          question: "Combien de personnes ont survécu au naufrage du Titanic ?",
          options: ["705", "1 523", "0", "2 224"],
          reponse: "705"
        },
        {
          question: "Quel est le nom du personnage interprété par Leonardo DiCaprio dans le film ?",
          options: ["Jack Dawson", "Cal Hockley", "Rose DeWitt Bukater", "Molly Brown"],
          reponse: "Jack Dawson"
        },
        {
          question: "Quelle est la célèbre musique thème du film 'Titanic' composée par James Horner ?",
          options: ["My Heart Will Go On", "Every Breath You Take", "Bohemian Rhapsody", "Yesterday"],
          reponse: "My Heart Will Go On"
        },
        {
          question: "Dans quelle année le Titanic a-t-il fait naufrage ?",
          options: ["1912", "1914", "1907", "1920"],
          reponse: "1912"
        },
        {
          question: "Qui a réalisé le film 'Titanic' ?",
          options: ["James Cameron", "Martin Scorsese", "Steven Spielberg", "Ridley Scott"],
          reponse: "James Cameron"
        }
      ],
      WeAreYourFriends: [
        {
          question: "Quel acteur joue le rôle principal de 'We Are Your Friends' ?",
          img: img_WAF,
          options: ["Zac Efron", "Miles Teller", "Ansel Elgort", "Dave Franco"],
          reponse: "Zac Efron"
        },
        {
          question: "Dans quel milieu évolue le personnage principal, Cole, du film ?",
          options: ["Musique électronique", "Cinéma", "Finance", "Journalisme"],
          reponse: "Musique électronique"
        },
        {
          question: "Quel est le nom du DJ superstar qui prend Cole sous son aile ?",
          options: ["Martin Garrix", "David Guetta", "Calvin Harris", "Skrillex"],
          reponse: "Skrillex"
        },
        {
          question: "Où se déroule principalement l'action du film 'We Are Your Friends' ?",
          options: ["Los Angeles", "Miami", "New York", "Las Vegas"],
          reponse: "Los Angeles"
        },
        {
          question: "Quelle est la passion de Cole dans le film, à part la musique électronique ?",
          options: ["La danse", "Le dessin", "La cuisine", "Le surf"],
          reponse: "La cuisine"
        },
        {
          question: "Quel est le nom de la boîte de nuit où Cole rêve de jouer en tant que DJ ?",
          options: ["Xanadu", "EDM Heaven", "Euphoria", "Palm Royale"],
          reponse: "Xanadu"
        },
        {
          question: "Qui est le réalisateur du film 'We Are Your Friends' ?",
          options: ["David Fincher", "Michael Bay", "Max Joseph", "James Wan"],
          reponse: "Max Joseph"
        },
        {
          question: "Quelle est la devise de Cole dans le film ?",
          options: ["Invente ta propre vie", "Suis ton instinct", "Vise les étoiles", "Suis tes rêves"],
          reponse: "Suis tes rêves"
        }
      ],
      }

      export default QuizData
      