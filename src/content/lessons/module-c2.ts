import type { Lesson } from "@/lib/types";
import { buildLessons, type LessonSeed } from "./builder.ts";

const seeds: LessonSeed[] = [
  {
    id: "c6-education",
    moduleId: "C",
    title: "Education and Learning Vocabulary",
    titleMm: "ပညာရေးနှင့် သင်ယူမှု ဝေါဟာရ",
    level: "B1",
    minutes: 20,
    summaryLine: "ကျောင်း၊ တက္ကသိုလ်၊ သင်တန်းနှင့် ကိုယ်တိုင် သင်ယူမှု အကြောင်း ပြောဆိုရာတွင် လိုအပ်သည့် ဝေါဟာရ ၁၂ ခု။",
    objectives: ["ပညာရေး အခေါ်အဝေါ် ၁၂ ခုကို အဓိပ္ပာယ် ဖော်ပြနိုင်မည်။", "enrol, graduate, revise ကဲ့သို့ ကြိယာများကို ဝါကျထဲ သုံးနိုင်မည်။", "ကိုယ်တိုင် ပညာရေး အတွေ့အကြုံကို ဖော်ပြနိုင်မည်။"],
    vocab: [
      { en: "enrol", mm: "စာရင်းသွင်းသည်", pos: "verb", example: "I enrolled on an online course.", exampleMm: "အွန်လိုင်း သင်တန်း တစ်ခုတွင် စာရင်းသွင်းခဲ့သည်။", topic: "education", level: "B1" },
      { en: "curriculum", mm: "သင်ရိုး", pos: "noun", example: "The curriculum includes digital skills.", exampleMm: "သင်ရိုးတွင် ဒီဂျစ်တယ် ကျွမ်းကျင်မှု ပါဝင်သည်။", topic: "education", level: "B2" },
      { en: "assignment", mm: "တာဝန်ပေးအပ်သည့် လုပ်ငန်း", pos: "noun", example: "The assignment is due on Friday.", exampleMm: "တာဝန်ကို သောကြာနေ့ ပေးရမည်။", topic: "education", level: "B1" },
      { en: "revise", mm: "ပြန်လည် လေ့လာသည် (BrE)", pos: "verb", example: "I revise for an hour every evening.", exampleMm: "ညနေတိုင်း တစ်နာရီ ပြန်လည် လေ့လာသည်။", topic: "education", level: "B1" },
    ],
    sections: [
      {
        heading: "အဓိက ဝေါဟာရများ",
        body: [
          "ပညာရေး လမ်းကြောင်း — primary school, secondary school, high school, university, postgraduate study။",
          "သင်ယူမှု ပုံစံ — lecture (ဟောပြောပွဲ), seminar (ဆွေးနွေးပွဲ), tutorial (အဖွဲ့ငယ် သင်ခန်းစာ), distance learning, self-study။",
          "အကဲဖြတ်မှု — exam, quiz, coursework, dissertation (ဘွဲ့ယူစာတမ်း), transcript (စာရင်းအင်း)။",
        ],
        table: { headers: ["ဝေါဟာရ", "အဓိပ္ပာယ်", "ဥပမာ"], rows: [["tuition fees", "ကျောင်းလခ", "Tuition fees have risen."], ["scholarship", "ပညာသင်ဆု", "She won a scholarship."], ["deadline", "နောက်ဆုံး ရက်စွဲ", "Meet the deadline."], ["peer", "ရွယ်တူ", "Learn from your peers."]] },
      },
      {
        heading: "ကြိယာ တွဲဖက်မှုများ",
        body: [
          "enrol on/in a course, take/pass/fail an exam, sit an exam, hand in an assignment, meet a deadline, drop out of school, catch up on lessons။",
          "မြန်မာစကားမှ တိုက်ရိုက် ဘာသာပြန်၍ မရသည့် တွဲဖက်မှုများ ဖြစ်သဖြင့် ဝါကျလိုက် မှတ်ထားခြင်း အကောင်းဆုံး ဖြစ်သည်။",
        ],
      },
    ],
    examples: [
      { en: "She enrolled on a part-time MBA programme last year.", mm: "မနှစ်က သူမ အချိန်ပိုင်း MBA သင်တန်းတွင် စာရင်းသွင်းခဲ့သည်။" },
      { en: "I have to hand in two assignments before the deadline.", mm: "နောက်ဆုံး ရက်စွဲ မတိုင်မီ တာဝန် နှစ်ခု တင်ရမည်။" },
      { en: "He dropped out of university but later returned to finish his degree.", mm: "သူ တက္ကသိုလ်မှ ထွက်ခဲ့သော်လည်း နောက်ပိုင်း ဘွဲ့ ပြီးစီးရန် ပြန်လာခဲ့သည်။" },
    ],
    mistakes: [
      { wrong: "I enrolled to the course.", right: "I enrolled on the course.", why: "enrol နှင့် on/in တွဲသည်။" },
      { wrong: "I passed my degree.", right: "I completed / obtained my degree.", why: "degree ကို pass မဟုတ်ဘဲ complete/obtain/gain သုံးသည်။" },
    ],
    guided: [
      { type: "mcq", prompt: "The money you pay for a course is the ___.", promptMm: "ရွေးပါ။", options: ["curriculum", "tuition fee", "transcript", "seminar"], answer: 1, explanation: "tuition fee = ကျောင်းလခ။", topic: "education" },
      { type: "fill", prompt: "She won a ___ to study in Japan. (ပညာသင်ဆု)", promptMm: "ဖြည့်ပါ။", answers: ["scholarship"], explanation: "scholarship = ပညာသင်ဆု။", topic: "education" },
      { type: "mcq", prompt: "Which verb goes with 'an exam'?", promptMm: "ရွေးပါ။", options: ["make", "do", "sit", "play"], answer: 2, explanation: "sit an exam = စာမေးပွဲ ဖြေသည်။", topic: "education" },
      { type: "correct", prompt: "Correct: I must hand my essay until Friday.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["I must hand in my essay by Friday."], explanation: "hand in + by (deadline)။", topic: "education" },
    ],
    independent: [
      { type: "mcq", prompt: "He ___ out of school at sixteen.", promptMm: "ရွေးပါ။", options: ["dropped", "fell", "left out", "got"], answer: 0, explanation: "drop out = ကျောင်းထွက်။", topic: "education" },
      { type: "fill", prompt: "We need to ___ up on the lessons we missed.", promptMm: "ဖြည့်ပါ။", answers: ["catch"], explanation: "catch up on။", topic: "education" },
      { type: "mcq", prompt: "A small discussion class at university is called a ___.", promptMm: "ရွေးပါ။", options: ["lecture", "seminar", "curriculum", "tuition"], answer: 1, explanation: "seminar = ဆွေးနွေးပွဲ။", topic: "education" },
      { type: "translate", prompt: "Translate: ငါ ဒီနှစ် အွန်လိုင်း သင်တန်းမှာ စာရင်းသွင်းမယ်။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["I will enrol on an online course this year.", "I'm going to enrol on an online course this year."], explanation: "enrol on a course။", topic: "education" },
    ],
    review: [
      { q: "scholarship နှင့် tuition fee ကွာခြားချက် ဘာလဲ။", a: "scholarship = ပညာသင်ဆု (ရန်ပုံငွေ)၊ tuition fee = သင်တန်းအတွက် ပေးရသည့် ငွေ။" },
      { q: "hand in ဆိုတာ ဘာအဓိပ္ပာယ်လဲ။", a: "တာဝန်/စာတမ်းကို သတ်မှတ်သူထံ တင်သွင်းခြင်း။" },
    ],
    summary: ["ပညာရေး ဝေါဟာရသည် လမ်းကြောင်း၊ သင်ယူမှုပုံစံ နှင့် အကဲဖြတ်မှု သုံးအုပ်စု ခွဲနိုင်သည်။", "ကြိယာ + ဝိဘတာ တွဲဖက်မှုကို ဝါကျလိုက် မှတ်ရသည်။", "ကိုယ်တိုင် အတွေ့အကြုံဖြင့် ပြန်ပြောခြင်းက မှတ်ဉာဏ် ခိုင်မာစေသည်။"],
    mastery: ["ဝေါဟာရ ၁၂ ခုကို အဓိပ္ပာယ် ဖော်ပြနိုင်သည်။", "ပညာရေး အတွေ့အကြုံကို ဝါကျ ၈ ခုဖြင့် ရေးနိုင်သည်။"],
    topics: ["education", "vocabulary", "collocations"],
  },
  {
    id: "c7-shopping",
    moduleId: "C",
    title: "Shopping and Money Vocabulary",
    titleMm: "စျေးဝယ်ခြင်းနှင့် ငွေကြေး ဝေါဟာရ",
    level: "B1",
    minutes: 18,
    summaryLine: "စျေးဝယ်ခြင်း၊ လျှော့စျေး၊ ပြန်အမ်းငွေ နှင့် ငွေပေးချေမှု အခေါ်အဝေါ်များ။",
    objectives: ["စျေးဝယ် ဆက်သွယ်မှု ဝေါဟာရ ၁၂ ခု သိမည်။", "refund, discount, receipt စသည်တို့ကို မှန်ကန်စွာ သုံးနိုင်မည်။", "စျေးဝယ်မှု အခြေအနေကို ပြောဆိုနိုင်မည်။"],
    vocab: [
      { en: "receipt", mm: "ငွေလက်ခံဖြတ်ပိုင်း", pos: "noun", example: "Keep the receipt in case you need a refund.", exampleMm: "ပြန်အမ်းရန် လိုနိုင်သဖြင့် ဖြတ်ပိုင်း သိမ်းထားပါ။", topic: "shopping", level: "A2" },
      { en: "discount", mm: "လျှော့စျေး", pos: "noun", example: "There is a 20% discount on shoes.", exampleMm: "ဖိနပ်များတွင် ၂၀% လျှော့စျေး ရှိသည်။", topic: "shopping", level: "A2" },
      { en: "refund", mm: "ငွေပြန်အမ်းသည်", pos: "verb/noun", example: "The shop refunded my money.", exampleMm: "ဆိုင်က ငွေ ပြန်အမ်းပေးခဲ့သည်။", topic: "shopping", level: "B1" },
      { en: "bargain", mm: "စျေးသက်သာသည့် အရာ", pos: "noun", example: "This jacket was a real bargain.", exampleMm: "ဒီဂျာကင်က တကယ် စျေးသက်သာသည်။", topic: "shopping", level: "B1" },
    ],
    sections: [
      {
        heading: "ဆိုင်တွင် သုံးသည့် စကားလုံးများ",
        body: [
          "price tag, checkout, till, aisle, fitting room, cashier, stock, out of stock, on sale, exchange။",
          "ပြန်အမ်းခြင်း — 'Can I get a refund?' / 'Can I exchange it for a larger size?' ဖြတ်ပိုင်း (receipt) လိုသည်။",
          "ငွေပေးချေမှု — cash, card, contactless, bank transfer, instalment (အရစ်ကျ)။",
        ],
        table: { headers: ["စကားလုံး", "အဓိပ္ပာယ်", "ဥပမာ"], rows: [["out of stock", "ကုန်နေသည်", "Sorry, it's out of stock."], ["try on", "ဝတ်ကြည့်သည်", "Can I try this on?"], ["on sale", "လျှော့စျေး ရောင်းနေသည်", "The coats are on sale."], ["instalment", "အရစ်ကျ", "Pay in three instalments."]] },
      },
      {
        heading: "စျေးနှုန်း ဆွေးနွေးခြင်း",
        body: [
          "မြန်မာစျေးကွက်တွင် စျေးဆွခြင်း သာမန်ဖြစ်သော်လည်း အင်္ဂလိပ်စကားပြောတွင် 'Can you do a better price?' သို့မဟုတ် 'Is there any discount?' ဟု ယဉ်ကျေးစွာ မေးသည်။",
          "'That's a bit expensive for me' ဟု ပြောခြင်းက ငြင်းပယ်ရာတွင် ယဉ်ကျေးသည်။",
        ],
      },
    ],
    examples: [
      { en: "I bought this shirt in the sale — it was half price.", mm: "ဒီရှပ်ကို လျှော့စျေးတွင် ဝယ်ခဲ့သည် — စျေးတစ်ဝက် ဖြစ်သည်။" },
      { en: "Do you have this in a medium? It's out of stock online.", mm: "ဒါကို အလတ်စား ရှိပါသလား။ အွန်လိုင်းတွင် ကုန်နေသည်။" },
      { en: "They refused to refund me because I had no receipt.", mm: "ဖြတ်ပိုင်း မရှိသဖြင့် သူတို့ ငွေ ပြန်မအမ်းခဲ့ပါ။" },
    ],
    mistakes: [
      { wrong: "I want to change my money back.", right: "I want a refund.", why: "ငွေပြန်အမ်းခြင်းကို refund ဟု ခေါ်သည်။" },
      { wrong: "The shop gave me a discount of 20% off.", right: "The shop gave me a 20% discount.", why: "discount နှင့် off ကို တွဲမသုံးပါ။" },
    ],
    guided: [
      { type: "mcq", prompt: "Can I try this jacket ___?", promptMm: "ရွေးပါ။", options: ["on", "in", "up", "out"], answer: 0, explanation: "try on = ဝတ်ကြည့်သည်။", topic: "shopping" },
      { type: "fill", prompt: "Keep your ___ if you want a refund.", promptMm: "ဖြည့်ပါ။", answers: ["receipt"], explanation: "receipt = ဖြတ်ပိုင်း။", topic: "shopping" },
      { type: "mcq", prompt: "The item is unavailable because it is ___.", promptMm: "ရွေးပါ။", options: ["out of order", "out of stock", "on sale", "in stock"], answer: 1, explanation: "out of stock = ကုန်နေသည်။", topic: "shopping" },
      { type: "correct", prompt: "Correct: I would like to return back this shirt.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["I would like to return this shirt.", "I'd like to return this shirt."], explanation: "return တွင် back ထပ်မထည့်ပါ။", topic: "shopping" },
    ],
    independent: [
      { type: "mcq", prompt: "I paid in three monthly ___.", promptMm: "ရွေးပါ။", options: ["instalments", "receipts", "discounts", "tills"], answer: 0, explanation: "instalment = အရစ်ကျ။", topic: "shopping" },
      { type: "fill", prompt: "These shoes were a real ___ — only 15,000 kyat.", promptMm: "ဖြည့်ပါ။", answers: ["bargain"], explanation: "bargain = စျေးသက်သာသည့် အရာ။", topic: "shopping" },
      { type: "order", prompt: "Arrange the request.", promptMm: "စီပါ။", tokens: ["any", "Is", "there", "discount", "on", "this"], answer: "Is there any discount on this", explanation: "Is there any discount on this? ယဉ်ကျေးသော မေးခွန်း။", topic: "shopping" },
      { type: "translate", prompt: "Translate: ဒီအကျီကို ပြန်အမ်းလို့ ရပါသလား။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["Can I get a refund for this shirt?", "Can I return this shirt?", "May I return this shirt?"], explanation: "refund/return ကို သုံးသည်။", topic: "shopping" },
    ],
    review: [
      { q: "refund နှင့် exchange ကွာခြားချက် ဘာလဲ။", a: "refund = ငွေပြန်အမ်း၊ exchange = အခြားအရာနှင့် လဲလှယ်။" },
      { q: "out of stock ဆိုတာ ဘာလဲ။", a: "ကုန်ပစ္စည်း ကုန်နေခြင်း (မရနိုင်ခြင်း)။" },
    ],
    summary: ["စျေးဝယ် ဝေါဟာရတွင် ဆိုင်အတွင်း၊ ငွေပေးချေမှု နှင့် ပြန်အမ်းမှု အုပ်စုများ ရှိသည်။", "try on, hand in, out of stock ကဲ့သို့ တွဲဖက်မှုကို မှတ်ရသည်။", "ယဉ်ကျေးသော မေးခွန်းပုံစံဖြင့် စျေးနှုန်း ဆွေးနွေးနိုင်သည်။"],
    mastery: ["ဝေါဟာရ ၁၂ ခုကို မှန်ကန်စွာ သုံးနိုင်သည်။", "စျေးဝယ် ဆွေးနွေးမှု တစ်ခုကို စာကြောင်း ၆ ကြောင်းဖြင့် ရေးနိုင်သည်။"],
    topics: ["shopping", "vocabulary", "money"],
  },
  {
    id: "c8-travel",
    moduleId: "C",
    title: "Travel and Transport Vocabulary",
    titleMm: "ခရီးသွား နှင့် သယ်ယူပို့ဆောင်ရေး ဝေါဟာရ",
    level: "B1",
    minutes: 20,
    summaryLine: "လေယာဉ်၊ ရထား၊ ဘတ်စ်ကား ခရီးစဉ် နှင့် ဟိုတယ် ဆက်သွယ်မှုအတွက် လိုအပ်သည့် ဝေါဟာရ။",
    objectives: ["ခရီးစဉ် အဆင့်များ၏ ဝေါဟာရကို သိမည်။", "booking, boarding, delay စသည်တို့ကို သုံးနိုင်မည်။", "ခရီးစဉ် ပြဿနာကို ရှင်းပြနိုင်မည်။"],
    vocab: [
      { en: "boarding pass", mm: "လေယာဉ်တက်ခွင့် လက်မှတ်", pos: "noun", example: "Show your boarding pass at the gate.", exampleMm: "ဂိတ်တွင် တက်ခွင့်လက်မှတ် ပြပါ။", topic: "travel", level: "A2" },
      { en: "layover", mm: "ကြားရပ် စောင့်ဆိုင်းချိန်", pos: "noun", example: "We had a six-hour layover in Bangkok.", exampleMm: "ဘန်ကောက်တွင် ခြောက်နာရီ ကြားရပ် စောင့်ခဲ့သည်။", topic: "travel", level: "B1" },
      { en: "itinerary", mm: "ခရီးစဉ် အစီအစဉ်", pos: "noun", example: "Our itinerary includes three cities.", exampleMm: "ကျွန်တော်တို့၏ ခရီးစဉ်တွင် မြို့ သုံးမြို့ ပါသည်။", topic: "travel", level: "B2" },
      { en: "delay", mm: "နောက်ကျမှု", pos: "noun/verb", example: "The flight was delayed by two hours.", exampleMm: "လေယာဉ် နှစ်နာရီ နောက်ကျခဲ့သည်။", topic: "travel", level: "A2" },
    ],
    sections: [
      {
        heading: "ခရီးစဉ် အဆင့်များ",
        body: [
          "book a ticket → check in → go through security → board the plane → land → collect luggage → go through customs။",
          "ဟိုတယ် — reservation, check-in, check-out, single/double room, en-suite, deposit။",
          "ပြဿနာများ — cancelled flight, missed connection, lost luggage, overbooked, delayed departure။",
        ],
        table: { headers: ["ဝေါဟာရ", "အဓိပ္ပာယ်", "ဥပမာ"], rows: [["one-way", "တစ်လမ်းမောင်း", "a one-way ticket"], ["return", "အသွားအပြန်", "a return ticket"], ["customs", "အကောက်ခွန်", "go through customs"], ["souvenir", "အမှတ်တရ ပစ္စည်း", "buy souvenirs"]] },
      },
      {
        heading: "အခြေအနေ ဖော်ပြချက်",
        body: [
          "'My flight was cancelled, so I missed my connection.' ကဲ့သို့ အကြောင်းရင်း → ရလဒ် အစီအစဉ်ဖြင့် ပြောခြင်းက ရှင်းလင်းသည်။",
          "'Could you help me rebook?' / 'Is there an earlier train?' ကဲ့သို့ ယဉ်ကျေးသော တောင်းဆိုမှု ပုံစံများကို သုံးသည်။",
        ],
      },
    ],
    examples: [
      { en: "We checked in online and only had hand luggage.", mm: "အွန်လိုင်းတွင် check-in လုပ်ခဲ့ပြီး လက်ဆွဲအိတ်သာ ရှိခဲ့သည်။" },
      { en: "The bus was delayed, so we missed the ferry.", mm: "ဘတ်စ်ကား နောက်ကျသဖြင့် ဖယ်ရီ လွတ်သွားသည်။" },
      { en: "Could you recommend a cheap guesthouse near the station?", mm: "ဘူတာနှင့် နီးသည့် စျေးသက်သာ တည်းခိုခန်း အကြံပြုနိုင်ပါသလား။" },
    ],
    mistakes: [
      { wrong: "I booked a ticket for the plane to go.", right: "I booked a plane ticket.", why: "book a ticket သို့ book a flight ဟု တိုတိုရေးသည်။" },
      { wrong: "The flight is late of two hours.", right: "The flight is two hours late / delayed by two hours.", why: "delay ကို by ဖြင့် သုံးသည်။" },
    ],
    guided: [
      { type: "mcq", prompt: "You must show your ___ before boarding.", promptMm: "ရွေးပါ။", options: ["itinerary", "boarding pass", "layover", "customs"], answer: 1, explanation: "boarding pass = တက်ခွင့်လက်မှတ်။", topic: "travel" },
      { type: "fill", prompt: "The flight was ___ by three hours. (delay)", promptMm: "ဖြည့်ပါ။", answers: ["delayed"], explanation: "passive → delayed။", topic: "travel" },
      { type: "mcq", prompt: "A stop between two flights is a ___.", promptMm: "ရွေးပါ။", options: ["layover", "departure", "arrival", "souvenir"], answer: 0, explanation: "layover = ကြားရပ်။", topic: "travel" },
      { type: "correct", prompt: "Correct: We arrived to Bangkok at noon.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["We arrived in Bangkok at noon."], explanation: "မြို့/နိုင်ငံ → arrive in။", topic: "travel" },
    ],
    independent: [
      { type: "mcq", prompt: "I need a ___ ticket — I'm coming back on Sunday.", promptMm: "ရွေးပါ။", options: ["one-way", "return", "single", "direct"], answer: 1, explanation: "return = အသွားအပြန်။", topic: "travel" },
      { type: "fill", prompt: "We had to go through ___ at the airport. (အကောက်ခွန်)", promptMm: "ဖြည့်ပါ။", answers: ["customs"], explanation: "go through customs။", topic: "travel" },
      { type: "mcq", prompt: "My suitcase didn't arrive — it was ___.", promptMm: "ရွေးပါ။", options: ["lost", "left", "gone", "dropped"], answer: 0, explanation: "lost luggage။", topic: "travel" },
      { type: "translate", prompt: "Translate: ငါ့လေယာဉ်ကို ပယ်ဖျက်လိုက်တယ်၊ ဒါကြောင့် ပြန်စီစဉ်ဖို့ လိုတယ်။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["My flight was cancelled, so I need to rebook.", "My flight was cancelled so I need to rebook it."], explanation: "was cancelled + need to rebook။", topic: "travel" },
    ],
    review: [
      { q: "layover နှင့် stopover ကွာခြားချက် ဘာလဲ။", a: "layover သည် တိုတောင်းသည့် ကြားရပ်ဖြစ်ပြီး stopover သည် ပိုကြာပြီး မြို့ထဲ ဝင်နိုင်သည်။" },
      { q: "arrive at နှင့် arrive in ကို ဘယ်လို ခွဲသလဲ။", a: "နေရာငယ် (ဘူတာ၊ လေဆိပ်) → at၊ မြို့/နိုင်ငံ → in။" },
    ],
    summary: ["ခရီးစဉ်ကို အဆင့်လိုက် ဝေါဟာရဖြင့် ဖော်ပြနိုင်သည်။", "ဟိုတယ်၊ လေဆိပ် နှင့် ပြဿနာ ဝေါဟာရ သုံးအုပ်စု ရှိသည်။", "အကြောင်းရင်း-ရလဒ် အစီအစဉ်ဖြင့် ပြဿနာ ရှင်းပြခြင်း ထိရောက်သည်။"],
    mastery: ["ဝေါဟာရ ၁၂ ခုကို ဝါကျထဲ သုံးနိုင်သည်။", "ခရီးစဉ် တစ်ခုကို အဆင့် ၆ ဆင့်ဖြင့် ရေးနိုင်သည်။"],
    topics: ["travel", "transport", "vocabulary"],
  },
  {
    id: "c9-health",
    moduleId: "C",
    title: "Health and Body Vocabulary",
    titleMm: "ကျန်းမာရေး နှင့် ခန္ဓာကိုယ် ဝေါဟာရ",
    level: "B1",
    minutes: 20,
    summaryLine: "ရောဂါလက္ခဏာ ဖော်ပြခြင်း၊ ဆေးခန်း ဆက်သွယ်မှု နှင့် ကျန်းမာသည့် နေထိုင်မှု အကြောင်း ဝေါဟာရ။",
    objectives: ["ရောဂါလက္ခဏာ ၁၀ ခုကို ဖော်ပြနိုင်မည်။", "have got / hurt / feel ကဲ့သို့ ပုံစံများကို သုံးနိုင်မည်။", "ဆရာဝန်နှင့် ဆွေးနွေးမှု အခြေခံ ပြောနိုင်မည်။"],
    vocab: [
      { en: "symptom", mm: "ရောဂါ လက္ခဏာ", pos: "noun", example: "A sore throat is a common symptom.", exampleMm: "လည်ချောင်းနာခြင်းက သာမန် လက္ခဏာ ဖြစ်သည်။", topic: "health", level: "B1" },
      { en: "prescription", mm: "ဆေးညွှန်း", pos: "noun", example: "The doctor gave me a prescription.", exampleMm: "ဆရာဝန်က ဆေးညွှန်း ပေးခဲ့သည်။", topic: "health", level: "B1" },
      { en: "recover", mm: "ပြန်လည် သက်သာလာသည်", pos: "verb", example: "She recovered quickly after surgery.", exampleMm: "ခွဲစိတ်မှု အပြီး သူမ လျင်မြန်စွာ သက်သာလာခဲ့သည်။", topic: "health", level: "B1" },
      { en: "appointment", mm: "ချိန်းဆိုမှု", pos: "noun", example: "I made an appointment with the dentist.", exampleMm: "သွားဆရာဝန်နှင့် ချိန်းဆိုခဲ့သည်။", topic: "health", level: "A2" },
    ],
    sections: [
      {
        heading: "လက္ခဏာ ဖော်ပြခြင်း",
        body: [
          "'I have a headache / a sore throat / a cough.' 'My back hurts.' 'I feel dizzy / sick / exhausted.' 'I've got a temperature.'",
          "hurt သည် နာကျင်ခြင်းကို ပြသည် — 'My knee hurts.' 'It hurts when I walk.' (hurt ကို နာမ်/ကြိယာ နှစ်မျိုး သုံးနိုင်သည်)",
          "ဆေးခန်းတွင် — 'I'd like to make an appointment.' 'I've had this pain for three days.' 'I'm allergic to penicillin.'",
        ],
        table: { headers: ["ဝေါဟာရ", "အဓိပ္ပာယ်", "ဥပမာ"], rows: [["ache", "ကိုက်ခဲခြင်း", "a stomach ache"], ["injury", "ထိခိုက်ဒဏ်ရာ", "a knee injury"], ["treatment", "ကုသမှု", "start treatment"], ["recovery", "ပြန်လည် ကောင်းမွန်မှု", "a full recovery"]] },
      },
      {
        heading: "ကျန်းမာရေး အလေ့အထ",
        body: [
          "keep fit, work out, eat a balanced diet, get enough sleep, cut down on sugar, give up smoking, take up running။",
          "သတိပေးချက် — ဤသင်ခန်းစာသည် ဘာသာစကား သင်ယူမှုသာ ဖြစ်ပြီး ဆေးဘက်ဆိုင်ရာ အကြံပြုချက် မဟုတ်ပါ။ ကျန်းမာရေး ပြဿနာအတွက် ကျွမ်းကျင်သူ ဆရာဝန်နှင့် တိုင်ပင်ပါ။",
        ],
      },
    ],
    examples: [
      { en: "I've had a sore throat for two days.", mm: "နှစ်ရက်ကြာ လည်ချောင်း နာနေသည်။" },
      { en: "My ankle hurts when I run, so I've stopped for now.", mm: "ပြေးလျှင် ခြေချင်းဝတ် နာသဖြင့် ယခု ရပ်ထားသည်။" },
      { en: "The doctor advised me to cut down on salt.", mm: "ဆားလျှော့စားရန် ဆရာဝန် အကြံပြုခဲ့သည်။" },
    ],
    mistakes: [
      { wrong: "I have pain in my head since two days.", right: "I've had a headache for two days.", why: "ကာလအတွက် for သုံးသည်၊ present perfect လိုသည်။" },
      { wrong: "I am feeling myself sick.", right: "I feel sick.", why: "feel + adjective ကို တိုက်ရိုက် သုံးသည်။" },
    ],
    guided: [
      { type: "mcq", prompt: "I'd like to make an ___ with the doctor.", promptMm: "ရွေးပါ။", options: ["appointment", "arrangement", "order", "application"], answer: 0, explanation: "make an appointment။", topic: "health" },
      { type: "fill", prompt: "My leg ___ when I walk. (နာသည်)", promptMm: "ဖြည့်ပါ။", answers: ["hurts"], explanation: "hurt + s (third person)။", topic: "health" },
      { type: "mcq", prompt: "The doctor wrote a ___ for antibiotics.", promptMm: "ရွေးပါ။", options: ["recipe", "prescription", "description", "subscription"], answer: 1, explanation: "prescription = ဆေးညွှန်း။", topic: "health" },
      { type: "correct", prompt: "Correct: I have a headache since yesterday.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["I have had a headache since yesterday.", "I've had a headache since yesterday."], explanation: "since + present perfect။", topic: "health" },
    ],
    independent: [
      { type: "mcq", prompt: "She is ___ from a bad cold.", promptMm: "ရွေးပါ။", options: ["suffering", "hurting", "aching", "painting"], answer: 0, explanation: "suffer from + ရောဂါ။", topic: "health" },
      { type: "fill", prompt: "You should cut ___ on sugary drinks.", promptMm: "ဖြည့်ပါ။", answers: ["down"], explanation: "cut down on။", topic: "health" },
      { type: "mcq", prompt: "Which is a symptom, not a treatment?", promptMm: "လက္ခဏာ ရွေးပါ။", options: ["antibiotics", "a rash", "surgery", "a prescription"], answer: 1, explanation: "rash = အနီကွက် (လက္ခဏာ)။", topic: "health" },
      { type: "translate", prompt: "Translate: ကျွန်တော့် ခေါင်းက နာနေတယ်၊ အိပ်ချင်တယ်။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["I have a headache and I feel sleepy.", "My head hurts and I feel sleepy."], explanation: "have a headache / my head hurts။", topic: "health" },
    ],
    review: [
      { q: "ache နှင့် pain ကွာခြားချက် ဘာလဲ။", a: "ache သည် နာကျင်မှု အမျိုးအစား (headache, toothache)၊ pain သည် နာကျင်မှု ယေဘုယျ။" },
      { q: "since နှင့် for ကို ဘယ်လို ခွဲသလဲ။", a: "since + အချိန်အမှတ် (since Monday)၊ for + ကာလ (for two days)။" },
    ],
    summary: ["လက္ခဏာကို have/hurt/feel ဖြင့် ဖော်ပြသည်။", "ဆေးခန်း ဆွေးနွေးမှုတွင် appointment, prescription, allergy လိုသည်။", "ကျန်းမာရေး အကြံပြုချက်သည် ဘာသာစကား လေ့ကျင့်ခန်းသာ ဖြစ်သည်။"],
    mastery: ["လက္ခဏာ ၁၀ ခုကို မှန်ကန်စွာ ဖော်ပြနိုင်သည်။", "ဆရာဝန်နှင့် ဆွေးနွေးမှု ၆ ကြောင်း ရေးနိုင်သည်။"],
    topics: ["health", "vocabulary", "collocations"],
  },
  {
    id: "c10-business",
    moduleId: "C",
    title: "Business and Workplace Vocabulary",
    titleMm: "စီးပွားရေး နှင့် အလုပ်ခွင် ဝေါဟာရ",
    level: "B2",
    minutes: 22,
    summaryLine: "ကုမ္ပဏီ ဖွဲ့စည်းပုံ၊ အစည်းအဝေး၊ စျေးကွက် နှင့် ငွေကြေး ဆိုင်ရာ အလုပ်ခွင် ဝေါဟာရ။",
    objectives: ["အလုပ်ခွင် ဝေါဟာရ ၁၂ ခု သိမည်။", "ကုမ္ပဏီ ဖွဲ့စည်းပုံကို ရှင်းပြနိုင်မည်။", "အစည်းအဝေးတွင် သုံးသည့် စကားစုများ သုံးနိုင်မည်။"],
    vocab: [
      { en: "stakeholder", mm: "သက်ဆိုင်သူ", pos: "noun", example: "We consulted all stakeholders first.", exampleMm: "ကျွန်တော်တို့ သက်ဆိုင်သူ အားလုံးနှင့် အရင် တိုင်ပင်ခဲ့သည်။", topic: "business", level: "B2" },
      { en: "revenue", mm: "ဝင်ငွေ", pos: "noun", example: "Revenue grew by ten percent.", exampleMm: "ဝင်ငွေ ဆယ်ရာခိုင်နှုန်း တိုးခဲ့သည်။", topic: "business", level: "B2" },
      { en: "deadline", mm: "နောက်ဆုံး ရက်စွဲ", pos: "noun", example: "We met the deadline.", exampleMm: "နောက်ဆုံး ရက်စွဲ မီခဲ့သည်။", topic: "business", level: "B1" },
      { en: "outsource", mm: "ပြင်ပ အဖွဲ့အစည်းသို့ အပ်နှံသည်", pos: "verb", example: "They outsourced customer service.", exampleMm: "သူတို့ ဖောက်သည်ဝန်ဆောင်မှုကို ပြင်ပသို့ အပ်ခဲ့သည်။", topic: "business", level: "B2" },
    ],
    sections: [
      {
        heading: "ကုမ္ပဏီ နှင့် အလုပ်အကိုင်",
        body: [
          "ဖွဲ့စည်းပုံ — CEO, board of directors, department, manager, employee, intern, freelancer။",
          "လုပ်ငန်းစဉ် — launch a product, meet a target, cut costs, expand into a new market, negotiate a contract, take on staff။",
          "ငွေကြေး — revenue, profit, loss, budget, investment, cash flow, break even။",
        ],
        table: { headers: ["ဝေါဟာရ", "အဓိပ္ပာယ်", "ဥပမာ"], rows: [["profit", "အမြတ်", "make a profit"], ["turnover", "ရောင်းအား စုစုပေါင်း", "annual turnover"], ["merger", "ကုမ္ပဏီ ပူးပေါင်းမှု", "a merger with a rival"], ["startup", "စတင်လုပ်ငန်း", "a tech startup"]] },
      },
      {
        heading: "အစည်းအဝေး စကားစုများ",
        body: [
          "စတင်ခြင်း — 'Shall we get started?' 'The purpose of today's meeting is…'",
          "သဘောထား ဖော်ပြခြင်း — 'In my view…' 'I'd like to add…' 'Could we go back to…?' 'Let's park that for now.'",
          "အဆုံးသတ်ခြင်း — 'To sum up…' 'We'll follow up by email.' 'Let's assign action points.'",
        ],
      },
    ],
    examples: [
      { en: "Our revenue grew, but rising costs reduced our profit.", mm: "ဝင်ငွေ တိုးခဲ့သော်လည်း ကုန်ကျစရိတ် တက်လာသဖြင့် အမြတ် လျော့ခဲ့သည်။" },
      { en: "We need to cut costs without reducing quality.", mm: "အရည်အသွေး မလျှော့ဘဲ ကုန်ကျစရိတ် ဖြတ်ရန် လိုသည်။" },
      { en: "The board approved the merger after a long negotiation.", mm: "ရှည်လျားသည့် ညှိနှိုင်းမှု အပြီး ဒါရိုက်တာ အဖွဲ့က ပူးပေါင်းမှုကို အတည်ပြုခဲ့သည်။" },
    ],
    mistakes: [
      { wrong: "We discussed about the budget.", right: "We discussed the budget.", why: "discuss တွင် about မလိုပါ။" },
      { wrong: "The company made a big profit of money.", right: "The company made a large profit.", why: "profit နှင့် money ကို ထပ်မသုံးပါ။" },
    ],
    guided: [
      { type: "mcq", prompt: "Money coming into a business is called ___.", promptMm: "ရွေးပါ။", options: ["profit", "revenue", "budget", "loss"], answer: 1, explanation: "revenue = ဝင်ငွေ။", topic: "business" },
      { type: "fill", prompt: "We must meet the ___ by Friday. (နောက်ဆုံး ရက်စွဲ)", promptMm: "ဖြည့်ပါ။", answers: ["deadline"], explanation: "meet the deadline။", topic: "business" },
      { type: "mcq", prompt: "To ___ costs means to reduce them.", promptMm: "ရွေးပါ။", options: ["cut", "break", "raise", "take"], answer: 0, explanation: "cut costs။", topic: "business" },
      { type: "correct", prompt: "Correct: They discussed about the new plan.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["They discussed the new plan."], explanation: "discuss + object (about မလို)။", topic: "business" },
    ],
    independent: [
      { type: "mcq", prompt: "A company that has just started is a ___.", promptMm: "ရွေးပါ။", options: ["startup", "merger", "branch", "turnover"], answer: 0, explanation: "startup = စတင်လုပ်ငန်း။", topic: "business" },
      { type: "fill", prompt: "They decided to ___ into the Asian market.", promptMm: "ဖြည့်ပါ။", answers: ["expand"], explanation: "expand into a market။", topic: "business" },
      { type: "mcq", prompt: "Which phrase ends a meeting politely?", promptMm: "ရွေးပါ။", options: ["Let's park that for now.", "To sum up, we'll follow up by email.", "In my view…", "Could we go back to…?"], answer: 1, explanation: "အကျဉ်းချုပ် + နောက်ဆက်တွဲ လုပ်ဆောင်ချက်။", topic: "business" },
      { type: "translate", prompt: "Translate: ကုမ္ပဏီက ကုန်ကျစရိတ် ဖြတ်ဖို့ ဆုံးဖြတ်ခဲ့တယ်။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["The company decided to cut costs.", "The company has decided to cut costs."], explanation: "decide to + verb။", topic: "business" },
    ],
    review: [
      { q: "revenue နှင့် profit ကွာခြားချက် ဘာလဲ။", a: "revenue = ရောင်းချမှုမှ ရသည့် စုစုပေါင်း ဝင်ငွေ၊ profit = ကုန်ကျစရိတ် နုတ်ပြီးနောက် ကျန်သည့် အမြတ်။" },
      { q: "break even ဆိုတာ ဘာလဲ။", a: "အမြတ်လည်း မရ၊ အရှုံးလည်း မရ ဖြစ်ခြင်း (ဝင်ငွေ = ကုန်ကျစရိတ်)။" },
    ],
    summary: ["အလုပ်ခွင် ဝေါဟာရကို ဖွဲ့စည်းပုံ၊ လုပ်ငန်းစဉ် နှင့် ငွေကြေး အုပ်စု ခွဲနိုင်သည်။", "အစည်းအဝေး စကားစုများကို ရည်ရွယ်ချက်အလိုက် ရွေးသည်။", "discuss, meet, cut ကဲ့သို့ ကြိယာတွဲဖက်မှုကို မှတ်ရသည်။"],
    mastery: ["ဝေါဟာရ ၁၂ ခုကို မှန်ကန်စွာ သုံးနိုင်သည်။", "အစည်းအဝေး တစ်ခုကို စာကြောင်း ၈ ကြောင်းဖြင့် ဖော်ပြနိုင်သည်။"],
    topics: ["business", "work", "vocabulary"],
  },
];

export const moduleCLessonsPart2: Lesson[] = buildLessons(seeds);
