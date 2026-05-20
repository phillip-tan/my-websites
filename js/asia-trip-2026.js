/* ─── COLORS ─── */
const COLORS = {
  korea:     '#5b7fa6',
  china:     '#c9622f',
  japan:     '#d4596a',
  vietnam:   '#5a9e6f',
  cambodia:  '#7b6fa0',
  bangkok:   '#c4a84f',
  chiangmai: '#d4bc6a'
};

const FLAGS = {
  korea: '🇰🇷', china: '🇨🇳', japan: '🇯🇵',
  vietnam: '🇻🇳', cambodia: '🇰🇭', bangkok: '🇹🇭', chiangmai: '🇹🇭'
};

const COUNTRY_LABELS = {
  korea: 'Korea', china: 'China', japan: 'Japan',
  vietnam: 'Vietnam', cambodia: 'Cambodia', bangkok: 'Thailand', chiangmai: 'Thailand'
};

/* ─── STOPS (ordered = route order = marker number) ─── */
const STOPS = [
  { id:'seoul',     num:1,  country:'korea',     name:'Seoul',            nights:11, lat:37.5172, lng:127.0473, dates:'Sep 26 – Oct 7',  note:'Gangnam procedures + exploring. Best September weather in East Asia. No visa required.',
    vibe:'Skincare, cafes & city exploring', weather:'☀️ 72°F · dry' },
  { id:'beijing',   num:2,  country:'china',     name:'Beijing',          nights:3,  lat:39.9042, lng:116.4074, dates:'Oct 8 – 11',      note:'Great Wall, Forbidden City, hutongs, Summer Palace. Arriving after Golden Week — no crowds.',
    vibe:'Imperial history, Great Wall & hutongs', weather:'🌤️ 61°F · clear' },
  { id:'zjj',       num:3,  country:'china',     name:'Zhangjiajie',      nights:3,  lat:29.1171, lng:110.4792, dates:'Oct 11 – 14',     note:'Avatar mountains, Bailong elevator, hiking. Post-Golden Week, crystal clear skies. Two full days to cover Yuanjiajie plateau and Tianmen Mountain.',
    vibe:'Avatar mountains & serious hiking', weather:'🌤️ 64°F · mild' },
  { id:'chongqing', num:4,  country:'china',     name:'Chongqing',        nights:2,  lat:29.5630, lng:106.5516, dates:'Oct 14 – 16',     note:'Cyberpunk vertical city built into cliffsides. Neon bridges, authentic hot pot.',
    vibe:'Cyberpunk city built into cliffs', weather:'⛅ 68°F · overcast' },
  { id:'chengdu',   num:5,  country:'china',     name:'Chengdu',          nights:2,  lat:30.5728, lng:104.0668, dates:'Oct 16 – 18',     note:'Giant pandas, Sichuan teahouses, dan dan noodles.',
    vibe:'Giant pandas & Sichuan teahouse culture', weather:'⛅ 64°F · misty' },
  { id:'guangzhou', num:6,  country:'china',     name:'Guangzhou',        nights:2,  lat:23.1291, lng:113.2644, dates:'Oct 18 – 20',     note:'Dim sum capital of the world. Cantonese food, Shamian Island, Pearl River delta. Exit city → fly Osaka.',
    vibe:'Dim sum capital & Pearl River vibes', weather:'🌤️ 77°F · warm & clear' },
  { id:'osaka',     num:7,  country:'japan',     name:'Osaka',            nights:30, lat:34.6937, lng:135.5023, dates:'Oct 20 – Nov 19', note:'Home base with Jose. One full month. Neighborhoods, food, cafes, AI deep work. Day trips to Kyoto, Nara, Hiroshima.',
    vibe:'Japanese immersion, remote work & Pokémon', weather:'🍂 63°F · autumn foliage' },
  { id:'hcmc',      num:8,  country:'vietnam',   name:'Ho Chi Minh City', nights:4,  lat:10.8231, lng:106.6297, dates:'Nov 20 – 24',     note:'Street food, Ben Thanh market, Cu Chi tunnels, Mekong day trip. First time.',
    vibe:'Street food, history & first-time Vietnam', weather:'☀️ 82°F · dry season' },
  { id:'danang',    num:9,  country:'vietnam',   name:'Da Nang / Huế',    nights:2,  lat:16.0471, lng:108.2068, dates:'Nov 24 – 26',     note:'Weather-dependent: Da Nang for Hoi An access (30 min south), or Huế for the imperial citadel if central Vietnam is too wet.',
    vibe:'Da Nang → Hoi An, or Huế → imperial citadel', weather:'🌧️ 77°F · rainy season (check forecast)' },
  { id:'phnompenh', num:10, country:'cambodia',  name:'Phnom Penh',       nights:3,  lat:11.5564, lng:104.9282, dates:'Nov 26 – Nov 29', note:'Royal Palace, Silver Pagoda, Tuol Sleng Genocide Museum, riverside night market. First stop in Cambodia.',
    vibe:'Royal city, dark history & Mekong riverfront', weather:'☀️ 84°F · dry season' },
  { id:'siemreap',  num:11, country:'cambodia',  name:'Siem Reap',        nights:3,  lat:13.3633, lng:103.8564, dates:'Nov 29 – Dec 2',  note:'Angkor Wat at sunrise, Angkor Thom + the Bayon, Ta Prohm jungle ruins.',
    vibe:'Angkor Wat at sunrise — unmissable', weather:'☀️ 82°F · dry season' },
  { id:'bangkok',   num:12, country:'bangkok',   name:'Bangkok',          nights:5,  lat:13.7563, lng:100.5018, dates:'Dec 2 – 6',       note:'Pokémon Center Bangkok, Wat Pho, Wat Arun, Chatuchak market.',
    vibe:'Pokémon Center, temples & street food', weather:'☀️ 84°F · peak season' },
  { id:'chiangmai', num:13, country:'chiangmai', name:'Chiang Mai',       nights:30, lat:18.7883, lng:98.9853,  dates:'Dec 7 – Jan 6',   note:'Soul-searching base. World-class cafes, coworking, mountain temples.',
    vibe:'Expat base, remote work & soul-searching', weather:'☀️ 72°F · coolest & driest' },
];

/* Day trips (no city page, popup only) */
const DAY_TRIPS = [
  { country:'japan', name:'Kyoto',     lat:35.0116, lng:135.7681, note:'Day trip — 15 min by shinkansen from Osaka' },
  { country:'japan', name:'Nara',      lat:34.6851, lng:135.8048, note:'Day trip — deer park, easy half-day from Osaka' },
  { country:'japan', name:'Hiroshima', lat:34.3853, lng:132.4553, note:'Day trip — ~1.5hr, one of the most powerful visits in Japan' },
];

/* ─── CITY PAGE DATA ─── */
/* img: full Wikimedia Commons URL or null (shows emoji fallback) */
const CITY_PAGES = {
  seoul: {
    country:'korea', dates:'Sep 26 – Oct 7 · 11 nights', tagline:'Where the procedure begins and the trip opens.',
    highlights:[
      { name:'Gangnam Beauty Belt', emoji:'💉',
        img:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Gangnam-gu_seoul_tower.jpg/960px-Gangnam-gu_seoul_tower.jpg',
        desc:"Gangnam-daero and Apgujeong-ro are lined with world-class aesthetic clinics — masseter botox, pico laser, RF microneedling. English-speaking staff, transparent pricing at 30–50% of US rates. Book consultations in the first two days." },
      { name:'Gyeongbokgung Palace', emoji:'🏯',
        img:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Gyeongbokgung_Palace_Geunjeongjeon.jpg/960px-Gyeongbokgung_Palace_Geunjeongjeon.jpg',
        desc:"The main Joseon dynasty palace, reconstructed in full. The Changing of the Guard ceremony runs twice daily. Bukchon Hanok Village of traditional courtyard houses is a 10-minute walk north." },
      { name:'Bukhansan National Park', emoji:'⛰️',
        img:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Bugaksan_from_Bukhansan.jpg/960px-Bugaksan_from_Bukhansan.jpg',
        desc:"Granite ridgelines rising directly out of the city to 836m. Well-marked trails, pagodas on the summits, and views over the entire Seoul basin. A 30-min subway ride from Gangnam. Perfect for recovery-day light hiking." },
      { name:'Yeonnam-dong Cafes', emoji:'☕',
        img:null,
        desc:"Seoul's most dense cafe neighborhood — converted hanoks, specialty roasters, and design studios packed into a single walkable district. Excellent wifi. The perfect base for laptop work during recovery days." },
    ]
  },
  beijing: {
    country:'china', dates:'Oct 8 – 12 · 4 nights', tagline:"China's imperial heartland",
    highlights:[
      { name:'Great Wall of China', emoji:'🏯',
        img:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Badaling_China_Great-Wall-of-China-01.jpg/960px-Badaling_China_Great-Wall-of-China-01.jpg',
        desc:"Mutianyu section is the move — less crowded, fully restored, stunning ridgeline hikes. Go first thing in the morning." },
      { name:'Forbidden City', emoji:'🏛️',
        img:'https://upload.wikimedia.org/wikipedia/commons/f/f3/Beijing%2C_Forbidden_City%2C_Hall_of_Supreme_Harmony_%286170352582%29.jpg',
        desc:"980 buildings, 8,707 rooms. The world's largest palace complex. Massive and genuinely overwhelming." },
      { name:'Hutong Alleys', emoji:'🛺',
        img:'https://upload.wikimedia.org/wikipedia/commons/f/f9/Beijingcourtyard1.jpg',
        desc:"Narrow courtyard neighborhoods north of the palace — the real Beijing that's been here for 700 years." },
      { name:'Summer Palace', emoji:'🌿',
        img:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Kunming_Lake_%28Summer_Palace%2C_Beijing%29_in_summer.JPG/960px-Kunming_Lake_%28Summer_Palace%2C_Beijing%29_in_summer.JPG',
        desc:"Imperial garden on Kunming Lake. Covered promenades, marble boat, and a completely different pace. Worth a full afternoon." },
    ]
  },
  zjj: {
    country:'china', dates:'Oct 11 – 14 · 3 nights', tagline:'The mountains that inspired Avatar',
    highlights:[
      { name:'Tianzi Mountain', emoji:'⛰️',
        img:'https://upload.wikimedia.org/wikipedia/commons/7/77/1_tianzishan_wulingyuan_zhangjiajie_2012.jpg',
        desc:"The towering sandstone pillars that inspired Pandora's Hallelujah Mountains. Mist rolls through at dawn — worth the early wake-up." },
      { name:'Bailong Elevator', emoji:'🛗', img:null,
        desc:"World's tallest outdoor elevator at 326m — glass-sided, running straight up a cliff face. More thrilling than it sounds." },
      { name:'Tianmen Mountain', emoji:'🌫️', img:null,
        desc:"Glass-bottomed walkway pinned to a clifftop 1,400m up. Below: nothing. Reached by the world's longest cable car." },
      { name:'Forest Park Trails', emoji:'🥾', img:null,
        desc:"Hike the ridgelines between pillar formations. Best in morning mist before tour groups show up. Carry snacks." },
    ]
  },
  chongqing: {
    country:'china', dates:'Oct 15 – 18 · 3 nights', tagline:'The city that looks like a Cyberpunk city',
    highlights:[
      { name:'Hongya Cave', emoji:'🌆',
        img:'https://upload.wikimedia.org/wikipedia/commons/8/86/Hongya_Cave_20180520.jpg',
        desc:"11-story stacked cliffside complex lit up in neon at night. Restaurants, bars, and the insane view over the river. Go after dark." },
      { name:'Chongqing Hot Pot', emoji:'🫕',
        img:'https://upload.wikimedia.org/wikipedia/commons/c/c6/Chongqing_Hot_Pot.jpg',
        desc:"The original. Numbing Sichuan peppercorn broth with everything cooked tableside. This is where the dish was invented — don't skip it." },
      { name:'Liziba Monorail', emoji:'🚝', img:null,
        desc:"A metro line that passes directly through floors 6–8 of a residential tower. The residents just live with it. Wild urban engineering." },
      { name:'Yangtze Riverfront', emoji:'🌉',
        img:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Chongqing_Skyline_At_Night.png/960px-Chongqing_Skyline_At_Night.png',
        desc:"The city stacks up sheer cliffs above two rivers meeting. Best seen at dusk from the Nanbin Road promenade." },
    ]
  },
  chengdu: {
    country:'china', dates:'Oct 18 – 21 · 3 nights', tagline:'Pandas, teahouses, and Sichuan fire',
    highlights:[
      { name:'Giant Panda Base', emoji:'🐼',
        img:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Panda_eating_bamboo_in_Panda_Base.jpg/960px-Panda_eating_bamboo_in_Panda_Base.jpg',
        desc:"The world's best giant panda conservation center. Over 80 pandas across the facility. Go at 8am — they're most active feeding in the morning." },
      { name:'Sichuan Hot Pot', emoji:'🌶️',
        img:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Dandan_noodles_%28%E6%93%94%E6%93%94%E9%BA%B5%29.jpg/960px-Dandan_noodles_%28%E6%93%94%E6%93%94%E9%BA%B5%29.jpg',
        desc:"Dan dan noodles, mapo tofu, and the real Chengdu hot pot. The Sichuan peppercorn numbs your lips in the best possible way." },
      { name:'Jinli Old Street', emoji:'🏮',
        img:'https://upload.wikimedia.org/wikipedia/commons/d/de/ChengduJinli.jpg',
        desc:"Lantern-lit pedestrian street with snacks, tea stalls, and occasional Sichuan opera face-changing performances." },
      { name:'Teahouse Culture', emoji:'🍵', img:null,
        desc:"Chengdu's parks fill with locals playing mahjong, getting ear-cleaning, and drinking tea all day. Sit down and join them." },
    ]
  },
  guangzhou: {
    country:'china', dates:'Oct 18 – 20 · 2 nights', tagline:'The dim sum capital of the world',
    highlights:[
      { name:'Yum Cha Breakfast', emoji:'🥟',
        img:'https://upload.wikimedia.org/wikipedia/commons/3/30/Dim_Sum_Steam_Baskets_by_tracyhunter_in_HK.jpg',
        desc:"Guangzhou invented dim sum. The morning tea ritual here is serious — locals arrive at 6am for the best trolleys. Order everything." },
      { name:'Canton Tower', emoji:'📡',
        img:'https://upload.wikimedia.org/wikipedia/commons/7/79/Canton_tower_in_asian_games_opening_ceremony.jpg',
        desc:"600m twisting lattice tower. The observation deck gives you all of the Pearl River Delta spread out below." },
      { name:'Shamian Island', emoji:'🌳',
        img:'https://upload.wikimedia.org/wikipedia/commons/f/f2/Our_Lady_of_Lourdes_Chapel.jpg',
        desc:"Quiet colonial-era island of French and British concession buildings. Leafy, calm, barely any tourists — a total contrast to central GZ." },
      { name:'Night Food Markets', emoji:'🍜', img:null,
        desc:"Late-night roast goose joints, rice noodle soup stalls, and barbecue spots. Eat like a local and stay out late." },
    ]
  },
  shanghai: {
    country:'china', dates:'Oct 21 – 25 · 4 nights', tagline:'The future and the past, side by side',
    highlights:[
      { name:'The Bund', emoji:'🌇',
        img:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Pudong_Shanghai_November_2017_HDR_panorama.jpg/960px-Pudong_Shanghai_November_2017_HDR_panorama.jpg',
        desc:"The colonial waterfront promenade, facing the Pudong skyline across the river. Iconic in daylight. Transcendent at night." },
      { name:'French Concession', emoji:'🌿',
        img:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Yongkang_Road_Shanghai_11.jpg/960px-Yongkang_Road_Shanghai_11.jpg',
        desc:"Tree-lined streets with boutiques, cafes, and art deco architecture. Best neighborhood in Shanghai for aimless wandering." },
      { name:'Pudong Skyline', emoji:'🏙️', img:null,
        desc:"Oriental Pearl, Shanghai Tower, Jin Mao — the most photogenic skyline in Asia, lit up every night." },
      { name:'Tianzifang Lanes', emoji:'☕',
        img:'https://upload.wikimedia.org/wikipedia/commons/a/a6/Tianzifangbyday.jpg',
        desc:"Narrow alleyway district of galleries, coffee shops, and boutiques. Good contrast to the grand scale of everything else." },
    ]
  },
  osaka: {
    country:'japan', dates:'Oct 20 – Nov 19 · 30 nights', tagline:'Home base. Eat everything.',
    highlights:[
      { name:'Dotonbori', emoji:'🌃',
        img:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Dotonbori%2C_Osaka%2C_at_night%2C_November_2016.jpg/960px-Dotonbori%2C_Osaka%2C_at_night%2C_November_2016.jpg',
        desc:"The neon canal district. Eat takoyaki under the glowing Glico runner sign. Loud, chaotic, perfect at midnight." },
      { name:'Osaka Street Food', emoji:'🍱',
        img:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Food_street_in_Dotonbori%2C_Osaka%3B_January_2016.jpg/960px-Food_street_in_Dotonbori%2C_Osaka%3B_January_2016.jpg',
        desc:"Okonomiyaki, kushikatsu, ramen, and takoyaki. Osaka is Japan's food capital and proud of it — the locals eat constantly." },
      { name:'Kyoto Day Trip', emoji:'⛩️',
        img:'https://upload.wikimedia.org/wikipedia/commons/0/0e/Torii_path_with_lantern_at_Fushimi_Inari_Taisha_Shrine%2C_Kyoto%2C_Japan.jpg',
        desc:"Fushimi Inari gate tunnels, Arashiyama bamboo grove, Gion at dusk. 15 min by shinkansen from Osaka." },
      { name:'Nara Deer Park', emoji:'🦌',
        img:'https://upload.wikimedia.org/wikipedia/commons/a/ac/Sika_deer_in_Nara_Park%2C_November_2016.jpg',
        desc:"Wild sika deer bow in exchange for crackers. Easy half-day from Osaka. More surreal than any guidebook prepares you for." },
    ]
  },
  hcmc: {
    country:'vietnam', dates:'Nov 20 – 24 · 4 nights', tagline:'Saigon never sleeps',
    highlights:[
      { name:'Ben Thanh Market', emoji:'🛍️',
        img:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Ben_Thanh%2C_Ciudad_Ho_Chi_Minh%2C_Vietnam%2C_2013-08-14%2C_DD_01.JPG/960px-Ben_Thanh%2C_Ciudad_Ho_Chi_Minh%2C_Vietnam%2C_2013-08-14%2C_DD_01.JPG',
        desc:"Saigon's iconic central market and the surrounding night market stalls. Good for street food and the chaotic energy of the city." },
      { name:'Cu Chi Tunnels', emoji:'⛏️',
        img:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Lascar_Booby-trap_-_Cu_Chi_tunnels_%284607383295%29.jpg/960px-Lascar_Booby-trap_-_Cu_Chi_tunnels_%284607383295%29.jpg',
        desc:"250km of underground tunnels used by Viet Cong during the war. You can crawl through sections. Sobering and fascinating in equal measure." },
      { name:'Mekong Delta', emoji:'🚤',
        img:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Ferry_boat_on_Mekong_River_in_My_Tho.jpg/960px-Ferry_boat_on_Mekong_River_in_My_Tho.jpg',
        desc:"Day trip by boat through floating markets, orchards, and river villages. A completely different side of Vietnam from the city." },
      { name:'Saigon Street Food', emoji:'🍜',
        img:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Ho-Chi-Minh-City_Vietnam_Hawker-01.jpg/960px-Ho-Chi-Minh-City_Vietnam_Hawker-01.jpg',
        desc:"Banh mi for $1, pho for breakfast, com tam (broken rice) for lunch. Some of the best eating in the world at the cheapest prices." },
    ]
  },
  danang: {
    country:'vietnam', dates:'Nov 24 – 26 · 2 nights', tagline:'Da Nang → Hoi An, or pivot to Huế — check the forecast',
    highlights:[
      { name:'Hoi An Ancient Town', emoji:'🏮',
        img:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/H%E1%BB%99i_An%2C_Ancient_Town%2C_2020-01_CN-11.jpg/960px-H%E1%BB%99i_An%2C_Ancient_Town%2C_2020-01_CN-11.jpg',
        desc:"UNESCO old town with lantern-lit canals, tailor shops, and wooden merchant houses. The evening when the lanterns are lit is one of the most beautiful things in Southeast Asia." },
      { name:'My Son Sanctuary', emoji:'🗿',
        img:'https://upload.wikimedia.org/wikipedia/commons/5/5c/0040223_My_Son_UNESCO_site_entrance%2C_Cham_Hindu_temples_complex%2C_Vietnam.jpg',
        desc:"Ancient Cham Hindu temples in a jungle valley, active from the 4th to 14th century. Half-day trip from Da Nang." },
      { name:'Marble Mountains', emoji:'⛰️',
        img:'https://upload.wikimedia.org/wikipedia/commons/9/9d/Marble_Mountains_-_Ngu_Hanh_Son_District_-_South_of_Da_Nang_City_-_Vietnam_%281%29.jpg',
        desc:"Five marble and limestone hills with Buddhist shrines, caves, and natural grottos cut inside. Short climb, big reward." },
      { name:'White Rose Dumplings', emoji:'🌸', img:null,
        desc:"Hoi An's signature dish — delicate rice paper dumplings that exist almost nowhere else. Eat them at their origin." },
    ]
  },
  phnompenh: {
    country:'cambodia', dates:'Nov 26 – Nov 29 · 3 nights', tagline:'The Kingdom\'s capital — royal, brutal, beautiful.',
    highlights:[
      { name:'Royal Palace & Silver Pagoda', emoji:'👑',
        img:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Royal_Palace%2C_Phnom_Penh.jpg/960px-Royal_Palace%2C_Phnom_Penh.jpg',
        desc:"The working royal residence. The Silver Pagoda inside the complex has a floor of 5,000 silver tiles and a life-size solid gold Buddha encrusted with diamonds. Stunning even by the standards of the region." },
      { name:'Tuol Sleng Genocide Museum', emoji:'🕯️',
        img:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Tuol_Sleng_Phnom_Penh.jpg/960px-Tuol_Sleng_Phnom_Penh.jpg',
        desc:"S-21 — the Khmer Rouge's most notorious interrogation prison, now a museum. One of the most sobering and important sites in Southeast Asia. Go before Angkor to understand the country's context." },
      { name:'Riverside Night Market', emoji:'🌆',
        img:null,
        desc:"The Mekong and Tonlé Sap rivers meet just north of the palace. The riverfront promenade comes alive at dusk — street food, vendors, locals on motorbikes. Low-key, very Phnom Penh." },
      { name:'Central Market (Phsar Thmey)', emoji:'🛒',
        img:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Central_Market_Phnom_Penh.jpg/960px-Central_Market_Phnom_Penh.jpg',
        desc:"Art deco dome from 1937 with four wings of vendors. Jewellery, spices, clothes, street food. The building itself is the attraction." },
    ]
  },
  siemreap: {
    country:'cambodia', dates:'Nov 29 – Dec 2 · 3 nights', tagline:'One of the great sites on earth',
    highlights:[
      { name:'Angkor Wat Sunrise', emoji:'🌅',
        img:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Angkor_Wat_at_sunrise_3.jpg/960px-Angkor_Wat_at_sunrise_3.jpg',
        desc:"Watch dawn light turn the main towers gold above the reflection pool. Arrive at 5am to secure a spot. Worth every second of the early alarm." },
      { name:'Angkor Thom + the Bayon', emoji:'🗿',
        img:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/2016_Angkor%2C_Angkor_Thom%2C_Bajon_%2847%29.jpg/960px-2016_Angkor%2C_Angkor_Thom%2C_Bajon_%2847%29.jpg',
        desc:"The walled city of Angkor Thom, dominated by the Bayon temple — 216 massive stone faces gazing in every direction. Eerie, beautiful, unforgettable." },
      { name:'Ta Prohm', emoji:'🌿',
        img:'https://upload.wikimedia.org/wikipedia/commons/0/04/Ta_Prohm_Angkor_2000.jpg',
        desc:"Jungle trees with roots that swallow entire walls and towers whole. Left deliberately unrestored to show what the whole complex looked like when rediscovered." },
      { name:'Banteay Srei', emoji:'🏯',
        img:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Cambodia-2698_%283618853967%29.jpg/960px-Cambodia-2698_%283618853967%29.jpg',
        desc:"The 'citadel of women' — pink sandstone temple 30km north with the most intricate and refined carvings in the entire Angkor complex." },
    ]
  },
  bangkok: {
    country:'bangkok', dates:'Dec 2 – 6 · 5 nights', tagline:'Temples, street food, and a Pokémon Center',
    highlights:[
      { name:'Pokémon Center Bangkok', emoji:'⚡', img:null,
        desc:"Priority stop for the business. Thailand-exclusive merch, limited editions. Scout inventory, buy product, enjoy it." },
      { name:'Wat Pho', emoji:'🙏',
        img:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Wat_Pho%2C_Bangkok%2C_Tailandia%2C_2013-08-22%2C_DD_02.jpg/960px-Wat_Pho%2C_Bangkok%2C_Tailandia%2C_2013-08-22%2C_DD_02.jpg',
        desc:"Home of the 46m gold reclining Buddha. The temple complex surrounding it is one of the most beautiful in Bangkok — and it predates the city itself." },
      { name:'Chatuchak Weekend Market', emoji:'🛒',
        img:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Chatuchak_Weekend_Market%2C_Bangkok%2C_Thailand_%284570440063%29.jpg/960px-Chatuchak_Weekend_Market%2C_Bangkok%2C_Thailand_%284570440063%29.jpg',
        desc:"One of the world's largest weekend markets — over 15,000 stalls across 35 acres. Go early before the midday heat hits." },
      { name:'Bangkok Street Food', emoji:'🍛',
        img:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/A_man_prepares_food_in_a_market_in_Bangkok%2C_Thailand.jpg/960px-A_man_prepares_food_in_a_market_in_Bangkok%2C_Thailand.jpg',
        desc:"Pad thai, mango sticky rice, khao man gai, som tam. Bangkok has arguably the world's greatest street food scene and it's everywhere." },
    ]
  },
  chiangmai: {
    country:'chiangmai', dates:'Dec 7 – Jan 6 · ~4 weeks', tagline:"Soul-searching base. The world's best cafe city.",
    highlights:[
      { name:'Old City Temples', emoji:'⛩️',
        img:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/20171106_Wat_Phra_That_Doi_Suthep_0103_DxO.jpg/960px-20171106_Wat_Phra_That_Doi_Suthep_0103_DxO.jpg',
        desc:"Over 300 temples inside and around the walled old city. Doi Suthep gleams on the mountain above town. Walk to a new one every morning." },
      { name:'Cafe + Cowork Culture', emoji:'☕',
        img:'https://upload.wikimedia.org/wikipedia/commons/8/8a/Kafae_boran_Chiang_Mai.jpg',
        desc:"Chiang Mai has more quality cafes per capita than almost anywhere on earth. Fast wifi, good coffee, laptop-friendly spaces at every corner of the old city." },
      { name:'Elephant Sanctuary', emoji:'🐘',
        img:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Thailand_-_fully_clothed_people_giving_bath_to_elephants.jpg/960px-Thailand_-_fully_clothed_people_giving_bath_to_elephants.jpg',
        desc:"Ethical rescue sanctuaries where retired elephants roam free. You bathe and feed them in the river. One of the best experiences in Thailand." },
      { name:'Doi Inthanon', emoji:'🏔️',
        img:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Mae_Ya_Waterfall_in_Doi_Inthanon_National_Park%2C_Chiang_Mai%2C_Thailand.jpg/960px-Mae_Ya_Waterfall_in_Doi_Inthanon_National_Park%2C_Chiang_Mai%2C_Thailand.jpg',
        desc:"Thailand's highest peak, 1.5hr south of the city. Twin royal chedis, dramatic waterfalls, and genuinely cool mountain air in December." },
    ]
  },
};

/* ─── MAP SETUP ─── */
const map = L.map('trip-map', {
  center: [25, 115],
  zoom: 4,
  zoomControl: true,
  scrollWheelZoom: false
});

L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; <a href="https://carto.com/">CARTO</a> &copy; OSM contributors',
  subdomains: 'abcd',
  maxZoom: 19
}).addTo(map);

/* Route polyline */
L.polyline(STOPS.map(s => [s.lat, s.lng]), {
  color: 'rgba(255,255,255,0.14)',
  weight: 1.5,
  dashArray: '5 7',
  lineCap: 'round'
}).addTo(map);

/* Marker radius based on nights (sqrt scale) */
function nightsToRadius(n) {
  return Math.round(8 + Math.sqrt(n) * 1.9);
}

/* Build divIcon for a numbered, sized marker */
function makeMarkerIcon(stop) {
  const r = nightsToRadius(stop.nights);
  const d = r * 2;
  const color = COLORS[stop.country];
  const fs = r <= 10 ? 8 : r <= 13 ? 9 : r <= 16 ? 10 : 11;
  return L.divIcon({
    className: 'city-marker-wrap',
    html: `<div class="city-marker" id="cm-${stop.id}" style="width:${d}px;height:${d}px;background:${color};font-size:${fs}px;">${stop.num}</div>`,
    iconSize: [d, d],
    iconAnchor: [r, r],
    popupAnchor: [0, -r - 5]
  });
}

/* Spawn markers */
const markerMap = {}; // id → L.marker
STOPS.forEach(stop => {
  const marker = L.marker([stop.lat, stop.lng], { icon: makeMarkerIcon(stop) }).addTo(map);

  marker.bindPopup(`
    <div class="map-popup">
      <div class="popup-num">Stop ${stop.num} of 12</div>
      <div class="popup-city">${stop.name}</div>
      <div class="popup-dates">${stop.dates} · ${stop.nights} nights</div>
      <div class="popup-note">${stop.note}</div>
      <button class="popup-explore" onclick="map.closePopup(); openCityPage('${stop.id}')">Explore city →</button>
    </div>
  `, { maxWidth: 270, minWidth: 210 });

  marker.on('click', () => show(stop.country));
  markerMap[stop.id] = marker;
});

/* Day trip markers (hollow, small, popup only) */
DAY_TRIPS.forEach(dt => {
  const color = COLORS[dt.country];
  L.circleMarker([dt.lat, dt.lng], {
    radius: 5,
    fillColor: 'transparent',
    color: color,
    weight: 1.5,
    fillOpacity: 0,
    opacity: 0.5
  }).addTo(map).bindPopup(`
    <div class="map-popup">
      <div class="popup-daytip">Day trip from Osaka</div>
      <div class="popup-city">${dt.name}</div>
      <div class="popup-note">${dt.note}</div>
    </div>
  `, { maxWidth: 240 });
});

/* ─── HIGHLIGHT MAP SEGMENT ─── */
function getBounds(country) {
  const pts = STOPS.filter(s => s.country === country);
  if (!pts.length) return null;
  const lats = pts.map(s => s.lat), lngs = pts.map(s => s.lng);
  const pad = (country === 'cambodia' || country === 'bangkok') ? 4.5 : 3;
  return L.latLngBounds([Math.min(...lats)-pad, Math.min(...lngs)-pad], [Math.max(...lats)+pad, Math.max(...lngs)+pad]);
}

function highlightMapSegment(country) {
  STOPS.forEach(stop => {
    const el = document.getElementById('cm-' + stop.id);
    if (!el) return;
    if (stop.country === country) {
      el.classList.remove('dimmed');
      el.classList.add('city-active');
    } else {
      el.classList.add('dimmed');
      el.classList.remove('city-active');
    }
  });
  const bounds = getBounds(country);
  if (bounds) map.flyToBounds(bounds, { padding: [65, 65], duration: 0.7, maxZoom: 8 });
}

/* ─── SHOW (timeline + panel + map) ─── */
function show(country) {
  document.querySelectorAll('.detail-panel').forEach(p => p.classList.remove('visible'));
  document.querySelectorAll('.seg').forEach(s => s.classList.remove('active'));
  const panel = document.getElementById('panel-' + country);
  const seg   = document.querySelector('[data-country="' + country + '"]');
  if (panel) { panel.classList.add('visible'); panel.scrollIntoView({ behavior:'smooth', block:'nearest' }); }
  if (seg)   seg.classList.add('active');
  highlightMapSegment(country);
}

/* ─── TAB SWITCHING ─── */
function switchTab(name) {
  document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + name).classList.add('active');
  document.querySelector('[data-tab="' + name + '"]').classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ─── CITY PAGE ─── */
function openCityPage(cityId) {
  const data = CITY_PAGES[cityId];
  if (!data) return;
  const color = COLORS[data.country];

  const cardsHTML = data.highlights.map(h => {
    const hasImg = !!h.img;
    const imgURL = hasImg ? h.img : '';
    const imgTag = hasImg
      ? `<img src="${imgURL}" alt="${h.name}" onerror="this.parentElement.classList.add('no-img')">`
      : '';
    const grad = `linear-gradient(135deg, color-mix(in srgb, ${color} 28%, transparent), color-mix(in srgb, ${color} 10%, transparent))`;
    return `
      <div class="photo-card" style="border-top:3px solid ${color}">
        <div class="photo-card-img${hasImg ? '' : ' no-img'}">
          ${imgTag}
          <div class="photo-card-fallback" style="background:${grad}">${h.emoji}</div>
        </div>
        <div class="photo-card-body">
          <div class="photo-card-name">${h.name}</div>
          <div class="photo-card-desc">${h.desc}</div>
        </div>
      </div>`;
  }).join('');

  document.getElementById('city-page-content').innerHTML = `
    <div class="city-hero" style="border-left:4px solid ${color};padding-left:calc(2rem - 4px)">
      <div class="city-country-label" style="color:${color}">${data.country.toUpperCase()}</div>
      <div class="city-headline">${STOPS.find(s=>s.id===cityId)?.name || cityId}</div>
      <div class="city-dates-line">${data.dates}</div>
      <div class="city-tagline">${data.tagline}</div>
    </div>
    <div class="photo-grid">${cardsHTML}</div>
  `;

  const page = document.getElementById('city-page');
  page.classList.add('open');
  page.removeAttribute('aria-hidden');
  page.scrollTop = 0;
  document.addEventListener('keydown', handleEscKey);
}

function closeCityPage() {
  const page = document.getElementById('city-page');
  page.classList.remove('open');
  page.setAttribute('aria-hidden', 'true');
  document.removeEventListener('keydown', handleEscKey);
}

function handleEscKey(e) {
  if (e.key === 'Escape') closeCityPage();
}

/* ─── STOP CARDS ─── */
function renderStopCards() {
  const hasCityPage = Object.keys(CITY_PAGES);
  const container = document.getElementById('stop-cards');
  if (!container) return;
  container.innerHTML = STOPS.map(stop => {
    const color = COLORS[stop.country];
    const flag  = FLAGS[stop.country] || '';
    const label = COUNTRY_LABELS[stop.country] || stop.country;
    const hasExplore = hasCityPage.includes(stop.id);
    const num = String(stop.num).padStart(2, '0');
    return `
      <div class="sc-card" onclick="show('${stop.country}')">
        <div class="sc-num-col">
          <div class="sc-num" style="background:${color}">${num}</div>
        </div>
        <div class="sc-info">
          <div class="sc-head">
            <span class="sc-flag">${flag}</span>
            <span class="sc-country-label">${label}</span>
            <span class="sc-weather">${stop.weather || ''}</span>
          </div>
          <div class="sc-city">${stop.name}</div>
          <div class="sc-dates-nights">${stop.dates} <span class="sc-nights">· ${stop.nights} nights</span></div>
          <div class="sc-vibe">${stop.vibe || ''}</div>
        </div>
        <div class="sc-actions">
          ${hasExplore ? `<button class="sc-explore-btn" onclick="event.stopPropagation();openCityPage('${stop.id}')">Explore →</button>` : ''}
        </div>
      </div>`;
  }).join('');
}

/* ─── PACKING LIST ─── */
const PACK_ITEMS = {
  'Documents & Finance': [
    { text: 'Passport (valid 6+ months past Jan 8, 2027)', note: 'check expiry' },
    { text: 'China visa — apply 4–6 weeks before Sep 26', note: 'urgent' },
    { text: 'Vietnam e-visa (~Nov 13)', note: '$25 online' },
    { text: 'Cambodia e-visa (~Nov 14)', note: '$30 online' },
    { text: 'Travel insurance documents' },
    { text: 'Credit cards — notify banks of travel dates', note: '2+ cards' },
    { text: 'Some USD cash for border/arrival fees' },
    { text: 'International SIM or eSIM plan' },
    { text: 'Printed emergency contacts + copies of key docs' },
  ],
  'Tech & Connectivity': [
    { text: 'Laptop + charger', note: 'remote work essential' },
    { text: 'Universal travel adapter', note: 'Korea/China/TH plugs vary' },
    { text: 'Portable power bank (10,000+ mAh)' },
    { text: 'Phone + charging cable' },
    { text: 'Earbuds / headphones' },
    { text: 'VPN installed (required for China)', note: 'set up before arrival' },
    { text: 'Download offline maps — Maps.me or Google Offline' },
    { text: 'WeChat + Alipay set up before China', note: 'needed for payments' },
  ],
  'Clothing (carry-on friendly)': [
    { text: '5–6 t-shirts / lightweight tops' },
    { text: '2 long-sleeve layers (Korea Sep evenings are cool)' },
    { text: '1 light jacket or fleece (Chiang Mai Dec is 18–22°C at night)' },
    { text: '3 pairs pants / joggers (no shorts needed — no beaches)' },
    { text: '5–6 underwear + socks' },
    { text: 'Comfortable walking shoes (you\'ll walk 10–15km/day)' },
    { text: 'Packable rain jacket (Da Nang Nov is rainy season)' },
    { text: 'Temple-appropriate clothing (shoulders + knees covered)' },
  ],
  'Skincare & Health': [
    { text: 'SPF 50+ sunscreen — critical post-laser', note: 'buy more in Korea' },
    { text: 'Post-procedure care: gentle cleanser, recovery cream', note: 'clinic will advise' },
    { text: 'Basic first aid: ibuprofen, antihistamines, Imodium' },
    { text: 'Prescription medications (3-month supply)' },
    { text: 'Insect repellent (Vietnam/Cambodia/Thailand)' },
    { text: 'Hand sanitizer + wipes' },
    { text: 'Rehydration sachets (for hot weather days)' },
  ],
  'Business — Pokémon': [
    { text: 'Inventory tracking spreadsheet updated before departure' },
    { text: 'Pokémon Center Bangkok — research exclusive releases in advance' },
    { text: 'Shipping solution for Bangkok purchases → US', note: 'or checked bag' },
    { text: 'Front Row SD (Jan 17–18) added to calendar' },
    { text: 'Front Row Portland (Feb 27–28) added to calendar', note: 'must-do' },
  ],
};

function renderPackingList() {
  const wrap = document.getElementById('packing-list');
  if (!wrap) return;
  let html = '';
  Object.entries(PACK_ITEMS).forEach(([section, items]) => {
    const total = items.length;
    const sectionId = section.replace(/\s+/g,'_');
    const itemsHtml = items.map((item, i) => `
      <div class="pack-item" id="pi_${sectionId}_${i}" onclick="togglePack('pi_${sectionId}_${i}')">
        <div class="pack-cb"></div>
        <div class="pack-text">${item.text}</div>
        ${item.note ? `<div class="pack-note">${item.note}</div>` : ''}
      </div>`).join('');
    const icon = section.includes('Doc') ? '📄' : section.includes('Tech') ? '💻' : section.includes('Cloth') ? '👕' : section.includes('Skin') ? '🧴' : '📦';
    html += `
      <div class="pack-section">
        <div class="pack-section-head">
          <span class="pack-section-icon">${icon}</span>
          <span class="pack-section-title">${section}</span>
          <span class="pack-progress" id="prog_${sectionId}">0 / ${total}</span>
        </div>
        <div class="pack-items">${itemsHtml}</div>
      </div>`;
  });
  wrap.innerHTML = html;
}

function togglePack(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.toggle('checked');
  const sectionId = id.split('_').slice(1,-1).join('_');
  const allItems = document.querySelectorAll(`[id^="pi_${sectionId}_"]`);
  const checked = document.querySelectorAll(`[id^="pi_${sectionId}_"].checked`).length;
  const prog = document.getElementById('prog_' + sectionId);
  if (prog) prog.textContent = `${checked} / ${allItems.length}`;
}

/* Init */
renderStopCards();
renderPackingList();
