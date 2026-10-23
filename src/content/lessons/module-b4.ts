import type { Lesson } from "@/lib/types";
import { buildLessons, type LessonSeed } from "./builder.ts";

const seeds: LessonSeed[] = [
  {
    id: "b18-phrasal-verbs",
    moduleId: "B",
    title: "Common Phrasal Verbs",
    titleMm: "အသုံးများ phrasal verb များ",
    level: "B2",
    minutes: 22,
    summaryLine:
      "ကြိယာနှင့် ဝိဘတာ/ကြိယာဝိသေသန တွဲဖက်မှုဖြင့် အဓိပ္ပာယ် အသစ် ဖြစ်ပေါ်သည့် phrasal verb ၁၂ ခုကို သဘာဝကျသော ဝါကျများတွင် လေ့ကျင့်သည်။",
    objectives: [
      "အသုံးများ phrasal verb ၁၂ ခုကို အဓိပ္ပာယ် ဖော်ပြနိုင်မည်။",
      "ခွဲနိုင်သော (separable) နှင့် မခွဲနိုင်သော (inseparable) ကို ခွဲခြားနိုင်မည်။",
      "စာရေးသားမှုတွင် တရားဝင် ကြိယာနှင့် လဲလှယ်နိုင်မည်။",
    ],
    vocab: [
      { en: "give up", mm: "လက်လျှော့သည်", ipa: "ɡɪv ʌp", pos: "phrasal verb", example: "He gave up smoking last year.", exampleMm: "မနှစ်က သူ ဆေးလိပ် ဖြတ်ခဲ့သည်။", topic: "phrasal verbs", level: "B1" },
      { en: "look after", mm: "ပြုစုစောင့်ရှောက်သည်", ipa: "lʊk ˈɑːftə", pos: "phrasal verb", example: "She looks after her younger brother.", exampleMm: "သူမ ညီကို ပြုစုစောင့်ရှောက်သည်။", topic: "phrasal verbs", level: "B1" },
      { en: "turn down", mm: "ငြင်းပယ်သည် / အသံလျှော့သည်", ipa: "tɜːn daʊn", pos: "phrasal verb", example: "They turned down the offer.", exampleMm: "သူတို့ အဆိုပြုချက်ကို ငြင်းပယ်ခဲ့သည်။", topic: "phrasal verbs", level: "B2" },
      { en: "put off", mm: "ရွှေ့ဆိုင်းသည်", ipa: "pʊt ɒf", pos: "phrasal verb", example: "We put off the meeting until Friday.", exampleMm: "အစည်းအဝေးကို သောကြာနေ့အထိ ရွှေ့ဆိုင်းခဲ့သည်။", topic: "phrasal verbs", level: "B2" },
    ],
    sections: [
      {
        heading: "phrasal verb ဆိုတာ",
        body: [
          "ကြိယာနှင့် particle (up, off, on, after စသည်) တွဲဖက်ပြီး ကြိယာ၏ မူလအဓိပ္ပာယ်နှင့် ကွဲပြားသော အဓိပ္ပာယ် ဖြစ်ပေါ်သည် — 'give' (ပေးသည်) → 'give up' (လက်လှျော့သည်)။",
          "တစ်ချို့သည် ခွဲနိုင်သည် — 'turn the music down' / 'turn down the music'။ နာမ်စား (it/them) ပါလျှင် အလယ်တွင် ထားရသည် — 'turn it down' ('turn down it' မှားသည်)။",
          "အချို့သည် မခွဲနိုင်ပါ — 'look after the baby' ('look the baby after' မှားသည်)။ မည်သည့် အမျိုးအစား ဖြစ်သည်ကို အဘိဓာန်တွင် စစ်နိုင်သည်။",
        ],
        table: {
          headers: ["phrasal verb", "အဓိပ္ပာယ်", "ဥပမာ"],
          rows: [
            ["find out", "ရှာဖွေ တွေ့ရှိသည်", "I found out the truth."],
            ["put off", "ရွှေ့ဆိုင်းသည်", "They put off the trip."],
            ["give up", "လက်လှျော့သည်", "Don't give up."],
            ["take off", "ချွတ်သည် / လေယာဉ် ထွက်သည်", "The plane took off late."],
            ["get on with", "သဘောတူ နေထိုင်သည်", "I get on well with my colleagues."],
          ],
        },
      },
      {
        heading: "တရားဝင် စာတွင် လဲလှယ်ခြင်း",
        body: [
          "phrasal verb များသည် စကားပြောတွင် သဘာဝကျသော်လည်း တရားဝင် စာရေးသားမှုတွင် ကြိယာ တစ်လုံးတည်း ဖြင့် ပိုတိကျစွာ ရေးလေ့ ရှိသည် — 'put off' → 'postpone', 'find out' → 'discover', 'give up' → 'abandon'။",
          "သို့သော် phrasal verb အားလုံး တရားဝင် မဟုတ်သည့် အခြေအနေတွင် ရှိသည်မဟုတ်ပါ။ 'carry out' (ဆောင်ရွက်သည်), 'point out' (ထောက်ပြသည်) တို့သည် ပညာရေး စာများတွင်ပါ သုံးသည်။",
        ],
      },
    ],
    examples: [
      { en: "Could you turn the music down, please?", mm: "ဂီတ အသံကို လျှော့ပေးနိုင်ပါသလား။", note: "turn down ကို ခွဲနိုင်သည်။" },
      { en: "I need to find out when the course starts.", mm: "သင်တန်း ဘယ်တော့ စတင်သည်ကို ရှာဖွေ သိရန် လိုသည်။" },
      { en: "She takes after her mother.", mm: "သူမက အမေနှင့် တူသည်။", note: "take after = ပုံစံ/အကျင့် တူသည်။" },
    ],
    mistakes: [
      { wrong: "Please turn down it.", right: "Please turn it down.", why: "နာမ်စား ပါလျှင် ခွဲနိုင်သော phrasal verb ၏ အလယ်တွင် ထားရသည်။" },
      { wrong: "She looks her brother after.", right: "She looks after her brother.", why: "look after သည် မခွဲနိုင်ပါ။" },
    ],
    guided: [
      { type: "mcq", prompt: "The meeting was ___ until next week.", promptMm: "အဓိပ္ပာယ် ရွေးပါ။", options: ["put off", "put on", "put up", "put in"], answer: 0, explanation: "put off = ရွှေ့ဆိုင်းသည်။", topic: "phrasal verbs" },
      { type: "mcq", prompt: "Don't ___ — you are almost there!", promptMm: "ရွေးပါ။", options: ["give in", "give up", "give out", "give away"], answer: 1, explanation: "give up = လက်လှျော့သည်။", topic: "phrasal verbs" },
      { type: "fill", prompt: "I need to ___ out the opening hours.", promptMm: "ကြိယာ ဖြည့်ပါ။", answers: ["find"], explanation: "find out = ရှာဖွေ သိသည်။", topic: "phrasal verbs" },
      { type: "correct", prompt: "Correct: Can you look the baby after?", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["Can you look after the baby?", "Can you look after the baby"], explanation: "look after သည် မခွဲနိုင်ပါ။", topic: "phrasal verbs" },
    ],
    independent: [
      { type: "mcq", prompt: "It was cold, so she ___ her coat.", promptMm: "အဓိပ္ပာယ် ရွေးပါ။", options: ["put on", "put off", "put out", "put away"], answer: 0, explanation: "put on = ဝတ်သည်။", topic: "phrasal verbs" },
      { type: "fill", prompt: "The plane ___ off an hour late.", promptMm: "ဖြည့်ပါ။", answers: ["took"], explanation: "take off = လေယာဉ် ထွက်သည်။", topic: "phrasal verbs" },
      { type: "mcq", prompt: "Choose the more formal equivalent of 'put off'.", promptMm: "တရားဝင် ကြိယာ ရွေးပါ။", options: ["postpone", "cancel", "refuse", "delay off"], answer: 0, explanation: "postpone = ရွှေ့ဆိုင်းသည်။", topic: "phrasal verbs" },
      { type: "translate", prompt: "Translate: ငါ သူနဲ့ အဆင်ပြေပြေ ပေါင်းသင်းနေတယ်။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["I get on well with him.", "I get along with him.", "I get on with him well."], explanation: "get on/along with = အဆင်ပြေသည်။", topic: "phrasal verbs" },
    ],
    review: [
      { q: "ခွဲနိုင်သော phrasal verb တွင် နာမ်စား ဘယ်မှာ ထားရသလဲ။", a: "အလယ်တွင် ထားရသည် — turn it down။" },
      { q: "phrasal verb ကို တရားဝင် စာတွင် ဘယ်လို ပြောင်းနိုင်သလဲ။", a: "ကြိယာ တစ်လုံးတည်း ဖြင့် လဲလှယ်နိုင်သည် — postpone, discover, abandon စသည်။" },
    ],
    summary: [
      "Phrasal verb သည် ကြိယာ + particle တွဲဖက်မှုဖြင့် အဓိပ္ပာယ် အသစ် ဖြစ်ပေါ်သည်။",
      "ခွဲနိုင်သော/မခွဲနိုင်သော အမျိုးအစား နှစ်မျိုး ရှိသည်။",
      "တရားဝင် စာတွင် ကြိယာ တစ်လုံးတည်း ဖြင့် လဲလှယ်လေ့ ရှိသည်။",
    ],
    mastery: [
      "phrasal verb ၁၂ ခုကို ဝါကျထဲတွင် မှန်ကန်စွာ သုံးနိုင်သည်။",
      "တရားဝင် ကြိယာ ၅ ခုနှင့် လဲလှယ်နိုင်သည်။",
    ],
    topics: ["phrasal verbs", "vocabulary", "register"],
  },
  {
    id: "b19-imperatives",
    moduleId: "B",
    title: "Imperatives and Instructions",
    titleMm: "အမိန့်ပုံစံ ဝါကျများ",
    level: "A2",
    minutes: 16,
    summaryLine:
      "အမိန့်၊ ညွှန်ကြားချက်၊ အကြံပြုချက်နှင့် ဖိတ်ခေါ်မှုများကို imperative ဝါကျဖြင့် ယဉ်ကျေးစွာ ဖော်ပြနည်း။",
    objectives: [
      "Imperative အပြု/အပျက် ဝါကျ ဖွဲ့နိုင်မည်။",
      "let's ဖြင့် အဆိုပြုချက် ဖော်ပြနိုင်မည်။",
      "မှာထားသည့် လေသံကို ယဉ်ကျေးစေနည်း သိမည်။",
    ],
    vocab: [
      { en: "advice", mm: "အကြံပြုချက်", ipa: "ədˈvaɪs", pos: "noun", example: "Here is some advice: be patient.", exampleMm: "အကြံပြုချက် တစ်ခု — စိတ်ရှည်ပါ။", topic: "imperatives", level: "A2" },
      { en: "instruction", mm: "ညွှန်ကြားချက်", ipa: "ɪnˈstrʌkʃn", pos: "noun", example: "Follow the instructions carefully.", exampleMm: "ညွှန်ကြားချက်များကို ဂရုတစိုက် လိုက်နာပါ။", topic: "imperatives", level: "A2" },
      { en: "polite", mm: "ယဉ်ကျေးသော", ipa: "pəˈlaɪt", pos: "adjective", example: "Adding 'please' makes the order polite.", exampleMm: "'please' ထည့်ခြင်းက အမိန့်ကို ယဉ်ကျေးစေသည်။", topic: "imperatives", level: "A2" },
    ],
    sections: [
      {
        heading: "ဖွဲ့စည်းပုံ",
        body: [
          "အပြု — ကြိယာ မူလပုံစံဖြင့် စသည်။ 'Close the window.' 'Please sit down.'",
          "အပျက် — Don't + verb (သို့မဟုတ် Do not + verb)။ 'Don't touch the wire.'",
          "let's + verb ဖြင့် အတူတကွ လုပ်ဆောင်ရန် အဆိုပြုသည် — 'Let's start now.' ငြင်းပယ် — 'Let's not wait.'",
        ],
        table: {
          headers: ["ရည်ရွယ်ချက်", "ပုံစံ", "ဥပမာ"],
          rows: [
            ["အမိန့်", "Verb + …", "Stand up."],
            ["ညွှန်ကြားချက်", "Verb + …", "Press the green button."],
            ["အကြံပြုချက်", "Try / Always …", "Try again tomorrow."],
            ["ဖိတ်ခေါ်မှု", "Please + verb", "Please come in."],
            ["အဆိုပြုချက်", "Let's + verb", "Let's take a break."],
          ],
        },
      },
      {
        heading: "ယဉ်ကျေးစေခြင်း",
        body: [
          "Imperative သည် တိုတိုဖြင့် ပြောသဖြင့် ကြမ်းတမ်းသလို ထင်နိုင်သည်။ please ထည့်ခြင်း၊ လေသံ နူးညံ့စေခြင်းဖြင့် ယဉ်ကျေးစေနိုင်သည်။",
          "ပိုယဉ်ကျေးလိုလျှင် Could you…?, Would you mind…?, I'd like you to… ကဲ့သို့ မေးခွန်းပုံစံ သို့မဟုတ် indirect ပုံစံ သုံးသည် — 'Could you close the window, please?'",
          "သတိပေးချက်နှင့် လမ်းညွှန်ချက်များတွင် imperative သည် သဘာဝကျသည် — 'Keep left.' 'Do not enter.' 'Mix the flour and water.'",
        ],
      },
    ],
    examples: [
      { en: "Turn left at the corner, then walk straight.", mm: "ထောင့်တွင် ဘယ်ဘက်ကွေ့ပြီး တည့်တည့် လျှောက်ပါ။" },
      { en: "Don't forget to bring your ID.", mm: "မှတ်ပုံတင် ယူလာရန် မမေ့ပါနှင့်။" },
      { en: "Let's meet at the library at four.", mm: "လေးနာရီတွင် စာကြည့်တိုက်မှာ တွေ့ကြရအောင်။" },
    ],
    mistakes: [
      { wrong: "You don't touch that.", right: "Don't touch that.", why: "အမိန့်/သတိပေးချက်အတွက် Don't + verb ကို သုံးသည်။" },
      { wrong: "Let's to go.", right: "Let's go.", why: "let's နောက်တွင် to မလိုပါ။" },
    ],
    guided: [
      { type: "mcq", prompt: "___ the door, please.", promptMm: "ရွေးပါ။", options: ["Open", "To open", "Opening", "Opened"], answer: 0, explanation: "imperative → ကြိယာ မူလပုံစံ။", topic: "imperatives" },
      { type: "mcq", prompt: "___ smoke here.", promptMm: "ငြင်းပယ် imperative ရွေးပါ။", options: ["Not", "Don't", "No", "Doesn't"], answer: 1, explanation: "Don't + verb။", topic: "imperatives" },
      { type: "fill", prompt: "Let's ___ (take) a break.", promptMm: "ကြိယာ ဖြည့်ပါ။", answers: ["take"], explanation: "let's + verb မူလပုံစံ။", topic: "imperatives" },
      { type: "correct", prompt: "Correct: Please to sit down.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["Please sit down.", "Sit down, please."], explanation: "imperative တွင် to မလိုပါ။", topic: "imperatives" },
    ],
    independent: [
      { type: "mcq", prompt: "Which is the most polite request?", promptMm: "အယဉ်ကျေးဆုံး ရွေးပါ။", options: ["Close the window.", "You close the window.", "Could you close the window, please?", "Close it now."], answer: 2, explanation: "Could you…, please? သည် ယဉ်ကျေးသည်။", topic: "imperatives" },
      { type: "fill", prompt: "___ forget your umbrella — it will rain.", promptMm: "ငြင်းပယ် ဖြည့်ပါ။", answers: ["Don't", "Do not"], explanation: "Don't forget။", topic: "imperatives" },
      { type: "order", prompt: "Arrange the instruction.", promptMm: "စီပါ။", tokens: ["the", "Press", "button", "green"], answer: "Press the green button", explanation: "ကြိယာ + နာမ် ဝိဘတ်စု။", topic: "imperatives" },
      { type: "translate", prompt: "Translate: ကျေးဇူးပြုပြီး အဲဒီစာအုပ်ကို ပေးပါ။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["Please give me that book.", "Could you give me that book, please?", "Please pass me that book."], explanation: "Please + verb + me + object။", topic: "imperatives" },
    ],
    review: [
      { q: "Imperative ၏ ကတ္တား ဘာလဲ။", a: "you ဖြစ်ပြီး များသောအားဖြင့် မရေးပါ။" },
      { q: "အမိန့်ကို ယဉ်ကျေးစေရန် ဘယ်လို ပြောင်းနိုင်သလဲ။", a: "please ထည့်ခြင်း၊ Could you…?, Would you mind…? ကဲ့သို့ မေးခွန်းပုံစံ သုံးခြင်း။" },
    ],
    summary: [
      "Imperative သည် ကြိယာ မူလပုံစံဖြင့် စသည်။",
      "ငြင်းပယ်တွင် Don't + verb ကို သုံးသည်။",
      "let's ဖြင့် အတူတကွ အဆိုပြုသည်။",
    ],
    mastery: [
      "imperative ဝါကျ ၁၀ ခုကို မှန်ကန်စွာ ဖွဲ့နိုင်သည်။",
      "အမိန့်ကို ယဉ်ကျေးသည့် ပုံစံသို့ ၅ ခု ပြောင်းနိုင်သည်။",
    ],
    topics: ["imperatives", "instructions", "politeness"],
  },
  {
    id: "b20-adverb-clauses",
    moduleId: "B",
    title: "Adjective and Adverb Clauses",
    titleMm: "နာမဝိသေသန နှင့် ကြိယာဝိသေသန ဝါကျခွဲများ",
    level: "B2",
    minutes: 24,
    summaryLine:
      "who/which/that ဖြင့် နာမ်ကို ရှင်းပြသည့် ဝါကျခွဲများနှင့် because/although/while ဖြင့် ကြိယာကို ရှင်းပြသည့် ဝါကျခွဲများကို တည်ဆောက်နည်း။",
    objectives: [
      "relative clause (who/which/that/whose) ကို မှန်ကန်စွာ သုံးနိုင်မည်။",
      "adverb clause (because/although/while/if) ဖြင့် ဝါကျ ချိတ်ဆက်နိုင်မည်။",
      "ဝါကျခွဲ နှင့် ဝါကျ တစ်ခုတည်း ကွာခြားချက်ကို ခွဲခြားနိုင်မည်။",
    ],
    vocab: [
      { en: "although", mm: "…ဖြစ်သော်လည်း", ipa: "ɔːlˈðəʊ", pos: "conjunction", example: "Although it was raining, we went out.", exampleMm: "မိုးရွာနေသော်လည်း ကျွန်တော်တို့ အပြင်ထွက်ခဲ့သည်။", topic: "complex sentences", level: "B2" },
      { en: "whereas", mm: "…နှင့် ဆန့်ကျင်စွာ", ipa: "ˌweərˈæz", pos: "conjunction", example: "He likes tea, whereas she prefers coffee.", exampleMm: "သူက လက်ဖက်ရည် ကြိုက်ပြီး သူမက ကော်ဖီ ပိုကြိုက်သည်။", topic: "complex sentences", level: "B2" },
      { en: "whose", mm: "မည်သူ၏ (ပိုင်ဆိုင်မှု)", ipa: "huːz", pos: "pronoun", example: "The student whose essay won is my cousin.", exampleMm: "အက်ဆေး အနိုင်ရသည့် ကျောင်းသားက ငါ့ဝမ်းကွဲ ဖြစ်သည်။", topic: "relative clauses", level: "B2" },
    ],
    sections: [
      {
        heading: "Adjective (relative) clause",
        body: [
          "နာမ် တစ်ခုကို ရှင်းပြသည့် ဝါကျခွဲ ဖြစ်သည်။ who (လူ), which (အရာ), that (နှစ်မျိုးလုံး — defining clause), whose (ပိုင်ဆိုင်မှု), where (နေရာ) ကို သုံးသည်။",
          "'The woman who lives next door is a nurse.' — who lives next door သည် the woman ကို ရှင်းပြသည်။",
          "Defining clause တွင် comma မထည့်ပါ (အဓိပ္ပာယ် မရှိမဖြစ်)။ Non-defining clause တွင် comma ထည့်ပြီး that ကို မသုံးပါ — 'My brother, who lives in London, is a doctor.'",
        ],
        table: {
          headers: ["စကားလုံး", "သုံးပုံ", "ဥပမာ"],
          rows: [
            ["who", "လူ", "the man who called"],
            ["which", "အရာ/တိရစ္ဆာန်", "the book which I read"],
            ["that", "defining clause", "the film that we saw"],
            ["whose", "ပိုင်ဆိုင်မှု", "the girl whose bag was stolen"],
            ["where", "နေရာ", "the town where I grew up"],
          ],
        },
      },
      {
        heading: "Adverb clause",
        body: [
          "ကြိယာကို အချိန်၊ အကြောင်းရင်း၊ ဆန့်ကျင်မှု၊ အခြေအနေ ဖြင့် ရှင်းပြသည် — because (ကြောင့်), although/though (ဖြစ်သော်လည်း), while (စဉ်/ဆန့်ကျင်စွာ), if (လျှင်), unless (မဟုတ်လျှင်), after/before, so that (ရန်အတွက်)။",
          "Adverb clause သည် ဝါကျ ရှေ့ သို့မဟုတ် နောက်တွင် လာနိုင်သည်။ ရှေ့တွင် လာလျှင် comma ထည့်သည် — 'Because it was late, we went home.' / 'We went home because it was late.'",
          "ဝါကျခွဲ တစ်ခုတည်းကို ဝါကျအဖြစ် မသုံးပါ — 'Because it was late.' သည် မပြည့်စုံပါ။",
        ],
      },
    ],
    examples: [
      { en: "The café which opened last month is always busy.", mm: "မနှစ်က ဖွင့်သည့် ကော်ဖီဆိုင်က အမြဲ လူထူသည်။" },
      { en: "Although the exam was hard, she passed easily.", mm: "စာမေးပွဲ ခက်ခဲသော်လည်း သူမ လွယ်ကူစွာ အောင်ခဲ့သည်။" },
      { en: "I will call you when I arrive, so that you know I am safe.", mm: "ငါရောက်တော့ ဖုန်းဆက်မည်၊ ငါ ဘေးကင်းသည်ကို မင်းသိစေရန်။" },
    ],
    mistakes: [
      { wrong: "The man which called me was polite.", right: "The man who called me was polite.", why: "လူအတွက် who ကို သုံးသည်။" },
      { wrong: "Because the rain, we stayed home.", right: "Because of the rain, we stayed home.", why: "because + ဝါကျ၊ because of + နာမ်။" },
    ],
    guided: [
      { type: "mcq", prompt: "The book ___ I borrowed was excellent.", promptMm: "relative pronoun ရွေးပါ။", options: ["who", "which", "whose", "where"], answer: 1, explanation: "အရာအတွက် which။", topic: "relative clauses" },
      { type: "mcq", prompt: "___ it was cold, we went swimming.", promptMm: "conjunction ရွေးပါ။", options: ["Although", "Because", "So", "Unless"], answer: 0, explanation: "ဆန့်ကျင်မှု → although။", topic: "adverb clauses" },
      { type: "fill", prompt: "The girl ___ bag was stolen reported it.", promptMm: "ဖြည့်ပါ။", answers: ["whose"], explanation: "ပိုင်ဆိုင်မှု → whose။", topic: "relative clauses" },
      { type: "correct", prompt: "Correct: The film who we watched was boring.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["The film which we watched was boring.", "The film that we watched was boring."], explanation: "အရာအတွက် which/that။", topic: "relative clauses" },
    ],
    independent: [
      { type: "mcq", prompt: "I will wait ___ you finish.", promptMm: "conjunction ရွေးပါ။", options: ["until", "although", "because of", "despite"], answer: 0, explanation: "until = အထိ။", topic: "adverb clauses" },
      { type: "fill", prompt: "This is the town ___ I grew up.", promptMm: "ဖြည့်ပါ။", answers: ["where"], explanation: "နေရာအတွက် where။", topic: "relative clauses" },
      { type: "order", prompt: "Arrange the sentence.", promptMm: "စီပါ။", tokens: ["who", "The", "teacher", "helped", "me", "was", "kind"], answer: "The teacher who helped me was kind", explanation: "နာမ် + who + ကြိယာ + ကြိယာ။", topic: "relative clauses" },
      { type: "translate", prompt: "Translate: မိုးရွာနေပေမယ့် ကျွန်တော်တို့ ဆက်သွားခဲ့တယ်။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["Although it was raining, we continued.", "Although it was raining, we kept going.", "Even though it was raining, we continued."], explanation: "Although + ဝါကျ + comma + ဝါကျ။", topic: "adverb clauses" },
    ],
    review: [
      { q: "Defining နှင့် non-defining relative clause ကွာခြားချက် ဘာလဲ။", a: "Defining တွင် comma မပါဘဲ that ကို သုံးနိုင်သည်။ Non-defining တွင် comma ပါပြီး that ကို မသုံးပါ။" },
      { q: "because နှင့် because of ကွာခြားချက် ဘာလဲ။", a: "because + ဝါကျ (because it rained)၊ because of + နာမ် (because of the rain)။" },
    ],
    summary: [
      "Relative clause သည် နာမ်ကို ရှင်းပြသည် (who/which/whose/where)။",
      "Adverb clause သည် ကြိယာကို အချိန်/အကြောင်းရင်း/ဆန့်ကျင်မှု ဖြင့် ရှင်းပြသည်။",
      "ဝါကျခွဲ တစ်ခုတည်းသည် ပြည့်စုံသော ဝါကျ မဟုတ်ပါ။",
    ],
    mastery: [
      "ဝါကျ ၁၀ ခုတွင် relative pronoun ကို ၈ ခု မှန်ကန်စွာ ရွေးနိုင်သည်။",
      "ဝါကျ နှစ်ခုကို adverb clause ဖြင့် ချိတ်ဆက်၍ ၆ ခု ရေးနိုင်သည်။",
    ],
    topics: ["complex sentences", "relative clauses", "sentence structure"],
  },
  {
    id: "b21-present-perfect-vs-past",
    moduleId: "B",
    title: "Present Perfect vs Past Simple",
    titleMm: "Present Perfect နှင့် Past Simple နှိုင်းယှဉ်",
    level: "B1",
    minutes: 22,
    summaryLine:
      "အတိတ် ဖြစ်ရပ်ကို ယခုနှင့် ချိတ်ဆက်ပြသလား၊ ပြီးစီးသွားသည့် အချိန်ကို သတ်မှတ်ပြသလား ဆိုသည့် အခြေခံကွာခြားချက်ဖြင့် ကာလ နှစ်ခုကို ရွေးချယ်နည်း။",
    objectives: [
      "အချိန် ဖော်ပြချက် (yesterday/just/ago/already) အလိုက် ကာလ ရွေးနိုင်မည်။",
      "present perfect တွင် မသုံးရသည့် အချိန် ဖော်ပြချက်များကို သိမည်။",
      "experience နှင့် finished action ကို ခွဲခြားနိုင်မည်။",
    ],
    vocab: [
      { en: "just", mm: "အခုလေးတင်", ipa: "dʒʌst", pos: "adverb", example: "I have just finished my homework.", exampleMm: "အိမ်စာ အခုလေးတင် ပြီးသွားသည်။", topic: "present perfect", level: "B1" },
      { en: "ago", mm: "(ကာလ) က", ipa: "əˈɡəʊ", pos: "adverb", example: "She left two hours ago.", exampleMm: "သူမ နှစ်နာရီက ထွက်သွားခဲ့သည်။", topic: "past simple", level: "A2" },
      { en: "experience", mm: "အတွေ့အကြုံ", ipa: "ɪkˈspɪəriəns", pos: "noun", example: "Have you ever had this experience?", exampleMm: "ဒီအတွေ့အကြုံ ရဖူးပါသလား။", topic: "present perfect", level: "B1" },
    ],
    sections: [
      {
        heading: "အဓိက ကွာခြားချက်",
        body: [
          "Past simple သည် ပြီးစီးသွားသည့်၊ အချိန် သတ်မှတ်ပြီးသား ဖြစ်ရပ်ကို ပြသည် — 'I visited Bagan last year.' ဟု ပြောလျှင် ခရီးစဉ် ပြီးဆုံးပြီ။",
          "Present perfect သည် အတိတ်နှင့် ယခုကို ချိတ်ဆက်သည် — အတွေ့အကြုံ (Have you ever been to Bagan?), မကြာသေးမီ ပြီးစီးမှု (I have just finished), ယခုအထိ ဆက်လက်မှု (I have lived here since 2019)။",
          "ထို့ကြောင့် yesterday, last week, in 2019, two days ago, when I was young ကဲ့သို့ ပြီးခဲ့သည့် အချိန် သတ်မှတ်ချက်များနှင့် present perfect ကို မတွဲပါ။",
        ],
        table: {
          headers: ["ဖော်ပြချက်", "ကာလ", "ဥပမာ"],
          rows: [
            ["yesterday / last year / ago", "Past simple", "I met her yesterday."],
            ["ever / never / just / already / yet", "Present perfect", "I have never met her."],
            ["since 2020 / for three years", "Present perfect", "I have known her for years."],
            ["in 2019 / when I was a child", "Past simple", "I lived there in 2019."],
          ],
        },
      },
      {
        heading: "အမေရိကန် အင်္ဂလိပ် ကွာခြားချက်",
        body: [
          "အမေရိကန် အင်္ဂလိပ်တွင် မကြာသေးမီ ပြီးစီးမှုအတွက် past simple ကို ပိုသုံးသည် — 'I just finished.' ဗြိတိန်တွင် 'I have just finished.' ကို ပိုသုံးသည်။",
          "စာမေးပွဲများတွင် ဗြိတိန် စံနှုန်းကို အခြေခံလေ့ ရှိသည်။ သို့သော် နှစ်မျိုးလုံးကို နားလည်ထားရန် လိုသည်။",
        ],
      },
    ],
    examples: [
      { en: "I have been to Mandalay three times.", mm: "မန္တလေးကို သုံးကြိမ် ရောက်ဖူးသည်။", note: "အတွေ့အကြုံ — အချိန် မသတ်မှတ်။" },
      { en: "I went to Mandalay in 2023.", mm: "၂၀၂၃ တွင် မန္တလေး သွားခဲ့သည်။", note: "အချိန် သတ်မှတ်ပြီး။" },
      { en: "She hasn't finished yet.", mm: "သူမ မပြီးသေးပါ။" },
    ],
    mistakes: [
      { wrong: "I have seen him yesterday.", right: "I saw him yesterday.", why: "yesterday နှင့် present perfect မတွဲပါ။" },
      { wrong: "I live here since 2019.", right: "I have lived here since 2019.", why: "since + ယခုအထိ → present perfect။" },
    ],
    guided: [
      { type: "mcq", prompt: "We ___ to the cinema last night.", promptMm: "ကာလ ရွေးပါ။", options: ["have gone", "went", "go", "have been going"], answer: 1, explanation: "last night → past simple။", topic: "present perfect vs past simple" },
      { type: "mcq", prompt: "She ___ her keys, so she can't get in.", promptMm: "ရွေးပါ။", options: ["lost", "has lost", "loses", "was losing"], answer: 1, explanation: "ယခု အခြေအနေအပေါ် သက်ရောက်မှု → present perfect။", topic: "present perfect vs past simple" },
      { type: "fill", prompt: "I have ___ seen this film. (ever/never — ငြင်းပယ်သဘော)", promptMm: "ဖြည့်ပါ။", answers: ["never"], explanation: "အတွေ့အကြုံ မရှိ → never။", topic: "present perfect vs past simple" },
      { type: "correct", prompt: "Correct: He has arrived two hours ago.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["He arrived two hours ago.", "He arrived two hours ago"], explanation: "ago → past simple။", topic: "present perfect vs past simple" },
    ],
    independent: [
      { type: "mcq", prompt: "___ you ever ___ Japanese food?", promptMm: "ရွေးပါ။", options: ["Did / try", "Have / tried", "Do / try", "Are / trying"], answer: 1, explanation: "ever → present perfect။", topic: "present perfect vs past simple" },
      { type: "fill", prompt: "They have lived here ___ 2015.", promptMm: "for/since ဖြည့်ပါ။", answers: ["since"], explanation: "since + အချိန်အမှတ်။", topic: "present perfect vs past simple" },
      { type: "mcq", prompt: "Which sentence is correct?", promptMm: "မှန်ကန်သည့် ဝါကျ ရွေးပါ။", options: ["I have finished it last week.", "I finished it last week.", "I finish it last week.", "I have finish it last week."], answer: 1, explanation: "last week → past simple။", topic: "present perfect vs past simple" },
      { type: "translate", prompt: "Translate: ငါ ဒီစာအုပ်ကို နှစ်ကြိမ် ဖတ်ဖူးတယ်။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["I have read this book twice.", "I have read this book two times."], explanation: "အတွေ့အကြုံ → present perfect။", topic: "present perfect vs past simple" },
    ],
    review: [
      { q: "yesterday နှင့် present perfect ကို ဘာကြောင့် မတွဲသလဲ။", a: "yesterday သည် ပြီးဆုံးသွားသည့် အချိန် ဖြစ်သဖြင့် past simple နှင့်သာ တွဲသည်။ present perfect သည် ယခုနှင့် ချိတ်ဆက်နေသည်။" },
      { q: "ever/never ကို ဘယ်ကာလနှင့် သုံးသလဲ။", a: "အတွေ့အကြုံ ဖော်ပြရန် present perfect နှင့် သုံးသည်။" },
    ],
    summary: [
      "Past simple = အချိန် သတ်မှတ်ပြီး ပြီးစီးသော ဖြစ်ရပ်။",
      "Present perfect = အတွေ့အကြုံ၊ မကြာသေးမီ ပြီးစီးမှု၊ ယခုအထိ ဆက်လက်မှု။",
      "yesterday/ago/last week နှင့် present perfect မတွဲပါ။",
    ],
    mastery: [
      "ကာလ ရွေးချယ်သည့် ကွက်လပ် ၁၀ ခုတွင် ၉ ခု မှန်ကန်သည်။",
      "ကာလ နှစ်ခု၏ ကွာခြားချက်ကို ဥပမာဖြင့် ရှင်းပြနိုင်သည်။",
    ],
    topics: ["present perfect", "past simple", "tenses"],
  },
  {
    id: "b22-used-to-would",
    moduleId: "B",
    title: "Used to and Would",
    titleMm: "Used to နှင့် Would",
    level: "B1",
    minutes: 18,
    summaryLine:
      "အတိတ်ကာလ အလေ့အထနှင့် ယခု မဟုတ်တော့သည့် အခြေအနေများကို 'used to' ဖြင့် ဖော်ပြပြီး 'would' နှင့် ကွာခြားချက်ကို လေ့လာသည်။",
    objectives: [
      "used to + verb ဖြင့် အတိတ် အလေ့အထ ဖော်ပြနိုင်မည်။",
      "used to နှင့် be used to + -ing ကို ခွဲခြားနိုင်မည်။",
      "would ကို အတိတ် ထပ်ခါတလဲလဲ လုပ်ဆောင်မှုအတွက် သုံးနိုင်မည်။",
    ],
    vocab: [
      { en: "habit", mm: "အလေ့အထ", ipa: "ˈhæbɪt", pos: "noun", example: "Reading before bed is a good habit.", exampleMm: "အိပ်ရာမဝင်မီ စာဖတ်ခြင်းသည် အလေ့အထ ကောင်း ဖြစ်သည်။", topic: "past habits", level: "B1" },
      { en: "used to", mm: "အရင်က …လေ့ရှိသည်", ipa: "juːst tuː", pos: "phrase", example: "I used to walk to school.", exampleMm: "ငါ အရင်က ကျောင်းသို့ လမ်းလျှောက် သွားလေ့ ရှိသည်။", topic: "past habits", level: "B1" },
      { en: "be used to", mm: "…နှင့် ရင်းနှီးပြီး ဖြစ်သည်", ipa: "biː juːst tuː", pos: "phrase", example: "She is used to working late.", exampleMm: "သူမ ညနှောင်းပိုင်း အလုပ်လုပ်ခြင်းနှင့် ရင်းနှီးပြီး ဖြစ်သည်။", topic: "past habits", level: "B2" },
    ],
    sections: [
      {
        heading: "used to",
        body: [
          "'used to + verb' သည် အတိတ်တွင် ပုံမှန် လုပ်ခဲ့သော်လည်း ယခု မလုပ်တော့သည့် အလေ့အထကို ပြသည် — 'I used to play football every Sunday.' (ယခု မကစားတော့ပါ)။",
          "အတိတ်က အခြေအနေ (ယခု မဟုတ်တော့သည့်) ကိုလည်း ပြသည် — 'She used to live in Taunggyi.' 'There used to be a market here.'",
          "မေးခွန်း/ငြင်းပယ်တွင် 'did you use to…?' 'didn't use to…' ဟု d မပါဘဲ ရေးသည်။ ခေတ်သစ် စကားပြောတွင် 'did you used to' လည်း တွေ့ရသည်။",
        ],
      },
      {
        heading: "would နှင့် ကွာခြားချက်",
        body: [
          "'would + verb' သည် အတိတ်တွင် ထပ်ခါတလဲလဲ လုပ်ခဲ့သည့် လုပ်ဆောင်ချက်ကို ပြသည် — 'Every summer we would visit our grandparents.'",
          "သို့သော် 'would' သည် အတိတ်က အခြေအနေ (state) ကို မပြနိုင်ပါ။ 'I would have a bicycle.' သည် မှားသည်၊ 'I used to have a bicycle.' မှန်သည်။ have, live, be, know, like ကဲ့သို့ state verb များတွင် used to ကို သုံးသည်။",
          "'be used to + -ing' သည် လုံးဝ ကွဲပြားသည် — အလေ့အကျင့် ရပြီး မခက်ခဲတော့ခြင်း ဖြစ်သည် — 'I am used to getting up early.' ('used to get up' နှင့် မရောပါနှင့်)",
        ],
      },
    ],
    examples: [
      { en: "I used to be afraid of dogs.", mm: "ငါ အရင်က ခွေးကို ကြောက်လေ့ ရှိသည်။", note: "state → used to။" },
      { en: "We would go fishing every weekend when I was a child.", mm: "ငယ်ငယ်တုန်း အားလပ်ရက်တိုင်း ငါးမျှားထွက်လေ့ ရှိသည်။" },
      { en: "She is used to speaking in public now.", mm: "ယခု သူမ လူပုံအလယ် ပြောဆိုခြင်းနှင့် ရင်းနှီးပြီး ဖြစ်သည်။" },
    ],
    mistakes: [
      { wrong: "I used to have a bike. (အမှန်ပုံစံ မှားနေသည်ဟု ထင်လျှင်)", right: "used to have — state verb ဖြစ်သဖြင့် မှန်ကန်သည်။", why: "state verb များတွင် used to ကို သုံးသည်။" },
      { wrong: "I am used to get up early.", right: "I am used to getting up early.", why: "be used to နောက်တွင် -ing လာသည်။" },
    ],
    guided: [
      { type: "mcq", prompt: "I ___ play tennis when I was young.", promptMm: "ရွေးပါ။", options: ["used to", "use to", "am used to", "would used to"], answer: 0, explanation: "အတိတ် အလေ့အထ → used to။", topic: "used to and would" },
      { type: "fill", prompt: "She is used to ___ (live) alone.", promptMm: "-ing ဖြည့်ပါ။", answers: ["living"], explanation: "be used to + -ing။", topic: "used to and would" },
      { type: "mcq", prompt: "Which sentence is correct?", promptMm: "မှန်ကန်သည့် ဝါကျ ရွေးပါ။", options: ["I would have long hair as a child.", "I used to have long hair as a child.", "I used have long hair.", "I am used to have long hair."], answer: 1, explanation: "state verb → used to။", topic: "used to and would" },
      { type: "correct", prompt: "Correct: Did you used to live in Yangon?", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["Did you use to live in Yangon?", "Did you use to live in Yangon"], explanation: "did ပါလျှင် use to ဟု ရေးသည်။", topic: "used to and would" },
    ],
    independent: [
      { type: "mcq", prompt: "There ___ a cinema here, but it closed.", promptMm: "ရွေးပါ။", options: ["used to be", "would be", "is used to be", "use to be"], answer: 0, explanation: "အတိတ်က အခြေအနေ → used to be။", topic: "used to and would" },
      { type: "fill", prompt: "Every winter we ___ visit our cousins. (အလေ့အထ)", promptMm: "would/used ဖြည့်ပါ။", answers: ["would", "used to"], explanation: "ထပ်ခါတလဲလဲ လုပ်ဆောင်မှု → would/used to။", topic: "used to and would" },
      { type: "mcq", prompt: "I am not used to ___ this early.", promptMm: "ရွေးပါ။", options: ["wake up", "waking up", "woke up", "have woken"], answer: 1, explanation: "be used to + -ing။", topic: "used to and would" },
      { type: "translate", prompt: "Translate: ငါ အရင်က ကော်ဖီ မသောက်ဘူး၊ အခု နေ့တိုင်း သောက်တယ်။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["I didn't use to drink coffee, but now I drink it every day.", "I didn't use to drink coffee. Now I drink it every day."], explanation: "didn't use to + verb။", topic: "used to and would" },
    ],
    review: [
      { q: "used to နှင့် be used to ကွာခြားချက် ဘာလဲ။", a: "used to + verb = အတိတ် အလေ့အထ (ယခု မဟုတ်တော့)။ be used to + -ing = ရင်းနှီးပြီး ဖြစ်သည်။" },
      { q: "would ကို ဘယ်အခါ မသုံးနိုင်သလဲ။", a: "အတိတ်က အခြေအနေ (state) ကို ဖော်ပြရာတွင် မသုံးနိုင်ပါ — used to ကို သုံးရသည်။" },
    ],
    summary: [
      "used to + verb သည် အတိတ် အလေ့အထနှင့် အခြေအနေကို ပြသည်။",
      "would သည် ထပ်ခါတလဲလဲ လုပ်ဆောင်မှုအတွက်သာ သုံးသည်။",
      "be used to + -ing သည် ရင်းနှီးမှုကို ပြသည်။",
    ],
    mastery: [
      "used to/would/be used to ပါသော ကွက်လပ် ၁၀ ခုတွင် ၈ ခု မှန်ကန်သည်။",
      "ကိုယ်တိုင် ငယ်စဉ်က အလေ့အထ ၅ ကြောင်း ရေးနိုင်သည်။",
    ],
    topics: ["used to and would", "past habits", "tenses"],
  },
];

export const moduleBLessonsPart4: Lesson[] = buildLessons(seeds);
