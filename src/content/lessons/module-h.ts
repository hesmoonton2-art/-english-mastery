import type { Lesson } from "@/lib/types";

export const moduleHLessons: Lesson[] = [
  {
    id: "h1-complex-sentences",
    moduleId: "H",
    title: "Complex and Compound Sentences",
    titleMm: "ရှုပ်ထွေးသော ဝါကျများ (Complex & Compound)",
    level: "B2",
    minutes: 26,
    summaryLine: "ဝါကျခွဲများကို ဆက်စပ်၍ ရှည်လျားပြီး ကျွမ်းကျင်သော ဝါကျများ ဖန်တီးပုံကို လေ့လာမည်။",
    objectives: [
      "simple, compound, complex ဝါကျများကို ခွဲခြားနိုင်ရမည်။",
      "ဝါကျခွဲများကို ဆက်စပ်သည့် စကားလုံးများကို မှန်ကန်စွာ သုံးနိုင်ရမည်။",
      "ဝါကျရှည်များတွင် comma အသုံးပြုပုံကို နားလည်ရမည်။",
    ],
    vocab: [
      { en: "clause", mm: "ဝါကျခွဲ (ကတ္တား + ကြိယာ ပါသည့် အပိုင်း)", pos: "noun", ipa: "/klɔːz/", example: "A complex sentence has a main clause and a subordinate clause.", exampleMm: "Complex sentence တွင် အဓိကဝါကျခွဲနှင့် အပေါင်းပါ ဝါကျခွဲ ရှိသည်။", collocations: ["main clause", "relative clause"], topic: "sentence structure", level: "B2" },
      { en: "subordinate", mm: "အပေါင်းပါ (အဓိကမဟုတ်သော)", pos: "adjective", ipa: "/səˈbɔː.dɪ.nət/", example: "'Because it rained' is a subordinate clause.", exampleMm: "'Because it rained' သည် အပေါင်းပါ ဝါကျခွဲ ဖြစ်သည်။", collocations: ["subordinate clause", "subordinate role"], topic: "sentence structure", level: "B2" },
      { en: "coordinating", mm: "ညီတူညီမျှ ဆက်စပ်သော", pos: "adjective", ipa: "/kəʊˈɔː.dɪ.neɪ.tɪŋ/", example: "'And', 'but' and 'or' are coordinating conjunctions.", exampleMm: "'and', 'but', 'or' တို့သည် ညီတူညီမျှ ဆက်စပ် စကားလုံးများ ဖြစ်သည်။", collocations: ["coordinating conjunction"], topic: "sentence structure", level: "B2" },
      { en: "consequently", mm: "ထို့ကြောင့် (ရလဒ်)", pos: "adverb", ipa: "/ˈkɒn.sɪ.kwənt.li/", example: "The road was closed; consequently, we took a longer route.", exampleMm: "လမ်း ပိတ်ထားသည်။ ထို့ကြောင့် ပိုရှည်သော လမ်းကို သွားခဲ့သည်။", collocations: ["and consequently"], topic: "sentence structure", level: "B2" },
    ],
    sections: [
      {
        heading: "၁။ ဝါကျ အမျိုးအစား ၃ မျိုး",
        body: [
          "Simple sentence — ဝါကျခွဲ တစ်ခုတည်း — She studies English every evening.",
          "Compound sentence — ညီတူညီမျှ ဝါကျခွဲ နှစ်ခုကို and, but, or, so, yet, for, nor ဖြင့် ဆက်သည် — She studies English, and her brother studies Japanese.",
          "Complex sentence — အဓိကဝါကျခွဲ + အပေါင်းပါဝါကျခွဲ (because, although, when, if, while, since, after, before, unless) — Although she was tired, she finished her homework.",
        ],
        table: {
          headers: ["အမျိုးအစား", "ဖွဲ့စည်းပုံ", "ဥပမာ"],
          rows: [
            ["Simple", "clause ၁ ခု", "I read every day."],
            ["Compound", "clause + conjunction + clause", "I read every day, and I write notes."],
            ["Complex", "main + subordinate", "I improve because I read every day."],
            ["Compound-complex", "compound + subordinate", "Although I am busy, I read every day, and I write notes."],
          ],
        },
      },
      {
        heading: "၂။ Subordinate clause စတင်သည့် စကားလုံးများ",
        body: [
          "အချိန် — when, while, after, before, until, as soon as, since — 'After I finished work, I went home.'",
          "အကြောင်းရင်း — because, since, as — 'Since the weather was bad, the event was cancelled.'",
          "ဆန့်ကျင် — although, though, even though, whereas, while — 'Whereas the first plan was cheap, the second is faster.'",
          "အခြေအနေ — if, unless, provided that — 'Unless you book early, you will not get a seat.'",
        ],
      },
      {
        heading: "၃။ Comma နှင့် သတိထားရမည့် အချက်များ",
        body: [
          "Subordinate clause သည် ဝါကျ အစတွင် ရှိလျှင် နောက်တွင် comma ထည့်သည် — 'Because it was late, we took a taxi.' ဝါကျအလယ်/အဆုံးတွင် ရှိလျှင် comma မလိုပါ — 'We took a taxi because it was late.'",
          "Compound sentence တွင် comma + coordinating conjunction သုံးသည် — 'It was late, so we took a taxi.' comma မပါဘဲ 'It was late so we took a taxi' သည် စကားပြောတွင် ဖြစ်နိုင်သော်လည်း တရားဝင် စာတွင် comma လိုသည်။",
          "ဝါကျခွဲ နှစ်ခုကို comma ဖြင့်သာ ဆက်ခြင်း (comma splice) သည် အမှား ဖြစ်သည် — 'It was late, we took a taxi' မှားသည်။",
        ],
      },
    ],
    examples: [
      { en: "Although the course was difficult, she completed it with a high score.", mm: "သင်တန်း ခက်ခဲပေမယ့် သူမ ရမှတ်မြင့်မြင့်နဲ့ ပြီးဆုံးခဲ့တယ်။", note: "complex — although + comma။" },
      { en: "I wanted to attend the meeting, but I had to finish a report.", mm: "အစည်းအဝေးတက်ချင်ခဲ့ပေမယ့် အစီရင်ခံစာ ပြီးအောင် လုပ်ရခဲ့တယ်။", note: "compound — but။" },
      { en: "As soon as the results are published, we will inform you.", mm: "ရလဒ်များ ထုတ်ပြန်တာနဲ့ ကျွန်တော်တို့ အသိပေးပါမယ်။" },
      { en: "The company reduced its costs; consequently, profits increased.", mm: "ကုမ္ပဏီက ကုန်ကျစရိတ် လျှော့ချခဲ့တယ်။ ထို့ကြောင့် အမြတ်ငွေ တိုးလာတယ်။", note: "semicolon + consequently။" },
      { en: "Students who practise regularly improve faster than those who study only before exams.", mm: "ပုံမှန် လေ့ကျင့်သော ကျောင်းသားများသည် စာမေးပွဲ မတိုင်မီမှ လေ့လာသော သူများထက် ပိုမြန်စွာ တိုးတက်သည်။", note: "relative clause နှစ်ခု ပါဝင်သည်။" },
    ],
    mistakes: [
      { wrong: "Because it was raining, so we stayed home.", right: "Because it was raining, we stayed home.", why: "because နှင့် so ကို အတူ မတွဲပါ။" },
      { wrong: "Although he studied hard, but he failed.", right: "Although he studied hard, he failed.", why: "although နှင့် but ကို အတူ မတွဲပါ။" },
      { wrong: "The exam was difficult, I studied hard.", right: "The exam was difficult, so I studied hard. / The exam was difficult; I studied hard.", why: "ဝါကျခွဲ နှစ်ခုကို comma ဖြင့်သာ ဆက်ခြင်း မရပါ (comma splice)။" },
    ],
    guided: [
      { id: "h1-g1", type: "mcq", prompt: "'Although it was cold, we went swimming.' This is a:", promptMm: "ဤဝါကျ အမျိုးအစားက ဘာနည်း။", options: ["simple sentence", "compound sentence", "complex sentence", "sentence fragment"], answer: 2, explanation: "အပေါင်းပါ ဝါကျခွဲ (although ...) ပါဝင်သောကြောင့် complex sentence ဖြစ်သည်။", topic: "sentence structure", level: "B2" },
      { id: "h1-g2", type: "mcq", prompt: "Which connector joins two clauses showing contrast?", promptMm: "ဆန့်ကျင်မှု ပြသည့် ဆက်စပ်စကားလုံးကို ရွေးပါ။", options: ["because", "whereas", "so", "therefore"], answer: 1, explanation: "whereas = ဆန့်ကျင်ဘက် နှိုင်းယှဉ်ချက်။", topic: "sentence structure", level: "B2" },
      { id: "h1-g3", type: "fill", prompt: "___ you book early, you will not get a seat.", promptMm: "အခြေအနေ ပြ စကားလုံး ဖြည့်ပါ။", answers: ["Unless"], explanation: "Unless = if not။", topic: "sentence structure", level: "B2" },
      { id: "h1-g4", type: "correct", prompt: "Correct: Because she was tired, so she went to bed early.", promptMm: "ဝါကျကို ပြင်ပါ။", answers: ["Because she was tired, she went to bed early.", "She was tired, so she went to bed early."], explanation: "because နှင့် so ကို အတူ မသုံးပါ။", topic: "sentence structure", level: "B2" },
    ],
    independent: [
      { id: "h1-i1", type: "mcq", prompt: "Choose the sentence with correct punctuation.", promptMm: "comma မှန်ကန်သော ဝါကျကို ရွေးပါ။", options: ["When I arrived the meeting had started.", "When I arrived, the meeting had started.", "When I arrived; the meeting had started.", "When, I arrived the meeting had started."], answer: 1, explanation: "ဝါကျအစတွင် ရှိသော subordinate clause နောက် comma လိုသည်။", topic: "sentence structure", level: "B2" },
      { id: "h1-i2", type: "translate", prompt: "Translate: မိုးရွာပေမယ့် ကျွန်တော်တို့ ခရီးထွက်ခဲ့တယ်။", promptMm: "မြန်မာစကားကို အင်္ဂလိပ်လို ပြန်ဆိုပါ။", answers: ["Although it was raining, we went on a trip.", "Although it rained, we went on a trip.", "Even though it was raining, we went out.", "It was raining, but we went on a trip."], explanation: "although/even though + ဝါကျခွဲ, + အဓိကဝါကျ။", topic: "sentence structure", level: "B2" },
      { id: "h1-i3", type: "fill", prompt: "The road was closed; ___, we took a longer route.", promptMm: "ရလဒ် ပြ စကားလုံး ဖြည့်ပါ။", answers: ["consequently", "therefore"], explanation: "consequently / therefore = ထို့ကြောင့်။", topic: "sentence structure", level: "B2" },
      { id: "h1-i4", type: "order", prompt: "Arrange the complex sentence.", promptMm: "ဝါကျ ဖြစ်အောင် စီပါ။", tokens: ["As", "soon", "as", "the", "results", "are", "published", "we", "will", "inform", "you"], answers: ["As soon as the results are published we will inform you", "As soon as the results are published, we will inform you"], explanation: "as soon as + present simple + will (အနာဂတ်)။", topic: "sentence structure", level: "B2" },
    ],
    review: [
      { q: "simple, compound, complex ကွာခြားချက်က ဘာနည်း။", a: "simple = ဝါကျခွဲ ၁ ခု။ compound = ညီတူညီမျှ ဝါကျခွဲ ၂ ခု။ complex = အဓိက + အပေါင်းပါ။" },
      { q: "comma splice ဆိုတာ ဘာနည်း။", a: "ဝါကျခွဲ နှစ်ခုကို comma ဖြင့်သာ ဆက်ခြင်း — semicolon သို့မဟုတ် conjunction လိုသည်။" },
      { q: "although နှင့် but ကို ဘယ်လို သုံးသနည်း။", a: "တစ်ခုသာ သုံးရသည်။ 'Although ..., ...' သို့မဟုတ် '..., but ...'။" },
    ],
    summary: [
      "ဝါကျ အမျိုးအစား ၃ မျိုးကို ခွဲခြားသိရသည်။",
      "ဆက်စပ်စကားလုံးများက ဝါကျခွဲများကို ချိတ်ဆက်သည်။",
      "comma နေရာချထားမှုသည် အဓိပ္ပာယ်ကို ရှင်းလင်းစေသည်။",
    ],
    mastery: [
      "ဝါကျ အမျိုးအစား ၃ မျိုးကို ခွဲခြားနိုင်သည်။",
      "complex sentence ၅ ကြောင်း ကိုယ်တိုင် ရေးနိုင်သည်။",
      "လေ့ကျင့်ခန်း ၈၀% အထက် ရရှိသည်။",
    ],
    topics: ["sentence structure", "complex sentences", "punctuation"],
  },
  {
    id: "h2-register-nuance",
    moduleId: "H",
    title: "Register and Nuance: Formal vs Informal",
    titleMm: "အရေးအသား အဆင့်နှင့် အနုစိတ် အဓိပ္ပာယ်",
    level: "C1",
    minutes: 28,
    summaryLine: "တရားဝင်/မဟုတ်သည့် အရေးအသား ကွာခြားချက်နှင့် စကားလုံးများ၏ အနုစိတ် အဓိပ္ပာယ်ကို လေ့လာမည်။",
    objectives: [
      "formal နှင့် informal စကားလုံးများကို ခွဲခြားနိုင်ရမည်။",
      "အခြေအနေနှင့် သင့်လျော်သော register ကို ရွေးနိုင်ရမည်။",
      "အနုစိတ် အဓိပ္ပာယ်ကွဲပြားသော စကားလုံးများကို ခွဲခြားနိုင်ရမည်။",
    ],
    vocab: [
      { en: "register", mm: "ဘာသာစကား အဆင့်အတန်း (တရားဝင်/မဟုတ်)", pos: "noun", ipa: "/ˈredʒ.ɪ.stər/", example: "Academic writing uses a formal register.", exampleMm: "ပညာရေး စာရေးသားမှုတွင် တရားဝင် register ကို သုံးသည်။", collocations: ["formal register", "informal register"], topic: "register", level: "C1" },
      { en: "acquire", mm: "ရရှိသည် (ပိုင်ဆိုင်မှု/ကျွမ်းကျင်မှု)", pos: "verb", ipa: "/əˈkwaɪər/", example: "Children acquire language naturally.", exampleMm: "ကလေးများသည် ဘာသာစကားကို သဘာဝအတိုင်း ရရှိသည်။", collocations: ["acquire skills", "acquire knowledge"], topic: "register", level: "C1" },
      { en: "obtain", mm: "ရယူသည် (တရားဝင်)", pos: "verb", ipa: "/əbˈteɪn/", example: "You must obtain permission before entering.", exampleMm: "မဝင်မီ ခွင့်ပြုချက် ရယူရမည်။", collocations: ["obtain permission", "obtain a degree"], topic: "register", level: "C1" },
      { en: "nuance", mm: "အနုစိတ် အဓိပ္ပာယ် ကွာခြားချက်", pos: "noun", ipa: "/ˈnjuː.ɑːns/", example: "The word 'cheap' and 'affordable' have different nuances.", exampleMm: "'cheap' နှင့် 'affordable' တို့တွင် အနုစိတ် အဓိပ္ပာယ် ကွာခြားချက် ရှိသည်။", collocations: ["subtle nuance", "nuance of meaning"], topic: "register", level: "C1" },
      { en: "moreover", mm: "ထို့အပြင် (တရားဝင်)", pos: "adverb", ipa: "/mɔːrˈəʊ.vər/", example: "Moreover, the data supports this conclusion.", exampleMm: "ထို့အပြင် ဒေတာက ဤကောက်ချက်ကို ထောက်ခံသည်။", collocations: ["moreover, ..."], topic: "register", level: "C1" },
    ],
    sections: [
      {
        heading: "၁။ Formal နှင့် Informal စကားလုံးများ",
        body: [
          "Informal — get, buy, need, ask, tell, lots of, kids, stuff, a bit, really, so (အလွန်)။ Formal — obtain, purchase, require, request, inform, numerous, children, material, slightly, considerably။",
          "Informal ဝါကျများတွင် ကျုံ့ပုံ (I'm, don't, it's)၊ phrasal verb (find out, put off, look into) နှင့် ရိုးရှင်းသော ဝါကျများ ပါဝင်သည်။",
          "Formal စာများတွင် passive voice၊ nominalisation (decide → decision) နှင့် တိကျသော စကားလုံးများ ပါဝင်လေ့ရှိသည် — 'The committee decided to postpone the plan' → 'The postponement of the plan was decided by the committee.'",
        ],
        table: {
          headers: ["Informal", "Formal", "မှတ်ချက်"],
          rows: [
            ["find out", "discover / determine", "phrasal verb → တစ်လုံးတည်း ကြိယာ"],
            ["a lot of", "numerous / considerable", "ပမာဏ ဖော်ပြချက်"],
            ["kids", "children", "အသက်အရွယ် ဖော်ပြချက်"],
            ["I think", "It is argued that / In my view", "ထင်မြင်ချက် ဖော်ပြချက်"],
            ["but", "however / nevertheless", "ဆန့်ကျင်ချက်"],
          ],
        },
      },
      {
        heading: "၂။ အနုစိတ် အဓိပ္ပာယ် (Nuance)",
        body: [
          "'cheap' သည် ဈေးသက်သာသည်ဟု ဆိုသော်လည်း အရည်အသွေး နိမ့်သည်ဟု သွယ်ဝိုက် ဆိုလိုနိုင်သည်။ 'affordable' သည် ပိုယဉ်ကျေးပြီး အပျက်သဘောမပါ။",
          "'slim' နှင့် 'skinny' — နှစ်ခုစလုံး ပိန်သည်ဟု ဆိုသော်လည်း 'skinny' တွင် အပျက်သဘော အနည်းငယ် ပါနိုင်သည်။ 'confident' နှင့် 'arrogant' — ယုံကြည်မှုနှင့် မာနကြီးမှု။",
          "'say'၊ 'claim'၊ 'argue'၊ 'admit' — အားလုံး ပြောခြင်းနှင့် ဆက်စပ်သော်လည်း 'claim' တွင် သံသယ၊ 'admit' တွင် ဝန်ခံမှု အနုစိတ် ပါဝင်သည်။",
        ],
      },
      {
        heading: "၃။ Register ရွေးချယ်ပုံ",
        body: [
          "အခြေအနေကို ကြည့်ပါ — အလုပ်လျှောက်လွှာ၊ သုတေသန စာတမ်း၊ သတင်း ကြေညာချက် → formal။ မိတ်ဆွေထံ စာ၊ ဘလော့ဂ်၊ ကိုယ်ရေး မှတ်စု → informal။",
          "တစ်စောင်တည်းတွင် register မရောပါနှင့်။ တရားဝင် စာထဲတွင် 'gonna', 'wanna', 'stuff' မသုံးပါ။",
          "စကားပြောတွင်လည်း register ရှိသည် — ဆရာဝန်နှင့် စကားပြောခြင်းနှင့် သူငယ်ချင်းနှင့် ပြောခြင်း မတူပါ။",
        ],
      },
    ],
    examples: [
      { en: "The company conducted a survey to determine customer satisfaction.", mm: "ကုမ္ပဏီက ဖောက်သည် ကျေနပ်မှု ဆုံးဖြတ်ရန် စစ်တမ်း ကောက်ခဲ့သည်။", note: "formal — conducted, determine။" },
      { en: "We did a survey to find out what customers think.", mm: "ဖောက်သည်တွေ ဘယ်လို ထင်လဲ သိရအောင် စစ်တမ်း ကောက်ခဲ့တယ်။", note: "informal — did, find out။" },
      { en: "The proposed changes may have unintended consequences.", mm: "အဆိုပြုထားသော အပြောင်းအလဲများက မမျှော်လင့်ထားသော အကျိုးဆက်များ ဖြစ်စေနိုင်သည်။", note: "'may have' — သတိထားသော အသံ။" },
      { en: "I would argue that the current policy is unsustainable.", mm: "လက်ရှိ မူဝါဒသည် ရေရှည် မတည်တံ့နိုင်ဟု ကျွန်တော် ဆိုချင်ပါသည်။", note: "'I would argue' — ပညာရေး အရေးအသား။" },
      { en: "The figures are considerably higher than last year's.", mm: "ဂဏန်းများသည် မနှစ်က ထက် သိသိသာသာ မြင့်မားသည်။", note: "'considerably' — formal intensity။" },
    ],
    mistakes: [
      { wrong: "The research was done by us and we got a lot of data.", right: "The research was conducted by our team, and a considerable amount of data was collected.", why: "formal စာတွင် phrasal verb နှင့် ရိုးရှင်းလွန်းသော စကားလုံးများကို ရှောင်သည်။" },
      { wrong: "Dear Sir, I wanna apply for the job.", right: "Dear Sir or Madam, I would like to apply for the position.", why: "'wanna' သည် informal ဖြစ်ပြီး လျှောက်လွှာတွင် မသုံးပါ။" },
      { wrong: "The plan is cheap, so it is good.", right: "The plan is cost-effective; however, its quality should also be considered.", why: "'cheap' တွင် အရည်အသွေး နိမ့်သည်ဟု အနုစိတ် ဆိုလိုနိုင်သည်။ 'cost-effective' က ပိုတိကျသည်။" },
    ],
    guided: [
      { id: "h2-g1", type: "mcq", prompt: "Which word is more formal than 'buy'?", promptMm: "'buy' ထက် တရားဝင်သော စကားလုံးကို ရွေးပါ။", options: ["get", "purchase", "grab", "pick up"], answer: 1, explanation: "purchase သည် တရားဝင် စာများတွင် သုံးသည့် ကြိယာ ဖြစ်သည်။", topic: "register", level: "C1" },
      { id: "h2-g2", type: "mcq", prompt: "Which sentence fits an academic report?", promptMm: "ပညာရေး အစီရင်ခံစာအတွက် သင့်လျော်သည့် ဝါကျကို ရွေးပါ။", options: ["We looked into it and it was pretty bad.", "The investigation revealed significant weaknesses.", "It's a total mess.", "Things are bad, you know."], answer: 1, explanation: "The investigation revealed significant weaknesses — formal register။", topic: "register", level: "C1" },
      { id: "h2-g3", type: "fill", prompt: "The study was ___ by a team of researchers. (conduct)", promptMm: "formal passive ဖြည့်ပါ။", answers: ["conducted"], explanation: "was conducted သည် formal passive ဖြစ်သည်။", topic: "register", level: "C1" },
      { id: "h2-g4", type: "correct", prompt: "Correct for formal writing: We need to find out why sales dropped a lot.", promptMm: "တရားဝင် အရေးအသား ဖြစ်အောင် ပြင်ပါ။", answers: ["We need to determine why sales declined considerably.", "It is necessary to determine why sales declined significantly.", "We must establish why sales fell considerably."], explanation: "find out → determine/establish၊ a lot → considerably/significantly။", topic: "register", level: "C1" },
    ],
    independent: [
      { id: "h2-i1", type: "mcq", prompt: "'The politician claimed that taxes would fall.' What does 'claimed' suggest?", promptMm: "'claimed' က ဘာကို သွယ်ဝိုက် ဆိုလိုသနည်း။", options: ["The writer agrees completely.", "The writer may doubt the statement.", "The writer is angry.", "The statement is funny."], answer: 1, explanation: "'claim' တွင် သံသယ အနုစိတ် ပါဝင်နိုင်သည်။", topic: "register", level: "C1" },
      { id: "h2-i2", type: "translate", prompt: "Translate (formal): ဤသုတေသနက ကျွန်တော်တို့၏ ကောက်ချက်ကို ထောက်ခံသည်။", promptMm: "တရားဝင် အင်္ဂလိပ်လို ပြန်ဆိုပါ။", answers: ["This research supports our conclusion.", "The research supports our conclusion.", "This study supports our findings."], explanation: "supports = ထောက်ခံသည်။", topic: "register", level: "C1" },
      { id: "h2-i3", type: "fill", prompt: "The results were ___ higher than expected. (considerable)", promptMm: "formal adverb ဖြည့်ပါ။", answers: ["considerably"], explanation: "considerably = သိသိသာသာ။", topic: "register", level: "C1" },
      { id: "h2-i4", type: "order", prompt: "Arrange the formal sentence.", promptMm: "formal ဝါကျ ဖြစ်အောင် စီပါ။", tokens: ["The", "committee", "has", "decided", "to", "postpone", "the", "meeting"], answers: ["The committee has decided to postpone the meeting"], explanation: "committee + has + decided + to postpone — formal register။", topic: "register", level: "C1" },
    ],
    review: [
      { q: "formal နှင့် informal ကွာခြားချက် ၃ ခု ပြောပါ။", a: "formal တွင် ကျုံ့ပုံမပါ၊ phrasal verb နည်း၊ passive/nominalisation ပိုများ။" },
      { q: "'cheap' နှင့် 'affordable' ကွာခြားချက်က ဘာနည်း။", a: "'cheap' တွင် အရည်အသွေး နိမ့်သည်ဟု အနုစိတ် ဆိုလိုနိုင်သည်။ 'affordable' က ယဉ်ကျေးပြီး အပျက်သဘော မပါ။" },
      { q: "register မရောသင့်သည့် အကြောင်းရင်းက ဘာနည်း။", a: "တစ်စောင်တည်းတွင် register ရောနှောလျှင် စာဖတ်သူအတွက် မသင့်လျော်ဘဲ ယုံကြည်မှု လျော့စေသည်။" },
    ],
    summary: [
      "register သည် အခြေအနေနှင့် ရည်ရွယ်သူအပေါ် မူတည်သည်။",
      "စကားလုံးများ၏ အနုစိတ် အဓိပ္ပာယ်ကို သိရသည်။",
      "တစ်စောင်တည်းတွင် register မရောရပါ။",
    ],
    mastery: [
      "informal ဝါကျကို formal ပြောင်းနိုင်သည်။",
      "အနုစိတ် အဓိပ္ပာယ် ကွာခြားသည့် စကားလုံး ၅ စုံကို ခွဲခြားနိုင်သည်။",
      "လေ့ကျင့်ခန်း ၈၀% အထက် ရရှိသည်။",
    ],
    topics: ["register", "formal writing", "vocabulary nuance"],
  },
  {
    id: "h3-confused-words",
    moduleId: "H",
    title: "Commonly Confused Words and Advanced Collocations",
    titleMm: "မကြာခဏ ရောထွေးတတ်သော စကားလုံးများ နှင့် collocation",
    level: "B2",
    minutes: 26,
    summaryLine: "အသံ/အရေးအသား တူသော စကားလုံးများနှင့် သဘာဝကျသော စကားလုံးတွဲစပ်မှု (collocation) များကို လေ့လာမည်။",
    objectives: [
      "မကြာခဏ ရောထွေးတတ်သော စကားလုံး ၁၀ စုံကို ခွဲခြားနိုင်ရမည်။",
      "collocation မှားယွင်းမှုများကို ရှာတွေ့နိုင်ရမည်။",
      "စကားလုံးတွဲစပ်မှု ၁၀ ခုကို မှန်ကန်စွာ သုံးနိုင်ရမည်။",
    ],
    vocab: [
      { en: "affect", mm: "သက်ရောက်စေသည် (ကြိယာ)", pos: "verb", ipa: "/əˈfekt/", example: "The weather affects my mood.", exampleMm: "ရာသီဥတုက ကျွန်တော့် စိတ်ခံစားမှုကို သက်ရောက်စေတယ်။", collocations: ["affect performance", "affect health"], topic: "confused words", level: "B2" },
      { en: "effect", mm: "အကျိုးသက်ရောက်မှု (နာမ်)", pos: "noun", ipa: "/ɪˈfekt/", example: "The effect of the policy was immediate.", exampleMm: "မူဝါဒ၏ အကျိုးသက်ရောက်မှုက ချက်ချင်း ဖြစ်ခဲ့တယ်။", collocations: ["have an effect on", "side effect"], topic: "confused words", level: "B2" },
      { en: "make a decision", mm: "ဆုံးဖြတ်ချက် ချသည် (collocation)", pos: "phrase", ipa: "/meɪk ə dɪˈsɪʒ.ən/", example: "We need to make a decision today.", exampleMm: "ဒီနေ့ ဆုံးဖြတ်ချက် ချရမယ်။", collocations: ["make a decision", "reach a decision"], topic: "collocations", level: "B2" },
      { en: "strong evidence", mm: "ခိုင်မာသော အထောက်အထား", pos: "phrase", ipa: "/strɒŋ ˈev.ɪ.dəns/", example: "There is strong evidence that exercise improves health.", exampleMm: "လေ့ကျင့်ခန်းက ကျန်းမာရေးကို တိုးတက်စေတယ်ဆိုတဲ့ ခိုင်မာတဲ့ အထောက်အထား ရှိတယ်။", collocations: ["strong evidence", "clear evidence"], topic: "collocations", level: "B2" },
      { en: "do research", mm: "သုတေသန လုပ်သည်", pos: "phrase", ipa: "/duː rɪˈsɜːtʃ/", example: "She is doing research on climate change.", exampleMm: "သူမ ရာသီဥတု ပြောင်းလဲမှုအပေါ် သုတေသန လုပ်နေတယ်။", collocations: ["conduct research", "do research"], topic: "collocations", level: "B2" },
    ],
    sections: [
      {
        heading: "၁။ မကြာခဏ ရောထွေးတတ်သော စကားလုံးများ",
        body: [
          "affect (ကြိယာ — သက်ရောက်သည်) / effect (နာမ် — အကျိုးသက်ရောက်မှု)။ ဥပမာ — The rain affected the game. The effect was a two-hour delay.",
          "advice (နာမ်) / advise (ကြိယာ)။ practise (ကြိယာ — ဗြိတိန်) / practice (နာမ်)။",
          "lose (ဆုံးရှုံး) / loose (လျော့ရဲ)၊ than (ထက်) / then (ထို့နောက်)၊ their (သူတို့၏) / there (ထိုနေရာ) / they're (they are)၊ its / it's။",
          "economic (စီးပွားရေး — နိုင်ငံ/စနစ်) / economical (ချွေတာတတ်သော)။ sensible (ဆင်ခြင်တုံတရားရှိ) / sensitive (ထိခိုက်လွယ်)။",
        ],
        table: {
          headers: ["စကားလုံး ၁", "စကားလုံး ၂", "ဥပမာ"],
          rows: [
            ["affect (v)", "effect (n)", "Smoking affects health. / the effect of smoking"],
            ["advice (n)", "advise (v)", "good advice / I advise you to rest"],
            ["lose (v)", "loose (adj)", "don't lose it / a loose shirt"],
            ["economic", "economical", "economic growth / an economical car"],
          ],
        },
      },
      {
        heading: "၂။ Collocation ဆိုတာ ဘာနည်း",
        body: [
          "Collocation သည် စကားလုံးများ သဘာဝအတိုင်း တွဲသုံးလေ့ရှိသည့် ပေါင်းစပ်မှု ဖြစ်သည် — 'make a decision' (do မဟုတ်)၊ 'strong evidence' (big မဟုတ်)၊ 'heavy rain' (strong rain မဟုတ်)။",
          "ကြိယာ + နာမ် — make a mistake, take a break, pay attention, keep a record, draw a conclusion, raise a question။",
          "နာမဝိသေသန + နာမ် — heavy traffic, close friend, major problem, key factor, deep concern, strong argument။",
          "ဝိဘတ်နှင့် တွဲသော စကားလုံးများ — interested in, depend on, responsible for, similar to, capable of, aware of, suffer from။",
        ],
      },
      {
        heading: "၃။ Collocation မှားများကို ပြင်နည်း",
        body: [
          "စကားလုံးတစ်လုံးချင်း၏ အဓိပ္ပာယ် မှန်သော်လည်း တွဲသုံးမှု မှားနိုင်သည် — 'do a mistake' မှားသည်၊ 'make a mistake' မှန်သည်။",
          "စကားလုံးတွဲစပ်မှုကို ဥပမာဝါကျများနှင့်အတူ မှတ်ပါ။ တစ်လုံးချင်း မှတ်ခြင်းထက် ထိရောက်သည်။",
          "ပညာရေး အရေးအသားတွင် collocation မှန်ကန်မှုသည် စာဖတ်သူအတွက် သဘာဝကျမှုကို ဖန်တီးသည်။",
        ],
      },
    ],
    examples: [
      { en: "The new policy affected thousands of workers.", mm: "မူဝါဒအသစ်က ဝန်ထမ်း ထောင်ပေါင်းများစွာကို သက်ရောက်ခဲ့တယ်။", note: "affect — ကြိယာ။" },
      { en: "The effect of the new policy was immediate.", mm: "မူဝါဒအသစ်၏ အကျိုးသက်ရောက်မှုက ချက်ချင်း ဖြစ်ခဲ့တယ်။", note: "effect — နာမ်။" },
      { en: "We need to make a decision before Friday.", mm: "သောကြာနေ့ မတိုင်မီ ဆုံးဖြတ်ချက် ချရမယ်။", note: "make a decision (do a decision မဟုတ်)။" },
      { en: "There is strong evidence that the programme works.", mm: "အစီအစဉ် အလုပ်ဖြစ်တယ်ဆိုတဲ့ ခိုင်မာတဲ့ အထောက်အထား ရှိတယ်။", note: "strong evidence (big evidence မဟုတ်)။" },
      { en: "He is responsible for the marketing team.", mm: "သူက စျေးကွက်အဖွဲ့အတွက် တာဝန်ရှိတယ်။", note: "responsible for (of မဟုတ်)။" },
    ],
    mistakes: [
      { wrong: "The weather effects my mood.", right: "The weather affects my mood.", why: "ကြိယာအနေဖြင့် affect ကို သုံးသည်။ effects သည် နာမ်ဗဟုဝုဏ်း။" },
      { wrong: "I did a mistake in the exam.", right: "I made a mistake in the exam.", why: "mistake နှင့် တွဲသော ကြိယာမှာ make ဖြစ်သည်။" },
      { wrong: "She is interested on history.", right: "She is interested in history.", why: "interested နှင့် တွဲသော ဝိဘတ်မှာ in ဖြစ်သည်။" },
    ],
    guided: [
      { id: "h3-g1", type: "mcq", prompt: "The noise ___ my concentration.", promptMm: "သင့်လျော်သော ကြိယာ ရွေးပါ။", options: ["effected", "affected", "effect", "affects to"], answer: 1, explanation: "affect = သက်ရောက်စေသည် (ကြိယာ)။ past form သည် affected။", topic: "confused words", level: "B2" },
      { id: "h3-g2", type: "mcq", prompt: "Choose the natural collocation.", promptMm: "သဘာဝကျသော စကားလုံးတွဲစပ်မှုကို ရွေးပါ။", options: ["do a decision", "make a decision", "take a decision of", "create a decision"], answer: 1, explanation: "make a decision သည် သဘာဝကျသော collocation ဖြစ်သည်။", topic: "collocations", level: "B2" },
      { id: "h3-g3", type: "fill", prompt: "There is ___ evidence that exercise improves health.", promptMm: "ခိုင်မာသော ဟု အဓိပ္ပာယ်ရသည့် နာမဝိသေသန ဖြည့်ပါ။", answers: ["strong", "clear"], explanation: "strong evidence / clear evidence သည် သဘာဝကျသော collocation ဖြစ်သည်။", topic: "collocations", level: "B2" },
      { id: "h3-g4", type: "correct", prompt: "Correct: I advise you to take my advise.", promptMm: "ဝါကျကို ပြင်ပါ။", answers: ["I advise you to take my advice.", "I advise you to take my advice"], explanation: "advise = ကြိယာ၊ advice = နာမ်။", topic: "confused words", level: "B2" },
    ],
    independent: [
      { id: "h3-i1", type: "fill", prompt: "Do not ___ your ticket. (lose/loose)", promptMm: "သင့်လျော်သည်ကို ဖြည့်ပါ။", answers: ["lose"], explanation: "lose = ဆုံးရှုံးသည် (ကြိယာ)။ loose = လျော့ရဲ (နာမဝိသေသန)။", topic: "confused words", level: "B2" },
      { id: "h3-i2", type: "mcq", prompt: "Which is correct?", promptMm: "မှန်ကန်သော ဝါကျကို ရွေးပါ။", options: ["Their going to the market.", "There going to the market.", "They're going to the market.", "They're go to the market."], answer: 2, explanation: "They're = they are။ 'They're going' မှန်သည်။", topic: "confused words", level: "B2" },
      { id: "h3-i3", type: "translate", prompt: "Translate: မူဝါဒအသစ်က ကျွန်တော်တို့ရဲ့ အလုပ်ကို သက်ရောက်နိုင်တယ်။", promptMm: "မြန်မာစကားကို အင်္ဂလိပ်လို ပြန်ဆိုပါ။", answers: ["The new policy may affect our work.", "The new policy could affect our work.", "The new policy can affect our work."], explanation: "affect = သက်ရောက်စေသည် (ကြိယာ)။", topic: "confused words", level: "B2" },
      { id: "h3-i4", type: "order", prompt: "Arrange the sentence.", promptMm: "ဝါကျ ဖြစ်အောင် စီပါ။", tokens: ["She", "is", "responsible", "for", "the", "sales", "team"], answers: ["She is responsible for the sales team"], explanation: "responsible for + noun ပုံစံ။", topic: "collocations", level: "B2" },
    ],
    review: [
      { q: "affect နှင့် effect ကွာခြားချက်က ဘာနည်း။", a: "affect = ကြိယာ (သက်ရောက်သည်)။ effect = နာမ် (အကျိုးသက်ရောက်မှု)။" },
      { q: "collocation မှန် ၃ ခု ပြောပါ။", a: "make a decision, strong evidence, responsible for။" },
      { q: "advice နှင့် advise ကို ဘယ်လို ခွဲသနည်း။", a: "advice = နာမ်၊ advise = ကြိယာ။" },
    ],
    summary: [
      "အသံတူ စကားလုံးများကို အဓိပ္ပာယ်နှင့် ဝါကျအခန်းကဏ္ဍဖြင့် ခွဲခြားသည်။",
      "collocation မှန်ကန်မှုက သဘာဝကျသော အင်္ဂလိပ်စာကို ဖန်တီးသည်။",
      "ဝိဘတ်တွဲသုံးမှုကို စကားစုအလိုက် မှတ်ရသည်။",
    ],
    mastery: [
      "ရောထွေးတတ်သော စကားလုံး ၁၀ စုံကို ၉၀% တိကျစွာ ခွဲခြားနိုင်သည်။",
      "collocation မှား ၅ ခုကို ရှာပြင်နိုင်သည်။",
      "လေ့ကျင့်ခန်း ၈၀% အထက် ရရှိသည်။",
    ],
    topics: ["confused words", "collocations"],
  },
  {
    id: "h4-summary-writing",
    moduleId: "H",
    title: "Summarising and Paraphrasing",
    titleMm: "အနှစ်ချုပ်ခြင်း နှင့် ပြန်လည်ရေးသားခြင်း",
    level: "C1",
    minutes: 28,
    summaryLine: "စာသားတစ်ခုကို အနှစ်ချုပ်ပုံ၊ မိမိစကားလုံးဖြင့် ပြန်ရေးပုံနှင့် ကိုးကားပုံကို လေ့လာမည်။",
    objectives: [
      "စကားလုံး ၂၀၀ စာသားကို စကားလုံး ၅၀ ဖြင့် အနှစ်ချုပ်နိုင်ရမည်။",
      "မူရင်းအဓိပ္ပာယ် မပျက်ဘဲ paraphrase လုပ်နိုင်ရမည်။",
      "ကိုးကားခြင်း (citation) ၏ အခြေခံ စည်းမျဉ်းကို နားလည်ရမည်။",
    ],
    vocab: [
      { en: "summarise", mm: "အနှစ်ချုပ်သည်", pos: "verb", ipa: "/ˈsʌm.ə.raɪz/", example: "Summarise the article in three sentences.", exampleMm: "ဆောင်းပါးကို ဝါကျ သုံးကြောင်းဖြင့် အနှစ်ချုပ်ပါ။", collocations: ["summarise the main points"], topic: "academic writing", level: "C1" },
      { en: "paraphrase", mm: "မိမိစကားလုံးဖြင့် ပြန်ရေးသည်", pos: "verb", ipa: "/ˈpær.ə.freɪz/", example: "Paraphrase the sentence without changing its meaning.", exampleMm: "အဓိပ္ပာယ် မပြောင်းဘဲ ဝါကျကို ပြန်ရေးပါ။", collocations: ["paraphrase a sentence"], topic: "academic writing", level: "C1" },
      { en: "cite", mm: "ကိုးကားသည်", pos: "verb", ipa: "/saɪt/", example: "Always cite your sources.", exampleMm: "ရင်းမြစ်များကို အမြဲ ကိုးကားပါ။", collocations: ["cite a source", "cite evidence"], topic: "academic writing", level: "C1" },
      { en: "plagiarism", mm: "သူတစ်ပါး စာကို ခိုးယူခြင်း", pos: "noun", ipa: "/ˈpleɪ.dʒər.ɪ.zəm/", example: "Copying without citation is plagiarism.", exampleMm: "ကိုးကားခြင်း မပြုဘဲ ကူးချခြင်းသည် plagiarism ဖြစ်သည်။", collocations: ["avoid plagiarism", "accusation of plagiarism"], topic: "academic writing", level: "C1" },
    ],
    sections: [
      {
        heading: "၁။ အနှစ်ချုပ် ရေးနည်း",
        body: [
          "၁) စာသားကို နှစ်ကြိမ် ဖတ်ပါ။ ၂) အဓိကအချက်များကို မှတ်ပါ။ ၃) ထောက်ခံချက် အသေးစိတ်နှင့် ဥပမာများကို ဖယ်ပါ။ ၄) မိမိစကားလုံးဖြင့် ပြန်ရေးပါ။ ၅) မူရင်းနှင့် နှိုင်းယှဉ်စစ်ပါ။",
          "အနှစ်ချုပ်တွင် ထင်မြင်ချက် အသစ် မထည့်ပါ။ မူရင်းအချက်များကိုသာ ဖော်ပြသည်။",
          "စကားလုံး အရေအတွက်ကို လျှော့ချရန် — ဥပမာများ ဖယ်ခြင်း၊ အထွေထွေ ဖော်ပြချက်များကို ပေါင်းခြင်း၊ စကားလုံး ထပ်နေမှုကို ဖယ်ခြင်း။",
        ],
      },
      {
        heading: "၂။ Paraphrase နည်းလမ်းများ",
        body: [
          "စကားလုံး အစားထိုးခြင်း — 'important' → 'significant'၊ 'buy' → 'purchase'။ သို့သော် အဓိပ္ပာယ် အနုစိတ် မပျက်ရပါ။",
          "ဝါကျ ဖွဲ့စည်းပုံ ပြောင်းခြင်း — active ↔ passive၊ ဝါကျခွဲ အစီအစဉ် ပြောင်းခြင်း။ ဥပမာ — 'Researchers found that sleep improves memory' → 'Sleep has been found to improve memory.'",
          "အဓိပ္ပာယ် တူညီသော စကားစုဖြင့် ပြန်ရေးခြင်း — 'Many people cannot afford housing' → 'Housing is unaffordable for a large part of the population.'",
        ],
        table: {
          headers: ["မူရင်း", "Paraphrase", "နည်းလမ်း"],
          rows: [
            ["The government should invest more in education.", "Greater investment in education is needed.", "nominalisation + passive"],
            ["Many students fail because they do not plan.", "A lack of planning leads many students to fail.", "cause-result ပြောင်း"],
            ["It is very important to check sources.", "Verifying sources is essential.", "ဖွဲ့စည်းပုံ + စကားလုံး ပြောင်း"],
          ],
        },
      },
      {
        heading: "၃။ ကိုးကား နှင့် ခိုးယူမှု မပြုရန်",
        body: [
          "အခြားသူ၏ အယူအဆ၊ စကားလုံး သို့မဟုတ် ဒေတာကို သုံးလျှင် ရင်းမြစ်ကို ဖော်ပြရသည် — ဥပမာ (Smith, 2022)။",
          "Paraphrase လုပ်သည့်အခါတွင်လည်း ရင်းမြစ် ကိုးကားရသည်။ စကားလုံး အနည်းငယ် ပြောင်းရုံဖြင့် ခိုးယူမှု မပြုရာ မရောက်ပါ။",
          "ကိုယ်ပိုင် ထင်မြင်ချက်နှင့် ကိုးကားထားသော အချက်ကို ခွဲခြားရန် — 'According to Smith (2022), ... However, in my view, ...'။",
        ],
      },
    ],
    examples: [
      { en: "Original: 'Regular exercise reduces the risk of heart disease.' Summary: Exercise lowers heart disease risk.", mm: "မူရင်း — ပုံမှန် လေ့ကျင့်ခန်းက နှလုံးရောဂါ ဖြစ်နိုင်ခြေကို လျှော့ချသည်။ အနှစ်ချုပ် — လေ့ကျင့်ခန်းက နှလုံးရောဂါ ဖြစ်နိုင်ခြေကို လျှော့ချသည်။" },
      { en: "According to the report, air pollution has worsened since 2019.", mm: "အစီရင်ခံစာအရ ၂၀၁၉ ကတည်းက လေထု ညစ်ညမ်းမှု ပိုဆိုးလာခဲ့သည်။", note: "According to ... — ရင်းမြစ် ကိုးကားပုံ။" },
      { en: "The study suggests that sleep deprivation affects concentration.", mm: "သုတေသနက အိပ်ရေးပျက်ခြင်းက အာရုံစူးစိုက်မှုကို သက်ရောက်ကြောင်း ညွှန်ပြသည်။", note: "'suggests' — သတိထားသော အသုံး။" },
      { en: "In other words, the policy benefits urban areas more than rural ones.", mm: "တစ်နည်းအားဖြင့် မူဝါဒက ကျေးလက်ဒေသထက် မြို့ပြဒေသကို ပိုအကျိုးပြုသည်။", note: "In other words — ပြန်ရှင်းပြခြင်း။" },
      { en: "This essay argues that digital tools should support, not replace, classroom teaching.", mm: "ဤစာစီစာကုံးက ဒစ်ဂျစ်တယ် ကိရိယာများသည် အတန်းတွင်း သင်ကြားမှုကို အစားထိုးခြင်း မဟုတ်ဘဲ ထောက်ပံ့သင့်သည်ဟု ဆိုသည်။" },
    ],
    mistakes: [
      { wrong: "မူရင်းဝါကျကို စကားလုံး ၂–၃ လုံး ပြောင်းပြီး paraphrase ဟု ခေါ်ခြင်း", right: "ဖွဲ့စည်းပုံနှင့် စကားလုံးများကို သိသိသာသာ ပြောင်းပါ", why: "စကားလုံး အနည်းငယ်သာ ပြောင်းလျှင် ခိုးယူမှု (plagiarism) ဖြစ်နိုင်သည်။" },
      { wrong: "အနှစ်ချုပ်တွင် ကိုယ်ပိုင် ထင်မြင်ချက် ထည့်ခြင်း", right: "မူရင်း အချက်များကိုသာ ဖော်ပါ", why: "အနှစ်ချုပ်သည် မူရင်းကို ကိုယ်စားပြုရမည်။" },
      { wrong: "ရင်းမြစ် မဖော်ဘဲ အချက်အလက် သုံးခြင်း", right: "ရင်းမြစ်ကို ကိုးကားပါ", why: "ကိုးကားခြင်း မပြုဘဲ အခြားသူ၏ အလုပ်ကို သုံးခြင်းသည် ပညာရေး ခိုးယူမှု ဖြစ်သည်။" },
    ],
    guided: [
      { id: "h4-g1", type: "mcq", prompt: "What should a summary contain?", promptMm: "အနှစ်ချုပ်တွင် ဘာပါသင့်သနည်း။", options: ["every example from the original", "the main points in your own words", "your opinion of the text", "the author's exact sentences"], answer: 1, explanation: "အနှစ်ချုပ်တွင် အဓိကအချက်များကို မိမိစကားလုံးဖြင့် ဖော်ပြသည်။", topic: "academic writing", level: "C1" },
      { id: "h4-g2", type: "mcq", prompt: "Which is the best paraphrase of 'Many people cannot afford housing'?", promptMm: "အကောင်းဆုံး paraphrase ကို ရွေးပါ။", options: ["Many people cannot afford housing.", "Housing is unaffordable for many people.", "Housing many people cannot afford.", "People cannot afford many housing."], answer: 1, explanation: "ဖွဲ့စည်းပုံနှင့် စကားလုံး ပြောင်းထားပြီး အဓိပ္ပာယ် မပျက်ပါ။", topic: "academic writing", level: "C1" },
      { id: "h4-g3", type: "fill", prompt: "Copying someone's work without citation is called ___.", promptMm: "ခိုးယူခြင်း ဝေါဟာရ ဖြည့်ပါ။", answers: ["plagiarism"], explanation: "plagiarism = သူတစ်ပါး စာကို ခိုးယူခြင်း။", topic: "academic writing", level: "C1" },
      { id: "h4-g4", type: "correct", prompt: "Correct: According to a report it says that pollution increased.", promptMm: "ဝါကျကို ပြင်ပါ။", answers: ["According to a report, pollution has increased.", "According to a report, pollution increased."], explanation: "'According to ... it says' သည် ထပ်နေသည်။ According to + source, + clause ကို သုံးသည်။", topic: "academic writing", level: "C1" },
    ],
    independent: [
      { id: "h4-i1", type: "mcq", prompt: "Which sentence uses an acceptable source reference?", promptMm: "ရင်းမြစ် ကိုးကားမှု မှန်ကန်သည့် ဝါကျကို ရွေးပါ။", options: ["Studies show that sleep is important.", "According to Walker (2017), sleep supports memory.", "Everyone knows sleep is important.", "I read it somewhere that sleep is important."], answer: 1, explanation: "ရင်းမြစ် အတိအကျ (Walker, 2017) ဖော်ပြထားသည်။", topic: "academic writing", level: "C1" },
      { id: "h4-i2", type: "translate", prompt: "Translate: ဤအစီရင်ခံစာအရ လေထု ညစ်ညမ်းမှု တိုးလာနေသည်။", promptMm: "ပညာရေး အရေးအသား ဖြင့် ပြန်ဆိုပါ။", answers: ["According to this report, air pollution is increasing.", "The report states that air pollution is increasing.", "According to the report, air pollution has been increasing."], explanation: "According to + source, + clause။", topic: "academic writing", level: "C1" },
      { id: "h4-i3", type: "fill", prompt: "In other ___, digital tools should support teaching rather than replace it.", promptMm: "တစ်နည်းအားဖြင့် ဟု အဓိပ္ပာယ်ရသည့် စကားလုံး ဖြည့်ပါ။", answers: ["words"], explanation: "In other words = တစ်နည်းအားဖြင့်။", topic: "academic writing", level: "C1" },
      { id: "h4-i4", type: "order", prompt: "Arrange the paraphrase.", promptMm: "paraphrase ဝါကျ ဖြစ်အောင် စီပါ။", tokens: ["Sleep", "has", "been", "found", "to", "improve", "memory"], answers: ["Sleep has been found to improve memory"], explanation: "Researchers found that ... → Sleep has been found to ... (passive paraphrase)။", topic: "academic writing", level: "C1" },
    ],
    review: [
      { q: "အနှစ်ချုပ် ရေးရာတွင် ဘာကို ဖယ်ရှားသနည်း။", a: "ဥပမာများ၊ အသေးစိတ် ထောက်ခံချက်များနှင့် ထပ်နေသော စကားလုံးများ။" },
      { q: "paraphrase နည်းလမ်း ၃ ခု ပြောပါ။", a: "စကားလုံး အစားထိုးခြင်း၊ ဝါကျဖွဲ့စည်းပုံ ပြောင်းခြင်း၊ စကားစု ပြန်ရေးခြင်း။" },
      { q: "plagiarism မဖြစ်ရန် ဘာလုပ်ရမည်။", a: "ရင်းမြစ် ကိုးကားပြီး မိမိစကားလုံးဖြင့် ရေးရသည်။" },
    ],
    summary: [
      "အနှစ်ချုပ်သည် အဓိကအချက်များကို တိုတိုဖြင့် ဖော်ပြသည်။",
      "paraphrase သည် အဓိပ္ပာယ် မပျက်ဘဲ ပြန်ရေးသည်။",
      "ရင်းမြစ် ကိုးကားခြင်း သည် ပညာရေး ရိုးသားမှု၏ အခြေခံ ဖြစ်သည်။",
    ],
    mastery: [
      "စကားလုံး ၂၀၀ စာသားကို ၅၀ လုံးဖြင့် အနှစ်ချုပ်နိုင်သည်။",
      "ဝါကျ ၅ ကြောင်းကို paraphrase လုပ်နိုင်သည်။",
      "လေ့ကျင့်ခန်း ၈၀% အထက် ရရှိသည်။",
    ],
    topics: ["academic writing", "summary", "paraphrase"],
  },
];
