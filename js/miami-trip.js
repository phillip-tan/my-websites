// ── STATE ──────────────────────────────────────────
const S = { person: 'Phil', votes: {} };

// ── TABS ───────────────────────────────────────────
function showTab(id, btn) {
  document.querySelectorAll('.panel').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));
  document.getElementById('panel-' + id).classList.add('active');
  btn.classList.add('active');
  if (id === 'map') setTimeout(initMap, 60);
}

function showTabById(id) {
  const btn = [...document.querySelectorAll('.tab-btn')].find(b => b.getAttribute('onclick') && b.getAttribute('onclick').includes("'" + id + "'"));
  if (btn) showTab(id, btn);
}

// ── PERSON ─────────────────────────────────────────
function setPerson(name, btn) {
  S.person = name;
  document.querySelectorAll('.person-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  Object.keys(S.votes).forEach(id => refreshBtns(id));
}

// ── VOTING ─────────────────────────────────────────
function vote(id, choice, btn) {
  if (!S.votes[id]) S.votes[id] = {};
  S.votes[id][S.person] = S.votes[id][S.person] === choice ? undefined : choice;
  if (!S.votes[id][S.person]) delete S.votes[id][S.person];
  refreshBtns(id);
  refreshPills(id);
}

function refreshBtns(id) {
  const card = document.getElementById('c-' + id);
  if (!card) return;
  const btns = card.querySelectorAll('.vbtn');
  btns.forEach(b => b.classList.remove('v-in','v-maybe','v-pass'));
  const cur = S.votes[id] && S.votes[id][S.person];
  if (cur === 'in')    btns[0].classList.add('v-in');
  if (cur === 'maybe') btns[1].classList.add('v-maybe');
  if (cur === 'pass')  btns[2].classList.add('v-pass');
}

function refreshPills(id) {
  const el = document.getElementById('vp-' + id);
  if (!el) return;
  const v = S.votes[id] || {};
  el.innerHTML = ['Phil','Jon','Monique','Nelie'].map(p => {
    if (!v[p]) return '';
    const cls = v[p] === 'in' ? 'in' : v[p] === 'maybe' ? 'maybe' : 'pass';
    const em  = v[p] === 'in' ? '✅' : v[p] === 'maybe' ? '🤷' : '❌';
    return `<span class="vpill ${cls}">${em} ${p}</span>`;
  }).join('');
}

// ── CARD LINKS ─────────────────────────────────────
const cardLinks = {
  'sesame':      { maps: 'https://www.google.com/maps/search/?api=1&query=Sesame+Miami', site: 'https://www.seasamemiami.com/', label: 'Website' },
  'foodtour':    { maps: 'https://www.google.com/maps/search/?api=1&query=Sanguich+de+Miami+2057+SW+8th+St', site: 'https://www.google.com/maps/search/?api=1&query=El+Rey+de+las+Fritas+Miami', label: 'El Rey Maps' },
  'wynwood':     { maps: 'https://www.google.com/maps/search/?api=1&query=Wynwood+Walls+Miami', site: 'https://www.wynwoodwalls.com/', label: 'Website' },
  'coralgables': { maps: 'https://www.google.com/maps/search/?api=1&query=Miracle+Mile+Coral+Gables+FL', site: 'https://www.google.com/maps/search/?api=1&query=restaurants+Miracle+Mile+Coral+Gables', label: 'Browse Spots' },
  'designdistrict': { maps: 'https://www.google.com/maps/search/?api=1&query=Miami+Design+District', site: 'https://www.miamidesigndistrict.net/', label: 'Website' },
  'lagoon':      { maps: 'https://www.google.com/maps/search/?api=1&query=Shoreline+Sole+Mia+North+Miami', site: 'https://www.shorelinesolemia.com/', label: 'Website' },
  'nexus':       { maps: 'https://www.google.com/maps/search/?api=1&query=Nexus+Shooting+2600+Davie+Rd+Davie+FL', site: 'https://www.nexusshooting.com/', label: 'Book Range' },
  'hardrock':    { maps: 'https://www.google.com/maps/search/?api=1&query=Seminole+Hard+Rock+Hollywood+FL', site: 'https://www.seminolehardrockhollywood.com/', label: 'Website' },
  'lagoon-yoga': { maps: 'https://www.google.com/maps/search/?api=1&query=Laguna+Sole+Shoreline+Sole+Mia+North+Miami', site: 'https://www.shorelinesolemia.com/amenities/laguna-sole/', label: 'Lagoon Info' },
  'jaya':        { maps: 'https://www.google.com/maps/search/?api=1&query=Jaya+at+The+Setai+2001+Collins+Ave+Miami+Beach', site: 'https://www.thesetaihotel.com/miami-beach-restaurants/jaya', label: 'Website' },
  'nikkibeach':  { maps: 'https://www.google.com/maps/search/?api=1&query=Nikki+Beach+1+Ocean+Drive+Miami+Beach', site: 'https://miamibeach.nikkibeach.com/', label: 'Website' },
  'e11even':     { maps: 'https://www.google.com/maps/search/?api=1&query=E11even+29+NE+11th+St+Miami', site: 'https://www.e11even.com/', label: 'Tickets' },
  'biltmore':    { maps: 'https://www.google.com/maps/search/?api=1&query=Biltmore+Hotel+1200+Anastasia+Ave+Coral+Gables', site: 'https://biltmorehotel.com/miami-resort-calendar/', label: 'Event Info' },
  'cruise':      { maps: 'https://www.google.com/maps/search/?api=1&query=Bayside+Marketplace+401+Biscayne+Blvd+Miami', site: 'https://www.miamionthewater.com/tours/miami-4th-of-july-cruise/', label: 'Book Cruise' },
  // Seen & Be Seen
  'casaneos':    { maps: 'https://www.google.com/maps/search/?api=1&query=Casa+Neos+Miami', site: 'https://www.casaneos.com/', label: 'Website' },
  'kiki':        { maps: 'https://www.google.com/maps/search/?api=1&query=Kiki+on+the+River+450+NW+North+River+Dr+Miami', site: 'https://resy.com/cities/miami-fl/kiki-on-the-river', label: 'Reserve' },
  'gekko':       { maps: 'https://www.google.com/maps/search/?api=1&query=Gekko+8+SE+8th+St+Miami', site: 'https://gekko.com/', label: 'Website' },
  'swan':        { maps: 'https://www.google.com/maps/search/?api=1&query=Swan+90+NE+39th+St+Miami', site: 'https://swanmiami.com/', label: 'Website' },
  'sexyfish':    { maps: 'https://www.google.com/maps/search/?api=1&query=Sexy+Fish+Miami+Beach', site: 'https://sexyfish.com/miami/', label: 'Website' },
  'claudie':     { maps: 'https://www.google.com/maps/search/?api=1&query=Claudie+1101+Brickell+Ave+Miami', site: 'https://claudiemiami.com/', label: 'Website' },
  'carbone':     { maps: 'https://www.google.com/maps/search/?api=1&query=Carbone+49+Collins+Ave+Miami+Beach', site: 'https://carbonemiami.com/', label: 'Website' },
  'lpm':         { maps: 'https://www.google.com/maps/search/?api=1&query=LPM+Restaurant+1300+Brickell+Bay+Dr+Miami', site: 'https://lpmrestaurant.com/miami/', label: 'Website' },
  // Restaurants
  'cotoa':       { maps: 'https://www.google.com/maps/search/?api=1&query=Cotoa+12475+NE+6th+Ct+Miami', site: 'https://cotoa.rest/', label: 'Reserve' },
  'ceviche105':  { maps: 'https://www.google.com/maps/search/?api=1&query=CVI.CHE+105+105+NE+3rd+Ave+Miami', site: 'https://www.ceviche105.com/', label: 'Website' },
  'lamar':       { maps: 'https://www.google.com/maps/search/?api=1&query=La+Mar+Mandarin+Oriental+Miami', site: 'https://www.mandarinoriental.com/en/miami/brickell-key/dine/la-mar', label: 'Reserve' },
  'coya':        { maps: 'https://www.google.com/maps/search/?api=1&query=COYA+Miami+2801+Collins+Ave', site: 'https://coyarestaurant.com/miami/', label: 'Website' },
  // Activities
  'anhinga':       { maps: 'https://www.google.com/maps/search/?api=1&query=Anhinga+Trail+Everglades+National+Park+Florida', site: 'https://www.nps.gov/ever/planyourvisit/anhinga-trail.htm', label: 'NPS Info' },
  'gatorgrill':    { maps: 'https://www.google.com/maps/search/?api=1&query=Everglades+Gator+Grill+36650+SW+192nd+Ave+Homestead+FL', site: 'https://www.facebook.com/evergladesgatorgrill/', label: 'Info' },
  // Key Largo
  'kl-pennekamp':    { maps: 'https://www.google.com/maps/search/?api=1&query=John+Pennekamp+Coral+Reef+State+Park+Key+Largo', site: 'https://www.floridastateparks.org/parks-and-trails/john-pennekamp-coral-reef-state-park', label: 'Park Info' },
  'kl-charter':      { maps: 'https://www.google.com/maps/search/?api=1&query=Key+Largo+Boat+Charters', site: 'https://klboatcharters.com/', label: 'Book Charter' },
  'kl-tiki':         { maps: 'https://www.google.com/maps/search/?api=1&query=Cruisin+Tikis+Key+Largo', site: 'https://cruisintikis.com/key-largo/', label: 'Book Tiki' },
  'kl-glassbottom':  { maps: 'https://www.google.com/maps/search/?api=1&query=Key+Largo+Princess+Glass+Bottom+Boat', site: 'https://www.pennekamppark.com/glass-bottom-boat-tours/', label: 'Book Tour' },
  'kl-africanqueen': { maps: 'https://www.google.com/maps/search/?api=1&query=African+Queen+Key+Largo+Florida', site: 'https://www.africanqueenflkeys.com/', label: 'Book Cruise' },
  'kl-fisheries':    { maps: 'https://www.google.com/maps/search/?api=1&query=Key+Largo+Fisheries+1313+Ocean+Bay+Dr', site: 'https://www.keylargofisheries.com/', label: 'Website' },
  'kl-snappers':     { maps: 'https://www.google.com/maps/search/?api=1&query=Snappers+Waterfront+Bar+Key+Largo', site: 'https://www.snapperskeylargo.com/', label: 'Website' },
};

(function injectLinks() {
  Object.entries(cardLinks).forEach(([id, lnk]) => {
    const card = document.getElementById('c-' + id);
    if (!card) return;
    const div = document.createElement('div');
    div.className = 'card-links';
    div.innerHTML =
      (lnk.maps ? `<a href="${lnk.maps}" class="card-link" target="_blank" rel="noopener">🗺️ Maps</a>` : '') +
      (lnk.site ? `<a href="${lnk.site}" class="card-link" target="_blank" rel="noopener">🌐 ${lnk.label||'Website'}</a>` : '');
    const voteRow  = card.querySelector('.vote-row');
    const cardTime = card.querySelector('.card-time');
    const cardMeta = card.querySelector('.card-meta');
    const cardDesc = card.querySelector('.card-desc');
    if (voteRow)       voteRow.before(div);
    else if (cardMeta) cardMeta.after(div);
    else if (cardTime) cardTime.after(div);
    else if (cardDesc) cardDesc.after(div);
  });
})();

// ── MAP ────────────────────────────────────────────
let mapDone = false;
function initMap() {
  if (mapDone) return;
  mapDone = true;
  const map = L.map('map-el').setView([25.84, -80.20], 11);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '© OpenStreetMap contributors', maxZoom: 18 }).addTo(map);

  const pins = [
    // Phil's home base
    { n:'🏠 Shoreline Solé Mia', lat:25.9040, lng:-80.1450, cat:'home', d:'Phil\'s place — lagoon, pickleball, golf sim, beach volleyball' },
    // Thursday
    { n:'✈️ Miami International Airport', lat:25.7959, lng:-80.2870, cat:'locked', d:'AA2799 lands 8:39 AM' },
    { n:'🥪 Sanguich de Miami', lat:25.7648, lng:-80.2196, cat:'locked', d:'Best Cuban sandwich in Little Havana' },
    { n:'🍔 El Rey de las Fritas', lat:25.7642, lng:-80.2255, cat:'locked', d:'Best frita in Miami · Calle Ocho' },
    { n:'🎨 Wynwood Walls', lat:25.8001, lng:-80.1994, cat:'locked', d:'Street art + bar hopping · Thursday evening' },
    { n:'🛍️ Design District', lat:25.8138, lng:-80.1940, cat:'locked', d:'Shopping + galleries · Thursday evening' },
    // Friday
    { n:'🎯 Nexus Shooting Range', lat:26.0724, lng:-80.2367, cat:'optional', d:'2600 Davie Rd · 5-star indoor range · Open until 10 PM · TBD night' },
    { n:'🎰 Hard Rock Hollywood', lat:26.0023, lng:-80.1924, cat:'optional', d:'Seminole Hard Rock Casino · Minutes from Nexus · TBD night' },
    // Saturday
    { n:'🦞 Jaya at The Setai', lat:25.7904, lng:-80.1301, cat:'locked', d:'Fancy seafood brunch · July 4th · Locked' },
    { n:'🏄 Nikki Beach', lat:25.7667, lng:-80.1302, cat:'locked', d:'Iconic beach club · South Beach · Saturday PM' },
    { n:'🎪 E11even Miami', lat:25.7786, lng:-80.1918, cat:'locked', d:'24-hour club · 11 PM Saturday · Locked' },
    // Optional events
    { n:'🎆 Biltmore Hotel', lat:25.7425, lng:-80.2688, cat:'optional', d:'July 4th VIP Party · $180/pp · Open bar + drone show' },
    { n:'🚢 Bayside (Fireworks Cruise)', lat:25.7793, lng:-80.1873, cat:'optional', d:'Fireworks cruise departure · 8–10 PM' },
    // Seen & Be Seen
    { n:'🍝 Carbone', lat:25.7700, lng:-80.1313, cat:'scene', d:'Italian · South of Fifth' },
    { n:'🇬🇷 Kiki on the River', lat:25.7788, lng:-80.2017, cat:'scene', d:'Greek · Miami River · DJ + plate smashing' },
    { n:'🦎 Gekko', lat:25.7642, lng:-80.1927, cat:'scene', d:'Latin steakhouse · Brickell · DJ' },
    { n:'🦢 Swan', lat:25.8146, lng:-80.1932, cat:'scene', d:'Scene · Design District · DJ' },
    { n:'🥂 LPM Restaurant', lat:25.7622, lng:-80.1873, cat:'scene', d:'French Mediterranean · Brickell Bay' },
    { n:'🏛️ Casa Neos', lat:25.7800, lng:-80.1948, cat:'scene', d:'Greek Mediterranean · Top Pick' },
    { n:'🐟 Sexy Fish', lat:25.7718, lng:-80.1341, cat:'scene', d:'Seafood · DJ · Designed space' },
    { n:'🎭 Claudie', lat:25.7591, lng:-80.1940, cat:'scene', d:'French Riviera · Cabaret · Brickell' },
    // Restaurants
    { n:'🇪🇨 Cotoa', lat:25.8940, lng:-80.1724, cat:'restaurant', d:'Michelin Ecuadorian · North Miami · 5 min from Phil\'s' },
    { n:'🐟 CVI.CHE 105', lat:25.7752, lng:-80.1926, cat:'restaurant', d:'Peruvian · Downtown Miami' },
    { n:'🌊 La Mar', lat:25.7640, lng:-80.1850, cat:'restaurant', d:'Peruvian · Mandarin Oriental · Brickell Key' },
    { n:'🇵🇪 COYA Miami', lat:25.8040, lng:-80.1310, cat:'restaurant', d:'Peruvian-inspired · Collins Ave' },
    // Activities
    { n:'🐊 Anhinga Trail', lat:25.3922, lng:-80.6081, cat:'activity', d:'Wild gators · Free boardwalk · Everglades NP · Friday stop' },
  ];

  const col = { home:'#FFD166', locked:'#4ECDC4', optional:'#FF8E53', scene:'#C77DFF', restaurant:'#FF6B6B', activity:'#4FC3F7' };
  const sz  = { home:11, locked:9, optional:8, scene:7, restaurant:7, activity:8 };

  pins.forEach(p => {
    L.circleMarker([p.lat, p.lng], { radius: sz[p.cat]||7, fillColor: col[p.cat]||'#aaa', color: '#0f1117', weight: 2, opacity: 1, fillOpacity: 0.92 })
      .addTo(map)
      .bindPopup(`<div style="font-family:-apple-system,sans-serif;min-width:150px"><strong style="font-size:.88rem">${p.n}</strong><div style="font-size:.76rem;color:#555;margin-top:3px">${p.d}</div></div>`);
  });

  const leg = L.control({ position: 'bottomright' });
  leg.onAdd = () => {
    const d = L.DomUtil.create('div');
    d.style.cssText = 'background:rgba(15,17,23,0.94);padding:10px 13px;border-radius:9px;color:#e0e0e0;font-size:.72rem;line-height:2;border:1px solid rgba(255,255,255,0.08)';
    d.innerHTML = '<strong>Map Key</strong><br>'
      + '<span style="color:#FFD166">●</span> Home Base<br>'
      + '<span style="color:#4ECDC4">●</span> Locked in plan<br>'
      + '<span style="color:#FF8E53">●</span> Optional events<br>'
      + '<span style="color:#C77DFF">●</span> Seen &amp; Be Seen<br>'
      + '<span style="color:#FF6B6B">●</span> Restaurants<br>'
      + '<span style="color:#4FC3F7">●</span> Activities';
    return d;
  };
  leg.addTo(map);
}

// ── WEATHER ────────────────────────────────────────
(function initWeather() {
  const days = [
    { date:'Thu Jul 2', icon:'⛅', hi:91, lo:78, desc:'Partly cloudy, afternoon storm possible', hum:'78%', rain:'55%', uv:'11 – Extreme', wind:'12 mph SE', sea:'85°F' },
    { date:'Fri Jul 3', icon:'🌤️', hi:90, lo:79, desc:'Mostly sunny, evening thunderstorm', hum:'76%', rain:'60%', uv:'11 – Extreme', wind:'10 mph E', sea:'85°F' },
    { date:'Sat Jul 4', icon:'☀️', hi:92, lo:78, desc:'Sunny morning, storms clear by evening', hum:'75%', rain:'50%', uv:'11 – Extreme', wind:'11 mph SE', sea:'85°F' },
    { date:'Sun Jul 5', icon:'⛅', hi:90, lo:78, desc:'Partly cloudy, smooth travel day', hum:'77%', rain:'40%', uv:'10 – Very High', wind:'13 mph E', sea:'85°F' },
  ];
  document.getElementById('wx-grid').innerHTML = days.map(d => `
    <div class="wx-card">
      <div class="wx-date">${d.date}</div>
      <div class="wx-icon">${d.icon}</div>
      <div class="wx-temp">${d.hi}° / ${d.lo}°F</div>
      <div class="wx-desc">${d.desc}</div>
      <div class="wx-rows">
        <div class="wx-row"><span>💧 Humidity</span><span>${d.hum}</span></div>
        <div class="wx-row"><span>🌧️ Rain</span><span>${d.rain}</span></div>
        <div class="wx-row"><span>☀️ UV Index</span><span>${d.uv}</span></div>
        <div class="wx-row"><span>💨 Wind</span><span>${d.wind}</span></div>
        <div class="wx-row"><span>🌊 Sea</span><span>${d.sea}</span></div>
      </div>
    </div>`).join('');
})();

// ── PACK LIST ──────────────────────────────────────
(function initPack() {
  const cats = [
    { title:'👕 Clothing (4 nights)', items:['Light linen/cotton shirts (3–4)','Swim trunks (2)','Shorts (3)','Light jogger or pants','Going-out outfit ×2','Loafers or clean shoes for nightlife','Sandals / flip flops','White sneakers'] },
    { title:'🎽 E11even Dress Code', items:['NO athletic wear (strictly enforced)','NO plain white tees','Fitted button-down or nice top','Clean sneakers or dress shoes','Valid government ID (required)','Card or cash for the night'] },
    { title:'🏖️ Beach & Outdoors', items:['SPF 50+ sunscreen','Polarized sunglasses','Wide-brim sun hat','Beach towel','Reusable water bottle','Packable rain poncho','Waterproof phone pouch','Reef-safe sunscreen'] },
    { title:'💊 Miami Survival Kit', items:['After-sun lotion / aloe','Electrolyte packets (Liquid IV)','Anti-humidity hair products','Ibuprofen','Hangover support (DripDrop)','Insect repellent','Blotting papers','Blister patches'] },
    { title:'📱 Tech & Misc', items:['Portable phone charger','USB-C + Lightning cables','Headphones / AirPods','Small crossbody bag for nights','Cash for tips','Luggage lock'] },
  ];
  document.getElementById('pack-root').innerHTML = cats.map(cat => `
    <div class="pack-cat">
      <div class="pack-cat-title">${cat.title}</div>
      <div class="pack-grid">
        ${cat.items.map(item => `
          <div class="pack-item" onclick="this.classList.toggle('done');this.querySelector('.pack-check').textContent=this.classList.contains('done')?'✓':''">
            <div class="pack-check"></div><span>${item}</span>
          </div>`).join('')}
      </div>
    </div>`).join('');
})();
