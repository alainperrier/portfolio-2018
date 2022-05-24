<template>
  <div
    id="parcours"
    class="text-grey-dark bg-grey-white relative font-lato-light font-normal h-full trans-all-fast
    p-8 smp:p-8 sml:p-8 md:p-12 lg:p-14 xl:p-14 xxl:p-14">
    <div class="mb-11">
      <h3 class="text-base smp:text-base sml:text-base md:text-2xl lg:text-4xl xl:text-5xl xxl:text-5xl uppercase font-semibold">Mon parcours</h3>
      <h4 class="text-base smp:text-base sml:text-base md:text-lg lg:text-2xl xl:text-3xl xxl:text-3xl uppercase mt-2">Scolaire et professionnel</h4>
    </div>
    <ul class="timeline overflow-hidden">
      <li class="timeline-inverted">
        <div
          id="gfi"
          class="timeline-badge trans-all cursor-pointer"
          @click="setBadge('gfi', 0)">
          <img
            class="w-20px h-20px"
            src="~assets/img/tie.svg"
            alt="Expérience professionnelle">
        </div>
        <div class="timeline-panel">
          <div class="timeline-heading">
            <p class="flex text-sm mb-4">
              <span class="text-blue-dark">Sept. 2018 - Fév. 2022</span>
              <span class="text-grey-middle ml-auto">Professionnel</span>
            </p>
            <h4 class="timeline-title text-mid font-semibold mb-3">Chef de projet informatique</h4>
            <a
              class="inline-flex trans-all text-grey-dark flex flex-row items-center"
              href="https://www.gfi.world/fr-fr/"
              target="_blank"
              rel="noopener noreferrer">
              <div class="flex-no-shrink w-35px mr-3">
                <img
                  class="w-full"
                  srcset= "~assets/img/logo-Gfi.png 1x, ~assets/img/logo-Gfi-2x.png 2x"
                  src="~assets/img/logo-Gfi.png"
                  alt="Logo Gfi Informatique">
              </div>
              <p>
                Inetum (ex-Gfi Informatique)
              </p>
            </a>
          </div>
          <div
            v-expand="badgeClicked == 'gfi'"
            class="expand timeline-body text-xs bg-white origin-top-center leading-tight mb-6">
            <div class="mt-6">
              <p class="font-lato-medium text-sm mb-1">Contexte</p>
              <p>Inetum est une Entreprise de Services du Numérique. J'ai intégré l'agence de Meylan en tant que chef de projet pour travailler sur des projets à engagement de résultats (ou au forfait). J'ai travaillé notamment pour un projet de développement et de maintenance d'une application pour le CNG. Cette application permet aux étudiants de médecine de passer les Epreuves Classantes Nationales informatisées sur tablette (ECNi) afin d'accéder au troisième cycle.</p>
            </div>
            <p class="mt-4"><span class="font-lato-medium text-sm">Missions</span></p>
            <ul class="mt-1">
              <li class="mt-1">Gestion et pilotage de projets à engagement de résultats (projets au forfait)</li>
              <li class="mt-1">Management d'une équipe de développeurs et de testeurs (jusqu'à 15 personnes)</li>
              <li class="mt-1">Product Owner et Scrum Master en s'appuyant sur les méthodes agiles (SCRUM / LEAN)</li>
              <li class="mt-1">Gestion du cycle de vie produit (valeur, qualité, sécurité, performance, jalons...)</li>
              <li class="mt-1">Planification, priorisation, gestion des charges, gestion des risques, suivi opérationnel, clôture de fin de mois...</li>
              <li class="mt-1">Animation d'ateliers client, de réunions de suivi, de comités de pilotage, de rétrospectives...</li>
              <li class="mt-1">Recette fonctionnelle, recette technique, rédaction et/ou validation de livrables...</li>
              <li class="mt-1">Avant vente, étude, analyse, reporting...</li>
              <li class="mt-1">Audit ISO 27001 sur le projet ECNi ayant permis d'obtenir la certification pour l'agence de Meylan</li>
            </ul>
          </div>
          <div
            class="expandable flex justify-end">
            <span
              class="inline-flex"
              @click="setBadge('gfi', 0)">
              <button
                v-ripple
                class="pt-1/2 pb-1/2 rounded-sm
                trans-all w-50px bg-blue-light flex flex-no-shrink items-center justify-center truncate text-white ml-auto font-lato-medium shadow
                p-2 text-xs"
                type="button"
                @mouseover="scaleBadge('gfi')"
                @mouseleave="reduceBadge('gfi')">
                <span>{{ labelDetail[0] }}</span>
              </button>
            </span>
          </div>
        </div>
      </li>
      <li>
        <div
          id="lastudio"
          class="timeline-badge trans-all cursor-pointer"
          @click="setBadge('lastudio', 1)">
          <img
            class="w-20px h-20px"
            src="~assets/img/tie.svg"
            alt="Expérience professionnelle">
        </div>
        <div class="timeline-panel">
          <div class="timeline-heading">
            <div class="flex text-sm mb-4">
              <p class="text-blue-dark">Nov. 2015 - Juin 2018</p>
              <p class="text-grey-middle ml-auto">Professionnel</p>
            </div>
            <h4 class="timeline-title text-mid font-semibold mb-3">Chef de projet web | Partenaire associé</h4>
            <span
              class="trans-all inline-flex text-grey-dark flex flex-row items-center">
              <div class="w-20px mr-3 flex-no-shrink">
                <img
                  class="w-full"
                  srcset= "~assets/img/logo-LA-Studio.png 1x, ~assets/img/logo-LA-Studio-2x.png 2x"
                  src="~assets/img/logo-LA-Studio.png"
                  alt="Logo LA-Studio">
              </div>
              <p>
                LA - Studio
              </p>
            </span>
          </div>
          <div
            v-expand="badgeClicked == 'lastudio'"
            class="expand timeline-body text-xs bg-white origin-top-center leading-tight mb-6">
            <div class="mt-6">
              <p class="font-lato-medium text-sm mb-1">Contexte</p>
              <p>LA-Studio est une agence de stratégie digitale qui accompagne les entreprises de la région grenobloise. Je participe à son développement en tant que partenaire associé.</p>
            </div>
            <div class="mt-4"><p class="font-lato-medium text-sm">Missions</p></div>
            <ul class="mt-1">
              <li>Conception et développement d'une
                <span>
                  application web pour la Banque Populaire Auvergne Rhône Alpes
                </span>
              </li>
              <li class="mt-1">Co-conception, co-développement et maintenance du site web du
                <a
                  class="text-grey-dark trans-all"
                  href="https://cabinet-schmidt.com"
                  target="_blank"
                  rel="noopener noreferrer">
                  Cabinet Schmidt
                </a>
              </li>
              <li class="mt-1">Développement d'un outil de diagnostic RH pour P+RH</li>
              <li class="mt-1">Déploiement de sites web et assistance technique</li>
              <li class="mt-1">
                <span>Entreprenariat : LA-Studio, </span>
                <span class="line-through">Chez Robert</span>
                <span> (projet d'une application de mise en relation agriculteurs / consommateurs)</span>
              </li>
            </ul>
          </div>
          <div
            class="expandable flex justify-end">
            <span
              class="inline-flex"
              @click="setBadge('lastudio', 1)">
              <button
                v-ripple
                class="pt-1/2 pb-1/2 rounded-sm
                trans-all w-50px bg-blue-light flex flex-no-shrink items-center justify-center truncate text-white ml-auto font-lato-medium shadow
                p-2 text-xs"
                type="button"
                @mouseover="scaleBadge('lastudio')"
                @mouseleave="reduceBadge('lastudio')">
                <span>{{ labelDetail[1] }}</span>
              </button>
            </span>
          </div>
        </div>
      </li>
      <li class="timeline-inverted">
        <div
          id="bp"
          class="timeline-badge trans-all cursor-pointer"
          @click="setBadge('bp', 2)">
          <img
            class="w-20px h-20px"
            src="~assets/img/tie.svg"
            alt="Expérience professionnelle">
        </div>
        <div class="timeline-panel">
          <div class="timeline-heading">
            <p class="flex text-sm mb-4">
              <span class="text-blue-dark">Mai 2015 - Déc. 2017</span>
              <span class="text-grey-middle ml-auto">Professionnel</span>
            </p>
            <h4 class="timeline-title text-mid font-semibold mb-3">Chef de projet digital</h4>
            <a
              class="inline-flex trans-all text-grey-dark flex flex-row items-center"
              href="https://www.bpaura.banquepopulaire.fr/portailinternet/Pages/default.aspx"
              target="_blank"
              rel="noopener noreferrer">
              <div class="flex-no-shrink w-25px mr-3">
                <img
                  class="w-full"
                  srcset= "~assets/img/BP.png 1x, ~assets/img/BP-2x.png 2x"
                  src="~assets/img/BP.png"
                  alt="Logo Banque Populaire">
              </div>
              <p>
                Banque Populaire Auvergne Rhône Alpes
              </p>
            </a>
          </div>
          <div
            v-expand="badgeClicked == 'bp'"
            class="expand timeline-body text-xs bg-white origin-top-center leading-tight mb-6">
            <div class="mt-6">
              <p class="font-lato-medium text-sm mb-1">Contexte</p>
              <p>Au siège de la Banque Populaire des Alpes à Corenc, j'ai piloté plusieurs projets visant à accélérer la transformation digitale en lien avec le Groupe BPCE et la filiale informatique Banque Populaire. J'ai également contribué à la Fusion Informatique et Organisationnelle pour donner naissance à la Banque Populaire Auvergne Rhône Alpes.</p>
            </div>
            <p class="mt-4"><span class="font-lato-medium text-sm">Missions</span></p>
            <ul class="mt-1">
              <li>Déploiement et pilotage de projets digitaux à enjeux stratégiques (signature électronique, application commerciale sur tablette...)</li>
              <li class="mt-1">Responsable projet Auvergne Rhône Alpes et membre du COPIL Digital</li>
              <li class="mt-1">Coordination transversale des acteurs (Banque, Groupe BPCE et filiales)</li>
              <li class="mt-1">Conduite du changement, formation et animation d'une communauté de référents digitaux</li>
              <li class="mt-1">Contribution à la Fusion Informatique et Organisationnelle</li>
            </ul>
          </div>
          <div
            class="expandable flex justify-end">
            <span
              class="inline-flex"
              @click="setBadge('bp', 2)">
              <button
                v-ripple
                class="pt-1/2 pb-1/2 rounded-sm
                trans-all w-50px bg-blue-light flex flex-no-shrink items-center justify-center truncate text-white ml-auto font-lato-medium shadow
                p-2 text-xs"
                type="button"
                @mouseover="scaleBadge('bp')"
                @mouseleave="reduceBadge('bp')">
                <span>{{ labelDetail[2] }}</span>
              </button>
            </span>
          </div>
        </div>
      </li>
      <li>
        <div
          id="dbs"
          class="timeline-badge trans-all cursor-pointer"
          @click="setBadge('dbs', 3)">
          <img
            class="w-20px h-20px"
            src="~assets/img/cap-black.svg"
            alt="Expérience scolaire">
        </div>
        <div class="timeline-panel">
          <div class="timeline-heading">
            <p class="flex text-sm mb-4">
              <span class="text-blue-dark">Sept. 2015 - Déc. 2016</span>
              <span class="text-grey-middle ml-auto">Scolaire</span>
            </p>
            <h4 class="timeline-title text-mid font-semibold mb-3">Advanced Master | Digital Business Strategy</h4>
            <a
              class="inline-flex trans-all text-grey-dark flex flex-row items-center"
              href="https://www.grenoble-em.com/mastere-specialise-strategie-digitale"
              target="_blank"
              rel="noopener noreferrer">
              <div class="w-20px mr-3 flex-no-shrink">
                <img
                  class="w-full"
                  srcset= "~assets/img/gem-logo.png 1x, ~assets/img/gem-logo-2x.png 2x"
                  src="~assets/img/gem-logo.png"
                  alt="Logo Grenoble École de Management">
              </div>
              <p>
                Grenoble École de Management
              </p>
            </a>
          </div>
          <div
            v-expand="badgeClicked == 'dbs'"
            class="expand timeline-body text-xs bg-white origin-top-center leading-tight mb-6">
            <div class="mt-6">
              <p class="font-lato-medium text-sm mb-1">Contexte</p>
              <p>Le Mastère spécialisé Stratégie Digitale est dispensé en anglais sur le campus de GEM à Paris. Il forme les étudiants aux pratiques du marketing digital (e-commerce, social media, SEO/SEA...), de l'expérience utilisateur, de la transformation digitale et de la gestion de projet agile dans un contexte international.</p>
            </div>
            <p class="mt-4"><span class="font-lato-medium text-sm">Évènements marquants</span></p>
            <ul class="mt-1">
              <li>Thèse Professionnelle : How can we encourage employees to adopt digital technology? Case study of La Banque Populaire des Alpes</li>
              <li class="mt-1">Rédaction d'articles de blog pour
                <a
                  href="http://digital-me-up.com/"
                  class="text-grey-dark trans-all"
                  target="_blank"
                  rel="noopener noreferrer">
                  Digital me UP
                </a>
              </li>
              <li class="mt-1">
                <span>Contributeur du livre du</span>
                <span class="italic">
                  <a
                    href="https://www.amazon.fr/digital-expliqu%C3%A9-mon-boss-aimeraient/dp/2367781354/ref=sr_1_1?ie=UTF8&qid=1523534135&sr=8-1&keywords=le+digital+expliqu%C3%A9+%C3%A0+mon+boss&dpID=51jMwRy-X-L&preST=_SY291_BO1,204,203,200_QL40_&dpSrc=srch"
                    class="text-grey-dark trans-all"
                    target="_blank"
                    rel="noopener noreferrer">
                    Digital expliqué à mon boss
                  </a>
                </span>
              </li>
              <li class="mt-1">Business Case
                <a
                  href="http://www.altigliss.com/"
                  class="text-grey-dark trans-all"
                  target="_blank"
                  rel="noopener noreferrer">
                  Altigliss Challenge
                </a>
              </li>
            </ul>
          </div>
          <div
            class="expandable flex justify-end">
            <span
              class="inline-flex"
              @click="setBadge('dbs', 3)">
              <button
                v-ripple
                class="pt-1/2 pb-1/2 rounded-sm
                trans-all w-50px bg-blue-light flex flex-no-shrink items-center justify-center truncate text-white ml-auto font-lato-medium shadow
                p-2 text-xs"
                type="button"
                @mouseover="scaleBadge('dbs')"
                @mouseleave="reduceBadge('dbs')">
                <span>{{ labelDetail[3] }}</span>
              </button>
            </span>
          </div>
        </div>
      </li>
      <li class="timeline-inverted">
        <div
          id="bsb"
          class="timeline-badge trans-all cursor-pointer"
          @click="setBadge('bsb', 4)">
          <img
            class="w-20px h-20px"
            src="~assets/img/cap-black.svg"
            alt="Expérience scolaire">
        </div>
        <div class="timeline-panel">
          <div class="timeline-heading">
            <p class="flex text-sm mb-4">
              <span class="text-blue-dark">Sept. 2013 - Juin 2015</span>
              <span class="text-grey-middle ml-auto">Scolaire</span>
            </p>
            <h4 class="timeline-title text-mid font-semibold mb-3">Master en Management | Programme Grande École</h4>
            <a
              class="inline-flex trans-all text-grey-dark flex flex-row items-center"
              href="https://www.bsb-education.com/"
              target="_blank"
              rel="noopener noreferrer">
              <div class="w-35px mr-3 flex-no-shrink">
                <img
                  class="w-full"
                  srcset= "~assets/img/bsb-logo.png 1x, ~assets/img/bsb-logo-2x.png 2x"
                  src="~assets/img/bsb-logo.png"
                  alt="Logo Burgundy School of Business">
              </div>
              <p>
                Burgundy School of Business
              </p>
            </a>
          </div>
          <div
            v-expand="badgeClicked == 'bsb'"
            class="expand timeline-body text-xs bg-white origin-top-center leading-tight mb-6">
            <div class="mt-6">
              <p class="font-lato-medium text-sm mb-1">Contexte</p>
              <p>Anciennement l'ESC Dijon, Burgundy School of Business forme les étudiants au monde de l'entreprise (stratégie, finance, économie, comptabilité, droit, marketing, communication, relations commerciales...).</p>
            </div>
            <p class="mt-4"><span class="font-lato-medium text-sm">Évènements marquants</span></p>
            <ul class="mt-1">
              <li>Semestre an Angleterre à l'université d'Hertfordshire</li>
              <li class="mt-1">Major de Promotion en première année</li>
              <li class="mt-1">Option Audit Expertise Comptabilité en première année</li>
              <li class="mt-1">Coach Photoshop d'un groupe de 20 étudiants</li>
              <li class="mt-1">Aide informatique aux personnes âgées dans l'association Médéric Malakoff</li>
            </ul>
          </div>
          <div
            class="expandable flex justify-end">
            <span
              class="inline-flex"
              @click="setBadge('bsb', 4)">
              <button
                v-ripple
                class="pt-1/2 pb-1/2 rounded-sm
                trans-all w-50px bg-blue-light flex flex-no-shrink items-center justify-center truncate text-white ml-auto font-lato-medium shadow
                p-2 text-xs"
                type="button"
                @mouseover="scaleBadge('bsb')"
                @mouseleave="reduceBadge('bsb')">
                <span>{{ labelDetail[4] }}</span>
              </button>
            </span>
          </div>
        </div>
      </li>
      <li>
        <div
          id="lf"
          class="timeline-badge trans-all cursor-pointer"
          @click="setBadge('lf', 5)">
          <img
            class="w-20px  h-20px"
            src="~assets/img/tie.svg"
            alt="Expérience professionnelle">
        </div>
        <div class="timeline-panel">
          <div class="timeline-heading">
            <p class="flex text-sm mb-4">
              <span class="text-blue-dark">Mai 2014 - Août 2014</span>
              <span class="text-grey-middle ml-auto">Professionnel</span>
            </p>
            <h4 class="timeline-title font-semibold text-mid mb-3">Assistant chef de projet</h4>
            <a
              class="inline-flex trans-all text-grey-dark flex flex-row items-center"
              href="https://leadformance.com"
              target="_blank"
              rel="noopener noreferrer">
              <div class="w-30px mr-3 flex-no-shrink">
                <img
                  class="w-full"
                  srcset= "~assets/img/lf.png 1x, ~assets/img/lf-2x.png 2x"
                  src="~assets/img/lf.png"
                  alt="Logo Leadformance">
              </div>
              <p>
                Leadformance
              </p>
            </a>
          </div>
          <div
            v-expand="badgeClicked == 'lf'"
            class="expand timeline-body text-xs bg-white origin-top-center leading-tight mb-6">
            <div class="mt-6">
              <p class="font-lato-medium text-sm mb-1">Contexte</p>
              <p>Leadformance propose une solution web-to-store visant à améliorer la visibilité des points de vente sur le web. Leadformance est située au Bourget-du-Lac, appartient au Groupe Solocal et travaille avec des entreprises grands comptes comme SFR, Crédit Agricole, Darty...</p>
            </div>
            <p class="mt-4"><span class="font-lato-medium text-sm">Missions</span></p>
            <ul class="mt-1">
              <li>Gestion de projet dans un contexte agile (méthode SCRUM) et international : daily meeting, sprint review, sprint goal, tests, documentation...</li>
              <li class="mt-1">Déploiement de projets BRIDGE (plateforme SAAS web-to-store)</li>
              <li class="mt-1">Relation clients (Numéricable...)</li>
              <li class="mt-1">Conception et développement d'outils internes</li>
            </ul>
          </div>
          <div
            class="expandable flex justify-end">
            <span
              class="inline-flex"
              @click="setBadge('lf', 5)">
              <button
                v-ripple
                class="pt-1/2 pb-1/2 rounded-sm
                trans-all w-50px bg-blue-light flex flex-no-shrink items-center justify-center truncate text-white ml-auto font-lato-medium shadow
                p-2 text-xs"
                type="button"
                @mouseover="scaleBadge('lf')"
                @mouseleave="reduceBadge('lf')">
                <span>{{ labelDetail[5] }}</span>
              </button>
            </span>
          </div>
        </div>
      </li>
      <li class="timeline-inverted">
        <div
          id="cm"
          class="timeline-badge trans-all cursor-pointer"
          @click="setBadge('cm', 6)">
          <img
            class="w-20px h-20px"
            src="~assets/img/tie.svg"
            alt="Expérience professionnelle">
        </div>
        <div class="timeline-panel">
          <div class="timeline-heading">
            <p class="flex text-sm mb-4">
              <span class="text-blue-dark">Avril 2013 - Juin 2013</span>
              <span class="text-grey-middle ml-auto">Professionnel</span>
            </p>
            <h4 class="timeline-title text-mid font-semibold mb-3">Chargé de communication interne</h4>
            <a
              class="inline-flex trans-all text-grey-dark flex flex-row items-center"
              href="https://creditmutuel.fr"
              target="_blank"
              rel="noopener noreferrer">
              <div class="w-20px h-16-66px mr-3 flex-no-shrink">
                <img
                  src="~assets/img/CM.svg"
                  class="w-full"
                  alt="logo Crédit Mutuel">
              </div>
              <p>
                Groupe Crédit Mutuel CM11
              </p>
            </a>
          </div>
          <div
            v-expand="badgeClicked == 'cm'"
            class="expand timeline-body text-xs bg-white origin-top-center leading-tight mb-6">
            <div class="mt-6">
              <p class="font-lato-medium text-sm mb-1">Contexte</p>
              <p>Au siège du Crédit Mutuel à Strasbourg, j'intègre l'équipe de la communication interne du Groupe</p>
            </div>
            <div class="mt-4"><span class="font-lato-medium text-sm">Missions</span></div>
            <ul class="mt-1">
              <li>Création de supports de communication (newsletter, infographie, journal interne...)</li>
              <li class="mt-1">Administration du site intranet</li>
              <li class="mt-1">Co-organisation d'un concours photo</li>
              <li class="mt-1">Contribution à l'organisation de l’Assemblée Générale annuelle (6 000 participants)</li>
            </ul>
          </div>
          <div
            class="expandable flex justify-end">
            <span
              class="inline-flex"
              @click="setBadge('cm', 6)">
              <button
                v-ripple
                class="pt-1/2 pb-1/2 rounded-sm
                trans-all w-50px bg-blue-light flex flex-no-shrink items-center justify-center truncate text-white ml-auto font-lato-medium shadow
                p-2 text-xs"
                type="button"
                @mouseover="scaleBadge('cm')"
                @mouseleave="reduceBadge('cm')">
                <span>{{ labelDetail[6] }}</span>
              </button>
            </span>
          </div>
        </div>
      </li>
      <li>
        <div
          id="dut"
          class="timeline-badge trans-all cursor-pointer"
          @click="setBadge('dut', 7)">
          <img
            class="w-20px h-20px"
            src="~assets/img/cap-black.svg"
            alt="Expérience scolaire">
        </div>
        <div class="timeline-panel">
          <div class="timeline-heading">
            <p class="flex text-sm mb-4">
              <span class="text-blue-dark">Sept. 2011 - Juin 2013</span>
              <span class="text-grey-middle ml-auto">Scolaire</span>
            </p>
            <h4 class="timeline-title font-semibold text-mid mb-3">DUT | Métiers du Multimédia et de l'Internet</h4>
            <a
              class="inline-flex trans-all text-grey-dark flex flex-row items-center"
              href="http://mmi.univ-smb.fr/site/"
              target="_blank"
              rel="noopener noreferrer">
              <div class="w-15px mr-3 flex-no-shrink">
                <img
                  class="w-full"
                  srcset= "~assets/img/dut-logo.png 1x, ~assets/img/dut-logo-2x.png 2x"
                  src="~assets/img/dut-logo.png"
                  alt="Logo IUT de Chambéry">
              </div>
              <p>
                IUT de Chambéry
              </p>
            </a>
          </div>
          <div
            v-expand="badgeClicked == 'dut'"
            class="expand timeline-body text-xs bg-white origin-top-center leading-tight mb-6">
            <div class="mt-6">
              <p class="font-lato-medium text-sm mb-1">Contexte</p>
              <p>Le DUT Métiers du Multimédia et de l'Internet au Bourget-du-Lac forme les étudiants aux pratiques de la communication, du développement web, du montage vidéo, de la conception graphique et de la gestion de projet.</p>
            </div>
            <p class="mt-4"><span class="font-lato-medium text-sm">Évènements marquants</span></p>
            <ul class="mt-1">
              <li>Major de promotion</li>
              <li class="mt-1">Spécialisation Communication</li>
              <li class="mt-1">Chef de projet d'une équipe de 11 étudiants avec 6 projets concrets (Planning familial, Mountain Riders, ITAC, ADSEA26, CRETE, Journée Portes Ouvertes IUT)</li>
            </ul>
          </div>
          <div
            class="expandable flex justify-end">
            <span
              class="inline-flex"
              @click="setBadge('dut', 7)">
              <button
                v-ripple
                class="pt-1/2 pb-1/2 rounded-sm
                trans-all w-50px bg-blue-light flex flex-no-shrink items-center justify-center truncate text-white ml-auto font-lato-medium shadow
                p-2 text-xs"
                type="button"
                @mouseover="scaleBadge('dut')"
                @mouseleave="reduceBadge('dut')">
                <span>{{ labelDetail[7] }}</span>
              </button>
            </span>
          </div>
        </div>
      </li>
      <li class="timeline-inverted">
        <div
          id="bac"
          class="timeline-badge trans-all cursor-pointer"
          @click="setBadge('bac', 8)">
          <img
            class="w-20px h-20px"
            src="~assets/img/cap-black.svg"
            alt="Expérience scolaire">
        </div>
        <div class="timeline-panel">
          <div class="timeline-heading">
            <p class="flex text-sm mb-4">
              <span class="text-blue-dark">Sept. 2008 - Juin 2011</span>
              <span class="text-grey-middle ml-auto">Scolaire</span>
            </p>
            <h4 class="timeline-title font-semibold text-mid mb-3">BAC | Sciences et Technologies du Management et de la Gestion</h4>
            <a
              class="inline-flex trans-all text-grey-dark flex flex-row items-center"
              href="http://marie-reynoard.elycee.rhonealpes.fr/"
              target="_blank"
              rel="noopener noreferrer">
              <p>
                Lycée Marie Reynoard
              </p>
            </a>
          </div>
          <div
            v-expand="badgeClicked == 'bac'"
            class="expand timeline-body text-xs bg-white origin-top-center leading-tight mb-6">
            <div class="mt-6">
              <p class="font-lato-medium text-sm mb-1">Contexte</p>
              <p>Le Lycée Marie Reynoard se situe à Villard-Bonnot</p>
            </div>
            <p class="mt-4"><span class="font-lato-medium text-sm">Évènements marquants</span></p>
            <ul class="mt-1">
              <li>Mention très bien au BAC</li>
              <li class="mt-1">Spécialisation Communication et Gestion des Ressources Humaines</li>
            </ul>
          </div>
          <div
            class="expandable flex justify-end">
            <div
              @click="setBadge('bac', 8)">
              <button
                v-ripple
                class="pt-1/2 pb-1/2 rounded-sm
                trans-all w-50px bg-blue-light hover:bg-blue-dark flex flex-no-shrink items-center justify-center truncate text-white ml-auto font-lato-medium shadow
                p-2 text-xs"
                type="button"
                @mouseover="scaleBadge('bac')"
                @mouseleave="reduceBadge('bac')">
                <span>{{ labelDetail[8] }}</span>
              </button>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      badgeClicked: null,
      labelDetail: ['Plus', 'Plus', 'Plus', 'Plus', 'Plus', 'Plus', 'Plus', 'Plus', 'Plus']
    }
  },
  methods: {
    scaleBadge: function(name) {
      if (process.browser) {
        var list = document.getElementsByClassName('timeline-badge')
        for (let item of list) {
          item.classList.remove('timeline-badge-hover')
        }
        document.getElementById(name).classList.add('timeline-badge-hover')
      }
    },
    reduceBadge: function(name) {
      if (process.browser && this.badgeClicked == null) {
        document.getElementById(name).classList.remove('timeline-badge-hover')
      }
    },
    setBadge: function(name, index) {
      if (process.browser) {
        if (this.badgeClicked == name) {
          this.badgeClicked = null
          this.labelDetail.forEach((value, index) => {
            this.labelDetail[index] = 'Plus'
          })
          this.labelDetail[index] = 'Plus'
          this.reduceBadge(name)
          return
        }
        this.badgeClicked = name
        this.labelDetail.forEach((value, index) => {
          this.labelDetail[index] = 'Plus'
        })
        this.labelDetail[index] = 'Moins'
        this.scaleBadge(name)
      }
    }
  }
}
</script>
