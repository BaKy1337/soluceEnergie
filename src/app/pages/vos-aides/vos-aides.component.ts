import { Component } from '@angular/core';

@Component({
  selector: 'app-vos-aides',
  templateUrl: './vos-aides.component.html',
  styleUrls: ['./vos-aides.component.scss']
})
export class VosAidesComponent {
  aidsForWork = [
    {
      icon : '../../../assets/icons/solutions/photovoltaique.svg',
      title : 'Panneaux Solaires',
      list : [
        "Prime à l'autoconsommation",
        "Eco PTZ",
        "Obligation d'achat de l'électricité",
        "Panneaux solaires hybrides Dualsun",
        "Prime CEE",
        "Ma Prime Renov’",
      ]
    },
    {
      icon : '../../../assets/icons/solutions/pompe_a_chaleur.svg',
      title : 'Pompe à Chaleur AIR/EAU',
      list : [
        "Prime CEE",
        "Ma Prime Renov’",
        "Provence Eco Renov’ (Bouches du Rhône)",
      ]
    },
    {
      icon : '../../../assets/icons/solutions/chauffe_eau_solaire.svg',
      title : 'Chauffe-eau Solaire',
      list : [
        "Prime CEE",
        "Ma Prime Renov’",
      ]
    },
    {
      icon : '../../../assets/icons/solutions/thermodynamique.svg',
      title : 'Chauffe-eau Thermodynamique',
      list : [
        "Prime CEE",
        "Ma Prime Renov’",
        "Provence Eco Renov’ (Bouches du Rhône)",
      ]
    },
  ]

  differentAids = {
    descriptions: [
      {
        subject:"Ma Prime Renov'",
        description:"Destinée à tous les propriétaires, Ma Prime Renov' remplace le CITE et les aides de l'Anah. Elle couvre une gamme de travaux et est calculée en fonction des revenus du foyer et du gain énergétique.",
      },
      {
        subject:"Provence Eco Renov'",
        description:"Spécifique aux habitants des Bouches-du-Rhône, cette aide s'applique à divers travaux d'amélioration énergétique en fonction des revenus.",
      },
      {
        subject:"Prime CEE",
        description:"Les Certificats d’Économies d’Énergie permettent de financer diverses améliorations énergétiques. Nous vous guidons dans les démarches.",
      }
    ],
    aids: [
      {
        title:"MaPrimeRénov' - Sérénité",
        aid: "Qu'est-ce que c'est ? Fusion d'Habiter Mieux Sérénité et MaPrimeRénov', cette aide accompagne financièrement les ménages aux ressources modestes dans leur projet de rénovation énergétique globale."
      },
      {
        title:"Éco-Prêt à Taux Zéro",
        aid: "Qu'est-ce que c'est ? Cet prêt permet de financer la rénovation énergétique sans avance de trésorerie ni intérêts, avec une extension jusqu'à 50 000€ jusqu'en 2023."
      },
      {
        title:"Dispositif Coup de Pouce Économies d'Énergie",
        aid: "Qu'est-ce que c'est ? Ce dispositif propose des primes pour divers travaux de rénovation énergétique, cumulable avec d'autres aides."
      },
      {
        title:"Chèque Énergie",
        aid: "Qu'est-ce que c'est ? Une aide nominative pour le paiement des factures d'énergie ou des travaux de rénovation, destinée aux ménages modestes."
      },
      {
        title:"Aides des Entreprises de Fourniture d'Énergie (CEE)",
        aid: "Qu'est-ce que c'est ? Les fournisseurs d'énergie offrent diverses aides, comme des diagnostics-conseils, des primes, ou des prêts, pour encourager les travaux d'économies d'énergie."
      },
      {
        title:"TVA à 5,5 % pour les Travaux d'Amélioration Énergétique",
        aid: "Qu'est-ce que c'est ? Certains travaux bénéficient d'une TVA réduite à 5,5 % pour les propriétaires, locataires et sociétés civiles immobilières."
      },
      {
        title:"Réduction d'Impôt Denormandie",
        aid: "Qu'est-ce que c'est ? Un dispositif offrant une réduction d'impôt pour les propriétaires bailleurs réalisant des travaux représentant au moins 25 % du prix du logement acheté."
      },
      {
        title:"Exonération de la Taxe Foncière",
        aid: "Qu'est-ce que c'est ? Certaines collectivités exonèrent temporairement de taxe foncière les propriétaires réalisant des travaux d'économie d'énergie."
      },
      {
        title:"Aides Locales",
        aid: "Au-delà des aides nationales, de nombreuses aides locales existent. Consultez les organismes régionaux pour découvrir les aides de votre région ou commune."
      },
    ]
  }
}
