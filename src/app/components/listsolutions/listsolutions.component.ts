import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-listsolutions',
  templateUrl: './listsolutions.component.html',
  styleUrls: ['./listsolutions.component.scss'],
})
export class ListsolutionsComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 500,
    center: true,
    autoHeight: false,
    responsive: {
      // A revoir
      0: {
        items: 1.2,
      },
      450: {
        items: 1.5,
      },
      640: {
        items: 2,
      },
      940: {
        items: 2.75,
      },
      1200:{
        items: 3.5,
      }
    },
    nav: false,
  };

  solutions = [
    {
      icon:'../../../assets/icons/solutions/isolation.svg',
      title:['Isolation des combles', 'Isolation des murs'],
      list:[
        "Jusqu’a 30% d’économie d’énergie",
        "Améliore votre confort",
        "Réduction des nuisances sonores",
        "Eligible aux aides : MaPrimeRenov’, CEE et ECOPTZ",
        "Valorisation de votre bien"
      ],
      id:'isolation',
      type:'murs'
    },
    {
      icon:'../../../assets/icons/solutions/chauffe_eau_solaire.svg',
      title:['Chauffe-eau solaire'],
      list:[
        "Energie propre, renouvelable et gratuite",
        "Jusqu’à 85% d’économie d’énergie",
        "Eligible aux aides : MaPrimeRenov’, CEE et ECOPTZ",
        "Valorisation de votre bien",
      ],
      id:'ecs',
      type:'ces'
    },
    {
      icon:'../../../assets/icons/solutions/thermodynamique.svg',
      title:['Chauffe-eau thermodynamique'],
      list:[
        "Energie propre, renouvelable et gratuite",
        "Jusqu’à 70% d’économie d’énergie",
        "Connecté et pilotable a distance",
        "Eligible aux aides : MaPrimeRenov’, CEE et ECOPTZ",
        "Valorisation de votre bien",
      ],
      id:'ecs',
      type:'cet'
    },
    {
      icon:'../../../assets/icons/solutions/pompe_a_chaleur.svg',
      title:['Pompe à chaleur air eau'],
      list:[
        "En remplacement de chaudière gaz ou fioul",
        "Energie propre, renouvelable et gratuite",
        "Combinable avec un chauffage solaire",
        "Production de chauffage, eau chaude sanitaire et rafraichissement",
        "Jusqu’à 80% d’économie d’énergie",
        "Connectée et pilotable a distance",
        "Eligible aux aides : MaPrimeRenov’, CEE et ECOPTZ",
        "Valorisation de votre bien",
      ],
      id:'chauffage',
      type:'aireau'
    },
    {
      icon:'../../../assets/icons/solutions/chauffage_solaire.svg',
      title:['Chauffage solaire'],
      list:[
        "En remplacement de chaudière gaz ou fioul",
        "Energie propre, renouvelable et gratuite",
        "Combinable avec une pompe a chaleur air/eau",
        "Production de chauffage et d’eau chaude sanitaire",
        "Jusqu’a 85% d’économie d’énergie",
        "Eligible aux aides : MaPrimeRenov’, CEE et ECOPTZ",
        "Valorisation de votre bien",
      ],
      id:'chauffage',
      type:'solaire'
    },
    {
      icon:'../../../assets/icons/solutions/pompe_a_chaleur.svg',
      title:['Pompe à chaleur air air'],
      list:[
        "Sa facilité d’utilisation",
        "Une programmation personnalisée",
        "Du chauffage en hiver, du rafraîchissement en été",
        "De très hautes performances énergétiques",
        "Amélioration de la qualité de l’air",
        "Valorisation de bien",
        "66% à 75% d’économies sur votre facture de chauffage",
      ],
      id:'chauffage',
      type:'airair'
    },
    {
      icon:'../../../assets/icons/solutions/photovoltaique.svg',
      title:['Photovoltaïques'],
      list:[
        "Energie propre, renouvelable et gratuite",
        "Production d’électricité en autoconsommation",
        "Revente de surplus",
        "Jusqu’a 80% d’économie d’énergie",
        "Eligible aux aides : Prime a l’autoconsommation",
        "Garantie de 25 ans",
        "Valorisation de votre bien",
      ],
      id:'photovoltaique',
      type:'photovoltaique'
    },
  ]
}
