import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 500,
    center: true,
    autoHeight: false,
    navText: ['<','>'],
    items: 1,
    nav: true,
  };

  commentaires = [
    {
      auteur: "Christine D.",
      message:"J'ai contacté Soluce Énergie pour l'isolation de ma maison près de Montpellier. Franchement, je ne m'attendais pas à une telle différence ! L'équipe a été rapide, efficace, et maintenant, je sens vraiment la différence dans le confort de ma maison. Merci à toute l'équipe !"
    },
    {
      auteur: "Jean-Paul M.",
      message:"Un grand merci à Soluce Énergie pour avoir installé une pompe à chaleur chez moi dans le Gard. Les économies sur ma facture d'énergie sont déjà incroyables, et l'équipe a été super sympa. Je recommande à tous ceux qui veulent faire des économies et contribuer à l'environnement !"
    },
    {
      auteur: "Sophie L.",
      message:"Je cherchais depuis longtemps une entreprise sérieuse pour installer des panneaux photovoltaïques. Soluce Énergie a répondu à toutes mes attentes. Ils ont été pros du début à la fin, et maintenant je produis ma propre électricité. Top !"
    },
    {
      auteur: "Pierre G.",
      message:"La rénovation énergétique a été une super expérience. Ils ont pris en charge l'isolation et le chauffage solaire chez moi. En plus d'économiser de l'argent, je me sens bien en contribuant à la préservation de l'environnement. Merci à toute l'équipe !"
    },
    {
      auteur: "Marie-Claude B.",
      message:"Rien à redire ! Ils ont rénové toute ma maison. Chauffage, isolation, tout y est passé. L'équipe était super sympa, toujours prête à répondre à mes questions. Je recommande à 100%!"
    }
  ]
}
