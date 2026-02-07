// FAQ Data - 30+ Questions organized by category
// FAQPage Schema markup compatible

export const faqCategories = [
  { id: 'processus', name: 'Processus & Délais', icon: 'Clock' },
  { id: 'prix', name: 'Prix & Devis', icon: 'Euro' },
  { id: 'aides', name: 'Aides Financières', icon: 'Wallet' },
  { id: 'garanties', name: 'Garanties & Assurances', icon: 'Shield' },
  { id: 'techniques', name: 'Matériaux & Techniques', icon: 'Wrench' },
  { id: 'entretien', name: 'Entretien & Durabilité', icon: 'Sparkles' },
]

export const faqQuestions = [
  // PROCESSUS & DÉLAIS (10 questions)
  {
    id: 1,
    category: 'processus',
    question: 'Comment se déroule un projet de ravalement de façade ?',
    answer: `Un projet de ravalement se déroule en plusieurs étapes clés :

1. **Premier contact et devis gratuit** : Nous nous déplaçons chez vous pour évaluer l'état de votre façade et comprendre vos besoins.

2. **Diagnostic technique** : Analyse approfondie des pathologies (fissures, humidité, mousse) et préconisation des traitements adaptés.

3. **Proposition détaillée** : Devis complet avec le détail des travaux, les matériaux utilisés et le planning prévisionnel.

4. **Préparation administrative** : Aide à la déclaration préalable de travaux si nécessaire.

5. **Réalisation des travaux** : Installation de l'échafaudage, préparation des supports, application des traitements et finitions.

6. **Réception et garantie** : Vérification finale avec vous et remise des documents de garantie décennale.`
  },
  {
    id: 2,
    category: 'processus',
    question: 'Combien de temps durent les travaux de ravalement ?',
    answer: `La durée des travaux dépend de plusieurs facteurs :

- **Maison individuelle standard (100-150 m²)** : 1 à 2 semaines
- **Grande maison ou villa** : 2 à 3 semaines
- **Ravalement avec ITE (isolation)** : 3 à 4 semaines
- **Immeuble collectif** : 4 à 8 semaines selon la taille

Ces délais incluent la pose et dépose de l'échafaudage. Les conditions météorologiques peuvent également influencer la durée (la pluie, le gel ou les fortes chaleurs peuvent interrompre certaines phases).`
  },
  {
    id: 3,
    category: 'processus',
    question: 'Dois-je faire une déclaration préalable pour un ravalement ?',
    answer: `Oui, dans la plupart des cas une **déclaration préalable de travaux** est obligatoire pour un ravalement de façade, même s'il s'agit d'une simple remise en peinture.

**Procédure :**
- Remplir le formulaire Cerfa n°13703*08
- Joindre les documents requis (plan de situation, photos, choix des couleurs)
- Déposer le dossier en mairie
- Délai d'instruction : 1 mois

**À noter :** En zone protégée (ABF, site classé), le délai peut être de 2 mois et l'avis de l'Architecte des Bâtiments de France est requis.

Nous vous accompagnons dans ces démarches administratives.`
  },
  {
    id: 4,
    category: 'processus',
    question: 'Peut-on rester dans la maison pendant les travaux ?',
    answer: `Oui, vous pouvez rester dans votre logement pendant toute la durée des travaux. Nous travaillons exclusivement sur l'extérieur de votre habitation.

**Quelques précautions à prévoir :**
- L'échafaudage peut temporairement occulter certaines fenêtres
- Nous pouvons être amenés à protéger des éléments extérieurs (terrasse, végétation)
- Un léger bruit peut être occasionné lors de certaines phases (nettoyage haute pression, ponçage)

Nous veillons à limiter au maximum les nuisances et à maintenir l'accès à votre domicile.`
  },
  {
    id: 5,
    category: 'processus',
    question: 'Quelle est la meilleure saison pour faire un ravalement ?',
    answer: `Les meilleures périodes pour réaliser un ravalement sont le **printemps** (avril-juin) et le **début d'automne** (septembre-octobre).

**Conditions idéales :**
- Température entre 10°C et 25°C
- Pas de pluie ni de gel
- Humidité modérée

**À éviter :**
- L'hiver (risque de gel qui empêche le séchage des enduits)
- Les périodes de canicule (séchage trop rapide, risque de fissures)
- Les périodes de pluie prolongée

Cependant, avec les bons produits et techniques, nous pouvons intervenir sur une grande partie de l'année.`
  },
  {
    id: 6,
    category: 'processus',
    question: 'Comment choisir la couleur de ma façade ?',
    answer: `Le choix de la couleur de votre façade doit prendre en compte plusieurs éléments :

**Contraintes réglementaires :**
- Consultez le PLU (Plan Local d'Urbanisme) de votre commune
- Certaines zones imposent des palettes de couleurs spécifiques
- En secteur protégé, l'ABF doit valider votre choix

**Conseils esthétiques :**
- Harmonisez avec les menuiseries, volets et toiture
- Les couleurs claires agrandissent visuellement et réfléchissent la chaleur
- Les couleurs foncées absorbent plus la chaleur
- Pensez à l'environnement (végétation, maisons voisines)

Nous vous proposons des nuanciers et des simulations pour vous aider dans votre choix.`
  },
  {
    id: 7,
    category: 'processus',
    question: 'Faut-il un permis de construire pour une isolation extérieure ?',
    answer: `Non, l'isolation thermique par l'extérieur (ITE) ne nécessite généralement pas de permis de construire, mais une **déclaration préalable de travaux** est obligatoire car elle modifie l'aspect extérieur du bâtiment.

**Attention aux cas particuliers :**
- Si l'ITE crée une surface de plancher supplémentaire > 20 m² : permis requis
- En zone protégée : accord de l'ABF nécessaire
- Si modification des ouvertures : procédure adaptée

L'ITE ajoute généralement 14 à 20 cm d'épaisseur aux murs, ce qui peut avoir un impact sur les limites de propriété.`
  },
  {
    id: 8,
    category: 'processus',
    question: 'Comment se passe la visite technique préalable ?',
    answer: `La visite technique est une étape essentielle et gratuite :

**Déroulement :**
1. Prise de rendez-vous à votre convenance
2. Inspection visuelle complète de toutes les façades
3. Identification des pathologies (fissures, décollements, mousse, humidité)
4. Mesures et relevés pour chiffrage précis
5. Discussion de vos attentes (couleur, finition, budget)
6. Photos pour constitution du dossier

**Durée :** environ 30 à 45 minutes

Suite à cette visite, nous vous adressons un devis détaillé sous 48 à 72 heures.`
  },
  {
    id: 9,
    category: 'processus',
    question: 'Que comprend la préparation du chantier ?',
    answer: `La préparation du chantier est une phase cruciale qui comprend :

**Protection :**
- Bâchage des sols, terrasses et végétaux
- Protection des menuiseries (fenêtres, portes)
- Sécurisation des accès

**Installation :**
- Montage de l'échafaudage aux normes de sécurité
- Mise en place des filets de protection
- Installation du matériel et stockage des produits

**Préparation des supports :**
- Nettoyage haute pression ou chimique
- Traitement anti-mousse et fongicide
- Rebouchage des fissures
- Ponçage si nécessaire

Cette phase représente environ 20% de la durée totale du chantier.`
  },
  {
    id: 10,
    category: 'processus',
    question: 'Intervenez-vous sur les bâtiments en copropriété ?',
    answer: `Oui, nous intervenons régulièrement sur les immeubles en copropriété. La procédure est cependant plus encadrée :

**Étapes spécifiques :**
1. Vote en Assemblée Générale des copropriétaires (majorité article 25)
2. Obtention de plusieurs devis comparatifs
3. Désignation d'un maître d'œuvre (syndic ou architecte)
4. Déclaration préalable au nom de la copropriété

**Notre accompagnement :**
- Présentation du projet en AG si souhaité
- Devis détaillé par bâtiment et par lot
- Planning adapté aux contraintes de l'immeuble
- Coordination avec le syndic

Nous avons l'expérience des chantiers collectifs et de leurs spécificités.`
  },

  // PRIX & DEVIS (8 questions)
  {
    id: 11,
    category: 'prix',
    question: 'Quel est le prix moyen d\'un ravalement de façade ?',
    answer: `Le prix d'un ravalement de façade varie selon plusieurs critères :

**Fourchettes de prix au m² :**
- Nettoyage simple + peinture : 30 à 50 €/m²
- Ravalement complet avec enduit : 50 à 90 €/m²
- Ravalement avec réparations importantes : 80 à 140 €/m²
- Ravalement + ITE (isolation) : 120 à 200 €/m²

**Facteurs influençant le prix :**
- Surface totale des façades
- État initial et travaux de réparation nécessaires
- Type de finition choisi
- Accessibilité du chantier
- Région et coût de la main-d'œuvre

Pour une maison de 100 m² de façade, comptez entre 5 000 € et 15 000 € selon les travaux.`
  },
  {
    id: 12,
    category: 'prix',
    question: 'Le devis est-il vraiment gratuit et sans engagement ?',
    answer: `Oui, notre devis est **100% gratuit et sans engagement**.

**Ce que comprend notre devis gratuit :**
- Déplacement et visite technique sur site
- Diagnostic complet de l'état de vos façades
- Préconisations techniques personnalisées
- Chiffrage détaillé poste par poste
- Planning prévisionnel des travaux
- Informations sur les aides financières possibles

Vous n'avez aucune obligation de donner suite. Nous estimons qu'un client bien informé fait les meilleurs choix.

Le devis vous est remis sous 48 à 72 heures après notre visite.`
  },
  {
    id: 13,
    category: 'prix',
    question: 'Proposez-vous des facilités de paiement ?',
    answer: `Oui, nous proposons plusieurs solutions pour faciliter le financement de vos travaux :

**Options de paiement :**
- Acompte à la commande (30%)
- Paiement échelonné selon l'avancement
- Solde à la réception des travaux

**Financement externe :**
- Éco-PTZ (prêt à taux zéro pour travaux énergétiques)
- Prêt travaux classique
- Aides cumulables (MaPrimeRénov', CEE)

Nous vous fournissons tous les documents nécessaires pour vos demandes de financement ou d'aides.

Contactez-nous pour discuter de la solution la plus adaptée à votre situation.`
  },
  {
    id: 14,
    category: 'prix',
    question: 'Pourquoi les prix varient-ils autant entre les devis ?',
    answer: `Les écarts de prix entre devis s'expliquent par plusieurs facteurs :

**Qualité des matériaux :**
- Enduits d'entrée de gamme vs premium
- Épaisseur et qualité de l'isolation
- Durabilité des finitions

**Niveau de prestation :**
- Préparation des supports plus ou moins approfondie
- Traitement des points singuliers
- Finitions soignées vs basiques

**Garanties et assurances :**
- Garantie décennale effective
- Assurance responsabilité civile
- SAV et suivi post-travaux

**Conseil :** Comparez les devis ligne par ligne et vérifiez toujours les qualifications (Qualibat) et assurances de l'entreprise. Le moins cher n'est pas toujours le plus économique à long terme.`
  },
  {
    id: 15,
    category: 'prix',
    question: 'Quel est le coût d\'une isolation extérieure (ITE) ?',
    answer: `L'isolation thermique par l'extérieur représente un investissement plus important mais très rentable :

**Prix au m² selon la technique :**
- ITE sous enduit (polystyrène) : 120 à 180 €/m²
- ITE sous enduit (laine de roche) : 150 à 200 €/m²
- ITE sous bardage : 180 à 250 €/m²
- ITE avec finition haut de gamme : 200 à 280 €/m²

**Pour une maison de 100 m² de murs :**
- Budget moyen : 15 000 à 25 000 €
- Après aides : 8 000 à 18 000 €

**Retour sur investissement :**
- Économies de chauffage : 25 à 40%
- Amortissement : 8 à 15 ans
- Plus-value immobilière : 5 à 15%`
  },
  {
    id: 16,
    category: 'prix',
    question: 'L\'échafaudage est-il inclus dans le devis ?',
    answer: `Oui, l'échafaudage est **toujours inclus** dans nos devis. C'est un poste important qu'il faut prendre en compte :

**Ce qui est compris :**
- Location de l'échafaudage certifié
- Transport et montage
- Démontage et enlèvement
- Filets de protection
- Accès sécurisés

**Coût indicatif de l'échafaudage :**
- Représente environ 15 à 25% du coût total
- Soit 20 à 40 €/m² de façade
- Variable selon la hauteur et la complexité

Nous utilisons exclusivement des échafaudages aux normes, montés par des équipes formées.`
  },
  {
    id: 17,
    category: 'prix',
    question: 'Y a-t-il des frais supplémentaires possibles ?',
    answer: `Notre devis est établi pour être le plus complet possible, mais certains travaux peuvent générer des suppléments :

**Travaux supplémentaires prévisibles :**
- Réparations structurelles découvertes en cours de chantier
- Traitement de problèmes d'humidité non visibles
- Remplacement de descentes EP ou éléments de zinguerie

**Comment nous procédons :**
- Tout supplément fait l'objet d'un avenant écrit
- Vous êtes consulté avant toute intervention non prévue
- Aucun travail supplémentaire sans votre accord

**Notre engagement :** Transparence totale et respect du budget initial dans la mesure du possible.`
  },
  {
    id: 18,
    category: 'prix',
    question: 'Comment comparer efficacement plusieurs devis ?',
    answer: `Pour comparer des devis de ravalement, vérifiez ces points essentiels :

**Éléments à comparer :**
1. Surface traitée identique (m² de façade)
2. Nature des travaux (préparation, réparations)
3. Type et marque des produits utilisés
4. Nombre de couches appliquées
5. Traitement des points singuliers
6. Délais d'exécution

**Documents à demander :**
- Attestation de garantie décennale en cours
- Attestation d'assurance RC Pro
- Références de chantiers similaires
- Qualification Qualibat (si applicable)

**Attention aux devis trop bas :** Ils peuvent cacher des impasses sur la préparation ou l'utilisation de produits bas de gamme.`
  },

  // AIDES FINANCIÈRES (6 questions)
  {
    id: 19,
    category: 'aides',
    question: 'Quelles aides financières pour un ravalement avec isolation ?',
    answer: `Plusieurs aides sont disponibles pour les travaux d'isolation :

**MaPrimeRénov' :**
- Jusqu'à 75 €/m² selon vos revenus
- Pour l'ITE uniquement
- Cumulable avec d'autres aides

**Certificats d'Économies d'Énergie (CEE) :**
- Prime énergie des fournisseurs
- 10 à 25 €/m² selon la zone
- Cumulable avec MaPrimeRénov'

**Éco-PTZ :**
- Prêt à taux zéro jusqu'à 50 000 €
- Remboursement sur 20 ans max
- Sans condition de revenus

**TVA réduite :**
- TVA à 5,5% au lieu de 20%
- Économie automatique

**Aides locales :**
- Région Pays de la Loire
- Département Loire-Atlantique
- Communauté de communes

Nous vous aidons à identifier et obtenir toutes les aides auxquelles vous avez droit.`
  },
  {
    id: 20,
    category: 'aides',
    question: 'Suis-je éligible à MaPrimeRénov\' ?',
    answer: `MaPrimeRénov' est accessible à tous les propriétaires, sous conditions :

**Conditions d'éligibilité :**
- Être propriétaire occupant ou bailleur
- Logement construit depuis plus de 15 ans
- Logement utilisé comme résidence principale
- Travaux réalisés par un artisan RGE

**Montant selon vos revenus (ITE) :**
- Revenus très modestes (Bleu) : 75 €/m²
- Revenus modestes (Jaune) : 60 €/m²
- Revenus intermédiaires (Violet) : 40 €/m²
- Revenus supérieurs (Rose) : 15 €/m²

**Important :** La demande doit être faite AVANT le début des travaux sur le site maprimerenov.gouv.fr

Nous vous accompagnons dans les démarches administratives.`
  },
  {
    id: 21,
    category: 'aides',
    question: 'Qu\'est-ce que la prime CEE et comment l\'obtenir ?',
    answer: `La prime CEE (Certificats d'Économies d'Énergie) est une aide versée par les fournisseurs d'énergie :

**Principe :**
- Les fournisseurs d'énergie doivent financer des travaux d'économie d'énergie
- Ils versent des primes aux particuliers qui réalisent ces travaux

**Montant pour l'ITE :**
- Entre 10 et 25 €/m² selon votre zone géographique
- Bonus si revenus modestes
- Variable selon le fournisseur

**Comment l'obtenir :**
1. Demander des devis à plusieurs fournisseurs (TotalEnergies, EDF, Engie...)
2. S'inscrire AVANT de signer le devis travaux
3. Faire réaliser les travaux par un artisan RGE
4. Envoyer les justificatifs après travaux
5. Recevoir la prime par virement ou chèque

**Attention :** Ne pas signer le devis travaux avant d'avoir fait votre demande CEE !`
  },
  {
    id: 22,
    category: 'aides',
    question: 'Peut-on cumuler plusieurs aides ?',
    answer: `Oui, la plupart des aides sont cumulables :

**Cumuls possibles :**
- MaPrimeRénov' + CEE ✓
- MaPrimeRénov' + Éco-PTZ ✓
- MaPrimeRénov' + Aides locales ✓
- CEE + TVA 5,5% ✓

**Exemple concret (ITE 100 m² - revenus modestes) :**
- Coût travaux : 18 000 € TTC
- MaPrimeRénov' : - 6 000 €
- Prime CEE : - 1 500 €
- TVA 5,5% au lieu de 20% : - 2 200 €
- **Reste à charge : 8 300 €**

**Plafonnement :**
Le cumul des aides ne peut pas dépasser 90% du montant TTC des travaux (100% pour les ménages très modestes).`
  },
  {
    id: 23,
    category: 'aides',
    question: 'L\'Éco-PTZ, c\'est quoi exactement ?',
    answer: `L'Éco-PTZ (Éco-Prêt à Taux Zéro) est un prêt bancaire sans intérêts pour financer vos travaux de rénovation énergétique :

**Caractéristiques :**
- Taux d'intérêt : 0%
- Montant max : 50 000 € (rénovation globale)
- Durée : jusqu'à 20 ans
- Sans conditions de revenus

**Travaux éligibles :**
- Isolation thermique par l'extérieur (ITE)
- Isolation des toitures
- Remplacement des fenêtres
- Changement de système de chauffage

**Comment l'obtenir :**
1. Faire réaliser les travaux par un artisan RGE
2. Demander le prêt à votre banque avec le devis
3. La banque verse les fonds directement
4. Rembourser sans intérêts

L'Éco-PTZ peut financer le reste à charge après les autres aides.`
  },
  {
    id: 24,
    category: 'aides',
    question: 'Dois-je avancer l\'argent des aides ?',
    answer: `La situation varie selon les aides :

**MaPrimeRénov' :**
- Vous avancez généralement les travaux
- La prime est versée après travaux (sous 15 jours)
- Option "avance" possible pour revenus très modestes

**Prime CEE :**
- Versée après réalisation des travaux
- Délai : 1 à 3 mois selon le fournisseur

**TVA 5,5% :**
- Réduction immédiate sur la facture
- Pas d'avance nécessaire

**Solutions pour limiter l'avance :**
- Échelonner les paiements selon l'avancement
- Utiliser l'Éco-PTZ comme trésorerie
- Demander l'avance MaPrimeRénov' (si éligible)

Nous adaptons nos modalités de paiement pour faciliter la gestion de votre trésorerie.`
  },

  // GARANTIES & ASSURANCES (4 questions)
  {
    id: 25,
    category: 'garanties',
    question: 'Qu\'est-ce que la garantie décennale ?',
    answer: `La garantie décennale est une assurance obligatoire qui protège les propriétaires pendant 10 ans :

**Couverture :**
- Dommages compromettant la solidité de l'ouvrage
- Défauts rendant l'ouvrage impropre à sa destination
- Malfaçons affectant un élément d'équipement indissociable

**Exemples couverts :**
- Infiltrations d'eau dues à un défaut d'étanchéité
- Décollements importants d'enduit
- Fissures structurelles
- Défauts d'isolation thermique

**Point de départ :**
- À la réception des travaux
- Procès-verbal de réception signé

**Notre engagement :**
- Garantie décennale active et vérifiable
- Attestation remise avec le devis
- Intervention rapide en cas de sinistre`
  },
  {
    id: 26,
    category: 'garanties',
    question: 'Que couvre la garantie de parfait achèvement ?',
    answer: `La garantie de parfait achèvement dure 1 an après la réception des travaux :

**Couverture :**
- Tous les désordres signalés à la réception (réserves)
- Tous les défauts apparaissant la première année
- Quels que soient leur importance ou leur cause

**Exemples :**
- Micro-fissures esthétiques
- Défauts de teinte ou de finition
- Petits décollements localisés
- Problèmes d'évacuation d'eau

**Procédure :**
1. Signaler le désordre par courrier recommandé
2. L'artisan doit intervenir dans un délai raisonnable
3. En cas de défaillance, recours possible

**Notre pratique :**
Nous restons à votre disposition bien au-delà de cette période pour tout conseil ou intervention.`
  },
  {
    id: 27,
    category: 'garanties',
    question: 'Comment vérifier les assurances d\'un façadier ?',
    answer: `Avant de signer un devis, demandez systématiquement :

**Documents obligatoires :**
1. **Attestation de garantie décennale**
   - En cours de validité
   - Mentionnant l'activité "façade/ravalement"
   - Avec le nom de l'entreprise exact

2. **Attestation RC Pro (Responsabilité Civile)**
   - Couvre les dommages pendant le chantier
   - Aux biens et aux personnes

**Vérifications à faire :**
- Date de validité des attestations
- Montants de couverture suffisants
- Cohérence avec le numéro SIRET
- Contacter l'assureur en cas de doute

**Notre transparence :**
Nous fournissons spontanément tous ces documents avec chaque devis. Nos attestations sont vérifiables auprès de notre assureur.`
  },
  {
    id: 28,
    category: 'garanties',
    question: 'Que faire en cas de malfaçon après travaux ?',
    answer: `En cas de malfaçon, voici la procédure à suivre :

**Pendant la première année (garantie parfait achèvement) :**
1. Constater le désordre (photos, mesures)
2. Contacter l'artisan par téléphone
3. Confirmer par courrier recommandé AR
4. Fixer un délai de réparation raisonnable

**Entre 2 et 10 ans (garantie décennale) :**
1. Vérifier que le dommage relève de la décennale
2. Déclarer le sinistre à votre assurance habitation
3. Votre assureur contacte l'assurance décennale
4. Expertise et réparation

**Si l'artisan ne répond pas :**
- Mise en demeure par huissier
- Recours à un expert indépendant
- Médiation ou tribunal si nécessaire

**Notre engagement :**
En cas de problème, nous intervenons rapidement. La satisfaction client est notre priorité.`
  },

  // MATÉRIAUX & TECHNIQUES (6 questions)
  {
    id: 29,
    category: 'techniques',
    question: 'Quelle différence entre enduit chaux et enduit ciment ?',
    answer: `Ces deux types d'enduit ont des caractéristiques très différentes :

**Enduit à la chaux :**
- ✓ Perspirant (laisse respirer le mur)
- ✓ Souple, absorbe les microfissures
- ✓ Régule l'humidité naturellement
- ✓ Aspect traditionnel authentique
- ✓ Écologique et naturel
- ✗ Prix plus élevé
- ✗ Temps de séchage plus long

**Enduit ciment :**
- ✓ Très résistant mécaniquement
- ✓ Prix plus abordable
- ✓ Séchage rapide
- ✗ Rigide (risque de fissures)
- ✗ Imperméable à la vapeur d'eau
- ✗ Peut piéger l'humidité

**Recommandation :**
- Maisons anciennes (avant 1948) : chaux obligatoire
- Constructions modernes : ciment ou mixte possible
- Nous analysons votre support pour préconiser le meilleur choix.`
  },
  {
    id: 30,
    category: 'techniques',
    question: 'Quel isolant choisir pour une ITE ?',
    answer: `Le choix de l'isolant dépend de plusieurs critères :

**Polystyrène expansé (PSE) :**
- Prix : €€ (le plus économique)
- Performance : λ = 0.032 à 0.038
- Avantages : léger, facile à poser
- Inconvénients : peu écologique, inflammable

**Laine de roche :**
- Prix : €€€
- Performance : λ = 0.035 à 0.040
- Avantages : incombustible, bonne acoustique
- Inconvénients : plus lourd, sensible à l'eau

**Fibre de bois :**
- Prix : €€€€
- Performance : λ = 0.038 à 0.042
- Avantages : écologique, excellent confort d'été
- Inconvénients : prix élevé, épaisseur plus importante

**Notre conseil :**
Pour un rapport qualité/prix optimal, nous recommandons souvent la laine de roche. Pour une approche écologique, la fibre de bois est idéale.`
  },
  {
    id: 31,
    category: 'techniques',
    question: 'Comment traiter les fissures sur une façade ?',
    answer: `Le traitement des fissures dépend de leur nature :

**Microfissures (< 0.2 mm) :**
- Généralement superficielles
- Traitement par imperméabilisant souple
- Ou enduit de finition élastique

**Fissures fines (0.2 à 2 mm) :**
- Ouverture en V au grattoir
- Garnissage au mastic acrylique
- Pose d'un calicot armé
- Enduit de finition

**Fissures larges (> 2 mm) :**
- Diagnostic structurel recommandé
- Injection de résine si nécessaire
- Renfort par agrafage métallique
- Reprise en sous-œuvre possible

**Fissures actives (qui évoluent) :**
- Surveillance avec jauges
- Traitement de la cause avant réparation
- Solutions de pontage souples

Nous réalisons toujours un diagnostic avant intervention pour traiter la cause et pas seulement le symptôme.`
  },
  {
    id: 32,
    category: 'techniques',
    question: 'Qu\'est-ce qu\'un enduit monocouche ?',
    answer: `L'enduit monocouche est une solution moderne et efficace :

**Principe :**
- Un seul produit remplace corps d'enduit + finition
- Application en une ou deux passes
- Finition intégrée (gratté, ribbé, taloché...)

**Avantages :**
- Rapidité de mise en œuvre
- Coût maîtrisé
- Large choix de teintes
- Garantie fabricant
- Bonne durabilité (15-20 ans)

**Finitions possibles :**
- Gratté fin ou gros grain
- Ribbé horizontal ou vertical
- Taloché lisse
- Écrasé

**Applications :**
- Constructions neuves
- Rénovation sur support sain
- Pas adapté aux murs anciens en pierre

Nous utilisons des produits de marques reconnues (Weber, ParexLanko, PRB) pour garantir la qualité.`
  },
  {
    id: 33,
    category: 'techniques',
    question: 'Pourquoi traiter la mousse et les algues avant ravalement ?',
    answer: `Le traitement des végétaux est une étape cruciale :

**Risques si non traité :**
- La mousse retient l'humidité contre le mur
- Les racines s'infiltrent dans les micro-fissures
- Dégradation accélérée de l'enduit
- Le nouvel enduit n'adhère pas correctement
- Réapparition rapide des végétaux

**Notre protocole :**
1. Application d'un produit fongicide/algicide
2. Temps de pause (24 à 48h)
3. Nettoyage haute pression adapté
4. Rinçage abondant
5. Séchage complet du support
6. Traitement préventif avant finition

**Produits utilisés :**
- Biodégradables quand possible
- Homologués pour usage extérieur
- Efficacité longue durée (action rémanente)

Un traitement bien fait garantit une façade propre pour de nombreuses années.`
  },
  {
    id: 34,
    category: 'techniques',
    question: 'ITE sous enduit ou sous bardage : que choisir ?',
    answer: `Les deux techniques ont leurs avantages selon votre projet :

**ITE sous enduit :**
- Aspect traditionnel (crépi, enduit)
- Épaisseur totale : 14-18 cm
- Prix : 120-180 €/m²
- Entretien : ravalement tous les 15-20 ans
- Idéal pour : maisons traditionnelles

**ITE sous bardage :**
- Aspect contemporain (bois, composite, métal)
- Épaisseur totale : 16-25 cm
- Prix : 180-280 €/m²
- Entretien : selon matériau (lasure bois)
- Idéal pour : rénovation globale, modernisation

**Critères de choix :**
- Réglementation locale (PLU, ABF)
- Style architectural souhaité
- Budget disponible
- Contraintes techniques (débords de toit)

Nous vous conseillons la solution la plus adaptée à votre situation.`
  },

  // ENTRETIEN & DURABILITÉ (6 questions)
  {
    id: 35,
    category: 'entretien',
    question: 'Quelle est la durée de vie d\'un ravalement ?',
    answer: `La durée de vie d'un ravalement dépend de plusieurs facteurs :

**Durabilité moyenne par type de finition :**
- Peinture façade : 8 à 12 ans
- Enduit monocouche : 15 à 20 ans
- Enduit traditionnel chaux : 20 à 30 ans
- Enduit hydraulique : 15 à 25 ans

**Facteurs influençant la durée :**
- Orientation (nord plus exposé)
- Environnement (arbres, pollution)
- Qualité des produits utilisés
- Qualité de la mise en œuvre
- Entretien régulier

**Obligation légale :**
À noter que les communes peuvent imposer un ravalement tous les 10 ans (dans certaines villes comme Paris).

Avec un entretien adapté, vous pouvez significativement prolonger la durée de vie de votre ravalement.`
  },
  {
    id: 36,
    category: 'entretien',
    question: 'Comment entretenir ma façade après ravalement ?',
    answer: `Un entretien régulier prolonge la durée de vie de votre façade :

**Entretien annuel recommandé :**
- Inspection visuelle au printemps
- Nettoyage des gouttières et descentes
- Taille des végétaux proches de la façade
- Vérification des joints de fenêtres

**Tous les 2-3 ans :**
- Nettoyage doux (eau + brosse souple)
- Traitement anti-mousse préventif si nécessaire
- Retouche des micro-fissures

**À éviter :**
- Nettoyeur haute pression trop puissant
- Produits acides ou agressifs
- Laisser la végétation au contact
- Ignorer les petites fissures

**Signes d'alerte :**
- Apparition de mousse verte
- Écaillage de la peinture
- Fissures qui s'agrandissent
- Traces d'humidité intérieure

N'hésitez pas à nous consulter pour un diagnostic gratuit.`
  },
  {
    id: 37,
    category: 'entretien',
    question: 'Peut-on nettoyer soi-même sa façade ?',
    answer: `Oui, un nettoyage léger peut être fait par vos soins :

**Ce que vous pouvez faire :**
- Rinçage au jet d'eau classique
- Brossage doux des zones accessibles
- Application de produit anti-mousse (en bas du mur)
- Nettoyage des descentes d'eau

**Ce qui nécessite un professionnel :**
- Travaux en hauteur (> 2 mètres)
- Nettoyage haute pression
- Traitement chimique (démoussage, décapage)
- Réparation de fissures

**Précautions :**
- Ne pas utiliser de Karcher trop puissant (140 bars max)
- Garder une distance minimum (50 cm)
- Ne pas insister sur les joints
- Protéger les menuiseries

Un nettoyage trop agressif peut endommager l'enduit et réduire sa durée de vie.`
  },
  {
    id: 38,
    category: 'entretien',
    question: 'Comment éviter le retour de la mousse ?',
    answer: `La mousse revient naturellement, mais on peut limiter sa prolifération :

**Facteurs favorisant la mousse :**
- Orientation nord (moins de soleil)
- Proximité d'arbres et végétation
- Humidité stagnante
- Absence de traitement hydrofuge

**Solutions préventives :**
1. **Traitement hydrofuge :** Crée une barrière imperméable
2. **Produit fongicide rémanent :** Action prolongée 3-5 ans
3. **Améliorer le drainage :** Éviter l'eau stagnante en pied de mur
4. **Élaguer les végétaux :** Garder la façade ensoleillée
5. **Ventilation :** Éviter les haies trop proches

**Entretien régulier :**
- Traitement préventif tous les 3-5 ans
- Nettoyage dès apparition de traces vertes
- Ne pas laisser s'installer

Nous proposons des contrats d'entretien pour garder votre façade impeccable.`
  },
  {
    id: 39,
    category: 'entretien',
    question: 'Quand faut-il refaire l\'enduit de sa façade ?',
    answer: `Plusieurs signes indiquent qu'il est temps de refaire l'enduit :

**Signes visuels :**
- Enduit qui sonne creux au toucher
- Décollements ou cloques
- Fissures multiples (faïençage)
- Effritement, enduit qui "farine"
- Taches d'humidité persistantes

**Signes structurels :**
- Infiltrations d'eau à l'intérieur
- Moisissures sur les murs intérieurs
- Fissures traversantes
- Désolidarisation du support

**Quand peut-on se contenter d'une rénovation :**
- Salissures superficielles
- Quelques fissures isolées
- Couleur passée mais enduit sain

**Notre diagnostic :**
Nous évaluons l'état réel de votre enduit par sondage et vous conseillons la solution la plus adaptée (ravalement léger ou reprise complète).`
  },
  {
    id: 40,
    category: 'entretien',
    question: 'Les travaux de façade peuvent-ils améliorer l\'étanchéité ?',
    answer: `Oui, un ravalement bien réalisé améliore significativement l'étanchéité :

**Traitements imperméabilisants :**
- Hydrofuge de surface : crée une barrière invisible
- Imperméabilisant souple : comble les microfissures
- Enduit d'imperméabilisation (I1 à I4)

**Classification des enduits :**
- I1 : Faiblement imperméable (usage intérieur)
- I2 : Moyennement imperméable
- I3 : Imperméable (recommandé)
- I4 : Très imperméable (zones très exposées)

**Autres améliorations :**
- Traitement des fissures
- Reprise des joints de fenêtres
- Pose de gouttes d'eau (larmiers)
- Protection des points singuliers

**Impact sur les problèmes d'humidité :**
Un bon ravalement peut résoudre les problèmes d'humidité venant de l'extérieur. Attention toutefois aux remontées capillaires qui nécessitent un traitement spécifique.`
  },
]

// Utility functions
export const getFAQByCategory = (categoryId) => {
  return faqQuestions.filter(q => q.category === categoryId)
}

export const searchFAQ = (query) => {
  const lowerQuery = query.toLowerCase()
  return faqQuestions.filter(q =>
    q.question.toLowerCase().includes(lowerQuery) ||
    q.answer.toLowerCase().includes(lowerQuery)
  )
}

export const getAllFAQ = () => faqQuestions

export const getFAQById = (id) => {
  return faqQuestions.find(q => q.id === id)
}
