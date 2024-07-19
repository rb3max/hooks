import React from 'react'
import Cards from './Cards'

const List = ({search}) => {
    let movies=[
        {
          image:"https://egybest.onl/wp-content/uploads/2021/03/Game-of-Thrones-S07-6.jpg",
          name:"game of thrones",
          genre:" fantasy",
          description:"Neuf familles nobles rivalisent pour le contrôle du Trône de Fer dans les sept royaumes de Westeros. Pendant ce temps, des anciennes créatures mythiques oubliées reviennent pour faire des ravages."
        },  
        {
            image:"https://egybest.onl/wp-content/uploads/2017/03/Breaking-Bad-The-Movie-2017.jpg",
            name:"breaking bad",
            genre:"drugs ",
            description:"Walter White, 50 ans, est professeur de chimie dans un lycée du Nouveau-Mexique. Pour réunir de l'argent afin de subvenir aux besoins de sa famille, Walter met ses connaissances en chimie à profit pour fabriquer et vendre du crystal meth."
        },
        {
            image:"https://egybest.onl/wp-content/uploads/2017/03/Prison-Break-S01.jpg",
            name:"prison break",
            genre:"action",
            description:"Son frère injustement accusé de meurtre, un ingénieur en génie civil décide de le faire évader de prison."
        },
        {
            image:"https://egybest.onl/wp-content/uploads/2022/04/Peaky-Blinders-1-1-1.jpg",
            name:"peaky blinders",
            genre:"action ,history",
            description:"Birmingham, en 1919. Un gang familial règne sur un quartier de la ville : les Peaky Blinders, ainsi nommés pour les lames de rasoir qu'ils cachent dans la visière de leur casquette.   "
        },
        {
            image:"https://egybest.onl/wp-content/uploads/2022/08/House-of-the-Dragon-1.jpg",
            name:"house of the dragon",
            genre:"fantasy",
            description:"L'histoire de la maison Targaryen, 200 ans avant les événements de Game of Thrones. Les partisans d'Aegon s'opposent à ceux de sa demi-soeur Rhaenyra, pour conquérir le trône de Viserys I, leur défunt père."
        },
        {
            image:"https://egybest.onl/wp-content/uploads/2016/08/From-the-Dark.jpg",
            name:"from",
            genre:"horror",
            description:"Une ville cauchemardesque du centre des Etats-Unis piège tous ceux qui y entrent. Alors que les habitants se battent pour conserver un sentiment de normalité et cherchent une issue, ils doivent également survivre aux menaces de la forêt environnante."
        },
        {
            image:"https://egybest.onl/wp-content/uploads/2020/04/Outer-Banks-1.jpg",
            name:"outer banks",
            genre:"adventure",
            description:"Un adolescent demande à ses trois meilleurs amis de partir à la recherche d'un trésor légendaire lié à la disparition de son père. Cependant, cette aventure s'avère être un danger pour toutes les personnes impliquées."
        },
        {
            image:"https://egybest.onl/wp-content/uploads/2016/08/Interstellar-Wars-2016.jpg",
            name:"interstellar",
            genre:"sience fiction",
            description:"Dans un proche futur, la Terre est devenue hostile pour l'homme. Les tempêtes de sable sont fréquentes et il n'y a plus que le maïs qui peut être cultivé, en raison d'un sol trop aride. Cooper est un pilote, recyclé en agriculteur, qui vit avec son fils et sa fille dans la ferme familiale."
          },  
          {
            image:"https://egybest.onl/wp-content/uploads/2017/03/Titanic.jpg",
            name:"titanic",
            genre:"romance",
            description:"En 1997, l'épave du Titanic est l'objet d'une exploration fiévreuse, menée par des chercheurs de trésor en quête d'un diamant bleu qui se trouvait à bord. Frappée par un reportage télévisé, l'une des rescapées du naufrage, âgée de 102 ans, Rose DeWitt, se rend sur place et évoque ses souvenirs. 1912."
          },  
          {
            image:"https://egybest.onl/wp-content/uploads/2019/12/Jumanji-The-Next-Level.jpg",
            name:"jumanji",
            genre:"adventure",
            description:"Lors d'une partie de Jumanji, un jeu très ancien, le jeune Alan est propulsé sous les yeux de son amie d'enfance, Sarah, dans un étrange pays. Il ne pourra s'en échapper que lorsqu'un autre joueur reprendra la partie et le libérera sur un coup de dés. Vingt-six ans plus tard, il retrouve le monde réel par le coup de dés de deux autres jeunes joueurs, Judy et Peter."
          },  
          
                
    ]
  return (
    <div>
        <div className='list'>
            {movies.filter(e=>e.name.toLocaleUpperCase().includes(search.toLocaleUpperCase())).map(el=><Cards el={el}/>)}
        </div>
    </div>
  )
}

export default List