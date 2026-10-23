import type { Lesson } from "@/lib/types";
import { buildLessons, type LessonSeed } from "./builder.ts";

const seeds: LessonSeed[] = [
  {
    id: "b33-participle-clauses",
    moduleId: "B",
    title: "Participle Clauses",
    titleMm: "Participle ဝါကျခွဲများ",
    level: "C1",
    minutes: 22,
    summaryLine: "V-ing နှင့် V3 ဝါကျခွဲများဖြင့် ဝါကျများကို ပိုတိုပြီး စာပေ/ပညာရေး လေသံ ဖြစ်စေနည်း။",
    objectives: ["present/perfect participle clause ဖွဲ့နိုင်မည်။", "past participle clause ဖြင့် passive အဓိပ္ပာယ် ပြနိုင်မည်။", "dangling participle ကို ရှောင်နိုင်မည်။"],
    vocab: [
      { en: "dangling", mm: "ချိတ်ဆက်မှု လွဲနေသော", pos: "adjective", example: "A dangling participle confuses the reader.", exampleMm: "ချိတ်ဆက်မှု လွဲနေသော participle သည် စာဖတ်သူကို ရှုပ်ထွေးစေသည်။", topic: "participles", level: "C1" },
      { en: "concise", mm: "တိုတောင်းကျစ်လျစ်သော", pos: "adjective", example: "Participle clauses make writing concise.", exampleMm: "Participle clause များက စာကို ကျစ်လျစ်စေသည်။", topic: "participles", level: "C1" },
      { en: "simultaneous", mm: "တစ်ချိန်တည်း ဖြစ်သော", pos: "adjective", example: "The two actions were simultaneous.", exampleMm: "လုပ်ဆောင်မှု နှစ်ခုက တစ်ချိန်တည်း ဖြစ်သည်။", topic: "participles", level: "C1" },
    ],
    sections: [
      {
        heading: "အမျိုးအစားများ",
        body: [
          "Present participle (-ing) သည် တစ်ချိန်တည်း သို့မဟုတ် တိုက်ရိုက် ဆက်တိုက် ဖြစ်သည့် လုပ်ဆောင်မှုကို ပြသည် — 'Walking home, I saw an old friend.' (= While I was walking home…)",
          "Perfect participle (having + V3) သည် ရှေးဦး ပြီးစီးမှုကို ပြသည် — 'Having finished the report, she went home.'",
          "Past participle (V3) သည် passive အဓိပ္ပာယ် ဖြစ်သည် — 'Built in 1900, the bridge is still in use.' (= The bridge, which was built in 1900…)",
        ],
        table: { headers: ["ပုံစံ", "အဓိပ္ပာယ်", "ဥပမာ"], rows: [["-ing", "တစ်ချိန်တည်း/ဆက်တိုက်", "Smiling, she opened the door."], ["having + V3", "ပြီးစီးပြီးနောက်", "Having eaten, we left."], ["V3", "passive", "Written in 1990, the book is famous."], ["not + -ing", "ငြင်းပယ်", "Not knowing the way, he asked for help."]] },
      },
      {
        heading: "သတိထားရမည့် အချက်",
        body: [
          "Participle clause ၏ လုပ်ဆောင်သူသည် အဓိက ဝါကျ၏ ကတ္တားနှင့် တူရမည်။ 'Walking home, the rain started.' သည် မှားသည် (မိုးက လမ်းလျှောက်နေသည် မဟုတ်)။",
          "မှန်ကန်စေရန် — 'Walking home, I was caught in the rain.' သို့မဟုတ် 'As I was walking home, the rain started.'",
          "ဤပုံစံသည် တရားဝင် စာနှင့် သတင်းစာ ခေါင်းစဉ်များတွင် အသုံးများပြီး စကားပြောတွင် သိပ်မသုံးပါ။",
        ],
      },
    ],
    examples: [
      { en: "Feeling tired, she decided to rest.", mm: "ပင်ပန်းနေသဖြင့် သူမ အနားယူရန် ဆုံးဖြတ်ခဲ့သည်။" },
      { en: "Having read the email twice, he replied carefully.", mm: "အီးမေးလ်ကို နှစ်ကြိမ် ဖတ်ပြီးနောက် သူ ဂရုတစိုက် ပြန်ခဲ့သည်။" },
      { en: "Surprised by the news, they said nothing.", mm: "သတင်းကြောင့် အံ့အားသင့်ပြီး သူတို့ ဘာမှ မပြောခဲ့ပါ။", note: "passive အဓိပ္ပာယ်။" },
    ],
    mistakes: [
      { wrong: "Walking home, the rain started.", right: "Walking home, I was caught in the rain.", why: "participle ၏ လုပ်ဆောင်သူ နှင့် ကတ္တား တူရမည်။" },
      { wrong: "Having finish the work, he left.", right: "Having finished the work, he left.", why: "having + V3။" },
    ],
    guided: [
      { type: "mcq", prompt: "___ the instructions, she assembled the desk easily.", promptMm: "ရွေးပါ။", options: ["Following", "Followed", "To follow", "Follow"], answer: 0, explanation: "active -ing participle။", topic: "participle clauses" },
      { type: "mcq", prompt: "___ in 1990, the building is now a museum.", promptMm: "ရွေးပါ။", options: ["Building", "Built", "Having built", "To build"], answer: 1, explanation: "passive → V3။", topic: "participle clauses" },
      { type: "fill", prompt: "___ eaten, we paid the bill. (having)", promptMm: "ဖြည့်ပါ။", answers: ["Having"], explanation: "perfect participle။", topic: "participle clauses" },
      { type: "correct", prompt: "Correct: Not know the answer, he stayed silent.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["Not knowing the answer, he stayed silent."], explanation: "not + -ing။", topic: "participle clauses" },
    ],
    independent: [
      { type: "mcq", prompt: "Which sentence is correct?", promptMm: "မှန်ကန်သည့် ဝါကျ ရွေးပါ။", options: ["Driving to work, the radio broke.", "Driving to work, I heard the news.", "Driven to work, I heard the news.", "Drive to work, the radio broke."], answer: 1, explanation: "ကတ္တား တူညီသည်။", topic: "participle clauses" },
      { type: "fill", prompt: "___ by the results, they celebrated. (surprise — passive)", promptMm: "V3 ဖြည့်ပါ။", answers: ["Surprised"], explanation: "passive past participle။", topic: "participle clauses" },
      { type: "mcq", prompt: "'Having submitted the form, she left.' ဆိုသည်မှာ ဘယ်အချိန် အစီအစဉ်လဲ။", promptMm: "ရွေးပါ။", options: ["form တင်ပြီးမှ ထွက်", "ထွက်ပြီးမှ form တင်", "တစ်ချိန်တည်း", "မပြီးသေး"], answer: 0, explanation: "having + V3 = ရှေးဦး ပြီးစီးမှု။", topic: "participle clauses" },
      { type: "translate", prompt: "Translate: ပင်ပန်းနေတာကြောင့် သူ စောစော အိပ်တယ်။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["Feeling tired, he went to bed early.", "Being tired, he went to bed early."], explanation: "participle clause + အဓိက ဝါကျ။", topic: "participle clauses" },
    ],
    review: [
      { q: "Participle clause တွင် ကတ္တား ဘာကြောင့် အရေးကြီးသလဲ။", a: "participle ၏ လုပ်ဆောင်သူသည် အဓိက ဝါကျ၏ ကတ္တားနှင့် တူရမည်။ မဟုတ်လျှင် dangling participle ဖြစ်သည်။" },
      { q: "having + V3 က ဘာကို ပြသလဲ။", a: "အဓိက လုပ်ဆောင်မှု မတိုင်မီ ပြီးစီးနေခြင်းကို ပြသည်။" },
    ],
    summary: ["-ing သည် တစ်ချိန်တည်း/active။", "V3 သည် passive။", "having + V3 သည် ရှေးဦး ပြီးစီးမှု။"],
    mastery: ["ဝါကျ ၁၀ ခုကို participle clause ဖြင့် တိုစေနိုင်သည်။", "dangling participle ၅ ခုကို ပြင်နိုင်သည်။"],
    topics: ["participle clauses", "sentence structure", "academic writing"],
  },
  {
    id: "b34-inversion",
    moduleId: "B",
    title: "Inversion after Negative Adverbs",
    titleMm: "အငြင်းပုဒ် ပြီးနောက် Inversion",
    level: "C1",
    minutes: 20,
    summaryLine: "Never, rarely, hardly, not only ကဲ့သို့ စကားလုံးများဖြင့် ဝါကျ စတင်လျှင် ကြိယာ-ကတ္တား အစီအစဉ် ပြောင်းလဲပုံကို လေ့လာသည်။",
    objectives: ["negative adverb ပါသော ဝါကျတွင် inversion ဖွဲ့နိုင်မည်။", "not only… but also, no sooner… than ကို သုံးနိုင်မည်။", "inversion သည် အလေးပေးမှု ဖြစ်ကြောင်း နားလည်မည်။"],
    vocab: [
      { en: "rarely", mm: "ရှားရှားပါးပါး", pos: "adverb", example: "Rarely have I seen such courage.", exampleMm: "ဒီလို ရဲစွမ်းသတ္တိ ရှားရှားပါးပါး တွေ့ဖူးသည်။", topic: "inversion", level: "C1" },
      { en: "hardly", mm: "မနီးစပ်သလောက်", pos: "adverb", example: "Hardly had we left when it rained.", exampleMm: "ကျွန်တော်တို့ ထွက်ပြီးချင်း မိုးရွာသည်။", topic: "inversion", level: "C1" },
      { en: "emphasis", mm: "အလေးပေးမှု", pos: "noun", example: "Inversion adds emphasis.", exampleMm: "Inversion က အလေးပေးမှု ထည့်သည်။", topic: "inversion", level: "C1" },
    ],
    sections: [
      {
        heading: "ပုံစံ",
        body: [
          "အငြင်းပုဒ် (never, rarely, seldom, hardly, scarcely, barely, little, nowhere, not only, no sooner) ဝါကျ ရှေ့တွင် လာလျှင် auxiliary ကို ကတ္တား ရှေ့သို့ ရွှေ့သည် — 'Never have I seen such a view.'",
          "auxiliary မရှိလျှင် do/does/did ထည့်သည် — 'Rarely does she complain.'",
          "no sooner … than / hardly … when — 'No sooner had he arrived than it started raining.' ဤပုံစံတွင် past perfect + past simple တွဲသည်။",
        ],
        table: { headers: ["ပုံစံ", "သာမန်ဝါကျ", "Inversion"], rows: [["Never", "I have never seen this.", "Never have I seen this."], ["Not only", "She not only sings but also dances.", "Not only does she sing, but she also dances."], ["No sooner", "He had no sooner arrived than…", "No sooner had he arrived than…"], ["Little", "He little knew the truth.", "Little did he know the truth."]] },
      },
      {
        heading: "ဘယ်အခါ သုံးသလဲ",
        body: [
          "Inversion သည် အလေးပေးမှု (emphasis) နှင့် စာပေ လေသံ အတွက် ဖြစ်သည်။ နေ့စဉ် စကားပြောတွင် မလိုအပ်ပါ။",
          "မိန့်ခွန်း၊ ကြော်ငြာ၊ စာပေ နှင့် C1/C2 စာမေးပွဲ စာရေးသားမှုတွင် အမှတ်ရနိုင်သည်။",
          "အလွန်အကျွံ မသုံးပါနှင့် — တစ်ပိုဒ်လျှင် တစ်ကြိမ် နှစ်ကြိမ် လုံလောက်သည်။",
        ],
      },
    ],
    examples: [
      { en: "Never have I tasted such delicious food.", mm: "ဒီလို အရသာရှိသည့် အစားအစာ တစ်ခါမှ မစားဖူးပါ။" },
      { en: "Not only did she finish first, but she also broke the record.", mm: "သူမ ပထမ ပြီးရုံတင်မက စံချိန်လည်း ချိုးခဲ့သည်။" },
      { en: "Hardly had the film started when the power went off.", mm: "ရုပ်ရှင် စပြီးချင်း မီးပျက်သွားသည်။" },
    ],
    mistakes: [
      { wrong: "Never I have seen this.", right: "Never have I seen this.", why: "auxiliary ကို ကတ္တား ရှေ့ ရွှေ့ရသည်။" },
      { wrong: "Rarely she goes out.", right: "Rarely does she go out.", why: "auxiliary မရှိလျှင် do/does/did ထည့်ရသည်။" },
    ],
    guided: [
      { type: "mcq", prompt: "Seldom ___ such a storm.", promptMm: "ရွေးပါ။", options: ["we see", "do we see", "we do see", "see we"], answer: 1, explanation: "seldom + do + subject + verb။", topic: "inversion" },
      { type: "mcq", prompt: "No sooner had we sat down ___ the bell rang.", promptMm: "ရွေးပါ။", options: ["when", "than", "then", "that"], answer: 1, explanation: "no sooner … than။", topic: "inversion" },
      { type: "fill", prompt: "Little ___ he know the truth.", promptMm: "ဖြည့်ပါ။", answers: ["did"], explanation: "little + did + subject + verb။", topic: "inversion" },
      { type: "correct", prompt: "Correct: Not only she sings, but she also dances.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["Not only does she sing, but she also dances."], explanation: "not only ပြီးနောက် inversion။", topic: "inversion" },
    ],
    independent: [
      { type: "mcq", prompt: "Hardly ___ when the phone rang.", promptMm: "ရွေးပါ။", options: ["I had left", "had I left", "I left", "did I left"], answer: 1, explanation: "hardly + had + subject + V3။", topic: "inversion" },
      { type: "fill", prompt: "Never ___ I heard such a story.", promptMm: "ဖြည့်ပါ။", answers: ["have"], explanation: "never + have + subject + V3။", topic: "inversion" },
      { type: "mcq", prompt: "Which sentence is correctly inverted?", promptMm: "မှန်ကန်သည့် ဝါကျ ရွေးပါ။", options: ["Nowhere I could find it.", "Nowhere could I find it.", "Nowhere did I could find it.", "Nowhere I did find it."], answer: 1, explanation: "modal ကို ရှေ့ရွှေ့သည်။", topic: "inversion" },
      { type: "translate", prompt: "Translate: ဒီလို စာအုပ်ကို ငါ တစ်ခါမှ မတွေ့ဖူးဘူး။", promptMm: "inversion ဖြင့် ဘာသာပြန်ပါ။", answers: ["Never have I seen such a book.", "Never have I found such a book."], explanation: "Never + have + subject + V3။", topic: "inversion" },
    ],
    review: [
      { q: "Inversion ကို ဘာကြောင့် သုံးသလဲ။", a: "အလေးပေးမှု နှင့် တရားဝင်/စာပေ လေသံ အတွက်။" },
      { q: "no sooner နှင့် တွဲသည့် စကားလုံး ဘာလဲ။", a: "than — no sooner … than။" },
    ],
    summary: ["အငြင်းပုဒ် ရှေ့တွင် လာလျှင် auxiliary ကို ရှေ့ရွှေ့သည်။", "No sooner…than, Hardly…when သည် ပုံသေတွဲဖက်မှု။", "အလွန်အကျွံ မသုံးသင့်ပါ။"],
    mastery: ["inversion ဝါကျ ၁၀ ခု မှန်ကန်စွာ ဖွဲ့နိုင်သည်။", "သာမန်ဝါကျ ၅ ခုကို inversion သို့ ပြောင်းနိုင်သည်။"],
    topics: ["inversion", "advanced grammar"],
  },
  {
    id: "b35-question-tags",
    moduleId: "B",
    title: "Question Tags and Short Answers",
    titleMm: "Question Tag နှင့် အတိုချုံး အဖြေ",
    level: "B1",
    minutes: 16,
    summaryLine: "စကားပြောတွင် အတည်ပြုချက် တောင်းရန် question tag ဖွဲ့နည်းနှင့် အတိုချုံး အဖြေ ပုံစံ။",
    objectives: ["အပြု/အပျက် tag ကို မှန်ကန်စွာ ဖွဲ့နိုင်မည်။", "special case များ (I am, let's, imperatives) သိမည်။", "tag မေးခွန်းကို အတိုချုံး ဖြေနိုင်မည်။"],
    vocab: [
      { en: "confirm", mm: "အတည်ပြုသည်", pos: "verb", example: "Tags are used to confirm information.", exampleMm: "Tag များကို အချက်အလက် အတည်ပြုရန် သုံးသည်။", topic: "question tags", level: "B1" },
      { en: "agreement", mm: "သဘောတူညီမှု", pos: "noun", example: "Short answers show agreement.", exampleMm: "အတိုချုံး အဖြေများက သဘောတူညီမှုကို ပြသည်။", topic: "question tags", level: "B1" },
      { en: "intonation", mm: "အသံအတက်အကျ", pos: "noun", example: "Rising intonation shows a real question.", exampleMm: "အသံတက်ခြင်းက တကယ့် မေးခွန်း ဖြစ်ကြောင်း ပြသည်။", topic: "question tags", level: "B2" },
    ],
    sections: [
      {
        heading: "အခြေခံ စည်းမျဉ်း",
        body: [
          "အဓိက ဝါကျ အပြုဖြစ်လျှင် tag သည် အပျက်၊ အပျက်ဖြစ်လျှင် tag သည် အပြု — 'You are a student, aren't you?' / 'She doesn't smoke, does she?'",
          "Tag တွင် pronoun ကို သုံးသည်၊ နာမ် မဟုတ်ပါ — 'Tom is here, isn't he?' ('isn't Tom?' မှားသည်)",
          "အဓိက ကြိယာ၏ auxiliary ကို ပြန်သုံးသည်။ auxiliary မရှိလျှင် do/does/did သုံးသည် — 'They live here, don't they?'",
        ],
        table: { headers: ["အခြေအနေ", "Tag", "ဥပမာ"], rows: [["I am", "aren't I?", "I'm late, aren't I?"], ["Let's", "shall we?", "Let's go, shall we?"], ["Imperative", "will you?", "Close the door, will you?"], ["never/hardly", "အပြု tag", "He never helps, does he?"], ["There is", "isn't there?", "There's a problem, isn't there?"]] },
      },
      {
        heading: "အဖြေ ပုံစံ နှင့် လေသံ",
        body: [
          "Yes/No ဖြင့် ဖြေသည် — 'You're coming, aren't you?' → 'Yes, I am.' / 'No, I'm not.' မြန်မာစကားတွင် ပြောင်းပြန် ဖြေလေ့ ရှိသဖြင့် သတိထားပါ — အချက်အလက် မှန်လျှင် Yes ဖြစ်သည်။",
          "အသံကျလျှင် အတည်ပြုချက် တောင်းသည် (အဖြေ မျှော်လင့်သည်)။ အသံတက်လျှင် တကယ့် မေးခွန်း ဖြစ်သည်။",
          "သဘောတူညီမှု ပြရန် — 'So do I.' / 'Neither do I.' ကဲ့သို့ အတိုချုံး ပုံစံများကို သုံးသည်။",
        ],
      },
    ],
    examples: [
      { en: "You have finished, haven't you?", mm: "မင်း ပြီးပြီ မဟုတ်လား။" },
      { en: "She can't swim, can she?", mm: "သူမ ရေမကူးတတ်ဘူး မဟုတ်လား။" },
      { en: "Let's take a taxi, shall we?", mm: "တက္ကစီ ငှားကြရအောင်၊ ကောင်းလား။" },
    ],
    mistakes: [
      { wrong: "You are tired, aren't you are?", right: "You are tired, aren't you?", why: "tag တွင် pronoun တစ်လုံးသာ။" },
      { wrong: "He never calls, doesn't he?", right: "He never calls, does he?", why: "never သည် အငြင်းသဘော ဖြစ်သဖြင့် tag အပြု။" },
    ],
    guided: [
      { type: "mcq", prompt: "You like coffee, ___?", promptMm: "ရွေးပါ။", options: ["do you", "don't you", "are you", "aren't you"], answer: 1, explanation: "အပြု → tag အပျက်။", topic: "question tags" },
      { type: "mcq", prompt: "She isn't here, ___?", promptMm: "ရွေးပါ။", options: ["is she", "isn't she", "does she", "is it"], answer: 0, explanation: "အပျက် → tag အပြု။", topic: "question tags" },
      { type: "fill", prompt: "Let's start, ___ we?", promptMm: "ဖြည့်ပါ။", answers: ["shall"], explanation: "let's → shall we။", topic: "question tags" },
      { type: "correct", prompt: "Correct: I am late, am not I?", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["I am late, aren't I?", "I'm late, aren't I?"], explanation: "I am → aren't I။", topic: "question tags" },
    ],
    independent: [
      { type: "mcq", prompt: "Nobody told you, ___?", promptMm: "ရွေးပါ။", options: ["did they", "didn't they", "did you", "do they"], answer: 0, explanation: "nobody သည် အငြင်းသဘော → tag အပြု + they။", topic: "question tags" },
      { type: "fill", prompt: "There is a problem, ___ there?", promptMm: "ဖြည့်ပါ။", answers: ["isn't"], explanation: "there is → isn't there။", topic: "question tags" },
      { type: "mcq", prompt: "'You didn't call me.' — '___ I was busy.'", promptMm: "အဖြေ ရွေးပါ။", options: ["No,", "Yes,", "Not,", "Never,"], answer: 0, explanation: "မခေါ်ခဲ့သည်ကို အတည်ပြု → No။", topic: "question tags" },
      { type: "translate", prompt: "Translate: မင်း ဒီကို အရင်က ရောက်ဖူးတယ် မဟုတ်လား။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["You have been here before, haven't you?", "You've been here before, haven't you?"], explanation: "present perfect + haven't you।", topic: "question tags" },
    ],
    review: [
      { q: "Tag တွင် ဘာကြောင့် pronoun သုံးသလဲ။", a: "tag သည် ကတ္တားကို ပြန်ရည်ညွှန်းရန် pronoun လိုသည်။" },
      { q: "I am … ၏ tag ဘာလဲ။", a: "aren't I? ဖြစ်သည်။" },
    ],
    summary: ["အပြု ဝါကျ → အပျက် tag။", "အပျက် ဝါကျ → အပြု tag။", "အထူး ပုံစံ — aren't I, shall we, will you။"],
    mastery: ["tag ၁၀ ခုတွင် ၉ ခု မှန်ကန်စွာ ဖွဲ့နိုင်သည်။", "tag မေးခွန်း ၅ ခုကို မှန်ကန်စွာ ဖြေနိုင်သည်။"],
    topics: ["question tags", "speaking"],
  },
  {
    id: "b36-so-neither",
    moduleId: "B",
    title: "So, Neither, Nor and Short Responses",
    titleMm: "So / Neither / Nor ဖြင့် သဘောတူညီမှု ပြခြင်း",
    level: "B1",
    minutes: 16,
    summaryLine: "အခြားသူ ပြောသည့် အချက်ကို 'So do I' / 'Neither have I' ဖြင့် တိုတိုတုတ်တုတ် သဘောတူ/ငြင်းခြင်း။",
    objectives: ["So + auxiliary + subject ကို သုံးနိုင်မည်။", "Neither/Nor + auxiliary + subject ကို သုံးနိုင်မည်။", "So do I နှင့် So I do ကွာခြားချက် သိမည်။"],
    vocab: [
      { en: "neither", mm: "နှစ်ခုလုံး မဟုတ်", pos: "adverb", example: "Neither answer is correct.", exampleMm: "အဖြေ နှစ်ခုလုံး မမှန်ပါ။", topic: "short responses", level: "B1" },
      { en: "either", mm: "တစ်ခုခု (အငြင်းတွင်)", pos: "adverb", example: "I don't like it either.", exampleMm: "ငါလည်း မကြိုက်ဘူး။", topic: "short responses", level: "B1" },
      { en: "agree", mm: "သဘောတူသည်", pos: "verb", example: "I agree with you.", exampleMm: "မင်းနှင့် သဘောတူသည်။", topic: "short responses", level: "A2" },
    ],
    sections: [
      {
        heading: "အပြု သဘောတူမှု",
        body: [
          "So + auxiliary + subject — 'I like tea.' → 'So do I.' auxiliary သည် မူလ ဝါကျ၏ ကာလ/ကြိယာ နှင့် ကိုက်ညီရသည်။",
          "'She can swim.' → 'So can I.' 'I have finished.' → 'So have I.' 'He went home.' → 'So did I.'",
          "be ကြိယာဖြင့် — 'I am tired.' → 'So am I.'",
        ],
        table: { headers: ["မူလ ဝါကျ", "သဘောတူမှု", "မှတ်ချက်"], rows: [["I like coffee.", "So do I.", "present simple → do"], ["I am hungry.", "So am I.", "be → am"], ["I have seen it.", "So have I.", "present perfect → have"], ["I can't swim.", "Neither can I.", "အငြင်း → neither"], ["I didn't go.", "Nor did I.", "nor + did"]] },
      },
      {
        heading: "So I do နှင့် ကွာခြားချက်",
        body: [
          "'So do I' သည် အခြားသူ၏ စကားကို သဘောတူသည်။ 'So I do' သည် ကိုယ်တိုင် ပြောခဲ့သည့်/သိထားသည့် အရာကို အတည်ပြုသည် — 'You are late.' 'So I am!' (ဟုတ်တယ် ငါ နောက်ကျတယ်)",
          "အငြင်းတွင် 'neither' သို့မဟုတ် 'nor' ကို သုံးပြီး auxiliary သည် အပြု ပုံစံ ဖြစ်သည် — 'I don't smoke.' → 'Neither do I.'",
          "စကားပြောတွင် 'Me neither.' / 'Me too.' ကို ပိုတိုပြီး သုံးလေ့ ရှိသည် (တရားဝင် မဟုတ်)။",
        ],
      },
    ],
    examples: [
      { en: "I love Burmese food. — So do I.", mm: "မြန်မာ အစားအစာ ကြိုက်တယ်။ — ငါလည်း ကြိုက်တယ်။" },
      { en: "She hasn't read the book. — Neither have I.", mm: "သူမ စာအုပ် မဖတ်ရသေးဘူး။ — ငါလည်း မဖတ်ရသေးဘူး။" },
      { en: "You're early today! — So I am.", mm: "ဒီနေ့ စောတယ်! — ဟုတ်တယ် စောတယ်။" },
    ],
    mistakes: [
      { wrong: "So I do (သဘောတူရန်)", right: "So do I.", why: "သဘောတူရန် auxiliary ကို ရှေ့ထားသည်။" },
      { wrong: "Neither I can.", right: "Neither can I.", why: "auxiliary ကို ကတ္တား ရှေ့ထားရသည်။" },
    ],
    guided: [
      { type: "mcq", prompt: "I can drive. — ___", promptMm: "ရွေးပါ။", options: ["So I can.", "So can I.", "So do I.", "Neither can I."], answer: 1, explanation: "can → so can I။", topic: "short responses" },
      { type: "mcq", prompt: "He doesn't like fish. — ___", promptMm: "ရွေးပါ။", options: ["Neither do I.", "Neither I do.", "So do I.", "Neither don't I."], answer: 0, explanation: "အငြင်း → neither + do + I။", topic: "short responses" },
      { type: "fill", prompt: "I have never been there. — ___ have I.", promptMm: "ဖြည့်ပါ။", answers: ["Neither", "Nor"], explanation: "neither/nor + have + I။", topic: "short responses" },
      { type: "correct", prompt: "Correct: So I have finished.", promptMm: "သဘောတူမှု ဝါကျ ပြင်ပါ။", answers: ["So have I."], explanation: "so + auxiliary + subject။", topic: "short responses" },
    ],
    independent: [
      { type: "mcq", prompt: "We went to Bagan last year. — ___", promptMm: "ရွေးပါ။", options: ["So did we.", "So we did.", "So do we.", "Neither did we."], answer: 0, explanation: "past simple → did။", topic: "short responses" },
      { type: "fill", prompt: "I'm not ready. — Neither ___ I.", promptMm: "ဖြည့်ပါ။", answers: ["am"], explanation: "be → am။", topic: "short responses" },
      { type: "mcq", prompt: "'You're late.' — 'So ___!'", promptMm: "အတည်ပြု ရွေးပါ။", options: ["am I", "I am", "do I", "I do"], answer: 1, explanation: "So I am = ဟုတ်တယ် ငါ နောက်ကျတယ်။", topic: "short responses" },
      { type: "translate", prompt: "Translate: ငါလည်း ဒီရုပ်ရှင်ကို မကြည့်ဖူးဘူး။ (တစ်ဖက်လူ မကြည့်ဖူးဟု ပြောပြီး)", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["Neither have I.", "Nor have I.", "I haven't either."], explanation: "neither + auxiliary + subject။", topic: "short responses" },
    ],
    review: [
      { q: "So do I နှင့် So I do ကွာခြားချက် ဘာလဲ။", a: "So do I = အခြားသူကို သဘောတူ။ So I do = ကိုယ်တိုင် အတည်ပြု။" },
      { q: "neither ပြီးနောက် auxiliary သည် ဘယ်လို ဖြစ်သလဲ။", a: "အပြု ပုံစံ ဖြစ်သည် — Neither do I, Neither can I။" },
    ],
    summary: ["So + auxiliary + subject = အပြု သဘောတူ။", "Neither/Nor + auxiliary + subject = အငြင်း သဘောတူ။", "auxiliary သည် ကာလနှင့် ကိုက်ညီရသည်။"],
    mastery: ["သဘောတူမှု ဝါကျ ၁၀ ခု မှန်ကန်စွာ ဖွဲ့နိုင်သည်။", "စကားပြောတွင် တုံ့ပြန်မှု ၅ မျိုး သုံးနိုင်သည်။"],
    topics: ["short responses", "speaking"],
  },
  {
    id: "b37-comparative-structures",
    moduleId: "B",
    title: "Comparative Structures in Depth",
    titleMm: "နှိုင်းယှဉ်မှု ပုံစံ အသေးစိတ်",
    level: "B2",
    minutes: 22,
    summaryLine: "the more…the more, as…as, twice as…as, not nearly as…as ကဲ့သို့ နှိုင်းယှဉ်မှု ပုံစံ အဆင့်မြင့်များ။",
    objectives: ["as…as / not as…as ကို တိကျစွာ သုံးနိုင်မည်။", "the comparative, the comparative ပုံစံ ဖွဲ့နိုင်မည်။", "double comparative နှင့် ပမာဏ ဖော်ပြချက် သုံးနိုင်မည်။"],
    vocab: [
      { en: "slightly", mm: "အနည်းငယ်", pos: "adverb", example: "This one is slightly cheaper.", exampleMm: "ဒီတစ်ခုက အနည်းငယ် စျေးသက်သာသည်။", topic: "comparisons", level: "B2" },
      { en: "considerably", mm: "သိသိသာသာ", pos: "adverb", example: "The new model is considerably faster.", exampleMm: "မော်ဒယ်အသစ်က သိသိသာသာ မြန်သည်။", topic: "comparisons", level: "B2" },
      { en: "twice", mm: "နှစ်ဆ", pos: "adverb", example: "It costs twice as much.", exampleMm: "နှစ်ဆ ကုန်ကျသည်။", topic: "comparisons", level: "B1" },
    ],
    sections: [
      {
        heading: "as … as နှင့် ပမာဏ ဖော်ပြချက်",
        body: [
          "as + adjective + as — တူညီမှု — 'She is as tall as her brother.' ငြင်းပယ် — 'He isn't as fast as he looks.'",
          "ပမာဏ ကွာခြားချက် — much/far/a lot + comparative, slightly/a bit + comparative — 'This is much better.' 'It is slightly colder today.'",
          "အဆ ကိန်း — twice/three times + as … as — 'The new flat is twice as big as the old one.'",
        ],
        table: { headers: ["ပုံစံ", "အဓိပ္ပာယ်", "ဥပမာ"], rows: [["as … as", "တူသည်", "as heavy as"], ["not as … as", "မတူ/လျော့သည်", "not as easy as"], ["the more …, the more …", "ပိုလေ ပိုလေ", "The more you practise, the better you get."], ["comparative + and + comparative", "တဖြည်းဖြည်း", "It is getting colder and colder."], ["by far + superlative", "အလွန်ကွာခြား", "It is by far the best."]] },
      },
      {
        heading: "the more … the more …",
        body: [
          "ပုံစံ — the + comparative + subject + verb, the + comparative + subject + verb — 'The earlier you leave, the less traffic you meet.'",
          "အရေးကြီးချက် — the ကို နှစ်ဖက်လုံးတွင် ထည့်ရသည်။ 'More you study, better you get' မှားသည်။",
          "'the less … the more …' ပုံစံလည်း ရှိသည် — 'The less you worry, the happier you feel.'",
        ],
      },
    ],
    examples: [
      { en: "This bag is not nearly as expensive as that one.", mm: "ဒီအိတ်က ဟိုတစ်ခုလောက် မကုန်ကျပါ။" },
      { en: "The more you read, the wider your vocabulary becomes.", mm: "ပိုဖတ်လေ ဝေါဟာရ ပိုကျယ်လေ။" },
      { en: "Yangon is much busier than Taunggyi.", mm: "ရန်ကုန်က တောင်ကြီးထက် အများကြီး လူထူသည်။" },
    ],
    mistakes: [
      { wrong: "She is more taller than me.", right: "She is taller than me.", why: "double comparative မသုံးပါ။" },
      { wrong: "The more you practise, better you get.", right: "The more you practise, the better you get.", why: "the နှစ်ဖက်လုံး လိုသည်။" },
    ],
    guided: [
      { type: "mcq", prompt: "This phone is ___ as that one.", promptMm: "ရွေးပါ။", options: ["twice as expensive", "twice expensive", "as twice expensive", "expensive twice"], answer: 0, explanation: "twice as … as။", topic: "comparisons" },
      { type: "mcq", prompt: "___ you start, the sooner you finish.", promptMm: "ရွေးပါ။", options: ["The earlier", "Earlier", "The early", "Early"], answer: 0, explanation: "the + comparative။", topic: "comparisons" },
      { type: "fill", prompt: "It is getting ___ and ___ (cold).", promptMm: "ဖြည့်ပါ။", answers: ["colder colder", "colder, colder"], explanation: "comparative + and + comparative။", topic: "comparisons" },
      { type: "correct", prompt: "Correct: He is more smarter than his brother.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["He is smarter than his brother."], explanation: "double comparative ဖယ်ရသည်။", topic: "comparisons" },
    ],
    independent: [
      { type: "mcq", prompt: "This exam was ___ harder than the last one.", promptMm: "ရွေးပါ။", options: ["very", "much", "more", "too"], answer: 1, explanation: "comparative ကို much ဖြင့် အလေးပေးသည်။", topic: "comparisons" },
      { type: "fill", prompt: "She is not as confident ___ she appears.", promptMm: "ဖြည့်ပါ။", answers: ["as"], explanation: "not as … as။", topic: "comparisons" },
      { type: "mcq", prompt: "Which is correct?", promptMm: "မှန်ကန်သည့် ဝါကျ ရွေးပါ။", options: ["The less you eat, the more healthy you feel.", "Less you eat, more healthy you feel.", "The less you eat, more healthy you feel.", "The less you eat, the more healthier you feel."], answer: 0, explanation: "the + comparative နှစ်ဖက်။", topic: "comparisons" },
      { type: "translate", prompt: "Translate: မင်း စောလေ ပိုကောင်းလေ။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["The earlier, the better.", "The sooner, the better."], explanation: "the + comparative, the + comparative။", topic: "comparisons" },
    ],
    review: [
      { q: "double comparative ဆိုတာ ဘာလဲ။", a: "'more taller' ကဲ့သို့ -er နှင့် more ကို တွဲသုံးခြင်း ဖြစ်ပြီး မှားသည်။" },
      { q: "the more…the more ပုံစံတွင် the ကို ဘယ်နှစ်ခု ထည့်ရသလဲ။", a: "ဝါကျခွဲ နှစ်ခုလုံးတွင် ထည့်ရသည်။" },
    ],
    summary: ["as…as သည် တူညီမှု၊ not as…as သည် လျော့နည်းမှု။", "the + comparative, the + comparative သည် အချိုးကျ ဆက်စပ်မှု။", "double comparative ကို ရှောင်ရသည်။"],
    mastery: ["နှိုင်းယှဉ်မှု ကွက်လပ် ၁၀ ခုတွင် ၈ ခု မှန်သည်။", "the more…the more ဝါကျ ၅ ခု ရေးနိုင်သည်။"],
    topics: ["comparisons", "adjectives"],
  },
];

export const moduleBLessonsPart7: Lesson[] = buildLessons(seeds);
