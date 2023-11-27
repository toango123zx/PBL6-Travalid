const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient();

const insertDataCity = async () => {
    await prisma.city.createMany({
        data: [
            {
                name: 'Đà Nẵng',
            },
            {
                name: 'Huế',
            },
            {
                name: 'Quảng Nam',
            },
            {
                name: 'Quảng Ngãi',
            },
            {
                name: "Shijak"
            },
            {
                name: "Rokytne"
            },
            {
                name: "Viimsi"
            },
            {
                name: "Jialou"
            },
            {
                name: "Benito Juarez"
            },
            {
                name: "Sipeng"
            },
            {
                name: "Xudat"
            },
            {
                name: "Wanbu"
            },
            {
                name: "Caseros"
            },
            {
                name: "Rybache"
            },
            {
                name: "Bhokadoke"
            },
            {
                name: "Dalianhe"
            },
            {
                name: "Sonta"
            },
            {
                name: "Fenglai"
            },
            {
                name: "Lingkou"
            },
            {
                name: "Dayou"
            },
            {
                name: "Támara"
            },
            {
                name: "Karlsruhe"
            },
            {
                name: "Enskede"
            },
            {
                name: "Qinglong"
            },
            {
                name: "Zhongdong"
            },
            {
                name: "Keda"
            },
            {
                name: "Bilice"
            },
            {
                name: "Geshan"
            },
            {
                name: "Draginje"
            },
            {
                name: "Tintina"
            },
            {
                name: "Västra Frölunda"
            },
            {
                name: "Nenagh"
            },
            {
                name: "Tigbao"
            },
            {
                name: "Beylagan"
            },
            {
                name: "Dongzhou"
            },
            {
                name: "Prażmów"
            },
            {
                name: "Bradag"
            },
            {
                name: "Energeticheskiy"
            },
            {
                name: "Sami"
            },
            {
                name: "Karlstad"
            },
            {
                name: "Gumi"
            },
            {
                name: "Dongsheng"
            },
            {
                name: "Ntungamo"
            },
            {
                name: "Daixi"
            },
            {
                name: "Melaka"
            },
            {
                name: "Rantepang"
            },
            {
                name: "Laixi"
            },
            {
                name: "Masu"
            },
            {
                name: "Cergy-Pontoise"
            },
            {
                name: "‘Izrā"
            },
            {
                name: "Ziway"
            },
            {
                name: "Hofors"
            },
            {
                name: "Duanshen"
            },
            {
                name: "Wubao"
            },
            {
                name: "Kalijeruk"
            },
            {
                name: "Stroitel’"
            },
            {
                name: "Lishui"
            },
            {
                name: "Calarcá"
            },
            {
                name: "Macapo"
            },
            {
                name: "Hingatungan"
            },
            {
                name: "Taojiahe"
            },
            {
                name: "Qabqir"
            },
            {
                name: "Camgyai"
            },
            {
                name: "Uthai"
            },
            {
                name: "Tulung"
            },
            {
                name: "Selaparang Timur"
            },
            {
                name: "Anxi"
            },
            {
                name: "Espargos"
            },
            {
                name: "Goczałkowice Zdrój"
            },
            {
                name: "Zhatay"
            },
            {
                name: "Colorado Springs"
            },
            {
                name: "Veliki Grđevac"
            },
            {
                name: "Blagnac"
            },
            {
                name: "Hancheng"
            },
            {
                name: "Tha Ruea"
            },
            {
                name: "Tiling"
            },
            {
                name: "Rencun"
            },
            {
                name: "Dasha"
            },
            {
                name: "Åkersberga"
            },
            {
                name: "Xiakou"
            },
            {
                name: "Rokitno Szlacheckie"
            },
            {
                name: "Araal"
            },
            {
                name: "Libas"
            },
            {
                name: "Al ‘Aqabah"
            },
            {
                name: "Longchiqiao"
            },
            {
                name: "Tessaoua"
            },
            {
                name: "Zagórnik"
            },
            {
                name: "Bāft"
            },
            {
                name: "Sumanding"
            },
            {
                name: "Pećigrad"
            },
            {
                name: "Maogang"
            },
            {
                name: "Rudky"
            },
            {
                name: "Seynod"
            },
            {
                name: "Komsomolsk"
            },
            {
                name: "Rochester"
            },
            {
                name: "Zhoushan"
            },
            {
                name: "Apartadó"
            },
            {
                name: "Toledo"
            },
            {
                name: "Sendangagung"
            },
            {
                name: "Shuangyang"
            },
            {
                name: "Jinggan"
            },
            {
                name: "Mokolo"
            },
            {
                name: "Matsubase"
            },
            {
                name: "El Porvenir"
            },
            {
                name: "Al Jubayhah"
            },
            {
                name: "Hengtanggang"
            },
            {
                name: "Shuitian"
            },
            {
                name: "Tagakpan"
            },
            {
                name: "Krasne"
            },
            {
                name: "Loga"
            },
            {
                name: "Wudong"
            },
            {
                name: "Borås"
            },
            {
                name: "Jatiklampok"
            },
            {
                name: "Sokhumi"
            },
            {
                name: "Dalun"
            },
            {
                name: "Krzęcin"
            },
            {
                name: "Nepomuceno"
            },
            {
                name: "Santo Amaro"
            },
            {
                name: "Mikhaylovka"
            },
            {
                name: "Sausa"
            },
            {
                name: "Vyshneye Dolgoye"
            },
            {
                name: "Korotych"
            },
            {
                name: "Rafael Hernandez Ochoa"
            },
            {
                name: "Catumbela"
            },
            {
                name: "Vuzenica"
            },
            {
                name: "Aparecida de Goiânia"
            },
            {
                name: "Guangchen"
            },
            {
                name: "Dubinino"
            },
            {
                name: "Velventós"
            },
            {
                name: "Ronov nad Doubravou"
            },
            {
                name: "Petani"
            },
            {
                name: "Gaogongdao"
            },
            {
                name: "Chư Ty"
            },
            {
                name: "Palmira"
            },
            {
                name: "Bayang"
            },
            {
                name: "Haveliān"
            },
            {
                name: "Port Saint Lucie"
            },
            {
                name: "Wucheng"
            },
            {
                name: "Pogag"
            },
            {
                name: "Mouriscas"
            },
            {
                name: "Karantaba"
            },
            {
                name: "Hồ Xá"
            },
            {
                name: "Limon"
            },
            {
                name: "Kungälv"
            },
            {
                name: "Kuybyshev"
            },
            {
                name: "Ficksburg"
            },
            {
                name: "Bojong"
            },
            {
                name: "Agios Dimitrios"
            },
            {
                name: "Manolo Fortich"
            },
            {
                name: "Venilale"
            },
            {
                name: "Cuchumbaya"
            },
            {
                name: "Ayapa"
            },
            {
                name: "Governor’s Harbour"
            },
            {
                name: "København"
            },
            {
                name: "Marulanda"
            },
            {
                name: "Muzhou"
            },
            {
                name: "Acacías"
            },
            {
                name: "Christchurch"
            },
            {
                name: "Nong Khai"
            },
            {
                name: "Buarcos"
            },
            {
                name: "Chambéry"
            },
            {
                name: "Montgomery"
            },
            {
                name: "Chicago"
            },
            {
                name: "Rēzekne"
            },
            {
                name: "Bagok"
            },
            {
                name: "Xinhua"
            },
            {
                name: "General Luna"
            },
            {
                name: "Hisings Kärra"
            },
            {
                name: "Stockholm"
            },
            {
                name: "Shilovo"
            },
            {
                name: "Santa Rosa"
            },
            {
                name: "Radnice"
            },
            {
                name: "Yanahuaya"
            },
            {
                name: "Zbůch"
            },
            {
                name: "Najin"
            },
            {
                name: "Hongchang"
            },
            {
                name: "Koper"
            },
            {
                name: "Libofshë"
            },
            {
                name: "Bang Bo District"
            },
            {
                name: "Pilcomay"
            },
            {
                name: "Drohiczyn"
            },
            {
                name: "Palma De Mallorca"
            },
            {
                name: "Ludbreg"
            },
            {
                name: "Skała"
            },
            {
                name: "Langob"
            },
            {
                name: "Quibal"
            },
            {
                name: "Barranquilla"
            },
            {
                name: "Koshigaya"
            },
            {
                name: "Ouanaminthe"
            },
            {
                name: "Mingshan"
            },
            {
                name: "Shahrīār"
            },
            {
                name: "Tumauini"
            },
            {
                name: "Marinići"
            },
            {
                name: "Jampang Tengah"
            },
            {
                name: "Pirassununga"
            },
            {
                name: "Açucena"
            },
            {
                name: "Phúc Yên"
            },
            {
                name: "Pocokan Satu"
            },
            {
                name: "Qianzhou"
            },
            {
                name: "Chadan"
            },
            {
                name: "Sadahayu"
            },
            {
                name: "Francisco I Madero"
            },
            {
                name: "Natonin"
            },
            {
                name: "Valencia"
            },
            {
                name: "Wenchang"
            },
            {
                name: "Sapataria"
            },
            {
                name: "San Pedro"
            },
            {
                name: "Ciawi"
            },
            {
                name: "Borzechów"
            },
            {
                name: "Siguinon"
            },
            {
                name: "Nueve de Julio"
            },
            {
                name: "Alto de la Estancia"
            },
            {
                name: "Yejia"
            },
            {
                name: "Kario"
            },
            {
                name: "Florentino Ameghino"
            },
            {
                name: "Sanxing"
            },
            {
                name: "Soasio"
            },
            {
                name: "Wilmington"
            },
            {
                name: "Opatovice nad Labem"
            },
            {
                name: "Jilong"
            },
            {
                name: "Haurpanggung"
            },
            {
                name: "Hövsan"
            },
            {
                name: "Peroguarda"
            },
            {
                name: "Alderetes"
            },
            {
                name: "Awilega"
            },
            {
                name: "Namasuba"
            },
            {
                name: "Gyōda"
            },
            {
                name: "Yanwo"
            },
            {
                name: "Pasirpengarayan"
            },
            {
                name: "Sulahan"
            },
            {
                name: "Edissiya"
            },
            {
                name: "Nueva Arica"
            },
            {
                name: "Mrzeżyno"
            },
            {
                name: "Tariji"
            },
            {
                name: "Cikuray"
            },
            {
                name: "Nazca"
            },
            {
                name: "Chatuchak"
            },
            {
                name: "Mawu"
            },
            {
                name: "Jembe Timur"
            },
            {
                name: "Adrasmon"
            },
            {
                name: "Jimsar"
            },
            {
                name: "Gunung Timur"
            },
            {
                name: "Ngorongoro"
            },
            {
                name: "Sundsvall"
            },
            {
                name: "Montpellier"
            },
            {
                name: "Mesógi"
            },
            {
                name: "Yangxiang"
            },
            {
                name: "Chongkan"
            },
            {
                name: "Lokavec"
            },
            {
                name: "El Bálsamo"
            },
            {
                name: "Khiv"
            },
            {
                name: "Hita"
            },
            {
                name: "Gornyye Klyuchi"
            },
            {
                name: "Meruge"
            },
            {
                name: "Battaramulla South"
            },
            {
                name: "Partenit"
            },
            {
                name: "Sai"
            },
            {
                name: "Al Minyā"
            },
            {
                name: "Baltiysk"
            },
            {
                name: "Mulhouse"
            },
            {
                name: "Sindou"
            },
            {
                name: "Yuantan"
            },
            {
                name: "Yokohama"
            },
            {
                name: "Sutton"
            },
            {
                name: "Fuenlabrada"
            },
            {
                name: "Jīt"
            },
            {
                name: "Nikopol"
            },
            {
                name: "Lidingö"
            },
            {
                name: "Sanhui"
            },
            {
                name: "Pardesiyya"
            },
            {
                name: "Bankeryd"
            },
            {
                name: "Qiaosi"
            },
            {
                name: "Přimda"
            },
            {
                name: "Temeke"
            },
            {
                name: "Dārchulā"
            },
            {
                name: "Cabinda"
            },
            {
                name: "Heshan"
            },
            {
                name: "Helin"
            },
            {
                name: "Esperanza"
            },
            {
                name: "Caleta Olivia"
            },
            {
                name: "‘Amd"
            },
            {
                name: "Lianyun"
            },
            {
                name: "Pato-o"
            },
            {
                name: "Červené Pečky"
            },
            {
                name: "Xingtan"
            },
            {
                name: "Huaxian"
            },
            {
                name: "Shibetsu"
            },
            {
                name: "Dubki"
            },
            {
                name: "Třinec"
            },
            {
                name: "Bantian"
            },
            {
                name: "Selat"
            },
            {
                name: "Teykovo"
            },
            {
                name: "Meudon"
            },
            {
                name: "Shanggu"
            },
            {
                name: "Sumoto"
            },
            {
                name: "Zinat"
            },
            {
                name: "Rathwire"
            },
            {
                name: "Ibitinga"
            },
            {
                name: "Koramlik"
            },
            {
                name: "Kremidivka"
            },
            {
                name: "Krynychky"
            },
            {
                name: "Paritaman"
            },
            {
                name: "Jalālābād"
            },
            {
                name: "Bojadła"
            },
            {
                name: "Kislyakovskaya"
            },
            {
                name: "Phước An"
            },
            {
                name: "Santo Rosario"
            },
            {
                name: "Choloma"
            },
            {
                name: "Waihi"
            },
            {
                name: "Nässjö"
            },
            {
                name: "Roma"
            },
            {
                name: "Longzui"
            },
            {
                name: "Tongzi"
            },
            {
                name: "Jiantianjie"
            },
            {
                name: "Thívai"
            },
            {
                name: "Balazar"
            },
            {
                name: "Louriceira"
            },
            {
                name: "Granica"
            },
            {
                name: "Sumbergebang"
            },
            {
                name: "Ragana"
            },
            {
                name: "San Miguel"
            },
            {
                name: "Otaru"
            },
            {
                name: "A-da-Gorda"
            },
            {
                name: "Lixin"
            },
            {
                name: "San Agustin"
            },
            {
                name: "Baisha"
            },
            {
                name: "Černožice"
            },
            {
                name: "Yaxi"
            },
            {
                name: "Nowogard"
            },
            {
                name: "Sanguinheira"
            },
            {
                name: "Luo’ao"
            },
            {
                name: "Geji"
            },
            {
                name: "Piteå"
            },
            {
                name: "Danirai"
            },
            {
                name: "Los Santos"
            },
            {
                name: "Serra de Água"
            },
            {
                name: "Biyan"
            },
            {
                name: "Laxey"
            },
            {
                name: "Rousínov"
            },
            {
                name: "Bobon"
            },
            {
                name: "Hepu"
            },
            {
                name: "Strel'na"
            },
            {
                name: "Rouyuan"
            },
            {
                name: "Bujanovac"
            },
            {
                name: "Yongqin"
            },
            {
                name: "Shashi"
            },
            {
                name: "Guangshun"
            },
            {
                name: "Longquan"
            },
            {
                name: "Sukadami"
            },
            {
                name: "San Antonio"
            },
            {
                name: "Fatuulan"
            },
            {
                name: "Tong’an"
            },
            {
                name: "Dinititi"
            },
            {
                name: "Shimen"
            },
            {
                name: "Balite"
            },
            {
                name: "Itsandra"
            },
            {
                name: "Akropong"
            },
            {
                name: "Daxing"
            },
            {
                name: "Rabat"
            },
            {
                name: "Hongshanyao"
            },
            {
                name: "Magdeburg"
            },
            {
                name: "Jargalant"
            },
            {
                name: "Xianan"
            },
            {
                name: "Matingain"
            },
            {
                name: "Las Palmas"
            },
            {
                name: "München"
            },
            {
                name: "Amboise"
            },
            {
                name: "Marzhing"
            },
            {
                name: "Causwagan"
            },
            {
                name: "Rogoza"
            },
            {
                name: "Qamdo"
            },
            {
                name: "Lipnik"
            },
            {
                name: "Dawei"
            },
            {
                name: "Kopen"
            },
            {
                name: "Laka"
            },
            {
                name: "La Huaca"
            },
            {
                name: "Guolemude"
            },
            {
                name: "Pocito"
            },
            {
                name: "Yuecheng"
            },
            {
                name: "Kisangani"
            },
            {
                name: "Yubilyeyny"
            },
            {
                name: "Anchau"
            },
            {
                name: "Dean"
            },
            {
                name: "Changqi"
            },
            {
                name: "Gaobu"
            },
            {
                name: "Luruaco"
            },
            {
                name: "Charlotte"
            },
            {
                name: "Zhonglong"
            },
            {
                name: "Malawag"
            },
            {
                name: "Ciorescu"
            },
            {
                name: "New Iloilo"
            },
            {
                name: "Masjed Soleymān"
            },
            {
                name: "Castedo"
            },
            {
                name: "Malilipot"
            },
            {
                name: "Maoyang"
            },
            {
                name: "Kitwe"
            },
            {
                name: "Zhuxi"
            },
            {
                name: "Guruafin"
            },
            {
                name: "Palalang"
            },
            {
                name: "Khust"
            },
            {
                name: "Cabanas de Viriato"
            },
            {
                name: "Oliveira"
            },
            {
                name: "Savonlinna"
            },
            {
                name: "Trubchevsk"
            },
            {
                name: "Damatulan"
            },
            {
                name: "Pirojpur"
            },
            {
                name: "Saint-Pierre-des-Corps"
            },
            {
                name: "Zhongcheng"
            },
            {
                name: "Pandansari"
            },
            {
                name: "Monte da Chaminé"
            },
            {
                name: "Néos Mylótopos"
            },
            {
                name: "Santa Clara"
            },
            {
                name: "Daitōchō"
            },
            {
                name: "Xiangshui"
            },
            {
                name: "Shkurinskaya"
            },
            {
                name: "Leon"
            },
            {
                name: "Laoxingchang"
            },
            {
                name: "Kurume"
            },
            {
                name: "Prusice"
            },
            {
                name: "Novaya Chigla"
            },
            {
                name: "Moriyama"
            },
            {
                name: "Janeng"
            },
            {
                name: "Carmen de Viboral"
            },
            {
                name: "Higashimurayama-shi"
            },
            {
                name: "Gelgaudiškis"
            },
            {
                name: "Gulao"
            },
            {
                name: "Banos"
            },
            {
                name: "Uddiawan"
            },
            {
                name: "Santarém"
            },
            {
                name: "Yunping"
            },
            {
                name: "Wangdian"
            },
            {
                name: "Málaga"
            },
            {
                name: "Bamenda"
            },
            {
                name: "Iwai"
            },
            {
                name: "Léchovo"
            },
            {
                name: "San Antonio Aguas Calientes"
            },
            {
                name: "Nggalak"
            },
            {
                name: "Longxian Chengguanzhen"
            },
            {
                name: "Novolugovoye"
            },
            {
                name: "Pabean"
            },
            {
                name: "Sujiazhuang"
            },
            {
                name: "Edinburgh of the Seven Seas"
            },
            {
                name: "Ojo de Agua"
            },
            {
                name: "Talalayivka"
            },
            {
                name: "Ampanihy"
            },
            {
                name: "Postmasburg"
            },
            {
                name: "Alzamay"
            },
            {
                name: "Dajin"
            },
            {
                name: "Nakhon Pathom"
            },
            {
                name: "Oljoq"
            },
            {
                name: "Qingfeng"
            },
            {
                name: "Quinarayan"
            },
            {
                name: "La Huerta"
            },
            {
                name: "Hostouň"
            },
            {
                name: "Yur’yev-Pol’skiy"
            },
            {
                name: "San Francisco"
            },
            {
                name: "Koga"
            },
            {
                name: "Hadakewa"
            },
            {
                name: "Oyo"
            },
            {
                name: "Qiqin"
            },
            {
                name: "Núi Sập"
            },
            {
                name: "Youhua"
            },
            {
                name: "Armentières"
            },
            {
                name: "Xilian"
            },
            {
                name: "Shakhta"
            },
            {
                name: "Kertosari"
            },
            {
                name: "Grenoble"
            },
            {
                name: "Ambohitrolomahitsy"
            },
            {
                name: "Libao"
            },
            {
                name: "Savigny-le-Temple"
            },
            {
                name: "Đắk Mâm"
            },
            {
                name: "Kaiama"
            },
            {
                name: "Apiaí"
            },
            {
                name: "Raša"
            },
            {
                name: "Beisijiazi"
            },
            {
                name: "Zeya"
            },
            {
                name: "Villefranche-sur-Mer"
            },
            {
                name: "Filipstad"
            },
            {
                name: "Desa Margaluyu"
            },
            {
                name: "Myhiya"
            },
            {
                name: "Georgiyevskaya"
            },
            {
                name: "Pargas"
            },
            {
                name: "Jindui"
            },
            {
                name: "Yakimovo"
            },
            {
                name: "Łomianki"
            },
            {
                name: "Siqu"
            },
            {
                name: "Toutuo"
            },
            {
                name: "Los Angeles"
            },
            {
                name: "Pantaibesar"
            },
            {
                name: "Kamaris"
            },
            {
                name: "Flor da Mata"
            },
            {
                name: "Quinta"
            },
            {
                name: "Jicomé"
            },
            {
                name: "Espinillo"
            },
            {
                name: "Simrishamn"
            },
            {
                name: "Ban Talat Yai"
            },
            {
                name: "Ntoum"
            },
            {
                name: "Velké Bílovice"
            }],
    })
}

module.exports = {
    insertDataCity
}