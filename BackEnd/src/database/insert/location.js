const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const insertDataLocation = async () => {
    await prisma.location.createMany({
        data: [
            {
                system_name: 'BaNaHill',
                display_name: 'Bà Nà Hill',
                id_city: 1
            },
            {
                system_name: "NguHanhSonMountains",
                display_name: "Núi Ngũ Hành Sơn",
                id_city: 1,
            },
            {
                system_name: "HoiAnOldQuarter",
                display_name: "Phố Cổ Hội An",
                id_city: 3,
            },
            {
                system_name: "TheAncientCapitalOfHue",
                display_name: "Cố Đô Huế",
                id_city: 2
            },
            {
                system_name: "KhaiDinhMausoleum",
                display_name: "Lăng Khải Định",
                id_city: 2
            },
            {
                system_name: "Stoughton",
                display_name: "Armistice",
                id_city: 317
            },
            {
                system_name: "Green",
                display_name: "Carey",
                id_city: 403
            },
            {
                system_name: "Luster",
                display_name: "Morrow",
                id_city: 13
            },
            {
                system_name: "Prentice",
                display_name: "Warner",
                id_city: 236
            },
            {
                system_name: "Arrowood",
                display_name: "Schurz",
                id_city: 495
            },
            {
                system_name: "Sugar",
                display_name: "Division",
                id_city: 72
            },
            {
                system_name: "Meadow Ridge",
                display_name: "Susan",
                id_city: 450
            },
            {
                system_name: "West",
                display_name: "Commercial",
                id_city: 293
            },
            {
                system_name: "Talisman",
                display_name: "Moulton",
                id_city: 221
            },
            {
                system_name: "Eastlawn",
                display_name: "Crescent Oaks",
                id_city: 338
            },
            {
                system_name: "Pleasure",
                display_name: "Village Green",
                id_city: 29
            },
            {
                system_name: "Lillian",
                display_name: "Moland",
                id_city: 194
            },
            {
                system_name: "Lukken",
                display_name: "Doe Crossing",
                id_city: 402
            },
            {
                system_name: "Burrows",
                display_name: "Shoshone",
                id_city: 494
            },
            {
                system_name: "Meadow Vale",
                display_name: "Buena Vista",
                id_city: 435
            },
            {
                system_name: "Sloan",
                display_name: "David",
                id_city: 216
            },
            {
                system_name: "Almo",
                display_name: "Hazelcrest",
                id_city: 343
            },
            {
                system_name: "Hoepker",
                display_name: "Springs",
                id_city: 87
            },
            {
                system_name: "Old Gate",
                display_name: "Dayton",
                id_city: 379
            },
            {
                system_name: "Old Shore",
                display_name: "Rockefeller",
                id_city: 162
            },
            {
                system_name: "Homewood",
                display_name: "Randy",
                id_city: 295
            },
            {
                system_name: "Carberry",
                display_name: "Eagle Crest",
                id_city: 205
            },
            {
                system_name: "Northwestern",
                display_name: "Orin",
                id_city: 205
            },
            {
                system_name: "Pankratz",
                display_name: "Forest Dale",
                id_city: 172
            },
            {
                system_name: "Jenifer",
                display_name: "Waubesa",
                id_city: 77
            },
            {
                system_name: "Mayer",
                display_name: "Dorton",
                id_city: 14
            },
            {
                system_name: "Scoville",
                display_name: "New Castle",
                id_city: 442
            },
            {
                system_name: "Menomonie",
                display_name: "Old Gate",
                id_city: 199
            },
            {
                system_name: "3rd",
                display_name: "Mandrake",
                id_city: 258
            },
            {
                system_name: "Golf View",
                display_name: "Russell",
                id_city: 97
            },
            {
                system_name: "Harbort",
                display_name: "Blackbird",
                id_city: 44
            },
            {
                system_name: "Gina",
                display_name: "Dovetail",
                id_city: 339
            },
            {
                system_name: "Kinsman",
                display_name: "Sullivan",
                id_city: 343
            },
            {
                system_name: "Elka",
                display_name: "Elmside",
                id_city: 447
            },
            {
                system_name: "Tomscot",
                display_name: "Annamark",
                id_city: 172
            },
            {
                system_name: "Lawn",
                display_name: "Manitowish",
                id_city: 153
            },
            {
                system_name: "Hudson",
                display_name: "Nova",
                id_city: 309
            },
            {
                system_name: "Riverside",
                display_name: "Barby",
                id_city: 432
            },
            {
                system_name: "Golf",
                display_name: "Norway Maple",
                id_city: 89
            },
            {
                system_name: "Washington",
                display_name: "Southridge",
                id_city: 430
            },
            {
                system_name: "Kim",
                display_name: "3rd",
                id_city: 470
            },
            {
                system_name: "Coleman",
                display_name: "Huxley",
                id_city: 15
            },
            {
                system_name: "Donald",
                display_name: "Talmadge",
                id_city: 20
            },
            {
                system_name: "Nancy",
                display_name: "Eagan",
                id_city: 339
            },
            {
                system_name: "New Castle",
                display_name: "Donald",
                id_city: 482
            },
            {
                system_name: "Mesta",
                display_name: "Sloan",
                id_city: 203
            },
            {
                system_name: "Moulton",
                display_name: "Delaware",
                id_city: 135
            },
            {
                system_name: "Arizona",
                display_name: "Hansons",
                id_city: 255
            },
            {
                system_name: "Corry",
                display_name: "Cascade",
                id_city: 19
            },
            {
                system_name: "Russell",
                display_name: "Kedzie",
                id_city: 351
            },
            {
                system_name: "Warrior",
                display_name: "Dapin",
                id_city: 328
            },
            {
                system_name: "Dakota",
                display_name: "Mallory",
                id_city: 436
            },
            {
                system_name: "American",
                display_name: "Browning",
                id_city: 111
            },
            {
                system_name: "Dwight",
                display_name: "Columbus",
                id_city: 154
            },
            {
                system_name: "Tennyson",
                display_name: "Spohn",
                id_city: 354
            },
            {
                system_name: "Mifflin",
                display_name: "Debs",
                id_city: 165
            },
            {
                system_name: "Rowland",
                display_name: "Bellgrove",
                id_city: 321
            },
            {
                system_name: "Vera",
                display_name: "Continental",
                id_city: 135
            },
            {
                system_name: "Sauthoff",
                display_name: "Manley",
                id_city: 3
            },
            {
                system_name: "Grasskamp",
                display_name: "Center",
                id_city: 284
            },
            {
                system_name: "Heath",
                display_name: "Crest Line",
                id_city: 103
            },
            {
                system_name: "Merrick",
                display_name: "Northview",
                id_city: 246
            },
            {
                system_name: "Katie",
                display_name: "Troy",
                id_city: 50
            },
            {
                system_name: "Acker",
                display_name: "Farwell",
                id_city: 346
            },
            {
                system_name: "Forster",
                display_name: "Dakota",
                id_city: 300
            },
            {
                system_name: "Loomis",
                display_name: "Union",
                id_city: 475
            },
            {
                system_name: "Erie",
                display_name: "Di Loreto",
                id_city: 152
            },
            {
                system_name: "Hayes",
                display_name: "La Follette",
                id_city: 262
            },
            {
                system_name: "Namekagon",
                display_name: "Eliot",
                id_city: 299
            },
            {
                system_name: "Weeping Birch",
                display_name: "Gulseth",
                id_city: 272
            },
            {
                system_name: "Shelley",
                display_name: "Dwight",
                id_city: 89
            },
            {
                system_name: "Algoma",
                display_name: "Welch",
                id_city: 351
            },
            {
                system_name: "Bunting",
                display_name: "Maple Wood",
                id_city: 415
            },
            {
                system_name: "Green Ridge",
                display_name: "Oak",
                id_city: 351
            },
            {
                system_name: "Nobel",
                display_name: "Pleasure",
                id_city: 386
            },
            {
                system_name: "Hansons",
                display_name: "Declaration",
                id_city: 88
            },
            {
                system_name: "5th",
                display_name: "East",
                id_city: 483
            },
            {
                system_name: "Bluejay",
                display_name: "Stephen",
                id_city: 144
            },
            {
                system_name: "Ridgeview",
                display_name: "Hagan",
                id_city: 347
            },
            {
                system_name: "Pierstorff",
                display_name: "Hudson",
                id_city: 451
            },
            {
                system_name: "Cambridge",
                display_name: "Thackeray",
                id_city: 119
            },
            {
                system_name: "Memorial",
                display_name: "Parkside",
                id_city: 166
            },
            {
                system_name: "Eagan",
                display_name: "Kinsman",
                id_city: 190
            },
            {
                system_name: "Becker",
                display_name: "Rutledge",
                id_city: 175
            },
            {
                system_name: "Doe Crossing",
                display_name: "Dawn",
                id_city: 493
            },
            {
                system_name: "Randy",
                display_name: "Birchwood",
                id_city: 460
            },
            {
                system_name: "Buhler",
                display_name: "Sundown",
                id_city: 120
            },
            {
                system_name: "Iowa",
                display_name: "Gerald",
                id_city: 238
            },
            {
                system_name: "Esch",
                display_name: "Calypso",
                id_city: 197
            },
            {
                system_name: "Surrey",
                display_name: "West",
                id_city: 334
            },
            {
                system_name: "Mendota",
                display_name: "Melvin",
                id_city: 130
            },
            {
                system_name: "Northridge",
                display_name: "Packers",
                id_city: 165
            },
            {
                system_name: "Roxbury",
                display_name: "Mockingbird",
                id_city: 271
            },
            {
                system_name: "Jenna",
                display_name: "Rieder",
                id_city: 454
            },
            {
                system_name: "Sachtjen",
                display_name: "Caliangt",
                id_city: 183
            },
            {
                system_name: "Walton",
                display_name: "Kenwood",
                id_city: 30
            },
            {
                system_name: "Mayfield",
                display_name: "Hoard",
                id_city: 362
            },
            {
                system_name: "Kensington",
                display_name: "Everett",
                id_city: 253
            },
            {
                system_name: "Pepper Wood",
                display_name: "Eastwood",
                id_city: 403
            },
            {
                system_name: "Nova",
                display_name: "Corry",
                id_city: 440
            },
            {
                system_name: "Eggendart",
                display_name: "Dexter",
                id_city: 125
            },
            {
                system_name: "Crownhardt",
                display_name: "Ohio",
                id_city: 284
            },
            {
                system_name: "Golden Leaf",
                display_name: "Comanche",
                id_city: 103
            },
            {
                system_name: "Graceland",
                display_name: "Corscot",
                id_city: 274
            },
            {
                system_name: "Colorado",
                display_name: "Boyd",
                id_city: 204
            },
            {
                system_name: "Coolidge",
                display_name: "Ridgeview",
                id_city: 141
            },
            {
                system_name: "East",
                display_name: "Judy",
                id_city: 43
            },
            {
                system_name: "Ridge Oak",
                display_name: "Hintze",
                id_city: 437
            },
            {
                system_name: "Graedel",
                display_name: "Carberry",
                id_city: 26
            },
            {
                system_name: "Waxwing",
                display_name: "Spaight",
                id_city: 3
            },
            {
                system_name: "Hallows",
                display_name: "Bunting",
                id_city: 422
            },
            {
                system_name: "Thackeray",
                display_name: "Meadow Ridge",
                id_city: 292
            },
            {
                system_name: "Huxley",
                display_name: "Lyons",
                id_city: 449
            },
            {
                system_name: "Bonner",
                display_name: "Lunder",
                id_city: 191
            },
            {
                system_name: "Gale",
                display_name: "Katie",
                id_city: 41
            },
            {
                system_name: "Schmedeman",
                display_name: "Scott",
                id_city: 101
            },
            {
                system_name: "Onsgard",
                display_name: "Walton",
                id_city: 154
            },
            {
                system_name: "Bellgrove",
                display_name: "Corben",
                id_city: 323
            },
            {
                system_name: "Haas",
                display_name: "7th",
                id_city: 236
            },
            {
                system_name: "Towne",
                display_name: "Duke",
                id_city: 233
            },
            {
                system_name: "Texas",
                display_name: "Golf View",
                id_city: 307
            },
            {
                system_name: "Service",
                display_name: "Burrows",
                id_city: 322
            },
            {
                system_name: "Stephen",
                display_name: "Superior",
                id_city: 80
            },
            {
                system_name: "Blackbird",
                display_name: "Muir",
                id_city: 348
            },
            {
                system_name: "Bowman",
                display_name: "Manufacturers",
                id_city: 368
            },
            {
                system_name: "Delaware",
                display_name: "International",
                id_city: 190
            },
            {
                system_name: "Morrow",
                display_name: "Mcguire",
                id_city: 205
            },
            {
                system_name: "Pennsylvania",
                display_name: "Victoria",
                id_city: 441
            },
            {
                system_name: "Mariners Cove",
                display_name: "Lake View",
                id_city: 168
            },
            {
                system_name: "David",
                display_name: "Fairfield",
                id_city: 291
            },
            {
                system_name: "Susan",
                display_name: "Fairview",
                id_city: 292
            },
            {
                system_name: "Summer Ridge",
                display_name: "Lakewood",
                id_city: 13
            },
            {
                system_name: "Northland",
                display_name: "Westerfield",
                id_city: 224
            },
            {
                system_name: "School",
                display_name: "American Ash",
                id_city: 377
            },
            {
                system_name: "Lindbergh",
                display_name: "Warbler",
                id_city: 457
            },
            {
                system_name: "Laurel",
                display_name: "Hanson",
                id_city: 493
            },
            {
                system_name: "Calypso",
                display_name: "School",
                id_city: 51
            },
            {
                system_name: "Larry",
                display_name: "Monterey",
                id_city: 419
            },
            {
                system_name: "Fulton",
                display_name: "Goodland",
                id_city: 153
            },
            {
                system_name: "Lerdahl",
                display_name: "Monica",
                id_city: 438
            },
            {
                system_name: "High Crossing",
                display_name: "Lindbergh",
                id_city: 159
            },
            {
                system_name: "Thompson",
                display_name: "Karstens",
                id_city: 119
            },
            {
                system_name: "Dovetail",
                display_name: "Granby",
                id_city: 223
            },
            {
                system_name: "Dennis",
                display_name: "Memorial",
                id_city: 85
            },
            {
                system_name: "Fair Oaks",
                display_name: "Gina",
                id_city: 372
            },
            {
                system_name: "Michigan",
                display_name: "Golden Leaf",
                id_city: 285
            },
            {
                system_name: "Merry",
                display_name: "Bay",
                id_city: 486
            },
            {
                system_name: "Veith",
                display_name: "Monument",
                id_city: 77
            },
            {
                system_name: "Leroy",
                display_name: "Grover",
                id_city: 71
            },
            {
                system_name: "Milwaukee",
                display_name: "Service",
                id_city: 437
            },
            {
                system_name: "Bultman",
                display_name: "Reindahl",
                id_city: 160
            },
            {
                system_name: "Barby",
                display_name: "Bunker Hill",
                id_city: 399
            },
            {
                system_name: "Oxford",
                display_name: "Dottie",
                id_city: 357
            },
            {
                system_name: "Commercial",
                display_name: "Blue Bill Park",
                id_city: 291
            },
            {
                system_name: "Fairfield",
                display_name: "Glacier Hill",
                id_city: 324
            },
            {
                system_name: "Rusk",
                display_name: "Portage",
                id_city: 237
            },
            {
                system_name: "Vernon",
                display_name: "Haas",
                id_city: 111
            },
            {
                system_name: "Dapin",
                display_name: "Rusk",
                id_city: 346
            },
            {
                system_name: "Manitowish",
                display_name: "Jenifer",
                id_city: 236
            },
            {
                system_name: "John Wall",
                display_name: "Lighthouse Bay",
                id_city: 322
            },
            {
                system_name: "Brickson Park",
                display_name: "Shelley",
                id_city: 174
            },
            {
                system_name: "Dahle",
                display_name: "Briar Crest",
                id_city: 329
            },
            {
                system_name: "Sunfield",
                display_name: "Forster",
                id_city: 153
            },
            {
                system_name: "6th",
                display_name: "Spenser",
                id_city: 413
            },
            {
                system_name: "Sutteridge",
                display_name: "Kropf",
                id_city: 406
            },
            {
                system_name: "Holy Cross",
                display_name: "Butterfield",
                id_city: 67
            },
            {
                system_name: "Norway Maple",
                display_name: "Brown",
                id_city: 49
            },
            {
                system_name: "Glendale",
                display_name: "Hanover",
                id_city: 485
            },
            {
                system_name: "Londonderry",
                display_name: "Laurel",
                id_city: 356
            },
            {
                system_name: "Buell",
                display_name: "Maywood",
                id_city: 466
            },
            {
                system_name: "Linden",
                display_name: "Tennyson",
                id_city: 175
            },
            {
                system_name: "Dryden",
                display_name: "Sutteridge",
                id_city: 377
            },
            {
                system_name: "Scott",
                display_name: "Park Meadow",
                id_city: 204
            },
            {
                system_name: "Burning Wood",
                display_name: "Arkansas",
                id_city: 102
            },
            {
                system_name: "Messerschmidt",
                display_name: "Maple",
                id_city: 72
            },
            {
                system_name: "Evergreen",
                display_name: "Oxford",
                id_city: 278
            },
            {
                system_name: "Cordelia",
                display_name: "Leroy",
                id_city: 2
            },
            {
                system_name: "Jay",
                display_name: "Green Ridge",
                id_city: 221
            },
            {
                system_name: "Sunnyside",
                display_name: "Mayer",
                id_city: 274
            },
            {
                system_name: "Emmet",
                display_name: "Clyde Gallagher",
                id_city: 250
            },
            {
                system_name: "Mccormick",
                display_name: "Jenna",
                id_city: 128
            },
            {
                system_name: "Lakeland",
                display_name: "Mcbride",
                id_city: 176
            },
            {
                system_name: "Vermont",
                display_name: "Daystar",
                id_city: 312
            },
            {
                system_name: "Arkansas",
                display_name: "Cardinal",
                id_city: 119
            },
            {
                system_name: "Eagle Crest",
                display_name: "Waxwing",
                id_city: 493
            },
            {
                system_name: "Beilfuss",
                display_name: "Sommers",
                id_city: 470
            },
            {
                system_name: "Kennedy",
                display_name: "Rigney",
                id_city: 159
            },
            {
                system_name: "Del Sol",
                display_name: "Old Shore",
                id_city: 256
            },
            {
                system_name: "Bartelt",
                display_name: "Gateway",
                id_city: 298
            },
            {
                system_name: "Union",
                display_name: "Atwood",
                id_city: 235
            },
            {
                system_name: "Judy",
                display_name: "Ruskin",
                id_city: 100
            },
            {
                system_name: "Pearson",
                display_name: "Roth",
                id_city: 430
            },
            {
                system_name: "Karstens",
                display_name: "Shasta",
                id_city: 377
            },
            {
                system_name: "Lighthouse Bay",
                display_name: "Kings",
                id_city: 199
            },
            {
                system_name: "Kropf",
                display_name: "Iowa",
                id_city: 81
            },
            {
                system_name: "Annamark",
                display_name: "Sage",
                id_city: 403
            },
            {
                system_name: "Melrose",
                display_name: "Starling",
                id_city: 40
            },
            {
                system_name: "Straubel",
                display_name: "Tennessee",
                id_city: 130
            },
            {
                system_name: "Dexter",
                display_name: "Hallows",
                id_city: 463
            },
            {
                system_name: "Ludington",
                display_name: "Homewood",
                id_city: 428
            },
            {
                system_name: "Southridge",
                display_name: "Golf Course",
                id_city: 483
            },
            {
                system_name: "Clemons",
                display_name: "Schlimgen",
                id_city: 204
            },
            {
                system_name: "Dixon",
                display_name: "Wayridge",
                id_city: 58
            },
            {
                system_name: "Maywood",
                display_name: "Marcy",
                id_city: 403
            },
            {
                system_name: "Rutledge",
                display_name: "Oakridge",
                id_city: 421
            },
            {
                system_name: "Scofield",
                display_name: "Burning Wood",
                id_city: 34
            },
            {
                system_name: "Pond",
                display_name: "Anniversary",
                id_city: 129
            },
            {
                system_name: "Transport",
                display_name: "Fieldstone",
                id_city: 450
            },
            {
                system_name: "Stone Corner",
                display_name: "Grayhawk",
                id_city: 60
            },
            {
                system_name: "Schurz",
                display_name: "Pearson",
                id_city: 107
            },
            {
                system_name: "Mcbride",
                display_name: "Springview",
                id_city: 324
            },
            {
                system_name: "Sommers",
                display_name: "Lukken",
                id_city: 148
            },
            {
                system_name: "Monica",
                display_name: "Prairie Rose",
                id_city: 372
            },
            {
                system_name: "Anniversary",
                display_name: "Mallard",
                id_city: 3
            },
            {
                system_name: "Fieldstone",
                display_name: "Merry",
                id_city: 316
            },
            {
                system_name: "Nevada",
                display_name: "Del Mar",
                id_city: 255
            },
            {
                system_name: "Lien",
                display_name: "Dixon",
                id_city: 338
            },
            {
                system_name: "Warner",
                display_name: "Clemons",
                id_city: 358
            },
            {
                system_name: "Oneill",
                display_name: "Jana",
                id_city: 214
            },
            {
                system_name: "Clarendon",
                display_name: "Artisan",
                id_city: 377
            },
            {
                system_name: "Arapahoe",
                display_name: "Longview",
                id_city: 116
            },
            {
                system_name: "Farmco",
                display_name: "Larry",
                id_city: 243
            },
            {
                system_name: "Bluestem",
                display_name: "Sutherland",
                id_city: 448
            },
            {
                system_name: "Kedzie",
                display_name: "Scofield",
                id_city: 16
            },
            {
                system_name: "Anderson",
                display_name: "Toban",
                id_city: 19
            },
            {
                system_name: "Ohio",
                display_name: "4th",
                id_city: 407
            },
            {
                system_name: "Saint Paul",
                display_name: "Del Sol",
                id_city: 387
            },
            {
                system_name: "Grim",
                display_name: "Badeau",
                id_city: 323
            },
            {
                system_name: "Trailsway",
                display_name: "Becker",
                id_city: 133
            },
            {
                system_name: "Cottonwood",
                display_name: "Merrick",
                id_city: 337
            },
            {
                system_name: "Wayridge",
                display_name: "Kensington",
                id_city: 186
            },
            {
                system_name: "Swallow",
                display_name: "Petterle",
                id_city: 238
            },
            {
                system_name: "Holmberg",
                display_name: "Nelson",
                id_city: 427
            },
            {
                system_name: "Cherokee",
                display_name: "Lawn",
                id_city: 53
            },
            {
                system_name: "American Ash",
                display_name: "Ryan",
                id_city: 484
            },
            {
                system_name: "Pawling",
                display_name: "Arapahoe",
                id_city: 440
            },
            {
                system_name: "Mallard",
                display_name: "Pawling",
                id_city: 84
            },
            {
                system_name: "Fisk",
                display_name: "Stang",
                id_city: 244
            },
            {
                system_name: "Oak",
                display_name: "Ridgeway",
                id_city: 329
            },
            {
                system_name: "Florence",
                display_name: "Havey",
                id_city: 334
            },
            {
                system_name: "Shasta",
                display_name: "Lakewood Gardens",
                id_city: 297
            },
            {
                system_name: "Anthes",
                display_name: "Stuart",
                id_city: 83
            },
            {
                system_name: "Shopko",
                display_name: "Beilfuss",
                id_city: 325
            },
            {
                system_name: "Hovde",
                display_name: "Cherokee",
                id_city: 143
            },
            {
                system_name: "Macpherson",
                display_name: "Ramsey",
                id_city: 179
            },
            {
                system_name: "Maple Wood",
                display_name: "Mifflin",
                id_city: 37
            },
            {
                system_name: "Sherman",
                display_name: "Florence",
                id_city: 330
            },
            {
                system_name: "Daystar",
                display_name: "John Wall",
                id_city: 239
            },
            {
                system_name: "Loeprich",
                display_name: "Nancy",
                id_city: 203
            },
            {
                system_name: "Ryan",
                display_name: "Mesta",
                id_city: 123
            },
            {
                system_name: "Marquette",
                display_name: "Crownhardt",
                id_city: 140
            },
            {
                system_name: "Manley",
                display_name: "Anthes",
                id_city: 313
            },
            {
                system_name: "Sutherland",
                display_name: "Bluestem",
                id_city: 341
            },
            {
                system_name: "Hollow Ridge",
                display_name: "Hermina",
                id_city: 176
            },
            {
                system_name: "Sundown",
                display_name: "Northland",
                id_city: 357
            },
            {
                system_name: "Comanche",
                display_name: "Vidon",
                id_city: 287
            },
            {
                system_name: "Glacier Hill",
                display_name: "Mayfield",
                id_city: 174
            },
            {
                system_name: "Melby",
                display_name: "Riverside",
                id_city: 242
            },
            {
                system_name: "Springs",
                display_name: "Londonderry",
                id_city: 278
            },
            {
                system_name: "Autumn Leaf",
                display_name: "Bowman",
                id_city: 63
            },
            {
                system_name: "Claremont",
                display_name: "Hovde",
                id_city: 440
            },
            {
                system_name: "Manufacturers",
                display_name: "Linden",
                id_city: 337
            },
            {
                system_name: "Fordem",
                display_name: "Kingsford",
                id_city: 385
            },
            {
                system_name: "Mandrake",
                display_name: "Brickson Park",
                id_city: 90
            },
            {
                system_name: "Rieder",
                display_name: "Kipling",
                id_city: 8
            },
            {
                system_name: "Lotheville",
                display_name: "Stone Corner",
                id_city: 466
            },
            {
                system_name: "Dayton",
                display_name: "Luster",
                id_city: 74
            },
            {
                system_name: "Barnett",
                display_name: "Forest Run",
                id_city: 195
            },
            {
                system_name: "Canary",
                display_name: "Summerview",
                id_city: 328
            },
            {
                system_name: "Johnson",
                display_name: "Sunbrook",
                id_city: 53
            },
            {
                system_name: "Del Mar",
                display_name: "Emmet",
                id_city: 190
            },
            {
                system_name: "Schiller",
                display_name: "Banding",
                id_city: 269
            },
            {
                system_name: "Spaight",
                display_name: "Drewry",
                id_city: 234
            },
            {
                system_name: "Welch",
                display_name: "Butternut",
                id_city: 99
            },
            {
                system_name: "Porter",
                display_name: "Merchant",
                id_city: 89
            },
            {
                system_name: "Forest",
                display_name: "Talisman",
                id_city: 483
            },
            {
                system_name: "Buena Vista",
                display_name: "Hoffman",
                id_city: 347
            },
            {
                system_name: "Helena",
                display_name: "Glendale",
                id_city: 74
            },
            {
                system_name: "Lunder",
                display_name: "Porter",
                id_city: 245
            },
            {
                system_name: "Toban",
                display_name: "Johnson",
                id_city: 400
            },
            {
                system_name: "Prairie Rose",
                display_name: "Sunfield",
                id_city: 396
            },
            {
                system_name: "Vahlen",
                display_name: "Fordem",
                id_city: 40
            },
            {
                system_name: "Duke",
                display_name: "Washington",
                id_city: 203
            },
            {
                system_name: "Warbler",
                display_name: "Delladonna",
                id_city: 341
            },
            {
                system_name: "Stang",
                display_name: "Sherman",
                id_city: 313
            },
            {
                system_name: "Longview",
                display_name: "Red Cloud",
                id_city: 56
            },
            {
                system_name: "Cascade",
                display_name: "Buell",
                id_city: 436
            },
            {
                system_name: "Kipling",
                display_name: "Coleman",
                id_city: 463
            },
            {
                system_name: "Corscot",
                display_name: "Macpherson",
                id_city: 58
            },
            {
                system_name: "Maryland",
                display_name: "Dunning",
                id_city: 107
            },
            {
                system_name: "Debra",
                display_name: "Morning",
                id_city: 322
            },
            {
                system_name: "Fallview",
                display_name: "Brentwood",
                id_city: 48
            },
            {
                system_name: "Melody",
                display_name: "Melody",
                id_city: 485
            },
            {
                system_name: "Farwell",
                display_name: "Miller",
                id_city: 175
            },
            {
                system_name: "Harper",
                display_name: "Clarendon",
                id_city: 241
            },
            {
                system_name: "Forest Dale",
                display_name: "Alpine",
                id_city: 195
            },
            {
                system_name: "Moland",
                display_name: "Holmberg",
                id_city: 215
            },
            {
                system_name: "Heffernan",
                display_name: "Hoepker",
                id_city: 491
            },
            {
                system_name: "Schlimgen",
                display_name: "Lerdahl",
                id_city: 410
            },
            {
                system_name: "Banding",
                display_name: "Knutson",
                id_city: 452
            },
            {
                system_name: "Gateway",
                display_name: "Waywood",
                id_city: 126
            },
            {
                system_name: "Derek",
                display_name: "Little Fleur",
                id_city: 215
            },
            {
                system_name: "Badeau",
                display_name: "Ludington",
                id_city: 488
            },
            {
                system_name: "Miller",
                display_name: "Colorado",
                id_city: 456
            },
            {
                system_name: "Hauk",
                display_name: "Bashford",
                id_city: 336
            },
            {
                system_name: "Moose",
                display_name: "Bluejay",
                id_city: 140
            },
            {
                system_name: "Sheridan",
                display_name: "Veith",
                id_city: 473
            },
            {
                system_name: "Loftsgordon",
                display_name: "Arizona",
                id_city: 184
            },
            {
                system_name: "Brown",
                display_name: "Barnett",
                id_city: 372
            },
            {
                system_name: "Mitchell",
                display_name: "Pierstorff",
                id_city: 80
            },
            {
                system_name: "Everett",
                display_name: "Vernon",
                id_city: 354
            },
            {
                system_name: "Cody",
                display_name: "Sachs",
                id_city: 176
            },
            {
                system_name: "Troy",
                display_name: "Scoville",
                id_city: 305
            },
            {
                system_name: "Bashford",
                display_name: "Novick",
                id_city: 476
            },
            {
                system_name: "Victoria",
                display_name: "Westend",
                id_city: 431
            },
            {
                system_name: "Merchant",
                display_name: "Mosinee",
                id_city: 113
            },
            {
                system_name: "Granby",
                display_name: "Westport",
                id_city: 274
            },
            {
                system_name: "Fuller",
                display_name: "Algoma",
                id_city: 325
            },
            {
                system_name: "Ruskin",
                display_name: "Graceland",
                id_city: 295
            },
            {
                system_name: "Hanover",
                display_name: "Montana",
                id_city: 55
            },
            {
                system_name: "Lakewood Gardens",
                display_name: "Elgar",
                id_city: 147
            },
            {
                system_name: "Carpenter",
                display_name: "Jackson",
                id_city: 333
            },
            {
                system_name: "La Follette",
                display_name: "Loeprich",
                id_city: 89
            },
            {
                system_name: "Ilene",
                display_name: "Farragut",
                id_city: 489
            },
            {
                system_name: "Kenwood",
                display_name: "Lakeland",
                id_city: 51
            },
            {
                system_name: "Division",
                display_name: "Coolidge",
                id_city: 300
            },
            {
                system_name: "Declaration",
                display_name: "Buhler",
                id_city: 23
            },
            {
                system_name: "Hoard",
                display_name: "Pankratz",
                id_city: 81
            },
            {
                system_name: "Fairview",
                display_name: "Cottonwood",
                id_city: 312
            },
            {
                system_name: "Atwood",
                display_name: "Carpenter",
                id_city: 192
            },
            {
                system_name: "Packers",
                display_name: "Marquette",
                id_city: 141
            },
            {
                system_name: "Center",
                display_name: "8th",
                id_city: 361
            }]
    })
}

module.exports = {
    insertDataLocation
}