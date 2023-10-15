import React from "react";

import JoaquinPhoenix from "../assets/casting/joaquin_phoenix.webp";
import BillCamp from "../assets/casting/bill_camp.png";
import BrettCullen from "../assets/casting/brett_cullen.webp";
import FrancesConroy from "../assets/casting/frances_conroy.webp";
import GlennFleshler from "../assets/casting/glenn_fleshler.jpg";
import JoshPais from "../assets/casting/josh_pais.jpg";
import LeighGill from "../assets/casting/Leigh_Gill.jpg";
import RobertDeNiro from "../assets/casting/robert_de_niro.webp";
import SheaWhigham from "../assets/casting/shea_whigham.webp";
import ZazieBeetz from "../assets/casting/zazie_beetz.webp"

import avatar1 from "../assets/avatar-1.png"
import avatar2 from "../assets/avatar-2.png"
import avatar3 from "../assets/avatar-3.png"
import avatar4 from "../assets/avatar-4.png"
import avatar5 from "../assets/avatar-5.png"



// image_movie
import Joaquin from "../assets/casting/hover/Joaquin.jpeg";
import Bill from "../assets/casting/hover/bill camp.jpeg";
import Brett from "../assets/casting/hover/Brett.jpeg";
import Frances from "../assets/casting/hover/frances conroy.jpeg";
import Glenn from "../assets/casting/hover/Glenn Fleshler.jpeg";
import Josh from "../assets/casting/hover/josh.png";
import Leigh from "../assets/casting/hover/leigh.jpeg";
import Robert from "../assets/casting/hover/Robert.jpeg";
import Shea from "../assets/casting/hover/shea.jpeg";
import Zazie  from "../assets/casting/hover/Zazie.jpeg"


const Film = {
    Genre: "Policier, Drame, Thriller",
    titre: "Joker",
    notation: 4.5,
    star: 4,
    date: "2019",
    Groupes: "Batman",
    Scénaristes : "Todd Phillips, Scott Silver",
    pays: "Etats-Unis",
    vue: "46.6k",
    synopsys: "Le film, qui relate une histoire originale inédite sur grand écran, se focalise sur la figure emblématique de l’ennemi juré de Batman. Il brosse le portrait d’Arthur Fleck, un homme sans concession méprisé par la société.",
    description: "Dans les années 1980, à Gotham City, Arthur Fleck, un comédien de stand-up raté est agressé alors qu'il erre dans les rues de la ville déguisé en clown. Méprisé de tous et bafoué, il bascule peu à peu dans la folie pour devenir le Joker, un dangereux tueur psychotique.",
    durée: "2h06",
    produceurs : [],
    Réalisateur : "Todd Phillips" ,
    critiques: [
        {
            img: avatar1,
            nom: "Alice Dupont",
            critique: "Le Joker est un chef-d'œuvre cinématographique qui explore la transformation terrifiante d'Arthur Fleck en ce dangereux tueur psychotique. Joaquin Phoenix livre une performance exceptionnelle dans le rôle principal, méritant amplement son Oscar."
        },
        {
            img: avatar2,
            nom: "Benjamin Reyes",
            critique: "Le film plonge profondément dans la psyché du Joker, dépeignant de manière poignante la marginalisation et la descente aux enfers du personnage. C'est un tour de force de narration et de cinématographie."
        },
        {
            img: avatar3,
            nom: "Claire Anderson",
            critique: "La représentation sombre et réaliste de Gotham City dans les années 1980 crée une atmosphère oppressante qui contribue grandement à l'impact émotionnel du film."
        },
        {
            img: avatar4,
            nom: "David Mitchell",
            critique: "La musique de Hildur Guðnadóttir ajoute une couche supplémentaire d'émotion au film, renforçant la profondeur des scènes et des performances."
        },
        {
            img: avatar5,
            nom: "Emily Taylor",
            critique: "La transformation physique de Joaquin Phoenix pour le rôle est remarquable, et sa maigreur extrême reflète la souffrance du personnage."
        }
    ],
    
    questions: [
        {
            question: "Comment le film parvient-il à faire ressentir de l'empathie pour un personnage aussi sombre et perturbé que le Joker?",
            reponse: "Le film réussit à susciter de l'empathie pour le Joker en plongeant profondément dans son histoire personnelle, en montrant les circonstances qui l'ont conduit à devenir le personnage que nous connaissons, et en mettant en avant sa vulnérabilité."
        },
        {
            question: "Quels éléments visuels ou symboliques dans le film contribuent à la représentation de la folie d'Arthur Fleck?",
            reponse: "Le film utilise des éléments visuels tels que la transformation physique du personnage, la symbolique du maquillage du Joker et la mise en scène des moments de sa descente dans la folie pour représenter de manière puissante la transformation d'Arthur Fleck en Joker."
        },
        {
            question: "En quoi le Joker de Joaquin Phoenix se distingue-t-il des autres interprétations emblématiques du personnage, comme celle de Heath Ledger?",
            reponse: "Joaquin Phoenix apporte une dimension de vulnérabilité et de complexité au personnage du Joker, le rendant plus humain et accessible. Son interprétation se concentre davantage sur l'aspect psychologique du personnage, ce qui le distingue de la version plus anarchique et nihiliste de Heath Ledger."
        },
        {
            question: "Le film aborde-t-il des thèmes sociaux ou politiques pertinents pour notre époque, en plus de son récit sur l'ascension du Joker?",
            reponse: "Oui, le film aborde des thèmes tels que la marginalisation sociale, les inégalités économiques, la violence urbaine et la détérioration de la santé mentale, ce qui le rend pertinent pour notre époque et permet une réflexion sur les problèmes sociétaux actuels."
        },
        {
            question: "Quels sont les moments clés du film qui ont le plus marqué les spectateurs et ont contribué à son succès?",
            reponse: "Parmi les moments clés qui ont marqué les spectateurs figurent la danse iconique du Joker sur les marches, sa transformation dans la salle de bain, ainsi que les scènes de violence qui reflètent la montée en puissance du personnage. Ces scènes ont contribué à créer une expérience cinématographique mémorable."
        }
    ],
    Casting: [
        { nom: "Joaquin Phoenix", image: JoaquinPhoenix, image_movie: Joaquin },
        { nom: "Bill Camp", image: BillCamp, image_movie: Bill },
        { nom: "Brett Cullen", image: BrettCullen, image_movie: Brett },
        { nom: "Frances Conroy", image: FrancesConroy, image_movie: Frances },
        { nom: "Glenn Fleshler", image: GlennFleshler, image_movie: Glenn },
        { nom: "Josh Pais", image: JoshPais, image_movie: Josh },
        { nom: "Leigh Gill", image: LeighGill, image_movie: Leigh },
        { nom: "Robert De Niro", image: RobertDeNiro, image_movie: Robert },
        { nom: "Shea Whigham", image: SheaWhigham, image_movie: Shea },
        { nom: "Zazie Beetz", image: ZazieBeetz, image_movie: Zazie }
    ]
};

export default Film