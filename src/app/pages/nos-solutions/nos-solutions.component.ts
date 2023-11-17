import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-nos-solutions',
  templateUrl: './nos-solutions.component.html',
  styleUrls: ['./nos-solutions.component.scss'],
})
export class NosSolutionsComponent {
  activeQuestion = 0;
  solutionID: any;
  solutions = [
    {
      id: 'idc',
      img: '../../../assets/solutions/isolation_des_combles.jpg',
      type: 'Isolation',
      title: 'Isolation des combles',
      description:
        "<p>Une toiture mal isol\u00E9e est responsable d\u2019au moins 30 % des d\u00E9perditions \u00E9nerg\u00E9tiques d\u2019un logement. Pour conserver la chaleur \u00E0 l'int\u00E9rieur, les combles doivent toujours \u00EAtre correctement isol\u00E9s, qu\u2019il s\u2019agisse de combles am\u00E9nageables ou de combles perdus. Avec un co\u00FBt de r\u00E9alisation relativement faible, l\u2019isolation des combles affiche l\u2019un des meilleurs rapports co\u00FBts/b\u00E9n\u00E9fices parmi les travaux d\u2019\u00E9conomies d\u2019\u00E9nergie.</p>\r\n<p>Une bonne isolation des vos combles vous permet de :</p>\r\n<ul>\r\n  <li>Faire des \u00E9conomies sur vos factures de chauffage.</li>\r\n  <li>Avoir plus chaud chez vous en hiver et rester au frais en \u00E9t\u00E9.</li>\r\n  <li>Am\u00E9liorer la performance \u00E9nerg\u00E9tique de votre maison.</li>\r\n</ul>",
      listQuestions: [
        {
          id: 1,
          question:
            "L'isolation des combles permet de moins dépenser en chauffage et en climatisation",
        },
        {
          id: 2,
          question: "Combien coûte l'isolation des combles de votre maison ?",
        },
      ],
      questionsContent: [
        {
          id: 1,
          content:
            "<h3>L'isolation des combles permet de moins d\u00E9penser en chauffage</h3>\r\n<p>\r\n  Comme le couvercle d'une casserole, les combles, s'ils ne sont pas isol\u00E9s,\r\n  peuvent repr\u00E9senter jusqu'\u00E0 30 % de d\u00E9perditions thermiques, autant de\r\n  potentielles d\u00E9penses de chauffage que vous pourrez tr\u00E8s facilement \u00E9viter\r\n  gr\u00E2ce \u00E0 l\u2019isolation de vos combles. Un b\u00E2timent dont les combles sont isol\u00E9s\r\n  conservera mieux la chaleur, aura une meilleure inertie, ce qui vous \u00E9vite de\r\n  faire fonctionner le chauffage \u00E0 plein r\u00E9gime et diminue vos d\u00E9penses pour\r\n  vous apporter une chaleur plus douce.\r\n</p>\r\n\r\n<h3>\u2026et en climatisation</h3>\r\n<p>\r\n  L'isolation des combles est aussi tr\u00E8s appr\u00E9ciable en \u00E9t\u00E9. En effet, le toit\r\n  est \u00E9videmment la zone du logement la plus expos\u00E9e au rayonnement solaire.\r\n  Avec une mauvaise isolation ou sans isolation du tout, la chaleur re\u00E7ue par la\r\n  couverture risque d'\u00EAtre transf\u00E9r\u00E9e directement et presque enti\u00E8rement \u00E0\r\n  l'int\u00E9rieur du logement, ce qui peut causer de nombreux d\u00E9sagr\u00E9ments. Pour\r\n  cause, m\u00EAme si les combles sont inutilis\u00E9s, la chaleur peut aussi \u00EAtre\r\n  transmise aux pi\u00E8ces adjacentes, qui sont souvent des chambres. Pour \u00E9viter de\r\n  suffoquer \u00E0 l'int\u00E9rieur, l'isolation des combles est donc aussi importante en\r\n  \u00E9t\u00E9 qu'en hiver.\r\n</p>\r\n\r\n<h3>L'isolation phonique ne doit pas \u00EAtre n\u00E9glig\u00E9e</h3>\r\n<p>\r\n  On l'oublie aussi souvent, mais une bonne isolation des combles am\u00E9liore\r\n  \u00E9galement le confort acoustique du logement. On pense notamment aux bruits de\r\n  la pluie ou des animaux qui peuvent se trouver sur le toit, mais de nombreuses\r\n  autres nuisances sonores existent, ce qui renforce l'importance de l'isolation\r\n  phonique par les combles.\r\n</p>\r\n\r\n<h3>Il y a forc\u00E9ment une solution d'isolation pour vous</h3>\r\n<p>\r\n  En ce qui concerne les diff\u00E9rentes solutions disponibles pour isoler, il y en a forc\u00E9ment une adapt\u00E9e \u00E0 votre maison.\r\n  En panneaux, en rouleaux souples ou par soufflage, diff\u00E9rentes techniques existent et m\u00EAme les combles inaccessibles\r\n  peuvent \u00EAtre isol\u00E9s. Dans tous les cas, il faut choisir un mat\u00E9riau performant et qui \u00E9vite un tassement trop\r\n  important avec le temps.\r\n  Signe de l'utilit\u00E9 d'isoler ses combles, la plupart des aides \u00E0 la r\u00E9novation \u00E9nerg\u00E9tique sont disponibles pour cette\r\n  op\u00E9ration, \u00E0 condition de respecter la performance thermique sp\u00E9cifi\u00E9e dans la loi. Si la ventilation n'est pas\r\n  suffisante, la pose d'un pare-vapeur peut \u00EAtre n\u00E9cessaire. Il est \u00E9galement possible de poser des planches au-dessus\r\n  de l'isolant afin de pouvoir continuer \u00E0 y entreposer des affaires.\r\n</p>",
        },
        {
          id: 2,
          content:
            '<p>Les travaux d\u2019isolation thermique des combles font partie des travaux de r\u00E9novation \u00E0 privil\u00E9gier. Malgr\u00E9 un co\u00FBt qui varie entre 40 et 80\u20AC le m\u00B2, le retour sur investissement pour ces travaux est rapide et leur efficacit\u00E9 n\u2019est plus \u00E0 d\u00E9montrer. D\u2019autant plus que ces travaux sont \u00E9ligibles \u00E0 plusieurs aides \u00E9cologiques telles que les subventions de l\u2019ANAH, l\u2019\u00E9co PTZ ou encore la prime \u00E9nergie et la TVA 5,5%.</p>',
        },
      ],
    },
    {
      id: 'idm',
      img: '../../../assets/solutions/isolation_des_murs.jpg',
      type: 'Isolation',
      title: 'Isolation des murs',
      description:
        "<p>D'apr\u00E8s l'Agence de la transition \u00E9cologique (Ademe), les murs mal isol\u00E9s causent 20 % \u00E0 25 % des d\u00E9perditions thermiques dans un logement.</p>\r\n<p>L'isolation des murs met fin \u00E0 ces d\u00E9perditions de chaleur et r\u00E9duit consid\u00E9rablement les factures d'\u00E9nergie. Elle permet \u00E9galement de stabiliser la temp\u00E9rature int\u00E9rieure d'un logement pendant de nombreuses ann\u00E9es.</p>\r\n<p>Par ailleurs, l'isolation thermique des parois limite les courants d'air et favorise l'isolation phonique de la maison. Il s'agit donc d'une excellente solution pour assurer un cadre de vie plaisant aux occupants du logement, quelle que soit la saison de l'ann\u00E9e.</p>",
      listQuestions: [
        {
          id: 1,
          question: 'Pourquoi isoler les murs de sa maison ?',
        },
        {
          id: 2,
          question: 'Les critères à prendre en compte pour choisir son isolant',
        },
        {
          id: 3,
          question: 'Quelques exemples de prix au m² de l’ITE ',
        },
      ],
      questionsContent: [
        {
          id: 1,
          content:
            "<p>\r\n  D'apr\u00E8s l'Agence de la transition \u00E9cologique (Ademe), les murs mal isol\u00E9s\r\n  causent 20 % \u00E0 25 % des d\u00E9perditions thermiques dans un logement.\r\n</p>\r\n\r\n<p>\r\n  L'isolation des murs met fin \u00E0 ces d\u00E9perditions de chaleur et r\u00E9duit\r\n  consid\u00E9rablement les factures d'\u00E9nergie. Elle permet \u00E9galement de stabiliser\r\n  la temp\u00E9rature int\u00E9rieure d'un logement pendant de nombreuses ann\u00E9es.\r\n</p>\r\n\r\n<p>\r\n  Par ailleurs, l'isolation thermique des parois limite les courants d'air et\r\n  favorise l'isolation phonique de la maison. Il s'agit donc d'une excellente\r\n  solution pour assurer un cadre de vie plaisant aux occupants du logement,\r\n  quelle que soit la saison de l'ann\u00E9e.\r\n</p>",
        },
        {
          id: 2,
          content:
            "<p>En raison de la diversit\u00E9 des isolants pr\u00E9sents dans les grandes surfaces, il est souvent difficile de faire un\r\n  choix. N\u00E9anmoins, certains crit\u00E8res permettent de d\u00E9terminer en toute s\u00E9r\u00E9nit\u00E9 le bon produit pour les murs de sa\r\n  maison. D\u00E9couvrez-les !</p>\r\n<h3>La nature de l'isolant pour murs</h3>\r\n<p>Les diff\u00E9rents types d'isolants diff\u00E8rent les uns des autres par leurs caract\u00E9ristiques intrins\u00E8ques (r\u00E9sistance \u00E0\r\n  l'eau, performances acoustiques\u2026). Ils sont r\u00E9partis en 3 grandes cat\u00E9gories \u00E0 savoir :</p>\r\n<ul>\r\n  <li>Les isolants min\u00E9raux (laine de verre, laine de roche\u2026)</li>\r\n  <li>Les isolants d'origines synth\u00E9tiques (polyur\u00E9thane, polystyr\u00E8ne\u2026)</li>\r\n  <li>Les isolants biosourc\u00E9s ou d'origine naturelle (fibre de bois isolant, li\u00E8ge expans\u00E9, la laine de coton, de\r\n    chanvre, de lin\u2026)</li>\r\n</ul>\r\n<p>Les isolants \u00E9cologiques sont tr\u00E8s appr\u00E9ci\u00E9s. Ils sont renouvelables, recyclables et limitent les produits toxiques\r\n  et les allerg\u00E8nes. De m\u00EAme, ils favorisent la bonne circulation de l'air dans votre maison.</p>\r\n<h3>La r\u00E9sistance thermique de l'isolant de mur</h3>\r\n<p>Un bon isolant doit se poser de fa\u00E7on uniforme de sorte \u00E0 ne pr\u00E9senter aucune zone de variation de r\u00E9sistance\r\n  thermique. Privil\u00E9giez donc un isolant durable qui r\u00E9siste aux fluctuations de temp\u00E9ratures, aux fuites de chaleurs et\r\n  \u00E0 l'humidit\u00E9.</p>\r\n<p>L'un des crit\u00E8res qui doivent particuli\u00E8rement attirer votre attention est la r\u00E9sistance thermique (R) de l'isolant\r\n  de mur. La r\u00E9sistance thermique repr\u00E9sente la facult\u00E9 de l'isolant, pour une \u00E9paisseur sp\u00E9cifique, \u00E0 limiter le\r\n  transfert de chaleur entre l'int\u00E9rieur et l'ext\u00E9rieur d'une maison.</p>\r\n<p>Il faut opter pour un isolant qui respecte la r\u00E9glementation thermique (RT) en cours. \u00C0 titre d'exemple, la\r\n  r\u00E9glementation thermique \u00E9l\u00E9ment par \u00E9l\u00E9ment oblige \u00E0 adopter \u00E0 minima un isolant de r\u00E9sistance thermique de 2,90 m\u00B2\r\n  K/W pour l'isolation des murs.</p>\r\n<h3>Les autres caract\u00E9ristiques de l'isolant \u00E0 v\u00E9rifier</h3>\r\n<p>Outre la nature et la r\u00E9sistance thermique, vous devez v\u00E9rifier d'autres sp\u00E9cificit\u00E9s du produit afin de ne pas vous\r\n  tromper lors du choix de l'isolant ad\u00E9quat pour vos murs :</p>\r\n<ul>\r\n  <li>L'\u00E9paisseur de l'isolant</li>\r\n  <li>La perm\u00E9abilit\u00E9 \u00E0 la vapeur d'eau</li>\r\n  <li>La facilit\u00E9 de pose\u2026</li>\r\n</ul>\r\n<p>L'\u00E9paisseur influence consid\u00E9rablement la performance thermique de l'isolant. Pour choisir l'\u00E9paisseur de l'isolant,\r\n  il faut tenir compte de l'espace disponible pour la pose. G\u00E9n\u00E9ralement, le probl\u00E8me ne se pose pas pour une isolation\r\n  des murs par l'ext\u00E9rieur (ITE), mais plut\u00F4t pour l'isolation thermique par l'int\u00E9rieur (ITI) qui diminue la surface au\r\n  sol.</p>\r\n<p>\u00C0 titre indicatif, les isolants d'origine synth\u00E9tiques ont environ 10 cm d'\u00E9paisseur, mais ne conviennent pas \u00E0 tous\r\n  les murs. Ceux d'origine naturelle et min\u00E9rale ont une \u00E9paisseur qui varie de 12 \u00E0 17 cm.</p>\r\n<p>\u00C0 vous de choisir l'isolant qui vous convient le mieux en fonction de vos priorit\u00E9s et du niveau de confort souhait\u00E9.\r\n</p>\r\n<p>Chez Quelstravaux.fr, nos partenaires sp\u00E9cialistes disposent des comp\u00E9tences n\u00E9cessaires pour r\u00E9aliser n'importe\r\n  quelle isolation thermique des parois d'une maison.</p>",
        },
        {
          id: 3,
          content:
            "<p>Pour savoir combien co\u00FBte vraiment une isolation par l'ext\u00E9rieur, il faut demander un devis \u00E0 un professionnel. Mais\r\n  pour vous faire une id\u00E9e, voici le budget que vous pouvez pr\u00E9voir en fonction de la technique d'isolation :</p>\r\n<p>l'ITE sous enduit et sous v\u00EAture co\u00FBte en moyenne entre 110 \u20AC / m\u00B2 et 180 \u20AC / m\u00B2</p>\r\n<p>l'ITE sous bardage fait monter la facture et oscille entre 140 \u20AC / m\u00B2 et 230 \u20AC / m\u00B2 en fonction du type de rev\u00EAtement\r\n  choisi.</p>\r\n<p>Afin de savoir pr\u00E9cis\u00E9ment combien vous co\u00FBtera votre projet, il est n\u00E9cessaire de demander des devis aupr\u00E8s nos\r\n  partenaires artisans dot\u00E9s du label RGE (Reconnu Garant de l'Environnement).</p>",
        },
      ],
    },
    {
      id: 'pacae',
      img: '../../../assets/solutions/pacae.jpg',
      type: 'Chauffage',
      title: 'Pompe à chaleur air eau',
      description:
        "<h2>La pompe \u00E0 chaleur (PAC) air-eau<\/h2>\r\n<p>Un syst\u00E8me assurant le chauffage et la production d\u2019eau chaude de votre logement.<\/p>\r\n\r\n<h3>Le fonctionnement d'une pompe \u00E0 chaleur air-eau est simple :<\/h3>\r\n\r\n<ul>\r\n  <li>Une unit\u00E9 ext\u00E9rieure puise les calories de chaleur pr\u00E9sentes dans l\u2019air ext\u00E9rieur,<\/li>\r\n  <li>Ces calories sont transport\u00E9es via un fluide frigorig\u00E8ne qui se comprime et se condense, vers l\u2019unit\u00E9 int\u00E9rieure, cr\u00E9ant ainsi de la chaleur,<\/li>\r\n  <li>Cette chaleur est achemin\u00E9e vers vos \u00E9metteurs de chauffage (radiateurs, planchers chauffants\u2026) et vos points d\u2019eau.<\/li>\r\n<\/ul>\r\n",
      listQuestions: [
        {
          id: 1,
          question: 'Qu’est-ce qu’une pompe à chaleur air-eau ?',
        },
        {
          id: 2,
          question: 'Pourquoi opter pour une pompe à chaleur air-eau ?',
        },
        {
          id: 3,
          question: 'Les primes pour l’installation d’une pompe à chaleur',
        },
      ],
      questionsContent: [
        {
          id: 1,
          content:
            "<div>\r\n  <p>La pompe \u00E0 chaleur (PAC) air-eau est un syst\u00E8me assurant le chauffage et la production d\u2019eau chaude de votre logement. Le fonctionnement d'une pompe \u00E0 chaleur air-eau est simple :<\/p>\r\n\r\n  <ul>\r\n    <li>Une unit\u00E9 ext\u00E9rieure puise les calories de chaleur pr\u00E9sentes dans l\u2019air ext\u00E9rieur,<\/li>\r\n    <li>Ces calories sont transport\u00E9es via un fluide frigorig\u00E8ne qui se comprime et se condense, vers l\u2019unit\u00E9 int\u00E9rieure, cr\u00E9ant ainsi de la chaleur,<\/li>\r\n    <li>Cette chaleur est achemin\u00E9e vers vos \u00E9metteurs de chauffage (radiateurs, planchers chauffants\u2026) et vos points d\u2019eau.<\/li>\r\n  <\/ul>\r\n<\/div>\r\n",
        },
        {
          id: 2,
          content:
            "<h3>Avant l'installation de votre pompe \u00E0 chaleur</h3>\r\n<p>Avant de vous lancer dans l\u2019installation d\u2019une pompe \u00E0 chaleur, il est pr\u00E9f\u00E9rable de contr\u00F4ler la bonne isolation du logement. C\u2019est un pr\u00E9requis important, car en cas de d\u00E9perditions thermiques, votre foyer sera chauff\u00E9 inutilement. D\u2019ailleurs, c\u2019est souvent le premier poste de travaux \u00E0 traiter lors d\u2019une r\u00E9novation globale.</p>\r\n\r\n<p>Une fois votre maison bien isol\u00E9e, vous pouvez alors envisager la pose de votre PAC. Celle-ci s\u2019av\u00E8re facile et rapide. Notez qu\u2019un entretien r\u00E9gulier est indispensable pour garantir la performance de la machine, et optimiser sa dur\u00E9e de vie.</p>\r\n\r\n<h3>Passer aux \u00E9nergies renouvelables avec la pompe \u00E0 chaleur</h3>\r\n<p>Certains dispositifs de chauffage anciens, tels que la chaudi\u00E8re, sont \u00E9nergivores et peu respectueux de l'environnement. Avec le d\u00E9veloppement de la technologie, il est d\u00E9sormais possible de basculer vers la consommation d'\u00E9nergies renouvelables gr\u00E2ce aux avantages des pompes \u00E0 chaleur.</p>\r\n\r\n<h3>\u00C9conomies consid\u00E9rables sur la facture \u00E9nerg\u00E9tique</h3>\r\n<p>Une \u00E9conomie allant jusqu'\u00E0 70% sur la facture \u00E9nerg\u00E9tique</p>\r\n\r\n<p>Parmi les pompes \u00E0 chaleur (PAC) a\u00E9rothermiques, le mod\u00E8le air/eau fait partie des plus pris\u00E9s sur le march\u00E9. Elle utilise les calories de l'air pour chauffer une habitation et pour produire de l'eau chaude sanitaire. De plus en plus de m\u00E9nages optent pour cette solution pour gagner en confort thermique.</p>\r\n\r\n<p>D'abord, d'un point de vue financier, une pompe \u00E0 chaleur air/eau permet de r\u00E9aliser d'importantes \u00E9conomies. En moyenne, le chauffage et l'eau chaude repr\u00E9sentent 60% \u00E0 75% de la facture \u00E9nerg\u00E9tique d'un foyer. En optant pour une PAC air/eau, vous utiliserez une \u00E9nergie renouvelable et surtout gratuite. Avec le bon mat\u00E9riel, vous pourrez r\u00E9aliser jusqu'\u00E0 70% d'\u00E9conomies.</p>\r\n\r\n<p>L'engouement pour ce type d'installation est tel qu'en 2019, la vente de pompes \u00E0 chaleur a\u00E9rothermiques a augment\u00E9. Soit 34% de plus par rapport \u00E0 l'ann\u00E9e pr\u00E9c\u00E9dente. Selon l'Observatoire des \u00E9nergies renouvelables (Observ'ER), il s'est vendu 170 000 unit\u00E9s de PAC air/eau en 2018.</p>\r\n\r\n<h3>R\u00E9duction de l'impact environnemental</h3>\r\n<p>Une r\u00E9duction de l'impact environnemental du foyer</p>\r\n\r\n<p>L'utilisation de ce type d'installation est \u00E9galement une d\u00E9marche \u00E9cologique. En effet, la Pompe \u00E0 chaleur air/eau utilise une \u00E9nergie propre qui est l'air. Elle offre un confort thermique optimal tout en \u00E9mettant un taux de CO2 r\u00E9duit. Elle consomme moins d'\u00E9nergie \u00E9lectrique qu'un syst\u00E8me de chauffage classique. Pour 1 kW d'\u00E9nergie \u00E9lectrique absorb\u00E9, la pompe \u00E0 chaleur produit environ 5 kW d'\u00E9nergie thermique.</p>\r\n",
        },
        {
          id: 3,
          content:
            "<h3>Il existe plusieurs aides pour financer l\u2019achat d\u2019une pompe \u00E0 chaleur :</h3>\r\n<ul>\r\n  <li>La prime Coup de pouce, accessible sans plafond de revenus,</li>\r\n  <li>MaPrimeR\u00E9nov' qui exclut les Fran\u00E7ais les plus ais\u00E9s (profil rose).</li>\r\n</ul>\r\n\r\n<h3>Dans le cadre du dispositif MaPrimeR\u00E9nov\u2019 :</h3>\r\n<p>Les propri\u00E9taires occupants et les propri\u00E9taires bailleurs peuvent b\u00E9n\u00E9ficier d\u2019une prime allant jusqu\u2019\u00E0 10 000 \u20AC selon le type de pompe \u00E0 chaleur retenue, le montant total des travaux et le niveau de revenus du foyer. La prime est vers\u00E9e apr\u00E8s la r\u00E9alisation des travaux, sur pr\u00E9sentation de la facture.</p>\r\n\r\n<h3>Il est possible de cumuler l\u2019aide MaPrimeR\u00E9nov\u2019 :</h3>\r\n<p>Avec la prime CEE (Certificats d\u2019\u00C9conomies d\u2019\u00C9nergie), aussi appel\u00E9e Coup de pouce Chauffage. Ce m\u00E9canisme oblige les fournisseurs d\u2019\u00E9nergie \u00E0 participer \u00E0 la r\u00E9novation \u00E9nerg\u00E9tique. La prime \u00E9nergie peut atteindre 5 000 \u20AC pour faire installer une nouvelle pompe \u00E0 chaleur en remplacement d'une vieille chaudi\u00E8re \u00E0 \u00E9nergie fossile, en fonction de la situation financi\u00E8re du m\u00E9nage.</p>\r\n\r\n<h3>Par ailleurs, l\u2019Anah (Agence nationale de l\u2019habitat) propose une aide :</h3>\r\n<p>\u00C0 la r\u00E9novation \u00E9nerg\u00E9tique globale pour les foyers aux ressources modestes et tr\u00E8s modestes. Cette aide, baptis\u00E9e MaPrimeR\u00E9nov' S\u00E9r\u00E9nit\u00E9, est proportionnelle au co\u00FBt des travaux et peut atteindre 15 000 \u20AC. Elle n\u2019est pas cumulable avec MaPrimeR\u00E9nov\u2019 individuelle.</p>\r\n\r\n<h3>Peut-on installer une pompe \u00E0 chaleur pour 1 euro ?</h3>\r\n<p>Cette offre existait bien en 2019, mais plus depuis 2020 et l'instauration de MaPrimeR\u00E9nov'. Fuyez donc les propositions de PAC gratuite ! D'ailleurs, plus aucuns travaux \u00E0 1 euro n'existe pour les particuliers, m\u00EAme en isolation.</p>\r\n\r\n<p>Privil\u00E9giez la qualit\u00E9 et la main d'oeuvre qualifi\u00E9e. En outre, une pompe \u00E0 chaleur pas ch\u00E8re, c'est quand m\u00EAme possible ! Votre installation peut toujours \u00EAtre financ\u00E9e jusqu'\u00E0 90 % ; une bonne nouvelle pour r\u00E9nover sans trop d\u00E9penser.</p>\r\n",
        },
      ],
    },
    {
      id: 'pacaa',
      img: '../../../assets/solutions/pacaa.jpg',
      type: 'Chauffage',
      title: 'Pompe à chaleur air air',
      description:
        "<p>La pompe \u00E0 chaleur air-air, ou PAC air-air, est un syst\u00E8me de chauffage et de refroidissement. Cet \u00E9quipement facile \u00E0 poser tire profit de l\u2019\u00E9nergie calorifique de l\u2019air pour augmenter ou r\u00E9duire la temp\u00E9rature au sein du foyer. \u00C9ligible \u00E0 la prime \u00E9nergie CEE, la pompe \u00E0 chaleur air-air pr\u00E9sente de nombreux avantages, bien que moins nombreux qu\u2019un mod\u00E8le air-eau par exemple. Coup d\u2019\u0153il sur le fonctionnement de cet appareil, ses atouts et les aides financi\u00E8res \u00E0 l\u2019installation.<\/p>",
      listQuestions: [
        {
          id: 1,
          question: 'Installer une PAC air-air : les points clés',
        },
        {
          id: 2,
          question: 'Comment fonctionne une pompe à chaleur air-air ?',
        },
        {
          id: 3,
          question: 'Quels sont les avantages de la pompe à chaleur air-air ?',
        },
      ],
      questionsContent: [
        {
          id: 1,
          content:
            "<p>Le principe d\u2019une pompe \u00E0 chaleur (PAC) est d\u2019utiliser l\u2019\u00E9nergie naturellement pr\u00E9sente dans l\u2019environnement ext\u00E9rieur pour chauffer le logement. En l\u2019occurrence, la PAC air-air puise cette \u00E9nergie dans l\u2019air : on parle de pompe \u00E0 chaleur a\u00E9rothermique. Le m\u00E9canisme d\u2019une PAC est identique \u00E0 celui d\u2019un r\u00E9frig\u00E9rateur, mais invers\u00E9.<\/p>\r\n",
        },
        {
          id: 2,
          content:
            "<p>Un syst\u00E8me de chauffage qui allie \u00E9cologie et confort<\/p>\r\n<p>Un dispositif performant, source d\u2019\u00E9conomies d\u2019\u00E9nergie<\/p>\r\n<p>La possibilit\u00E9 de rafra\u00EEchir le logement en \u00E9t\u00E9<\/p>\r\n<p>Une mise en place qui ne demande pas de gros travaux<\/p>\r\n\r\n<h3>Le dimensionnement de la PAC : un \u00E9l\u00E9ment \u00E0 ne pas n\u00E9gliger<\/h3>\r\n\r\n<p>Le dimensionnement de la PAC conditionne son niveau de performance :<\/p>\r\n<ul>\r\n  <li>Si la pompe est surdimensionn\u00E9e, elle sera trop puissante par rapport aux besoins de votre habitation. Cela risque d\u2019entra\u00EEner une surconsommation \u00E9lectrique et un endommagement. En outre, elle co\u00FBtera inutilement plus cher \u00E0 l\u2019achat.<\/li>\r\n  <li>Si la pompe est sous-dimensionn\u00E9e, elle sera surexploit\u00E9e pour obtenir la chaleur d\u00E9sir\u00E9e, ce qui nuira \u00E0 son efficacit\u00E9 et \u00E0 sa rentabilit\u00E9.<\/li>\r\n<\/ul>\r\n\r\n<p>C\u2019est au professionnel de d\u00E9terminer le bon dimensionnement de votre future pompe \u00E0 chaleur, en analysant les propri\u00E9t\u00E9s du b\u00E2ti et sa situation g\u00E9ographique.<\/p>\r\n\r\n<h3>Combien co\u00FBte une pompe \u00E0 chaleur air-air ?<\/h3>\r\n\r\n<p>D\u2019apr\u00E8s l\u2019Ademe, le prix m\u00E9dian d\u2019une PAC air-air est de 6 629 \u20AC. La fourchette des tarifs observ\u00E9s sur le terrain s\u2019\u00E9tend de 4 699 \u20AC \u00E0 11 283 \u20AC. Parmi toutes les pompes \u00E0 chaleur, le syst\u00E8me de chauffage air-air est le mod\u00E8le le plus accessible. \u00C0 titre comparatif, le co\u00FBt m\u00E9dian d\u2019une PAC air-eau s\u2019\u00E9l\u00E8ve \u00E0 12 668 \u20AC.<\/p>\r\n\r\n<p>Selon l\u2019Observatoire des \u00E9nergies renouvelables, 758 270 pompes \u00E0 chaleur air-air ont \u00E9t\u00E9 vendues en 2021, soit une augmentation de pr\u00E8s de 4 % par rapport \u00E0 2020.<\/p>\r\n",
        },
        {
          id: 3,
          content:
            "<h3>Pas de MaPrimeR\u00E9nov\u2019<\/h3>\r\n<p>Malheureusement, la pompe \u00E0 chaleur air-air n\u2019est pas \u00E9ligible \u00E0 MaPrimRenov\u2019, la prime de l\u2019Anah (Agence nationale de l\u2019habitat). Elle est en effet jug\u00E9e moins performante que la version air-eau, qui assure \u00E0 la fois la production de chauffage et d\u2019eau chaude sanitaire.<\/p>\r\n\r\n<p>De la m\u00EAme fa\u00E7on, l\u2019\u00E9quipement n\u2019ouvre pas le droit \u00E0 la TVA \u00E0 taux r\u00E9duit ni \u00E0 l\u2019\u00E9co-pr\u00EAt \u00E0 taux z\u00E9ro (\u00E9co-PTZ).<\/p>\r\n\r\n<h3>Les primes \u00E9nergie<\/h3>\r\n<p>Bonne nouvelle : l\u2019installation d\u2019une PAC air-air fait partie des op\u00E9rations standardis\u00E9es qui entrent dans le cadre des certificats d\u2019\u00E9conomies d\u2019\u00E9nergie (CEE). Concr\u00E8tement, cela signifie que vous pouvez profiter de la prime \u00E9nergie CEE pour financer sa mise en place.<\/p>\r\n\r\n<p>Cette aide est octroy\u00E9e sous condition de ressources. Son versement n\u00E9cessite cependant le respect de certains crit\u00E8res, tels que l\u2019intervention d\u2019un artisan RGE. En outre, la Pompe \u00E0 chaleur air-air doit pr\u00E9senter une puissance nominale maximum de 12 kW et un SCOP minimal de 3,9.<\/p>\r\n\r\n<p>Le montant de la subvention CEE est compris entre 30 \u20AC et 900 \u20AC selon la surface, le type d\u2019habitation, ou encore la zone g\u00E9ographique.<\/p>\r\n",
        },
      ],
    },
    {
      id: 'cs',
      img: '../../../assets/solutions/cs.jpg',
      type: 'Chauffage',
      title: 'Chauffage solaire',
      description:
        "<p>Un syst\u00E8me de chauffage solaire thermique vous permettra de chauffer votre logement et \u00E9ventuellement votre eau chaude sanitaire de mani\u00E8re \u00E9conomique et \u00E9cologique. Malgr\u00E9 un prix d\u2019installation relativement \u00E9lev\u00E9, cet investissement est tr\u00E8s rentable d\u2019autant plus qu\u2019il existe une vaste panoplie d\u2019aides \u00E9cologiques disponible pour ce type d\u2019op\u00E9ration.<\/p>\r\n\r\n<p>Par opposition aux \u00E9nergies fossiles comme le fioul et le gaz, l'\u00E9nergie issue du soleil est utilis\u00E9e gratuitement. Il est \u00E9galement disponible tout au long de l'ann\u00E9e. Elle n'a aucun impact n\u00E9gatif sur l'environnement du fait de son bilan totalement neutre en CO2. L\u2019\u00E9nergie solaire thermique peut \u00EAtre utilis\u00E9e soit pour produire de l'eau chaude sanitaire ou bien alors pour produire de la chaleur pour le chauffage des locaux. \u00C0 savoir que certains mod\u00E8les peuvent assurer ces deux fonctions en m\u00EAme temps, on parle alors de chauffage solaire combin\u00E9. Il faut savoir que le chauffage solaire thermique exploite le rayonnement du soleil comme \u00E9nergie thermique, ce qui n'est pas le cas du syst\u00E8me photovolta\u00EFque. Il ne faut donc pas les confondre.<\/p>\r\n",
      listQuestions: [
        {
          id: 1,
          question: 'Fonctionnement et avantages d’un chauffage solaire ?',
        },
        {
          id: 2,
          question: 'Combien coûte un chauffage solaire ?',
        },
        {
          id: 3,
          question: 'Les aides pour l’installation d’un chauffage solaire',
        },
      ],
      questionsContent: [
        {
          id: 1,
          content:
            "<p>Le syst\u00E8me de chauffage solaire thermique fonctionne selon le principe suivant : les capteurs thermiques absorbent le rayonnement du soleil pour chauffer directement le fluide caloporteur. Ce fluide chaud rejoint ensuite le ballon de stockage reli\u00E9 \u00E0 deux circuits d\u2019eau chaude, l\u2019un pour l\u2019eau chaude sanitaire et le second pour le chauffage alimentant des radiateurs \u00E0 eau ou un plancher chauffant.<\/p>\r\n\r\n<p>Pour assurer le chauffage d\u2019une habitation, l\u2019installation solaire peut \u00EAtre configur\u00E9e de trois mani\u00E8res :<\/p>\r\n\r\n<ul>\r\n  <li>L\u2019eau chauff\u00E9e part directement vers le plancher chauffant, on parle de chauffage solaire direct<\/li>\r\n  <li>L\u2019eau chauff\u00E9e est envoy\u00E9e vers une chaudi\u00E8re (gaz, bois ou mazout) ou une pompe \u00E0 chaleur qui assure une mont\u00E9e en temp\u00E9rature plus importante. Il s\u2019agit l\u00E0 d\u2019une installation bi\u00E9nergie ou d\u2019un syst\u00E8me solaire combin\u00E9<\/li>\r\n  <li>L\u2019eau chauff\u00E9e est envoy\u00E9e vers un ballon d\u2019eau chaude dont la r\u00E9sistance prend le relais en cas de n\u00E9cessit\u00E9 avant l\u2019envoi vers le plancher chauffant. Une installation qui rel\u00E8ve elle aussi de la bi\u00E9nergie qualifi\u00E9e de syst\u00E8me solaire combin\u00E9.<\/li>\r\n<\/ul>\r\n\r\n<p>Faire installer un syst\u00E8me de chauffage solaire thermique permet d'utiliser une \u00E9nergie gratuite, in\u00E9puisable et non polluante. Cela permet aussi de r\u00E9duire les \u00E9missions de gaz \u00E0 effet de serre. Le solaire thermique est \u00E0 m\u00EAme de fournir jusqu'\u00E0 70 % des besoins en eau chaude d'une maison et jusqu'\u00E0 50 % des besoins en chauffage. Outre cela, les frais de maintenance et d'entretien sont relativement faibles.<\/p>\r\n",
        },
        {
          id: 2,
          content:
            "<p>Le prix d\u00E9pendra de la technologie choisie. En France m\u00E9tropolitaine compte-tenu des taux d\u2019ensoleillement observ\u00E9s, il est recommand\u00E9 d\u2019opter pour une installation de type syst\u00E8me solaire combin\u00E9. Hors plancher chauffant (estim\u00E9 lui \u00E0 4 000 \u20AC), l\u2019installation solaire thermique pour une maison de 100 m\u00B2 est \u00E9valu\u00E9e \u00E0 environ 13 000 \u20AC d\u2019\u00E9quipements divers auxquels il convient d\u2019ajouter 3 000 \u20AC de frais d\u2019installations et de mise en route soit un prix total de 16 000 \u20AC (160 \u20AC du m\u00B2 \u00E0 chauffer).<\/p>\r\n",
        },
        {
          id: 3,
          content:
            "<p>Il existe plusieurs aides pour financer l\u2019achat d\u2019un chauffage solaire : la prime Coup de pouce, accessible sans plafond de revenus, et MaPrimeR\u00E9nov' qui exclut les Fran\u00E7ais les plus ais\u00E9s (profil rose).<\/p>\r\n\r\n<p>Dans le cadre du dispositif MaPrimeR\u00E9nov\u2019, les propri\u00E9taires occupants et les propri\u00E9taires bailleurs peuvent b\u00E9n\u00E9ficier d\u2019une prime allant jusqu\u2019\u00E0 11 000 \u20AC selon le montant total des travaux et le niveau de revenus du foyer. La prime est vers\u00E9e apr\u00E8s la r\u00E9alisation des travaux, sur pr\u00E9sentation de la facture.<\/p>\r\n\r\n<p>Il est possible de cumuler l\u2019aide MaPrimeR\u00E9nov\u2019 avec la prime CEE (Certificats d\u2019\u00C9conomies d\u2019\u00C9nergie), aussi appel\u00E9e Coup de pouce Chauffage. Ce m\u00E9canisme oblige les fournisseurs d\u2019\u00E9nergie \u00E0 participer \u00E0 la r\u00E9novation \u00E9nerg\u00E9tique. La prime \u00E9nergie peut atteindre 4 000 \u20AC pour faire installer un chauffage solaire en remplacement d'une vieille chaudi\u00E8re \u00E0 \u00E9nergie fossile, en fonction de la situation financi\u00E8re du m\u00E9nage.<\/p>\r\n\r\n<p>Par ailleurs, l\u2019Anah (Agence nationale de l\u2019habitat) propose une aide \u00E0 la r\u00E9novation \u00E9nerg\u00E9tique globale pour les foyers aux ressources modestes et tr\u00E8s modestes. Cette aide, baptis\u00E9e MaPrimeR\u00E9nov' S\u00E9r\u00E9nit\u00E9, est proportionnelle au co\u00FBt des travaux et peut atteindre 15 000 \u20AC. Elle n\u2019est pas cumulable avec MaPrimeR\u00E9nov\u2019 individuelle.<\/p>\r\n",
        },
      ],
    },
    {
      id: 'cet',
      img: '../../../assets/solutions/cet.jpg',
      type: 'Eau chaude sanitaire',
      title: 'Chauffe-eau thermodynamique',
      description:
        "<p>Un ballon d\u2019eau chaude thermodynamique, parfois appel\u00E9 cumulus thermodynamique ou encore chauffe-eau thermodynamique est un \u00E9quipement de production d\u2019eau chaude sanitaire (ECS). Pour fonctionner, il se base sur le principe de la thermodynamique, il associe une pompe \u00E0 chaleur a\u00E9rothermique \u00E0 un chauffe-eau ou \u00E0 un ballon d\u2019eau chaude classique.<\/p>\r\n\r\n<p>Comme ces derniers, il fabrique de l\u2019eau chaude pour tous les besoins de la maison : toilette, m\u00E9nage (vaisselle), salle de bain, cuisine\u2026 Mais, \u00E0 leur diff\u00E9rence, il n\u2019utilise pas uniquement de l\u2019\u00E9lectricit\u00E9 pour produire cette eau chaude. Il extrait \u00E9galement les calories pr\u00E9sentes dans l\u2019air pour cr\u00E9er de la chaleur et r\u00E9chauffer de l\u2019eau.<\/p>\r\n",
      listQuestions: [
        {
          id: 1,
          question: 'Qu’est-ce qu’un ballon d’eau chaude thermodynamique ?',
        },
        {
          id: 2,
          question: 'Le fonctionnement d’un ballon thermodynamique',
        },
        {
          id: 3,
          question: 'Quels sont les avantages d’un ballon thermodynamique ?',
        },
        {
          id: 4,
          question: 'Où installer un ballon d’eau chaude thermodynamique',
        },
        {
          id: 5,
          question: 'Ballon d’eau chaude thermodynamique : le point sur les prix',
        },
      ],
      questionsContent: [
        {
          id: 1,
          content:
            "<p>Un ballon d\u2019eau chaude thermodynamique, parfois appel\u00E9 cumulus thermodynamique ou encore chauffe-eau thermodynamique est un \u00E9quipement de production d\u2019eau chaude sanitaire (ECS). Pour fonctionner, il se base sur le principe de la thermodynamique, il associe une pompe \u00E0 chaleur a\u00E9rothermique \u00E0 un chauffe-eau ou \u00E0 un ballon d\u2019eau chaude classique.<\/p>\r\n\r\n<p>Comme ces derniers, il fabrique de l\u2019eau chaude pour tous les besoins de la maison : toilette, m\u00E9nage (vaisselle), salle de bain, cuisine\u2026 Mais, \u00E0 leur diff\u00E9rence, il n\u2019utilise pas uniquement de l\u2019\u00E9lectricit\u00E9 pour produire cette eau chaude. Il extrait \u00E9galement les calories pr\u00E9sentes dans l\u2019air pour cr\u00E9er de la chaleur et r\u00E9chauffer de l\u2019eau.<\/p>\r\n",
        },
        {
          id: 2,
          content:
            "<p>Pour produire de l\u2019eau chaude sanitaire, le cumulus thermodynamique fonctionne sur le couplage d\u2019une r\u00E9sistance \u00E9lectrique et d\u2019une pompe \u00E0 chaleur. Il agit en quatre temps :<\/p>\r\n\r\n<ul>\r\n  <li>La pompe \u00E0 chaleur capte de l\u2019air ambiant<\/li>\r\n  <li>Elle extrait ensuite les calories naturellement pr\u00E9sentes dans l\u2019air<\/li>\r\n  <li>Ces calories chauffent un liquide caloporteur qui est compress\u00E9 pour faire cro\u00EEtre sa chaleur<\/li>\r\n  <li>Le fluide caloporteur compress\u00E9 restitue la chaleur au ballon d\u2019eau chaude, qui produit alors de l\u2019eau sanitaire (jusqu\u2019\u00E0 55\u00B0C ou 60\u00B0C).<\/li>\r\n<\/ul>\r\n\r\n<p>Ce syst\u00E8me est efficace \u00E9t\u00E9 comme hiver, avec une nuance cependant, la temp\u00E9rature de l\u2019air doit \u00EAtre comprise entre 5\u00B0C et 35\u00B0C. Au-del\u00E0, un syst\u00E8me \u00E9lectrique, compris dans la pompe \u00E0 chaleur prend le relais. Un besoin exceptionnel d\u2019eau chaude sera \u00E9galement couvert par ce syst\u00E8me \u00E9lectrique.<\/p>\r\n",
        },
        {
          id: 3,
          content:
            "<p>La technologie du ballon thermodynamique vous int\u00E9resse ? Voici les nombreux b\u00E9n\u00E9fices qui pourraient faire pencher la balance en sa faveur !<\/p>\r\n\r\n<h3>L\u2019int\u00E9r\u00EAt \u00E9conomique d\u2019un ballon thermodynamique<\/h3>\r\n\r\n<p>Produire de l\u2019eau chaude sanitaire avec un cumulus thermodynamique est d\u2019abord avantageux d\u2019un point de vue \u00E9conomique. Vos consommations \u00E9lectriques peuvent en effet conna\u00EEtre une forte baisse par rapport \u00E0 un chauffe-eau \u00E9lectrique classique, de l\u2019ordre d\u2019une division par trois.<\/p>\r\n\r\n<h3>L'atout \u00E9cologique d\u2019un cumulus thermodynamique<\/h3>\r\n\r\n<p>Le chauffe-eau thermodynamique fonctionne \u00E0 partir de l\u2019air, une \u00E9nergie propre et renouvelable. De plus, il n\u2019\u00E9met aucun rejet direct de gaz \u00E0 effet de serre lorsque la pompe \u00E0 chaleur fonctionne. Ce sont les raisons pour lesquelles il est compatible avec la construction de logements neufs, en accord avec la RE 2020.<\/p>\r\n\r\n<h3>Les capacit\u00E9s adaptables \u00E0 vos besoins<\/h3>\r\n\r\n<p>Le ballon thermodynamique a aussi pour particularit\u00E9 de pouvoir s\u2019adapter \u00E0 d\u2019importants besoins en eau chaude. On estime par exemple qu\u2019un chauffe-eau thermodynamique avec un volume d\u2019eau de 270L peut fournir de l\u2019eau chaude pour 7 personnes.<\/p>\r\n",
        },
        {
          id: 4,
          content:
            "<p>Si l\u2019emplacement du chauffe-eau thermodynamique peut \u00EAtre contraignant, il est toutefois possible de l\u2019installer dans une grande vari\u00E9t\u00E9 de logements :<\/p>\r\n\r\n<ul>\r\n  <li>Appartements (suffisamment grand pour avoir une pi\u00E8ce \u00E0 l'\u00E9cart)<\/li>\r\n  <li>Maisons<\/li>\r\n  <li>Logements neufs<\/li>\r\n  <li>Logements anciens<\/li>\r\n  <li>R\u00E9novations<\/li>\r\n<\/ul>\r\n",
        },
        {
          id: 5,
          content:
            "<p>Acqu\u00E9rir un chauffe-eau thermodynamique est n\u00E9cessairement plus co\u00FBteux qu'un ballon classique, vous devez compter environ 2 500 \u20AC pour les premiers prix hors pose.<\/p>\r\n\r\n<p>Il s\u2019agit bien s\u00FBr de prix indicatifs. De nombreux \u00E9l\u00E9ments peuvent faire fluctuer les devis, le co\u00FBt horaire de l\u2019artisan, la marque et le mod\u00E8le achet\u00E9 ainsi que le type de prise d\u2019air, la puissance de l\u2019appareil et ses options, la complexit\u00E9 du chantier, l\u2019accessibilit\u00E9 de votre logement, etc.<\/p>\r\n\r\n<p>Si vous confiez votre projet \u00E0 un professionnel partenaire Quelstravaux.fr, il saura vous accompagner de l\u2019\u00E9tude de vos besoins en passant par le financement, la r\u00E9alisation des aides ainsi que des travaux et de l\u2019entretien de vos appareils.<\/p>\r\n\r\n<p>Quelles aides de l\u2019\u00C9tat pour acheter et installer un ballon thermodynamique ?<\/p>\r\n\r\n<p>Dans la mesure o\u00F9 le ballon d\u2019eau chaude thermodynamique puise son pouvoir de chauffe dans l\u2019air, il est assimil\u00E9 \u00E0 un appareil \u00E9cologique. Son achat et son installation b\u00E9n\u00E9ficient donc d\u2019aides et de subventions de l\u2019\u00C9tat, \u00E0 condition de faire intervenir un artisan RGE.<\/p>\r\n\r\n<p>Voici les aides et subventions auxquelles un ballon thermodynamique est \u00E9ligible :<\/p>\r\n\r\n<ul>\r\n  <li>Les aides de l\u2019Anah, telle que MaPrimeRenov\u2019<\/li>\r\n  <li>Le dispositif des CEE (Certificats d\u2019\u00C9conomies d\u2019\u00C9nergie)<\/li>\r\n  <li>L\u2019Eco-PTZ (\u00C9co-Pr\u00EAt \u00E0 Taux Z\u00E9ro)<\/li>\r\n  <li>La TVA r\u00E9duite \u00E0 5,5%<\/li>\r\n<\/ul>\r\n\r\n<p>Ainsi, avec ces aides \u00E0 la r\u00E9novation \u00E9nerg\u00E9tique et les \u00E9conomies d\u2019\u00E9nergie potentielles, investir dans un chauffe-eau thermodynamique est une op\u00E9ration rentabilis\u00E9e assez rapidement.<\/p>\r\n",
        },
      ],
    },
    {
      id: 'ces',
      img: '../../../assets/solutions/ces.jpg',
      type: 'Eau chaude sanitaire',
      title: 'Chauffe-eau solaire',
      description:
        "<p>Un chauffe-eau solaire pr\u00E9sent sur votre toit capte l'\u00E9nergie du soleil et chauffe l'eau sanitaire de votre logement. Facile \u00E0 installer, \u00E9conomique et \u00E9cologique, le chauffe-eau solaire se d\u00E9veloppe de plus en plus en France.<\/p>\r\n",
      listQuestions: [
        {
          id: 1,
          question: "Fonctionnement d'un chauffe-eau solaire",
        },
        {
          id: 2,
          question: 'Un appareil efficace',
        },
        {
          id: 3,
          question: 'Produire de l’eau chaude cela coûte cher ! ',
        },
        {
          id: 4,
          question: 'Le soleil, c’est gratuit !',
        },
        {
          id: 5,
          question: 'Comment bien choisir ?',
        },
        {
          id: 6,
          question: 'Quel prix pour un chauffe-eau solaire ?',
        },
        {
          id: 7,
          question: 'Des aides et subventions pour votre chauffe-eau solaire individuel',
        },
      ],
      questionsContent: [
        {
          id: 1,
          content:
            "<h3>Capter l'\u00E9nergie solaire<\/h3>\r\n\r\n<p>La premi\u00E8re \u00E9tape d\u2019un chauffe-eau solaire consiste \u00E0 r\u00E9cup\u00E9rer l'\u00E9nergie solaire par un capteur solaire de couleur noir plac\u00E9 sur un toit. En effet, un absorbeur constitu\u00E9 d'une plaque et de tubes m\u00E9talliques noirs intercepte le rayonnement solaire et gr\u00E2ce \u00E0 sa couleur noir, il s'\u00E9chauffe (comme une voiture noire au soleil). L'absorbeur est entour\u00E9 d'un coffre qui l'isole et retient la chaleur.<\/p>\r\n\r\n<h3>Faire circuler l'\u00E9nergie solaire du capteur au ballon<\/h3>\r\n\r\n<p>Le transport de la chaleur est assur\u00E9 par le circuit primaire. Un fluide, g\u00E9n\u00E9ralement de l'eau et de l'antigel circule dans les tubes du capteur, se r\u00E9chauffe et est envoy\u00E9 vers le ballon de stockage.<\/p>\r\n\r\n<h3>Transf\u00E9rer la chaleur \u00E0 l'eau du ballon<\/h3>\r\n\r\n<p>Un \u00E9changeur thermique (serpentin) permet au fluide de transf\u00E9rer ses calories \u00E0 l'eau du ballon. Le circuit du fluide est ferm\u00E9, refroidi, il va se r\u00E9chauffer \u00E0 nouveau dans le capteur solaire. L'\u00E9nergie utilis\u00E9e est bien une \u00E9nergie renouvelable, celle du soleil.<\/p>\r\n\r\n<h3>Conserver l'eau chaude dans le ballon<\/h3>\r\n\r\n<p>Comme pour un ballon d'eau chaude classique, le ballon solaire thermique, bien isol\u00E9, stocke l'eau chaude et se vide et se remplit en fonction des besoins des usagers.<\/p>\r\n",
        },
        {
          id: 2,
          content:
            "<p>Savez-vous que la production d\u2019eau chaude sanitaire consomme plus d'\u00E9nergie que l'ensemble de vos appareils \u00E9lectrom\u00E9nagers et votre \u00E9clairage ?<\/p>\r\n\r\n<p>Un chauffe-eau solaire fonctionne gr\u00E2ce \u00E0 l'\u00E9nergie r\u00E9cup\u00E9r\u00E9e sur votre toit ou dans votre jardin par des panneaux solaires thermiques qui peuvent \u00EAtre de diff\u00E9rents types (non vitr\u00E9s, vitr\u00E9s, sous-vide ou tubes). L'id\u00E9al pour installer ces panneaux est de disposer d'un toit orient\u00E9 au sud offrant une inclinaison de 45\u00B0 environ et totalement d\u00E9gag\u00E9e.<\/p>\r\n\r\n<p>Pour une maison individuelle, il convient de poser de mani\u00E8re bien orient\u00E9e 4 \u00E0 6 m\u00B2 panneaux thermiques qui vont capter les calories du rayonnement solaire et les transmettre \u00E0 un fluide caloporteur. Ce dernier est envoy\u00E9 vers le ballon pour y communiquer \u00E0 son tour les calories qu\u2019il transporte \u00E0 l\u2019eau stock\u00E9e avant de retourner au panneau solaire thermique.<\/p>\r\n\r\n<p>Nota : un chauffe-eau solaire peu aussi assurer le fonctionnement du chauffage central. L'eau de ce dernier chauff\u00E9e par le liquide caloporteur est v\u00E9hicul\u00E9e vers les radiateurs puis retourne vers l'\u00E9changeur thermique.<\/p>\r\n",
        },
        {
          id: 3,
          content:
            "<p>La production d\u2019eau chaude par un ballon \u00E9lectrique classique repr\u00E9sente 14% de votre facture d\u2019\u00E9lectricit\u00E9. La physique nous apprend qu\u2019il faut 44.08 kWh d'\u00E9nergie pour \u00E9lever la temp\u00E9rature d\u2019un m3 d'eau froide jusqu'\u00E0 38\u00B0. M\u00EAme si comme la plupart des foyers votre ballon se d\u00E9clenche aux heures creuses (0,1270\u20AC du kWh TTC), cela vous co\u00FBte tout de m\u00EAme 5,60\u20AC par m3 d\u2019eau chaude sanitaire produit !<\/p>\r\n\r\n<p>Une facture annuelle de 280\u20AC pour les 50 m3 d\u2019eau chaude sanitaire n\u00E9cessaires selon l\u2019INSEE \u00E0 la vie d\u2019un foyer de 4 personnes. Ce chiffre d\u00E9j\u00E0 \u00E9lev\u00E9 est dans de tr\u00E8s nombreux cas alourdi par l\u2019entartage du ballon \u00E0 eau chaude, la r\u00E9sistance devant malheureusement chauffer le calcaire qui l\u2019emprisonne avant de communiquer ses calories \u00E0 l\u2019eau.<\/p>\r\n",
        },
        {
          id: 4,
          content:
            "<p>Le soleil nous offre une \u00E9nergie gratuite que nous commen\u00E7ons \u00E0 savoir utiliser efficacement. La surface de notre plan\u00E8te re\u00E7oit en moyenne 350 W\/m\u00B2 d\u2019\u00E9nergie solaire. La technologie des panneaux solaires nous permet aujourd\u2019hui de produire de l\u2019\u00E9lectricit\u00E9 via des panneaux photovolta\u00EFques ou de r\u00E9cup\u00E9rer ces calories via des panneaux thermiques. Une \u00E9nergie verte et renouvelable totalement gratuite.<\/p>\r\n",
        },
        {
          id: 5,
          content:
            "<p>Le choix de votre chauffe-eau solaire sera d\u00E9termin\u00E9 par la situation g\u00E9ographique de votre logement, la composition de votre foyer et la place disponible au sein de ce dernier. La surface des capteurs solaires n\u00E9cessaire au fonctionnement de l\u2019installation d\u00E9pend de la latitude de votre r\u00E9gion et de la quantit\u00E9 d'eau chaude \u00E0 produire. Plus votre famille est nombreuse plus votre ballon devra \u00EAtre cons\u00E9quent. Il vous faudra donc disposer de suffisamment de place en chaufferie ou au garage pour l\u2019installer.<\/p>\r\n",
        },
        {
          id: 6,
          content:
            "<p>Le syst\u00E8me est tellement avantageux qu\u2019aujourd\u2019hui tous les fabricants de chauffe-eau proposent une solution solaire. Une offre abondante qui permet de faire jouer la concurrence. Il faut compter aujourd\u2019hui entre 4000\u20AC et 6000\u20AC pour un chauffe-eau performant, cet \u00E9quipement est \u00E9galement \u00E9ligible aux aides de l\u2019ANAH, \u00E0 l\u2019\u00E9co PTZ, TVA \u00E0 taux r\u00E9duit et aussi \u00E0 la prime \u00E9nergie pour le chauffe-eau solaire.<\/p>\r\n\r\n<p>En construction comme en r\u00E9novation, la solution solaire est un des meilleurs choix technologiques actuels pour produire votre eau chaude. Fiable et sans entretien excessif, l'installation offre un confort optimal \u00E0 moindre co\u00FBt tout en vous engageant sur la voie de la consommation \u00E9coresponsable. Une option gagnante sur tous les plans !<\/p>\r\n",
        },
        {
          id: 7,
          content:
            "<p>L'installation d'un chauffe-eau solaire individuel vous permettra de postuler \u00E0 une multitude d'aides et de subventions \u00E9cologiques \u00E0 l'image de la prime CEE (Certificat d\u2019\u00E9conomie d\u2019\u00E9nergie) Anah et de MaPrimeR\u00E9nov\u2019.<\/p>\r\n",
        },
      ],
    },
    {
      id: 'photovoltaique',
      img: '../../../assets/solutions/photovoltaique.jpg',
      type: 'Panneaux photovoltaiques',
      title: 'Panneaux photovoltaiques',
      description:
        "<p>Gr\u00E2ce au soleil, les panneaux solaires photovolta\u00EFques sont capables de couvrir jusqu\u2019\u00E0 70 % de vos besoins en \u00E9lectricit\u00E9. Mais, comment \u00E7a fonctionne exactement ? On vous explique tout en d\u00E9tail !<\/p>\r\n\r\n<p>Vous souhaitez vous lancer dans l\u2019autoconsommation ? Nous sommes l\u00E0 pour vous accompagner dans votre projet. Avec nos partenaires Quelstravaux.fr, nous vous guidons de la naissance de votre projet \u00E0 la mise en service de vos panneaux et jusqu\u2019\u00E0 leur maintenance.<\/p>\r\n",
      listQuestions: [
        {
          id: 1,
          question: 'Les bonnes raisons de passer à l’énergie solaire ',
        },
        {
          id: 2,
          question: 'Le principe de la production solaire',
        },
        {
          id: 3,
          question: 'Tous les éléments d’une installation solaire',
        },
        {
          id: 4,
          question: 'Consommation : revendre ou tout consommer ?',
        },
      ],
      questionsContent: [
        {
          id: 1,
          content:
            "<h3>Une \u00E9nergie propre et gratuite<\/h3>\r\n\r\n<p>Le soleil repr\u00E9sente une source d\u2019\u00E9nergie in\u00E9puisable et 100 % gratuite. Son utilisation n\u2019a aucun impact nocif sur l\u2019environnement. Contrairement aux \u00E9nergies fossiles, le soleil n\u2019\u00E9met pas de gaz \u00E0 effet de serre.<\/p>\r\n\r\n<h3>Vous faites des \u00E9conomies<\/h3>\r\n\r\n<p>En consommant votre propre \u00E9lectricit\u00E9, vous vous affranchissez du r\u00E9seau de distribution classique. Selon votre consommation et vos habitudes de vie, vous pouvez r\u00E9duire vos factures d\u2019\u00E9lectricit\u00E9 jusqu\u2019\u00E0 50 %. Encore mieux, vous g\u00E9n\u00E9rez un revenu suppl\u00E9mentaire en vendant votre surplus d\u2019\u00E9lectricit\u00E9 \u00E0 EDF Obligation d\u2019Achat.<\/p>\r\n\r\n<h3>Des installations qui se d\u00E9mocratisent<\/h3>\r\n\r\n<p>Poser des panneaux solaires n\u2019est plus r\u00E9serv\u00E9 \u00E0 une \u00E9lite. Les co\u00FBts d\u2019acquisition et d\u2019installation diminuent petit \u00E0 petit pour s\u2019ouvrir au plus grand nombre.<\/p>\r\n",
        },
        {
          id: 2,
          content:
            "<h3>Le but d\u2019une installation solaire photovolta\u00EFque<\/h3>\r\n\r\n<p>Le but d\u2019une installation solaire photovolta\u00EFque est de transformer la lumi\u00E8re du soleil en \u00E9lectricit\u00E9 utilisable pour toute votre maison. Mais pour en arriver l\u00E0, le soleil passe par plusieurs \u00E9tapes :<\/p>\r\n\r\n<ul>\r\n  <li>Les cellules photovolta\u00EFques contenues dans les panneaux solaires se chargent de capter la lumi\u00E8re du soleil pour la transformer en \u00E9nergie, du courant continu<\/li>\r\n  <li>L\u2019onduleur central ou les micro-onduleurs prennent le relais et convertissent ce courant continu en courant alternatif<\/li>\r\n  <li>Le courant alternatif est pr\u00EAt pour partir dans votre maison et couvrir une partie de vos besoins en \u00E9lectricit\u00E9, \u00E9clairages, radiateurs, appareils \u00E9lectrom\u00E9nagers\u2026<\/li>\r\n<\/ul>\r\n\r\n<h3>Focus sur les cellules photovolta\u00EFques<\/h3>\r\n\r\n<p>Sans elles, pas d\u2019\u00E9lectricit\u00E9 ! Les cellules photovolta\u00EFques, faites de silicium, sont les principales composantes d\u2019un panneau solaire. Semi-conductrices et charg\u00E9es en \u00E9lectrons, ce sont elles qui sont capables de produire de l\u2019\u00E9lectricit\u00E9 \u00E0 partir de l\u2019\u00E9nergie brute du soleil.<\/p>\r\n\r\n<ul>\r\n  <li>La lumi\u00E8re du soleil contient des photons<\/li>\r\n  <li>Les photons des rayons solaires entrent en contact avec le semi-conducteur, ce qui lib\u00E8re les \u00E9lectrons des cellules photovolta\u00EFques<\/li>\r\n  <li>On applique une direction au flux d\u2019\u00E9lectron, gr\u00E2ce \u00E0 une borne positive et une borne n\u00E9gative. Ce flux d\u2019\u00E9lectron devient alors un courant \u00E9lectrique.<\/li>\r\n<\/ul>\r\n",
        },
        {
          id: 3,
          content:
            "<h3>\u00C9l\u00E9ments essentiels d'une installation photovolta\u00EFque<\/h3>\r\n\r\n<p>Pour fonctionner correctement, une installation photovolta\u00EFque n\u00E9cessite plusieurs \u00E9l\u00E9ments importants. Seuls, les panneaux sont incapables de vous fournir de l\u2019\u00E9lectricit\u00E9 ! Voici tout ce que comporte une installation.<\/p>\r\n\r\n<ul>\r\n  <li><strong>Le panneau solaire<\/strong>: Il est l\u2019\u00E9l\u00E9ment central, capable de transformer les rayons du soleil en \u00E9lectricit\u00E9. Il existe plusieurs types de panneaux solaires, les principaux \u00E9tant les monocristallins et les polycristallins.<\/li>\r\n  <li><strong>L\u2019onduleur<\/strong>: Il transforme le courant continu obtenu par les panneaux en courant alternatif, utilisable par votre maison ou le r\u00E9seau de distribution en cas de revente.<\/li>\r\n  <li><strong>Le c\u00E2blage \u00E9lectrique<\/strong>: Il fait le lien entre tous les \u00E9l\u00E9ments, la longueur d\u00E9pend de l'installation.<\/li>\r\n  <li><strong>La batterie<\/strong>: Optionnelle, elle peut stocker le surplus de production pour une utilisation ult\u00E9rieure.<\/li>\r\n  <li><strong>Le compteur Linky<\/strong>: Il permet de comptabiliser l'\u00E9lectricit\u00E9 r\u00E9inject\u00E9e dans le r\u00E9seau pour la revente du surplus.<\/li>\r\n<\/ul>\r\n",
        },
        {
          id: 4,
          content:
            "<h3>Mode de consommation de l'\u00E9lectricit\u00E9 solaire<\/h3>\r\n\r\n<p>Maintenant que vous comprenez le fonctionnement des panneaux solaires, il ne reste plus qu\u2019\u00E0 choisir un mode de consommation. Vous avez le choix parmi trois possibilit\u00E9s.<\/p>\r\n\r\n<ul>\r\n  <li>\r\n    <strong>Production avec vente de surplus :<\/strong> la plus r\u00E9pandue. Vous consommez votre propre \u00E9lectricit\u00E9 quand vous en avez besoin. Le surplus est r\u00E9inject\u00E9 dans le r\u00E9seau et achet\u00E9 par EDF Obligation d\u2019Achat. Vous g\u00E9n\u00E9rez ainsi un petit revenu annuel.\r\n  <\/li>\r\n  <li>\r\n    <strong>Production avec vente totale :<\/strong> Vous vendez la totalit\u00E9 de votre production solaire \u00E0 EDF OA Solaire sans passer par l'autoconsommation. Moins conseill\u00E9e aujourd'hui en raison des tarifs d\u2019achat moins avantageux.\r\n  <\/li>\r\n  <li>\r\n    <strong>L\u2019autoconsommation totale :<\/strong> Consommer tout ce que vous pouvez sans vendre le surplus. Il est r\u00E9inject\u00E9 dans le r\u00E9seau, sans engagement financier ni prime \u00E0 l\u2019autoconsommation.\r\n  <\/li>\r\n<\/ul>\r\n",
        },
      ],
    },
  ];
  menuSolutions = [
    {
      id: 'idc',
      title: 'Isolation des combles',
    },
    {
      id: 'idm',
      title: 'Isolation des murs',
    },
    {
      id: 'pacae',
      title: 'Pompe à chaleur air eau',
    },
    {
      id: 'pacaa',
      title: 'Pompe à chaleur air air',
    },
    {
      id: 'cs',
      title: 'Chauffage solaire',
    },
    {
      id: 'cet',
      title: 'Chauffe-eau thermodynamique',
    },
    {
      id: 'ces',
      title: 'Chauffe-eau solaire',
    },
    {
      id: 'photovoltaique',
      title: 'Panneaux photovoltaïques',
    },
  ];
  solutionChoisie: any;
  questionChoisie: any;

  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 500,
    center: true,
    autoHeight: false,
    responsive: {
      0: {
        items: 1,
      },
      640: {
        items: 2,
      },
      940: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
    nav: false,
  };

  constructor(private Activatedroute: ActivatedRoute, private router: Router) {}
  ngOnInit() {
    this.Activatedroute.queryParamMap.subscribe((params: any) => {
      this.solutionID = params.get('solutionID');
    });

    for (let solution of this.solutions) {
      if (this.solutionID == solution.id) {
        this.solutionChoisie = solution;
        this.questionChoisie = solution.questionsContent[0].content;
        this.activeQuestion = 0;
      }
    }
  }

  changeSolution(event: any) {
    let selectedSolution = event.value;
    for (let solution of this.solutions) {
      if (solution.id == selectedSolution) {
        this.solutionChoisie = solution;
        this.questionChoisie = solution.questionsContent[0].content;
        this.activeQuestion = 0;
      }
    }
  }

  selectQuestion(i: any, questionID: any) {
    this.activeQuestion = i;

    for (let question of this.solutionChoisie.questionsContent) {
      console.log(question);
      if (question.id == questionID) {
        this.questionChoisie = question.content;
      }
    }
  }
}
