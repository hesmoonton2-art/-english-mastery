import type { Lesson } from "@/lib/types";
import { buildLessons, type LessonSeed } from "./builder.ts";

const seeds: LessonSeed[] = [
  {
    id: "h18-c2-rhetoric",
    moduleId: "H",
    title: "C2 Rhetoric: Persuasion and Emphasis",
    titleMm: "C2 ဘာသာရေး — ဆွဲဆောင်မှု နှင့် အလေးပေးမှု",
    level: "C2",
    minutes: 26,
    summaryLine: "ပြောဆို/စာရေး ဆွဲဆောင်မှု နည်းစနစ်များ — rule of three, contrast, rhetorical question နှင့် repetition။",
    objectives: ["နည်းစနစ် ၄ ခု ဖော်ပြနိုင်မည်။", "နည်းစနစ်ကို သတိထားစွာ သုံးနိုင်မည်။", "ဆွဲဆောင်မှု၏ ကျင့်ဝတ် ကန့်သတ်ချက် သိမည်။"],
    vocab: [
      { en: "rhetoric", mm: "ဆွဲဆောင်သည့် ဘာသာစကား အတတ်", pos: "noun", example: "His rhetoric was powerful but empty.", exampleMm: "သူ၏ ဆွဲဆောင်မှု ဘာသာစကားက အားကောင်းသော်လည်း အနှစ်သာရ မရှိခဲ့ပါ။", topic: "rhetoric", level: "C2" },
      { en: "rule of three", mm: "အချက် သုံးခု စီစဉ်ခြင်း", pos: "noun", example: "The rule of three makes a line memorable.", exampleMm: "အချက် သုံးခု စီစဉ်ခြင်းက ဝါကျကို မှတ်မိစေသည်။", topic: "rhetoric", level: "C2" },
      { en: "rhetorical question", mm: "အဖြေ မမျှော်လင့်သည့် မေးခွန်း", pos: "noun", example: "Do we really want to wait another year?", exampleMm: "နောက်တစ်နှစ် ထပ်စောင့်ချင်တာ တကယ်လား။", topic: "rhetoric", level: "C1" },
    ],
    sections: [
      {
        heading: "နည်းစနစ် ၄ ခု",
        body: [
          "Rule of three — အချက် သုံးခု စီစဉ်ခြင်း ('cheaper, faster, fairer')။ Contrast — ဆန့်ကျင်ဘက် နှစ်ခုကို ဆက်တွဲခြင်း ('not a cost, but an investment')။",
          "Rhetorical question — ပရိသတ်ကို ကိုယ်တိုင် စဉ်းစားစေသည်။ Repetition/parallelism — တူညီသည့် ဖွဲ့စည်းပုံ ထပ်ခြင်း ('we will not stop, we will not pause, we will not retreat')။",
          "ဤနည်းစနစ်များကို အလွန်အကျွံ သုံးလျှင် ဟောပြောချက် ဆန်လာပြီး ပညာရေးဆန် စာတွင် မသင့်လျော်ပါ။",
        ],
        table: { headers: ["နည်း", "ဥပမာ", "သင့်တော်သည့် နေရာ"], rows: [["Rule of three", "clear, cheap, quick", "ဟောပြောချက်"], ["Contrast", "not X but Y", "အဆို တင်ပြ"], ["Rhetorical question", "Why wait?", "ဖွင့်ဝါကျ"], ["Repetition", "we will… we will…", "အဆုံးသတ်"]] },
      },
      {
        heading: "ကျင့်ဝတ် ကန့်သတ်ချက်",
        body: [
          "ဆွဲဆောင်မှုသည် အထောက်အထား မရှိဘဲ အသုံးချလျှင် လှည့်စားမှု ဖြစ်သည်။ ကိန်းဂဏန်း/ကိုးကား မပါဘဲ စိတ်ခံစားချက်ကိုသာ နှိုးဆွခြင်းကို သတိထားရသည်။",
          "ပညာရေးဆန် စာတွင် ဆွဲဆောင်မှု နည်းစနစ်ကို အနည်းငယ်သာ သုံးပြီး အဓိကအားဖြင့် အထောက်အထားဖြင့် ဆွေးနွေးသည်။",
        ],
      },
    ],
    examples: [
      { en: "This plan is cheaper, faster and fairer.", mm: "ဤအစီအစဉ်က ပိုသက်သာ၊ ပိုမြန်၊ ပိုမျှတသည်။", note: "rule of three။" },
      { en: "This is not a cost; it is an investment.", mm: "ဤသည် ကုန်ကျစရိတ် မဟုတ်ပါ၊ ရင်းနှီးမြှုပ်နှံမှု ဖြစ်သည်။", note: "contrast။" },
      { en: "If we cannot protect our children's schools, what exactly can we protect?", mm: "ကျွန်တော်တို့ ကလေးများ၏ ကျောင်းများကို မကာကွယ်နိုင်လျှင် ဘာကို ကာကွယ်နိုင်မည်နည်း။", note: "rhetorical question။" },
    ],
    mistakes: [
      { wrong: "အထောက်အထား မပါဘဲ ဆွဲဆောင်မှုသာ သုံးခြင်း", right: "အထောက်အထား နှင့် တွဲပါ", why: "မယုံကြည်ရ ဖြစ်နိုင်သည်။" },
      { wrong: "ပညာရေးဆန် စာတွင် ဟောပြောချက် ဆန်လွန်းခြင်း", right: "နည်းစနစ်ကို အနည်းငယ်သာ", why: "လေသံ မကိုက်ပါ။" },
    ],
    guided: [
      { type: "mcq", prompt: "\"Cheaper, faster, fairer\" uses ___.", promptMm: "ရွေးပါ။", options: ["rule of three", "repetition", "rhetorical question", "contrast"], answer: 0, explanation: "အချက် သုံးခု စီစဉ်ခြင်း။", topic: "rhetoric" },
      { type: "mcq", prompt: "Which is a rhetorical question?", promptMm: "ရွေးပါ။", options: ["Where is the station?", "Why should our children wait?", "How much is it?", "What time is it?"], answer: 1, explanation: "အဖြေ မမျှော်လင့်သည့် မေးခွန်း။", topic: "rhetoric" },
      { type: "fill", prompt: "This is not a problem; it is an ___ opportunity.", promptMm: "ဖြည့်ပါ။", answers: ["unexpected"], explanation: "contrast ဖွဲ့စည်းပုံ။", topic: "rhetoric" },
      { type: "correct", prompt: "Correct: We must not to stop fighting for change.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["We must not stop fighting for change."], explanation: "must not + verb။", topic: "rhetoric" },
    ],
    independent: [
      { type: "mcq", prompt: "What makes rhetoric dishonest?", promptMm: "ရွေးပါ။", options: ["Clear structure", "Emotion without evidence", "Short sentences", "Repetition"], answer: 1, explanation: "အထောက်အထား မပါဘဲ စိတ်ခံစားချက် နှိုးဆွခြင်း။", topic: "rhetoric" },
      { type: "fill", prompt: "A rhetorical ___ invites the audience to think.", promptMm: "ဖြည့်ပါ။", answers: ["question"], explanation: "rhetorical question။", topic: "rhetoric" },
      { type: "mcq", prompt: "Where is rhetoric most appropriate?", promptMm: "ရွေးပါ။", options: ["A lab report", "A campaign speech", "A medical record", "A tax form"], answer: 1, explanation: "ဟောပြောချက်။", topic: "rhetoric" },
      { type: "translate", prompt: "Translate: ဒါက ကုန်ကျစရိတ် မဟုတ်ဘူး၊ ရင်းနှီးမြှုပ်နှံမှု ဖြစ်တယ်။", promptMm: "contrast ဖွဲ့စည်းပုံဖြင့် ရေးပါ။", answers: ["This is not a cost; it is an investment.", "It is not a cost but an investment."], explanation: "not X but Y / not X; it is Y။", topic: "rhetoric" },
    ],
    review: [
      { q: "နည်းစနစ် ၄ ခု ဘာလဲ။", a: "rule of three, contrast, rhetorical question, repetition။" },
      { q: "ဆွဲဆောင်မှု ဘယ်အခါ မှားသလဲ။", a: "အထောက်အထား မပါဘဲ လှည့်စားရန် သုံးလျှင်။" },
    ],
    summary: ["ဆွဲဆောင်မှုက အဓိကအချက်ကို မှတ်မိစေသည်။", "အထောက်အထားနှင့် တွဲရမည်။", "ပညာရေးဆန် စာတွင် အတိုင်းအတာနှင့် သုံးသည်။"],
    mastery: ["နည်းစနစ် ၄ ခုကို ကိုယ်ပိုင် ဝါကျဖြင့် ပြသနိုင်သည်။", "ဆွဲဆောင်မှု ပါသည့် စာပိုဒ် (၁၅၀) ရေးနိုင်သည်။"],
    topics: ["rhetoric", "C2", "persuasion"],
  },
  {
    id: "h19-c2-irony-subtext",
    moduleId: "H",
    title: "C2 Irony, Subtext and Implication",
    titleMm: "C2 သရော်မှု၊ လျှို့ဝှက်အနက် နှင့် ဆိုလိုချက်",
    level: "C2",
    minutes: 26,
    summaryLine: "ပြောသည့် စကားနှင့် ဆိုလိုသည့် အဓိပ္ပာယ် ကွာခြားသည့် အခြေအနေများကို ဖတ်ယူနည်း။",
    objectives: ["irony အမျိုးအစား ၃ ခု ခွဲခြားနိုင်မည်။", "subtext ကို အထောက်အထားဖြင့် ဖော်ပြနိုင်မည်။", "ကိုယ်တိုင် သရော်မှု သုံးနိုင်မည်။"],
    vocab: [
      { en: "irony", mm: "သရော်မှု (ဆန့်ကျင်ဘက် အဓိပ္ပာယ်)", pos: "noun", example: "There is heavy irony in his praise.", exampleMm: "သူ၏ ချီးမွမ်းမှုတွင် ပြင်းထန်သည့် သရော်မှု ရှိသည်။", topic: "irony", level: "C2" },
      { en: "subtext", mm: "လျှို့ဝှက် အနက်", pos: "noun", example: "The subtext is that she does not trust him.", exampleMm: "လျှို့ဝှက် အနက်က သူမက သူ့ကို မယုံကြည်ကြောင်း ဖြစ်သည်။", topic: "irony", level: "C2" },
      { en: "understatement", mm: "လျှော့ပြောခြင်း", pos: "noun", example: "\"A bit of a problem\" is an understatement.", exampleMm: "'အနည်းငယ် ပြဿနာ' သည် လျှော့ပြောမှု ဖြစ်သည်။", topic: "irony", level: "C2" },
    ],
    sections: [
      {
        heading: "အမျိုးအစား ၃ ခု",
        body: [
          "Verbal irony — ပြောသည့် စကားနှင့် ဆိုလိုချက် ဆန့်ကျင်သည် ('Great, another delay.')။ Situational irony — မျှော်လင့်ချက်နှင့် ဖြစ်ပျက်မှု ဆန့်ကျင်သည်။",
          "Dramatic irony — ဖတ်ရှုသူက ဇာတ်ကောင်ထက် ပိုသိသည်။ Understatement — ကြီးမားသည့် အရာကို သေးငယ်စွာ ဖော်ပြသည် ('It's a little warm today' — ၄၀°C တွင်)။",
          "subtext ကို လေသံ၊ ရွေးချယ်သည့် စကားလုံး နှင့် ပြောသည့်/မပြောသည့် အချက်များမှ ခန့်မှန်းသည်။ တိုက်ရိုက် အထောက်အထား မရှိလျှင် ခန့်မှန်းချက်အဖြစ်သာ ဖော်ပြသည်။",
        ],
        table: { headers: ["အမျိုးအစား", "သဲလွန်စ", "ဥပမာ"], rows: [["verbal irony", "ဆန့်ကျင်ဘက် စကားလုံး", "Great, another delay."], ["situational irony", "မျှော်လင့်ချက် ပျက်", "မီးသတ်ဌာန မီးလောင်"], ["dramatic irony", "ဖတ်ရှုသူ ပိုသိ", "ဇာတ်ကောင် မသိသေး"], ["understatement", "လျှော့ပြော", "a little warm (40°C)"]] },
      },
      {
        heading: "ခန့်မှန်းမှု ကို ဖော်ပြခြင်း",
        body: [
          "'The speaker's praise is ironic, as the following sentence criticises the same decision.' ဟု အထောက်အထား ကိုးကားသည်။",
          "'It could be read as…' သို့မဟုတ် 'The subtext seems to be…' ဖြင့် ခန့်မှန်းချက် ဖြစ်ကြောင်း ထင်ရှားစေသည်။ ကိုယ်ပိုင် အမြင်ကို အမှန်တရားအဖြစ် မရေးပါ။",
        ],
      },
    ],
    examples: [
      { en: "\"What a wonderful idea,\" she said, closing the file.", mm: "'အလွန် ကောင်းသည့် အကြံပါ' ဟု သူမက ဖိုင်ကို ပိတ်ရင်း ဆိုသည်။", note: "verbal irony။" },
      { en: "It is a little warm today — the thermometer reads 41°C.", mm: "ယနေ့ အနည်းငယ် ပူသည် — သာမိုမီတာက ၄၁°C ပြသည်။", note: "understatement။" },
      { en: "The subtext is that the manager doubts the plan will work.", mm: "လျှို့ဝှက် အနက်က မန်နေဂျာက အစီအစဉ် အောင်မြင်မည်ကို သံသယ ရှိသည်ဟု ဖြစ်သည်။" },
    ],
    mistakes: [
      { wrong: "ခန့်မှန်းချက်ကို အမှန်တရားအဖြစ် ရေးခြင်း", right: "'It seems that…' ဖြင့် ရေးပါ", why: "subtext သည် အဓိပ္ပာယ် ဖွင့်ဆိုမှု ဖြစ်သည်။" },
      { wrong: "သရော်မှုကို တိုက်ရိုက် အနက်ဖြင့် ဖတ်ခြင်း", right: "အခြေအနေ နှင့် ဆန့်ကျင်မှုကို စစ်ပါ", why: "အဓိပ္ပာယ် လွဲနိုင်သည်။" },
    ],
    guided: [
      { type: "mcq", prompt: "\"Great, another delay\" is ___.", promptMm: "ရွေးပါ။", options: ["verbal irony", "understatement", "dramatic irony", "a compliment"], answer: 0, explanation: "ဆန့်ကျင်ဘက် အဓိပ္ပာယ်။", topic: "irony" },
      { type: "mcq", prompt: "\"A little warm\" at 41°C is ___.", promptMm: "ရွေးပါ။", options: ["irony", "understatement", "sarcasm", "metaphor"], answer: 1, explanation: "လျှော့ပြောခြင်း။", topic: "irony" },
      { type: "fill", prompt: "The hidden meaning of a text is its ___.", promptMm: "ဖြည့်ပါ။", answers: ["subtext"], explanation: "subtext။", topic: "irony" },
      { type: "correct", prompt: "Correct: It seems that the writer is not agree.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["It seems that the writer does not agree."], explanation: "agree သည် ကြိယာ။", topic: "irony" },
    ],
    independent: [
      { type: "mcq", prompt: "Dramatic irony occurs when ___.", promptMm: "ရွေးပါ။", options: ["the reader knows more than a character", "the writer is angry", "the plot is funny", "the ending is sad"], answer: 0, explanation: "ဖတ်ရှုသူ ပိုသိခြင်း။", topic: "irony" },
      { type: "fill", prompt: "Calling a disaster 'a small setback' is an ___.", promptMm: "ဖြည့်ပါ။", answers: ["understatement"], explanation: "understatement။", topic: "irony" },
      { type: "mcq", prompt: "Which phrasing marks an interpretation?", promptMm: "ရွေးပါ။", options: ["The subtext is definitely…", "It could be read as…", "Everyone knows…", "The text proves…"], answer: 1, explanation: "hedged interpretation။", topic: "irony" },
      { type: "translate", prompt: "Translate: ဒီစကားမှာ သရော်မှု ရှိတယ်လို့ ထင်ရတယ်။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["There seems to be irony in this remark.", "I think there is irony in this comment."], explanation: "there seems to be…။", topic: "irony" },
    ],
    review: [
      { q: "irony အမျိုးအစား ၃ ခု ဘာလဲ။", a: "verbal, situational, dramatic။" },
      { q: "subtext ကို ဘယ်လို ဖော်ပြသလဲ။", a: "အထောက်အထား ကိုးကားပြီး ခန့်မှန်းချက်အဖြစ် ရေးသည်။" },
    ],
    summary: ["သရော်မှုတွင် စကားနှင့် အနက် ဆန့်ကျင်သည်။", "understatement က လျှော့ပြောသည်။", "subtext ကို ခန့်မှန်းချက်အဖြစ် ဖော်ပြသည်။"],
    mastery: ["စာသား ၁ ခုတွင် သရော်မှု ၃ ခု ရှာနိုင်သည်။", "subtext ကို အထောက်အထားဖြင့် ရှင်းပြနိုင်သည်။"],
    topics: ["reading", "irony", "C2"],
  },
  {
    id: "h20-c2-register-shifting",
    moduleId: "H",
    title: "C2 Register Shifting",
    titleMm: "C2 လေသံ အဆင့် ပြောင်းလဲခြင်း",
    level: "C2",
    minutes: 24,
    summaryLine: "တူညီသည့် အဓိပ္ပာယ်ကို အခြေအနေအလိုက် လေသံ ၃ မျိုးဖြင့် ပြောင်းရေးနည်း။",
    objectives: ["လေသံ ၃ မျိုး ခွဲခြားနိုင်မည်။", "တူညီသည့် အကြောင်းအရာကို လေသံပြောင်းနိုင်မည်။", "လေသံ မကိုက်မှုကို ရှာနိုင်မည်။"],
    vocab: [
      { en: "register", mm: "ဘာသာစကား လေသံ အဆင့်", pos: "noun", example: "Academic writing uses a formal register.", exampleMm: "ပညာရေးဆန် စာရေးသားမှုသည် တရားဝင် လေသံ သုံးသည်။", topic: "register", level: "C1" },
      { en: "colloquial", mm: "စကားပြော ဆန်", pos: "adjective", example: "'Kids' is colloquial; 'children' is neutral.", exampleMm: "'kids' သည် စကားပြောဆန်၊ 'children' သည် ကြားနေ ဖြစ်သည်။", topic: "register", level: "C1" },
      { en: "neutral", mm: "ကြားနေ", pos: "adjective", example: "Use neutral language in reports.", exampleMm: "အစီရင်ခံစာတွင် ကြားနေ စကားလုံး သုံးပါ။", topic: "register", level: "B2" },
    ],
    sections: [
      {
        heading: "လေသံ ၃ မျိုး",
        body: [
          "Formal — 'We regret to inform you that the event has been cancelled.' Neutral — 'The event has been cancelled.' Colloquial — 'They've called off the event.'",
          "လေသံ ကို စကားလုံး ရွေးချယ်မှု (phrasal verb vs Latinate verb)၊ contraction၊ ဝါကျ အရှည် နှင့် နာမ်စား ရွေးချယ်မှု ('one' vs 'you') က ဆုံးဖြတ်သည်။",
          "လေသံ မကိုက်မှု — တရားဝင် စာတွင် 'kids', 'stuff', 'get' ကဲ့သို့ စကားလုံး ရောနှောခြင်း။ စကားပြောတွင် 'hereby', 'aforementioned' သုံးခြင်း။",
        ],
        table: { headers: ["အဓိပ္ပာယ်", "formal", "colloquial"], rows: [["ဖုန်းဆက်သည်", "contact by telephone", "give someone a ring"], ["တောင်းပန်သည်", "apologise for", "say sorry for"], ["လျှော့ချသည်", "reduce", "cut down"], ["စောင့်ဆိုင်းသည်", "await", "wait for"]] },
      },
      {
        heading: "ပြောင်းရေးခြင်း",
        body: [
          "အရင် အကြောင်းအရာ အားလုံးကို ကြားနေ စကားဖြင့် ရေးသည်။ ထို့နောက် လိုအပ်သည့် လေသံသို့ စကားလုံး/ဖွဲ့စည်းပုံ ပြောင်းသည်။ အဓိပ္ပာယ် မပျောက်စေရ။",
          "တရားဝင် စာတွင် 'I' ကို လျှော့ပြီး passive/impersonal ဖွဲ့စည်းပုံ သုံးသည် — 'The decision was made' (ဘယ်သူ ချသည်ကို မဖော်ပြလိုလျှင်)။",
        ],
      },
    ],
    examples: [
      { en: "Formal: We regret to inform you that your application was unsuccessful.", mm: "တရားဝင် — သင့်လျှောက်လွှာ မအောင်မြင်ခဲ့ကြောင်း ဝမ်းနည်းစွာ အသိပေးအပ်ပါသည်။" },
      { en: "Neutral: Unfortunately, your application was not successful.", mm: "ကြားနေ — ကံဆိုးစွာ သင့်လျှောက်လွှာ မအောင်မြင်ခဲ့ပါ။" },
      { en: "Colloquial: Sorry — you didn't get the job.", mm: "စကားပြောဆန် — တောင်းပန်ပါတယ်၊ အလုပ် မရခဲ့ပါဘူး။" },
    ],
    mistakes: [
      { wrong: "တရားဝင် စာတွင် contraction သုံးခြင်း", right: "ပြည့်စုံသည့် ပုံစံ ရေးပါ", why: "လေသံ မကိုက်ပါ။" },
      { wrong: "လေသံ ပြောင်းရာတွင် အဓိပ္ပာယ် ပြောင်းခြင်း", right: "အဓိပ္ပာယ် မပျောက်စေရ", why: "ပြန်ရေး၏ ရည်ရွယ်ချက် ပျက်သည်။" },
    ],
    guided: [
      { type: "mcq", prompt: "Which is formal?", promptMm: "ရွေးပါ။", options: ["We regret to inform you…", "Sorry, but…", "Bad news…", "Just so you know…"], answer: 0, explanation: "formal ပုံစံ။", topic: "register" },
      { type: "mcq", prompt: "'Give someone a ring' is ___.", promptMm: "ရွေးပါ။", options: ["formal", "neutral", "colloquial", "archaic"], answer: 2, explanation: "စကားပြောဆန်။", topic: "register" },
      { type: "fill", prompt: "___ language is suitable for reports.", promptMm: "ဖြည့်ပါ။", answers: ["Formal", "Neutral"], explanation: "formal/neutral။", topic: "register" },
      { type: "correct", prompt: "Correct this formal email: Sorry, we can't do it.", promptMm: "တရားဝင် ပြင်ပါ။", answers: ["We regret that we are unable to do so.", "Unfortunately, we are unable to do so."], explanation: "contraction + informal စကားလုံး ဖယ်။", topic: "register" },
    ],
    independent: [
      { type: "mcq", prompt: "Which word is out of place in a formal report?", promptMm: "ရွေးပါ။", options: ["substantial", "kids", "significant", "indicate"], answer: 1, explanation: "kids = colloquial။", topic: "register" },
      { type: "fill", prompt: "We ___ your reply at your earliest convenience.", promptMm: "ဖြည့်ပါ။", answers: ["await"], explanation: "await = formal wait for။", topic: "register" },
      { type: "mcq", prompt: "Which is neutral?", promptMm: "ရွေးပါ။", options: ["The event has been cancelled.", "We regret to inform you…", "They've called it off.", "Nah, cancelled."], answer: 0, explanation: "ကြားနေ ဝါကျ။", topic: "register" },
      { type: "translate", prompt: "Translate (formal): သင့်လျှောက်လွှာအတွက် ကျေးဇူးတင်ပါသည်။", promptMm: "တရားဝင် လေသံဖြင့် ရေးပါ။", answers: ["We are grateful for your application.", "Thank you for your application."], explanation: "are grateful for။", topic: "register" },
    ],
    review: [
      { q: "လေသံ ကို ဘာတွေက ဆုံးဖြတ်သလဲ။", a: "စကားလုံး ရွေးချယ်မှု၊ contraction၊ ဝါကျ အရှည်၊ နာမ်စား။" },
      { q: "လေသံ ပြောင်းရာတွင် ဘာမပျောက်ရ။", a: "အဓိပ္ပာယ်။" },
    ],
    summary: ["လေသံ ၃ မျိုး ကို အခြေအနေအလိုက် ရွေးသည်။", "စကားလုံး ရွေးချယ်မှုက လေသံကို ပြသည်။", "ပြောင်းရေးရာတွင် အဓိပ္ပာယ် ထိန်းသည်။"],
    mastery: ["တူညီသည့် သတင်း ၁ ခုကို လေသံ ၃ မျိုးဖြင့် ရေးနိုင်သည်။", "လေသံ မကိုက်မှု ၈ ခု ရှာနိုင်သည်။"],
    topics: ["writing", "register", "C2"],
  },
  {
    id: "h21-c2-literary-style",
    moduleId: "H",
    title: "C2 Literary Style and Voice",
    titleMm: "C2 စာပေ စတိုင် နှင့် အသံ",
    level: "C2",
    minutes: 26,
    summaryLine: "စာပေ စတိုင်ကို ခွဲခြမ်းစိတ်ဖြာပြီး ကိုယ်ပိုင် စတိုင်ဖြင့် စာတို ရေးနည်း။",
    objectives: ["စတိုင် လက္ခဏာ ၅ ခု ခွဲခြမ်းနိုင်မည်။", "ကိုယ်ပိုင် စတိုင်ဖြင့် စာတို ရေးနိုင်မည်။", "အခြားစတိုင်ကို အတုယူ ရေးနိုင်မည်။"],
    vocab: [
      { en: "diction", mm: "စကားလုံး ရွေးချယ်မှု", pos: "noun", example: "The diction is simple but precise.", exampleMm: "စကားလုံး ရွေးချယ်မှုက ရိုးရှင်းသော်လည်း တိကျသည်။", topic: "literary style", level: "C2" },
      { en: "syntax", mm: "ဝါကျ ဖွဲ့စည်းပုံ", pos: "noun", example: "The syntax is deliberately fragmented.", exampleMm: "ဝါကျ ဖွဲ့စည်းပုံကို တမင်တကာ ကွဲအောင် ရေးထားသည်။", topic: "literary style", level: "C2" },
      { en: "motif", mm: "ထပ်ခါ ပြန်ပေါ်သည့် သင်္ကေတ", pos: "noun", example: "Water is a recurring motif.", exampleMm: "ရေသည် ထပ်ခါ ပြန်ပေါ်သည့် သင်္ကေတ ဖြစ်သည်။", topic: "literary style", level: "C2" },
    ],
    sections: [
      {
        heading: "စတိုင် လက္ခဏာ ၅ ခု",
        body: [
          "Diction (စကားလုံး ရွေးချယ်မှု)၊ syntax (ဝါကျ ဖွဲ့စည်းပုံ)၊ rhythm (စည်းချက်)၊ imagery (ပုံရိပ်)၊ motif (ထပ်ခါ ပြန်ပေါ်သည့် သင်္ကေတ)။",
          "ခွဲခြမ်းစိတ်ဖြာရာတွင် စာသားမှ ကိုးကား သုံးခုခန့် ယူပြီး စတိုင်နှင့် အကျိုးသက်ရောက်မှုကို ချိတ်ဆက်သည် — 'The short sentences create a sense of urgency.'",
          "အတုယူ ရေးခြင်းတွင် စာရေးသူ၏ စကားလုံး အတိအကျ ကူးချခြင်း မဟုတ်ဘဲ ဖွဲ့စည်းပုံ နှင့် စည်းချက်ကို အတုယူသည်။",
        ],
        table: { headers: ["လက္ခဏာ", "မေးခွန်း", "ဥပမာ"], rows: [["diction", "ဘယ်စကားလုံး ရွေးသလဲ", "simple vs ornate"], ["syntax", "ဝါကျ ရှည်/တို", "fragmented"], ["rhythm", "ဖတ်ရ စည်းချက်", "repetition"], ["motif", "ဘာထပ်ပေါ်သလဲ", "water, mirrors"]] },
      },
      {
        heading: "စတိုင် ဖန်တီးခြင်း",
        body: [
          "ကိုယ်ပိုင် စတိုင်ကို ရှင်းလင်းမှု၊ စည်းချက် နှင့် စကားလုံး ရွေးချယ်မှု သုံးခုဖြင့် ဖန်တီးသည်။ ထူးဆန်းသည့် စကားလုံး ထည့်ခြင်း မလိုပါ။",
          "တစ်ကြောင်း တိုတိုနှင့် တစ်ကြောင်း ရှည်ရှည် တွဲခြင်း၊ ထပ်တူ ဖွဲ့စည်းပုံ (parallelism) သုံးခြင်း၊ အာရုံငါးပါး ဖော်ပြချက် ထည့်ခြင်းက စတိုင် ထင်ရှားစေသည်။",
        ],
      },
    ],
    examples: [
      { en: "The rain did not stop. It drummed on the roof, on the window, on the empty street.", mm: "မိုးက မရပ်ခဲ့ပါ။ အမိုးပေါ်၊ ပြတင်းပေါက်ပေါ်၊ လွတ်နေသည့် လမ်းပေါ် ဒရမ်တီးသလို ရွာချခဲ့သည်။", note: "parallelism + rhythm။" },
      { en: "She left. No goodbye, no note, no explanation.", mm: "သူမ ထွက်သွားခဲ့သည်။ နှုတ်ဆက်ခြင်း မရှိ၊ စာ မရှိ၊ ရှင်းလင်းချက် မရှိ။", note: "fragmented syntax။" },
      { en: "The style is spare: short clauses, few adjectives, and a repeated image of water.", mm: "စတိုင်က ရိုးရှင်းသည် — ဝါကျတို၊ နာမဝိသေသန နည်း၊ ရေပုံရိပ် ထပ်ခါ ပါဝင်သည်။" },
    ],
    mistakes: [
      { wrong: "အတုယူရာတွင် စာသား အတိအကျ ကူးချခြင်း", right: "ဖွဲ့စည်းပုံကို အတုယူပါ", why: "ခိုးယူမှု ဖြစ်သည်။" },
      { wrong: "စတိုင် ခွဲခြမ်းစိတ်ဖြာရာတွင် ကိုးကား မပါခြင်း", right: "စာသားမှ စကားစု ကိုးကားပါ", why: "အထောက်အထား လိုသည်။" },
    ],
    guided: [
      { type: "mcq", prompt: "Word choice is called ___.", promptMm: "ရွေးပါ။", options: ["syntax", "diction", "motif", "rhythm"], answer: 1, explanation: "diction။", topic: "literary style" },
      { type: "mcq", prompt: "A repeated image is a ___.", promptMm: "ရွေးပါ။", options: ["motif", "syntax", "diction", "clause"], answer: 0, explanation: "motif။", topic: "literary style" },
      { type: "fill", prompt: "The ___ is deliberately fragmented: short clauses everywhere.", promptMm: "ဖြည့်ပါ။", answers: ["syntax"], explanation: "syntax။", topic: "literary style" },
      { type: "correct", prompt: "Correct: The style are spare and precise.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["The style is spare and precise."], explanation: "style → is။", topic: "literary style" },
    ],
    independent: [
      { type: "mcq", prompt: "Which analyses style best?", promptMm: "ရွေးပါ။", options: ["The story is good.", "Short clauses create urgency, as in 'She left. No goodbye.'", "The writer is famous.", "It has three pages."], answer: 1, explanation: "ကိုးကား + အကျိုးသက်ရောက်မှု။", topic: "literary style" },
      { type: "fill", prompt: "The ___ of water returns in every chapter. (သင်္ကေတ)", promptMm: "ဖြည့်ပါ။", answers: ["motif"], explanation: "motif။", topic: "literary style" },
      { type: "mcq", prompt: "Imitation in style writing means ___.", promptMm: "ရွေးပါ။", options: ["copying sentences", "borrowing structure and rhythm", "using synonyms only", "translating"], answer: 1, explanation: "ဖွဲ့စည်းပုံ အတုယူခြင်း။", topic: "literary style" },
      { type: "translate", prompt: "Translate: ဒီစတိုင်မှာ ဝါကျတိုတွေ သုံးထားတယ်။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["This style uses short sentences.", "The style relies on short sentences."], explanation: "uses/relies on။", topic: "literary style" },
    ],
    review: [
      { q: "စတိုင် လက္ခဏာ ၅ ခု ဘာလဲ။", a: "diction, syntax, rhythm, imagery, motif။" },
      { q: "အတုယူ ရေးခြင်း ဆိုတာ ဘာလဲ။", a: "ဖွဲ့စည်းပုံ နှင့် စည်းချက်ကို အတုယူပြီး ကိုယ်ပိုင် စကားဖြင့် ရေးခြင်း။" },
    ],
    summary: ["စတိုင်ကို လက္ခဏာ ၅ ခုဖြင့် ခွဲခြမ်းသည်။", "ကိုးကား မပါလျှင် ခွဲခြမ်းစိတ်ဖြာမှု အားနည်းသည်။", "အတုယူခြင်းသည် ကူးချခြင်း မဟုတ်ပါ။"],
    mastery: ["စာသား ၁ ခု၏ စတိုင်ကို ကိုးကားဖြင့် ရှင်းပြနိုင်သည်။", "စတိုင် ၂ မျိုးဖြင့် စာတို ရေးနိုင်သည်။"],
    topics: ["reading", "literary style", "C2"],
  },
];

export const moduleHLessonsPart5: Lesson[] = buildLessons(seeds);
