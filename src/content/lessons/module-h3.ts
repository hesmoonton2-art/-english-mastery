import type { Lesson } from "@/lib/types";
import { buildLessons, type LessonSeed } from "./builder.ts";

const seeds: LessonSeed[] = [
  {
    id: "h10-cohesion",
    moduleId: "H",
    title: "Cohesion and Coherence",
    titleMm: "စာပိုဒ် ဆက်စပ်မှု နှင့် ညီညွတ်မှု",
    level: "C1",
    minutes: 22,
    summaryLine: "ဝါကျများကို ချိတ်ဆက်ပြီး စာပိုဒ်တစ်ခုလုံး ညီညွတ်စေသည့် နည်းလမ်းများ။",
    objectives: ["cohesion နှင့် coherence ကွာခြားချက် ရှင်းပြနိုင်မည်။", "ဆက်စပ် စကားလုံး မှန်ကန်စွာ ရွေးနိုင်မည်။", "စာပိုဒ်တွင် ချိတ်ဆက်မှု ဖန်တီးနိုင်မည်။"],
    vocab: [
      { en: "cohesion", mm: "စကားလုံး/ဝါကျ ချိတ်ဆက်မှု", pos: "noun", example: "Pronouns and linkers create cohesion.", exampleMm: "နာမ်စား နှင့် ဆက်စပ်စကားလုံးများက ချိတ်ဆက်မှု ဖန်တီးသည်။", topic: "cohesion", level: "C1" },
      { en: "coherence", mm: "အဓိပ္ပာယ် ညီညွတ်မှု", pos: "noun", example: "The essay lacks coherence.", exampleMm: "အက်ဆေးတွင် ညီညွတ်မှု မရှိပါ။", topic: "cohesion", level: "C1" },
      { en: "moreover", mm: "ထို့အပြင်", pos: "adverb", example: "Moreover, the cost is too high.", exampleMm: "ထို့အပြင် ကုန်ကျစရိတ်က မြင့်လွန်းသည်။", topic: "cohesion", level: "B2" },
    ],
    sections: [
      {
        heading: "နည်းလမ်း ၅ မျိုး",
        body: [
          "၁) ဆက်စပ်စကားလုံး (however, therefore, moreover, in addition)။ ၂) နာမ်စား (this, these, it, they) — ရှေ့ဝါကျကို ညွှန်သည်။",
          "၃) စကားလုံး ထပ်ခြင်း/အဓိပ္ပာယ်တူ စကားလုံး (synonym)။ ၄) စကားလုံး အစီအစဉ် (first, next, finally)။ ၅) ခေါင်းစဉ်ငယ် နှင့် ခေါင်းစဉ် ပြန်ချိတ်ခြင်း။",
          "coherence သည် အကြောင်းအရာ ညီညွတ်မှု ဖြစ်သည် — စာပိုဒ်တွင် အဓိကအချက် တစ်ခုသာ ရှိရမည်။ ဆက်စပ်စကားလုံး မှန်လည်း အကြောင်းအရာ မညီလျှင် coherence မရှိပါ။",
        ],
        table: { headers: ["လုပ်ဆောင်ချက်", "စကားလုံး", "သတိ"], rows: [["ထပ်ဖြည့်", "moreover, in addition", "တူညီသည့် ဦးတည်ချက်"], ["ဆန့်ကျင်", "however, nevertheless", "ဆန့်ကျင်ချက် ရှိရမည်"], ["အကျိုး", "therefore, as a result", "အကြောင်းရင်း ရှိရမည်"], ["ဥပမာ", "for instance, such as", "နာမ်စာရင်း"]] },
      },
      {
        heading: "အမှား ရှာခြင်း",
        body: [
          "ဆက်စပ်စကားလုံး မှားယွင်း အသုံးချမှု — 'He was tired, therefore he was also hungry' (အကြောင်းရင်း မဆက်စပ်)။",
          "နာမ်စား မရှင်းလင်းမှု — 'The manager met the client because he was late.' (he = ဘယ်သူ)။ ဤနေရာတွင် နာမ် ပြန်ရေးသည်။",
        ],
      },
    ],
    examples: [
      { en: "The course is affordable. Moreover, it is offered online.", mm: "သင်တန်းက ဈေးသက်သာသည်။ ထို့အပြင် အွန်လိုင်းဖြင့် သင်နိုင်သည်။" },
      { en: "Attendance fell sharply; as a result, the school changed its timetable.", mm: "တက်ရောက်မှု သိသိသာသာ ကျခဲ့သည်၊ ရလဒ်အနေဖြင့် ကျောင်းက အချိန်ဇယား ပြောင်းခဲ့သည်။" },
      { en: "The manager met the client because the client was late.", mm: "ဖောက်သည်က နောက်ကျသဖြင့် မန်နေဂျာက သူနှင့် တွေ့ခဲ့သည်။", note: "နာမ်စား မရှင်းမှုကို နာမ်ဖြင့် ပြင်ထားသည်။" },
    ],
    mistakes: [
      { wrong: "ဆက်စပ်စကားလုံး အလွန်များ ထည့်ခြင်း", right: "ဝါကျ ၂–၃ ကြောင်းလျှင် ၁ ခုခန့်သာ", why: "စာ ဖတ်ရ ခက်လာသည်။" },
      { wrong: "အဓိကအချက် နှစ်ခုကို စာပိုဒ်တစ်ခုတည်းတွင် ထည့်ခြင်း", right: "စာပိုဒ် ခွဲပါ", why: "coherence ပျက်သည်။" },
    ],
    guided: [
      { type: "mcq", prompt: "Which linker shows contrast?", promptMm: "ရွေးပါ။", options: ["moreover", "however", "therefore", "for instance"], answer: 1, explanation: "however = ဆန့်ကျင်ချက်။", topic: "cohesion" },
      { type: "mcq", prompt: "Coherence is mainly about ___.", promptMm: "ရွေးပါ။", options: ["punctuation", "logical connection of ideas", "word count", "title"], answer: 1, explanation: "အကြောင်းအရာ ဆက်စပ်မှု။", topic: "cohesion" },
      { type: "fill", prompt: "It rained heavily; ___, the match was cancelled.", promptMm: "ဖြည့်ပါ။", answers: ["therefore", "as a result", "consequently"], explanation: "အကျိုးပြ ဆက်စပ်စကားလုံး။", topic: "cohesion" },
      { type: "correct", prompt: "Correct: Although it was raining, therefore we stayed inside.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["Although it was raining, we stayed inside.", "It was raining; therefore, we stayed inside."], explanation: "although နှင့် therefore ကို တွဲမသုံးပါ။", topic: "cohesion" },
    ],
    independent: [
      { type: "mcq", prompt: "Which sentence has a clear pronoun?", promptMm: "ရွေးပါ။", options: ["She told her that she was late.", "Mya told Su that Su was late.", "She told her she was late.", "They told them."], answer: 1, explanation: "နာမ် ပြန်ရေးထားသည်။", topic: "cohesion" },
      { type: "fill", prompt: "The plan is cheap. ___, it is easy to start.", promptMm: "ဖြည့်ပါ။", answers: ["Moreover", "In addition"], explanation: "ထပ်ဖြည့် linker။", topic: "cohesion" },
      { type: "mcq", prompt: "Too many linkers make writing ___.", promptMm: "ရွေးပါ။", options: ["clearer", "mechanical", "shorter", "easier"], answer: 1, explanation: "စက်မှုဆန် ဖြစ်လာသည်။", topic: "cohesion" },
      { type: "translate", prompt: "Translate: ဒါကြောင့် ကျွန်တော်တို့ နောက်တစ်ပတ် ရွှေ့သင့်တယ်။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["Therefore, we should postpone it until next week.", "As a result, we should move it to next week."], explanation: "therefore/as a result။", topic: "cohesion" },
    ],
    review: [
      { q: "cohesion နှင့် coherence ကွာခြားချက် ဘာလဲ။", a: "cohesion = ချိတ်ဆက်မှု နည်းလမ်း၊ coherence = အကြောင်းအရာ ညီညွတ်မှု။" },
      { q: "နာမ်စား မရှင်းလျှင် ဘယ်လို ပြင်သလဲ။", a: "နာမ် ပြန်ရေးသည်။" },
    ],
    summary: ["ချိတ်ဆက်မှု နည်းလမ်း ၅ မျိုး ရှိသည်။", "linker ကို အတိုင်းအတာနှင့် သုံးသည်။", "စာပိုဒ်တွင် အဓိကအချက် တစ်ခုသာ ထားသည်။"],
    mastery: ["စာပိုဒ် ၁ ပိုဒ်တွင် ချိတ်ဆက်မှု ၅ မျိုး သုံးနိုင်သည်။", "linker မှား ၈ ခု ပြင်နိုင်သည်။"],
    topics: ["writing", "cohesion", "editing"],
  },
  {
    id: "h11-academic-idioms",
    moduleId: "H",
    title: "Academic Formulaic Language",
    titleMm: "ပညာရေးဆန် အသုံးအနှုန်းများ",
    level: "C1",
    minutes: 22,
    summaryLine: "စာတမ်းနှင့် အက်ဆေးတွင် ထပ်ခါတလဲလဲ သုံးသည့် ပုံသေ အသုံးအနှုန်းများ။",
    objectives: ["ပုံသေ အသုံးအနှုန်း ၁၂ ခု သုံးနိုင်မည်။", "ယေဘုယျ စကားလုံးကို ပညာရေးဆန် စကားလုံးဖြင့် အစားထိုးနိုင်မည်။", "အကြောင်းရင်း-အကျိုး ဖော်ပြချက် ရေးနိုင်မည်။"],
    vocab: [
      { en: "it can be argued that", mm: "…ဟု ဆိုနိုင်သည်", pos: "phrase", example: "It can be argued that funding is the main issue.", exampleMm: "ရန်ပုံငွေက အဓိက ပြဿနာ ဖြစ်သည်ဟု ဆိုနိုင်သည်။", topic: "academic language", level: "C1" },
      { en: "play a role in", mm: "အခန်းကဏ္ဍ ပါဝင်သည်", pos: "phrase", example: "Sleep plays a role in memory.", exampleMm: "အိပ်စက်မှုက မှတ်ဉာဏ်တွင် အခန်းကဏ္ဍ ပါဝင်သည်။", topic: "academic language", level: "B2" },
      { en: "in terms of", mm: "…၏ အရ —", pos: "phrase", example: "In terms of cost, the second option is better.", exampleMm: "ကုန်ကျစရိတ် အရ ဒုတိယ ရွေးချယ်မှုက ပိုကောင်းသည်။", topic: "academic language", level: "B2" },
    ],
    sections: [
      {
        heading: "ပုံသေ အသုံးအနှုန်းများ",
        body: [
          "အဆို တင်ပြ — 'It can be argued that…', 'This paper argues that…', 'There is a growing body of evidence that…'။",
          "အကြောင်းရင်း/အကျိုး — 'This can be attributed to…', 'As a consequence of…', 'This results in…', 'The primary factor is…'။",
          "အကဲဖြတ် — 'It is worth noting that…', 'A key limitation is that…', 'Further research is needed to…', 'These findings are consistent with…'။",
        ],
        table: { headers: ["လုပ်ဆောင်ချက်", "ပုံသေ စကားစု", "နေရာ"], rows: [["အဆို", "It can be argued that…", "နိဒါန်း"], ["အကြောင်းရင်း", "This can be attributed to…", "ကိုယ်ထည်"], ["အထောက်အထား", "Evidence suggests that…", "ကိုယ်ထည်"], ["ကန့်သတ်ချက်", "A key limitation is that…", "နိဂုံး"]] },
      },
      {
        heading: "စကားလုံး အဆင့်မြှင့်ခြင်း",
        body: [
          "good → beneficial/effective၊ bad → detrimental/ineffective၊ big → substantial/considerable၊ show → demonstrate/indicate၊ get → obtain/acquire။",
          "အစားထိုးရာတွင် အဓိပ္ပာယ် ကိုက်ညီမှု စစ်သည် — 'a good number' ကို 'a beneficial number' ဟု မပြောင်းရ။",
        ],
      },
    ],
    examples: [
      { en: "It can be argued that early intervention is more cost-effective.", mm: "စောစီးစွာ ကြားဝင်မှုက ကုန်ကျစရိတ် ပိုထိရောက်သည်ဟု ဆိုနိုင်သည်။" },
      { en: "The decline can be attributed to changes in policy.", mm: "ကျဆင်းမှုက မူဝါဒ ပြောင်းလဲမှုကြောင့်ဟု သတ်မှတ်နိုင်သည်။" },
      { en: "In terms of student outcomes, the second method is more effective.", mm: "ကျောင်းသား ရလဒ်များ အရ ဒုတိယ နည်းလမ်းက ပိုထိရောက်သည်။" },
    ],
    mistakes: [
      { wrong: "ပုံသေ စကားစုကို အခြေအနေ မစစ်ဘဲ ထည့်ခြင်း", right: "အဓိပ္ပာယ် ကိုက်ညီမှု စစ်ပါ", why: "အဓိပ္ပာယ် လွဲနိုင်သည်။" },
      { wrong: "စကားလုံး ရှည်သည်နှင့် ပညာရေးဆန် ဖြစ်သည်ဟု ယူခြင်း", right: "ရှင်းလင်းမှုကို ဦးစားပေးပါ", why: "ရှည်လွန်းလျှင် ဖတ်ရ ခက်သည်။" },
    ],
    guided: [
      { type: "mcq", prompt: "Which phrase introduces a claim?", promptMm: "ရွေးပါ။", options: ["It can be argued that…", "For example…", "In 2020…", "Finally…"], answer: 0, explanation: "အဆို တင်ပြသည့် စကားစု။", topic: "academic language" },
      { type: "mcq", prompt: "'Detrimental' means ___.", promptMm: "ရွေးပါ။", options: ["helpful", "harmful", "neutral", "expensive"], answer: 1, explanation: "အနုတ်လက္ခဏာ။", topic: "academic language" },
      { type: "fill", prompt: "The rise can be attributed ___ online shopping.", promptMm: "ဖြည့်ပါ။", answers: ["to"], explanation: "attributed to။", topic: "academic language" },
      { type: "correct", prompt: "Correct: In terms of about cost, it is cheaper.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["In terms of cost, it is cheaper."], explanation: "in terms of + noun (about မလို)။", topic: "academic language" },
    ],
    independent: [
      { type: "mcq", prompt: "Which is the academic alternative to 'shows'?", promptMm: "ရွေးပါ။", options: ["demonstrates", "says", "tells", "goes"], answer: 0, explanation: "demonstrates။", topic: "academic language" },
      { type: "fill", prompt: "Sleep plays a ___ in memory.", promptMm: "ဖြည့်ပါ။", answers: ["role"], explanation: "play a role in။", topic: "academic language" },
      { type: "mcq", prompt: "Which phrase signals a limitation?", promptMm: "ရွေးပါ။", options: ["A key limitation is that…", "It is clear that…", "For instance…", "In addition…"], answer: 0, explanation: "ကန့်သတ်ချက်။", topic: "academic language" },
      { type: "translate", prompt: "Translate: ဒီကျဆင်းမှုက မူဝါဒ ပြောင်းလဲမှုကြောင့် ဖြစ်နိုင်တယ်။", promptMm: "ပညာရေးဆန် လေသံဖြင့် ရေးပါ။", answers: ["This decline can be attributed to changes in policy.", "The decline may be attributed to policy changes."], explanation: "can be attributed to။", topic: "academic language" },
    ],
    review: [
      { q: "အကြောင်းရင်း ဖော်ပြသည့် ပုံသေ စကားစု ၂ ခု ဘာလဲ။", a: "This can be attributed to… / The primary factor is…။" },
      { q: "စကားလုံး အဆင့်မြှင့်ရာတွင် ဘာစစ်သလဲ။", a: "အဓိပ္ပာယ် ကိုက်ညီမှု။" },
    ],
    summary: ["ပုံသေ စကားစုက ပညာရေးဆန် လေသံ ဖြစ်စေသည်။", "အခြေအနေ မကိုက်လျှင် မသုံးရ။", "ရှင်းလင်းမှုကို ဦးစားပေးသည်။"],
    mastery: ["ပုံသေ စကားစု ၁၂ ခု သုံးနိုင်သည်။", "အက်ဆေး ၁ ပိုဒ်ကို ပညာရေးဆန် စတိုင်ဖြင့် ရေးနိုင်သည်။"],
    topics: ["writing", "academic language", "C1"],
  },
  {
    id: "h12-debate-language",
    moduleId: "H",
    title: "Debate and Discussion Language",
    titleMm: "ဆွေးနွေးငြင်းခုံမှု ဘာသာစကား",
    level: "C1",
    minutes: 22,
    summaryLine: "သဘောထား တင်ပြ၊ သဘောတူ/မတူညီမှု ဖော်ပြ၊ ကြားဖြတ်ပြီး ငြင်းခုံသည့် ဘာသာစကား။",
    objectives: ["သဘောထား ဖော်ပြချက် ၈ ခု သုံးနိုင်မည်။", "ယဉ်ကျေးစွာ မသဘောတူနိုင်မည်။", "ငြင်းခုံမှုတွင် အထောက်အထား ကိုးကားနိုင်မည်။"],
    vocab: [
      { en: "point out", mm: "ထောက်ပြသည်", pos: "phrasal verb", example: "I'd like to point out that costs have risen.", exampleMm: "ကုန်ကျစရိတ် တိုးလာသည်ကို ထောက်ပြလိုပါသည်။", topic: "debate", level: "B2" },
      { en: "I take your point, but", mm: "သင့်အချက် နားလည်ပါသည်၊ သို့သော်", pos: "phrase", example: "I take your point, but the data show otherwise.", exampleMm: "သင့်အချက် နားလည်ပါသည်၊ သို့သော် ဒေတာက ဆန့်ကျင်သည်။", topic: "debate", level: "C1" },
      { en: "on the contrary", mm: "ဆန့်ကျင်ဘက်အားဖြင့်", pos: "phrase", example: "On the contrary, the opposite is true.", exampleMm: "ဆန့်ကျင်ဘက်အားဖြင့် ပြောင်းပြန် မှန်သည်။", topic: "debate", level: "C1" },
    ],
    sections: [
      {
        heading: "သဘောထား နှင့် တုံ့ပြန်မှု",
        body: [
          "သဘောထား — 'In my view…', 'I would argue that…', 'It seems to me that…'။ သဘောတူ — 'I completely agree', 'That's a fair point'။",
          "မသဘောတူ (ယဉ်ကျေးစွာ) — 'I see your point, but…', 'I'm not sure I agree with…', 'With respect, I think…'။ ပြင်းထန်စွာ — 'I strongly disagree'။",
          "ကြားဖြတ် — 'Could I come in here?', 'Sorry to interrupt, but…'။ ရှင်းလင်းစေရန် — 'What exactly do you mean by…?', 'Could you clarify…?'",
        ],
        table: { headers: ["လုပ်ဆောင်ချက်", "စကားစု", "ရှောင်ရန်"], rows: [["သဘောထား", "In my view…", "I think maybe just…"], ["မသဘောတူ", "I see your point, but…", "You're wrong."], ["ကြားဖြတ်", "Could I come in here?", "Shut up."], ["အထောက်အထား", "The report shows…", "Everyone knows…"]] },
      },
      {
        heading: "ငြင်းခုံမှု ဖွဲ့စည်းပုံ",
        body: [
          "အဆို → အကြောင်းရင်း → အထောက်အထား → ကောက်ချက်။ မိနစ် ၁–၂ အတွင်း အချက် တစ်ခုသာ ပြောသည်။",
          "ဆန့်ကျင်ချက်ကို ပြန်ဖြေရာတွင် သူတို့ အချက်ကို အရင် အနှစ်ချုပ်ပြီး မှ ဖြေသည် — 'You argue that X. However, the evidence suggests Y.'",
        ],
      },
    ],
    examples: [
      { en: "In my view, the fee should be reduced for local students.", mm: "ကျွန်တော် အမြင်တွင် ဒေသခံ ကျောင်းသားများအတွက် အခကြေးငွေ လျှော့သင့်သည်။" },
      { en: "I take your point about cost, but the long-term savings are larger.", mm: "ကုန်ကျစရိတ် အကြောင်း သင့်အချက်ကို နားလည်ပါသည်၊ သို့သော် ရေရှည် သက်သာမှုက ပိုကြီးသည်။" },
      { en: "Could I come in here? The survey covered 2,000 students, not 200.", mm: "ဒီနေရာမှာ ပြောခွင့်ရှိပါသလား။ စစ်တမ်းက ကျောင်းသား ၂,၀၀၀ ကို လွှမ်းခဲ့သည်၊ ၂၀၀ မဟုတ်ပါ။" },
    ],
    mistakes: [
      { wrong: "ဆန့်ကျင်သူကို တိုက်ရိုက် 'You are wrong' ဟု ပြောခြင်း", right: "'I'm not sure that's quite right' သုံးပါ", why: "ဆွေးနွေးမှု ပျက်စီးနိုင်သည်။" },
      { wrong: "အထောက်အထား မပါဘဲ အဆို တင်ခြင်း", right: "ဒေတာ/ကိုးကား ထည့်ပါ", why: "ငြင်းခုံမှု အားနည်းသည်။" },
    ],
    guided: [
      { type: "mcq", prompt: "Which is a polite disagreement?", promptMm: "ရွေးပါ။", options: ["You're wrong.", "I see your point, but I read the data differently.", "Nonsense.", "No way."], answer: 1, explanation: "ယဉ်ကျေးစွာ မသဘောတူခြင်း။", topic: "debate" },
      { type: "mcq", prompt: "Which phrase interrupts politely?", promptMm: "ရွေးပါ။", options: ["Listen to me!", "Sorry to interrupt, but…", "Stop talking.", "Wait!"], answer: 1, explanation: "ယဉ်ကျေးစွာ ကြားဖြတ်ခြင်း။", topic: "debate" },
      { type: "fill", prompt: "On the ___, the opposite is true.", promptMm: "ဖြည့်ပါ။", answers: ["contrary"], explanation: "on the contrary။", topic: "debate" },
      { type: "correct", prompt: "Correct: I am agree with your point.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["I agree with your point."], explanation: "agree သည် ကြိယာ — am မလို။", topic: "debate" },
    ],
    independent: [
      { type: "mcq", prompt: "Before answering an opponent, you should ___.", promptMm: "ရွေးပါ။", options: ["repeat the weather", "summarise their point", "insult them", "ignore them"], answer: 1, explanation: "သူတို့အချက် အနှစ်ချုပ်ပြီး ဖြေသည်။", topic: "debate" },
      { type: "fill", prompt: "I'd like to ___ out that the deadline moved.", promptMm: "ဖြည့်ပါ။", answers: ["point"], explanation: "point out။", topic: "debate" },
      { type: "mcq", prompt: "Which supports an argument?", promptMm: "ရွေးပါ။", options: ["My feeling is…", "A 2024 survey of 2,000 students found…", "Everyone thinks…", "It's obvious…"], answer: 1, explanation: "အထောက်အထား။", topic: "debate" },
      { type: "translate", prompt: "Translate: သင့်အချက်ကို နားလည်ပါတယ်၊ ဒါပေမယ့် ကျွန်တော် မသဘောတူပါဘူး။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["I see your point, but I don't agree.", "I take your point, but I disagree."], explanation: "see/take your point, but…။", topic: "debate" },
    ],
    review: [
      { q: "ယဉ်ကျေးစွာ မသဘောတူသည့် စကားစု ၃ ခု ဘာလဲ။", a: "I see your point, but… / I'm not sure I agree… / With respect, …။" },
      { q: "ငြင်းခုံမှု ဖွဲ့စည်းပုံ ဘာလဲ။", a: "အဆို → အကြောင်းရင်း → အထောက်အထား → ကောက်ချက်။" },
    ],
    summary: ["သဘောထားကို ရှင်းရှင်း ဖော်ပြသည်။", "မသဘောတူမှုကို ယဉ်ကျေးစွာ ပြသည်။", "အထောက်အထား မပါဘဲ မငြင်းခုံပါ။"],
    mastery: ["ငြင်းခုံမှု ၂ မိနစ် (ပြောစာ) ရေးနိုင်သည်။", "ယဉ်ကျေးစွာ မသဘောတူသည့် စကားစု ၅ ခု သုံးနိုင်သည်။"],
    topics: ["speaking", "debate", "argument"],
  },
  {
    id: "h13-presentation-skills",
    moduleId: "H",
    title: "Presentation Skills: Structure and Delivery",
    titleMm: "တင်ဆက်မှု ကျွမ်းကျင်မှု — ဖွဲ့စည်းပုံ နှင့် တင်ဆက်နည်း",
    level: "C1",
    minutes: 24,
    summaryLine: "တင်ဆက်မှု အပြည့်အစုံ ဖွဲ့စည်းခြင်း၊ မေးခွန်း ဖြေခြင်း နှင့် စိတ်လှုပ်ရှားမှု စီမံခြင်း။",
    objectives: ["တင်ဆက်မှု ဖွဲ့စည်းပုံ ၅ ပိုင်း ရေးနိုင်မည်။", "Q&A အတွက် ပြင်ဆင်နိုင်မည်။", "အချိန် စီမံနိုင်မည်။"],
    vocab: [
      { en: "agenda", mm: "ဆွေးနွေးမည့် အစီအစဉ်", pos: "noun", example: "Here is the agenda for today.", exampleMm: "ယနေ့အတွက် အစီအစဉ် ဤသည်ဖြစ်သည်။", topic: "presentation", level: "B2" },
      { en: "takeaway", mm: "အဓိက ရယူသင့်သည့် အချက်", pos: "noun", example: "I'll finish with three takeaways.", exampleMm: "အဓိက ရယူသင့်သည့် အချက် သုံးခုဖြင့် အဆုံးသတ်ပါမည်။", topic: "presentation", level: "C1" },
      { en: "follow up", mm: "ဆက်လက် ဆောင်ရွက်သည်", pos: "phrasal verb", example: "I'll follow up by email.", exampleMm: "အီးမေးလ်ဖြင့် ဆက်လက် ဆက်သွယ်ပါမည်။", topic: "presentation", level: "B2" },
    ],
    sections: [
      {
        heading: "ဖွဲ့စည်းပုံ ၅ ပိုင်း",
        body: [
          "၁) ဖွင့် — မိတ်ဆက် + ရည်ရွယ်ချက် + အစီအစဉ်။ ၂) နောက်ခံ — ဘာကြောင့် အရေးကြီးသည်။ ၃) အဓိက အချက် ၂–၄ (တစ်ခုစီတွင် ဥပမာ/ဒေတာ)။",
          "၄) အနှစ်ချုပ် — takeaway ၃ ခု။ ၅) Q&A — မေးခွန်း ဖြေခြင်း နှင့် ဆက်လက် ဆောင်ရွက်မည့် အချက်။",
          "စလိုက်တွင် စကားလုံး ၆ လုံးခန့်၊ ဂရပ် တစ်ခု၊ စာသား များလွန်းခြင်း ရှောင်သည်။ စကားပြော မှတ်စုကို ကတ်ပြားတွင် ရေးထားသည်။",
        ],
        table: { headers: ["ပိုင်း", "အချိန် (မိနစ် ၁၀)", "ရည်ရွယ်ချက်"], rows: [["ဖွင့်", "1", "အာရုံ ဆွဲ"], ["နောက်ခံ", "1", "အရေးကြီးကြောင်း ပြ"], ["အဓိက", "5", "အချက် ၃ ခု"], ["အနှစ်ချုပ်", "1", "မှတ်မိစေ"], ["Q&A", "2", "ရှင်းလင်း"]] },
      },
      {
        heading: "Q&A နှင့် စိတ်ဖိစီးမှု",
        body: [
          "မေးခွန်း မရှင်းလျှင် ပြန်မေးသည် — 'Just to check, are you asking about cost or timing?' မသိလျှင် 'I don't have that figure to hand; I'll follow up by email.' ဟု ရိုးသားစွာ ဖြေသည်။",
          "စိတ်လှုပ်ရှားမှု လျှော့ချရန် — အသက်ရှူ နှေးနှေး၊ ပထမ ဝါကျ ၃ ကြောင်းကို ကျက်မှတ်၊ မိနစ် ၂ ကြာ အသံထွက် လေ့ကျင့်၊ ရေသောက်။",
        ],
      },
    ],
    examples: [
      { en: "This morning I'll cover three areas: the problem, our data and next steps.", mm: "ယနေ့ မနက်တွင် ကျွန်တော် အပိုင်း သုံးခု ဖော်ပြပါမည် — ပြဿနာ၊ ဒေတာ နှင့် နောက်အဆင့်များ။" },
      { en: "Let me pause there and take any questions.", mm: "ဒီနေရာမှာ ရပ်ပြီး မေးခွန်းများ လက်ခံပါမည်။" },
      { en: "I don't have that figure to hand, but I'll follow up by email today.", mm: "ထိုဂဏန်းကို လက်ထဲ မရှိပါ၊ ယနေ့ အီးမေးလ်ဖြင့် ပြန်ပေးပါမည်။" },
    ],
    mistakes: [
      { wrong: "စလိုက်တွင် စာသား အပြည့် ရေးခြင်း", right: "စကားလုံး ၆ လုံးခန့်သာ", why: "ပရိသတ် ဖတ်နေလျှင် နားမထောင်တော့ပါ။" },
      { wrong: "မသိသည့် မေးခွန်းကို လုပ်ကြံ ဖြေခြင်း", right: "မသိကြောင်း ဝန်ခံပြီး ပြန်ဖြေမည်ဟု ဆိုပါ", why: "ယုံကြည်မှု ပျက်စီးသည်။" },
    ],
    guided: [
      { type: "mcq", prompt: "How much text on a slide?", promptMm: "ရွေးပါ။", options: ["The full script", "About six words", "One paragraph", "No slides"], answer: 1, explanation: "စကားလုံး အနည်းငယ်သာ။", topic: "presentation" },
      { type: "mcq", prompt: "A 'takeaway' is ___.", promptMm: "ရွေးပါ။", options: ["a slide title", "the main point to remember", "a type of graph", "the agenda"], answer: 1, explanation: "အဓိက မှတ်သားရမည့် အချက်။", topic: "presentation" },
      { type: "fill", prompt: "I'll ___ up by email with the figures.", promptMm: "ဖြည့်ပါ။", answers: ["follow"], explanation: "follow up။", topic: "presentation" },
      { type: "correct", prompt: "Correct: Let me to show you the data.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["Let me show you the data."], explanation: "let me + verb။", topic: "presentation" },
    ],
    independent: [
      { type: "mcq", prompt: "What should come first?", promptMm: "ရွေးပါ။", options: ["Q&A", "Purpose and agenda", "Conclusion", "References"], answer: 1, explanation: "ရည်ရွယ်ချက် + အစီအစဉ်။", topic: "presentation" },
      { type: "fill", prompt: "Here is the ___ for today: three main points.", promptMm: "ဖြည့်ပါ။", answers: ["agenda"], explanation: "agenda။", topic: "presentation" },
      { type: "mcq", prompt: "You don't know an answer. Best response?", promptMm: "ရွေးပါ။", options: ["Guess confidently", "Say you'll follow up", "Ignore the question", "Change the topic"], answer: 1, explanation: "ရိုးသားစွာ ဆက်လက် ဆောင်ရွက်မည်ဟု ဆိုသည်။", topic: "presentation" },
      { type: "translate", prompt: "Translate: အပိုင်း သုံးခု ဖော်ပြပါမယ်။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["I'll cover three areas.", "I'm going to cover three points."], explanation: "cover + အကြောင်းအရာ။", topic: "presentation" },
    ],
    review: [
      { q: "တင်ဆက်မှု ပိုင်း ၅ ခု ဘာလဲ။", a: "ဖွင့်၊ နောက်ခံ၊ အဓိက၊ အနှစ်ချုပ်၊ Q&A။" },
      { q: "မသိသည့် မေးခွန်း ဘယ်လို ဖြေသလဲ။", a: "မသိကြောင်း ဝန်ခံပြီး ပြန်ဖြေမည့် အချိန်/နည်းလမ်း ဖော်ပြသည်။" },
    ],
    summary: ["ဖွဲ့စည်းပုံ ၅ ပိုင်းက တင်ဆက်မှုကို ရှင်းစေသည်။", "စလိုက်တွင် စာသား အနည်းငယ်သာ။", "Q&A တွင် ရိုးသားမှု က ယုံကြည်မှု တည်ဆောက်သည်။"],
    mastery: ["မိနစ် ၁၀ တင်ဆက်မှု အပြည့်အစုံ ရေးပြီး ပြောနိုင်သည်။", "Q&A ၅ ခုကို ပြင်ဆင်ထားနိုင်သည်။"],
    topics: ["speaking", "presentation", "professional"],
  },
  {
    id: "h14-critical-analysis",
    moduleId: "H",
    title: "Critical Analysis in Writing",
    titleMm: "ရေးသားမှုတွင် ဝေဖန် ခွဲခြမ်းစိတ်ဖြာမှု",
    level: "C1",
    minutes: 24,
    summaryLine: "အချက်အလက်ကို ခွဲခြမ်းစိတ်ဖြာ၊ အကြောင်းရင်း ရှာ၊ အမြင် နှိုင်းယှဉ်ပြီး ကိုယ်ပိုင် အကဲဖြတ်ချက် ရေးနည်း။",
    objectives: ["ခွဲခြမ်းစိတ်ဖြာမှု အဆင့် ၄ ခု ရေးနိုင်မည်။", "အမြင် နှစ်ခု နှိုင်းယှဉ်နိုင်မည်။", "ကိုယ်ပိုင် အကဲဖြတ်ချက် ဖော်ပြနိုင်မည်။"],
    vocab: [
      { en: "analyse", mm: "ခွဲခြမ်းစိတ်ဖြာသည်", pos: "verb", example: "Analyse the causes, not just the results.", exampleMm: "ရလဒ်သာမက အကြောင်းရင်းများကို ခွဲခြမ်းစိတ်ဖြာပါ။", topic: "critical analysis", level: "B2" },
      { en: "implication", mm: "သက်ရောက်မှု/အဓိပ္ပာယ်", pos: "noun", example: "Consider the implications for teachers.", exampleMm: "ဆရာများအတွက် သက်ရောက်မှုများကို စဉ်းစားပါ။", topic: "critical analysis", level: "C1" },
      { en: "outweigh", mm: "ပိုကြီးသည်/သာသည်", pos: "verb", example: "The benefits outweigh the risks.", exampleMm: "အကျိုးကျေးဇူးများက အန္တရာယ်များထက် သာသည်။", topic: "critical analysis", level: "C1" },
    ],
    sections: [
      {
        heading: "ခွဲခြမ်းစိတ်ဖြာမှု အဆင့် ၄ ခု",
        body: [
          "၁) ဘာဖြစ်နေသလဲ (describe)။ ၂) ဘာကြောင့် ဖြစ်သလဲ (explain)။ ၃) ဘယ်သူ့အပေါ် သက်ရောက်သလဲ (implication)။ ၄) ဘယ်လို အကဲဖြတ်သလဲ (evaluate)။",
          "အကဲဖြတ်ရာတွင် ကိုယ်ပိုင် အမြင်ကို အထောက်အထားနှင့် တွဲသည် — 'This approach seems stronger because the sample was larger and the results were repeated.'",
          "အမြင် နှစ်ခု နှိုင်းယှဉ်ရာတွင် ဘက်မလိုက်မှု ထိန်းသည် — 'While Smith emphasises cost, Lee focuses on access; both overlook staffing.'",
        ],
        table: { headers: ["အဆင့်", "မေးခွန်း", "စကားစု"], rows: [["describe", "ဘာဖြစ်နေလဲ", "The data show…"], ["explain", "ဘာကြောင့်", "This may be due to…"], ["implication", "ဘယ်သူ့အပေါ်", "This has implications for…"], ["evaluate", "ဘယ်လောက် ခိုင်မာလဲ", "On balance, this seems…"]] },
      },
      {
        heading: "ဘာသာစကား",
        body: [
          "ခွဲခြမ်းစိတ်ဖြာ — 'This suggests', 'This can be explained by', 'A further factor is'။ အကဲဖြတ် — 'convincing', 'limited', 'overstated', 'well-supported'။",
          "အကဲဖြတ်ချက်တွင် 'I think' ကို ထပ်ခါတလဲလဲ မသုံးပါ — 'It seems likely that…', 'The evidence points to…' ဖြင့် ကွဲပြားစေသည်။",
        ],
      },
    ],
    examples: [
      { en: "The survey shows a clear gap between urban and rural schools.", mm: "စစ်တမ်းက မြို့ပြ နှင့် ကျေးလက် ကျောင်းများကြား ရှင်းလင်းသည့် ကွာဟမှုကို ပြသည်။", note: "describe။" },
      { en: "This may be due to differences in funding and teacher training.", mm: "ဤသည် ရန်ပုံငွေ နှင့် ဆရာ သင်တန်း ကွာခြားမှုကြောင့် ဖြစ်နိုင်သည်။", note: "explain။" },
      { en: "On balance, the policy seems effective, although the evidence is limited to one region.", mm: "အထောက်အထားက ဒေသတစ်ခုအတွက်သာ ဖြစ်သော်လည်း ခြုံကြည့်လျှင် မူဝါဒက ထိရောက်ပုံရသည်။", note: "evaluate။" },
    ],
    mistakes: [
      { wrong: "အကြောင်းရင်း မရှာဘဲ ရလဒ်ကို ပြန်ရေးခြင်း", right: "'This may be due to…' ဖြင့် ရှင်းပြပါ", why: "ခွဲခြမ်းစိတ်ဖြာမှု မဖြစ်ပါ။" },
      { wrong: "အမြင် တစ်ခုတည်းကိုသာ ယူခြင်း", right: "ဆန့်ကျင်အမြင် ထည့်ပါ", why: "ဘက်လိုက်မှု ဖြစ်သည်။" },
    ],
    guided: [
      { type: "mcq", prompt: "Which sentence evaluates?", promptMm: "ရွေးပါ။", options: ["The study had 300 participants.", "The study is convincing but limited to one city.", "The study was published in 2023.", "The study used a survey."], answer: 1, explanation: "အကဲဖြတ်ချက် ပါသည်။", topic: "critical analysis" },
      { type: "mcq", prompt: "An implication answers ___.", promptMm: "ရွေးပါ။", options: ["what happened", "why it happened", "who is affected", "when it ended"], answer: 2, explanation: "သက်ရောက်ခံရသူ။", topic: "critical analysis" },
      { type: "fill", prompt: "The benefits ___ the risks.", promptMm: "ဖြည့်ပါ။", answers: ["outweigh"], explanation: "outweigh။", topic: "critical analysis" },
      { type: "correct", prompt: "Correct: This can be explain by poor planning.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["This can be explained by poor planning."], explanation: "passive → explained။", topic: "critical analysis" },
    ],
    independent: [
      { type: "mcq", prompt: "Balanced analysis includes ___.", promptMm: "ရွေးပါ။", options: ["only one view", "at least two views", "no evidence", "only opinions"], answer: 1, explanation: "အမြင် နှစ်ခု။", topic: "critical analysis" },
      { type: "fill", prompt: "This has ___ for teachers and parents.", promptMm: "ဖြည့်ပါ။", answers: ["implications"], explanation: "implications for။", topic: "critical analysis" },
      { type: "mcq", prompt: "Which phrase hedges an evaluation?", promptMm: "ရွေးပါ။", options: ["This proves…", "This seems likely…", "This is definitely…", "Everyone knows…"], answer: 1, explanation: "seems likely = hedged။", topic: "critical analysis" },
      { type: "translate", prompt: "Translate: ဒီကွာဟမှုက ရန်ပုံငွေ ကွာခြားမှုကြောင့် ဖြစ်နိုင်တယ်။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["This gap may be due to differences in funding.", "The gap could be caused by differences in funding."], explanation: "may be due to။", topic: "critical analysis" },
    ],
    review: [
      { q: "ခွဲခြမ်းစိတ်ဖြာမှု အဆင့် ၄ ခု ဘာလဲ။", a: "describe, explain, implication, evaluate။" },
      { q: "အကဲဖြတ်ချက်တွင် ဘာလိုသလဲ။", a: "အထောက်အထား နှင့် ဘက်မလိုက်မှု။" },
    ],
    summary: ["ရလဒ်တင်ပြရုံဖြင့် မလုံလောက်၊ အကြောင်းရင်း ရှာသည်။", "သက်ရောက်မှုကို ဖော်ပြသည်။", "အကဲဖြတ်ချက်တွင် အထောက်အထား တွဲသည်။"],
    mastery: ["ခွဲခြမ်းစိတ်ဖြာ စာပိုဒ် ၂ ပိုဒ် (၂၀၀+) ရေးနိုင်သည်။", "အမြင် နှစ်ခု နှိုင်းယှဉ်နိုင်သည်။"],
    topics: ["writing", "critical analysis", "academic"],
  },
];

export const moduleHLessonsPart3: Lesson[] = buildLessons(seeds);
