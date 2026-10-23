import type { Lesson } from "@/lib/types";
import { buildLessons, type LessonSeed } from "./builder.ts";

const seeds: LessonSeed[] = [
  {
    id: "g9-informal-email",
    moduleId: "G",
    title: "Writing: Informal Emails and Messages",
    titleMm: "ရေးသားမှု — ရင်းနှီးသော အီးမေးလ် နှင့် မက်ဆေ့ချ်",
    level: "B1",
    minutes: 22,
    summaryLine: "သူငယ်ချင်း/မိသားစုထံ ရင်းနှီးသော အီးမေးလ် ရေးပုံ — လေသံ၊ ဖွဲ့စည်းပုံ နှင့် စကားစုများ။",
    objectives: ["informal လေသံ သုံးနိုင်မည်။", "အီးမေးလ် အပိုင်း ၄ ခု ရေးနိုင်မည်။", "ဖိတ်ကြားချက်/တောင်းပန်ချက် ရေးနိုင်မည်။"],
    vocab: [
      { en: "catch up", mm: "အခြေအနေ ပြောဆိုတွေ့ဆုံသည်", pos: "phrasal verb", example: "Let's catch up soon.", exampleMm: "မကြာမီ တွေ့ပြီး စကားပြောကြရအောင်။", topic: "informal email", level: "B1" },
      { en: "just a quick note", mm: "အမြန် စာတိုလေး", pos: "phrase", example: "Just a quick note to say thanks.", exampleMm: "ကျေးဇူးတင်ကြောင်း ပြောရန် စာတိုလေး။", topic: "informal email", level: "B1" },
      { en: "no worries", mm: "ပြဿနာ မရှိပါ", pos: "phrase", example: "No worries about the delay.", exampleMm: "နောက်ကျမှုအတွက် ပြဿနာ မရှိပါ။", topic: "informal email", level: "B1" },
    ],
    sections: [
      {
        heading: "ဖွဲ့စည်းပုံ",
        body: [
          "Greeting — Hi Ko Aung, / Hello Su, (Dear ကို ရင်းနှီးသူများအတွက် မသုံးလျှင် ရသည်)။ ဖွင့်ဝါကျ — How are you? / Just a quick note to…။",
          "ကိုယ်ထည် — အကြောင်းအရာ ၁–၂ ပိုဒ်၊ ရှင်းရှင်းလင်းလင်း။ ပိတ်ခြင်း — Let me know what you think. / Hope to see you soon။",
          "နိဂုံး — Best wishes, / Take care, / Cheers, ပြီးနောက် အမည်။ Contraction (I'm, don't, it's) ကို ရင်းနှီးစာတွင် သုံးနိုင်သည်။",
        ],
        table: { headers: ["အပိုင်း", "informal", "formal (နှိုင်းယှဉ်)"], rows: [["စ", "Hi Su,", "Dear Ms. Su,"], ["ဖွင့်", "Just a quick note to…", "I am writing to…"], ["တောင်းဆို", "Could you…?", "I would be grateful if…"], ["ပိတ်", "Take care,", "Yours sincerely,"]] },
      },
      {
        heading: "စကားစု အသုံးဝင်များ",
        body: [
          "ဖိတ်ကြားခြင်း — 'Do you fancy coming to…?', 'We're meeting at 6 — join us if you can.' တောင်းပန်ခြင်း — 'Sorry for the late reply.', 'My bad — I forgot.'",
          "ကျေးဇူးတင်ခြင်း — 'Thanks a lot for…', 'That was really helpful.' အကြံပြုခြင်း — 'How about meeting on Friday?'",
          "ရင်းနှီးစာတွင်ပင် ရှင်းလင်းမှု လိုသည် — ဘာအကြောင်း၊ ဘယ်အချိန်၊ ဘာလုပ်ရမည် ကို တိတိကျကျ ရေးသည်။",
        ],
      },
    ],
    examples: [
      { en: "Just a quick note to say thanks for your help yesterday.", mm: "မနေ့က ကူညီမှုအတွက် ကျေးဇူးတင်ကြောင်း ပြောရန် စာတိုလေး။" },
      { en: "Sorry for the late reply — things have been busy at work.", mm: "ပြန်ကြားရာ နောက်ကျမှုအတွက် တောင်းပန်ပါတယ် — အလုပ်တွေ မအားလပ်ခဲ့ပါ။" },
      { en: "How about meeting at the tea shop around six?", mm: "ခြောက်နာရီခန့် လက်ဖက်ရည်ဆိုင်မှာ တွေ့ကြရင် ဘယ်လိုလဲ။" },
    ],
    mistakes: [
      { wrong: "ရင်းနှီးစာတွင် Yours faithfully သုံးခြင်း", right: "Best wishes / Take care သုံးပါ", why: "လေသံ မကိုက်ပါ။" },
      { wrong: "အကြောင်းအရာ မရှင်းဘဲ 'Let's talk' သာ ရေးခြင်း", right: "ဘာအကြောင်း၊ ဘယ်အချိန် ဖော်ပြပါ", why: "လက်ခံသူ နားလည်ရန်။" },
    ],
    guided: [
      { type: "mcq", prompt: "Which greeting is informal?", promptMm: "ရွေးပါ။", options: ["Dear Sir or Madam,", "Hi Su,", "To whom it may concern,", "Dear Ms. Su,"], answer: 1, explanation: "Hi + အမည် = informal။", topic: "informal email" },
      { type: "mcq", prompt: "Which closing fits an informal email?", promptMm: "ရွေးပါ။", options: ["Yours faithfully", "Yours sincerely", "Take care", "Respectfully"], answer: 2, explanation: "Take care = informal။", topic: "informal email" },
      { type: "fill", prompt: "Just a quick ___ to say thanks.", promptMm: "ဖြည့်ပါ။", answers: ["note"], explanation: "quick note။", topic: "informal email" },
      { type: "correct", prompt: "Correct: Sorry for the late reply, I am very busy these days.", promptMm: "ရင်းနှီးလေသံ ပြင်ပါ။", answers: ["Sorry for the late reply — I've been really busy.", "Sorry for the late reply; I'm very busy these days."], explanation: "contraction + သင့်တော်သည့် ဆက်စပ်မှု။", topic: "informal email" },
    ],
    independent: [
      { type: "mcq", prompt: "Best opening for a friendly invitation?", promptMm: "ရွေးပါ။", options: ["I am writing to invite you.", "Do you fancy coming on Saturday?", "You are hereby invited.", "Attendance is required."], answer: 1, explanation: "Do you fancy…? = informal။", topic: "informal email" },
      { type: "fill", prompt: "___ a quick note to say hello.", promptMm: "ဖြည့်ပါ။", answers: ["Just"], explanation: "Just a quick note။", topic: "informal email" },
      { type: "order", prompt: "Arrange the closing.", promptMm: "စီပါ။", tokens: ["Take", "care", "and", "see", "you", "soon"], answer: "Take care and see you soon", explanation: "informal closing။", topic: "informal email" },
      { type: "translate", prompt: "Translate: မနက်ဖြန် ကော်ဖီသောက်ဖို့ ဘယ်လိုလဲ။", promptMm: "ရင်းနှီးလေသံဖြင့် အင်္ဂလိပ်လို ရေးပါ။", answers: ["How about coffee tomorrow?", "Do you fancy a coffee tomorrow?"], explanation: "How about + noun။", topic: "informal email" },
    ],
    review: [
      { q: "informal အီးမေးလ် အပိုင်း ၄ ခု ဘာလဲ။", a: "greeting, opening, body, closing + name။" },
      { q: "informal စာတွင် contraction သုံးနိုင်သလား။", a: "သုံးနိုင်သည်။" },
    ],
    summary: ["informal စာတွင် လေသံ ရင်းနှီးသည်။", "အကြောင်းအရာ ရှင်းလင်းရမည်။", "closing ကို လေသံနှင့် ကိုက်ညီအောင် ရွေးသည်။"],
    mastery: ["ရင်းနှီးအီးမေးလ် ၁ စောင် (စကားလုံး ၈၀+) ရေးနိုင်သည်။", "formal/informal စကားစု ၁၀ ခု ခွဲခြားနိုင်သည်။"],
    topics: ["writing", "email", "informal"],
  },
  {
    id: "g10-complaint-letter",
    moduleId: "G",
    title: "Writing: Complaint Letters and Emails",
    titleMm: "ရေးသားမှု — တိုင်ကြားစာ နှင့် အီးမေးလ်",
    level: "B2",
    minutes: 24,
    summaryLine: "တရားဝင် တိုင်ကြားစာ ရေးပုံ — ဖြစ်ရပ် ဖော်ပြချက်၊ တောင်းဆိုချက် နှင့် ယဉ်ကျေးသော လေသံ။",
    objectives: ["တိုင်ကြားစာ ဖွဲ့စည်းပုံ ၄ ပိုင်း ရေးနိုင်မည်။", "ယဉ်ကျေးသော လေသံ ထိန်းနိုင်မည်။", "တိကျသည့် တောင်းဆိုချက် ရေးနိုင်မည်။"],
    vocab: [
      { en: "I am writing to complain about", mm: "…အကြောင်း တိုင်ကြားရန် ရေးသားအပ်ပါသည်", pos: "phrase", example: "I am writing to complain about the delay.", exampleMm: "နောက်ကျမှုအကြောင်း တိုင်ကြားရန် ရေးသားအပ်ပါသည်။", topic: "complaint", level: "B2" },
      { en: "inconvenience", mm: "အခက်အခဲ", pos: "noun", example: "We apologise for the inconvenience.", exampleMm: "အခက်အခဲအတွက် တောင်းပန်ပါသည်။", topic: "complaint", level: "B2" },
      { en: "refund", mm: "ငွေပြန်အမ်းခြင်း", pos: "noun/verb", example: "I would like a full refund.", exampleMm: "အပြည့် ငွေပြန်အမ်းမှုကို အလိုရှိပါသည်။", topic: "complaint", level: "B1" },
    ],
    sections: [
      {
        heading: "ဖွဲ့စည်းပုံ ၄ ပိုင်း",
        body: [
          "၁) ရည်ရွယ်ချက် — 'I am writing to complain about an order (ref: 4521).' ၂) ဖြစ်ရပ် အချက်အလက် — ဘယ်အချိန်၊ ဘာဖြစ်ခဲ့၊ ဘယ်လို ထိခိုက်ခဲ့။",
          "၃) တောင်းဆိုချက် — 'I would like a replacement / a full refund.' ၄) နိဂုံး — 'I look forward to your reply within 14 days.'",
          "လေသံ — ဒေါသထွက်သည့် စကားလုံး (terrible, useless) ကို ရှောင်ပြီး အချက်အလက်ဖြင့် ပြောသည်။ 'I was disappointed' က 'This is a disaster' ထက် ထိရောက်သည်။",
        ],
        table: { headers: ["အပိုင်း", "စကားစု", "ရှောင်ရန်"], rows: [["ရည်ရွယ်ချက်", "I am writing to complain about…", "I want to shout at you"], ["ဖြစ်ရပ်", "On 3 May, I ordered…", "You always mess up"], ["တောင်းဆို", "I would like a refund.", "Give me money now"], ["နိဂုံး", "I look forward to your reply.", "You will hear from my lawyer"]] },
      },
      {
        heading: "ထိရောက်စေသည့် အချက်",
        body: [
          "ရက်စွဲ၊ အော်ဒါနံပါတ်၊ ပမာဏ ကဲ့သို့ အထောက်အထား ထည့်သည်။ မိတ္တူ (receipt, photo) ပူးတွဲနိုင်ကြောင်း ဖော်ပြသည်။",
          "တောင်းဆိုချက်ကို တစ်ခု သို့မဟုတ် နှစ်ခုသာ ထားပြီး ရှင်းရှင်း ရေးသည်။ အချိန်သတ်မှတ်ချက် (within 14 days) ထည့်နိုင်သည်။",
        ],
      },
    ],
    examples: [
      { en: "I am writing to complain about an order I placed on 3 May (ref: 4521).", mm: "မေလ ၃ ရက်က မှာယူခဲ့သည့် အော်ဒါ (4521) အကြောင်း တိုင်ကြားရန် ရေးသားအပ်ပါသည်။" },
      { en: "The item arrived damaged and could not be used.", mm: "ပစ္စည်းက ပျက်စီးလျက် ရောက်လာပြီး အသုံးမပြုနိုင်ခဲ့ပါ။" },
      { en: "I would be grateful if you could arrange a replacement or a full refund.", mm: "အစားထိုးပေးခြင်း သို့မဟုတ် ငွေအပြည့်ပြန်အမ်းခြင်း စီစဉ်ပေးနိုင်လျှင် ကျေးဇူးတင်ပါမည်။" },
    ],
    mistakes: [
      { wrong: "ဒေါသ စကားလုံးဖြင့် ရေးခြင်း", right: "အချက်အလက် နှင့် ခံစားချက်ကို ယဉ်ကျေးစွာ ဖော်ပြပါ", why: "လက်ခံသူ ပူးပေါင်းလိုမှု လျော့သည်။" },
      { wrong: "တောင်းဆိုချက် မပါဘဲ တိုင်ကြားချည်း ရေးခြင်း", right: "ဘာလိုချင်သည်ကို ရှင်းရှင်း ရေးပါ", why: "ဖြေရှင်းရန် လမ်းညွှန်ချက် လိုသည်။" },
    ],
    guided: [
      { type: "mcq", prompt: "Best opening for a complaint?", promptMm: "ရွေးပါ။", options: ["You are terrible!", "I am writing to complain about my order.", "Give me my money.", "Why are you so bad?"], answer: 1, explanation: "ရည်ရွယ်ချက် ရှင်းလင်းစွာ။", topic: "complaint" },
      { type: "mcq", prompt: "Which is polite?", promptMm: "ရွေးပါ။", options: ["Send the refund now.", "I would like a full refund, please.", "Refund or else.", "You owe me."], answer: 1, explanation: "I would like … please။", topic: "complaint" },
      { type: "fill", prompt: "We apologise for the ___ caused. (အခက်အခဲ)", promptMm: "ဖြည့်ပါ။", answers: ["inconvenience"], explanation: "inconvenience။", topic: "complaint" },
      { type: "correct", prompt: "Correct: I am writing for complain about the service.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["I am writing to complain about the service."], explanation: "writing to + verb။", topic: "complaint" },
    ],
    independent: [
      { type: "mcq", prompt: "What makes a complaint effective?", promptMm: "ရွေးပါ။", options: ["Angry adjectives", "Dates, references and a clear request", "Long paragraphs", "Threats"], answer: 1, explanation: "အထောက်အထား + ရှင်းလင်းသည့် တောင်းဆိုချက်။", topic: "complaint" },
      { type: "fill", prompt: "I would like a full ___.", promptMm: "ဖြည့်ပါ။", answers: ["refund"], explanation: "full refund။", topic: "complaint" },
      { type: "order", prompt: "Arrange the sentence.", promptMm: "စီပါ။", tokens: ["I", "look", "forward", "to", "your", "reply"], answer: "I look forward to your reply", explanation: "look forward to + noun။", topic: "complaint" },
      { type: "translate", prompt: "Translate: ပစ္စည်းက ပျက်စီးလျက် ရောက်လာပါတယ်။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["The item arrived damaged.", "The product arrived in damaged condition."], explanation: "arrive + adjective (damaged)။", topic: "complaint" },
    ],
    review: [
      { q: "တိုင်ကြားစာ အပိုင်း ၄ ခု ဘာလဲ။", a: "ရည်ရွယ်ချက်၊ ဖြစ်ရပ်၊ တောင်းဆိုချက်၊ နိဂုံး။" },
      { q: "လေသံ ဘယ်လို ထိန်းသလဲ။", a: "ဒေါသ စကားလုံး မသုံးဘဲ အချက်အလက်ဖြင့် ပြောသည်။" },
    ],
    summary: ["တိုင်ကြားစာတွင် အထောက်အထား လိုသည်။", "တောင်းဆိုချက် ရှင်းလင်းရမည်။", "ယဉ်ကျေးသော လေသံက ပိုထိရောက်သည်။"],
    mastery: ["တိုင်ကြားစာ ၁ စောင် (စကားလုံး ၁၂၀+) ရေးနိုင်သည်။", "ယဉ်ကျေးသော တောင်းဆိုချက် ၅ မျိုး ရေးနိုင်သည်။"],
    topics: ["writing", "complaint", "formal email"],
  },
  {
    id: "g11-cv-writing",
    moduleId: "G",
    title: "Writing: CVs and Profiles",
    titleMm: "ရေးသားမှု — ကိုယ်ရေးအချက်အလက် (CV) နှင့် ပရိုဖိုင်",
    level: "B2",
    minutes: 24,
    summaryLine: "CV တစ်ခု ရေးပုံ — အပိုင်းများ၊ action verb ဖြင့် အတွေ့အကြုံ ဖော်ပြခြင်း နှင့် ရိုးရှင်းမှု။",
    objectives: ["CV အပိုင်း ၅ ခု ဖွဲ့စည်းနိုင်မည်။", "action verb ဖြင့် အတွေ့အကြုံ ရေးနိုင်မည်။", "ကိုယ်ပိုင် CV မူကြမ်း ရေးနိုင်မည်။"],
    vocab: [
      { en: "achievement", mm: "အောင်မြင်မှု", pos: "noun", example: "List your achievements.", exampleMm: "သင့် အောင်မြင်မှုများကို စာရင်းပြုပါ။", topic: "CV", level: "B1" },
      { en: "responsible for", mm: "တာဝန်ရှိသည်", pos: "phrase", example: "Responsible for a team of five.", exampleMm: "အဖွဲ့ ငါးဦးအတွက် တာဝန်ရှိသည်။", topic: "CV", level: "B1" },
      { en: "proficient in", mm: "ကျွမ်းကျင်သည်", pos: "phrase", example: "Proficient in Excel and Canva.", exampleMm: "Excel နှင့် Canva တွင် ကျွမ်းကျင်သည်။", topic: "CV", level: "B2" },
    ],
    sections: [
      {
        heading: "CV အပိုင်းများ",
        body: [
          "Personal details (အမည်၊ ဖုန်း၊ အီးမေးလ်) → Profile (ဝါကျ ၂–၃) → Experience (နောက်ဆုံးမှ စပြီး ပြောင်းပြန် အစီအစဉ်) → Education → Skills/Languages။",
          "Profile ဥပမာ — 'Recent graduate in business with two years of customer-service experience. Strong in communication and data entry.'",
          "ရက်စွဲ၊ ရာထူး၊ ကုမ္ပဏီ ကို ရှင်းရှင်းလင်းလင်း ရေးသည်။ ဓာတ်ပုံ/အသက် ကဲ့သို့ အချက်များသည် နိုင်ငံအလိုက် လိုအပ်ချက် ကွာခြားသည်။",
        ],
        table: { headers: ["အပိုင်း", "ပါဝင်ရန်", "ရှောင်ရန်"], rows: [["Profile", "အတိုချုပ် ၂–၃ ဝါကျ", "ကိုယ်ရေး ဇာတ်လမ်း အရှည်"], ["Experience", "ရာထူး + အောင်မြင်မှု", "တာဝန်စာရင်း ရှည်လျား"], ["Skills", "တိကျသည့် ကျွမ်းကျင်မှု", "hard-working သက်သက်"], ["Education", "ဘွဲ့ + ကျောင်း + ခုနှစ်", "မပြီးသေးသည့် အချက် ဝှက်ခြင်း"]] },
      },
      {
        heading: "Action verb ဖြင့် ရေးခြင်း",
        body: [
          "'I was responsible for the social media account' ထက် 'Managed a social media account and increased followers by 40 percent' က ပိုအားကောင်းသည်။",
          "Action verb များ — managed, organised, improved, reduced, designed, trained, coordinated, launched။ ကိန်းဂဏန်း ထည့်နိုင်လျှင် ထည့်သည်။",
          "တိုတောင်းပြီး ပြတ်သားသည့် စကားစုဖြင့် ရေးသည် (full sentence မလိုပါ)။ အမှား မပါအောင် အကြိမ်ကြိမ် ဖတ်သည်။",
        ],
      },
    ],
    examples: [
      { en: "Managed a team of five and reduced delivery time by 20 percent.", mm: "အဖွဲ့ ငါးဦးကို စီမံပြီး ပို့ဆောင်ချိန်ကို ၂၀ ရာခိုင်နှုန်း လျှော့ချခဲ့သည်။" },
      { en: "Designed and ran weekly English workshops for new staff.", mm: "ဝန်ထမ်းအသစ်များအတွက် အပတ်စဉ် အင်္ဂလိပ် အလုပ်ရုံများကို ဒီဇိုင်းဆွဲ ကျင်းပခဲ့သည်။" },
      { en: "Proficient in Microsoft Excel, Canva and basic Python.", mm: "Microsoft Excel၊ Canva နှင့် အခြေခံ Python တွင် ကျွမ်းကျင်သည်။" },
    ],
    mistakes: [
      { wrong: "hard-working, friendly ကဲ့သို့ ယေဘုယျ စကားလုံးသာ ရေးခြင်း", right: "ကျွမ်းကျင်မှုနှင့် အောင်မြင်မှုကို အထောက်အထားဖြင့် ရေးပါ", why: "ခွဲခြားမှု မရှိလျှင် အားနည်းသည်။" },
      { wrong: "အလုပ်တာဝန်အားလုံးကို စာရင်း ရှည်ရှည် ရေးခြင်း", right: "အကျိုးသက်ရောက်မှုရှိသည့် ၃–၅ ချက် ရွေးပါ", why: "စာဖတ်သူ အာရုံ မထိန်းနိုင်။" },
    ],
    guided: [
      { type: "mcq", prompt: "Which is the strongest CV line?", promptMm: "ရွေးပါ။", options: ["I am hard-working.", "Managed a team of five.", "I like teamwork.", "I did some work."], answer: 1, explanation: "တိကျပြီး action verb ပါသည်။", topic: "CV" },
      { type: "mcq", prompt: "Experience is usually listed ___.", promptMm: "ရွေးပါ။", options: ["oldest first", "newest first", "alphabetically", "randomly"], answer: 1, explanation: "နောက်ဆုံးမှ ပြောင်းပြန်။", topic: "CV" },
      { type: "fill", prompt: "___ in Excel and Word.", promptMm: "ဖြည့်ပါ။", answers: ["Proficient"], explanation: "Proficient in။", topic: "CV" },
      { type: "correct", prompt: "Correct: I am responsible for manage the budget.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["I am responsible for managing the budget.", "I managed the budget."], explanation: "responsible for + -ing။", topic: "CV" },
    ],
    independent: [
      { type: "mcq", prompt: "Which verb is best for a CV?", promptMm: "ရွေးပါ။", options: ["coordinated", "was there", "helped a bit", "did stuff"], answer: 0, explanation: "coordinated = တိကျသည့် action verb။", topic: "CV" },
      { type: "fill", prompt: "List your ___ with numbers where possible. (အောင်မြင်မှု)", promptMm: "ဖြည့်ပါ။", answers: ["achievements"], explanation: "achievements။", topic: "CV" },
      { type: "mcq", prompt: "A CV should be ___.", promptMm: "ရွေးပါ။", options: ["1–2 pages, clear and error-free", "as long as possible", "written in full sentences", "decorated with photos"], answer: 0, explanation: "တိုတောင်းရှင်းလင်းရမည်။", topic: "CV" },
      { type: "translate", prompt: "Translate: ကျွန်တော် အဖွဲ့တစ်ခုကို စီမံခဲ့ပါတယ်။", promptMm: "CV လေသံဖြင့် အင်္ဂလိပ်လို ရေးပါ။", answers: ["Managed a team.", "I managed a team."], explanation: "action verb ဖြင့်။", topic: "CV" },
    ],
    review: [
      { q: "CV အပိုင်း ၅ ခု ဘာလဲ။", a: "personal details, profile, experience, education, skills။" },
      { q: "အတွေ့အကြုံ ရေးရာတွင် action verb ဘာကြောင့် လိုသလဲ။", a: "တာဝန် မဟုတ်ဘဲ အောင်မြင်မှုကို ပြသည်။" },
    ],
    summary: ["CV သည် တိုတောင်း၊ တိကျ၊ အမှားကင်းရမည်။", "action verb + ကိန်းဂဏန်း က အားကောင်းစေသည်။", "အတွေ့အကြုံကို နောက်ဆုံးမှ စ၍ စီသည်။"],
    mastery: ["ကိုယ်ပိုင် CV မူကြမ်း (အပိုင်း ၅ ခု) ရေးနိုင်သည်။", "action verb ၁၀ ခု အသုံးချနိုင်သည်။"],
    topics: ["writing", "CV", "job application"],
  },
  {
    id: "g12-blog-post",
    moduleId: "G",
    title: "Writing: Blog Posts",
    titleMm: "ရေးသားမှု — ဘလော့ဂ် ပို့စ်",
    level: "B2",
    minutes: 22,
    summaryLine: "ဘလော့ဂ် ပို့စ် ရေးပုံ — ဆွဲဆောင်သည့် ခေါင်းစဉ်၊ ကိုယ်ပိုင် အတွေ့အကြုံ နှင့် ဖတ်ရှုသူ အတွက် အကျိုးရှိမှု။",
    objectives: ["ခေါင်းစဉ် ၃ မျိုး ရေးနိုင်မည်။", "ဘလော့ဂ် ဖွဲ့စည်းပုံ ရေးနိုင်မည်။", "ကိုယ်ပိုင် လေသံ သုံးနိုင်မည်။"],
    vocab: [
      { en: "headline", mm: "ခေါင်းစဉ်", pos: "noun", example: "A good headline makes people click.", exampleMm: "ကောင်းသည့် ခေါင်းစဉ်က လူများကို နှိပ်စေသည်။", topic: "blog", level: "B1" },
      { en: "takeaway", mm: "အဓိက ရယူသင့်သည့် အချက်", pos: "noun", example: "The main takeaway is to practise daily.", exampleMm: "အဓိက ရယူသင့်သည့် အချက်က နေ့စဉ် လေ့ကျင့်ရန် ဖြစ်သည်။", topic: "blog", level: "B2" },
      { en: "engaging", mm: "စိတ်ဝင်စားဖွယ်", pos: "adjective", example: "Keep the style engaging.", exampleMm: "စတိုင်ကို စိတ်ဝင်စားဖွယ် ထားပါ။", topic: "blog", level: "B2" },
    ],
    sections: [
      {
        heading: "ဘလော့ဂ် ဖွဲ့စည်းပုံ",
        body: [
          "ခေါင်းစဉ် → ဖွင့်ဝါကျ (hook — မေးခွန်း/အံ့အားသင့်စရာ အချက်) → ကိုယ်ပိုင် အတွေ့အကြုံ/ဥပမာ → အကြံပြုချက် ၃–၅ ချက် → နိဂုံး (takeaway + မေးခွန်း)။",
          "ခေါင်းစဉ် ပုံစံ — ဂဏန်း ('5 ways to…'), မေးခွန်း ('Is grammar really necessary?'), အကျိုးအမြတ် ('How I improved my listening in 30 days')။",
          "ခေါင်းစဉ်ငယ် (subheading) များဖြင့် ခွဲခြားခြင်းက ဖတ်ရ လွယ်စေသည်။ ဝါကျ တိုတို နှင့် တက်ကြွသည့် ကြိယာ သုံးသည်။",
        ],
        table: { headers: ["အပိုင်း", "ရည်ရွယ်ချက်", "ဥပမာ"], rows: [["Hook", "ဆွဲဆောင်", "Ever felt stuck when you speak?"], ["Story", "ယုံကြည်မှု တည်ဆောက်", "Last year I could not…"], ["Tips", "တန်ဖိုး ပေး", "1. Record yourself."], ["Takeaway", "အနှစ်ချုပ်", "Start with five minutes a day."]] },
      },
      {
        heading: "ကိုယ်ပိုင် လေသံ",
        body: [
          "ဘလော့ဂ်တွင် 'I' နှင့် 'you' ကို သုံးနိုင်သည်။ စကားပြောဆန်သည့် လေသံ (contraction, မေးခွန်း) က ဖတ်ရှုသူနှင့် နီးစပ်စေသည်။",
          "သို့သော် ရှင်းလင်းမှု မလျော့စေရ — တစ်ပိုဒ်လျှင် အဓိကအချက် တစ်ခု၊ ဝါကျ နှစ်ကြောင်းမှ ငါးကြောင်း။",
        ],
      },
    ],
    examples: [
      { en: "Ever felt stuck in the middle of a sentence?", mm: "ဝါကျ တစ်ကြောင်း အလယ်မှာ ရပ်တန့်သွားသလို ခံစားဖူးလား။", note: "hook — မေးခွန်း။" },
      { en: "Last year I could not speak for more than ten seconds without stopping.", mm: "မနှစ်က ကျွန်တော် ဆယ်စက္ကန့်ထက် မပိုဘဲ မရပ်ဘဲ ပြောနိုင်ခဲ့ပါဘူး။", note: "ကိုယ်ပိုင် အတွေ့အကြုံ။" },
      { en: "The biggest takeaway? Small daily practice beats one long session.", mm: "အဓိက ရယူသင့်သည့် အချက် — နေ့စဉ် အနည်းငယ် လေ့ကျင့်ခြင်းက တစ်ခါတည်း အချိန်အကြာကြီး လုပ်ခြင်းထက် ပိုကောင်းသည်။" },
    ],
    mistakes: [
      { wrong: "ခေါင်းစဉ် ယေဘုယျ ('My English Story')", right: "တိကျ/ဆွဲဆောင်သည့် ခေါင်းစဉ် ('How I Fixed My Speaking Anxiety in 4 Weeks')", why: "ဖတ်ရှုသူ ဆွဲဆောင်ရန်။" },
      { wrong: "ပိုဒ်ရှည်ကြီး တစ်ပိုဒ်တည်း ရေးခြင်း", right: "ခေါင်းစဉ်ငယ်ဖြင့် ခွဲပါ", why: "မိုဘိုင်းတွင် ဖတ်ရ ခက်သည်။" },
    ],
    guided: [
      { type: "mcq", prompt: "Which is the strongest hook?", promptMm: "ရွေးပါ။", options: ["This post is about English.", "Ever felt stuck when you speak?", "English is important.", "I will write about my life."], answer: 1, explanation: "မေးခွန်း hook။", topic: "blog" },
      { type: "mcq", prompt: "A 'takeaway' is ___.", promptMm: "ရွေးပါ။", options: ["a subtitle", "the main point to remember", "a photo", "a hyperlink"], answer: 1, explanation: "အဓိက မှတ်သားရမည့် အချက်။", topic: "blog" },
      { type: "fill", prompt: "Keep the style ___ so people read to the end. (စိတ်ဝင်စားဖွယ်)", promptMm: "ဖြည့်ပါ။", answers: ["engaging"], explanation: "engaging။", topic: "blog" },
      { type: "correct", prompt: "Correct: I will share you three tips.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["I will share three tips with you."], explanation: "share something with someone။", topic: "blog" },
    ],
    independent: [
      { type: "mcq", prompt: "Which headline uses a number?", promptMm: "ရွေးပါ။", options: ["My thoughts on English", "5 habits that improved my speaking", "English is fun", "A short post"], answer: 1, explanation: "ဂဏန်း ခေါင်းစဉ်။", topic: "blog" },
      { type: "fill", prompt: "The main ___ is to start small.", promptMm: "ဖြည့်ပါ။", answers: ["takeaway"], explanation: "main takeaway။", topic: "blog" },
      { type: "order", prompt: "Arrange the opening.", promptMm: "စီပါ။", tokens: ["Ever", "wondered", "why", "listening", "feels", "hard"], answer: "Ever wondered why listening feels hard", explanation: "hook မေးခွန်း။", topic: "blog" },
      { type: "translate", prompt: "Translate: ဒီပို့စ်မှာ ကျွန်တော် အကြံပြုချက် သုံးခု မျှဝေပါမယ်။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["In this post, I will share three tips.", "In this post I will share three tips with you."], explanation: "share + noun။", topic: "blog" },
    ],
    review: [
      { q: "ဘလော့ဂ် ဖွဲ့စည်းပုံ ဘာလဲ။", a: "hook → story → tips → takeaway။" },
      { q: "မိုဘိုင်းအတွက် ဘာလုပ်သင့်သလဲ။", a: "ခေါင်းစဉ်ငယ်ဖြင့် ခွဲပြီး ပိုဒ်တို ရေးသည်။" },
    ],
    summary: ["ခေါင်းစဉ်နှင့် hook က ဖတ်ရှုသူကို ဆွဲဆောင်သည်။", "ကိုယ်ပိုင် အတွေ့အကြုံက ယုံကြည်မှု တည်ဆောက်သည်။", "အဆုံးတွင် takeaway ပေးသည်။"],
    mastery: ["ဘလော့ဂ် ပို့စ် (စကားလုံး ၁၅၀+) ရေးနိုင်သည်။", "ခေါင်းစဉ် ၅ မျိုး ရေးနိုင်သည်။"],
    topics: ["writing", "blog", "style"],
  },
  {
    id: "g13-review-writing",
    moduleId: "G",
    title: "Writing: Reviews",
    titleMm: "ရေးသားမှု — သုံးသပ်ချက် ရေးခြင်း",
    level: "B2",
    minutes: 22,
    summaryLine: "စာအုပ်/ရုပ်ရှင်/နေရာ/ထုတ်ကုန် သုံးသပ်ချက် ရေးပုံ — အကဲဖြတ်ချက်၊ အထောက်အထား နှင့် အကြံပြုချက်။",
    objectives: ["သုံးသပ်ချက် ဖွဲ့စည်းပုံ ရေးနိုင်မည်။", "အကဲဖြတ် နာမဝိသေသန သုံးနိုင်မည်။", "အကြံပြုချက် ပေးနိုင်မည်။"],
    vocab: [
      { en: "highly recommend", mm: "အထူး အကြံပြုသည်", pos: "phrase", example: "I highly recommend this book.", exampleMm: "ဤစာအုပ်ကို အထူး အကြံပြုပါသည်။", topic: "review", level: "B1" },
      { en: "overrated", mm: "အလွန်အမင်း ချီးမွမ်းခံရသည်", pos: "adjective", example: "The film is overrated.", exampleMm: "ရုပ်ရှင်က အလွန်အမင်း ချီးမွမ်းခံရသည်။", topic: "review", level: "C1" },
      { en: "worth it", mm: "တန်သည်", pos: "phrase", example: "The course is worth it.", exampleMm: "သင်တန်းက တန်ပါသည်။", topic: "review", level: "B1" },
    ],
    sections: [
      {
        heading: "ဖွဲ့စည်းပုံ",
        body: [
          "နိဒါန်း — ဘာကို သုံးသပ်သလဲ၊ မည်သူ့အတွက်။ အနှစ်ချုပ် — အလုံးစုံ အကဲဖြတ်ချက် (အားသာချက် ၁–၂၊ အားနည်းချက် ၁)။",
          "အသေးစိတ် — အထောက်အထား (ဇာတ်ကွက်၊ ဓာတ်ပုံ၊ ဝန်ဆောင်မှု၊ စျေးနှုန်း)။ အကြံပြုချက် — ဘယ်သူ သုံးသင့်/မသင့် နှင့် အဆင့် (၅/၅)။",
          "အကဲဖြတ် နာမဝိသေသန — gripping, moving, disappointing, well-organised, good value, overpriced။ အထောက်အထား မပါဘဲ ချီးမွမ်း/ရှုံ့ချခြင်း မလုပ်ပါ။",
        ],
        table: { headers: ["အပိုင်း", "မေးခွန်း", "ဥပမာ"], rows: [["နိဒါန်း", "ဘာလဲ", "This novel follows…"], ["အားသာချက်", "ဘာကောင်းလဲ", "The characters feel real."], ["အားနည်းချက်", "ဘာချို့ယွင်းလဲ", "The ending is rushed."], ["အကြံပြုချက်", "ဘယ်သူ ဖတ်သင့်", "Ideal for fans of…"]] },
      },
      {
        heading: "ဘက်မလိုက်မှု",
        body: [
          "အားသာချက် နှင့် အားနည်းချက် နှစ်မျိုးလုံး ဖော်ပြခြင်းက သုံးသပ်ချက်ကို ယုံကြည်ရစေသည်။",
          "ကိုယ်ပိုင် ခံစားချက်ကို 'I found…' ဖြင့် ဖော်ပြပြီး တစ်ကမ္ဘာလုံး အမှန်တရားအဖြစ် မရေးပါ ('It is boring' → 'I found it slow in the middle').",
        ],
      },
    ],
    examples: [
      { en: "The novel is gripping, although the middle section feels slow.", mm: "ဝတ္ထုက ဆွဲဆောင်မှုရှိသည်၊ သို့သော် အလယ်ပိုင်းက နှေးသလို ခံစားရသည်။" },
      { en: "At 25,000 kyats, the course is good value for money.", mm: "ကျပ် ၂၅,၀၀၀ ဖြင့် သင်တန်းက ဈေးနှုန်း တန်ပါသည်။" },
      { en: "I would recommend it to anyone preparing for IELTS, but not to complete beginners.", mm: "IELTS ပြင်ဆင်သူများအတွက် အကြံပြုပါသည်၊ လုံးဝ အစပြုသူများအတွက် မဟုတ်ပါ။" },
    ],
    mistakes: [
      { wrong: "ဇာတ်လမ်း အဆုံးသတ်ကို ဖော်ထုတ်ခြင်း (spoiler)", right: "အလှည့်အပြောင်း မဖော်ဘဲ သတိပေးပါ", why: "ဖတ်ရှုသူ အတွေ့အကြုံ ပျက်စေသည်။" },
      { wrong: "အထောက်အထား မပါဘဲ 'Terrible' ဟု သာ ရေးခြင်း", right: "ဘာကြောင့် ဆိုးသည်ကို ဥပမာဖြင့် ရေးပါ", why: "သုံးသပ်ချက် အားနည်းသည်။" },
    ],
    guided: [
      { type: "mcq", prompt: "A balanced review includes ___.", promptMm: "ရွေးပါ။", options: ["only praise", "only criticism", "strengths and weaknesses", "the ending"], answer: 2, explanation: "အားသာချက် + အားနည်းချက်။", topic: "review" },
      { type: "mcq", prompt: "'Overrated' means ___.", promptMm: "ရွေးပါ။", options: ["better than expected", "praised more than it deserves", "very cheap", "too long"], answer: 1, explanation: "အလွန်အမင်း ချီးမွမ်းခံရသည်။", topic: "review" },
      { type: "fill", prompt: "I ___ recommend this course.", promptMm: "ဖြည့်ပါ။", answers: ["highly"], explanation: "highly recommend။", topic: "review" },
      { type: "correct", prompt: "Correct: The film is very worth to watch.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["The film is well worth watching.", "The film is worth watching."], explanation: "worth + -ing။", topic: "review" },
    ],
    independent: [
      { type: "mcq", prompt: "Which phrase states a personal view?", promptMm: "ရွေးပါ။", options: ["I found it slow.", "It is slow for everyone.", "Nobody likes it.", "It is always slow."], answer: 0, explanation: "I found… = ကိုယ်ပိုင် အမြင်။", topic: "review" },
      { type: "fill", prompt: "The tickets were expensive, but the show was ___ it.", promptMm: "ဖြည့်ပါ။", answers: ["worth"], explanation: "worth it။", topic: "review" },
      { type: "mcq", prompt: "Best ending for a review?", promptMm: "ရွေးပါ။", options: ["That's all.", "I would recommend it to anyone who enjoys history.", "The end.", "Buy it or not."], answer: 1, explanation: "အကြံပြုချက် ပါသည်။", topic: "review" },
      { type: "translate", prompt: "Translate: ဒီစာအုပ်ကို အထူး အကြံပြုပါတယ်။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["I highly recommend this book.", "I would highly recommend this book."], explanation: "highly recommend။", topic: "review" },
    ],
    review: [
      { q: "သုံးသပ်ချက် အပိုင်း ၄ ခု ဘာလဲ။", a: "နိဒါန်း၊ အနှစ်ချုပ်/အကဲဖြတ်ချက်၊ အသေးစိတ် အထောက်အထား၊ အကြံပြုချက်။" },
      { q: "spoiler ကို ဘယ်လို ရှောင်သလဲ။", a: "အဆုံးသတ် မဖော်ဘဲ ယေဘုယျ အကဲဖြတ်ချက်ဖြင့် ရေးသည်။" },
    ],
    summary: ["ဘက်မလိုက်သည့် အကဲဖြတ်ချက် ရေးသည်။", "အထောက်အထား မပါဘဲ ချီးမွမ်း/ရှုံ့ချ မလုပ်ပါ။", "အဆုံးတွင် ဘယ်သူ့အတွက် သင့်တော်သည်ကို ဖော်ပြသည်။"],
    mastery: ["သုံးသပ်ချက် ၁ ခု (စကားလုံး ၁၂၀+) ရေးနိုင်သည်။", "အကဲဖြတ် နာမဝိသေသန ၁၀ ခု သုံးနိုင်သည်။"],
    topics: ["writing", "review", "opinion"],
  },
];

export const moduleGLessonsPart2: Lesson[] = buildLessons(seeds);
