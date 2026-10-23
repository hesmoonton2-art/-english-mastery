import type { Lesson } from "@/lib/types";
import { buildLessons, type LessonSeed } from "./builder.ts";

const note = "ဤသင်ခန်းစာတွင် အသံဖိုင် မပါပါ။ မူရင်း script ကို စာသားအဖြစ် ပေးထားပြီး အသံထွက်ဖတ်ခြင်းဖြင့် လေ့ကျင့်ပါ။";

const seeds: LessonSeed[] = [
  {
    id: "e8-radio-news",
    moduleId: "E",
    title: "Listening: Radio News Bulletins",
    titleMm: "နားထောင်မှု — ရေဒီယို သတင်းထုတ်လွှင့်ချက်",
    level: "B2",
    minutes: 22,
    summaryLine: "သတင်းထုတ်လွှင့်ချက်၏ ဖွဲ့စည်းပုံ၊ အဓိက အချက် 5W1H နှင့် သတင်း ဘာသာစကား ကို နားထောင်ရာတွင် ဖမ်းယူနည်း။",
    objectives: ["သတင်းတစ်ပုဒ်မှ 5W1H ဖမ်းယူနိုင်မည်။", "သတင်း ဘာသာစကား (passive, reporting verbs) ကို မှတ်မိမည်။", "သတင်းကို အနှစ်ချုပ်နိုင်မည်။"],
    vocab: [
      { en: "report", mm: "သတင်းပို့သည်", pos: "verb", example: "The incident was reported at noon.", exampleMm: "ဖြစ်ရပ်ကို မွန်းတည့်တွင် သတင်းပို့ခဲ့သည်။", topic: "news", level: "B1" },
      { en: "according to", mm: "…၏ အဆိုအရ", pos: "phrase", example: "According to officials, no one was hurt.", exampleMm: "တာဝန်ရှိသူများ၏ အဆိုအရ မည်သူမျှ မထိခိုက်ပါ။", topic: "news", level: "B2" },
      { en: "casualty", mm: "ထိခိုက်သေဆုံးသူ", pos: "noun", example: "There were no casualties.", exampleMm: "ထိခိုက်သေဆုံးသူ မရှိပါ။", topic: "news", level: "B2" },
    ],
    sections: [
      {
        heading: "သတင်း ဖွဲ့စည်းပုံ",
        body: [
          "ခေါင်းဆောင် စကား ('In today's headlines…') → အဓိက သတင်း (အရေးကြီးဆုံး အချက် အရင်) → အသေးစိတ် → နောက်ခံ → နောက်သတင်း။",
          "5W1H — Who (ဘယ်သူ), What (ဘာ), Where (ဘယ်မှာ), When (ဘယ်တော့), Why (ဘာကြောင့်), How (ဘယ်လို)။ သတင်း မေးခွန်း အများစုသည် ဤ ၆ ခုမှ ဖြစ်သည်။",
          "သတင်း ဘာသာစကား — passive ကို အသုံးများသည် ('Three people were arrested'), reporting verb ('officials said', 'police confirmed')။",
        ],
        table: { headers: ["အချက်", "မေးခွန်း", "ဥပမာ ဖြေ"], rows: [["Who", "ဘယ်သူ", "local farmers"], ["What", "ဘာ", "a new irrigation project"], ["Where", "ဘယ်မှာ", "Shan State"], ["When", "ဘယ်တော့", "next month"]] },
      },
      {
        heading: "ဖမ်းယူနည်း",
        body: [
          "သတင်းတစ်ပုဒ်လျှင် အဓိက အချက် နှစ်ခု–သုံးခုကိုသာ မှတ်သည်။ နောက်ခံ အချက်အလက်များကို နောက်မှ ဖြည့်သည်။",
          "မသိသော စကားလုံး ကြားလျှင် ရပ်မနေဘဲ ဆက်နားထောင်ပြီး အကြောင်းအရာမှ ခန့်မှန်းသည်။",
          note,
        ],
      },
    ],
    examples: [
      { en: "According to local officials, the bridge will reopen next month.", mm: "ဒေသခံ တာဝန်ရှိသူများ၏ အဆိုအရ တံတားကို လာမည့်လ ပြန်ဖွင့်မည်။" },
      { en: "Three people were taken to hospital after the accident.", mm: "မတော်တဆမှု အပြီး လူသုံးဦးကို ဆေးရုံ ပို့ခဲ့သည်။" },
      { en: "Heavy rain has caused flooding in several townships.", mm: "မိုးသည်းထန်စွာ ရွာသဖြင့် မြို့နယ် အတော်များများတွင် ရေကြီးခဲ့သည်။" },
    ],
    mistakes: [
      { wrong: "သတင်း စကားလုံးတိုင်း ရေးမှတ်ခြင်း", right: "5W1H ဖြင့် အဓိက အချက် မှတ်ပါ", why: "သတင်းသည် အမြန်နှုန်းမြင့်သည်။" },
      { wrong: "'According to me' ဟု ပြောခြင်း", right: "In my opinion / According to officials", why: "according to ကို ကိုယ်တိုင် အပေါ် မသုံးပါ။" },
    ],
    guided: [
      { type: "mcq", prompt: "Which question asks the reason?", promptMm: "ရွေးပါ။", options: ["Who?", "Why?", "Where?", "When?"], answer: 1, explanation: "why = အကြောင်းရင်း။", topic: "news" },
      { type: "mcq", prompt: "Which sentence is typical news language?", promptMm: "ရွေးပါ။", options: ["Somebody took three people to hospital.", "Three people were taken to hospital.", "Three people go hospital.", "Hospital took people."], answer: 1, explanation: "passive ကို သတင်းတွင် သုံးသည်။", topic: "news" },
      { type: "fill", prompt: "___ to police, the road is still closed.", promptMm: "ဖြည့်ပါ။", answers: ["According"], explanation: "according to။", topic: "news" },
      { type: "correct", prompt: "Correct: There was no casualties in the fire.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["There were no casualties in the fire."], explanation: "casualties ဗဟုကိန်း → were။", topic: "news" },
    ],
    independent: [
      { type: "mcq", prompt: "A bulletin usually starts with ___.", promptMm: "ရွေးပါ။", options: ["the least important story", "the main headlines", "an advertisement", "a weather joke"], answer: 1, explanation: "အဓိက ခေါင်းစဉ်များ အရင်။", topic: "news" },
      { type: "fill", prompt: "The incident ___ reported at noon. (be ၏ အတိတ်)", promptMm: "ဖြည့်ပါ။", answers: ["was"], explanation: "was reported။", topic: "news" },
      { type: "mcq", prompt: "Which is a background detail?", promptMm: "ရွေးပါ။", options: ["The bridge opened in 1998.", "The bridge will reopen next month.", "Officials announced the date today.", "Traffic is heavy now."], answer: 0, explanation: "သမိုင်း အချက်အလက်သည် နောက်ခံ။", topic: "news" },
      { type: "translate", prompt: "Translate: သတင်းအရ လူနှစ်ဦး ထိခိုက်ဒဏ်ရာ ရခဲ့တယ်။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["According to the report, two people were injured.", "The report says two people were injured."], explanation: "were injured (passive)။", topic: "news" },
    ],
    review: [
      { q: "5W1H ဆိုတာ ဘာလဲ။", a: "Who, What, Where, When, Why, How။" },
      { q: "သတင်း ဘာသာစကား၏ ထူးခြားချက် ဘာလဲ။", a: "passive နှင့် reporting verb ကို အသုံးများသည်။" },
    ],
    summary: ["သတင်းကို 5W1H ဖြင့် ဖမ်းယူသည်။", "အဓိက အချက် အရင်၊ အသေးစိတ် နောက်တွင် လာသည်။", "passive နှင့် reporting verb များကို မှတ်မိရသည်။"],
    mastery: ["သတင်း ၅ ပုဒ်မှ 5W1H ကို ဖြည့်နိုင်သည်။", "သတင်း အနှစ်ချုပ် ၃ ကြောင်း ရေးနိုင်သည်။"],
    topics: ["listening", "news", "note-taking"],
  },
  {
    id: "e9-podcasts",
    moduleId: "E",
    title: "Listening: Podcasts and Interviews",
    titleMm: "နားထောင်မှု — ပေါ့ဒ်ကတ်စ် နှင့် အင်တာဗျူ",
    level: "B2",
    minutes: 22,
    summaryLine: "ပေါ့ဒ်ကတ်စ် နှင့် အင်တာဗျူ နားထောင်ရာတွင် မေးခွန်း-အဖြေ ဖွဲ့စည်းပုံ၊ ပြောသူ နှစ်ဦး ခွဲခြားမှု နှင့် အဓိကအချက် မှတ်နည်း။",
    objectives: ["ပြောသူ နှစ်ဦးကို ခွဲခြားနိုင်မည်။", "အင်တာဗျူ မေးခွန်း အမျိုးအစား ၄ ခု သိမည်။", "အဓိက အချက် ၅ ခု မှတ်နိုင်မည်။"],
    vocab: [
      { en: "episode", mm: "အပိုင်း", pos: "noun", example: "This episode is about sleep.", exampleMm: "ဤအပိုင်းသည် အိပ်စက်ခြင်းအကြောင်း ဖြစ်သည်။", topic: "podcast", level: "B1" },
      { en: "host", mm: "အစီအစဉ် လုပ်ဆောင်သူ", pos: "noun", example: "The host asked about her research.", exampleMm: "အစီအစဉ် လုပ်ဆောင်သူက သူမ၏ သုတေသနအကြောင်း မေးခဲ့သည်။", topic: "podcast", level: "B1" },
      { en: "follow-up question", mm: "ဆက်လက် မေးခွန်း", pos: "noun", example: "He asked a follow-up question about cost.", exampleMm: "ကုန်ကျစရိတ်အကြောင်း ဆက်လက် မေးခွန်း မေးခဲ့သည်။", topic: "podcast", level: "B2" },
    ],
    sections: [
      {
        heading: "ဖွဲ့စည်းပုံ နှင့် ပြောသူ",
        body: [
          "ပေါ့ဒ်ကတ်စ် — နိဒါန်း (ခေါင်းစဉ် မိတ်ဆက်) → အဓိက ဆွေးနွေးမှု → အနှစ်ချုပ် → ကြော်ငြာ/နောက်အပိုင်း မိတ်ဆက်။",
          "အင်တာဗျူ — မေးခွန်း (closed → open → follow-up) → အဖြေ ရှည် → ထပ်မေးခြင်း → နိဂုံး။",
          "ပြောသူ ခွဲခြားရန် — အသံ အနိမ့်အမြင့်၊ စကားပြော နှုန်း၊ မေးခွန်း မေးသူ (rising intonation) ကို အသုံးပြုသည်။ စာသား script တွင် အမည် နှင့် 'asked' / 'said' ကြိယာဖြင့် ခွဲသည်။",
        ],
        table: { headers: ["မေးခွန်း အမျိုးအစား", "ဥပမာ", "အဖြေ ပုံစံ"], rows: [["closed", "Do you enjoy teaching?", "yes/no + အနည်းငယ်"], ["open", "How did you start?", "ဇာတ်လမ်း"], ["follow-up", "Why was that difficult?", "အကြောင်းရင်း"], ["clarifying", "What do you mean by that?", "ရှင်းလင်းချက်"]] },
      },
      {
        heading: "မှတ်စု နည်းလမ်း",
        body: [
          "အချိန် မှတ်ထားခြင်း (mm:ss) က နောက်မှ ပြန်နားထောင်ရန် လွယ်စေသည်။",
          "အဓိက အချက် တစ်ခုလျှင် စာကြောင်း တစ်ကြောင်း မှတ်ပြီး ကိုယ်ပိုင် စကားဖြင့် အနှစ်ချုပ်သည်။",
          note,
        ],
      },
    ],
    examples: [
      { en: "Host: So how did you first become interested in astronomy?", mm: "အစီအစဉ် လုပ်သူ — နက္ခတ္တဗေဒကို ဘယ်လို စိတ်ဝင်စားလာခဲ့တာလဲ။" },
      { en: "Guest: It started when my father gave me a small telescope.", mm: "ဧည့်သည် — အဖေက တယ်လီစကုပ် ငယ်လေး ပေးတဲ့အခါ စခဲ့တာပါ။" },
      { en: "Host: That's interesting — could you say more about that?", mm: "အစီအစဉ် လုပ်သူ — စိတ်ဝင်စားစရာပဲ၊ အဲဒီအကြောင်း ပိုပြောပြနိုင်လား။" },
    ],
    mistakes: [
      { wrong: "မေးခွန်းမေးသူ နှင့် ဖြေသူ ကို မခွဲခြားခြင်း", right: "မေးခွန်း လေသံ (rising) နှင့် 'asked' ကြိယာကို အသုံးပြုပါ", why: "အဖြေ မှားစေနိုင်သည်။" },
      { wrong: "စကားလုံးတိုင်း ဘာသာပြန်ရန် ကြိုးစားခြင်း", right: "အဓိက အချက် ၅ ခုသာ မှတ်ပါ", why: "အချိန်နှင့် အာရုံ မလုံလောက်ပါ။" },
    ],
    guided: [
      { type: "mcq", prompt: "A 'follow-up question' comes ___.", promptMm: "ရွေးပါ။", options: ["before the interview", "after an answer, for more detail", "never", "in the advertisement"], answer: 1, explanation: "အဖြေ ပြီးနောက် အသေးစိတ် မေးသည်။", topic: "podcast" },
      { type: "mcq", prompt: "Which verb introduces a question?", promptMm: "ရွေးပါ။", options: ["answered", "asked", "replied", "explained"], answer: 1, explanation: "asked။", topic: "podcast" },
      { type: "fill", prompt: "This ___ is about sleep and memory.", promptMm: "ဖြည့်ပါ။", answers: ["episode"], explanation: "episode = အပိုင်း။", topic: "podcast" },
      { type: "correct", prompt: "Correct: The host asked to her about her research.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["The host asked her about her research."], explanation: "ask + somebody + about။", topic: "podcast" },
    ],
    independent: [
      { type: "mcq", prompt: "Which question is open?", promptMm: "ရွေးပါ။", options: ["Do you like it?", "Is it hard?", "How did you start?", "Are you ready?"], answer: 2, explanation: "how = open question။", topic: "podcast" },
      { type: "fill", prompt: "Could you say more ___ that?", promptMm: "ဖြည့်ပါ။", answers: ["about"], explanation: "say more about။", topic: "podcast" },
      { type: "mcq", prompt: "Which is the best note?", promptMm: "ရွေးပါ။", options: ["00:00–02:00 words", "3:20 — why she began: father's telescope", "everything", "nothing"], answer: 1, explanation: "အချိန် + အဓိက အချက်။", topic: "podcast" },
      { type: "translate", prompt: "Translate: ဒီအပိုင်းမှာ အိပ်စက်ခြင်းအကြောင်း ဆွေးနွေးတယ်။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["In this episode, they discuss sleep.", "This episode discusses sleep."], explanation: "discuss + နာမ် (about မလို)။", topic: "podcast" },
    ],
    review: [
      { q: "ပေါ့ဒ်ကတ်စ်၏ ယေဘုယျ ဖွဲ့စည်းပုံ ဘာလဲ။", a: "နိဒါန်း → ဆွေးနွေးမှု → အနှစ်ချုပ် → နောက်အပိုင်း မိတ်ဆက်။" },
      { q: "ပြောသူ နှစ်ဦးကို ဘယ်လို ခွဲသလဲ။", a: "မေးခွန်း လေသံ၊ အသံ၊ နှုန်း နှင့် asked/said ကြိယာ။" },
    ],
    summary: ["အင်တာဗျူ ဖွဲ့စည်းပုံကို သိခြင်းက နားထောင်ရာတွင် ကူညီသည်။", "မေးခွန်း အမျိုးအစား ၄ ခု ခွဲခြားနိုင်သည်။", "အချိန်နှင့် အဓိက အချက်ကို မှတ်သည်။"],
    mastery: ["အင်တာဗျူ ၁ ခုမှ အချက် ၈ ခု မှတ်နိုင်သည်။", "မေးခွန်း အမျိုးအစား ၄ ခု ဖော်ပြနိုင်သည်။"],
    topics: ["listening", "podcast", "interview"],
  },
  {
    id: "e10-lecture-notes",
    moduleId: "E",
    title: "Listening: Lecture Note-Taking",
    titleMm: "နားထောင်မှု — ဟောပြောပွဲ မှတ်စု",
    level: "B2",
    minutes: 24,
    summaryLine: "ဟောပြောပွဲ နားထောင်ရင်း Cornell ပုံစံ မှတ်စု ရေးခြင်း နှင့် အချက်ပြ စကားလုံးများကို ဖမ်းယူခြင်း။",
    objectives: ["Cornell မှတ်စု ပုံစံ ရေးနိုင်မည်။", "အချက်ပြ စကားလုံး ၈ ခု မှတ်မိမည်။", "မှတ်စုမှ အနှစ်ချုပ် ရေးနိုင်မည်။"],
    vocab: [
      { en: "summarise", mm: "အနှစ်ချုပ်သည်", pos: "verb", example: "Summarise each section in one line.", exampleMm: "အပိုင်းတိုင်းကို တစ်ကြောင်းဖြင့် အနှစ်ချုပ်ပါ။", topic: "note-taking", level: "B1" },
      { en: "for instance", mm: "ဥပမာ", pos: "phrase", example: "For instance, sleep improves memory.", exampleMm: "ဥပမာ — အိပ်စက်မှုက မှတ်ဉာဏ်ကို တိုးစေသည်။", topic: "note-taking", level: "B1" },
      { en: "in contrast", mm: "ဆန့်ကျင်စွာ", pos: "phrase", example: "In contrast, the second study found no effect.", exampleMm: "ဆန့်ကျင်စွာ ဒုတိယ လေ့လာမှုက သက်ရောက်မှု မတွေ့ခဲ့ပါ။", topic: "note-taking", level: "B2" },
    ],
    sections: [
      {
        heading: "Cornell မှတ်စု",
        body: [
          "စာမျက်နှာကို သုံးပိုင်း ခွဲသည် — ဘေး (သော့စကားလုံး/မေးခွန်း)၊ အလယ် (မှတ်စု)၊ အောက် (အနှစ်ချုပ် ၂–၃ ကြောင်း)။",
          "အလယ်တွင် အဓိက အချက်ကို စကားစုဖြင့် မှတ်ပြီး ဥပမာကို ညာဘက်/အောက်တွင် ထည့်သည်။ စာကြောင်း ပြည့်စုံ မရေးပါ။",
          "အနှစ်ချုပ်ကို ဟောပြောပွဲ ပြီးချင်း (၅ မိနစ်အတွင်း) ရေးခြင်းက မှတ်ဉာဏ်ကို ခိုင်မာစေသည်။",
        ],
        table: { headers: ["အချက်ပြ စကား", "အဓိပ္ပာယ်", "မှတ်စု သင်္ကေတ"], rows: [["Firstly / Secondly", "အစီအစဉ်", "1. 2. 3."], ["For instance", "ဥပမာ", "e.g."], ["In contrast", "ဆန့်ကျင်", "≠"], ["To sum up", "အနှစ်ချုပ်", "Σ"]] },
      },
      {
        heading: "အချက်ပြ စကားလုံး ဖမ်းယူခြင်း",
        body: [
          "ဟောပြောသူက 'There are three main reasons…' ဟု ဆိုလျှင် ရေတွက်နိုင်သည့် အချက် ၃ ခု လာမည်ကို ကြိုသိသည်။",
          "'However', 'On the other hand', 'Nevertheless' ကြားလျှင် ဆန့်ကျင်ချက် လာမည်ကို မျှော်သည်။",
          note,
        ],
      },
    ],
    examples: [
      { en: "There are three main reasons for the change.", mm: "ပြောင်းလဲမှုအတွက် အဓိက အကြောင်းရင်း သုံးခု ရှိသည်။", note: "၃ ခု လာမည်ဟု ကြိုသိသည်။" },
      { en: "In contrast, the second group showed no improvement.", mm: "ဆန့်ကျင်စွာ ဒုတိယ အုပ်စုတွင် တိုးတက်မှု မတွေ့ခဲ့ပါ။" },
      { en: "To sum up, sleep is not optional.", mm: "အနှစ်ချုပ်ရလျှင် အိပ်စက်ခြင်းသည် ရွေးချယ်ခွင့် မဟုတ်ပါ။" },
    ],
    mistakes: [
      { wrong: "ဟောပြောသူ ပြောသည့်အတိုင်း စာကြောင်းပြည့် ကူးရေးခြင်း", right: "အဓိက အချက်ကို ကိုယ်ပိုင် စကားဖြင့် တိုတိုမှတ်ပါ", why: "မှတ်စု ရှည်လျှင် ပြန်ဖတ်ရ ခက်သည်။" },
      { wrong: "အနှစ်ချုပ် မရေးခြင်း", right: "အပိုင်းတိုင်း အနှစ်ချုပ် ၂ ကြောင်း ရေးပါ", why: "အနှစ်ချုပ်က မှတ်ဉာဏ်ကို ခိုင်မာစေသည်။" },
    ],
    guided: [
      { type: "mcq", prompt: "Cornell notes have ___ sections.", promptMm: "ရွေးပါ။", options: ["two", "three", "four", "five"], answer: 1, explanation: "ဘေး၊ အလယ်၊ အောက်။", topic: "note-taking" },
      { type: "mcq", prompt: "'In contrast' signals ___.", promptMm: "ရွေးပါ။", options: ["an example", "a difference", "a conclusion", "a definition"], answer: 1, explanation: "ဆန့်ကျင်မှု/ကွာခြားမှု။", topic: "note-taking" },
      { type: "fill", prompt: "___ instance, sleep improves memory.", promptMm: "ဖြည့်ပါ။", answers: ["For"], explanation: "for instance။", topic: "note-taking" },
      { type: "correct", prompt: "Correct: To sum up, the lecture was about sleep, isn't it?", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["To sum up, the lecture was about sleep."], explanation: "tag မလိုပါ။", topic: "note-taking" },
    ],
    independent: [
      { type: "mcq", prompt: "Where does the summary go in Cornell notes?", promptMm: "ရွေးပါ။", options: ["At the top", "In the side column", "At the bottom", "On another page"], answer: 2, explanation: "အောက်ခြေ။", topic: "note-taking" },
      { type: "fill", prompt: "___ up, there are two main points.", promptMm: "ဖြည့်ပါ။", answers: ["To", "Summing"], explanation: "To sum up / Summing up။", topic: "note-taking" },
      { type: "order", prompt: "Arrange the sentence.", promptMm: "စီပါ။", tokens: ["three", "There", "reasons", "are", "main"], answer: "There are three main reasons", explanation: "ရေတွက်နိုင်သည့် အချက် ကြိုပြ။", topic: "note-taking" },
      { type: "translate", prompt: "Translate: ဥပမာအားဖြင့် အိပ်ရေးပျက်ရင် မှတ်ဉာဏ် ထိခိုက်တယ်။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["For example, lack of sleep affects memory.", "For instance, losing sleep affects memory."], explanation: "for example/instance။", topic: "note-taking" },
    ],
    review: [
      { q: "Cornell မှတ်စု သုံးပိုင်း ဘာတွေလဲ။", a: "ဘေး (သော့စကားလုံး)၊ အလယ် (မှတ်စု)၊ အောက် (အနှစ်ချုပ်)။" },
      { q: "‘There are three main reasons’ ကြားလျှင် ဘာလုပ်သလဲ။", a: "၁၊ ၂၊ ၃ နေရာ ချန်ပြီး အချက် သုံးခု မှတ်ရန် ပြင်ဆင်သည်။" },
    ],
    summary: ["Cornell ပုံစံက မှတ်စုကို ပြန်ဖတ်ရလွယ်စေသည်။", "အချက်ပြ စကားလုံးက လာမည့် အချက်ကို ကြိုပြသည်။", "အနှစ်ချုပ် ရေးခြင်း မရှိမဖြစ်။"],
    mastery: ["ဟောပြောပွဲ ၁ ခုအတွက် Cornell မှတ်စု ၁ မျက်နှာ ရေးနိုင်သည်။", "အချက်ပြ စကားလုံး ၈ ခု မှတ်မိသည်။"],
    topics: ["listening", "note-taking", "academic"],
  },
  {
    id: "e11-accent-awareness",
    moduleId: "E",
    title: "Listening: Accent Awareness",
    titleMm: "နားထောင်မှု — လေသံ အသိအမှတ်ပြုမှု",
    level: "B2",
    minutes: 20,
    summaryLine: "ဗြိတိန်၊ အမေရိကန်၊ ဩစတြေးလျ နှင့် အာရှ အင်္ဂလိပ် လေသံများ၏ အသံထွက် ကွာခြားချက်ကို သိပြီး နားထောင်မှု လိုက်လျောညီထွေ ဖြစ်စေနည်း။",
    objectives: ["လေသံ ၃ မျိုး၏ ကွာခြားချက် ၅ ခု သိမည်။", "လေသံအလိုက် စကားလုံး မှတ်မိနိုင်မည်။", "နားမလည်လျှင် ပြန်မေးနည်း သိမည်။"],
    vocab: [
      { en: "accent", mm: "လေသံ", pos: "noun", example: "She speaks with a Scottish accent.", exampleMm: "သူမ စကော့ လေသံဖြင့် ပြောသည်။", topic: "accents", level: "B1" },
      { en: "dialect", mm: "ဒေသသုံး ဘာသာစကား", pos: "noun", example: "The region has its own dialect.", exampleMm: "ဒေသတွင် ကိုယ်ပိုင် ဒေသသုံး ဘာသာစကား ရှိသည်။", topic: "accents", level: "B2" },
      { en: "get used to", mm: "ရင်းနှီးလာသည်", pos: "phrase", example: "You get used to the accent after a week.", exampleMm: "တစ်ပတ်အကြာ လေသံနှင့် ရင်းနှီးလာသည်။", topic: "accents", level: "B1" },
    ],
    sections: [
      {
        heading: "ကွာခြားချက်များ",
        body: [
          "ဗြိတိန် (RP) — /r/ ကို သရ နောက်တွင် မဖတ်ပါ (car → /kɑː/), bath /ɑː/။ အမေရိကန် — /r/ ကို အမြဲ ဖတ်သည်, bath /æ/, t ကို သရအကြားတွင် /d/ ကဲ့သို့ ဖတ်သည် (water → wader)။",
          "ဩစတြေးလျ — သရများ ပိုရှည်ပြီး 'day' → /daɪ/ ကဲ့သို့ ဖတ်တတ်သည်။ အိန္ဒိယ/အရှေ့တောင် အာရှ အင်္ဂလိပ်တွင် syllable-timed ဖြစ်ပြီး စကားလုံးတိုင်း နီးပါး ရှင်းရှင်း ဖတ်သည်။",
          "မြန်မာ သင်ယူသူများအတွက် — ဗျည်းဆုံး အသံများ (asked, worked) နှင့် သရ အတို/အရှည် ကို အထူး လေ့ကျင့်သင့်သည်။",
        ],
        table: { headers: ["စကားလုံး", "BrE", "AmE"], rows: [["car", "/kɑː/", "/kɑːr/"], ["water", "/ˈwɔːtə/", "/ˈwɔːtər/"], ["schedule", "/ˈʃedjuːl/", "/ˈskedʒuːl/"], ["tomato", "/təˈmɑːtəʊ/", "/təˈmeɪtoʊ/"]] },
      },
      {
        heading: "လိုက်လျောညီထွေ ဖြစ်စေရန်",
        body: [
          "မတူညီသည့် လေသံများကို ပုံမှန် နားထောင်ခြင်းက လိုက်လျောညီထွေ ဖြစ်စေသည်။ စာသား (subtitle/transcript) နှင့် တွဲနားထောင်ပါ။",
          "နားမလည်လျှင် — 'Sorry, could you say that again more slowly?' ဟု မေးသည်။ လေသံကြောင့် မဟုတ်ဘဲ အသံ အရည်အသွေးကြောင့် ဖြစ်နိုင်သည်။",
          note,
        ],
      },
    ],
    examples: [
      { en: "BrE: I'll park the car near the harbour.", mm: "ဗြိတိန် — ကားကို ဆိပ်ကမ်းနားမှာ ရပ်မယ်။", note: "car ရှိ r ကို မဖတ်ပါ။" },
      { en: "AmE: I'll park the car near the harbor.", mm: "အမေရိကန် — အဓိပ္ပာယ် တူသည်။", note: "r ကို ဖတ်သည်။" },
      { en: "Sorry, could you say that again more slowly?", mm: "တောင်းပန်ပါတယ်၊ နှေးနှေး ပြန်ပြောနိုင်ပါသလား။" },
    ],
    mistakes: [
      { wrong: "လေသံ တစ်မျိုးတည်းကိုသာ 'မှန်'သည်ဟု ယူဆခြင်း", right: "လေသံ အားလုံး မှန်ကန်သည် — နားလည်နိုင်မှုက အဓိက", why: "ကမ္ဘာတွင် လေသံ များစွာ ရှိသည်။" },
      { wrong: "နားမလည်လျှင် ခေါင်းညိတ်ခြင်း", right: "ပြန်မေးပါ — Could you repeat that?", why: "မှားယွင်း နားလည်မှု ရှောင်ရန်။" },
    ],
    guided: [
      { type: "mcq", prompt: "In which accent is final /r/ usually silent?", promptMm: "ရွေးပါ။", options: ["American", "British (RP)", "Australian", "Canadian"], answer: 1, explanation: "RP တွင် non-rhotic ဖြစ်သည်။", topic: "accents" },
      { type: "mcq", prompt: "AmE 'water' often sounds like ___.", promptMm: "ရွေးပါ။", options: ["wader", "waiter", "wetter", "wart"], answer: 0, explanation: "t → /d/။", topic: "accents" },
      { type: "fill", prompt: "You ___ used to the accent after a while.", promptMm: "ဖြည့်ပါ။", answers: ["get"], explanation: "get used to။", topic: "accents" },
      { type: "correct", prompt: "Correct: Sorry, could you repeat again slowly?", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["Sorry, could you repeat that more slowly?"], explanation: "repeat တွင် again ထပ်မလိုပါ။", topic: "accents" },
    ],
    independent: [
      { type: "mcq", prompt: "Which is the best response when you don't understand?", promptMm: "ရွေးပါ။", options: ["Nod and smile.", "Sorry, could you say that again?", "Change the subject.", "Pretend to hear."], answer: 1, explanation: "ပြန်မေးခြင်း။", topic: "accents" },
      { type: "fill", prompt: "She speaks with a strong Scottish ___.", promptMm: "ဖြည့်ပါ။", answers: ["accent"], explanation: "accent။", topic: "accents" },
      { type: "mcq", prompt: "Which helps most with unfamiliar accents?", promptMm: "ရွေးပါ။", options: ["Listening only to one speaker", "Listening to many varieties with transcripts", "Reading grammar books", "Memorising translations"], answer: 1, explanation: "မျိုးကွဲများ + transcript။", topic: "accents" },
      { type: "translate", prompt: "Translate: ကျွန်တော် ဒီလေသံနဲ့ မရင်းနှီးသေးဘူး။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["I'm not used to this accent yet.", "I am not used to this accent yet."], explanation: "be used to + နာမ်။", topic: "accents" },
    ],
    review: [
      { q: "BrE နှင့် AmE ၏ အဓိက ကွာခြားချက် ဘာလဲ။", a: "BrE တွင် သရနောက် /r/ ကို မဖတ်ပါ၊ AmE တွင် ဖတ်သည်။" },
      { q: "နားမလည်လျှင် ဘယ်လို မေးသလဲ။", a: "Could you say that again more slowly? ကဲ့သို့ ယဉ်ကျေးစွာ မေးသည်။" },
    ],
    summary: ["လေသံ ကွာခြားချက်ကို သိခြင်းက နားထောင်မှုကို ကူညီသည်။", "လေသံ အားလုံး မှန်ကန်သည်။", "နားမလည်လျှင် ပြန်မေးခြင်း အကောင်းဆုံး။"],
    mastery: ["လေသံ ၃ မျိုး၏ ကွာခြားချက် ၅ ခု ဖော်ပြနိုင်သည်။", "ပြန်မေးသည့် စကားစု ၅ ခု သုံးနိုင်သည်။"],
    topics: ["listening", "accents", "pronunciation"],
  },
];

export const moduleEFLessonsPart3: Lesson[] = buildLessons(seeds);
