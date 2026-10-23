import type { Lesson } from "@/lib/types";
import { buildLessons, type LessonSeed } from "./builder.ts";

const note = "ဤသင်ခန်းစာသည် စာသားအခြေခံ လေ့ကျင့်ခန်း ဖြစ်သည်။ အသံဖမ်းခြင်း/အသံ ခွဲခြမ်းစိတ်ဖြာခြင်း မပါဝင်ပါ — ကိုယ်တိုင် အသံဖမ်းပြီး ပြန်နားထောင်ခြင်းဖြင့် လေ့ကျင့်ပါ။";

const seeds: LessonSeed[] = [
  {
    id: "d5-storytelling",
    moduleId: "D",
    title: "Speaking: Telling a Story",
    titleMm: "စကားပြော — ဇာတ်လမ်း ပြောခြင်း",
    level: "B1",
    minutes: 22,
    summaryLine: "ဇာတ်လမ်းတစ်ခုကို နောက်ခံ၊ ပြဿနာ၊ ဖြေရှင်းမှု၊ သင်ခန်းစာ အစီအစဉ်ဖြင့် စက္ကန့် ၉၀ အတွင်း ပြောနည်း။",
    objectives: ["ဇာတ်လမ်း ဖွဲ့စည်းပုံ ၄ ပိုင်း ဖန်တီးနိုင်မည်။", "past simple/continuous ကို ရောစပ်၍ ပြောနိုင်မည်။", "အချိန် ချိတ်ဆက်သည့် စကားလုံးများ သုံးနိုင်မည်။"],
    vocab: [
      { en: "suddenly", mm: "ရုတ်တရက်", pos: "adverb", example: "Suddenly, the lights went out.", exampleMm: "ရုတ်တရက် မီးများ ပျက်သွားသည်။", topic: "storytelling", level: "B1" },
      { en: "eventually", mm: "နောက်ဆုံးတွင်", pos: "adverb", example: "Eventually, we found the way.", exampleMm: "နောက်ဆုံးတွင် လမ်းကို ရှာတွေ့ခဲ့သည်။", topic: "storytelling", level: "B1" },
      { en: "turn out", mm: "အဆုံးတွင် ဖြစ်သွားသည်", pos: "phrasal verb", example: "It turned out to be a misunderstanding.", exampleMm: "အဆုံးတွင် နားလည်မှု လွဲမှားခြင်း ဖြစ်ခဲ့သည်။", topic: "storytelling", level: "B2" },
    ],
    sections: [
      {
        heading: "ဖွဲ့စည်းပုံ ၄ ပိုင်း",
        body: [
          "၁) နောက်ခံ — 'Last year, I was travelling to Taunggyi with two friends.' ၂) ပြဿနာ — 'Halfway there, the bus broke down.'",
          "၃) ဖြေရှင်းမှု — 'We waited, and eventually a passing truck stopped.' ၄) သင်ခန်းစာ/အဆုံးသတ် — 'Since then, I always keep water and snacks with me.'",
          "ပြောနေစဉ် လွန်ခဲ့သည့် အခြေအနေကို ဖော်ပြရန် past continuous ('we were driving') နှင့် ဖြစ်ရပ်ကို past simple ('it started to rain') ကို ရောစပ်သည်။",
        ],
        table: { headers: ["အချိန် ချိတ်ဆက်", "သုံးပုံ", "ဥပမာ"], rows: [["at first", "အစပိုင်း", "At first, nothing happened."], ["after that", "ပြီးနောက်", "After that, we called a friend."], ["in the end", "အဆုံးတွင်", "In the end, it was fine."]] },
      },
      {
        heading: "စကားပြော နည်းစနစ်",
        body: [
          "တစ်ဝါကျ တစ်အချက် ထားပါ။ 'and then, and then' ထပ်ခါတလဲလဲ မသုံးပါနှင့် — 'after that', 'later', 'by the time' ကဲ့သို့ လဲလှယ်သည်။",
          "သင်ခန်းစာ ပြရာတွင် အတိတ်နှင့် ယခုကို ချိတ်ဆက်သည် — 'Since that day, I have always…' (present perfect)။",
          note,
        ],
      },
    ],
    examples: [
      { en: "We were walking home when we heard a strange noise.", mm: "အိမ်ပြန် လမ်းလျှောက်နေစဉ် ထူးဆန်းသည့် အသံ ကြားခဲ့ရသည်။", note: "past continuous + past simple။" },
      { en: "At first, I thought it was a joke.", mm: "အစပိုင်းတွင် ဟာသ ဖြစ်မည်ဟု ထင်ခဲ့သည်။" },
      { en: "In the end, everything worked out better than we expected.", mm: "အဆုံးတွင် မျှော်လင့်ထားသည်ထက် ပိုကောင်းစွာ ဖြစ်သွားသည်။" },
    ],
    mistakes: [
      { wrong: "Then then we go home.", right: "After that, we went home.", why: "အတိတ် ဇာတ်လမ်းတွင် past simple သုံးရသည်။" },
      { wrong: "I was see a dog.", right: "I saw a dog.", why: "was + verb မဖြစ်နိုင်ပါ။" },
    ],
    guided: [
      { type: "mcq", prompt: "We ___ dinner when the phone rang.", promptMm: "ရွေးပါ။", options: ["had", "were having", "have had", "are having"], answer: 1, explanation: "ရှေ့ခံ အခြေအနေ → past continuous။", topic: "storytelling" },
      { type: "mcq", prompt: "___ , we found the keys under the sofa.", promptMm: "ရွေးပါ။", options: ["Eventually", "Suddenly", "Meanwhile", "Firstly"], answer: 0, explanation: "eventually = နောက်ဆုံးတွင်။", topic: "storytelling" },
      { type: "fill", prompt: "It ___ out that the shop was closed. (turn ၏ အတိတ်)", promptMm: "ဖြည့်ပါ။", answers: ["turned"], explanation: "turn out → turned out။", topic: "storytelling" },
      { type: "correct", prompt: "Correct: I was walk home when I saw him.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["I was walking home when I saw him."], explanation: "was + -ing။", topic: "storytelling" },
    ],
    independent: [
      { type: "mcq", prompt: "Which sentence starts a story in the background?", promptMm: "ရွေးပါ။", options: ["I was living in Bago at the time.", "I have lived in Bago.", "I live in Bago.", "I will live in Bago."], answer: 0, explanation: "နောက်ခံ အခြေအနေ → past continuous။", topic: "storytelling" },
      { type: "fill", prompt: "At first, nobody ___. (know)", promptMm: "ဖြည့်ပါ။", answers: ["knew"], explanation: "past simple။", topic: "storytelling" },
      { type: "order", prompt: "Arrange the sentence.", promptMm: "စီပါ။", tokens: ["we", "In", "end", "the", "home", "went"], answer: "In the end we went home", explanation: "In the end, we went home။", topic: "storytelling" },
      { type: "translate", prompt: "Translate: ကျွန်တော်တို့ ကားပျက်၊ ဒါပေမယ့် နောက်ဆုံး ကူညီတဲ့လူ တွေ့တယ်။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["Our car broke down, but in the end someone helped us.", "Our car broke down, but eventually someone helped us."], explanation: "broke down + eventually/in the end။", topic: "storytelling" },
    ],
    review: [
      { q: "ဇာတ်လမ်း ဖွဲ့စည်းပုံ ၄ ပိုင်း ဘာတွေလဲ။", a: "နောက်ခံ၊ ပြဿနာ၊ ဖြေရှင်းမှု၊ သင်ခန်းစာ/အဆုံးသတ်။" },
      { q: "past continuous ကို ဇာတ်လမ်းတွင် ဘယ်လို သုံးသလဲ။", a: "နောက်ခံ အခြေအနေ ဖော်ပြရန် သုံးပြီး ဖြစ်ရပ်ကို past simple ဖြင့် ပြသည်။" },
    ],
    summary: ["ဇာတ်လမ်းကို ပိုင်း ၄ ပိုင်းဖြင့် စီစဉ်ခြင်း ရှင်းလင်းစေသည်။", "past continuous + past simple ရောစပ်မှု လိုသည်။", "အချိန် ချိတ်ဆက်စကားလုံး အမျိုးမျိုး သုံးခြင်းက ထပ်ခါတလဲလဲ ရှောင်စေသည်။"],
    mastery: ["ဇာတ်လမ်း တစ်ခုကို စာကြောင်း ၁၂ ကြောင်းဖြင့် ပြင်ဆင်ရေးနိုင်သည်။", "past continuous နှင့် past simple ကို မှန်ကန်စွာ ရောစပ်နိုင်သည်။"],
    topics: ["speaking", "storytelling", "narrative"],
  },
  {
    id: "d6-discussion-debate",
    moduleId: "D",
    title: "Speaking: Discussion and Debate",
    titleMm: "စကားပြော — ဆွေးနွေးငြင်းခုံခြင်း",
    level: "B2",
    minutes: 24,
    summaryLine: "ထင်မြင်ချက် ဖော်ပြခြင်း၊ တစ်ဖက်လူကို သဘောတူ/ကန့်ကွက်ခြင်း နှင့် အငြင်းအခုန် ထောက်ပံ့ခြင်း စကားစုများ။",
    objectives: ["ထင်မြင်ချက် ဖော်ပြသည့် စကားစု ၆ ခု သုံးနိုင်မည်။", "ကန့်ကွက်မှုကို ယဉ်ကျေးစွာ ပြောနိုင်မည်။", "အငြင်းအခုန်ကို ဥပမာဖြင့် ထောက်ပံ့နိုင်မည်။"],
    vocab: [
      { en: "point of view", mm: "ရှုထောင့်", pos: "noun", example: "From my point of view, the plan is risky.", exampleMm: "ကျွန်တော့် ရှုထောင့်မှ ဤအစီအစဉ်က အန္တရာယ်ရှိသည်။", topic: "discussion", level: "B2" },
      { en: "counter-argument", mm: "ဆန့်ကျင်ငြင်းခုံချက်", pos: "noun", example: "A strong essay answers the counter-argument.", exampleMm: "ခိုင်မာသည့် စာစီစာကုံးက ဆန့်ကျင်ငြင်းခုံချက်ကို ဖြေသည်။", topic: "discussion", level: "B2" },
      { en: "concede", mm: "အမှတ်ပေးလိုက်သည်", pos: "verb", example: "I concede that cost is a problem.", exampleMm: "ကုန်ကျစရိတ်က ပြဿနာဖြစ်သည်ကို အမှတ်ပေးလိုက်သည်။", topic: "discussion", level: "C1" },
    ],
    sections: [
      {
        heading: "အသုံးဝင်သည့် စကားစုများ",
        body: [
          "ထင်မြင်ချက် — 'In my view…' 'As far as I'm concerned…' 'I'd argue that…' 'It seems to me that…'",
          "သဘောတူ — 'That's a fair point.' 'I couldn't agree more.' 'You have a point there.'",
          "ကန့်ကွက် — 'I see what you mean, but…' 'I'm not sure I agree.' 'That may be true, however…' 'With respect, I think…'",
          "ရှင်းလင်းစေရန် — 'Could you clarify what you mean by…?' 'Just to make sure I understand…'",
        ],
        table: { headers: ["လုပ်ဆောင်ချက်", "စကားစု", "မှတ်ချက်"], rows: [["အငြင်းအခုန် စ", "The main reason is that…", "အကြောင်းရင်း တိုက်ရိုက်"], ["ဥပမာ", "For instance…", "ထောက်ပံ့မှု"], ["အမှတ်ပေး", "Admittedly, …", "တစ်ဖက်အချက်ကို ဝန်ခံ"], ["အကျဉ်းချုပ်", "On balance, …", "ချိန်ခွင်လျှာ"]] },
      },
      {
        heading: "အငြင်းအခုန် တည်ဆောက်ခြင်း",
        body: [
          "ပုံစံ — အဆို (claim) → အကြောင်းရင်း (reason) → အထောက်အထား/ဥပမာ (evidence) → ဆန့်ကျင်ချက်ကို ဖြေရှင်းခြင်း (rebuttal)။",
          "'Studies show…' ဟု ပြောလျှင် မည်သည့် လေ့လာမှုလဲ ဆိုသည်ကို သိထားရသည်။ မသိလျှင် 'In my experience…' ဟု ပြောခြင်းက ရိုးသားသည်။",
          "အငြင်းအခုန်တွင် လူပုဂ္ဂိုလ်ကို မတိုက်ခိုက်ဘဲ အကြောင်းအရာကို ဆွေးနွေးသည် — 'You're wrong' အစား 'I think the evidence points the other way' ဟု ပြောသည်။",
          note,
        ],
      },
    ],
    examples: [
      { en: "In my view, online classes work better for working adults.", mm: "ကျွန်တော့် အမြင်တွင် အလုပ်လုပ်နေသည့် လူကြီးများအတွက် အွန်လိုင်း သင်တန်းများ ပိုကောင်းသည်။" },
      { en: "I see what you mean, but the cost would be very high.", mm: "မင်း ဆိုလိုသည်ကို နားလည်သည်၊ ဒါပေမယ့် ကုန်ကျစရိတ် အလွန်မြင့်မည်။" },
      { en: "For instance, last year the school saved 20 percent on printing.", mm: "ဥပမာ — မနှစ်က ကျောင်းသည် ပုံနှိပ်စရိတ် ၂၀ ရာခိုင်နှုန်း သက်သာခဲ့သည်။" },
    ],
    mistakes: [
      { wrong: "I am agree with you.", right: "I agree with you.", why: "agree သည် ကြိယာ — am မလိုပါ။" },
      { wrong: "According to me, it is wrong.", right: "In my opinion, it is wrong.", why: "according to ကို ကိုယ်တိုင် အပေါ် မသုံးပါ။" },
    ],
    guided: [
      { type: "mcq", prompt: "___ my view, the plan needs more testing.", promptMm: "ရွေးပါ။", options: ["In", "On", "At", "From"], answer: 0, explanation: "in my view။", topic: "discussion" },
      { type: "mcq", prompt: "Which phrase disagrees politely?", promptMm: "ရွေးပါ။", options: ["You are wrong.", "That's stupid.", "I'm not sure I agree.", "No way."], answer: 2, explanation: "ယဉ်ကျေးသော ကန့်ကွက်မှု။", topic: "discussion" },
      { type: "fill", prompt: "___ instance, Japan has a similar policy.", promptMm: "ဖြည့်ပါ။", answers: ["For"], explanation: "for instance။", topic: "discussion" },
      { type: "correct", prompt: "Correct: I am agree with this point.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["I agree with this point."], explanation: "agree သည် ကြိယာ။", topic: "discussion" },
    ],
    independent: [
      { type: "mcq", prompt: "Which phrase concedes a point?", promptMm: "ရွေးပါ။", options: ["Admittedly, cost is an issue.", "You are totally wrong.", "I refuse to listen.", "That makes no sense."], answer: 0, explanation: "Admittedly = အမှတ်ပေးလိုက်ခြင်း။", topic: "discussion" },
      { type: "fill", prompt: "Could you ___ what you mean by 'affordable'?", promptMm: "ဖြည့်ပါ။", answers: ["clarify"], explanation: "clarify = ရှင်းလင်းစေသည်။", topic: "discussion" },
      { type: "mcq", prompt: "Which is the strongest support for a claim?", promptMm: "ရွေးပါ။", options: ["Everyone thinks so.", "A survey of 500 users found the same result.", "I feel it is true.", "My friend said so."], answer: 1, explanation: "နမူနာ ပမာဏ ပါသည့် ဒေတာ အကောင်းဆုံး။", topic: "discussion" },
      { type: "translate", prompt: "Translate: ကျွန်တော် တစ်ချက်တော့ သဘောတူတယ် — ကုန်ကျစရိတ် မြင့်တယ်။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["I agree on one point: the cost is high.", "I agree with one point — the cost is high."], explanation: "I agree on one point။", topic: "discussion" },
    ],
    review: [
      { q: "အငြင်းအခုန် ဖွဲ့စည်းပုံ ၄ အဆင့် ဘာတွေလဲ။", a: "claim → reason → evidence → rebuttal။" },
      { q: "ကန့်ကွက်မှုကို ယဉ်ကျေးစေရန် ဘယ်လို ပြောသလဲ။", a: "I see what you mean, but… ကဲ့သို့ အမှတ်ပေးပြီး ပြောသည်။" },
    ],
    summary: ["ထင်မြင်ချက်၊ သဘောတူမှု နှင့် ကန့်ကွက်မှု စကားစုများကို ခွဲသိထားရသည်။", "အငြင်းအခုန်ကို အကြောင်းရင်း + ဥပမာဖြင့် ထောက်ပံ့သည်။", "လူပုဂ္ဂိုလ် မတိုက်ခိုက်ဘဲ အကြောင်းအရာကို ဆွေးနွေးသည်။"],
    mastery: ["စကားစု ၁၀ ခုကို သင့်လျော်စွာ သုံးနိုင်သည်။", "အငြင်းအခုန် ၂၀၀ လုံးကို ဖွဲ့စည်းပုံ ၄ ဆင့်ဖြင့် ရေးနိုင်သည်။"],
    topics: ["speaking", "debate", "argument"],
  },
  {
    id: "d7-connected-speech",
    moduleId: "D",
    title: "Speaking: Connected Speech and Pace",
    titleMm: "စကားပြော — ဆက်စပ် အသံထွက် နှင့် နှုန်း",
    level: "B2",
    minutes: 22,
    summaryLine: "linking, weak forms, contractions နှင့် စကားပြော နှုန်းထိန်းခြင်းဖြင့် သဘာဝကျစွာ ပြောနည်း (စာသား အခြေခံ)။",
    objectives: ["linking နှင့် weak form ဥပမာ ၅ ခု ဖော်ပြနိုင်မည်။", "contraction များကို စာရေးတွင် မှန်ကန်စွာ သုံးနိုင်မည်။", "နှုန်းထိန်းခြင်း အလေ့အထ ၃ ခု ရှိမည်။"],
    vocab: [
      { en: "linking", mm: "အသံ ဆက်စပ်မှု", pos: "noun", example: "Linking makes speech sound natural.", exampleMm: "အသံ ဆက်စပ်မှုက စကားပြောကို သဘာဝကျစေသည်။", topic: "pronunciation", level: "B2" },
      { en: "weak form", mm: "ပေါ့ပါးသော အသံပုံစံ", pos: "noun", example: "'To' is usually a weak form.", exampleMm: "'to' သည် များသောအားဖြင့် ပေါ့ပါးသော အသံဖြစ်သည်။", topic: "pronunciation", level: "B2" },
      { en: "contraction", mm: "အတိုချုံ့ပုံ", pos: "noun", example: "'I'm' is a contraction of 'I am'.", exampleMm: "'I'm' သည် 'I am' ၏ အတိုချုံ့ပုံ ဖြစ်သည်။", topic: "pronunciation", level: "B1" },
    ],
    sections: [
      {
        heading: "ဆက်စပ် အသံထွက်",
        body: [
          "ဗျည်းဖြင့် ဆုံးပြီး သရဖြင့် စသည့် စကားလုံးများ ဆက်လာလျှင် ဆက်ဖတ်သည် — 'turn it off' → 'tur-ni-toff'။",
          "သရနှစ်ခု ဆက်လာလျှင် /j/ သို့ /w/ အသံ ထည့်လေ့ ရှိသည် — 'go out' → 'gowout', 'I am' → 'I yam'။",
          "Weak form — to, of, and, can, for ကဲ့သို့ စကားလုံးများကို /tə/, /əv/, /ən/ ကဲ့သို့ ပေါ့ပါးစွာ ဖတ်သည်။ နားထောင်ရာတွင် ဤအချက်က အရေးကြီးသည်။",
        ],
        table: { headers: ["ပုံစံ", "ဥပမာ", "ဖတ်ပုံ (အကြမ်း)"], rows: [["consonant → vowel", "an apple", "a-napple"], ["vowel → vowel", "go on", "gow-on"], ["weak form", "a cup of tea", "a cuppa tea"], ["elision", "next day", "nex day"]] },
      },
      {
        heading: "နှုန်း နှင့် ရပ်တန့်မှု",
        body: [
          "စကားပြောနှုန်းကို ပြောင်းခြင်းက အဓိကအချက်ကို ပေါ်လွင်စေသည် — အရေးကြီးသည့် စကားလုံးရှေ့တွင် ခေတ္တ ရပ်ပြီး ထိုစကားလုံးကို ဖိဖတ်သည်။",
          "အသက်ရှူရန် နေရာ မှတ်ထားခြင်းက ရှည်လျားသည့် ဝါကျကို ရှင်းလင်းစေသည် — 'However, || the cost || is much higher || than we expected.'",
          note,
        ],
      },
    ],
    examples: [
      { en: "I'd like to ask a question about it.", mm: "ဒါနဲ့ ပတ်သက်ပြီး မေးခွန်းတစ်ခု မေးချင်ပါတယ်။", note: "linking: about_it။" },
      { en: "She's been working here for a year.", mm: "သူမ ဒီမှာ တစ်နှစ်ကြာ အလုပ်လုပ်နေတယ်။", note: "She has been → She's been။" },
      { en: "We can't do it today, but we'll try tomorrow.", mm: "ဒီနေ့ မလုပ်နိုင်ဘူး၊ မနက်ဖြန် ကြိုးစားမယ်။" },
    ],
    mistakes: [
      { wrong: "I am go to school every day. (ဖတ်သည့်အခါ တစ်လုံးချင်း ခွဲဖတ်ခြင်း)", right: "I go to school every day. — to ကို ပေါ့ပါးစွာ ဖတ်ပါ", why: "function word များကို ပေါ့ပါးစွာ ဖတ်သည်။" },
      { wrong: "Iamnotsure. (စကားလုံး အားလုံး ကပ်ဖတ်ခြင်း)", right: "I'm not sure. — အဓိပ္ပာယ် အုပ်စုအလိုက် ခွဲဖတ်ပါ", why: "အုပ်စုလိုက် ရပ်တန့်မှု လိုသည်။" },
    ],
    guided: [
      { type: "mcq", prompt: "Which is a contraction?", promptMm: "ရွေးပါ။", options: ["cannot", "can't", "can not", "canning"], answer: 1, explanation: "can't သည် contraction။", topic: "pronunciation" },
      { type: "mcq", prompt: "In 'a cup of tea', 'of' is usually ___.", promptMm: "ရွေးပါ။", options: ["stressed", "a weak form", "silent", "a noun"], answer: 1, explanation: "of သည် weak form။", topic: "pronunciation" },
      { type: "fill", prompt: "Write the contraction: I have = ___", promptMm: "ဖြည့်ပါ။", answers: ["I've"], explanation: "I have ကို အတိုချုံ့လျှင် I've ဖြစ်သည်။", topic: "pronunciation" },
      { type: "correct", prompt: "Correct: He don't know the answer.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["He doesn't know the answer."], explanation: "doesn't (does not)။", topic: "pronunciation" },
    ],
    independent: [
      { type: "mcq", prompt: "Which pair links smoothly?", promptMm: "ရွေးပါ။", options: ["turn it off", "turn / it / off (ခွဲဖတ်)", "turnit off slowly", "turning off it"], answer: 0, explanation: "consonant→vowel linking။", topic: "pronunciation" },
      { type: "fill", prompt: "Write the contraction: they are = ___", promptMm: "ဖြည့်ပါ။", answers: ["they're"], explanation: "they are ကို they're ဟု အတိုချုံ့သည်။", topic: "pronunciation" },
      { type: "mcq", prompt: "Which is best for a presentation?", promptMm: "ရွေးပါ။", options: ["Speak as fast as possible.", "Pause before key points and stress them.", "Read every word with equal stress.", "Never pause."], answer: 1, explanation: "ရပ်တန့်မှု + ဖိသံ။", topic: "pronunciation" },
      { type: "translate", prompt: "Translate: ကျွန်တော် ဒါကို မသေချာဘူး။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["I'm not sure about this.", "I am not sure about that."], explanation: "I'm not sure။", topic: "pronunciation" },
    ],
    review: [
      { q: "weak form ဆိုတာ ဘာလဲ။", a: "to, of, and ကဲ့သို့ function word များကို ပေါ့ပါးစွာ ဖတ်သည့် ပုံစံ။" },
      { q: "စကားပြောနှုန်းကို ဘယ်လို ထိန်းသလဲ။", a: "အဓိပ္ပာယ် အုပ်စုအလိုက် ရပ်ပြီး အဓိကစကားလုံးကို ဖိဖတ်သည်။" },
    ],
    summary: ["linking နှင့် weak form က နားထောင်ရလွယ်စေသည်။", "contraction ကို စကားပြောနှင့် မှတ်တမ်းစာတွင် သုံးသည်။", "ရပ်တန့်မှုနှင့် ဖိသံက အဓိကအချက်ကို ပေါ်လွင်စေသည်။"],
    mastery: ["linking ဥပမာ ၅ ခုကို ရှင်းပြနိုင်သည်။", "contraction ၁၀ ခုကို မှန်ကန်စွာ ရေးနိုင်သည်။"],
    topics: ["speaking", "pronunciation", "connected speech"],
  },
  {
    id: "d8-interview-communication",
    moduleId: "D",
    title: "Speaking: Interview Communication",
    titleMm: "စကားပြော — အင်တာဗျူ ဆက်သွယ်မှု",
    level: "B2",
    minutes: 22,
    summaryLine: "အင်တာဗျူတွင် မေးခွန်း ဖြေခြင်း၊ ရှင်းလင်းစေရန် မေးခြင်း နှင့် STAR ပုံစံဖြင့် အတွေ့အကြုံ ဖော်ပြခြင်း။",
    objectives: ["STAR ပုံစံဖြင့် အဖြေ ဖွဲ့နိုင်မည်။", "မသိသည့် မေးခွန်းကို ယဉ်ကျေးစွာ တုံ့ပြန်နိုင်မည်။", "အင်တာဗျူ အဆုံးတွင် မေးသင့်သည့် မေးခွန်း သိမည်။"],
    vocab: [
      { en: "strength", mm: "အားသာချက်", pos: "noun", example: "My main strength is problem-solving.", exampleMm: "ကျွန်တော့် အဓိက အားသာချက်က ပြဿနာ ဖြေရှင်းနိုင်မှု ဖြစ်သည်။", topic: "interview", level: "B1" },
      { en: "weakness", mm: "အားနည်းချက်", pos: "noun", example: "I'm working on my public speaking.", exampleMm: "လူပုံအလယ် ပြောဆိုမှုကို ကြိုးစားနေသည်။", topic: "interview", level: "B1" },
      { en: "responsibility", mm: "တာဝန်", pos: "noun", example: "I was responsible for weekly reports.", exampleMm: "အပတ်စဉ် အစီရင်ခံစာများအတွက် တာဝန်ရှိခဲ့သည်။", topic: "interview", level: "B1" },
    ],
    sections: [
      {
        heading: "STAR ပုံစံ",
        body: [
          "Situation (အခြေအနေ) → Task (တာဝန်) → Action (လုပ်ဆောင်မှု) → Result (ရလဒ်)။ ဥပမာ — 'In my last job, our team was behind schedule (S). I was asked to reorganise the workflow (T). I split the tasks and set daily check-ins (A). We finished two days early (R).'",
          "ရလဒ်ကို ကိန်းဂဏန်းဖြင့် ဖော်ပြလျှင် ခိုင်မာသည် — 'two days early', '20 percent faster'။ မရှိလျှင် ရိုးရိုးသားသား ဖော်ပြပါ။",
        ],
        table: { headers: ["မေးခွန်း", "ဖြေပုံ အစ", "မလုပ်သင့်သည့် အရာ"], rows: [["Tell me about yourself.", "I'm a … with three years' experience in …", "ငယ်စဉ်ဘဝမှ စပြောခြင်း"], ["Why do you want this job?", "I'm interested in … because …", "လစာသာ ဖော်ပြခြင်း"], ["What's your weakness?", "I've found that … so I now …", "အားနည်းချက် မရှိဟု ပြောခြင်း"]] },
      },
      {
        heading: "မသိသည့်အခါ နှင့် အဆုံးသတ်",
        body: [
          "မေးခွန်း နားမလည်လျှင် — 'Sorry, could you repeat the question?' 'Do you mean …?' ဟု မေးခြင်းက ခန့်မှန်း ဖြေခြင်းထက် ကောင်းသည်။",
          "အတွေ့အကြုံ မရှိလျှင် — 'I haven't done that yet, but I've handled something similar: …' ဟု ဆက်ပြောသည်။",
          "အဆုံးတွင် — 'Could you tell me what success looks like in this role?' 'What are the next steps?'",
          note,
        ],
      },
    ],
    examples: [
      { en: "I'm a customer service officer with three years' experience.", mm: "ကျွန်တော် သုံးနှစ် အတွေ့အကြုံ ရှိသည့် ဖောက်သည်ဝန်ဆောင်မှု အရာရှိ ဖြစ်သည်။" },
      { en: "I haven't managed a large team, but I have led small projects.", mm: "အဖွဲ့ကြီးကို မစီမံဖူးသေးပါ၊ ဒါပေမယ့် ပရောဂျက် ငယ်များကို ဦးဆောင်ဖူးသည်။" },
      { en: "Could you tell me what the next steps are?", mm: "နောက်ထပ် အဆင့်များ ဘာတွေလဲ ပြောပြနိုင်ပါသလား။" },
    ],
    mistakes: [
      { wrong: "I am working here since 2020.", right: "I have been working here since 2020.", why: "since → present perfect continuous။" },
      { wrong: "I have no weakness.", right: "I've found I can be too detailed, so I now plan my time carefully.", why: "ရိုးသားမှုက ယုံကြည်မှု တည်ဆောက်သည်။" },
    ],
    guided: [
      { type: "mcq", prompt: "STAR ၏ 'A' သည် ဘာလဲ။", promptMm: "ရွေးပါ။", options: ["Answer", "Action", "Attitude", "Advice"], answer: 1, explanation: "Action — လုပ်ဆောင်မှု။", topic: "interview" },
      { type: "mcq", prompt: "You didn't hear the question. Best response?", promptMm: "ရွေးပါ။", options: ["Say nothing.", "Sorry, could you repeat the question?", "Guess an answer.", "Change the topic."], answer: 1, explanation: "ယဉ်ကျေးစွာ ပြန်မေးသည်။", topic: "interview" },
      { type: "fill", prompt: "I have ___ working here for two years.", promptMm: "ဖြည့်ပါ။", answers: ["been"], explanation: "have been working။", topic: "interview" },
      { type: "correct", prompt: "Correct: I am working here since 2021.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["I have been working here since 2021.", "I've been working here since 2021."], explanation: "since + present perfect continuous။", topic: "interview" },
    ],
    independent: [
      { type: "mcq", prompt: "Which answer shows a measurable result?", promptMm: "ရွေးပါ။", options: ["I worked hard.", "I improved the process.", "We cut waiting time by 30 percent.", "I am a good worker."], answer: 2, explanation: "ကိန်းဂဏန်း ပါသည်။", topic: "interview" },
      { type: "fill", prompt: "I was ___ for weekly reports.", promptMm: "ဖြည့်ပါ။", answers: ["responsible"], explanation: "responsible for။", topic: "interview" },
      { type: "order", prompt: "Arrange the interview question.", promptMm: "စီပါ။", tokens: ["could", "you", "tell", "me", "about", "yourself"], answer: "could you tell me about yourself", explanation: "Could you tell me about yourself? ယဉ်ကျေးသည်။", topic: "interview" },
      { type: "translate", prompt: "Translate: ဒီအလုပ်ကို ဘာကြောင့် လိုချင်လဲဆိုတာ ရှင်းပြပါ။", promptMm: "အင်္ဂလိပ် အဖြေ တစ်ကြောင်း ရေးပါ။", answers: ["I want this job because it matches my skills and I enjoy working with people.", "I'm interested in this role because it matches my experience."], explanation: "because + အကြောင်းရင်း။", topic: "interview" },
    ],
    review: [
      { q: "STAR သည် ဘာအတွက် သုံးသလဲ။", a: "အတွေ့အကြုံ မေးခွန်းကို အခြေအနေ၊ တာဝန်၊ လုပ်ဆောင်မှု၊ ရလဒ် အစီအစဉ်ဖြင့် ဖြေရန်။" },
      { q: "အားနည်းချက် မေးလျှင် ဘယ်လို ဖြေသလဲ။", a: "တကယ့် အားနည်းချက်တစ်ခုနှင့် ဖြေရှင်းရန် လုပ်နေသည့် အရာကို တွဲဖြေသည်။" },
    ],
    summary: ["STAR ပုံစံက အဖြေကို ဖွဲ့စည်းပေးသည်။", "နားမလည်လျှင် ယဉ်ကျေးစွာ ပြန်မေးခြင်း ပိုကောင်းသည်။", "အဆုံးတွင် မေးခွန်း မေးခြင်းက စိတ်ဝင်စားမှုကို ပြသည်။"],
    mastery: ["STAR အဖြေ ၃ ခုကို စာဖြင့် ရေးနိုင်သည်။", "အင်တာဗျူ မေးခွန်း ၁၀ ခုကို သင့်လျော်စွာ ဖြေနိုင်သည်။"],
    topics: ["speaking", "interview", "work"],
  },
  {
    id: "d9-telephone-calls",
    moduleId: "D",
    title: "Speaking: Telephone Calls",
    titleMm: "စကားပြော — ဖုန်းဆက်သွယ်မှု",
    level: "B1",
    minutes: 18,
    summaryLine: "ဖုန်းဖြင့် မိတ်ဆက်ခြင်း၊ မက်ဆေ့ချ် ချန်ခြင်း နှင့် နားမလည်သည့်အခါ ပြန်မေးခြင်း စကားစုများ။",
    objectives: ["ဖုန်းဆက်သွယ်မှု စကားစု ၁၀ ခု သုံးနိုင်မည်။", "မက်ဆေ့ချ် ချန်ရန် ပြောနိုင်မည်။", "ဆက်သွယ်မှု ပြဿနာကို ရှင်းပြနိုင်မည်။"],
    vocab: [
      { en: "hold on", mm: "ခဏ စောင့်ပါ", pos: "phrasal verb", example: "Could you hold on a moment?", exampleMm: "ခဏ စောင့်ပေးနိုင်ပါသလား။", topic: "telephone", level: "A2" },
      { en: "put through", mm: "ဖုန်း လွှဲပေးသည်", pos: "phrasal verb", example: "I'll put you through to sales.", exampleMm: "အရောင်းဌာနသို့ လွှဲပေးမည်။", topic: "telephone", level: "B1" },
      { en: "voicemail", mm: "အသံ မက်ဆေ့ချ်", pos: "noun", example: "I left a voicemail.", exampleMm: "အသံ မက်ဆေ့ချ် ချန်ခဲ့သည်။", topic: "telephone", level: "B1" },
    ],
    sections: [
      {
        heading: "အခြေခံ စကားစုများ",
        body: [
          "ဖုန်းဖြေခြင်း — 'Good morning, ABC Company. How can I help you?' မိတ်ဆက်ခြင်း — 'This is Su Su speaking. May I speak to Mr. Hla?'",
          "လွှဲပေးခြင်း — 'Just a moment, please.' 'I'll put you through.' မရှိလျှင် — 'I'm afraid he's in a meeting. Can I take a message?'",
          "မက်ဆေ့ချ် — 'Could you ask him to call me back?' 'Could you spell your name, please?'",
        ],
        table: { headers: ["အခြေအနေ", "စကားစု", "မှတ်ချက်"], rows: [["နားမလည်", "Sorry, could you repeat that?", "ယဉ်ကျေးသည်"], ["အသံ မကြား", "You're breaking up. Can you hear me?", "လိုင်း ပြဿနာ"], ["မက်ဆေ့ချ်", "Can I take a message?", "ဖုန်းလက်ခံသူ"], ["ပြန်ဆက်မည်", "I'll call back in ten minutes.", "ကတိပြု"]] },
      },
      {
        heading: "အသံ မပါသော လေ့ကျင့်ခန်း",
        body: [
          "ဤသင်ခန်းစာတွင် အသံဖိုင် မပါပါ။ ဖုန်းဆက်သွယ်မှု script များကို အသံထွက်ဖတ်ပြီး မိတ်ဆွေတစ်ဦးနှင့် အခန်းကဏ္ဍ လုပ်ခြင်းဖြင့် လေ့ကျင့်ပါ။",
          "အင်တာနက် ခေတ်တွင် 'Can you hear me?' 'You're on mute.' 'Let me share my screen.' ကဲ့သို့ ဗီဒီယို ခေါ်ဆိုမှု စကားစုများလည်း လိုအပ်သည်။",
          note,
        ],
      },
    ],
    examples: [
      { en: "Good afternoon, this is Ko Aung. May I speak to the manager?", mm: "မင်္ဂလာပါ၊ ကျွန်တော် ကိုအောင် ပြောနေပါတယ်။ မန်နေဂျာနဲ့ ပြောလို့ ရပါသလား။" },
      { en: "I'm afraid she's not available. Can I take a message?", mm: "သူမ မအားလုံးဖြစ်နေပါ။ မက်ဆေ့ချ် ချန်ထားနိုင်ပါသလား။" },
      { en: "Sorry, you're breaking up — could you repeat the last part?", mm: "တောင်းပန်ပါတယ်၊ အသံ ပြတ်နေတယ် — နောက်ဆုံးအပိုင်း ပြန်ပြောနိုင်ပါသလား။" },
    ],
    mistakes: [
      { wrong: "I am Su Su. (ဖုန်းတွင်)", right: "This is Su Su speaking.", why: "ဖုန်းတွင် this is … speaking ဟု သုံးသည်။" },
      { wrong: "Please wait me.", right: "Please hold on. / Could you hold on?", why: "ဖုန်းတွင် hold on သုံးသည်။" },
    ],
    guided: [
      { type: "mcq", prompt: "___ you hold on a moment, please?", promptMm: "ရွေးပါ။", options: ["Could", "Should", "Must", "Do"], answer: 0, explanation: "Could you hold on။", topic: "telephone" },
      { type: "fill", prompt: "I'll put you ___ to the manager.", promptMm: "ဖြည့်ပါ။", answers: ["through"], explanation: "put through။", topic: "telephone" },
      { type: "mcq", prompt: "Someone is not available. You say:", promptMm: "ရွေးပါ။", options: ["He is not here, bye.", "I'm afraid he's in a meeting. Can I take a message?", "Call later.", "Who are you?"], answer: 1, explanation: "ယဉ်ကျေးသော တုံ့ပြန်မှု။", topic: "telephone" },
      { type: "correct", prompt: "Correct: I am Ma Hla speaking.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["This is Ma Hla speaking."], explanation: "this is … speaking။", topic: "telephone" },
    ],
    independent: [
      { type: "mcq", prompt: "The line is bad. You say:", promptMm: "ရွေးပါ။", options: ["You're breaking up. Could you repeat that?", "Speak louder!", "I can't hear, goodbye.", "What?"], answer: 0, explanation: "ပြဿနာ ရှင်းပြပြီး ပြန်မေးသည်။", topic: "telephone" },
      { type: "fill", prompt: "Could you ask him to call me ___?", promptMm: "ဖြည့်ပါ။", answers: ["back"], explanation: "call back။", topic: "telephone" },
      { type: "order", prompt: "Arrange the request.", promptMm: "စီပါ။", tokens: ["speak", "May", "I", "to", "Mr", "Hla"], answer: "May I speak to Mr Hla", explanation: "May I speak to…? ယဉ်ကျေးသည်။", topic: "telephone" },
      { type: "translate", prompt: "Translate: ခဏစောင့်ပါ၊ လွှဲပေးမယ်။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["Just a moment, please. I'll put you through.", "Hold on a moment — I'll put you through."], explanation: "hold on + put through။", topic: "telephone" },
    ],
    review: [
      { q: "ဖုန်းတွင် ကိုယ့်ကိုယ်ကို ဘယ်လို မိတ်ဆက်သလဲ။", a: "This is … speaking။" },
      { q: "မက်ဆေ့ချ် ချန်ရန် ဘယ်လို မေးသလဲ။", a: "Can I take a message? / Could I leave a message?" },
    ],
    summary: ["ဖုန်းဆက်သွယ်မှုတွင် မိတ်ဆက်၊ လွှဲပေး နှင့် မက်ဆေ့ချ် စကားစုများ ရှိသည်။", "This is … speaking သည် ဖုန်းဆိုင်ရာ ပုံသေသုံးနှုန်း။", "နားမလည်လျှင် ယဉ်ကျေးစွာ ပြန်မေးခြင်း အကောင်းဆုံး။"],
    mastery: ["ဖုန်း ဆွေးနွေးမှု တစ်ခုကို စာကြောင်း ၁၀ ကြောင်းဖြင့် ရေးနိုင်သည်။", "စကားစု ၁၀ ခုကို သင့်လျော်စွာ သုံးနိုင်သည်။"],
    topics: ["speaking", "telephone", "functions"],
  },
];

export const moduleDLessonsPart2: Lesson[] = buildLessons(seeds);
