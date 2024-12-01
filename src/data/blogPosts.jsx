const blogPosts = [
  {
    id: 1,
    title: "Misterije Balkana: Priče iz prošlosti",
    description:
      "Otkrijte skrivene misterije Balkana i mračne tajne koje krije naša prošlost.",
    content: "Pogledajte listu najpoznatijih misterija sa Balkana.",
    author: "Crni Dečak",
    date: "November 30, 2024",
    movies: [
      {
        title: "Crna Smrt na Dunavu – Vila iz Golubačke Tvrđave",
        image: "../images/golubac.jpg", // Slika za ovu misteriju
        description:
          "Golubačka tvrđava na obali Dunava vekovima krije zlokobnu legendu o Crnoj Vili. Prema predanju, vila je mamila vojnike i mornare u smrt, svojim jezivim šapatima. Njena pojava, vezana za noćne prizore iznad tvrđave, i danas izaziva strah kod meštana. Glasovi i neobjašnjive pojave ostaju neotkrivena misterija Dunava."
      },
      {
        title: "Zagonetne svetlosti nad Rtanj Planinom",
        image: "../images/rtanj.jpg", // Slika za ovu misteriju
        description:
          "Rtanj planina je poznata po neobjašnjivim svetlima koja se pojavljuju na njenom vrhu. Prema verovanjima, Rtanj nije obična planina već drevna piramida sa skrivenim moćima. Svetlosti koje lete nad njom povezuju se sa teorijama o vanzemaljskim aktivnostima i skrivenim energijama, a brojni turisti dolaze u potrazi za odgovorima."
      },
      {
        title: "Prokleta Dolina – Misterija Zavičaja Karadžića",
        image: "../images/dolina.jpg", // Slika za ovu misteriju
        description:
          "U blizini zavičaja Vuka Karadžića, u Tršiću, nalazi se mesto koje meštani nazivaju 'Prokleta Dolina'. Prema pričama, ljudi su nestajali na ovom mestu bez traga, a zvuci koraka i neobične pojave i dalje teraju strah u kosti svima koji prolaze kroz ovu misterioznu dolinu. Zloslutni događaji iz prošlosti nikada nisu objašnjeni."
      },
      {
        title: "Vampirsko selo Zarožje",
        image: "../images/zarozje.jpg", // Slika za ovu misteriju
        description:
          "Selo Zarožje je postalo sinonim za legende o vampiru Savi Savanoviću, koji je navodno ubijao ljude u mlinu na reci. Priča o ovom vampiru vekovima kruži među meštanima, a mlin je odavno napušten. Ipak, retki su oni koji se usuđuju da priđu mlinu noću, verujući da vampir još uvek vreba iz tame."
      },
      {
        title: "Ukleta pećina na planini Velebit",
        image: "../images/pecina.jpg", // Slika za ovu misteriju
        description:
          "Na planini Velebit nalazi se pećina koju meštani smatraju prolazom u drugi svet. Oni koji su se usudili da uđu dublje u pećinu nikada se nisu vratili, a zvuci i neobjašnjive pojave koje dolaze iz pećine izazivaju jezu. Iako je ovo mesto obavijeno mitovima, mnogi veruju da pećina krije mračnu tajnu prošlosti."
      }
    ]
  },
  {
    id: 2,
    title: "Top 5 Horor Filmova Koje Morate Pogledati",
    description:
      "Kompilacija najstrašnijih horor filmova koji će vas držati budnima celu noć.",
    content: "Pogledajte listu horor filmova koje smo odabrali za vas.",
    author: "Crni Dečak",
    date: "November 30, 2024",
    movies: [
      {
        title: "The Exorcist (1973)",
        image: "../images/exorcist.jpg", // Slika za ovaj film
        description:
          "Kultni horor film *The Exorcist* režisera Williama Friedkina, zasnovan je na istoimenom romanu Williama Petera Blattyja. Radnja prati mladu devojčicu koju je opsedao demon, a njena majka traži pomoć sveštenika kako bi izveli egzorcizam. Film je poznat po zastrašujućoj atmosferi, uznemirujućim scenama i izuzetnim performansima, a često se smatra jednim od najstrašnijih horor filmova svih vremena. Scena egzorcizma, hladna soba, i preokret glave devojčice ostali su duboko ukorenjeni u horor kulturi."
      },
      {
        title: "The Conjuring (2013)",
        image: "../images/conjuring.jpg",
        description:
          "The Conjuring* je film inspirisan stvarnim događajima iz života istraživača paranormalnih aktivnosti, Eda i Lorraine Warren. Radnja se odvija u kući opsednutoj natprirodnim silama, a film istražuje okultne sile, demone i duhove. Režiser James Wan uspeo je da stvori napetu i jezivu atmosferu, s odličnom upotrebom zvuka i vizualnih efekata koji drže gledaoce na ivici stolice. Ovaj film je postao preteča čitavog univerzuma *Conjuring* i definitivno je nezaobilazan za ljubitelje horor žanra."
      },
      {
        title: "Hereditary (2018)",
        image: "../images/hereditary.jpg",
        description:
          "Režiran od strane Arija Astera, *Hereditary* je moderan horor film koji kombinuje elemente porodične drame i nadprirodnog horora. Radnja prati porodicu koja se suočava s nizom tragičnih događaja i otkriva mračnu tajnu iz prošlosti. Film istražuje teme gubitka, tuge, i nasleđa, sa uznemirujućim slikama i jezivom atmosferom koja raste tokom čitavog trajanja filma. Performans Toni Collette u ulozi majke je posebno hvaljen, a *Hereditary* je postao prekretnica u modernom hororu zbog svog inovativnog pristupa."
      },
      {
        title: "The Babadook (2014)",
        image: "../images/babadook.jpg", // Slika za ovaj film
        description:
          "The Babadook* je australski psihološki horor film koji istražuje tugu i traumu kroz prizmu natprirodnog zla. Režiran od strane Jennifer Kent, film prati majku i njenog sina koji otkrivaju sablasnu knjigu o čudovištu Babadook. Kako se napetost između njih dvoje pojačava, tako i Babadook postaje sve prisutniji u njihovim životima. Film se ističe zbog svoje emotivne dubine i simbolike, istražujući mentalno zdravlje kroz metaforu horora. Zastrašujući i dirljiv, *The Babadook* ostavlja snažan utisak na gledaoce."
      },
      {
        title: "Insidious (2010)",
        image: "../images/insidious.jpg", // Slika za ovaj film
        description:
          "Insidious je horor film koji kombinuje elemente natprirodnog i psihološkog straha. Režiran od strane Jamesa Wana, film prati porodicu Lambert, koja se suočava sa misterioznim događajima nakon što njihov sin Dalton padne u komu. Ubrzo otkrivaju da je Dalton zarobljen u paralelnoj dimenziji poznatoj kao The Further, dok natprirodne sile pokušavaju da preuzmu njegovo telo. Film je postao poznat po svojoj atmosferi koja stvara tenziju kroz tišinu i iznenadne, jezive trenutke. Insidious istražuje teme astralnih projekcija, duhova i paralelnih svetova, a uz upečatljive vizualne efekte i zastrašujuće scene, postao je jedan od najuticajnijih horor filmova moderne ere."
      }
    ]
  },
  {
    id: 3,
    title: "Horor Knjige koje Morate Pročitati",
    description:
      "Lista najstrašnijih horor knjiga koje će vas držati budnima noću.",
    content: "Pogledajte preporučene horor knjige koje morate pročitati.",
    author: "Crni Dečak",
    date: "November 30, 2024",
    movies: [
      {
        title: "It (To) - Stephen King",
        image: "../images/to.JPG", // Slika za ovu knjigu
        description:
          "Roman *It* prati grupu prijatelja iz grada Derry, koji se suočavaju s mračnim entitetom koji uzima oblik klauna Pennywisa. Ova knjiga istražuje teme straha, prijateljstva i kako prošlost može uticati na sadašnjost. King majstorski gradi napetost kroz kompleksne likove i bogate opise, ostavljajući čitatelja na ivici stolice."
      },
      {
        title: "The Shining (Isijavanje) - Stephen King",
        image: "../images/isijavanje.JPG", // Slika za ovu knjigu
        description:
          "U romanu *The Shining*, Jack Torrance postaje zimovatelj u napuštenom hotelu Overlook. Kako se zima produbljuje, hotel otkriva svoje mračne tajne, a Jackov um polako pada u ludilo. Kingov klasik istražuje teme izolacije, porodičnih odnosa i moći zla. Ova knjiga je obavezna za sve ljubitelje psihološkog horora."
      },
      {
        title:
          "The Haunting of Hill House (Ukleta kuća na brdu) - Shirley Jackson",
        image: "../images/ukleta-kuca.jpg", // Slika za ovu knjigu
        description:
          "Roman *The Haunting of Hill House* prati grupu istraživača koji dolaze u ukletu kuću kako bi istražili natprirodne pojave. Shirley Jackson stvara napetu atmosferu kroz psihološke i paranormalne elemente, istražujući teme straha i ljudske psihe. Ova knjiga je jedan od najznačajnijih dela u horor književnosti."
      },
      {
        title: "Bird Box (Ptica u kavezu) - Josh Malerman",
        image: "../images/ptica.jpg", // Slika za ovu knjigu
        description:
          "U romanu *Bird Box*, svet je pogođen misterioznim bićem koje izaziva ljude da se ubiju ukoliko ga vide. Glavna junakinja, Malorie, mora da prođe kroz opasnosti s dvoje dece, svi sa povezom na očima. Ova knjiga istražuje teme preživljavanja, straha i ljudske izdržljivosti, a Malermanov stil pisanja ostavlja snažan utisak."
      },
      {
        title: "The Silence of the Lambs (Kad jaganjci utihnu) - Thomas Harris",
        image: "../images/jaganjci.jpg", // Slika za ovu knjigu
        description:
          "Roman *The Silence of the Lambs* prati mladu FBI agentkinju Clarice Starling koja traži pomoć od zatvorenog kanibala, doktora Hannibala Lectera, kako bi uhvatila serijskog ubicu. Harris majstorski kombinuje psihološki horor i kriminalistički triler, istražujući ljudsku prirodu i mračnu psihu."
      }
    ]
  },
  {
    id: 4,
    title: "Top 5 Horor Serija",
    description:
      "Za ljubitelje jezivih priča i napetosti, ovo su serije koje će vas držati budnima noću.",
    content:
      "Najbolje horor serije koje morate pogledati ako ste fan paranormalnih priča i zastrašujućih misterija.",
    author: "Crni Dečak",
    date: "November 30, 2024",
    movies: [
      {
        title: "Stranger Things",
        image: "../images/stranger_things.jpg",
        description:
          "Ova serija nas vodi u mali gradić Hawkins, gde misteriozni nestanak dečaka otkriva postojanje paralelnog sveta nazvanog 'Upside Down'. Serija kombinuje naučnu fantastiku, horor i nostalgiju za 80-im godinama, dok grupa dece i njihovih porodica pokušava da otkrije istinu iza neobjašnjivih pojava i borbi sa natprirodnim silama. Svaka sezona donosi sve mračnije zaplete i neizvesnost koja vas tera da gledate epizodu za epizodom."
      },
      {
        title: "The Haunting of Hill House",
        image: "../images/haunting_hill_house.jpg",
        description:
          "Porodica Crain seli se u staru kuću s namerom da je renovira i proda, ali ubrzo počinju da doživljavaju zastrašujuće natprirodne pojave. Godinama kasnije, članovi porodice suočavaju se s traumama iz detinjstva dok otkrivaju tajne uklete kuće. Serija kombinuje duboke emocionalne priče s jezivim trenucima, stvarajući jedno od najnezaboravnijih iskustava u horor žanru."
      },
      {
        title: "American Horror Story",
        image: "../images/american_horror_story.jpg",
        description:
          "Antologijska serija u kojoj svaka sezona donosi potpuno novu priču i likove. Od ukletih kuća, cirkusa i hotela, do veštica i kultova, svaka sezona istražuje mračne aspekte ljudske prirode i natprirodne pretnje. Sa neverovatnom glumačkom ekipom i vizuelno upečatljivim scenama, 'American Horror Story' nudi horor za sve ukuse i nikada ne prestaje da iznenađuje svojom originalnošću."
      },
      {
        title: "Midnight Mass",
        image: "../images/midnight_mass.jpg",
        description:
          "Izolovano ostrvo Crockett Island postaje centar neobjašnjivih čuda i zastrašujućih događaja nakon dolaska harizmatičnog sveštenika. Serija istražuje teme vere, greha i iskupljenja, dok zajednica biva podeljena između nade i užasa. Sa sporim, ali intenzivnim razvojem priče, 'Midnight Mass' pruža duboko uznemirujuće i emotivno iskustvo koje se pamti dugo nakon završetka."
      },
      {
        title: "The Walking Dead",
        image: "../images/walking_dead.jpg",
        description:
          "Svet koji je zahvatio apokaliptični virus pretvorio je većinu populacije u zombije, a mala grupa preživelih pokušava da pronađe način za opstanak. Dok se suočavaju s konstantnim pretnjama zombija, ljudski sukobi postaju najveća prepreka njihovom opstanku. Serija kombinuje visceralne horor momente s dubokim karakterizacijama i moralnim dilemama, istražujući koliko daleko su ljudi spremni da idu da bi preživeli."
      }
    ]
  },
  {
    id: 5,
    title: "Top 5 Horor Filmova Zasnovanih na Istinitim Događajima",
    description:
      "Ako tražiš horor filmove koji će te još više uplašiti jer se temelje na stvarnim događajima, ovo su filmovi koje moraš pogledati.",
    content:
      "Horor filmovi zasnovani na stvarnim događajima donose dodatnu napetost i strah. Saznajte više o jezivim pričama koje su inspirisale neka od najstrašnijih filmskih ostvarenja.",
    author: "Crni Dečak",
    date: "November 30, 2024",
    movies: [
      {
        title: "The Conjuring",
        image: "../images/conjuring.jpg",
        description:
          "Film prati paranormalne istražitelje Ed i Lorraine Warren koji istražuju ukletu farmu porodice Perron. Zasnovano na stvarnim događajima, film prikazuje jezive momente i natprirodne sile koje su proganjale ovu porodicu, uključujući neobjašnjive zvuke, pojavu duhova i uznemirujuće vizije."
      },
      {
        title: "The Amityville Horror",
        image: "../images/amityville.jpg",
        description:
          "Film zasnovan na stvarnim događajima koji su se dogodili u kući u Amityvilleu. Porodica Lutz se preselila u kuću nakon što je prethodno počinjen masakr, a ubrzo su počeli da doživljavaju neobjašnjive i zastrašujuće pojave. Ovaj slučaj je postao jedan od najpoznatijih u istoriji paranormalnih istraživanja."
      },
      {
        title: "The Haunting in Connecticut",
        image: "../images/haunting_connecticut.jpg",
        description:
          "Ovaj film prati porodicu Snedeker koja se preselila u kuću u Connecticutu, samo da bi otkrila da je kuća nekada bila mrtvačnica. Serija paranormalnih događaja, od pomeranja predmeta do kontakta sa duhovima, natjeraće vas da se zapitate šta je stvarno, a šta je izmišljeno."
      },
      {
        title: "The Exorcism of Emily Rose",
        image: "../images/exorcism_emily.jpg",
        description:
          "Film baziran na stvarnom slučaju egzorcizma Anneliese Michel, mlade žene iz Nemačke koja je preminula tokom pokušaja egzorcizma. Film istražuje njenu strašnu priču kroz sudski proces, u kojem su sveštenici optuženi za njenu smrt, dok se otkriva duboka vera, strah i mračna stvarnost."
      },
      {
        title: "The Texas Chainsaw Massacre",
        image: "../images/texas_chainsaw.jpg",
        description:
          "Ovaj film, iako fikcionalizovan, inspirisan je stvarnim događajem vezanim za Ed Geina, serijskog ubicu koji je ubijao i radio jezive stvari sa telima svojih žrtava. Film postavlja temelje za horor žanr i postao je ikona zbog svoje mračne i jezive atmosfere."
      }
    ]
  },
  {
    id: 7,
    title: "Top 5 Najboljih Horor Igra",
    description:
      "Za ljubitelje horor žanra, ovo su igre koje vas neće samo uplašiti, već će vas potpuno uvući u svoju jezivu atmosferu.",
    content:
      "Ove horor igre smatraju se najboljima u industriji zbog svoje napete atmosfere, strašnih likova i nevjerojatnih priča koje ostavljaju dubok utisak na igrače.",
    author: "Crni Dečak",
    date: "November 30, 2024",
    movies: [
      {
        title: "Resident Evil 2 (Remake)",
        image: "../images/resident_evil_2.jpg",
        description:
          "Jedna od najstrašnijih i najvoljenijih horor igara, Resident Evil 2 (Remake) vraća nas u Raccoon City, gde igramo kao Leon Kennedy i Claire Redfield, koji pokušavaju da prežive epidemiju zombija. Igra kombinuje napetu atmosferu, odličnu priču i nevjerojatne likove, postavljajući nove standarde za horor igre."
      },
      {
        title: "Bloodborne",
        image: "../images/bloodborne.jpg",
        description:
          "U ovoj igri prepunoj grotesknih čudovišta, igrači preuzimaju ulogu lovca koji istražuje grad Yharnam, prepun jezivih bića i tajni. Bloodborne je poznat po svojoj izuzetnoj atmosferi, zahtevnoj borbi i zagonetnim pričama, koje stvaraju horor kroz napetost i neizvesnost."
      },
      {
        title: "Outlast",
        image: "../images/outlast.jpg",
        description:
          "Igra koja vas ostavlja bez reči. Igrači preuzimaju ulogu novinara Milesa Upshura, koji istražuje napuštenu mentalnu instituciju gde su se dogodili strašni eksperimenti. Outlast je prepun napetih trenutaka, zastrašujućih bića i neprikosnovene atmosfere koja vas tera da se krijete umesto da se borite."
      },
      {
        title: "Amnesia: The Dark Descent",
        image: "../images/amnesia.jpg",
        description:
          "Amnesia je klasična horor igra koja koristi psihološki horor da stvori strah kroz zagonetke, misterije i strašne likove. Glavni lik, Daniel, budi se u napuštenom zamku, gubi se u vlastitim sećanjima i mora da istraži tamne tajne koje se kriju u dvorcu. Igra pruža snažan emocionalni utisak kroz svoju atmosferu i horor elemente."
      },
      {
        title: "The Last of Us Part II",
        image: "../images/last_of_us_2.jpg",
        description:
          "Iako nije tradicionalna horor igra, The Last of Us Part II pruža nevjerojatnu napetost i emocije kroz svoj post-apokaliptični svet. Igra igrača vodi kroz zaraženi svet, ispunjen opasnostima i opasnim stvorenjima, dok se suočava sa dubokim moralnim dilemama i emotivnim gubicima. Ovaj naslov je istovremeno napet, emotivan i zastrašujući."
      }
    ]
  }
];

export default blogPosts;
