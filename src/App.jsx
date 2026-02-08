import { useState } from "react";

const sections = [
  {
    id: "trains",
    icon: "🚂",
    title: "Your Own Railway Gateway",
    color: "#2D5F3E",
    accent: "#8BC49E",
    content: {
      intro:
        "Royston sits right on the King's Cross main line — direct trains into the heart of London in under an hour. From King's Cross and neighbouring St Pancras, the whole of Europe opens up by rail.",
      highlights: [
        {
          title: "Direct to London King's Cross",
          detail:
            "Around 40 trains a day, journey time as fast as 36 minutes. No changes needed — just step on at Royston and step off in central London.",
          link: "https://www.greatnorthernrail.com/journey/royston-to-london-kings-cross",
          linkText: "Great Northern — Royston to King's Cross",
        },
        {
          title: "Gateway to Europe via St Pancras",
          detail:
            "King's Cross is right next door to St Pancras International — the Eurostar terminal. Paris in 2h 15m, Brussels in under 2 hours, Amsterdam in about 4 hours. From Brussels or Paris, onward trains reach Prague, Budapest, Vienna, Warsaw, and beyond.",
          link: "https://www.eurostar.com/rw-en/travel-info/your-trip/stations",
          linkText: "Eurostar Stations & Destinations",
        },
        {
          title: "Cambridge & East Anglia",
          detail:
            "Royston also connects to Cambridge (about 15 minutes by train), and from Cambridge you can reach Ely, Norwich, and the wider East Anglian network of branch lines.",
          link: "https://www.thameslinkrailway.com/journey/royston-to-london-kings-cross",
          linkText: "Thameslink — Royston services",
        },
        {
          title: "Nene Valley Railway",
          detail:
            "A heritage steam railway near Peterborough that's unique in the UK — it runs actual European continental locomotives and rolling stock, including a Polish Class Śląsk engine. Swedish, German, Danish, Belgian and French stock too. Featured in two James Bond films.",
          link: "https://www.nvr.org.uk/",
          linkText: "Nene Valley Railway",
        },
      ],
      keyMessage:
        "Living on a main line isn't a small thing — it's freedom. You could be in Paris by teatime, or watching a Polish steam engine in Peterborough by lunchtime.",
    },
  },
  {
    id: "politics",
    icon: "🏛️",
    title: "Politics, Debate & Ideas",
    color: "#4A2D5F",
    accent: "#B89AD4",
    content: {
      intro:
        "Cambridge is one of the most intellectually alive cities in the country. Public lectures, debates, and discussion groups happen constantly — and most of them are free and open to anyone.",
      highlights: [
        {
          title: "The Cambridge Union",
          detail:
            "The oldest debating society in the world, founded in 1815. It now offers public membership — you can attend debates and speaker events on politics, current affairs, and ideas. Past speakers include everyone from Churchill to contemporary world leaders. Debates happen most Thursdays during term.",
          link: "https://cus.org/whats-on",
          linkText: "Cambridge Union — What's On",
        },
        {
          title: "University Public Lectures",
          detail:
            "Cambridge University runs hundreds of free public lectures every year — on history, politics, international affairs, science, philosophy, and much more. You don't need to be a student. You can just turn up.",
          link: "https://talks.cam.ac.uk/",
          linkText: "Talks.cam — University of Cambridge public talks",
        },
        {
          title: "Cambridge Festival",
          detail:
            "An annual festival of ideas, research and discussion open to the public, covering everything from geopolitics to emerging technologies. Free events across the city.",
          link: "https://www.festival.cam.ac.uk/",
          linkText: "Cambridge Festival",
        },
      ],
      keyMessage:
        "These aren't things you have to sign up for or commit to. They're just there, whenever you feel like going. No pressure, no expectations.",
    },
  },
  {
    id: "easteurope",
    icon: "🌍",
    title: "Eastern European History & Culture",
    color: "#5F3D2D",
    accent: "#D4A87B",
    content: {
      intro:
        "Cambridge has one of the UK's leading centres for the study of Central and Eastern Europe. This isn't a niche interest here — it's taken seriously, and there's a real community around it.",
      highlights: [
        {
          title: "Cambridge Slavonic Studies",
          detail:
            "The University's Slavonic Studies Section covers the languages, literature, history and culture of Poland, Russia, Ukraine and the wider region. They run a regular programme of public lectures, seminars, and cultural events — including guest speakers from across Europe.",
          link: "https://www.mmll.cam.ac.uk/slavonic",
          linkText: "Cambridge Slavonic Studies",
        },
        {
          title: "CamCREES — Central & East European Studies",
          detail:
            "The Cambridge Committee for Central and Eastern European and Eurasian Studies coordinates interdisciplinary research across the whole university. Their public events cover politics, history, economics, and society — exactly the kind of serious, well-informed discussion that's hard to find elsewhere.",
          link: "https://www.mmll.cam.ac.uk/slavonic",
          linkText: "Faculty of Modern & Medieval Languages",
        },
        {
          title: "BASEES Annual Conference",
          detail:
            "The British Association for Slavonic and East European Studies holds its main annual conference in Cambridge every spring, with 600–700 participants. Public talks and discussions on everything from current Eastern European politics to historical research.",
          link: "http://basees.org/",
          linkText: "BASEES — British Association for Slavonic & East European Studies",
        },
        {
          title: "Local Eastern European Community",
          detail:
            "Cambridge has a noticeable Polish and wider Eastern European community, with Polish shops, a Polish Catholic church, and cultural events. It's the kind of place where having a deep knowledge of Czech history or Romanian politics makes you interesting, not unusual.",
        },
      ],
      keyMessage:
        "In Cambridge, your passion for Eastern European history and politics isn't niche — it's valued. The people here actually want to hear what you know.",
    },
  },
  {
    id: "history",
    icon: "⚔️",
    title: "History On Your Doorstep",
    color: "#3D4A5F",
    accent: "#7BA5D4",
    content: {
      intro:
        "The area around Royston and Cambridge is layered with centuries of English and European history. From Roman roads to Cold War airfields, it's all within easy reach.",
      highlights: [
        {
          title: "IWM Duxford",
          detail:
            "The Imperial War Museum at Duxford is just a few miles from Royston — it's Britain's largest aviation museum, with nearly 200 aircraft, military vehicles, and exhibitions covering 20th-century conflict from WWI through the Cold War. It includes the American Air Museum, designed by Norman Foster.",
          link: "https://www.iwm.org.uk/visits/iwm-duxford",
          linkText: "IWM Duxford",
        },
        {
          title: "Cambridge — 800 Years of History",
          detail:
            "The university was founded in 1209. Walk through colleges that have educated prime ministers, spies, revolutionaries and scientists. Oliver Cromwell was the local MP. The Cambridge Spies operated from here. History is literally built into the walls.",
          link: "https://www.visitcambridge.org/",
          linkText: "Visit Cambridge",
        },
        {
          title: "Royston Cave",
          detail:
            "Right in Royston itself, there's a mysterious medieval cave carved with figures and symbols. Its origins are debated — possibly Knights Templar, possibly connected to other medieval orders. A genuine historical puzzle on your doorstep.",
          link: "https://www.roystoncave.co.uk/",
          linkText: "Royston Cave",
        },
        {
          title: "The Fitzwilliam Museum",
          detail:
            "One of the finest small museums in Europe, with collections spanning antiquities, medieval manuscripts, Renaissance art, and modern works. Free admission.",
          link: "https://www.fitzmuseum.cam.ac.uk/",
          linkText: "The Fitzwilliam Museum",
        },
      ],
      keyMessage:
        "You could spend years exploring just what's within a 20-minute train ride, and never run out of things to discover.",
    },
  },
  {
    id: "airports",
    icon: "✈️",
    title: "Airports & Easy Travel",
    color: "#1A4B6E",
    accent: "#6BB3E0",
    content: {
      intro:
        "Royston is remarkably well-connected for air travel. Two major international airports are within easy reach, and between them they fly direct to dozens of Eastern European destinations.",
      highlights: [
        {
          title: "London Stansted — 30 minutes away",
          detail:
            "Stansted is about 16 miles from Royston — your closest major airport. Direct flights to Prague, Budapest, Warsaw, Bucharest, Cluj-Napoca, Krakow, Wroclaw, Rzeszow, Bratislava, Košice, Sofia, Tallinn, Vilnius, Riga, Zagreb, Sarajevo, and Tirana. Budget airlines like Ryanair keep prices very low — flights to Budapest from around £27.",
          link: "https://www.stanstedairport.com/destinations-and-guides/a-z-list-of-destinations/",
          linkText: "Stansted Airport — All Destinations A–Z",
        },
        {
          title: "London Luton — 26 miles away",
          detail:
            "Luton is also close by and offers Wizz Air's extensive Eastern European network, including direct flights to Bucharest, Budapest, Warsaw, Gdansk, Katowice, and more. EasyJet also flies from Luton to many European cities.",
          link: "https://www.london-luton.co.uk/",
          linkText: "London Luton Airport",
        },
        {
          title: "Heathrow & Gatwick via King's Cross",
          detail:
            "For long-haul or more destinations, Heathrow and Gatwick are both accessible from London. Take your direct train from Royston to King's Cross and connect via the Underground. Heathrow is about 1 hour from King's Cross on the Piccadilly line.",
        },
        {
          title: "The Eastern European Gateway",
          detail:
            "Between Stansted and Luton, you have direct access to at least 15 Eastern European countries. Prague in 2 hours, Budapest in 2.5 hours, Warsaw in 2.5 hours. For someone who loves Eastern Europe, having this on your doorstep is genuinely unusual — most of the UK doesn't have this.",
        },
      ],
      keyMessage:
        "You'd be closer to Eastern Europe from Royston than from almost anywhere else in the country. Stansted's Eastern European connections are exceptional — and it's practically next door.",
    },
  },
  {
    id: "jobs",
    icon: "💼",
    title: "Silicon Fen — Jobs & Opportunities",
    color: "#5A1A6E",
    accent: "#C77DE0",
    content: {
      intro:
        "Cambridge is the UK's answer to Silicon Valley — known as 'Silicon Fen.' Over 5,000 tech and biotech companies are based here, generating £35 billion in turnover. But it's not just tech — the whole region is booming with opportunities across every sector, and there's no pressure about timing.",
      highlights: [
        {
          title: "Silicon Fen — The UK's Tech Capital",
          detail:
            "After London, Cambridge sees more tech scale-up investment than anywhere else in the UK. Over half the population works in the technology sector. Major names include ARM (chip design), AstraZeneca (pharma), Darktrace (cybersecurity), Amazon (with a major Cambridge development centre), and Apple (with a 900-person research hub). Plus thousands of startups.",
          link: "https://en.wikipedia.org/wiki/Silicon_Fen",
          linkText: "Silicon Fen — Overview",
        },
        {
          title: "It's Not Just Tech",
          detail:
            "The university, its 31 colleges, hospitals, museums, libraries, and publishing houses all employ thousands of people. Cambridge University Press alone is a major employer. There are roles in administration, research support, heritage, education, healthcare, and much more — the kind of serious, interesting work that suits people who think deeply.",
          link: "https://www.jobs.cam.ac.uk/",
          linkText: "University of Cambridge Jobs",
        },
        {
          title: "Employment Support for Autistic Adults",
          detail:
            "Cambridgeshire's Waythrough (formerly Retain Regain Employment Service) provides one-to-one employment support specifically for people living with autism. They help with finding paid work, voluntary roles, education, and training — all completely at your own pace, with no pressure.",
          link: "https://hayfenland.co.uk/support/living-with-autism-cambridgeshire/",
          linkText: "Employment Support — Cambridgeshire",
        },
        {
          title: "The AI & Semiconductor Boom",
          detail:
            "Cambridge is at the heart of the UK's new semiconductor strategy — a £1 billion government investment over ten years. AI research, chip design, biotech and green energy are all expanding rapidly. The demand for people is enormous and growing. This is genuinely one of the most dynamic job markets in Europe right now.",
        },
        {
          title: "No Timeline Required",
          detail:
            "None of this means you need to jump into anything. The opportunities will be there whenever you're ready. But knowing they exist — knowing you'd be living right next to one of Europe's biggest innovation hubs — that's worth knowing about.",
        },
      ],
      keyMessage:
        "Cambridge isn't just a university town — it's one of Europe's most dynamic job markets. Over 5,000 companies, from global tech giants to small startups, all within a 15-minute train ride. No rush. Just a lot of doors that are open whenever you want to walk through them.",
    },
  },
  {
    id: "support",
    icon: "🤝",
    title: "Support & Community",
    color: "#2D5F5A",
    accent: "#8BD4C4",
    content: {
      intro:
        "Cambridgeshire has strong autism support services for adults. These exist whenever you might want them — there's no rush and no obligation. They're just good to know about.",
      highlights: [
        {
          title: "NAS Cambridge — Social Club",
          detail:
            "The National Autistic Society's Cambridge branch runs a relaxed social club for adults (18+) on Sunday evenings, twice a month. It's run entirely by volunteers with lived experience of autism. No pressure — just a welcoming space to be around other people who understand.",
          link: "https://www.nascambridge.org.uk/adults/",
          linkText: "NAS Cambridge — Adults",
        },
        {
          title: "CLASS Clinic — Cambridge",
          detail:
            "The Cambridgeshire Lifespan Autism Spectrum Service is a specialist NHS service based at the Chitra Sethia Autism Centre in Cambridge. They provide ongoing support and signposting for autistic adults.",
          link: "https://www.cpft.nhs.uk/classclinic",
          linkText: "CLASS Clinic — CPFT",
        },
        {
          title: "Cambridgeshire Autism & Adult Support",
          detail:
            "Cambridgeshire County Council provides assessment and support services specifically for autistic adults, including help with independent living, daily life, and accessing community resources.",
          link: "https://www.cambridgeshire.gov.uk/residents/adults/support-for-sight-and-hearing-loss-and-disabilities/autism-and-adult-support",
          linkText: "Cambridgeshire County Council — Autism Support",
        },
        {
          title: "Waythrough Employment Support",
          detail:
            "Cambridgeshire's Retain Regain Employment Service provides one-to-one employment support specifically for people living with autism. They help with finding paid work, voluntary roles, education, and training — all at your own pace.",
          link: "https://hayfenland.co.uk/support/living-with-autism-cambridgeshire/",
          linkText: "Autism Support — Cambridgeshire",
        },
        {
          title: "Safe Soulmates",
          detail:
            "A community specifically for adults with additional needs — autism, anxiety, and other things that have made socialising challenging. A positive, safe space to build friendships at your own pace.",
        },
      ],
      keyMessage:
        "None of these require anything of you right now. They're just there, ready, whenever the time feels right.",
    },
  },
  {
    id: "comedy",
    icon: "🎭",
    title: "Comedy Clubs & Stand-Up",
    color: "#8B4513",
    accent: "#DEB887",
    content: {
      intro:
        "Cambridge has a thriving comedy scene with regular stand-up nights, improv shows, and comedy clubs. From intimate pub gigs to the famous Footlights, there's always something to make you laugh.",
      highlights: [
        {
          title: "The Cambridge Footlights",
          detail:
            "The world's most famous university comedy club, founded in 1883. Alumni include Stephen Fry, Hugh Laurie, Emma Thompson, John Cleese, Eric Idle, and David Mitchell. They put on regular shows during term time — revues, smokers, and the annual pantomime. Public can attend many performances at the ADC Theatre.",
          link: "https://www.footlights.org/",
          linkText: "Cambridge Footlights",
        },
        {
          title: "The ADC Theatre",
          detail:
            "The oldest university playhouse in the country, hosting comedy nights, student productions, and professional shows. Regular late-night comedy slots and the Footlights' home venue. Right in the heart of Cambridge.",
          link: "https://www.adctheatre.com/",
          linkText: "ADC Theatre — What's On",
        },
        {
          title: "The Cambridge Comedy Club",
          detail:
            "A dedicated comedy club hosting professional stand-up comedians every week. Held at various venues around Cambridge including The Junction. Features both established circuit comedians and up-and-coming acts.",
          link: "https://www.junction.co.uk/",
          linkText: "The Junction — Comedy Events",
        },
        {
          title: "The Portland Arms",
          detail:
            "A popular pub venue in Cambridge that hosts regular comedy nights alongside live music. Intimate atmosphere, good beer, and a mix of local and touring comedians. The kind of place where you can just turn up and have a good night.",
          link: "https://theportlandarms.co.uk/",
          linkText: "The Portland Arms",
        },
        {
          title: "The Corn Exchange",
          detail:
            "Cambridge's largest entertainment venue regularly hosts big-name touring comedians. Past performers include Michael McIntyre, Jimmy Carr, and Sarah Millican. Check their listings for upcoming comedy tours.",
          link: "https://cornex.co.uk/",
          linkText: "Cambridge Corn Exchange",
        },
      ],
      keyMessage:
        "Comedy has deep roots in Cambridge — it's where some of Britain's best comedians learned their craft. Whether you want to see established names or discover new talent, there's always something on.",
    },
  },
  {
    id: "music",
    icon: "🎵",
    title: "Live Music & Music Clubs",
    color: "#4B0082",
    accent: "#9370DB",
    content: {
      intro:
        "From intimate jazz clubs to larger concert venues, Cambridge and the surrounding area has a vibrant live music scene covering everything from folk and jazz to rock and electronic music.",
      highlights: [
        {
          title: "The Portland Arms",
          detail:
            "One of Cambridge's best-loved live music venues. An intimate pub setting hosting everything from indie bands to folk acts, jazz nights to electronic music. Regular gigs most nights of the week. A proper music pub with character.",
          link: "https://theportlandarms.co.uk/",
          linkText: "The Portland Arms — Gig Listings",
        },
        {
          title: "The Junction",
          detail:
            "Cambridge's premier live music and club venue. Two performance spaces hosting touring bands, club nights, and local acts. Everything from rock and indie to drum & bass and house. Also hosts regular comedy and theatre.",
          link: "https://www.junction.co.uk/",
          linkText: "The Junction — What's On",
        },
        {
          title: "Cambridge Folk Festival",
          detail:
            "One of the world's premier folk festivals, held every summer at Cherry Hinton Hall. Four days of music across multiple stages, featuring legends and newcomers alike. A genuine institution since 1965.",
          link: "https://www.cambridgefolkfestival.co.uk/",
          linkText: "Cambridge Folk Festival",
        },
        {
          title: "The Corn Exchange",
          detail:
            "A beautiful Grade II listed venue in the heart of Cambridge, hosting major touring artists across all genres. From classical concerts to rock legends, jazz greats to contemporary pop. Excellent acoustics in a historic setting.",
          link: "https://cornex.co.uk/",
          linkText: "Cambridge Corn Exchange",
        },
        {
          title: "Hidden Rooms",
          detail:
            "A basement club in central Cambridge hosting DJ nights, electronic music, and late-night dancing. Intimate underground atmosphere with quality sound. Open until late on weekends.",
          link: "https://hiddenrooms.co.uk/",
          linkText: "Hidden Rooms Cambridge",
        },
        {
          title: "Cambridge Jazz Club",
          detail:
            "Regular jazz nights held at various venues around Cambridge. Features local musicians, visiting artists, and jam sessions. A welcoming community for jazz lovers — just turn up and enjoy.",
          link: "https://cambridgejazz.org/",
          linkText: "Cambridge Jazz",
        },
        {
          title: "The Old Chequers, Royston",
          detail:
            "Right in Royston's town centre, The Old Chequers hosts occasional live music nights featuring local bands and acoustic acts. A friendly local pub where you can catch live music without travelling far.",
        },
      ],
      keyMessage:
        "Whether you're into folk, jazz, indie rock, or electronic music — there's a venue and a night for you. Cambridge punches well above its weight for live music, and it's all just a short train ride away.",
    },
  },
];

const trainFacts = [
  "Royston → London King's Cross: as fast as 36 minutes",
  "King's Cross → St Pancras: 2 minute walk",
  "St Pancras → Paris Gare du Nord: 2 hours 15 minutes",
  "Paris → Prague by train: overnight sleeper available",
  "Paris → Budapest: train via Munich or Vienna",
  "Brussels → Warsaw: onward connections via Cologne & Berlin",
  "Around 40 direct trains a day between Royston and London",
  "Royston → Cambridge: about 15 minutes by train",
  "Stansted Airport: just 30 mins from Royston — direct flights to Prague, Budapest, Warsaw",
  "Stansted → Budapest: from £27 return with Ryanair",
  "Luton Airport: 26 miles away — Wizz Air flies to 55+ European cities",
  "Cambridge: 5,000+ tech companies — the UK's Silicon Valley",
  "Silicon Fen generates £35 billion in global turnover",
  "ARM, Apple, Amazon, AstraZeneca — all have major Cambridge offices",
  "Cambridge Footlights alumni: Stephen Fry, Hugh Laurie, John Cleese, Emma Thompson",
  "The Cambridge Folk Festival has run every summer since 1965",
  "The Junction hosts 500+ live events every year",
  "The Portland Arms — live music and comedy most nights of the week",
];

function App() {
  const [activeSection, setActiveSection] = useState(null);
  const [factIndex, setFactIndex] = useState(0);
  const [showWelcome, setShowWelcome] = useState(true);

  const nextFact = () => setFactIndex((i) => (i + 1) % trainFacts.length);
  const prevFact = () =>
    setFactIndex((i) => (i - 1 + trainFacts.length) % trainFacts.length);

  const currentSection = sections.find((s) => s.id === activeSection);

  const TrainScene = () => (
    <div style={styles.trainScene}>
      <svg viewBox="0 0 720 180" style={styles.trainSvg} xmlns="http://www.w3.org/2000/svg">
        {/* Sky gradient */}
        <defs>
          <linearGradient id="sky" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#D4E7D0" />
            <stop offset="100%" stopColor="#E8EDE5" />
          </linearGradient>
          <linearGradient id="grassGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#7BA86A" />
            <stop offset="100%" stopColor="#5A8A4A" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="720" height="180" fill="url(#sky)" />

        {/* Rolling hills */}
        <ellipse cx="120" cy="130" rx="180" ry="40" fill="#9BBF8A" opacity="0.5" />
        <ellipse cx="400" cy="125" rx="220" ry="45" fill="#8CB87A" opacity="0.4" />
        <ellipse cx="650" cy="128" rx="160" ry="38" fill="#9BBF8A" opacity="0.5" />

        {/* Trees */}
        {[60, 180, 420, 590, 680].map((x, i) => (
          <g key={`tree-${i}`}>
            <rect x={x - 2} y={105 - i * 2} width="4" height={20 + i * 2} fill="#6B5B45" />
            <ellipse cx={x} cy={100 - i * 2} rx={10 + (i % 3) * 3} ry={12 + (i % 2) * 4} fill={i % 2 === 0 ? "#5A8A4A" : "#4A7A3A"} />
          </g>
        ))}

        {/* Station signs */}
        {/* Wansford */}
        <g>
          <rect x="90" y="90" width="4" height="38" fill="#5A3A20" />
          <rect x="68" y="86" width="48" height="16" rx="2" fill="#F5F0E0" stroke="#5A3A20" strokeWidth="1.5" />
          <text x="92" y="97" textAnchor="middle" fontFamily="Georgia, serif" fontSize="7.5" fill="#3A2A10" fontWeight="bold">Wansford</text>
        </g>

        {/* Overton */}
        <g>
          <rect x="258" y="90" width="4" height="38" fill="#5A3A20" />
          <rect x="233" y="86" width="50" height="16" rx="2" fill="#F5F0E0" stroke="#5A3A20" strokeWidth="1.5" />
          <text x="258" y="97" textAnchor="middle" fontFamily="Georgia, serif" fontSize="7.5" fill="#3A2A10" fontWeight="bold">Overton</text>
        </g>

        {/* Orton Mere */}
        <g>
          <rect x="430" y="90" width="4" height="38" fill="#5A3A20" />
          <rect x="401" y="86" width="58" height="16" rx="2" fill="#F5F0E0" stroke="#5A3A20" strokeWidth="1.5" />
          <text x="430" y="97" textAnchor="middle" fontFamily="Georgia, serif" fontSize="7.5" fill="#3A2A10" fontWeight="bold">Orton Mere</text>
        </g>

        {/* Peterborough NV */}
        <g>
          <rect x="618" y="90" width="4" height="38" fill="#5A3A20" />
          <rect x="580" y="86" width="76" height="16" rx="2" fill="#F5F0E0" stroke="#5A3A20" strokeWidth="1.5" />
          <text x="618" y="97" textAnchor="middle" fontFamily="Georgia, serif" fontSize="7" fill="#3A2A10" fontWeight="bold">Peterborough NV</text>
        </g>

        {/* Ground / embankment */}
        <rect x="0" y="125" width="720" height="45" fill="url(#grassGrad)" />

        {/* Railway track */}
        <rect x="0" y="123" width="720" height="3" fill="#8B7B6B" />
        <rect x="0" y="127" width="720" height="3" fill="#8B7B6B" />
        {/* Sleepers */}
        {Array.from({ length: 72 }, (_, i) => (
          <rect key={`sleeper-${i}`} x={i * 10 + 2} y="121" width="6" height="11" fill="#6B5B45" opacity="0.6" />
        ))}

        {/* Steam puffs - animated, now going right */}
        <g>
          <circle r="8" fill="white" opacity="0.6">
            <animate attributeName="cx" values="70;100;130" dur="3s" repeatCount="indefinite" />
            <animate attributeName="cy" values="85;75;65" dur="3s" repeatCount="indefinite" />
            <animate attributeName="r" values="5;10;15" dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.7;0.4;0" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle r="6" fill="white" opacity="0.5">
            <animate attributeName="cx" values="65;90;115" dur="3s" begin="1s" repeatCount="indefinite" />
            <animate attributeName="cy" values="88;78;68" dur="3s" begin="1s" repeatCount="indefinite" />
            <animate attributeName="r" values="4;8;13" dur="3s" begin="1s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.6;0.3;0" dur="3s" begin="1s" repeatCount="indefinite" />
          </circle>
          <circle r="7" fill="white" opacity="0.5">
            <animate attributeName="cx" values="68;95;122" dur="3s" begin="2s" repeatCount="indefinite" />
            <animate attributeName="cy" values="83;73;63" dur="3s" begin="2s" repeatCount="indefinite" />
            <animate attributeName="r" values="4;9;14" dur="3s" begin="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.6;0.3;0" dur="3s" begin="2s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* The Train - now facing RIGHT (chimney on right, carriages trail left) */}
        <g>
          <animateTransform attributeName="transform" type="translate" values="-250,0;920,0" dur="20s" repeatCount="indefinite" />

          {/* Carriage 2 (furthest back) */}
          <rect x="-178" y="97" width="60" height="22" rx="3" fill="#3A5A30" />
          <rect x="-173" y="100" width="10" height="10" rx="1" fill="#E8D8A0" opacity="0.6" />
          <rect x="-160" y="100" width="10" height="10" rx="1" fill="#E8D8A0" opacity="0.6" />
          <rect x="-147" y="100" width="10" height="10" rx="1" fill="#E8D8A0" opacity="0.6" />
          <rect x="-134" y="100" width="10" height="10" rx="1" fill="#E8D8A0" opacity="0.6" />
          <line x1="-178" y1="113" x2="-118" y2="113" stroke="#2A4A20" strokeWidth="1" />
          <circle cx="-163" cy="123" r="4.5" fill="#333" stroke="#555" strokeWidth="1" />
          <circle cx="-133" cy="123" r="4.5" fill="#333" stroke="#555" strokeWidth="1" />

          {/* Carriage 1 */}
          <rect x="-115" y="97" width="60" height="22" rx="3" fill="#5A3A20" />
          <rect x="-110" y="100" width="10" height="10" rx="1" fill="#E8D8A0" opacity="0.6" />
          <rect x="-97" y="100" width="10" height="10" rx="1" fill="#E8D8A0" opacity="0.6" />
          <rect x="-84" y="100" width="10" height="10" rx="1" fill="#E8D8A0" opacity="0.6" />
          <rect x="-71" y="100" width="10" height="10" rx="1" fill="#E8D8A0" opacity="0.6" />
          <line x1="-115" y1="113" x2="-55" y2="113" stroke="#4A2A10" strokeWidth="1" />
          <circle cx="-100" cy="123" r="4.5" fill="#333" stroke="#555" strokeWidth="1" />
          <circle cx="-70" cy="123" r="4.5" fill="#333" stroke="#555" strokeWidth="1" />

          {/* Tender */}
          <rect x="-50" y="98" width="35" height="22" rx="2" fill="#2D3436" />
          <rect x="-48" y="100" width="31" height="10" rx="1" fill="#1A1A1A" />
          {/* Tender wheels */}
          <circle cx="-40" cy="123" r="5" fill="#333" stroke="#555" strokeWidth="1" />
          <circle cx="-24" cy="123" r="5" fill="#333" stroke="#555" strokeWidth="1" />

          {/* Locomotive body - facing RIGHT */}
          {/* Main frame */}
          <rect x="-12" y="100" width="82" height="18" rx="3" fill="#8B2020" />
          {/* Boiler */}
          <rect x="-7" y="93" width="65" height="14" rx="7" fill="#A03030" />
          {/* Cab (at left/rear of loco) */}
          <rect x="-18" y="88" width="18" height="30" rx="2" fill="#8B2020" />
          <rect x="-15" y="91" width="5" height="8" rx="1" fill="#E8C84A" opacity="0.7" />
          <rect x="-8" y="91" width="5" height="8" rx="1" fill="#E8C84A" opacity="0.7" />
          {/* Chimney (at right/front) */}
          <rect x="52" y="82" width="8" height="14" rx="1" fill="#2D3436" />
          <rect x="50" y="80" width="12" height="4" rx="2" fill="#2D3436" />
          {/* Dome */}
          <rect x="33" y="88" width="10" height="7" rx="5" fill="#C04040" />
          {/* Safety valve */}
          <ellipse cx="15" cy="93" rx="4" ry="4" fill="#D4A040" />
          {/* Smokebox door */}
          <circle cx="70" cy="107" r="9" fill="#2D3436" />
          <circle cx="70" cy="107" r="7" fill="#3A3A3A" />
          <line x1="70" y1="100" x2="70" y2="104" stroke="#666" strokeWidth="1" />
          {/* Buffer beam */}
          <rect x="68" y="106" width="5" height="12" rx="1" fill="#A03030" />
          {/* Front buffer */}
          <circle cx="73" cy="109" r="2" fill="#888" />
          <circle cx="73" cy="115" r="2" fill="#888" />

          {/* Driving wheels - 3 large */}
          <g>
            <circle cx="15" cy="123" r="7" fill="#444" stroke="#888" strokeWidth="1.5" />
            <line x1="15" y1="116" x2="15" y2="130" stroke="#999" strokeWidth="1">
              <animateTransform attributeName="transform" type="rotate" values="0 15 123;360 15 123" dur="1.2s" repeatCount="indefinite" />
            </line>
            <line x1="8" y1="123" x2="22" y2="123" stroke="#999" strokeWidth="1">
              <animateTransform attributeName="transform" type="rotate" values="0 15 123;360 15 123" dur="1.2s" repeatCount="indefinite" />
            </line>
            <circle cx="15" cy="123" r="2" fill="#666" />
          </g>
          <g>
            <circle cx="35" cy="123" r="7" fill="#444" stroke="#888" strokeWidth="1.5" />
            <line x1="35" y1="116" x2="35" y2="130" stroke="#999" strokeWidth="1">
              <animateTransform attributeName="transform" type="rotate" values="0 35 123;360 35 123" dur="1.2s" repeatCount="indefinite" />
            </line>
            <line x1="28" y1="123" x2="42" y2="123" stroke="#999" strokeWidth="1">
              <animateTransform attributeName="transform" type="rotate" values="0 35 123;360 35 123" dur="1.2s" repeatCount="indefinite" />
            </line>
            <circle cx="35" cy="123" r="2" fill="#666" />
          </g>
          <g>
            <circle cx="55" cy="123" r="7" fill="#444" stroke="#888" strokeWidth="1.5" />
            <line x1="55" y1="116" x2="55" y2="130" stroke="#999" strokeWidth="1">
              <animateTransform attributeName="transform" type="rotate" values="0 55 123;360 55 123" dur="1.2s" repeatCount="indefinite" />
            </line>
            <line x1="48" y1="123" x2="62" y2="123" stroke="#999" strokeWidth="1">
              <animateTransform attributeName="transform" type="rotate" values="0 55 123;360 55 123" dur="1.2s" repeatCount="indefinite" />
            </line>
            <circle cx="55" cy="123" r="2" fill="#666" />
          </g>
          {/* Coupling rod */}
          <rect x="14" y="121.5" width="42" height="2.5" rx="1" fill="#999" opacity="0.8">
            <animateTransform attributeName="transform" type="rotate" values="0 35 123;2 35 123;0 35 123;-2 35 123;0 35 123" dur="0.6s" repeatCount="indefinite" />
          </rect>

          {/* Small front wheel */}
          <circle cx="67" cy="124" r="4" fill="#444" stroke="#777" strokeWidth="1" />
        </g>

        {/* NVR banner */}
        <rect x="245" y="140" width="230" height="18" rx="4" fill="#5A3A20" opacity="0.85" />
        <text x="360" y="153" textAnchor="middle" fontFamily="Georgia, serif" fontSize="9.5" fill="#F5F0E0" fontWeight="bold" letterSpacing="0.5">
          ✦ NENE VALLEY RAILWAY ✦
        </text>

        {/* Subtitle */}
        <text x="360" y="172" textAnchor="middle" fontFamily="Georgia, serif" fontSize="8" fill="#5A7A4A" fontStyle="italic" opacity="0.9">
          Wansford · Overton · Orton Mere · Peterborough — European steam near you
        </text>
      </svg>
    </div>
  );

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerInner}>
          <h1 style={styles.title}>Royston & Cambridge</h1>
          <p style={styles.subtitle}>What's waiting just around the corner</p>
        </div>
      </header>

      {!activeSection && <TrainScene />}

      {showWelcome && !activeSection && (
        <div style={styles.welcomeCard}>
          <p style={styles.welcomeText}>

            So here's the thing — I've been having a look around, and it turns 
            out there's a surprising amount going on down here that's right up 
            your street. Trains, Eastern European history, proper political 
            debate, heritage railways with actual Polish steam engines... I'm 
            not saying you have to do any of it. I just thought you might like 
            to see what's on the doorstep. Have a browse — no strings attached.
          </p>
          <button
            style={styles.welcomeButton}
            onClick={() => setShowWelcome(false)}
          >
            Have a look around →
          </button>
        </div>
      )}

      {!activeSection && !showWelcome && (
        <>
          {/* Ticker */}
          <div style={styles.tickerContainer}>
            <button style={styles.tickerBtn} onClick={prevFact}>
              ←
            </button>
            <div style={styles.tickerContent}>
              <span style={styles.tickerLabel}>📍 DID YOU KNOW</span>
              <span style={styles.tickerText}>{trainFacts[factIndex]}</span>
            </div>
            <button style={styles.tickerBtn} onClick={nextFact}>
              →
            </button>
          </div>

          {/* Section Cards */}
          <div style={styles.grid}>
            {sections.map((section) => (
              <button
                key={section.id}
                style={{
                  ...styles.card,
                  borderLeft: `5px solid ${section.accent}`,
                }}
                onClick={() => setActiveSection(section.id)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 30px rgba(0,0,0,0.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 2px 12px rgba(0,0,0,0.06)";
                }}
              >
                <span style={styles.cardIcon}>{section.icon}</span>
                <span style={{ ...styles.cardTitle, color: section.color }}>
                  {section.title}
                </span>
                <span style={styles.cardArrow}>→</span>
              </button>
            ))}
          </div>

          {/* Bottom note */}
          <div style={styles.bottomNote}>
            <p style={styles.bottomNoteText}>
              💡 Remember: everything here is available, not expected. There's no
              timeline and no pressure. It's just nice to know what's out there.
            </p>
          </div>
        </>
      )}

      {/* Detail View */}
      {activeSection && currentSection && (
        <div style={styles.detailContainer}>
          <button
            style={styles.backButton}
            onClick={() => setActiveSection(null)}
          >
            ← Back to all topics
          </button>

          <div
            style={{
              ...styles.detailHeader,
              backgroundColor: currentSection.color,
            }}
          >
            <span style={styles.detailIcon}>{currentSection.icon}</span>
            <h2 style={styles.detailTitle}>{currentSection.title}</h2>
          </div>

          <p style={styles.detailIntro}>{currentSection.content.intro}</p>

          <div style={styles.highlightsList}>
            {currentSection.content.highlights.map((h, i) => (
              <div
                key={i}
                style={{
                  ...styles.highlightCard,
                  borderTop: `3px solid ${currentSection.accent}`,
                }}
              >
                <h3 style={{ ...styles.highlightTitle, color: currentSection.color }}>
                  {h.title}
                </h3>
                <p style={styles.highlightDetail}>{h.detail}</p>
                {h.link && (
                  <a
                    href={h.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ ...styles.highlightLink, color: currentSection.color }}
                  >
                    🔗 {h.linkText}
                  </a>
                )}
              </div>
            ))}
          </div>

          <div
            style={{
              ...styles.keyMessageBox,
              backgroundColor: currentSection.accent + "22",
              borderLeft: `4px solid ${currentSection.accent}`,
            }}
          >
            <p style={styles.keyMessageText}>
              {currentSection.content.keyMessage}
            </p>
          </div>

          <button
            style={styles.backButtonBottom}
            onClick={() => setActiveSection(null)}
          >
            ← Back to all topics
          </button>
        </div>
      )}

      {/* Footer */}
      <footer style={styles.footer}>
        <p style={styles.footerText}>
          Made with care. Take your time — there's no rush. 🌿
        </p>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    fontFamily:
      '"Merriweather", "Georgia", serif',
    maxWidth: 720,
    margin: "0 auto",
    padding: "0 20px",
    backgroundColor: "#FAFAF7",
    minHeight: "100vh",
  },
  header: {
    textAlign: "center",
    padding: "40px 20px 30px",
    borderBottom: "2px solid #E8E5DE",
  },
  headerInner: {},
  title: {
    fontFamily: '"Merriweather", "Georgia", serif',
    fontSize: 32,
    fontWeight: 700,
    color: "#2D3436",
    margin: 0,
    letterSpacing: "-0.5px",
  },
  subtitle: {
    fontSize: 16,
    color: "#636E72",
    margin: "8px 0 0",
    fontStyle: "italic",
    fontWeight: 300,
  },
  welcomeCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: "32px 28px",
    margin: "30px 0",
    boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
    textAlign: "center",
  },
  welcomeText: {
    fontSize: 17,
    lineHeight: 1.7,
    color: "#2D3436",
    margin: "0 0 24px",
  },
  welcomeButton: {
    backgroundColor: "#2D5F3E",
    color: "#FFFFFF",
    border: "none",
    padding: "14px 32px",
    borderRadius: 8,
    fontSize: 16,
    fontFamily: '"Merriweather", "Georgia", serif',
    cursor: "pointer",
    fontWeight: 600,
  },
  tickerContainer: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    backgroundColor: "#2D3436",
    borderRadius: 10,
    padding: "14px 18px",
    margin: "24px 0",
  },
  tickerBtn: {
    background: "none",
    border: "1px solid rgba(255,255,255,0.3)",
    color: "#FFFFFF",
    fontSize: 16,
    padding: "6px 12px",
    borderRadius: 6,
    cursor: "pointer",
    flexShrink: 0,
  },
  tickerContent: {
    flex: 1,
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },
  tickerLabel: {
    fontSize: 11,
    color: "#8BC49E",
    letterSpacing: "1.5px",
    fontWeight: 700,
    fontFamily: "sans-serif",
  },
  tickerText: {
    fontSize: 15,
    color: "#FFFFFF",
    fontWeight: 500,
  },
  grid: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
    margin: "20px 0",
  },
  card: {
    display: "flex",
    alignItems: "center",
    gap: 16,
    backgroundColor: "#FFFFFF",
    border: "none",
    borderRadius: 10,
    padding: "20px 22px",
    cursor: "pointer",
    textAlign: "left",
    boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
    transition: "all 0.2s ease",
    width: "100%",
  },
  cardIcon: {
    fontSize: 28,
    flexShrink: 0,
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: 700,
    flex: 1,
    fontFamily: '"Merriweather", "Georgia", serif',
  },
  cardArrow: {
    fontSize: 18,
    color: "#B2BEC3",
    flexShrink: 0,
  },
  bottomNote: {
    backgroundColor: "#F0EDE6",
    borderRadius: 10,
    padding: "20px 24px",
    margin: "20px 0",
  },
  bottomNoteText: {
    fontSize: 14,
    lineHeight: 1.6,
    color: "#636E72",
    margin: 0,
    textAlign: "center",
  },
  detailContainer: {
    padding: "20px 0",
  },
  backButton: {
    background: "none",
    border: "none",
    color: "#636E72",
    fontSize: 15,
    cursor: "pointer",
    padding: "8px 0",
    fontFamily: '"Merriweather", "Georgia", serif',
    marginBottom: 16,
  },
  detailHeader: {
    borderRadius: 12,
    padding: "28px 24px",
    display: "flex",
    alignItems: "center",
    gap: 16,
    marginBottom: 24,
  },
  detailIcon: {
    fontSize: 36,
  },
  detailTitle: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: 700,
    margin: 0,
    fontFamily: '"Merriweather", "Georgia", serif',
  },
  detailIntro: {
    fontSize: 16,
    lineHeight: 1.7,
    color: "#2D3436",
    margin: "0 0 28px",
    padding: "0 4px",
  },
  highlightsList: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
  },
  highlightCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: "22px 24px",
    boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
  },
  highlightTitle: {
    fontSize: 17,
    fontWeight: 700,
    margin: "0 0 10px",
    fontFamily: '"Merriweather", "Georgia", serif',
  },
  highlightDetail: {
    fontSize: 15,
    lineHeight: 1.65,
    color: "#4A4A4A",
    margin: "0 0 12px",
  },
  highlightLink: {
    fontSize: 14,
    textDecoration: "none",
    fontWeight: 600,
    display: "inline-block",
    padding: "6px 0",
    borderBottom: "1px dashed currentColor",
  },
  keyMessageBox: {
    borderRadius: 10,
    padding: "22px 24px",
    margin: "28px 0",
  },
  keyMessageText: {
    fontSize: 16,
    lineHeight: 1.7,
    color: "#2D3436",
    margin: 0,
    fontStyle: "italic",
    fontWeight: 500,
  },
  backButtonBottom: {
    background: "none",
    border: "1px solid #DDD",
    color: "#636E72",
    fontSize: 15,
    cursor: "pointer",
    padding: "12px 24px",
    fontFamily: '"Merriweather", "Georgia", serif',
    borderRadius: 8,
    width: "100%",
    marginTop: 8,
  },
  footer: {
    textAlign: "center",
    padding: "30px 20px 40px",
    borderTop: "1px solid #E8E5DE",
    marginTop: 30,
  },
  footerText: {
    fontSize: 14,
    color: "#B2BEC3",
    margin: 0,
  },
  trainScene: {
    width: "100%",
    margin: "0 0 -8px",
    borderRadius: "0 0 12px 12px",
    overflow: "hidden",
    backgroundColor: "#E8EDE5",
  },
  trainSvg: {
    width: "100%",
    height: "auto",
    display: "block",
  },
};

export default App;
