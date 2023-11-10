import { Component } from '@angular/core';

@Component({
  selector: 'app-listservices',
  templateUrl: './listservices.component.html',
  styleUrls: ['./listservices.component.scss']
})
export class ListservicesComponent {
  services = [
    {
      icon:'../../../assets/icons/service1.svg',
      title:"Notre Engagement à Répondre à Vos Besoins en Énergie",
      text:[
        "Notre groupe s'engage à trouver les solutions idéales pour répondre précisément à vos exigences énergétiques.",
        "De la sélection de la pompe à chaleur la plus adaptée à votre confort à sa mise en place, ATEXE vous guide à travers toutes les étapes de votre projet."
      ]
    },
    {
      icon:'../../../assets/icons/service2.svg',
      title:"Notre Équipe d'Experts au Service de Votre Tranquillité",
      text:[
        "Notre groupe réunit une équipe d'ingénieurs et de techniciens experts, chacun dans son domaine de compétence.",
        "Nos experts, proches de vous, sont chevronnés dans les techniques d'installation les plus exigeantes. Ils veillent ainsi à une mise en œuvre irréprochable.",
        "Parce que votre satisfaction et la tranquillité de votre maison sont indissociables d'un travail d'équipe parfaitement orchestré."
      ]
    },
    {
      icon:'../../../assets/icons/service3.svg',
      title:'Notre Engagement envers la Qualité et la Durabilité',
      text:[
        "Fort de notre expérience et de notre expertise, nous tissons des relations étroites avec nos partenaires, afin de répondre de manière précise à chaque défi qui se présente.",
        "Nous offrons une gamme complète de garanties (matériel, installation, service après-vente, maintenance, etc.) pour assurer la pérennité de vos équipements à long terme."
      ]
    },
  ]
}
