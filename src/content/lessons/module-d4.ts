import type { Lesson } from "@/lib/types";
import { buildLessons, type LessonSeed } from "./builder.ts";

const note = "ဤသင်ခန်းစာသည် စာသားအခြေခံ ဖြစ်သည်။ အသံ ခွဲခြမ်းစိတ်ဖြာမှု မပါဝင်ပါ — ကိုယ်တိုင် အသံဖမ်းပြီး ပြန်နားထောင်ခြင်းဖြင့် လေ့ကျင့်ပါ။";

const seeds: LessonSeed[] = [
  {
    id: "d15-job-interview",
    moduleId: "D",
    title: "Speaking: The Panel Interview",
    titleMm: "စကားပြော — အဖွဲ့လိုက် အင်တာဗျူ",
    level: "C1",
    minutes: 22,
    summaryLine: "အဖွဲ့လိုက် အင်တာဗျူတွင် မေးခွန်းများကို စနစ်တကျ ဖြေခြင်း၊ အချိန် ခွဲဝေခြင်း နှင့် ခက်ခဲသည့် မေးခွန်း ကိုင်တွယ်ခြင်း။",
    objectives: ["အဖွဲ့လိုက် အင်တာဗျူ အခြေအနေကို နားလည်မည်။", "ခက်ခဲသည့် မေးခွန်းကို ဖွဲ့စည်းပုံဖြင့် ဖြေနိုင်မည်။", "မိမိ အတွေ့အကြုံကို တိကျသော ဥပမာဖြင့် ဖော်ပြနိုင်မည်။"],
    vocab: [
      { en: "panel", mm: "အင်တာဗျူ ဖြေသည့် အဖွဲ့", pos: "noun", example: "The panel asked three questions each.", exampleMm: "အဖွဲ့က တစ်ဦးလျှင် မေးခွန်း သုံးခု မေးခဲ့သည်။", topic: "interview", level: "B2" },
      { en: "competency", mm: "စွမ်းရည်", pos: "noun", example: "The questions test key competencies.", exampleMm: "မေးခွန်းများသည် အဓိက စွမ်းရည်များကို စမ်းသပ်သည်။", topic: "interview", level: "C1" },
      { en: "clarify", mm: "ရှင်းလင်းစေသည်", pos: "verb", example: "Could I clarify the context first?", exampleMm: "အခြေအနေကို အရင် ရှင်းလင်းနိုင်ပါသလား။", topic: "interview", level: "B2" },
    ],
    sections: [
      {
        heading: "အဖွဲ့လိုက် အင်တာဗျူ တွင် မျက်နှာမူရမည့် အခြေအနေ",
        body: [
          "မေးခွန်း တစ်ခုကို မေးသူကို အရင် ကြည့်ပြီး ဖြေဆည်းသည်။ အခြား အဖွဲ့ဝင်များကိုလည်း အခါအားလျော်စွာ ကြည့်သည်။",
          "မေးခွန်း နှစ်ခု တစ်ပြိုင်နက် လာလျှင် — 'Let me take the second part first, then I'll come back to the first.'",
          "အငြင်းပွားဖွယ် မေးခွန်း — 'That's a difficult one. My view is… because…' ဟု ဖွဲ့စည်းပုံဖြင့် ဖြေသည်။ ဖိစီးမှုအောက်တွင် တိတ်ဆိတ်နေခြင်းထက် ခေတ္တ စဉ်းစားကြောင်း ပြောခြင်းက ကောင်းသည် — 'Let me think about that for a moment.'",
        ],
        table: { headers: ["မေးခွန်း အမျိုးအစား", "ဖြေပုံ", "သတိထားရန်"], rows: [["Behavioural", "STAR ပုံစံ", "တိကျသော ဥပမာ"], ["Situational", "ခြေလှမ်းများ အစီအစဉ်", "အဆင့်လိုက် ပြောပါ"], ["Pressure", "စဉ်းစားပြီး ရိုးသားစွာ ဖြေ", "ခန့်မှန်း မဖြေပါ"], ["About us", "ကုမ္ပဏီ အချက်အလက် ပြ", "တကယ် လေ့လာထားရန်"]] },
      },
      {
        heading: "ခက်ခဲသည့် မေးခွန်းများ",
        body: [
          "'Why did you leave your last job?' — အပြစ်တင်သည့် လေသံ မပါဘဲ ရှေ့ဆက် ဖွံ့ဖြိုးလိုမှုကို ဖော်ပြသည် — 'I wanted more responsibility in data analysis.'",
          "'What would you do if you disagreed with your manager?' — လုပ်ငန်းစဉ်ကို ဖော်ပြသည် — 'I'd ask for a private discussion, present the evidence, and follow the decision if it stands.'",
          note,
        ],
      },
    ],
    examples: [
      { en: "Let me think about that for a moment, then I'll give you a specific example.", mm: "ခဏ စဉ်းစားပြီး တိကျသည့် ဥပမာ ပေးပါမည်။" },
      { en: "In my previous role, I reduced reporting time by half.", mm: "ယခင် ရာထူးတွင် အစီရင်ခံစာ ပြုစုချိန်ကို ထက်ဝက် လျှော့ချခဲ့သည်။" },
      { en: "I'd welcome the chance to discuss that in more detail.", mm: "ထိုအကြောင်း အသေးစိတ် ဆွေးနွေးခွင့် ရလျှင် ဝမ်းသာပါသည်။" },
    ],
    mistakes: [
      { wrong: "My last boss was terrible.", right: "I was looking for a role with more scope.", why: "အလုပ်ရှင်ဟောင်းကို အပြစ်တင်ခြင်းက အနုတ်လက္ခဏာ ဖြစ်စေသည်။" },
      { wrong: "I don't know anything about that.", right: "I haven't worked with that directly, but I've handled similar tasks.", why: "အတွေ့အကြုံ မရှိသည့်တိုင် ဆက်စပ်မှုကို ပြသည်။" },
    ],
    guided: [
      { type: "mcq", prompt: "Two questions at once. Best opening?", promptMm: "ရွေးပါ။", options: ["I don't know.", "Let me take the second part first.", "Ask again later.", "Which one?"], answer: 1, explanation: "အစီအစဉ်ဖြင့် ကိုင်တွယ်သည်။", topic: "interview" },
      { type: "fill", prompt: "Let me ___ about that for a moment.", promptMm: "ဖြည့်ပါ။", answers: ["think"], explanation: "think about။", topic: "interview" },
      { type: "mcq", prompt: "Which answer is safest about a former employer?", promptMm: "ရွေးပါ။", options: ["They were unfair.", "I was looking for more responsibility.", "The manager was stupid.", "Everyone there was lazy."], answer: 1, explanation: "ရှေ့ဆက် ဖွံ့ဖြိုးလိုမှုကို အာရုံစိုက်သည်။", topic: "interview" },
      { type: "correct", prompt: "Correct: I have not experience in that area.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["I don't have experience in that area.", "I have no experience in that area."], explanation: "have experience / have no experience။", topic: "interview" },
    ],
    independent: [
      { type: "mcq", prompt: "Which phrase asks for clarification politely?", promptMm: "ရွေးပါ။", options: ["What?", "Do you mean the budget or the timeline?", "Speak clearly.", "I don't understand anything."], answer: 1, explanation: "တိကျစွာ ရွေးချယ်၍ မေးသည်။", topic: "interview" },
      { type: "fill", prompt: "I'd ___ the chance to discuss it further.", promptMm: "ဖြည့်ပါ။", answers: ["welcome"], explanation: "welcome the chance။", topic: "interview" },
      { type: "mcq", prompt: "Which structure best answers a behavioural question?", promptMm: "ရွေးပါ။", options: ["Opinion only", "Situation → Task → Action → Result", "Random examples", "Yes/No only"], answer: 1, explanation: "STAR (Situation, Task, Action, Result) ပုံစံဖြင့် ဖြေသည်။", topic: "interview" },
      { type: "translate", prompt: "Translate: ကျွန်တော် ဒီအလုပ်အတွက် ဘာကြောင့် သင့်တော်လဲဆိုတာ ရှင်းပြပါ။", promptMm: "အင်္ဂလိပ် အဖြေ ၂ ကြောင်း ရေးပါ။", answers: ["I am a good fit because my skills match the role and I learn quickly.", "I believe I'm a strong candidate because I have relevant experience."], explanation: "because + အကြောင်းရင်း ၂ ခု။", topic: "interview" },
    ],
    review: [
      { q: "အဖွဲ့လိုက် အင်တာဗျူတွင် မေးခွန်း နှစ်ခု တစ်ပြိုင်နက် လာလျှင် ဘယ်လို လုပ်သလဲ။", a: "အစီအစဉ် ကြေညာပြီး တစ်ခုချင်း ဖြေသည်။" },
      { q: "အလုပ်ရှင်ဟောင်း အကြောင်း ဘယ်လို ပြောသင့်သလဲ။", a: "အပြစ်မတင်ဘဲ ရှေ့ဆက် ဖွံ့ဖြိုးလိုမှုကို အာရုံစိုက်ပြောသည်။" },
    ],
    summary: ["အဖွဲ့လိုက် အင်တာဗျူတွင် ဖွဲ့စည်းပုံနှင့် အစီအစဉ် ကြေညာမှု အရေးကြီးသည်။", "ခက်ခဲသည့် မေးခွန်းကို စဉ်းစားချိန် တောင်းနိုင်သည်။", "အတွေ့အကြုံကို STAR ဖြင့် ဖော်ပြသည်။"],
    mastery: ["အင်တာဗျူ အဖြေ ၅ ခုကို STAR ဖြင့် ရေးနိုင်သည်။", "ခက်ခဲသည့် မေးခွန်း ၅ ခုအတွက် ဖြေနည်း ရှိသည်။"],
    topics: ["speaking", "interview", "work"],
  },
  {
    id: "d16-advanced-storytelling",
    moduleId: "D",
    title: "Speaking: Advanced Storytelling",
    titleMm: "စကားပြော — အဆင့်မြင့် ဇာတ်လမ်းပြောခြင်း",
    level: "C1",
    minutes: 24,
    summaryLine: "တင်းမာမှု တည်ဆောက်ခြင်း၊ အသံ ပြောင်းလဲခြင်း နှင့် အဓိပ္ပာယ် နှစ်လွှာဖြင့် ဇာတ်လမ်း ပြောနည်း။",
    objectives: ["ဇာတ်လမ်းတွင် တင်းမာမှု တည်ဆောက်နိုင်မည်။", "အသံ နှင့် နှုန်း ပြောင်းလဲမှုကို စီစဉ်နိုင်မည်။", "ဇာတ်လမ်းမှ သင်ခန်းစာကို ရှင်းလင်းစွာ ချိတ်ဆက်နိုင်မည်။"],
    vocab: [
      { en: "build-up", mm: "တဖြည်းဖြည်း တိုးလာမှု", pos: "noun", example: "The build-up to the ending was slow.", exampleMm: "အဆုံးသတ်ဆီ တဖြည်းဖြည်း တိုးလာမှုက နှေးခဲ့သည်။", topic: "storytelling", level: "C1" },
      { en: "turn of events", mm: "အခြေအနေ လှည့်ပတ်မှု", pos: "noun", example: "There was an unexpected turn of events.", exampleMm: "မမျှော်လင့်သည့် အခြေအနေ လှည့်ပတ်မှု ရှိခဲ့သည်။", topic: "storytelling", level: "C1" },
      { en: "punchline", mm: "ဇာတ်လမ်း/ဟာသ ၏ အထွတ်အထိပ်", pos: "noun", example: "He saved the best detail for the punchline.", exampleMm: "အကောင်းဆုံး အချက်ကို အထွတ်အထိပ်အတွက် ချန်ထားခဲ့သည်။", topic: "storytelling", level: "C1" },
    ],
    sections: [
      {
        heading: "တင်းမာမှု တည်ဆောက်ခြင်း",
        body: [
          "အချက်အလက်ကို တဖြည်းဖြည်း ဖော်ပြပြီး ရလဒ်ကို နောက်ဆုံးတွင် ထုတ်သည် — 'I checked the email again. Then I checked the attachment. Then I saw the date.'",
          "အချိန် ခုန်ခြင်း — 'Three hours later…', 'By the time we arrived…' သည် ဇာတ်လမ်းကို မြန်စေသည်။",
          "အာရုံ ဖမ်းစားမှု — အနံ့၊ အသံ၊ အပူချိန် ကဲ့သို့ အာရုံခံ ဖော်ပြချက်များ ထည့်သည် — 'The room smelled of rain.'",
        ],
        table: { headers: ["နည်းစနစ်", "အကျိုးသက်ရောက်မှု", "ဥပမာ"], rows: [["short sentences", "တင်းမာမှု", "Nobody spoke. Then the phone rang."], ["repetition", "အလေးပေး", "I waited. And waited."], ["direct speech", "အသက်ဝင်မှု", "She said, 'Don't open it.'"], ["pause", "အထွတ်အထိပ်", "…and that's when I saw it."]] },
      },
      {
        heading: "အဓိပ္ပာယ် နှစ်လွှာ",
        body: [
          "ဇာတ်လမ်းတစ်ခုကို ရိုးရိုး ဖြစ်ရပ်အဖြစ် ပြောနိုင်သလို ပိုနက်ရှိုင်းသည့် အဓိပ္ပာယ်ဖြင့်လည်း ပြောနိုင်သည် — 'In the end, the lost notebook taught me more than the exam did.'",
          "သင်ခန်းစာကို အတင်းအကြပ် မထည့်ပါနှင့်။ ဇာတ်လမ်းက သဘာဝကျစွာ ပေးသည့် အချက်ကို ကောက်ယူပြသည်။",
          note,
        ],
      },
    ],
    examples: [
      { en: "I waited. And waited. Then, at midnight, the phone finally rang.", mm: "စောင့်ခဲ့သည်။ ဆက်စောင့်ခဲ့သည်။ ထို့နောက် သန်းခေါင်တွင် ဖုန်း လာခဲ့သည်။" },
      { en: "She said, 'Don't open it until I arrive.' So of course, I opened it.", mm: "သူမက 'ငါမရောက်မချင်း မဖွင့်နဲ့' ဟု ဆိုသည်။ ဒါကြောင့် ဖွင့်လိုက်မိသည်။" },
      { en: "Looking back, that small mistake changed my whole career.", mm: "ပြန်ကြည့်လျှင် ထိုအမှားငယ်က ကျွန်တော့် အသက်မွေးဝမ်းကျောင်း တစ်ခုလုံးကို ပြောင်းလဲစေခဲ့သည်။" },
    ],
    mistakes: [
      { wrong: "And then and then and then we went.", right: "After that, we set off.", why: "ထပ်ခါတလဲလဲ မသုံးပါ။" },
      { wrong: "The story's moral is you must always be careful. (အတင်းအကြပ်)", right: "What stayed with me was how quickly plans can change.", why: "သင်ခန်းစာကို သဘာဝကျစွာ ချိတ်ဆက်သည်။" },
    ],
    guided: [
      { type: "mcq", prompt: "Which sentence creates tension?", promptMm: "ရွေးပါ။", options: ["We waited.", "We waited. And waited. Then the door opened.", "The door opened and we went in.", "It was a normal day."], answer: 1, explanation: "တိုတောင်းသည့် ဝါကျ ထပ်ခြင်းက တင်းမာမှု တည်ဆောက်သည်။", topic: "storytelling" },
      { type: "fill", prompt: "There was an unexpected turn of ___. (အခြေအနေ လှည့်ပတ်မှု)", promptMm: "ဖြည့်ပါ။", answers: ["events"], explanation: "turn of events။", topic: "storytelling" },
      { type: "mcq", prompt: "Which adds sensory detail?", promptMm: "ရွေးပါ။", options: ["It was good.", "The room smelled of rain and old paper.", "I liked it.", "Nothing happened."], answer: 1, explanation: "အနံ့ ဖော်ပြချက်။", topic: "storytelling" },
      { type: "correct", prompt: "Correct: She said me to wait outside.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["She told me to wait outside."], explanation: "tell + object + to + verb။", topic: "storytelling" },
    ],
    independent: [
      { type: "mcq", prompt: "Direct speech is used to ___.", promptMm: "ရွေးပါ။", options: ["shorten the story", "bring a scene to life", "avoid grammar", "summarise"], answer: 1, explanation: "တိုက်ရိုက် ပြောစကားက ဇာတ်ကွက်ကို အသက်ဝင်စေသည်။", topic: "storytelling" },
      { type: "fill", prompt: "___ back, I realise how lucky I was.", promptMm: "ဖြည့်ပါ။", answers: ["Looking"], explanation: "Looking back = ပြန်ကြည့်လျှင်။", topic: "storytelling" },
      { type: "mcq", prompt: "Which is the best ending?", promptMm: "ရွေးပါ။", options: ["That's it.", "In the end, we missed the train — and it turned out to be lucky.", "I have no more to say.", "The end, bye."], answer: 1, explanation: "အဓိပ္ပာယ် နှစ်လွှာ ပါသည်။", topic: "storytelling" },
      { type: "translate", prompt: "Translate: အဲဒီအချိန်မှာ ငါ ဘာလုပ်ရမှန်း မသိခဲ့ဘူး။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["At that moment, I didn't know what to do.", "At that point, I had no idea what to do."], explanation: "at that moment + past simple။", topic: "storytelling" },
    ],
    review: [
      { q: "တင်းမာမှု တည်ဆောက်ရန် ဘယ်နည်းစနစ်များ သုံးသလဲ။", a: "တိုတောင်းသည့် ဝါကျ၊ ထပ်ခါတလဲလဲ၊ တိုက်ရိုက် ပြောစကား နှင့် ရပ်တန့်မှု။" },
      { q: "သင်ခန်းစာကို ဘယ်လို ချိတ်ဆက်သလဲ။", a: "ဇာတ်လမ်းက သဘာဝကျစွာ ပေးသည့် အချက်ကို ကောက်ယူပြသည်။" },
    ],
    summary: ["တင်းမာမှုကို ဖွဲ့စည်းပုံနှင့် နှုန်းဖြင့် တည်ဆောက်သည်။", "အာရုံခံ ဖော်ပြချက်နှင့် တိုက်ရိုက် ပြောစကားက ဇာတ်ကွက်ကို အသက်ဝင်စေသည်။", "သင်ခန်းစာကို သဘာဝကျစွာ ချိတ်ဆက်သည်။"],
    mastery: ["ဇာတ်လမ်း ၁ ခုကို စာကြောင်း ၂၀ ဖြင့် ရေးနိုင်သည်။", "တင်းမာမှု တည်ဆောက်သည့် နည်းစနစ် ၄ ခု သုံးနိုင်သည်။"],
    topics: ["speaking", "storytelling", "rhetoric"],
  },
  {
    id: "d17-vowel-sounds",
    moduleId: "D",
    title: "Pronunciation: Vowel Sounds",
    titleMm: "အသံထွက် — သရသံများ",
    level: "B1",
    minutes: 20,
    summaryLine: "အင်္ဂလိပ် သရသံ ၁၂ ခုကို အုပ်စုခွဲ၍ ခွဲခြားနားထောင်ခြင်း နှင့် စာလုံးပေါင်း နှင့် အသံ မတူညီမှု။",
    objectives: ["short/long vowel ကွာခြားချက် သိမည်။", "အနီးစပ် သရသံ အတွဲများကို ခွဲခြားနိုင်မည်။", "schwa /ə/ အကြောင်း နားလည်မည်။"],
    vocab: [
      { en: "ship / sheep", mm: "သင်္ဘော / သိုး", pos: "vowel pair", example: "/ɪ/ versus /iː/", exampleMm: "ship = /ɪ/, sheep = /iː/။", topic: "pronunciation", level: "B1" },
      { en: "schwa", mm: "အလယ်သရ /ə/", pos: "noun", example: "The 'a' in 'about' is a schwa.", exampleMm: "'about' ရှိ 'a' သည် schwa ဖြစ်သည်။", topic: "pronunciation", level: "B2" },
      { en: "syllable", mm: "အသံအစု (စာလုံးအသံ)", pos: "noun", example: "'English' has two syllables.", exampleMm: "'English' တွင် သရသံ အစု နှစ်ခု ရှိသည်။", topic: "pronunciation", level: "B1" },
    ],
    sections: [
      {
        heading: "သရ ၁၂ ခု",
        body: [
          "Short — /ɪ/ ship, /e/ bed, /æ/ cat, /ʌ/ cup, /ɒ/ hot, /ʊ/ book, /ə/ about။ Long — /iː/ sheep, /ɑː/ car, /ɔː/ door, /uː/ food, /ɜː/ bird။",
          "Diphthong များ — /eɪ/ day, /aɪ/ my, /ɔɪ/ boy, /aʊ/ now, /əʊ/ go, /ɪə/ here, /eə/ there, /ʊə/ tour။",
          "အနီးစပ် အတွဲများ — ship/sheep, full/fool, cut/cart, bed/bad, live/leave။ ဤအတွဲများကို ခွဲခြားနိုင်ခြင်းက အဓိပ္ပာယ် မှားခြင်းကို ရှောင်စေသည်။",
        ],
        table: { headers: ["အတွဲ", "အသံ", "အဓိပ္ပာယ် ကွာခြားချက်"], rows: [["ship / sheep", "/ɪ/ / /iː/", "သင်္ဘော / သိုး"], ["full / fool", "/ʊ/ / /uː/", "ပြည့် / အရူး"], ["bed / bad", "/e/ / /æ/", "အိပ်ရာ / မကောင်း"]] },
      },
      {
        heading: "schwa နှင့် ဖိသံ",
        body: [
          "ဖိသံ မရသည့် သရ များသည် /ə/ သို့ ပြောင်းလေ့ ရှိသည် — 'banana' → /bəˈnɑːnə/, 'teacher' → /ˈtiːtʃə/။",
          "စာလုံးပေါင်းနှင့် အသံ မတူညီနိုင်သည် — 'through' /θruː/, 'though' /ðəʊ/, 'thought' /θɔːt/, 'enough' /ɪˈnʌf/။",
          note,
        ],
      },
    ],
    examples: [
      { en: "I need to leave the ship at the next port.", mm: "နောက် ဆိပ်ကမ်းတွင် သင်္ဘောမှ ဆင်းရမည်။", note: "leave /iː/ နှင့် ship /ɪ/။" },
      { en: "The food was good, but the room was full.", mm: "အစားအစာ ကောင်းခဲ့သည်၊ ဒါပေမယ့် အခန်းက ပြည့်နေခဲ့သည်။" },
      { en: "My teacher gave a clear explanation.", mm: "ကျွန်တော့် ဆရာမ ရှင်းလင်းသည့် ရှင်းပြချက် ပေးခဲ့သည်။", note: "ဖိသံ မရသည့် သရ → /ə/။" },
    ],
    mistakes: [
      { wrong: "I want to sit on the beach. (= bitch ဖြစ်သွားနိုင်)", right: "beach /iː/ ကို ရှည်စွာ ဖတ်ပါ", why: "သရ အတို/အရှည် မှားလျှင် အဓိပ္ပာယ် လွဲနိုင်သည်။" },
      { wrong: "every syllable ကို တူညီစွာ ဖိဖတ်ခြင်း", right: "ဖိသံ ရသည့် syllable ကို ပေါ်လွင်စေပါ", why: "အင်္ဂလိပ်တွင် ဖိသံ မညီပါ။" },
    ],
    guided: [
      { type: "mcq", prompt: "Which word has the long /iː/ sound?", promptMm: "ရွေးပါ။", options: ["ship", "sheep", "sit", "fit"], answer: 1, explanation: "sheep = /iː/။", topic: "pronunciation" },
      { type: "mcq", prompt: "How many syllables in 'banana'?", promptMm: "ရွေးပါ။", options: ["2", "3", "4", "5"], answer: 1, explanation: "ba-na-na = ၃။", topic: "pronunciation" },
      { type: "fill", prompt: "The unstressed vowel sound in 'teacher' is ___.", promptMm: "ဖြည့်ပါ။", answers: ["schwa", "/ə/", "ə"], explanation: "ဖိသံ မရသည့် သရကို schwa (/ə/) ဟု ခေါ်သည်။", topic: "pronunciation" },
      { type: "correct", prompt: "Correct the spelling: I want to by a sheep ticket.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["I want to buy a ship ticket."], explanation: "ship = သင်္ဘော; buy = ဝယ်။", topic: "pronunciation" },
    ],
    independent: [
      { type: "mcq", prompt: "Which pair differs only in vowel length?", promptMm: "ရွေးပါ။", options: ["cat / cut", "full / fool", "bed / bad", "ship / shop"], answer: 1, explanation: "/ʊ/ နှင့် /uː/။", topic: "pronunciation" },
      { type: "fill", prompt: "How many syllables in 'comfortable' (အမြန် ပြောလျှင်)?", promptMm: "ဖြည့်ပါ။", answers: ["3"], explanation: "comf-ta-ble → ၃ (အမြန် ပြောလျှင်)။", topic: "pronunciation" },
      { type: "mcq", prompt: "Which word contains a schwa?", promptMm: "ရွေးပါ။", options: ["cat", "about", "sheep", "book"], answer: 1, explanation: "a-bout ရှိ a သည် schwa။", topic: "pronunciation" },
      { type: "translate", prompt: "Translate: ဒီသင်္ဘောက နောက်ဆိပ်ကမ်းမှာ ရပ်တယ်။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["This ship stops at the next port.", "The ship stops at the next port."], explanation: "ship + stop at။", topic: "pronunciation" },
    ],
    review: [
      { q: "schwa ဆိုတာ ဘာလဲ။", a: "ဖိသံ မရသည့် သရ /ə/။" },
      { q: "သရ အတို/အရှည် မှားလျှင် ဘာဖြစ်နိုင်သလဲ။", a: "ship/sheep ကဲ့သို့ စကားလုံး နှစ်လုံး ရောပြီး အဓိပ္ပာယ် လွဲနိုင်သည်။" },
    ],
    summary: ["သရသံ ၁၂ ခု နှင့် diphthong ၈ ခု ရှိသည်။", "schwa သည် ဖိသံ မရသည့် သရ။", "စာလုံးပေါင်းနှင့် အသံ မတူနိုင်ပါ။"],
    mastery: ["အနီးစပ် သရ အတွဲ ၅ ခုကို ခွဲခြားနိုင်သည်။", "schwa ပါသော စကားလုံး ၅ ခု ဖော်ပြနိုင်သည်။"],
    topics: ["pronunciation", "vowels", "speaking"],
  },
  {
    id: "d18-consonant-sounds",
    moduleId: "D",
    title: "Pronunciation: Consonant Sounds and Clusters",
    titleMm: "အသံထွက် — ဗျည်းသံ နှင့် ဗျည်းအတွဲများ",
    level: "B1",
    minutes: 20,
    summaryLine: "ခက်ခဲသည့် ဗျည်းသံများ (th, v/w, r/l) နှင့် အစ/အဆုံး ဗျည်းအတွဲများကို လေ့ကျင့်သည်။",
    objectives: ["th သံ နှစ်မျိုး ခွဲခြားနိုင်မည်။", "v/w နှင့် r/l ကွာခြားချက် သိမည်။", "ဗျည်းအတွဲ စကားလုံးများကို ဖတ်နိုင်မည်။"],
    vocab: [
      { en: "voiced", mm: "အသံတုန်း (အသံကြိုးတုန်)", pos: "adjective", example: "/ð/ is voiced; /θ/ is not.", exampleMm: "/ð/ သည် voiced ဖြစ်သည်၊ /θ/ မဟုတ်ပါ။", topic: "pronunciation", level: "B2" },
      { en: "cluster", mm: "ဗျည်းအတွဲ", pos: "noun", example: "'Strengths' has a difficult cluster.", exampleMm: "'strengths' တွင် ခက်ခဲသည့် ဗျည်းအတွဲ ရှိသည်။", topic: "pronunciation", level: "B2" },
      { en: "minimal pair", mm: "အသံ တစ်ခုသာ ကွာသည့် စကားလုံးတွဲ", pos: "noun", example: "'Light' and 'right' are a minimal pair.", exampleMm: "'light' နှင့် 'right' သည် minimal pair ဖြစ်သည်။", topic: "pronunciation", level: "B2" },
    ],
    sections: [
      {
        heading: "ခက်ခဲသည့် ဗျည်းသံများ",
        body: [
          "/θ/ (think, thanks) — လျှာ သွားနှင့် ထိပြီး လေမှုတ်သည်။ /ð/ (this, mother) — တူညီသော အနေအထား၊ အသံကြိုး တုန်သည်။",
          "/v/ (very) — သွားနှင့် အောက်နှုတ်ခမ်း ထိ၊ /w/ (water) — နှုတ်ခမ်း ဝိုင်းပြီး လေမှုတ်သည်။ /r/ (right) — လျှာ လိပ်ခြင်း မဟုတ်ဘဲ အနောက်သို့ ဆွဲသည်။ /l/ (light) — လျှာ သွားနောက်တွင် ထိသည်။",
          "အသံ မတုန်သည့်/တုန်သည့် အတွဲ — /p/–/b/, /t/–/d/, /k/–/ɡ/, /s/–/z/, /ʃ/–/ʒ/။ အဆုံးသတ် ဗျည်း အသံတုန်း/မတုန်းက အဓိပ္ပာယ် ပြောင်းနိုင်သည် — 'back' /k/ vs 'bag' /ɡ/။",
        ],
        table: { headers: ["အတွဲ", "ကွာခြားချက်", "ဥပမာ"], rows: [["think / sink", "/θ/ vs /s/", "တွေးသည် / နစ်သည်"], ["very / wery", "/v/ vs /w/", "အလွန်"], ["light / right", "/l/ vs /r/", "အလင်း / ညာ"], ["ship / chip", "/ʃ/ vs /tʃ/", "သင်္ဘော / အာလူးကြော်"]] },
      },
      {
        heading: "ဗျည်းအတွဲများ",
        body: [
          "အစ အတွဲ — spring, street, splash, three, screw။ မြန်မာစကားတွင် မရှိသည့် အတွဲများ ဖြစ်သဖြင့် သရ မထည့်ပါနှင့် ('sa-print' မဟုတ်)။",
          "အဆုံး အတွဲ — asked, helped, texts, strengths။ ခက်လျှင် နောက်ဆုံး ဗျည်းကို ပေါ့ပါးစွာ ဖတ်သည်။",
          note,
        ],
      },
    ],
    examples: [
      { en: "I think this is the right thing to do.", mm: "ဒါက မှန်ကန်သည့် လုပ်ရမည့်အရာလို့ ထင်တယ်။", note: "/θ/ နှင့် /ð/ ရောထားသည်။" },
      { en: "She speaks very well.", mm: "သူမ အလွန် ကောင်းစွာ ပြောနိုင်သည်။", note: "/v/ နှင့် /w/။" },
      { en: "Please turn right at the light.", mm: "မီးပွိုင့်မှာ ညာဘက် ကွေ့ပါ။", note: "/r/ နှင့် /l/။" },
    ],
    mistakes: [
      { wrong: "I tink dis is good. (th ကို t/d ဖြင့် အစားထိုးခြင်း)", right: "I think this is good.", why: "လျှာကို သွားနှင့် ထိစေရသည်။" },
      { wrong: "suh-pring (ဗျည်းအတွဲ အလယ် သရ ထည့်ခြင်း)", right: "spring (တစ်ချက်တည်း)", why: "ဗျည်းအတွဲကို မခွဲပါ။" },
    ],
    guided: [
      { type: "mcq", prompt: "Which word starts with /θ/?", promptMm: "ရွေးပါ။", options: ["this", "think", "sink", "zinc"], answer: 1, explanation: "think = /θɪŋk/။", topic: "pronunciation" },
      { type: "mcq", prompt: "Which word has /v/?", promptMm: "ရွေးပါ။", options: ["water", "very", "west", "window"], answer: 1, explanation: "very = /v/။", topic: "pronunciation" },
      { type: "fill", prompt: "'Right' starts with the sound ___. (r/l)", promptMm: "ဖြည့်ပါ။", answers: ["r", "/r/"], explanation: "right သည် /r/ ဖြင့် စပြီး light သည် /l/ ဖြင့် စသည်။", topic: "pronunciation" },
      { type: "correct", prompt: "Correct the spelling: I tink the weather is nice.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["I think the weather is nice."], explanation: "think ကို th (/θ/) ဖြင့် ရေးသည်၊ t မဟုတ်ပါ။", topic: "pronunciation" },
    ],
    independent: [
      { type: "mcq", prompt: "Which pair is a minimal pair?", promptMm: "ရွေးပါ။", options: ["light / right", "light / lamp", "right / correct", "light / dark"], answer: 0, explanation: "အသံ တစ်ခုသာ ကွာသည်။", topic: "pronunciation" },
      { type: "fill", prompt: "'Mother' contains the voiced sound ___.", promptMm: "ဖြည့်ပါ။", answers: ["ð", "/ð/"], explanation: "/ð/ သည် voiced။", topic: "pronunciation" },
      { type: "mcq", prompt: "Which word has a three-consonant cluster at the start?", promptMm: "ရွေးပါ။", options: ["street", "table", "happy", "banana"], answer: 0, explanation: "street သည် str- ဗျည်းအတွဲ သုံးခုဖြင့် စသည်။", topic: "pronunciation" },
      { type: "translate", prompt: "Translate: ကျေးဇူးတင်ပါတယ်၊ ဒါက အလွန် အသုံးဝင်တယ်။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["Thank you, this is very useful.", "Thanks, this is very useful."], explanation: "/θ/ နှင့် /v/ ပါသည်။", topic: "pronunciation" },
    ],
    review: [
      { q: "/θ/ နှင့် /ð/ ကွာခြားချက် ဘာလဲ။", a: "/θ/ သည် အသံ မတုန် (think)၊ /ð/ သည် အသံ တုန် (this)။" },
      { q: "ဗျည်းအတွဲ ဖတ်ရာတွင် ဘာကို ရှောင်သလဲ။", a: "အတွဲအလယ်တွင် သရ ထည့်ခြင်းကို ရှောင်သည်။" },
    ],
    summary: ["th, v/w, r/l သည် မြန်မာ သင်ယူသူများ အများဆုံး ရောသည့် သံများ။", "ဗျည်းအတွဲများကို မခွဲဘဲ ဖတ်သည်။", "voiced/voiceless ကွာခြားချက်က အဓိပ္ပာယ် ပြောင်းနိုင်သည်။"],
    mastery: ["minimal pair ၅ ခုကို ခွဲခြားနိုင်သည်။", "ဗျည်းအတွဲ ပါသော စကားလုံး ၈ ခု ဖတ်နိုင်သည်။"],
    topics: ["pronunciation", "consonants", "speaking"],
  },
];

export const moduleDLessonsPart4: Lesson[] = buildLessons(seeds);
