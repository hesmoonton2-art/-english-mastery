import type { Lesson } from "@/lib/types";
import { buildLessons, type LessonSeed } from "./builder.ts";

const seeds: LessonSeed[] = [
  {
    id: "g5-narrative-writing",
    moduleId: "G",
    title: "Writing: Narrative Writing",
    titleMm: "ရေးသားမှု — ဇာတ်လမ်း ရေးသားခြင်း",
    level: "B1",
    minutes: 22,
    summaryLine: "အတိတ်ဖြစ်ရပ်တစ်ခုကို အစီအစဉ်တကျ၊ ဖတ်ရသပ်ရပ်စွာ ဇာတ်လမ်းအဖြစ် ရေးနည်း။",
    objectives: ["ဇာတ်လမ်း ဖွဲ့စည်းပုံ (အစ-အလယ်-အဆုံး) ရေးနိုင်မည်။", "အတိတ်ကာလ ကို မှန်ကန်စွာ သုံးနိုင်မည်။", "အချိန် ဆက်စပ် စကားလုံး သုံးနိုင်မည်။"],
    vocab: [
      { en: "narrative", mm: "ဇာတ်လမ်း/ဖြစ်ရပ် ဖော်ပြချက်", pos: "noun", example: "Write a short narrative about a journey.", exampleMm: "ခရီးတစ်ခုအကြောင်း ဇာတ်လမ်းတို ရေးပါ။", topic: "narrative", level: "B1" },
      { en: "suddenly", mm: "ရုတ်တရက်", pos: "adverb", example: "Suddenly, the lights went out.", exampleMm: "ရုတ်တရက် မီးများ ပျက်သွားသည်။", topic: "narrative", level: "B1" },
      { en: "in the end", mm: "နောက်ဆုံးတွင်", pos: "phrase", example: "In the end, everything worked out.", exampleMm: "နောက်ဆုံးတွင် အရာအားလုံး အဆင်ပြေသွားသည်။", topic: "narrative", level: "B1" },
    ],
    sections: [
      {
        heading: "ဖွဲ့စည်းပုံ",
        body: [
          "အစ — ဘယ်အချိန်၊ ဘယ်နေရာ၊ ဘယ်သူ (setting)။ အလယ် — ဖြစ်ရပ် ဆက်တိုက်၊ တင်းမာမှု တက်လာသည်။ အဆုံး — ရလဒ် နှင့် ခံစားချက်/သင်ခန်းစာ။",
          "အချိန် ဆက်စပ် — first, then, after that, meanwhile, later, suddenly, finally, in the end။ ဤစကားလုံးများက ဖြစ်ရပ် အစီအစဉ်ကို ရှင်းစေသည်။",
          "ဇာတ်လမ်းတွင် past simple ကို အဓိက သုံးပြီး နောက်ခံ ဖော်ပြရန် past continuous သုံးသည် — 'I was walking home when I heard a noise.'",
        ],
        table: { headers: ["အပိုင်း", "ပါဝင်ရန်", "ကာလ"], rows: [["အစ", "setting", "past simple/continuous"], ["အလယ်", "ဖြစ်ရပ် ၂–၄", "past simple"], ["အဆုံး", "ရလဒ် + ခံစားချက်", "past simple/perfect"]] },
      },
      {
        heading: "ဖတ်ရ ကောင်းစေရန်",
        body: [
          "အာရုံငါးပါး ဖော်ပြချက် (အသံ၊ အနံ့၊ အမြင်) ထည့်ခြင်းက ဇာတ်လမ်းကို ရှင်သန်စေသည် — 'The tea smelled of jasmine.'",
          "ဝါကျ အရှည် ကွဲပြားစေသည် — တိုတိုဖြင့် တင်းမာမှု တင်ပြီး ရှည်ရှည်ဖြင့် ဖော်ပြသည်။ ဝါကျတိုင်း 'I' ဖြင့် မစပါနှင့်။",
        ],
      },
    ],
    examples: [
      { en: "Last December, I was travelling to Taunggyi when the bus broke down.", mm: "မနှစ် ဒီဇင်ဘာတွင် တောင်ကြီးသို့ သွားနေစဉ် ဘတ်စ်ကား ပျက်သွားခဲ့သည်။" },
      { en: "Suddenly, everyone started talking at once.", mm: "ရုတ်တရက် လူတိုင်း တစ်ပြိုင်နက် စကားပြောလာကြသည်။" },
      { en: "In the end, we reached the town at midnight, tired but relieved.", mm: "နောက်ဆုံးတွင် ညသန်းခေါင်တွင် ပင်ပန်းသော်လည်း စိတ်သက်သာစွာ မြို့သို့ ရောက်ခဲ့သည်။" },
    ],
    mistakes: [
      { wrong: "ဇာတ်လမ်းတစ်လျှောက် ကာလ ရောနှောခြင်း", right: "past simple ကို အဓိက ထားပါ", why: "ကာလ မညီလျှင် ဖတ်ရ ရှုပ်သည်။" },
      { wrong: "ဖြစ်ရပ်အားလုံးကို 'and then' ဖြင့် ဆက်ခြင်း", right: "စကားလုံး ကွဲပြားစွာ သုံးပါ", why: "ထပ်နေလျှင် ပျင်းစရာ။" },
    ],
    guided: [
      { type: "mcq", prompt: "Which tense usually carries a narrative?", promptMm: "ရွေးပါ။", options: ["present simple", "past simple", "future", "present perfect"], answer: 1, explanation: "past simple။", topic: "narrative" },
      { type: "mcq", prompt: "Which word shows a surprising event?", promptMm: "ရွေးပါ။", options: ["suddenly", "first", "finally", "usually"], answer: 0, explanation: "suddenly။", topic: "narrative" },
      { type: "fill", prompt: "I was walking home ___ I heard a noise.", promptMm: "ဖြည့်ပါ။", answers: ["when"], explanation: "past continuous + when + past simple။", topic: "narrative" },
      { type: "correct", prompt: "Correct: Yesterday I go to the market and I see my friend.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["Yesterday I went to the market and I saw my friend."], explanation: "အတိတ်ကာလ ပြောင်းပါ။", topic: "narrative" },
    ],
    independent: [
      { type: "mcq", prompt: "The 'setting' of a story is ___.", promptMm: "ရွေးပါ။", options: ["the ending", "where and when it happens", "the main character's name", "the lesson"], answer: 1, explanation: "နေရာ နှင့် အချိန်။", topic: "narrative" },
      { type: "fill", prompt: "___ the end, we found the key.", promptMm: "ဖြည့်ပါ။", answers: ["In"], explanation: "In the end။", topic: "narrative" },
      { type: "order", prompt: "Arrange the sentence.", promptMm: "စီပါ။", tokens: ["We", "waited", "for", "two", "hours", "and", "then", "left"], answer: "We waited for two hours and then left", explanation: "ဖြစ်ရပ် အစီအစဉ်။", topic: "narrative" },
      { type: "translate", prompt: "Translate: ကျွန်တော် အိမ်ပြန်လာစဉ် မိုး ရွာလာတယ်။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["I was walking home when it started to rain.", "It started raining while I was going home."], explanation: "past continuous + when/while။", topic: "narrative" },
    ],
    review: [
      { q: "ဇာတ်လမ်း အပိုင်း ၃ ခု ဘာလဲ။", a: "setting/အစ၊ ဖြစ်ရပ်/အလယ်၊ ရလဒ်/အဆုံး။" },
      { q: "past continuous ကို ဘယ်အခါ သုံးသလဲ။", a: "နောက်ခံ လုပ်ဆောင်မှုကို ဖော်ပြရန်။" },
    ],
    summary: ["ဇာတ်လမ်းကို အစီအစဉ်တကျ ရေးသည်။", "past simple + past continuous ကို တွဲသုံးသည်။", "အချိန် ဆက်စပ် စကားလုံး ကွဲပြားစွာ သုံးသည်။"],
    mastery: ["ဇာတ်လမ်းတို (စကားလုံး ၁၅၀+) ရေးနိုင်သည်။", "အတိတ်ကာလ ကို ၉၀% မှန်ကန်စွာ သုံးနိုင်သည်။"],
    topics: ["writing", "narrative", "past tenses"],
  },
  {
    id: "g6-cover-letter",
    moduleId: "G",
    title: "Writing: Cover Letters",
    titleMm: "ရေးသားမှု — အလုပ်လျှောက်လွှာ စာ",
    level: "B2",
    minutes: 24,
    summaryLine: "စာဖုံး (cover letter) ရေးပုံ — ရာထူးနှင့် ကိုက်ညီမှု ဖော်ပြခြင်း၊ အထောက်အထား နှင့် ယဉ်ကျေးသည့် နိဂုံး။",
    objectives: ["cover letter ပိုဒ် ၃ ခု ရေးနိုင်မည်။", "ကျွမ်းကျင်မှုနှင့် ရာထူး ချိတ်ဆက်နိုင်မည်။", "ယဉ်ကျေးသည့် လေသံ ထိန်းနိုင်မည်။"],
    vocab: [
      { en: "I am writing to apply for", mm: "…အတွက် လျှောက်ထားရန် ရေးသားအပ်ပါသည်", pos: "phrase", example: "I am writing to apply for the marketing post.", exampleMm: "မားကတ်တင်း ရာထူးအတွက် လျှောက်ထားရန် ရေးသားအပ်ပါသည်။", topic: "cover letter", level: "B1" },
      { en: "suitable for", mm: "သင့်လျော်သည်", pos: "phrase", example: "I believe I am suitable for this role.", exampleMm: "ဤရာထူးအတွက် ကျွန်တော် သင့်လျော်သည်ဟု ယုံကြည်ပါသည်။", topic: "cover letter", level: "B2" },
      { en: "look forward to hearing from you", mm: "သင့်ပြန်ကြားချက်ကို မျှော်လင့်ပါသည်", pos: "phrase", example: "I look forward to hearing from you.", exampleMm: "သင့်ပြန်ကြားချက်ကို မျှော်လင့်ပါသည်။", topic: "cover letter", level: "B1" },
    ],
    sections: [
      {
        heading: "ပိုဒ် ၃ ခု",
        body: [
          "၁) ရာထူး + ရင်းမြစ် — 'I am writing to apply for the position of…, advertised on…'။ ၂) ကိုက်ညီမှု — ကျွမ်းကျင်မှု ၂–၃ ခုကို သက်သေဖြင့် တွဲပြသည်။",
          "၃) နိဂုံး — CV ပူးတွဲကြောင်း၊ အင်တာဗျူး အခွင့်အလမ်း တောင်းခံကြောင်း နှင့် ကျေးဇူးတင်ကြောင်း။ 'Yours sincerely' ဖြင့် ပိတ်သည်။",
          "CV ကို ပြန်မရေးပါနှင့်။ ရာထူးနှင့် ကိုက်ညီသည့် အချက် ၂–၃ ကိုသာ ရွေးပြီး အဘယ်ကြောင့် အရေးကြီးသည်ကို ရှင်းပြသည်။",
        ],
        table: { headers: ["ပိုဒ်", "ရည်ရွယ်ချက်", "နမူနာ စကားစု"], rows: [["၁", "ရာထူး လျှောက်", "I am writing to apply for…"], ["၂", "ကိုက်ညီမှု", "In my current role, I…"], ["၃", "နိဂုံး", "I would welcome the opportunity to…"]] },
      },
      {
        heading: "လေသံ နှင့် အမှား ရှောင်ခြင်း",
        body: [
          "ယုံကြည်မှု ရှိသော်လည်း မာန မပါစေရ — 'I am confident that my experience in… would allow me to…' ကဲ့သို့ ရေးသည်။",
          "ယေဘုယျ ချီးမွမ်းချက် ('I am a hard-working person') ထက် သက်သေ ('I increased sales by 15% in six months') က ပိုအားကောင်းသည်။",
        ],
      },
    ],
    examples: [
      { en: "I am writing to apply for the position of junior accountant advertised on your website.", mm: "သင့်ဝက်ဘ်ဆိုက်တွင် ကြော်ငြာထားသည့် အငယ်တန်း စာရင်းကိုင် ရာထူးအတွက် လျှောက်ထားရန် ရေးသားအပ်ပါသည်။" },
      { en: "In my current role, I manage monthly reports for three departments.", mm: "လက်ရှိ ရာထူးတွင် ဌာန သုံးခုအတွက် လစဉ် အစီရင်ခံစာများကို စီမံသည်။" },
      { en: "I would welcome the opportunity to discuss my application at an interview.", mm: "အင်တာဗျူးတွင် ကျွန်တော့် လျှောက်လွှာအကြောင်း ဆွေးနွေးခွင့်ကို ကြိုဆိုပါသည်။" },
    ],
    mistakes: [
      { wrong: "CV ကို အတိအကျ ပြန်ချရေးခြင်း", right: "ကိုက်ညီသည့် အချက် ၂–၃ သာ ရွေးပါ", why: "ထပ်နေလျှင် ဖတ်ရှုသူ စိတ်မဝင်စား။" },
      { wrong: "'To whom it may concern' ကို အမည် သိလျှင်ပါ သုံးခြင်း", right: "အမည် သိလျှင် 'Dear Ms. Aye' သုံးပါ", why: "တိကျသည့် ပုဂ္ဂိုလ်သတ် ပိုထိရောက်သည်။" },
    ],
    guided: [
      { type: "mcq", prompt: "Which is the best opening?", promptMm: "ရွေးပါ။", options: ["I want a job.", "I am writing to apply for the post of receptionist.", "Hello, give me work.", "I am the best."], answer: 1, explanation: "ရာထူး ရှင်းလင်းစွာ။", topic: "cover letter" },
      { type: "mcq", prompt: "Strong evidence is ___.", promptMm: "ရွေးပါ။", options: ["I am friendly.", "I handled 40 calls a day.", "I like people.", "I am good."], answer: 1, explanation: "တိုင်းတာနိုင်သည့် သက်သေ။", topic: "cover letter" },
      { type: "fill", prompt: "I look forward ___ hearing from you.", promptMm: "ဖြည့်ပါ။", answers: ["to"], explanation: "look forward to + -ing။", topic: "cover letter" },
      { type: "correct", prompt: "Correct: I am interested to the position of driver.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["I am interested in the position of driver."], explanation: "interested in။", topic: "cover letter" },
    ],
    independent: [
      { type: "mcq", prompt: "How many main paragraphs in a cover letter?", promptMm: "ရွေးပါ။", options: ["1", "3", "6", "10"], answer: 1, explanation: "၃ ပိုဒ်။", topic: "cover letter" },
      { type: "fill", prompt: "I believe I am ___ for this role.", promptMm: "ဖြည့်ပါ။", answers: ["suitable"], explanation: "suitable for။", topic: "cover letter" },
      { type: "mcq", prompt: "Which closing is correct if you know the name?", promptMm: "ရွေးပါ။", options: ["Yours faithfully", "Yours sincerely", "Bye", "Thanks a lot"], answer: 1, explanation: "အမည် သိလျှင် sincerely။", topic: "cover letter" },
      { type: "translate", prompt: "Translate: ဒီရာထူးအတွက် လျှောက်ထားချင်ပါတယ်။", promptMm: "တရားဝင် လေသံဖြင့် ရေးပါ။", answers: ["I would like to apply for this position.", "I am writing to apply for this position."], explanation: "apply for + ရာထူး။", topic: "cover letter" },
    ],
    review: [
      { q: "cover letter ပိုဒ် ၃ ခု ဘာတွေလဲ။", a: "ရာထူး လျှောက်ခြင်း၊ ကိုက်ညီမှု အထောက်အထား၊ နိဂုံး။" },
      { q: "CV နှင့် cover letter ကွာခြားချက် ဘာလဲ။", a: "CV = အချက်အလက် စာရင်း၊ cover letter = ဘာကြောင့် ကိုက်ညီသည်ကို ရှင်းပြချက်။" },
    ],
    summary: ["cover letter သည် ၃ ပိုဒ်ဖြင့် တိုတိုရေးသည်။", "သက်သေ နှင့် ကိန်းဂဏန်း ထည့်သည်။", "ယဉ်ကျေးပြီး ယုံကြည်မှုရှိသည့် လေသံ ထိန်းသည်။"],
    mastery: ["cover letter ၁ စောင် (စကားလုံး ၁၅၀+) ရေးနိုင်သည်။", "ရာထူးနှင့် ကိုက်ညီသည့် အချက် ၃ ခု ချိတ်ဆက်နိုင်သည်။"],
    topics: ["writing", "cover letter", "job application"],
  },
  {
    id: "g7-reports",
    moduleId: "G",
    title: "Writing: Reports",
    titleMm: "ရေးသားမှု — အစီရင်ခံစာ ရေးခြင်း",
    level: "B2",
    minutes: 24,
    summaryLine: "အစီရင်ခံစာ ရေးပုံ — ခေါင်းစဉ်၊ နိဒါန်း၊ တွေ့ရှိချက်၊ ကောက်ချက် နှင့် အကြံပြုချက်။",
    objectives: ["အစီရင်ခံစာ အပိုင်း ၅ ခု ရေးနိုင်မည်။", "တွေ့ရှိချက်ကို ဘက်မလိုက်ဘဲ ရေးနိုင်မည်။", "အကြံပြုချက် ပေးနိုင်မည်။"],
    vocab: [
      { en: "findings", mm: "တွေ့ရှိချက်များ", pos: "noun", example: "The findings are based on 50 responses.", exampleMm: "တွေ့ရှိချက်များသည် တုံ့ပြန်ချက် ၅၀ ခုအပေါ် အခြေခံသည်။", topic: "report", level: "B2" },
      { en: "recommend", mm: "အကြံပြုသည်", pos: "verb", example: "We recommend extending the opening hours.", exampleMm: "ဖွင့်ချိန် တိုးရန် အကြံပြုပါသည်။", topic: "report", level: "B1" },
      { en: "questionnaire", mm: "မေးခွန်းလွှာ", pos: "noun", example: "A questionnaire was sent to all staff.", exampleMm: "ဝန်ထမ်းအားလုံးထံ မေးခွန်းလွှာ ပို့ခဲ့သည်။", topic: "report", level: "B2" },
    ],
    sections: [
      {
        heading: "အပိုင်း ၅ ခု",
        body: [
          "Title + date + author → Introduction (ရည်ရွယ်ချက်၊ နည်းလမ်း၊ ပမာဏ) → Findings (အချက်အလက်၊ ဇယား/ဂဏန်း) → Conclusion (အဓိပ္ပာယ်) → Recommendations (ဘာလုပ်သင့်)။",
          "ခေါင်းစဉ်ငယ်များ (Headings) နှင့် စာရင်းများ (bullet points) ကို သုံးခြင်းက ဖတ်ရ လွယ်စေသည်။",
          "အစီရင်ခံစာသည် တရားဝင် ဖြစ်သဖြင့် contraction မသုံးပါ။ ဘက်မလိုက်သည့် လေသံ — 'It appears that…', 'The data suggest…'။",
        ],
        table: { headers: ["အပိုင်း", "ပါဝင်ရန်", "စကားစု"], rows: [["Introduction", "ရည်ရွယ်ချက်/နည်းလမ်း", "The purpose of this report is to…"], ["Findings", "ဒေတာ", "Most respondents reported…"], ["Conclusion", "အဓိပ္ပာယ်", "Overall, the results indicate…"], ["Recommendations", "အကြံပြုချက်", "It is recommended that…"]] },
      },
      {
        heading: "ဒေတာ ဖော်ပြခြင်း",
        body: [
          "ဂဏန်းကို တိကျစွာ ဖော်ပြသည် — '68 percent of respondents (34 of 50) said…'။ နမူနာ ငယ်လျှင် ယေဘုယျချော်ချခြင်းကို ရှောင်သည်။",
          "အကြံပြုချက်တိုင်း တွေ့ရှိချက်နှင့် ချိတ်ဆက်ရသည် — ဒေတာ 'ဖွင့်ချိန် မလုံလောက်' ဆိုလျှင် အကြံပြုချက်က 'ဖွင့်ချိန် တိုးရန်' ဖြစ်ရမည်။",
        ],
      },
    ],
    examples: [
      { en: "The purpose of this report is to evaluate the new booking system.", mm: "ဤအစီရင်ခံစာ၏ ရည်ရွယ်ချက်က ဘွတ်ကင်စနစ်သစ်ကို အကဲဖြတ်ရန် ဖြစ်သည်။" },
      { en: "Most respondents (68 percent) found the system easy to use.", mm: "တုံ့ပြန်သူ အများစု (၆၈ ရာခိုင်နှုန်း) က စနစ်ကို အသုံးပြုရ လွယ်ကူသည်ဟု ဆိုသည်။" },
      { en: "It is recommended that the support line be extended to weekends.", mm: "အကူအညီ ဖုန်းလိုင်းကို စနေ၊ တနင်္ဂနွေအထိ တိုးချဲ့ရန် အကြံပြုပါသည်။" },
    ],
    mistakes: [
      { wrong: "တွေ့ရှိချက်တွင် ကိုယ်ပိုင် ထင်မြင်ချက် ရောခြင်း", right: "အချက်အလက် နှင့် အကြံပြုချက် ခွဲပါ", why: "အစီရင်ခံစာ ဘက်လိုက်မှု ဖြစ်သည်။" },
      { wrong: "အကြံပြုချက် မပါဘဲ ဒေတာဖြင့် အဆုံးသတ်ခြင်း", right: "recommendations ထည့်ပါ", why: "ဆုံးဖြတ်ချက် ချရန် မလွယ်။" },
    ],
    guided: [
      { type: "mcq", prompt: "A report should avoid ___.", promptMm: "ရွေးပါ။", options: ["headings", "contractions", "data", "recommendations"], answer: 1, explanation: "formal ဖြစ်သဖြင့် contraction မသုံး။", topic: "report" },
      { type: "mcq", prompt: "Where do recommendations go?", promptMm: "ရွေးပါ။", options: ["Introduction", "Findings", "Conclusion", "After the conclusion"], answer: 3, explanation: "နိဂုံး ပြီးနောက်။", topic: "report" },
      { type: "fill", prompt: "It is ___ that opening hours be extended.", promptMm: "ဖြည့်ပါ။", answers: ["recommended"], explanation: "It is recommended that…။", topic: "report" },
      { type: "correct", prompt: "Correct: The data shows that most staffs are happy.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["The data show that most staff are happy.", "The data shows that most staff are happy."], explanation: "staff = ရေတွက်မရ။", topic: "report" },
    ],
    independent: [
      { type: "mcq", prompt: "Which is a neutral report sentence?", promptMm: "ရွေးပါ။", options: ["The system is obviously terrible.", "The data suggest the system is slow at peak times.", "Nobody likes the system.", "I hate the system."], answer: 1, explanation: "ဒေတာအခြေခံ ဘက်မလိုက်ချက်။", topic: "report" },
      { type: "fill", prompt: "A ___ was sent to all 50 staff.", promptMm: "ဖြည့်ပါ။", answers: ["questionnaire"], explanation: "questionnaire။", topic: "report" },
      { type: "mcq", prompt: "What comes first?", promptMm: "ရွေးပါ။", options: ["Recommendations", "Introduction", "Conclusion", "Appendix"], answer: 1, explanation: "နိဒါန်း။", topic: "report" },
      { type: "translate", prompt: "Translate: ဤအစီရင်ခံစာက ဝန်ဆောင်မှုကို အကဲဖြတ်ရန် ဖြစ်သည်။", promptMm: "တရားဝင် လေသံဖြင့် ရေးပါ။", answers: ["The purpose of this report is to evaluate the service.", "This report evaluates the service."], explanation: "purpose of this report is to…။", topic: "report" },
    ],
    review: [
      { q: "အစီရင်ခံစာ အပိုင်း ၅ ခု ဘာလဲ။", a: "title၊ introduction၊ findings၊ conclusion၊ recommendations။" },
      { q: "အကြံပြုချက် ဘယ်လို ရေးသလဲ။", a: "တွေ့ရှိချက်နှင့် ချိတ်ဆက်ပြီး တိကျစွာ ရေးသည်။" },
    ],
    summary: ["အစီရင်ခံစာသည် ဖွဲ့စည်းပုံ ရှင်းရမည်။", "ဒေတာနှင့် ထင်မြင်ချက် ခွဲခြားသည်။", "အကြံပြုချက်က တွေ့ရှိချက်အပေါ် အခြေခံသည်။"],
    mastery: ["အစီရင်ခံစာ (စကားလုံး ၂၀၀+) ရေးနိုင်သည်။", "ဒေတာ ဖော်ပြချက် ၅ ကြောင်း တိကျစွာ ရေးနိုင်သည်။"],
    topics: ["writing", "report", "formal writing"],
  },
  {
    id: "g8-editing",
    moduleId: "G",
    title: "Editing: Proofreading Your Own Writing",
    titleMm: "တည်းဖြတ်ခြင်း — ကိုယ်ရေးစာ ပြန်စစ်ခြင်း",
    level: "B1",
    minutes: 20,
    summaryLine: "ကိုယ်ရေးထားသည့် စာကို အဆင့်လိုက် ပြန်စစ်ပြီး အမှား ရှာဖျက်နည်း။",
    objectives: ["စစ်ဆေးစာရင်း ၅ ချက် အသုံးချနိုင်မည်။", "အမှား ၈ မျိုး ရှာနိုင်မည်။", "စာကို နှစ်ကြိမ် တည်းဖြတ်နိုင်မည်။"],
    vocab: [
      { en: "proofread", mm: "အမှား ရှာဖတ်သည်", pos: "verb", example: "Proofread your email before sending.", exampleMm: "မပို့မီ အီးမေးလ်ကို အမှား ရှာဖတ်ပါ။", topic: "editing", level: "B1" },
      { en: "typo", mm: "စာလုံးပေါင်း အမှား", pos: "noun", example: "There is a typo in the address.", exampleMm: "လိပ်စာတွင် စာလုံးပေါင်း အမှား ရှိသည်။", topic: "editing", level: "B1" },
      { en: "rewrite", mm: "ပြန်ရေးသည်", pos: "verb", example: "Rewrite the sentence more clearly.", exampleMm: "ဝါကျကို ပိုရှင်းအောင် ပြန်ရေးပါ။", topic: "editing", level: "B1" },
    ],
    sections: [
      {
        heading: "စစ်ဆေးစာရင်း",
        body: [
          "၁) အဓိကအချက် ရှင်းသလား။ ၂) ဝါကျတိုင်းတွင် subject + verb ရှိသလား။ ၃) ကာလ ညီညာသလား။",
          "၄) စကားလုံး ထပ်နေမှု/ချန်လှပ်မှု (a/an/the, preposition)။ ၅) စာလုံးပေါင်း နှင့် သတ်ပုဒ်။",
          "အဆင့် ၂ ဆင့်ဖြင့် စစ်သည် — ပထမ အကြောင်းအရာ (အဓိပ္ပာယ်၊ ဖွဲ့စည်းပုံ)၊ ဒုတိယ အသေးစိတ် (သတ်ပုဒ်၊ စာလုံးပေါင်း)။ စာကို အသံထွက်ဖတ်ခြင်းက အမှား ရှာရ လွယ်စေသည်။",
        ],
        table: { headers: ["အမှား အမျိုးအစား", "မှား", "မှန်"], rows: [["ကာလ", "Yesterday I go…", "Yesterday I went…"], ["article", "I am student.", "I am a student."], ["plural", "three book", "three books"], ["preposition", "depend of", "depend on"], ["spelling", "recieve", "receive"]] },
      },
      {
        heading: "ကိရိယာ နှင့် အလေ့အထ",
        body: [
          "စာရေးပြီးချင်း မစစ်ပါနှင့်။ အနည်းဆုံး မိနစ် ၁၀ အနားယူပြီးမှ ပြန်ဖတ်သည်။",
          "အွန်လိုင်း စာလုံးပေါင်း စစ်ကိရိယာကို သုံးနိုင်သော်လည်း အဓိပ္ပာယ် မှားမှားကို မဖမ်းနိုင်ပါ ('form' vs 'from')။ ကိုယ်တိုင် ဖတ်ခြင်း မရှိမဖြစ်။",
        ],
      },
    ],
    examples: [
      { en: "Wrong: She don't like coffee. → Right: She doesn't like coffee.", mm: "မှား — She don't like coffee။ မှန် — She doesn't like coffee။" },
      { en: "Wrong: I have 25 years old. → Right: I am 25 years old.", mm: "မှား — I have 25 years old။ မှန် — I am 25 years old။" },
      { en: "Wrong: He is married with a teacher. → Right: He is married to a teacher.", mm: "မှား — married with။ မှန် — married to။" },
    ],
    mistakes: [
      { wrong: "အမှား ရှာရာတွင် အကြောင်းအရာကို လျစ်လျူရှုခြင်း", right: "အရင် အကြောင်းအရာ၊ နောက် အသေးစိတ် စစ်ပါ", why: "အဓိကအချက် မရှင်းလျှင် အသေးစိတ် မှန်လည်း အကျိုး မရှိ။" },
      { wrong: "တစ်ခါတည်း ပြီးအောင် ရေးပြီး မစစ်ခြင်း", right: "အနည်းဆုံး ၂ ကြိမ် ပြန်ဖတ်ပါ", why: "အမှား ၇၀% ကျော်ကို ပြန်ဖတ်မှ ရှာတွေ့သည်။" },
    ],
    guided: [
      { type: "mcq", prompt: "Which sentence is correct?", promptMm: "ရွေးပါ။", options: ["She don't like tea.", "She doesn't like tea.", "She not like tea.", "She no like tea."], answer: 1, explanation: "third person → doesn't။", topic: "editing" },
      { type: "mcq", prompt: "Which is correct?", promptMm: "ရွေးပါ။", options: ["I am 20 years old.", "I have 20 years old.", "I am 20 years.", "I have 20 years."], answer: 0, explanation: "be + အသက် + years old။", topic: "editing" },
      { type: "fill", prompt: "Correct: It depends ___ the weather.", promptMm: "ဖြည့်ပါ။", answers: ["on"], explanation: "depend on။", topic: "editing" },
      { type: "correct", prompt: "Correct: I bought three book yesterday.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["I bought three books yesterday."], explanation: "ဗဟုကိန်း books။", topic: "editing" },
    ],
    independent: [
      { type: "mcq", prompt: "Which is a typo?", promptMm: "ရွေးပါ။", options: ["recieve", "receive", "received", "receiving"], answer: 0, explanation: "i before e except after c။", topic: "editing" },
      { type: "fill", prompt: "He is married ___ a doctor.", promptMm: "ဖြည့်ပါ။", answers: ["to"], explanation: "married to။", topic: "editing" },
      { type: "mcq", prompt: "What should you check first?", promptMm: "ရွေးပါ။", options: ["Spelling", "Meaning and structure", "Font", "Word count"], answer: 1, explanation: "အကြောင်းအရာ နှင့် ဖွဲ့စည်းပုံ အရင်။", topic: "editing" },
      { type: "translate", prompt: "Translate: မပို့မီ ဒီအီးမေးလ်ကို ပြန်စစ်ပါ။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["Proofread this email before you send it.", "Check this email before sending it."], explanation: "before + clause/gerund။", topic: "editing" },
    ],
    review: [
      { q: "တည်းဖြတ် အဆင့် ၂ ဆင့် ဘာလဲ။", a: "အကြောင်းအရာ၊ ပြီးမှ အသေးစိတ်။" },
      { q: "စာလုံးပေါင်း စစ်ကိရိယာ ဘာမဖမ်းနိုင်သလဲ။", a: "အဓိပ္ပာယ် မှားမှား (form/from) ကို။" },
    ],
    summary: ["စစ်ဆေးစာရင်း ၅ ချက်ဖြင့် စစ်သည်။", "အကြောင်းအရာ အရင်၊ အသေးစိတ် နောက်။", "ပြန်ဖတ်ခြင်း မရှိမဖြစ်။"],
    mastery: ["အမှား ၁၀ ခုပါ စာပိုဒ်ကို ၈ ခု ရှာပြင်နိုင်သည်။", "ကိုယ်ပိုင်စာကို ၂ ကြိမ် စစ်နိုင်သည်။"],
    topics: ["writing", "editing", "accuracy"],
  },
];

export const moduleGLessonsPart4: Lesson[] = buildLessons(seeds);
