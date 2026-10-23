import type { Lesson } from "@/lib/types";
import { buildLessons, type LessonSeed } from "./builder.ts";

const note = "ဤသင်ခန်းစာသည် စာသားအခြေခံ လေ့ကျင့်ခန်း ဖြစ်သည်။ အသံ ခွဲခြမ်းစိတ်ဖြာမှု မပါဝင်ပါ — အသံထွက်ဖတ်ပြီး ကိုယ်တိုင် ပြန်နားထောင်ခြင်းဖြင့် လေ့ကျင့်ပါ။";

const seeds: LessonSeed[] = [
  {
    id: "d10-appointments",
    moduleId: "D",
    title: "Speaking: Making and Changing Appointments",
    titleMm: "စကားပြော — ချိန်းဆိုမှု ပြုလုပ်ခြင်း နှင့် ပြောင်းလဲခြင်း",
    level: "A2",
    minutes: 16,
    summaryLine: "ချိန်းဆိုမှု တောင်းခံခြင်း၊ ရက်ရွှေ့ခြင်း နှင့် အတည်ပြုခြင်း စကားစုများ။",
    objectives: ["ချိန်းဆိုမှု တောင်းခံသည့် စကားစု ၆ ခု သုံးနိုင်မည်။", "ရက်ရွှေ့ရာတွင် ယဉ်ကျေးစွာ ပြောနိုင်မည်။", "အတည်ပြုစာ ရေးနိုင်မည်။"],
    vocab: [
      { en: "be available", mm: "အားလပ်သည်", pos: "phrase", example: "Are you available on Tuesday?", exampleMm: "အင်္ဂါနေ့ အားလပ်ပါသလား။", topic: "appointments", level: "A2" },
      { en: "reschedule", mm: "အချိန်ပြောင်းသည်", pos: "verb", example: "Could we reschedule for Friday?", exampleMm: "သောကြာနေ့ ပြောင်းလို့ ရပါသလား။", topic: "appointments", level: "B1" },
      { en: "confirm", mm: "အတည်ပြုသည်", pos: "verb", example: "I'm calling to confirm tomorrow's meeting.", exampleMm: "မနက်ဖြန် အစည်းအဝေး အတည်ပြုရန် ဖုန်းဆက်နေသည်။", topic: "appointments", level: "B1" },
    ],
    sections: [
      {
        heading: "စကားစုများ",
        body: [
          "တောင်းခံခြင်း — 'I'd like to make an appointment with Dr. Hla.' 'Would Monday at ten suit you?' 'I'm free after two.'",
          "ပြောင်းလဲခြင်း — 'I'm sorry, something has come up. Could we reschedule?' 'Would Wednesday be possible instead?' 'I apologise for the short notice.'",
          "အတည်ပြုခြင်း — 'Just to confirm, we're meeting at 3 p.m. on Thursday.' 'I'll send you a reminder.'",
        ],
        table: { headers: ["ရည်ရွယ်ချက်", "စကားစု", "မှတ်ချက်"], rows: [["အဆင်ပြေမှု မေးခြင်း", "Does Tuesday suit you?", "suit ကို လူအပေါ် သုံး"], ["ငြင်းပယ်", "I'm afraid I'm busy then.", "ယဉ်ကျေးသော ငြင်းပယ်"], ["ရက်ရွှေ့", "Could we move it to Friday?", "move to + ရက်"], ["သတိပေးချက်", "Sorry for the short notice.", "အချိန်တို သတိပေး"]] },
      },
      {
        heading: "အချိန် ဖော်ပြခြင်း",
        body: [
          "on + ရက် (on Monday), at + နာရီ (at 10 a.m.), in + လ (in June)။ 'Monday at ten' ဟု ရက်နှင့် နာရီကို တွဲပြောသည်။",
          "မရေရာမှု ဖော်ပြရန် — 'around three', 'sometime next week', 'first thing in the morning'။",
          note,
        ],
      },
    ],
    examples: [
      { en: "I'd like to book an appointment for next Monday.", mm: "လာမည့် တနင်္လာနေ့ ချိန်းဆိုချင်ပါတယ်။" },
      { en: "I'm sorry, but I need to reschedule. Something has come up.", mm: "တောင်းပန်ပါတယ်၊ အချိန်ပြောင်းဖို့ လိုတယ်။ အရေးကိစ္စ ပေါ်လာလို့။" },
      { en: "Just to confirm — Thursday at two, at your office.", mm: "အတည်ပြုရုံပါ — ကြာသပတေးနေ့ နှစ်နာရီ၊ သင့်ရုံးမှာ။" },
    ],
    mistakes: [
      { wrong: "I want to make appointment.", right: "I'd like to make an appointment.", why: "appointment သည် ရေတွက်နိုင်သဖြင့် an လိုသည်။" },
      { wrong: "Are you free in Monday?", right: "Are you free on Monday?", why: "ရက်စွဲ → on။" },
    ],
    guided: [
      { type: "mcq", prompt: "Does Friday ___ you?", promptMm: "ရွေးပါ။", options: ["suit", "fit", "suitable", "match"], answer: 0, explanation: "Does … suit you? သည် ချိန်းဆိုရာတွင် သုံးသည်။", topic: "appointments" },
      { type: "fill", prompt: "I'd like to make ___ appointment with the dentist.", promptMm: "ဖြည့်ပါ။", answers: ["an"], explanation: "an appointment။", topic: "appointments" },
      { type: "mcq", prompt: "You cannot come. Polite reply:", promptMm: "ရွေးပါ။", options: ["No.", "I'm afraid I'm busy then.", "Impossible.", "Wrong day."], answer: 1, explanation: "I'm afraid … သည် ယဉ်ကျေးသည်။", topic: "appointments" },
      { type: "correct", prompt: "Correct: I want reschedule our meeting.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["I'd like to reschedule our meeting.", "I would like to reschedule our meeting."], explanation: "would like + to + verb။", topic: "appointments" },
    ],
    independent: [
      { type: "mcq", prompt: "The meeting is ___ Monday ___ ten.", promptMm: "ရွေးပါ။", options: ["on / at", "at / on", "in / at", "on / in"], answer: 0, explanation: "on + ရက်၊ at + နာရီ။", topic: "appointments" },
      { type: "fill", prompt: "Could we ___ it to Friday?", promptMm: "ဖြည့်ပါ။", answers: ["move"], explanation: "move it to + ရက်။", topic: "appointments" },
      { type: "order", prompt: "Arrange the sentence.", promptMm: "စီပါ။", tokens: ["I", "to", "confirm", "am", "calling", "the", "booking"], answer: "I am calling to confirm the booking", explanation: "I'm calling to confirm…။", topic: "appointments" },
      { type: "translate", prompt: "Translate: မနက်ဖြန် ချိန်းဆိုမှုကို သောကြာနေ့ ပြောင်းလို့ ရပါသလား။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["Could we move tomorrow's appointment to Friday?", "Could we reschedule tomorrow's appointment to Friday?"], explanation: "move/reschedule to + ရက်။", topic: "appointments" },
    ],
    review: [
      { q: "Does … suit you? ကို ဘယ်အခါ သုံးသလဲ။", a: "အချိန် အဆင်ပြေမပြေ မေးရာတွင်။" },
      { q: "ရက်ရွှေ့ရာတွင် ဘာကို တောင်းပန်ရသလဲ။", a: "အချိန်တို သတိပေးမှုအတွက် — sorry for the short notice။" },
    ],
    summary: ["ချိန်းဆိုမှုတွင် တောင်းခံ၊ ပြောင်းလဲ နှင့် အတည်ပြု စကားစုများ ရှိသည်။", "on + ရက်၊ at + နာရီ။", "would like to + verb သည် ယဉ်ကျေးသည်။"],
    mastery: ["ချိန်းဆိုမှု စကားပြော ၈ ကြောင်း ရေးနိုင်သည်။", "အတည်ပြုစာ ၄ ကြောင်း ရေးနိုင်သည်။"],
    topics: ["speaking", "appointments", "functions"],
  },
  {
    id: "d11-complaints",
    moduleId: "D",
    title: "Speaking: Making Complaints Politely",
    titleMm: "စကားပြော — ယဉ်ကျေးစွာ တိုင်ကြားခြင်း",
    level: "B1",
    minutes: 18,
    summaryLine: "ဝန်ဆောင်မှု မကျေနပ်မှုကို ဒေါသမထွက်ဘဲ တိကျစွာ တိုင်ကြားခြင်း နှင့် ဖြေရှင်းချက် တောင်းခံခြင်း။",
    objectives: ["တိုင်ကြားမှု စကားစု ၈ ခု သုံးနိုင်မည်။", "ပြဿနာကို အချက်အလက်ဖြင့် ရှင်းပြနိုင်မည်။", "ဖြေရှင်းချက် တောင်းခံနိုင်မည်။"],
    vocab: [
      { en: "complain", mm: "တိုင်ကြားသည်", pos: "verb", example: "I'd like to complain about the service.", exampleMm: "ဝန်ဆောင်မှုအကြောင်း တိုင်ကြားချင်ပါတယ်။", topic: "complaints", level: "B1" },
      { en: "refund", mm: "ငွေပြန်အမ်းခြင်း", pos: "noun", example: "I'm requesting a full refund.", exampleMm: "အပြည့် ငွေပြန်အမ်းရန် တောင်းဆိုနေသည်။", topic: "complaints", level: "B1" },
      { en: "inconvenience", mm: "အခက်အခဲ", pos: "noun", example: "I apologise for the inconvenience.", exampleMm: "အခက်အခဲအတွက် တောင်းပန်ပါတယ်။", topic: "complaints", level: "B2" },
    ],
    sections: [
      {
        heading: "တိုင်ကြားမှု ဖွဲ့စည်းပုံ",
        body: [
          "၁) ပြဿနာ — 'I ordered a laptop on 3 May, but it hasn't arrived.' ၂) သက်ရောက်မှု — 'I need it for work this week.'",
          "၃) တောင်းဆိုချက် — 'Could you check the order and let me know when it will arrive?' ၄) နိဂုံး — 'I'd appreciate a reply today.'",
          "စကားစု — 'I'm afraid there's a problem with…' 'I'm not satisfied with…' 'I'd like to know why…' 'Could you look into this?'",
        ],
        table: { headers: ["အဆင့်", "စကားစု", "မှတ်ချက်"], rows: [["စ", "I'm afraid there's a problem…", "နူးညံ့သော အစ"], ["ရှင်းပြ", "It was supposed to arrive on…", "အချက်အလက်"], ["တောင်း", "Could you look into this?", "တိကျသော တောင်းဆိုမှု"], ["ပိတ်", "I'd appreciate a quick reply.", "အချိန်သတ်မှတ်"]] },
      },
      {
        heading: "လေသံ နှင့် စကားလုံး ရွေးချယ်မှု",
        body: [
          "'You never help me' ကဲ့သို့ စွပ်စွဲချက် မသုံးဘဲ 'I haven't received a reply' ကဲ့သို့ အချက်အလက်ကို ပြောသည်။",
          "'always' နှင့် 'never' ကို တိုင်ကြားမှုတွင် ရှောင်ပြီး တိကျသည့် အကြိမ်အရေ ဖော်ပြသည် — 'twice this week'။",
          note,
        ],
      },
    ],
    examples: [
      { en: "I'm afraid there's a problem with my order.", mm: "ကျွန်တော့် အော်ဒါမှာ ပြဿနာ ရှိနေပါတယ်။" },
      { en: "I've called twice this week and haven't received a reply.", mm: "ဒီအပတ် နှစ်ကြိမ် ဖုန်းဆက်ခဲ့ပြီး ပြန်ကြားချက် မရသေးပါ။" },
      { en: "Could you look into this and let me know by Friday?", mm: "ဒါကို စစ်ဆေးပြီး သောကြာနေ့အထိ အသိပေးနိုင်ပါသလား။" },
    ],
    mistakes: [
      { wrong: "You are cheating me!", right: "I'm afraid there has been a mistake with my bill.", why: "စွပ်စွဲချက် မသုံးဘဲ အချက်အလက်ဖြင့် ပြောသည်။" },
      { wrong: "I want refund now.", right: "I'd like a refund, please.", why: "would like + နာမ် သည် ယဉ်ကျေးသည်။" },
    ],
    guided: [
      { type: "mcq", prompt: "I'd like to ___ about the delay.", promptMm: "ရွေးပါ။", options: ["complain", "complaint", "complaining", "complained"], answer: 0, explanation: "complain သည် ကြိယာ။", topic: "complaints" },
      { type: "fill", prompt: "I apologise ___ the inconvenience.", promptMm: "ဖြည့်ပါ။", answers: ["for"], explanation: "apologise for။", topic: "complaints" },
      { type: "mcq", prompt: "Which is the most polite opener?", promptMm: "ရွေးပါ။", options: ["Your service is terrible.", "I'm afraid there's a problem with my order.", "Fix this now!", "You people never help."], answer: 1, explanation: "I'm afraid… သည် နူးညံ့သည်။", topic: "complaints" },
      { type: "correct", prompt: "Correct: I want that you refund me.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["I'd like a refund, please.", "I would like a refund, please."], explanation: "would like + နာမ်။", topic: "complaints" },
    ],
    independent: [
      { type: "mcq", prompt: "___ you look into this, please?", promptMm: "ရွေးပါ။", options: ["Could", "Must", "Should", "Shall"], answer: 0, explanation: "Could you look into this? ယဉ်ကျေးသည်။", topic: "complaints" },
      { type: "fill", prompt: "The parcel was ___ to arrive on Monday. (မျှော်လင့်ထား)", promptMm: "ဖြည့်ပါ။", answers: ["supposed"], explanation: "be supposed to။", topic: "complaints" },
      { type: "mcq", prompt: "Which sentence avoids blame?", promptMm: "ရွေးပါ။", options: ["You lost my parcel.", "It seems my parcel has been delayed.", "Your company is useless.", "You always fail."], answer: 1, explanation: "အချက်အလက် ဖြင့် ပြောသည်။", topic: "complaints" },
      { type: "translate", prompt: "Translate: ကျွန်တော် ဒီပြဿနာအတွက် ဖြေရှင်းချက် လိုအပ်ပါတယ်။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["I need a solution to this problem.", "I'd like a solution to this problem, please."], explanation: "a solution to + ပြဿနာ။", topic: "complaints" },
    ],
    review: [
      { q: "တိုင်ကြားမှု ဖွဲ့စည်းပုံ ၄ ဆင့် ဘာတွေလဲ။", a: "ပြဿနာ → သက်ရောက်မှု → တောင်းဆိုချက် → နိဂုံး။" },
      { q: "always/never ကို ဘာကြောင့် ရှောင်သလဲ။", a: "ချဲ့ကားသလို ထင်စေပြီး ပဋိပက္ခ ဖြစ်စေနိုင်သဖြင့်။" },
    ],
    summary: ["တိုင်ကြားမှုကို ပြဿနာ၊ သက်ရောက်မှု၊ တောင်းဆိုချက် အစီအစဉ်ဖြင့် ပြောသည်။", "စွပ်စွဲချက် အစား အချက်အလက် သုံးသည်။", "would like / could you သည် ယဉ်ကျေးသည်။"],
    mastery: ["တိုင်ကြားမှု စာ/စကား ၈ ကြောင်း ရေးနိုင်သည်။", "စကားစု ၈ ခုကို သင့်လျော်စွာ သုံးနိုင်သည်။"],
    topics: ["speaking", "complaints", "functions"],
  },
  {
    id: "d12-small-talk",
    moduleId: "D",
    title: "Speaking: Small Talk",
    titleMm: "စကားပြော — ပေါ့ပါးသော စကားစ",
    level: "A2",
    minutes: 16,
    summaryLine: "မိတ်ဆွေသစ်နှင့် ပေါ့ပါးသော စကားစ ဖြစ်စေရန် မေးခွန်း၊ တုံ့ပြန်မှု နှင့် စကားဆက်နည်း။",
    objectives: ["small talk မေးခွန်း ၆ ခု သုံးနိုင်မည်။", "တုံ့ပြန်ပြီး ပြန်မေးနိုင်မည်။", "မသင့်လျော်သည့် ခေါင်းစဉ်ကို ရှောင်နိုင်မည်။"],
    vocab: [
      { en: "How's it going?", mm: "အဆင်ပြေလား", pos: "phrase", example: "How's it going? — Not bad, thanks.", exampleMm: "အဆင်ပြေလား။ — မဆိုးပါဘူး၊ ကျေးဇူးတင်ပါတယ်။", topic: "small talk", level: "A2" },
      { en: "keep in touch", mm: "အဆက်အသွယ် ရှိနေသည်", pos: "phrase", example: "Let's keep in touch.", exampleMm: "အဆက်အသွယ် ရှိနေရအောင်။", topic: "small talk", level: "B1" },
      { en: "catch up", mm: "အခြေအနေ ဖလှယ်သည်", pos: "phrasal verb", example: "We should catch up soon.", exampleMm: "မကြာမီ အခြေအနေ ဖလှယ်သင့်သည်။", topic: "small talk", level: "B1" },
    ],
    sections: [
      {
        heading: "ဘေးကင်းသည့် ခေါင်းစဉ်များ",
        body: [
          "ရာသီဥတု၊ ခရီး၊ အစားအစာ၊ အားလပ်ရက်၊ ကိုယ့်ဝါသနာ၊ ပတ်ဝန်းကျင် — 'Lovely weather today, isn't it?'",
          "မမေးသင့်သည့် ခေါင်းစဉ် — လစာ၊ နိုင်ငံရေး၊ ဘာသာ၊ အသက်၊ ကိုယ်အလေးချိန်၊ အိမ်ထောင်ရေး။",
          "တုံ့ပြန်မှု — 'Not bad, thanks.' 'Pretty good.' 'Can't complain.' 'Same as usual.'",
        ],
        table: { headers: ["မေးခွန်း", "တုံ့ပြန်မှု", "ဆက်မေးခြင်း"], rows: [["How's it going?", "Not bad, thanks.", "And you?"], ["Have you been busy?", "A bit, yes.", "What about you?"], ["Do you live nearby?", "Yes, just around the corner.", "How about you?"]] },
      },
      {
        heading: "စကားဆက်နည်း",
        body: [
          "တုံ့ပြန်ပြီး ပြန်မေးခြင်း (echo question) က စကားကို ဆက်စေသည် — 'Oh, you play badminton? How often do you play?'",
          "ခေါင်းစဉ် ပြောင်းလိုလျှင် — 'That reminds me…' 'Speaking of…' 'By the way…'",
          note,
        ],
      },
    ],
    examples: [
      { en: "Lovely weather today, isn't it?", mm: "ဒီနေ့ ရာသီဥတု ကောင်းတယ် မဟုတ်လား။" },
      { en: "I've just started learning English. How about you?", mm: "ကျွန်တော် အင်္ဂလိပ် စတင် သင်နေတယ်။ မင်းရော။" },
      { en: "Anyway, it was nice talking to you — let's catch up soon.", mm: "ဘာပဲဖြစ်ဖြစ်၊ စကားပြောရတာ ကောင်းခဲ့တယ် — မကြာမီ ပြန်တွေ့ကြရအောင်။" },
    ],
    mistakes: [
      { wrong: "How is your salary?", right: "How is your new job going?", why: "လစာ မေးခြင်းက မသင့်လျော်ပါ။" },
      { wrong: "I am fine, and you are?", right: "I'm fine, thanks — and you?", why: "သဘာဝကျသည့် တုံ့ပြန်မှု ပုံစံ။" },
    ],
    guided: [
      { type: "mcq", prompt: "Nice day, ___ it?", promptMm: "ရွေးပါ။", options: ["is", "isn't", "does", "aren't"], answer: 1, explanation: "အပြု ဝါကျ → အပျက် tag။", topic: "small talk" },
      { type: "fill", prompt: "Not ___, thanks. (အဆင်ပြေသည်)", promptMm: "ဖြည့်ပါ။", answers: ["bad"], explanation: "Not bad သည် သဘာဝကျသည်။", topic: "small talk" },
      { type: "mcq", prompt: "Which topic is safest?", promptMm: "ရွေးပါ။", options: ["Salary", "Religion", "The weather", "Weight"], answer: 2, explanation: "ရာသီဥတု သည် ဘေးကင်းသည်။", topic: "small talk" },
      { type: "correct", prompt: "Correct: How much your salary?", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["What is your salary?", "How much do you earn?"], explanation: "how much + noun ပုံစံ မှားသည် — လစာ မေးခြင်းကို ရှောင်သင့်သည်။", topic: "small talk" },
    ],
    independent: [
      { type: "mcq", prompt: "You have nothing new. Polite reply:", promptMm: "ရွေးပါ။", options: ["Same as usual.", "Nothing.", "Why do you ask?", "None of your business."], answer: 0, explanation: "Same as usual သည် သဘာဝကျသည်။", topic: "small talk" },
      { type: "fill", prompt: "Let's keep in ___ after the course.", promptMm: "ဖြည့်ပါ။", answers: ["touch"], explanation: "keep in touch။", topic: "small talk" },
      { type: "order", prompt: "Arrange the sentence.", promptMm: "စီပါ။", tokens: ["we", "should", "catch", "up", "soon"], answer: "we should catch up soon", explanation: "catch up = အခြေအနေ ဖလှယ်။", topic: "small talk" },
      { type: "translate", prompt: "Translate: မင်း ဒီနားမှာ နေတာလား။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["Do you live around here?", "Do you live nearby?"], explanation: "small talk မေးခွန်း။", topic: "small talk" },
    ],
    review: [
      { q: "မမေးသင့်သည့် ခေါင်းစဉ် ၃ ခု ပြောပါ။", a: "လစာ၊ နိုင်ငံရေး/ဘာသာ၊ ကိုယ်အလေးချိန်။" },
      { q: "echo question ဆိုတာ ဘာလဲ။", a: "တစ်ဖက်လူ ပြောသည့် အချက်ကို ပြန်ကောက်ပြီး မေးခြင်း — 'You play badminton? How often?'" },
    ],
    summary: ["small talk တွင် ဘေးကင်းသည့် ခေါင်းစဉ် ရွေးရသည်။", "တုံ့ပြန်ပြီး ပြန်မေးခြင်းက စကားကို ဆက်စေသည်။", "ခေါင်းစဉ် ပြောင်းရန် by the way / speaking of သုံးသည်။"],
    mastery: ["small talk မေးခွန်း ၆ ခု နှင့် တုံ့ပြန်မှု ၆ ခု ရေးနိုင်သည်။", "စကားစ ၈ ကြောင်း ရေးနိုင်သည်။"],
    topics: ["speaking", "small talk", "functions"],
  },
  {
    id: "d13-presentation-structure",
    moduleId: "D",
    title: "Speaking: Structuring a Presentation",
    titleMm: "စကားပြော — တင်ဆက်မှု ဖွဲ့စည်းပုံ",
    level: "B2",
    minutes: 22,
    summaryLine: "တင်ဆက်မှု တစ်ခုကို နိဒါန်း၊ အဓိက အပိုင်း ၃ ခု နှင့် နိဂုံးဖြင့် ဖွဲ့စည်းခြင်း နှင့် signposting စကားစုများ။",
    objectives: ["တင်ဆက်မှု ဖွဲ့စည်းပုံ ရေးဆွဲနိုင်မည်။", "signposting စကားစု ၈ ခု သုံးနိုင်မည်။", "မေးခွန်း ကိုင်တွယ်နိုင်မည်။"],
    vocab: [
      { en: "outline", mm: "အကြမ်းဖျင်း အစီအစဉ်", pos: "noun", example: "Here is a short outline of my talk.", exampleMm: "ကျွန်တော့် ဟောပြောချက်၏ အကြမ်းဖျင်း အစီအစဉ် ဖြစ်ပါသည်။", topic: "presentation", level: "B2" },
      { en: "highlight", mm: "ပေါ်လွင်စေသည်", pos: "verb", example: "I'd like to highlight two figures.", exampleMm: "ကိန်းဂဏန်း နှစ်ခုကို ပေါ်လွင်စေချင်သည်။", topic: "presentation", level: "B2" },
      { en: "summarise", mm: "အနှစ်ချုပ်သည်", pos: "verb", example: "To summarise, there are three options.", exampleMm: "အနှစ်ချုပ်ရလျှင် ရွေးချယ်စရာ သုံးခု ရှိသည်။", topic: "presentation", level: "B1" },
    ],
    sections: [
      {
        heading: "ဖွဲ့စည်းပုံ",
        body: [
          "နိဒါန်း (၁ မိနစ်) — မိတ်ဆက်၊ ခေါင်းစဉ်၊ ရည်ရွယ်ချက်၊ အစီအစဉ် ကြေညာ — 'Today I'll cover three points.'",
          "အဓိက အပိုင်း (၃ ပိုင်း) — တစ်ပိုင်းလျှင် အဓိကအချက် တစ်ခု + အထောက်အထား/ဥပမာ + အကျဉ်းချုပ်။",
          "နိဂုံး (၁ မိနစ်) — အနှစ်ချုပ်၊ သတိပေးချက်/တောင်းဆိုချက်၊ ကျေးဇူးတင်စကား နှင့် မေးခွန်း ဖိတ်ခေါ်ခြင်း။",
        ],
        table: { headers: ["လုပ်ဆောင်ချက်", "စကားစု", "မှတ်ချက်"], rows: [["စတင်", "Good morning, everyone.", "ပရိသတ်ကို ကြည့်"], ["အစီအစဉ်", "I'll start with…, then…", "signposting"], ["အပိုင်းကူး", "Let's move on to…", "ကူးပြောင်းမှု"], ["နိဂုံး", "To sum up…", "အနှစ်ချုပ်"]] },
      },
      {
        heading: "signposting နှင့် မေးခွန်း",
        body: [
          "အကြောင်းရင်း — 'This brings me to my next point.' ဥပမာ — 'Let me give you an example.' အလေးပေး — 'The key point here is…'",
          "မေးခွန်း မေးလာလျှင် — 'That's a good question.' 'I'll come back to that in a moment.' 'I don't have that figure to hand, but I can follow up by email.'",
          "အချိန် ထိန်းရန် — 'I'm conscious of time, so I'll focus on two examples.'",
          note,
        ],
      },
    ],
    examples: [
      { en: "Today I'll cover three areas: cost, timing and risk.", mm: "ဒီနေ့ ကုန်ကျစရိတ်၊ အချိန် နှင့် အန္တရာယ် သုံးခုကို ဆွေးနွေးမည်။" },
      { en: "Let's move on to the second point.", mm: "ဒုတိယအချက်ကို ဆက်သွားရအောင်။" },
      { en: "To sum up, the project is feasible but needs more testing.", mm: "အနှစ်ချုပ်ရလျှင် ပရောဂျက်က ဖြစ်နိုင်သည်၊ ဒါပေမယ့် စမ်းသပ်မှု ပိုလိုသည်။" },
    ],
    mistakes: [
      { wrong: "Now I will talk about many things.", right: "I'll cover three main points.", why: "အစီအစဉ် ရှင်းလင်းစွာ ကြေညာရသည်။" },
      { wrong: "Finish, thank you, bye.", right: "That brings me to the end. Thank you — I'm happy to take questions.", why: "နိဂုံးကို ပြည့်စုံစွာ ပြောသည်။" },
    ],
    guided: [
      { type: "mcq", prompt: "___ sum up, there are two options.", promptMm: "ရွေးပါ။", options: ["To", "For", "In", "On"], answer: 0, explanation: "To sum up။", topic: "presentation" },
      { type: "fill", prompt: "Let's move ___ to the next point.", promptMm: "ဖြည့်ပါ။", answers: ["on"], explanation: "move on to။", topic: "presentation" },
      { type: "mcq", prompt: "You don't know a figure. Best reply?", promptMm: "ရွေးပါ။", options: ["I have no idea.", "I'll check and follow up by email.", "Ask someone else.", "That's not important."], answer: 1, explanation: "ရိုးသားပြီး ဖြေရှင်းချက် ပေးသည်။", topic: "presentation" },
      { type: "correct", prompt: "Correct: I will talk about three points today, is it?", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["I will talk about three points today.", "Today I'll cover three points."], explanation: "tag မလိုပါ။", topic: "presentation" },
    ],
    independent: [
      { type: "mcq", prompt: "Which phrase introduces a new section?", promptMm: "ရွေးပါ။", options: ["Let me begin with…", "Let's move on to…", "To conclude…", "Thanks for coming."], answer: 1, explanation: "move on to သည် အပိုင်းကူး။", topic: "presentation" },
      { type: "fill", prompt: "The key ___ here is consistency.", promptMm: "ဖြည့်ပါ။", answers: ["point"], explanation: "the key point။", topic: "presentation" },
      { type: "mcq", prompt: "Which is a good closing?", promptMm: "ရွေးပါ။", options: ["Okay, done.", "That's all, bye.", "To sum up, we need two more weeks. Thank you — any questions?", "I forgot the ending."], answer: 2, explanation: "အနှစ်ချုပ် + မေးခွန်းဖိတ်။", topic: "presentation" },
      { type: "translate", prompt: "Translate: ဒီနေ့ ကုန်ကျစရိတ်နဲ့ အချိန်အကြောင်း ပြောမယ်။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["Today I'll talk about cost and timing.", "Today I will talk about cost and timing."], explanation: "talk about + ခေါင်းစဉ်။", topic: "presentation" },
    ],
    review: [
      { q: "တင်ဆက်မှု ဖွဲ့စည်းပုံ ဘာတွေလဲ။", a: "နိဒါန်း၊ အဓိက အပိုင်း ၃ ခု၊ နိဂုံး။" },
      { q: "မသိသည့် အချက်အလက် မေးလာလျှင် ဘယ်လို ဖြေသလဲ။", a: "ရိုးသားစွာ မသိကြောင်း ပြောပြီး နောက်မှ ပြန်ကြားမည်ဟု ကတိပေးသည်။" },
    ],
    summary: ["ဖွဲ့စည်းပုံ ၃ ပိုင်း က တင်ဆက်မှုကို ရှင်းစေသည်။", "signposting စကားစုများက ပရိသတ်ကို လိုက်ပါစေသည်။", "မေးခွန်းကို ယဉ်ကျေးစွာ ကိုင်တွယ်နိုင်သည်။"],
    mastery: ["တင်ဆက်မှု အကြမ်းဖျင်း ၁ ခု (အပိုင်း ၅ ခု) ရေးနိုင်သည်။", "signposting စကားစု ၈ ခု သုံးနိုင်သည်။"],
    topics: ["speaking", "presentation", "academic"],
  },
  {
    id: "d14-negotiation",
    moduleId: "D",
    title: "Speaking: Negotiation Language",
    titleMm: "စကားပြော — ညှိနှိုင်းမှု ဘာသာစကား",
    level: "B2",
    minutes: 20,
    summaryLine: "အဆိုပြုချက်၊ ဆန့်ကျင်အဆိုပြုချက်၊ အပေးအယူ နှင့် သဘောတူညီမှု မှတ်တမ်းတင်ခြင်း စကားစုများ။",
    objectives: ["ညှိနှိုင်းမှု စကားစု ၈ ခု သုံးနိုင်မည်။", "conditional အဆိုပြုချက် ဖွဲ့နိုင်မည်။", "သဘောတူညီမှုကို အနှစ်ချုပ်နိုင်မည်။"],
    vocab: [
      { en: "proposal", mm: "အဆိုပြုချက်", pos: "noun", example: "We made a revised proposal.", exampleMm: "ပြင်ဆင်ထားသည့် အဆိုပြုချက် တင်ခဲ့သည်။", topic: "negotiation", level: "B2" },
      { en: "compromise", mm: "အပေးအယူ", pos: "noun", example: "We reached a compromise.", exampleMm: "ကျွန်တော်တို့ အပေးအယူ တစ်ခုကို ရောက်ခဲ့သည်။", topic: "negotiation", level: "B2" },
      { en: "deadline", mm: "နောက်ဆုံး ရက်စွဲ", pos: "noun", example: "Our deadline is the end of June.", exampleMm: "ကျွန်တော်တို့၏ နောက်ဆုံး ရက်စွဲက ဇွန်လကုန် ဖြစ်သည်။", topic: "negotiation", level: "B1" },
    ],
    sections: [
      {
        heading: "စကားစုများ",
        body: [
          "အဆိုပြုခြင်း — 'We'd like to propose a two-week extension.' 'How about splitting the cost?'",
          "ငြင်းဆန်ခြင်း — 'I'm afraid that won't work for us.' 'That's more than we can afford.' 'We'd need to see some flexibility on price.'",
          "အပေးအယူ — 'If you can deliver by Friday, we'll pay the deposit today.' 'We could accept that provided the warranty is extended.'",
        ],
        table: { headers: ["အခြေအနေ", "စကားစု", "မှတ်ချက်"], rows: [["အဆိုပြု", "We'd like to propose…", "ရှင်းလင်းသော အဆို"], ["အခြေခံ သတ်မှတ်", "Provided that…", "condition"], ["အပေးအယူ", "If you…, we'll…", "first conditional"], ["သဘောတူ", "That works for us.", "အတည်ပြု"]] },
      },
      {
        heading: "ညှိနှိုင်းမှု မှတ်တမ်း",
        body: [
          "အဆုံးတွင် သဘောတူညီမှုကို ပြန်ပြောသည် — 'So, to confirm: you will deliver by 30 June, and we will pay 50 percent in advance.'",
          "မှတ်တမ်းတင်ရန် — 'Let me summarise what we've agreed.' 'I'll put that in writing.'",
          note,
        ],
      },
    ],
    examples: [
      { en: "We'd like to propose a two-week extension.", mm: "နှစ်ပတ် သက်တမ်းတိုးရန် အဆိုပြုချင်ပါတယ်။" },
      { en: "If you can reduce the price by five percent, we'll sign today.", mm: "စျေးနှုန်း ငါးရာခိုင်နှုန်း လျှော့ပေးနိုင်လျှင် ယနေ့ လက်မှတ်ထိုးမည်။" },
      { en: "So, to confirm: delivery by Friday and payment within 30 days.", mm: "အတည်ပြုရလျှင် — သောကြာနေ့ ပို့ဆောင်မည်၊ ရက် ၃၀ အတွင်း ငွေပေးချေမည်။" },
    ],
    mistakes: [
      { wrong: "We are agree with the price.", right: "We agree with the price.", why: "agree သည် ကြိယာ။" },
      { wrong: "If you will reduce the price, we sign.", right: "If you reduce the price, we'll sign.", why: "first conditional — if clause တွင် present။" },
    ],
    guided: [
      { type: "mcq", prompt: "We'd like to ___ a new deadline.", promptMm: "ရွေးပါ။", options: ["propose", "proposal", "proposing", "proposed"], answer: 0, explanation: "propose သည် ကြိယာ။", topic: "negotiation" },
      { type: "fill", prompt: "That ___ for us. (သဘောတူသည်)", promptMm: "ဖြည့်ပါ။", answers: ["works"], explanation: "That works for us။", topic: "negotiation" },
      { type: "mcq", prompt: "Which is the most diplomatic refusal?", promptMm: "ရွေးပါ။", options: ["No.", "I'm afraid that won't work for us.", "Impossible.", "You are joking."], answer: 1, explanation: "I'm afraid … သည် ယဉ်ကျေးသည်။", topic: "negotiation" },
      { type: "correct", prompt: "Correct: We are agree with this plan.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["We agree with this plan."], explanation: "agree ကို am/is/are နှင့် မတွဲပါ။", topic: "negotiation" },
    ],
    independent: [
      { type: "mcq", prompt: "We could accept that ___ the warranty is extended.", promptMm: "ရွေးပါ။", options: ["provided", "provide", "providing that it", "unless"], answer: 0, explanation: "provided (that) = အကယ်၍။", topic: "negotiation" },
      { type: "fill", prompt: "Let me ___ what we have agreed. (အနှစ်ချုပ်)", promptMm: "ဖြည့်ပါ။", answers: ["summarise", "summarize"], explanation: "summarise။", topic: "negotiation" },
      { type: "mcq", prompt: "Which sentence makes a trade-off?", promptMm: "ရွေးပါ။", options: ["Give me a discount.", "If you deliver by Friday, we'll pay today.", "We want everything.", "No deal."], answer: 1, explanation: "If you…, we'll… သည် အပေးအယူ။", topic: "negotiation" },
      { type: "translate", prompt: "Translate: ကျွန်တော်တို့ သဘောတူညီမှု ရပြီးပါပြီ။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["We have reached an agreement.", "We've reached an agreement."], explanation: "reach an agreement။", topic: "negotiation" },
    ],
    review: [
      { q: "provided that သည် ဘာအဓိပ္ပာယ်လဲ။", a: "အကယ်၍ … ဖြစ်မှသာ (အခြေခံ သတ်မှတ်ချက်)။" },
      { q: "ညှိနှိုင်းမှု အဆုံးတွင် ဘာလုပ်သင့်သလဲ။", a: "သဘောတူညီမှုကို အနှစ်ချုပ်ပြီး စာဖြင့် မှတ်တမ်းတင်သည်။" },
    ],
    summary: ["ညှိနှိုင်းမှုတွင် အဆိုပြု၊ ငြင်းဆန် နှင့် အပေးအယူ စကားစုများ ရှိသည်။", "conditional ဖြင့် အပေးအယူ ဖော်ပြသည်။", "အဆုံးတွင် သဘောတူညီမှုကို အနှစ်ချုပ်သည်။"],
    mastery: ["ညှိနှိုင်းမှု စကားစု ၈ ခု သုံးနိုင်သည်။", "အပေးအယူ ဝါကျ ၅ ခု ရေးနိုင်သည်။"],
    topics: ["speaking", "negotiation", "work"],
  },
];

export const moduleDLessonsPart3: Lesson[] = buildLessons(seeds);
