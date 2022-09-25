/* eslint-disable no-dupe-keys */
/*
 * projects.js - shared mixin of all projects
 * Copyright (C) 2019 kevin olson <acidjazz@gmail.com>
 *
 * Distributed under terms of the APACHE license.
 */
export default {
  data () {
    return {
      projects: [
        {
          url: 'penthouse-yangon',
          folder: 'penthouse-yangon',
          thumb: 'WEER_344x290_Penthouse.png',
          order: 1,
          location: 'YANGON',
          hover: 'PENTHOUSE',
          title: 'PENTHOUSE (Yangon)',
          copy: "This penthouse project, located in North Dagon Township, is created with the aim of providing a 'safe space', an escape from the tediousness and stresses of conventional lifestyle. The design approach is to accomodate a compact, simple and minimalistic space within confined site with limitations.",
          hero: {
            file: 'Penthouse_Yangon_1216x800px_1.png',
            width: 1216,
            height: 800
          },
          gallery: {
            // 'CatherineKwongDesign_Hawaii_1176x774px_1.jpg': '',
            'Penthouse_Yangon_1920x1080px_2.jpg': 'is-full',
            'Penthouse_Yangon_1920x1080px_3.jpg': 'is-full',
            'Penthouse_Yangon_1920x1080px_4.jpg': 'is-full',
            'Penthouse_Yangon_1920x1080px_5.jpg': 'is-full',
            'Penthouse_Yangon_1920x1080px_6.jpg': 'is-full'
          }
        },
        {
          url: 'elephant-museum',
          folder: 'elephant-museum',
          thumb: 'WEER_Elephant-Museum.jpg',
          order: 2,
          location: 'YANGON',
          hover: 'Elephant Museum-2019',
          title: 'Elephant Museum',
          copy: "This penthouse project, located in North Dagon Township, is created with the aim of providing a 'safe space', an escape from the tediousness and stresses of conventional lifestyle. The design approach is to accomodate a compact, simple and minimalistic space within confined site with limitations.",
          hero: {
            file: 'Elephant_Museum_2048x1365.jpg',
            width: 1216,
            height: 800
          },
          gallery: {
            // 'CatherineKwongDesign_Hawaii_1176x774px_1.jpg': '',
            'Elephant_Museum_1080x1080_1.jpg': 'is-full',
            'Elephant_Museum_1080x1080_2.jpg': 'is-full',
            'Elephant_Museum_1080x1080_3.jpg': 'is-full',
            'Elephant_Museum_1080x1080_4.jpg': 'is-full',
            'Elephant_Museum_1080x1080_5.jpg': 'is-full',
            'Elephant_Museum_392x543.jpg': 'is-right',
            'Elephant_Museum_392x543_1.jpg': 'is-left',
            'Elephant_Museum_392x543_2.jpg': 'is-right',
            'Elephant_Museum_558x345.jpg': 'is-full',
            'Elephant_Museum_558x345_1.jpg': 'is-full'
          }
        },
        {
          url: 'pacificheightscontemporary',
          folder: 'parbr',
          thumb: 'CKD_344x290_PacificHeightsContemporary.jpg',
          order: 3,
          location: 'SAN FRANCISCO, CA',
          title: 'PACIFIC HEIGHTS CONTEMPORARY',
          hover: 'pacific heights',
          copy: "With a swath of sky and span of the San Francisco Bay as a backdrop, this architectural gem by John Maniscalco Architecture called for subtle layers and clean lines.  A parchment leather cabinet houses the clients' antique china collection, and a handblown glass chandelier floats above a dining table made for big family dinners - proof that contemporary architecture can feel comfortable and inviting without sacrificing an ounce of style.",
          hero: {
            file: 'CatherineKwongDesign_PacificHeightsContemporary_1216x800px_1.jpg',
            width: 1216,
            height: 800
          },
          gallery: {
            'CatherineKwongDesign_PacificHeightsContemporary_752x555px_2.jpg': 'is-clear is-left',
            'CatherineKwongDesign_PacificHeightsContemporary_364x555px_3.jpg': 'is-right',
            'CatherineKwongDesign_PacificHeightsContemporary_558x837px_4.jpg': 'is-clear is-left',
            'CatherineKwongDesign_PacificHeightsContemporary_558x837px_5.jpg': 'is-right',
            'CatherineKwongDesign_PacificHeightsContemporary_773x524px_6.jpg': 'is-clear is-left',
            'CatherineKwongDesign_PacificHeightsContemporary_343x524px_7.jpg': 'is-right',
            'CatherineKwongDesign_PacificHeightsContemporary_372x550px_8.jpg': 'is-clear is-left',
            'CatherineKwongDesign_PacificHeightsContemporary_744x550px_9.jpg': 'is-right',
            'CatherineKwongDesign_PacificHeightsContemporary_558x800px_10.jpg': 'is-clear is-left',
            'CatherineKwongDesign_PacificHeightsContemporary_558x370px_11.jpg': 'is-right',
            'CatherineKwongDesign_PacificHeightsContemporary_558x370px_12.jpg': 'is-right is-double',

            'CatherineKwongDesign_PacificHeightsContemporary_1216x772px_13.jpg': 'is-clear is-full',
            'CatherineKwongDesign_PacificHeightsContemporary_558x718px_14.jpg': 'is-clear is-left',
            'CatherineKwongDesign_PacificHeightsContemporary_558x718px_15.jpg': 'is-right'
          }
        }, {
          url: 'brown',
          folder: 'brown',
          thumb: 'CKD_344x290_BrownEstate.jpg',
          order: 4,
          location: 'NAPA, CA',
          hover: 'DOWNTOWN NAPA',
          title: 'TOWN AND COUNTRY',
          copy: "When the team from Brown Estate, one of Napa Valley's finest family wineries, was looking for a space to showcase their award-winning zinfandels, they didn't expect to find it in the middle of Downtown Napa.  But they fell in love-at-first-sight with an expansive industrial space, tucked away on the second floor of the old Napa Valley Register Building.  Exposed brick and blackened steel meet Italian marble and fluted glass, to create an atmosphere of understated glamour.  The result is a tasting room for a new generation: one where music plays, people laugh, and wine is happily shared.",
          hero: {
            file: 'CatherineKwongDesign_BrownEstate_1216x800px_1.jpg',
            width: 1216,
            height: 800
          },
          gallery: {

            'CatherineKwongDesign_BrownEstate_361x550px_2.jpg': 'is-clear is-left',
            'CatherineKwongDesign_BrownEstate_755x550px_3.jpg': 'is-right',

            'CatherineKwongDesign_BrownEstate_657x458px_4.jpg': 'is-clear is-left',
            'CatherineKwongDesign_BrownEstate_458x458px_5.jpg': 'is-right',

            'CatherineKwongDesign_BrownEstate_558x794px_6.jpg': 'is-left',
            'CatherineKwongDesign_BrownEstate_558x367_7.jpg': 'is-right',
            'CatherineKwongDesign_BrownEstate_558x367px_8.jpg': 'is-right',

            'CatherineKwongDesign_BrownEstate_558x815px_9.jpg ': 'is-clear is-left',
            'CatherineKwongDesign_BrownEstate_558x815px_10.jpg': 'is-right is-double',
            'CatherineKwongDesign_BrownEstate_1216x805px_11.jpg': 'is-full'

          }
        }, {
          url: 'woodside',
          folder: 'resma',
          thumb: 'CKD_344x290_Woodside.jpg',
          location: 'WOODSIDE, CA',
          order: 5,
          hover: 'woodside',
          title: 'MODERN MEETS TRADITIONAL',
          copy: "What happens when a big-city family with a serious modern art collection moves to the country?  Well, not the country, exactly, but this traditional Tudor-style home is nestled among the hills of CatherineKwongDesign_Woodside, where you're as likely to see a horse on the road as you are a Tesla.  We used a sophisticated materials palette to update the house for our urbane family, bringing a strong point of view to this classic home.",
          hero: {
            file: 'CatherineKwongDesign_Woodside_2432x1600.jpg',
            width: 1216,
            height: 800
          },
          gallery: {
            'CatherineKwongDesign_Woodside_558x754px_2.jpg': 'is-clear is-left',
            'CatherineKwongDesign_Woodside_558x347px_3.jpg': 'is-right is-right',
            'CatherineKwongDesign_Woodside_558x347px_4.jpg': 'is-right',
            // 'CatherineKwongDesign_Woodside_372x550px_5.jpg': 'is-clear is-left',
            // 'CatherineKwongDesign_Woodside_744x550px_6.jpg': 'is-right',
            'CatherineKwongDesign_Woodside_558x788px_7.jpg': 'is-clear is-left',
            'CatherineKwongDesign_Woodside_558x788px_8.jpg': 'is-right ',
            'CatherineKwongDesign_Woodside_744x515px_9.jpg': 'is-clear is-left',
            'CatherineKwongDesign_Woodside_372x515px_10.jpg': 'is-right is-double',
            'CatherineKwongDesign_Woodside_1215x730px_11.jpg': 'is-full'
          }
        }, {
          url: 'sho17',
          folder: 'sho17',
          thumb: 'CKD_344x290_Showcase_17.jpg',
          order: 6,
          location: 'SAN FRANCISCO, CA',
          title: 'CALIFORNIA MODERN',
          hover: 'showcase 2017',
          copy: "For this year's Decorator Showcase, we decided to design a room for ourselves. One that was elemental and quietly romantic but also layered and rich in meaning. One that feels like what California feels like to us right now.",
          hero: {
            file: 'CatherineKwongDesign_Showcase2017_1216x800px_1.jpg',
            width: 1216,
            height: 800
          },
          gallery: {
            'CatherineKwongDesign_Showcase2017_558x750px_4.jpg': 'is-right',
            'CatherineKwongDesign_Showcase2017_558x345px_2.jpg': 'is-left',
            'CatherineKwongDesign_Showcase2017_558x345px_3.jpg': 'is-left',
            'CatherineKwongDesign_Showcase2017_724x544px_5.jpg': 'is-clear is-left',
            'CatherineKwongDesign_Showcase2017_392x544px_6.jpg': 'is-right',
            'CatherineKwongDesign_Showcase2017_558x698px_7.jpg': 'is-left',
            'CatherineKwongDesign_Showcase2017_558x698px_8.jpg': 'is-right is-double',
            'CatherineKwongDesign_Showcase2017_1216x846px_9.jpg': 'is-full'
          }
        }, {
          url: 'jacksonsquare',
          folder: 'pacific',
          thumb: 'CKD_344x290_JacksonSquare.jpg',
          order: 7,
          location: 'SAN FRANCISCO, CA',
          hover: 'jackson square',
          title: 'JACKSON SQUARE LOFT',
          copy: 'When approaching the remodel of this small loft apartment, editing was the key.  First step: removing the eighties-style shag carpet and the mirrors that covered every surface.  It was smooth sailing after that: white walls, dark floors, tailored drapery... Throw in an 800-pound steel firewood holder, a glass chandelier, and a favorite pair of leather sling chairs, and the place was ready for late-night cocktails and easy Sunday mornings.',
          hero: {
            file: 'CatherineKwongDesign_JacksonSquareLoft_1216x800px_1.jpg',
            width: 1216,
            height: 800
          },
          gallery: {
            'CatherineKwongDesign_JacksonSquareLoft_558x837px_2.jpg': 'is-clear is-left',
            'CatherineKwongDesign_JacksonSquareLoft_558x837px_3.jpg': 'is-right',
            'CatherineKwongDesign_JacksonSquareLoft_701x587px_4.jpg': 'is-clear is-left',
            'CatherineKwongDesign_JacksonSquareLoft_415x587px_5.jpg ': 'is-right is-double',
            'CatherineKwongDesign_JacksonSquareLoft_1216x818px_6.jpg ': 'is-clear is-full',
            'CatherineKwongDesign_JacksonSquareLoft_558x744px_7.jpg': 'is-clear is-left',
            'CatherineKwongDesign_JacksonSquareLoft_558x744px_8.jpg': 'is-right'
          }
        }, {
          url: 'pacificheightstownhouse',
          folder: 'shija',
          thumb: 'CKD_344x290_PacificHeightsTownhome.jpg',
          order: 8,
          location: 'PACIFIC HEIGHTS, CA',
          title: 'PACIFIC HEIGHTS TOWNHOUSE',
          hover: 'pacific heights',
          copy: "When a client approaches you with inspiration images from the lookbooks of Valentino, Erdem, and Dior, you know it's going to be good.  Our fashionista client was looking to create a family home that reflected her signature sense of fun and style.  We took cues from her closet, as well as the runway, to inform this glamorous study in pattern-mixing.",
          hero: {
            file: 'CatherineKwongDesign_PacificHeightsTownhome_1216x800px_1.jpg',
            width: 1216,
            height: 800
          },
          gallery: {
            'CatherineKwongDesign_PacificHeightsTownhome_766x510px_2.jpg': 'is-clear is-left',
            'CatherineKwongDesign_PacificHeightsTownhome_350x510px_3.jpg': 'is-right',
            'CatherineKwongDesign_PacificHeightsTownhome_340x517px_4.jpg': 'is-clear is-left',
            'CatherineKwongDesign_PacificHeightsTownhome_776x517px_5.jpg': 'is-right'
          }
        }, {
          url: 'sho13',
          folder: 'sho13',
          thumb: 'CKD_344x290_Showcase_13.jpg',
          order: 9,
          location: 'SAN FRANCISCO, CA',
          hover: 'SHOWCASE 2013',
          title: 'CLASSICAL OVERTURE',
          copy: 'For the 2013 San Francisco Decorator Showcase, we were inspired by old photos we found of Mick and Bianca Jagger in their newlywed days.  Unabashedly stylish, the photos depicted a wild romance.  We designed our award-winning room for that couple in that moment of amour fou: luxe and decadent, but with all the impossible glamour of true rock royalty.',
          hero: {
            file: 'CatherineKwongDesign_Showcase2013_1216x800px_1.jpg',
            width: 1216,
            height: 800
          },
          gallery: {
            'CatherineKwongDesign_Showcase2013_558x837px_2.jpg': 'is-clear is-left',
            'CatherineKwongDesign_Showcase2013_558x837px_3.jpg': 'is-right',
            'CatherineKwongDesign_Showcase2013_558x806px_4.jpg': 'is-clear is-left',
            'CatherineKwongDesign_Showcase2013_558x373px_5.jpg': 'is-right',
            'CatherineKwongDesign_Showcase2013_558x373px_6.jpg': 'is-right',
            'CatherineKwongDesign_Showcase2013_558x837px_7.jpg': 'is-clear is-left',
            'CatherineKwongDesign_Showcase2013_558x837px_8.jpg': 'is-right'
          }
        }, {
          url: 'cowhollow',
          folder: 'quegr',
          thumb: 'CKD_344x290_CowHollowRetreat.jpg',
          order: 10,
          location: 'SAN FRANCISCO, CA',
          title: 'COW HOLLOW RETREAT',
          hover: 'COW HOLLOW',
          copy: 'We approached this gut renovation with an eye toward balance.  While the exterior and front entry of the house retain historical details of the original architecture, the rest of the home is a minimalist retreat composed of clean lines and a neutral materials palette of glass, plaster and leather floors.  With a focus on comfort and warmth, we punctuated the space with industrial fixtures, walnut-framed furniture, and suiting fabrics from Saville Row.  Dreamy light filters effortlessly through this urban retreat.',
          hero: {
            file: 'CatherineKwongDesign_CowHollowRetreat_1216x800px_1.jpg',
            width: 1216,
            height: 800
          },
          gallery: {
            'CatherineKwongDesign_CowHollowRetreat_558x837px_2.jpg': 'is-clear is-left',
            'CatherineKwongDesign_CowHollowRetreat_558x837px_3.jpg': 'is-right is-double',
            'CatherineKwongDesign_CowHollowRetreat_1216x810px_4.jpg': 'is-full',
            'CatherineKwongDesign_CowHollowRetreat_558x377px_5.jpg': 'is-left',
            'CatherineKwongDesign_CowHollowRetreat_558x814px_7.jpg': 'is-right',
            'CatherineKwongDesign_CowHollowRetreat_558x377px_6.jpg': 'is-left'
          }
        }, /* {
          url: 'weija',
          folder: 'weija',
          thumb: 'CKD_344x290_PresidioHeights.jpg',
          location: 'SAN FRANCISCO, CA',
          hover: 'PRESIDIO HEIGHTS',
          title: 'PRESIDIO HEIGHTS MODERN',
          copy: "Three months to furnish a home?  No problem.  Our jet-setting clients came to us with a love for modern design and very tight timeline. We got to work sourcing vintage lighting and in-stock rugs, and designed custom brackets to add detail to reupholstered chairs.  Large-format artwork frames the scene in each room, anchoring a mix of bold patterns and luxe fabrics, to create a stylish sanctuary for beautiful living.",
          hero: {
            file: 'CatherineKwongDesign_PresidioHeightsModern_1216x800px_1.jpg',
            width: 1216,
            height: 800,
          },
          gallery: {
            'CatherineKwongDesign_PresidioHeightsModern_558x815px_2.jpg': 'is-clear is-left',
            'CatherineKwongDesign_PresidioHeightsModern_558x815px_3.jpg': 'is-right',
            'CatherineKwongDesign_PresidioHeightsModern_744x528px_4.jpg': 'is-clear is-left',
            'CatherineKwongDesign_PresidioHeightsModern_372x528px_5.jpg': 'is-right',
            // 'CatherineKwongDesign_PresidioHeightsModern_1216x810px_6.jpg': 'is-full',
            'CatherineKwongDesign_PresidioHeightsModern_458x766px_7.jpg': 'is-clear is-left',
            'CatherineKwongDesign_PresidioHeightsModern_658x766px_8.jpg': 'is-right',
            'CatherineKwongDesign_PresidioHeightsModern_558x837px_9.jpg': 'is-clear is-left',
            'CatherineKwongDesign_PresidioHeightsModern_558x837px_10.jpg': 'is-right is-double',
            'CatherineKwongDesign_PresidioHeightsModern_1216x716px_11.jpg': 'is-full',
          }
        }, */ {
          url: 'biodiversity-education-center',
          folder: 'biodiversity-education-center',
          thumb: 'WEER_Biodiversity-education-center.jpg',
          location: 'Kachin - Putao',
          featured: true,
          title: 'Biodiversity Education Center - Putao',
          hover: 'Biodiversity Education Center',
          copy: 'Located in northern Myanmar, the small town of Putao is surrounded by ice-capped mountains and presents a unique vegetation, including rare orchids, as well as endemic birds and animals. This diverse ecosystem is celebrated in the new Biodiversity Education Center Putao, which opened its doors to the public in December 2019.The centerpiece of the renovated space is a wooden box, which houses the valueables of the museum, much like a jewelry box. The box is referencing a local construction technique, made by stacking wood planks in an angle, while its inside displays rare animals from the area. The elevated timber floor raises the eye of the observer to the box and the information boards that are framing the space. The circulation in the room follows a U-shape, along which visitors can learn about the natural resources of the area, its biodiversity and cultural heritage, as well as ongoing activities and initiatives related to the natural environment. A small sitting area in front of the box can offer the visitor a moment of rest and contemplation before they exit the museum.By merging local materials and techniques with new ideas and contemporary visions, this center becomes a new landmark in the heart of Putao, and offers a space of learning and awareness for locals and visitors, who can appreciate the natural beauty of their environments.',
          hero: {
            file: 'Biodiversity Education Center_2048x1365_1.jpg',
            width: 1000,
            height: 8000
          },
          gallery: {
            // 'CatherineKwongDesign_SeacliffRetreat_1216x800_1.jpg': '',
            'Biodiversity Education Center_1080x1080_2.jpg': 'is-full',
            'Biodiversity Education Center_1080x1080_3.jpg': 'is-full',
            'Biodiversity Education Center_1080x1080_4.jpg': 'is-full',
            'Biodiversity Education Center_1080x1080_5.jpg': 'is-full',
            'Biodiversity Education Center_1080x1080_6.jpg': 'is-full',
            'Biodiversity Education Center_1080x1080_7.jpg': 'is-full',

            'Biodiversity Education Center_1080x1080_8.jpg': 'is-full',
            'Biodiversity Education Center_1080x1080_9.jpg': 'is-full',

            'Biodiversity Education Center_1080x1080_10.jpg': 'is-full',
            'Biodiversity Education Center_1080x1080_11.jpg': 'is-full',
            'Biodiversity Education Center_392x543_12.jpg': 'is-left',
            'Biodiversity Education Center_392x543_13.jpg': 'is-right',
            'Biodiversity Education Center_558x345_14.jpg': 'is-left',
            'Biodiversity Education Center_558x345_15.jpg': 'is-right'

          }
        }
      ]
    }
  }
}
