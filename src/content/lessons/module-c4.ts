import type { Lesson } from "@/lib/types";
import { buildLessons, type LessonSeed } from "./builder.ts";

const seeds: LessonSeed[] = [
  {
    id: "c16-jobs-workplace",
    moduleId: "C",
    title: "Jobs and the Workplace",
    titleMm: "အလုပ်အကိုင် နှင့် အလုပ်ခွင် ဝေါဟာရ",
    level: "B1",
    minutes: 20,
    summaryLine: "အလုပ်ရှာဖွေခြင်း၊ အလုပ်အကိုင် အမျိုးအစား နှင့် အလုပ်ခွင် ဆက်ဆံရေး ဝေါဟာရ။",
    objectives: ["အလုပ်အကိုင် ဝေါဟာရ ၁၂ ခု သိမည်။", "apply for, be responsible for ကဲ့သို့ တွဲဖက်မှု သုံးနိုင်မည်။", "ကိုယ့်အလုပ် အတွေ့အကြုံကို ဖော်ပြနိုင်မည်။"],
    vocab: [
      { en: "apply for", mm: "လျှောက်ထားသည်", pos: "verb + prep", example: "I applied for a marketing job.", exampleMm: "စျေးကွက် အလုပ်တစ်ခုကို လျှောက်ထားခဲ့သည်။", topic: "jobs", level: "A2" },
      { en: "shift", mm: "အလုပ်ချိန် အလှည့်", pos: "noun", example: "She works the night shift.", exampleMm: "သူမ ညအလှည့်တွင် အလုပ်လုပ်သည်။", topic: "jobs", level: "B1" },
      { en: "colleague", mm: "လုပ်ဖော်ကိုင်ဖက်", pos: "noun", example: "My colleagues are very supportive.", exampleMm: "ကျွန်တော့် လုပ်ဖော်ကိုင်ဖက်များ အလွန် ပံ့ပိုးပေးကြသည်။", topic: "jobs", level: "A2" },
      { en: "promotion", mm: "ရာထူးတိုးမှု", pos: "noun", example: "He got a promotion after two years.", exampleMm: "နှစ်နှစ် အပြီး သူ ရာထူးတိုး ရခဲ့သည်။", topic: "jobs", level: "B1" },
    ],
    sections: [
      {
        heading: "အလုပ်အကိုင် အမျိုးအစားများ",
        body: [
          "full-time, part-time, temporary, permanent, freelance, remote, hybrid, internship, apprenticeship။",
          "အလုပ်ရှာဖွေမှု — job advert, application form, CV/résumé, cover letter, shortlist, interview, reference, probation period။",
          "အလုပ်ခွင်တွင် — workload, overtime, deadline, team meeting, appraisal, resignation, redundancy။",
        ],
        table: { headers: ["ဝေါဟာရ", "အဓိပ္ပာယ်", "ဥပမာ"], rows: [["salary", "လစာ (နှစ်စဉ်/လစဉ်)", "a competitive salary"], ["wage", "အလုပ်ခ ပေးချေမှု (နာရီအလိုက်)", "hourly wage"], ["benefit", "ခံစားခွင့်", "health benefits"], ["overtime", "အချိန်ပို", "work overtime"]] },
      },
      {
        heading: "အတွေ့အကြုံ ဖော်ပြခြင်း",
        body: [
          "'I have three years' experience in customer service.' 'I am responsible for managing a small team.' 'I report to the operations manager.'",
          "CV တွင် ကြိယာဖြင့် စသည့် အချက်များ သုံးသည် — 'Managed…', 'Developed…', 'Improved…'။",
        ],
      },
    ],
    examples: [
      { en: "I applied for a part-time job at a language school.", mm: "ဘာသာစကား ကျောင်းတွင် အချိန်ပိုင်း အလုပ်တစ်ခု လျှောက်ထားခဲ့သည်။" },
      { en: "She was promoted to team leader after eighteen months.", mm: "တစ်နှစ်ခွဲ အပြီး သူမ အဖွဲ့ခေါင်းဆောင် အဖြစ် ရာထူးတိုး ခံခဲ့ရသည်။" },
      { en: "The probation period is three months.", mm: "စမ်းသပ်ကာလသည် သုံးလ ဖြစ်သည်။" },
    ],
    mistakes: [
      { wrong: "I applied a job.", right: "I applied for a job.", why: "apply for + အလုပ်/ပညာသင်ဆု။" },
      { wrong: "I have five years experiences.", right: "I have five years' experience.", why: "experience သည် ဤအဓိပ္ပာယ်တွင် ရေတွက်မရ။" },
    ],
    guided: [
      { type: "mcq", prompt: "He ___ for the position last week.", promptMm: "ရွေးပါ။", options: ["applied", "apply", "applying", "application"], answer: 0, explanation: "past simple → applied။", topic: "jobs" },
      { type: "fill", prompt: "She works the night ___ at the hospital. (အလှည့်)", promptMm: "ဖြည့်ပါ။", answers: ["shift"], explanation: "night shift။", topic: "jobs" },
      { type: "mcq", prompt: "Payment based on hours worked is a ___.", promptMm: "ရွေးပါ။", options: ["salary", "wage", "bonus", "pension"], answer: 1, explanation: "wage = နာရီအလိုက် အလုပ်ခ။", topic: "jobs" },
      { type: "correct", prompt: "Correct: I am responsible of the budget.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["I am responsible for the budget."], explanation: "responsible for။", topic: "jobs" },
    ],
    independent: [
      { type: "mcq", prompt: "A job that lasts only a few months is ___.", promptMm: "ရွေးပါ။", options: ["permanent", "temporary", "full-time", "senior"], answer: 1, explanation: "temporary = ယာယီ။", topic: "jobs" },
      { type: "fill", prompt: "He handed in his ___ after ten years. (နုတ်ထွက်စာ)", promptMm: "ဖြည့်ပါ။", answers: ["resignation"], explanation: "hand in a resignation။", topic: "jobs" },
      { type: "mcq", prompt: "Who do you ___ to in your company?", promptMm: "ရွေးပါ။", options: ["report", "answer", "obey", "follow"], answer: 0, explanation: "report to + အထက်လူကြီး။", topic: "jobs" },
      { type: "translate", prompt: "Translate: ကျွန်တော် ဒီကုမ္ပဏီမှာ သုံးနှစ် အတွေ့အကြုံ ရှိတယ်။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["I have three years' experience at this company.", "I have three years of experience in this company."], explanation: "years' experience / years of experience။", topic: "jobs" },
    ],
    review: [
      { q: "salary နှင့် wage ကွာခြားချက် ဘာလဲ။", a: "salary = လစဉ်/နှစ်စဉ် သတ်မှတ် လစာ၊ wage = နာရီ/ရက် အလိုက် ပေးသည့် အလုပ်ခ။" },
      { q: "probation period ဆိုတာ ဘာလဲ။", a: "အလုပ်သစ် စတင်ပြီး စမ်းသပ်သည့် ကာလ။" },
    ],
    summary: ["အလုပ်အကိုင် ဝေါဟာရကို အလုပ်အမျိုးအစား၊ ရှာဖွေမှု နှင့် အလုပ်ခွင် အုပ်စု ခွဲနိုင်သည်။", "apply for, responsible for ကဲ့သို့ တွဲဖက်မှုကို မှတ်ရသည်။", "အတွေ့အကြုံကို ကိန်းဂဏန်းဖြင့် ဖော်ပြခြင်း ထိရောက်သည်။"],
    mastery: ["ဝေါဟာရ ၁၂ ခုကို ဝါကျထဲ သုံးနိုင်သည်။", "CV အပိုင်း ၅ ကြောင်း ကိုယ်တိုင် ရေးနိုင်သည်။"],
    topics: ["jobs", "work", "vocabulary"],
  },
  {
    id: "c17-money-banking",
    moduleId: "C",
    title: "Money and Banking",
    titleMm: "ငွေကြေး နှင့် ဘဏ်လုပ်ငန်း ဝေါဟာရ",
    level: "B1",
    minutes: 20,
    summaryLine: "ဘဏ်စာရင်း၊ ငွေလွှဲခြင်း၊ ချေးငွေ နှင့် ကိုယ်ပိုင် ဘဏ္ဍာ စီမံမှု ဝေါဟာရ။",
    objectives: ["ဘဏ် ဝေါဟာရ ၁၂ ခု သိမည်။", "open an account, transfer, withdraw ကဲ့သို့ ကြိယာများ သုံးနိုင်မည်။", "ဘဏ်တွင် ယဉ်ကျေးစွာ မေးနိုင်မည်။"],
    vocab: [
      { en: "account", mm: "ဘဏ်စာရင်း", pos: "noun", example: "I opened a savings account.", exampleMm: "စုငွေစာရင်း ဖွင့်ခဲ့သည်။", topic: "banking", level: "A2" },
      { en: "withdraw", mm: "ငွေထုတ်သည်", pos: "verb", example: "I withdrew 50,000 kyat.", exampleMm: "ငွေ ၅၀,၀၀၀ ကျပ် ထုတ်ခဲ့သည်။", topic: "banking", level: "B1" },
      { en: "interest rate", mm: "အတိုးနှုန်း", pos: "noun", example: "The interest rate is low this year.", exampleMm: "ဒီနှစ် အတိုးနှုန်း နည်းသည်။", topic: "banking", level: "B1" },
      { en: "loan", mm: "ချေးငွေ", pos: "noun", example: "They took out a loan to buy a house.", exampleMm: "အိမ်ဝယ်ရန် သူတို့ ချေးငွေ ယူခဲ့သည်။", topic: "banking", level: "B1" },
    ],
    sections: [
      {
        heading: "ဘဏ် လုပ်ငန်းစဉ်များ",
        body: [
          "open/close an account, deposit money, withdraw cash, transfer funds, check the balance, pay by card, set up a standing order။",
          "ချေးငွေ — take out a loan, pay it back in instalments, interest, collateral, credit score, debt။",
          "ကိုယ်ပိုင် ဘဏ္ဍာ — budget, save up for, spend within your means, emergency fund, invest, overspend။",
        ],
        table: { headers: ["ဝေါဟာရ", "အဓိပ္ပာယ်", "ဥပမာ"], rows: [["balance", "လက်ကျန်ငွေ", "check your balance"], ["deposit", "အပ်ငွေ", "make a deposit"], ["fee", "ဝန်ဆောင်ခ", "a transfer fee"], ["savings", "စုငွေ", "use your savings"]] },
      },
      {
        heading: "ဘဏ်တွင် ပြောဆိုခြင်း",
        body: [
          "'I'd like to open an account, please.' 'Could you tell me the exchange rate today?' 'Is there a fee for international transfers?'",
          "အင်တာနက် ဘဏ်လုပ်ငန်းတွင် — online banking, mobile wallet, PIN, password, two-factor authentication။ ဤစကားလုံးများကို သိထားခြင်းက လုံခြုံမှု အတွက် အရေးကြီးသည်။",
        ],
      },
    ],
    examples: [
      { en: "I deposited my salary and paid the rent by transfer.", mm: "လစာ အပ်ပြီး အိမ်ခကို ငွေလွှဲဖြင့် ပေးခဲ့သည်။" },
      { en: "The bank charges a small fee for withdrawals abroad.", mm: "နိုင်ငံခြားတွင် ငွေထုတ်လျှင် ဘဏ်က ဝန်ဆောင်ခ အနည်းငယ် ကောက်သည်။" },
      { en: "We are saving up for a deposit on a flat.", mm: "တိုက်ခန်း စပေါ်ငွေအတွက် စုနေကြသည်။" },
    ],
    mistakes: [
      { wrong: "I withdrawed the money.", right: "I withdrew the money.", why: "withdraw ၏ အတိတ်သည် withdrew။" },
      { wrong: "I need to open a bank.", right: "I need to open a bank account.", why: "ဖွင့်သည်မှာ စာရင်း ဖြစ်သည်။" },
    ],
    guided: [
      { type: "mcq", prompt: "I'd like to ___ some money into my account.", promptMm: "ရွေးပါ။", options: ["deposit", "withdraw", "spend", "charge"], answer: 0, explanation: "deposit = အပ်သည်။", topic: "banking" },
      { type: "fill", prompt: "She ___ 20,000 kyat from the ATM. (withdraw ၏ အတိတ်)", promptMm: "ဖြည့်ပါ။", answers: ["withdrew"], explanation: "withdrew။", topic: "banking" },
      { type: "mcq", prompt: "Money you owe the bank is your ___.", promptMm: "ရွေးပါ။", options: ["savings", "debt", "balance", "deposit"], answer: 1, explanation: "debt = အကြွေး။", topic: "banking" },
      { type: "correct", prompt: "Correct: I would like opening a savings account.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["I would like to open a savings account.", "I'd like to open a savings account."], explanation: "would like + to + verb။", topic: "banking" },
    ],
    independent: [
      { type: "mcq", prompt: "They are paying back the loan in monthly ___.", promptMm: "ရွေးပါ။", options: ["instalments", "deposits", "balances", "fees"], answer: 0, explanation: "instalments = အရစ်ကျ။", topic: "banking" },
      { type: "fill", prompt: "What is the exchange ___ today?", promptMm: "ဖြည့်ပါ။", answers: ["rate"], explanation: "exchange rate။", topic: "banking" },
      { type: "mcq", prompt: "Which is the safest habit?", promptMm: "အလုံခြုံဆုံး အလေ့အထ ရွေးပါ။", options: ["Share your PIN with friends.", "Keep an emergency fund.", "Borrow to invest in lottery tickets.", "Ignore your balance."], answer: 1, explanation: "အရေးပေါ် ရန်ပုံငွေ ထားခြင်းက လုံခြုံသည်။", topic: "banking" },
      { type: "translate", prompt: "Translate: ကျွန်တော် ငွေလွှဲချင်ပါတယ်။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["I would like to transfer some money.", "I'd like to make a transfer.", "I want to transfer money."], explanation: "transfer money / make a transfer။", topic: "banking" },
    ],
    review: [
      { q: "deposit နှင့် withdraw ကွာခြားချက် ဘာလဲ။", a: "deposit = ငွေအပ်၊ withdraw = ငွေထုတ်။" },
      { q: "interest rate ဆိုတာ ဘာလဲ။", a: "ချေးငွေ/စုငွေအပေါ် တွက်သည့် အတိုးနှုန်း။" },
    ],
    summary: ["ဘဏ် ဝေါဟာရတွင် စာရင်း၊ ငွေလွှဲမှု နှင့် ချေးငွေ အုပ်စုများ ရှိသည်။", "withdraw ၏ အတိတ်သည် withdrew။", "ကိုယ်ပိုင် ဘဏ္ဍာ စီမံမှုတွင် မိမိ ဝင်ငွေအတွင်း သုံးခြင်း အရေးကြီးသည်။"],
    mastery: ["ဝေါဟာရ ၁၂ ခုကို မှန်ကန်စွာ သုံးနိုင်သည်။", "ဘဏ်တွင် မေးခွန်း ၅ ခု ယဉ်ကျေးစွာ မေးနိုင်သည်။"],
    topics: ["banking", "money", "vocabulary"],
  },
  {
    id: "c18-transport",
    moduleId: "C",
    title: "Transport and Getting Around",
    titleMm: "သယ်ယူပို့ဆောင်ရေး ဝေါဟာရ",
    level: "B1",
    minutes: 18,
    summaryLine: "မြို့တွင်း သွားလာခြင်း၊ လမ်းညွှန်ချက် နှင့် သယ်ယူပို့ဆောင်ရေး ပြဿနာ ဝေါဟာရ။",
    objectives: ["သယ်ယူပို့ဆောင်ရေး ဝေါဟာရ ၁၂ ခု သိမည်။", "take/catch/miss/board ကဲ့သို့ ကြိယာ ရွေးနိုင်မည်။", "ခရီးစဉ် လမ်းညွှန်ချက် ပေးနိုင်မည်။"],
    vocab: [
      { en: "fare", mm: "ခရီးစရိတ်", pos: "noun", example: "The bus fare has increased.", exampleMm: "ဘတ်စ်ကား ခရီးစရိတ် တက်သွားသည်။", topic: "transport", level: "B1" },
      { en: "platform", mm: "ရထားပလက်ဖောင်း", pos: "noun", example: "The train leaves from platform three.", exampleMm: "ရထားက ပလက်ဖောင်း သုံးမှ ထွက်သည်။", topic: "transport", level: "A2" },
      { en: "traffic jam", mm: "ယာဉ်ကြောပိတ်ဆို့မှု", pos: "noun", example: "We were stuck in a traffic jam for an hour.", exampleMm: "တစ်နာရီကြာ ယာဉ်ကြောပိတ်ဆို့မှုထဲ ပိတ်မိခဲ့သည်။", topic: "transport", level: "A2" },
      { en: "route", mm: "လမ်းကြောင်း", pos: "noun", example: "This bus follows a different route.", exampleMm: "ဒီဘတ်စ်ကား မတူညီသည့် လမ်းကြောင်း လိုက်သည်။", topic: "transport", level: "B1" },
    ],
    sections: [
      {
        heading: "ကြိယာ ရွေးချယ်မှု",
        body: [
          "take a bus/train/taxi = စီးသည်။ catch a train = အချိန်မီ ဖမ်းမိသည်။ miss a train = လွတ်သည်။ board a plane = တက်သည်။ get on/off = တက်/ဆင်း။",
          "အခြေခံ အဆောက်အအုံ — bus stop, station, terminal, platform, ticket office, crossing, roundabout, pavement။",
          "ပြဿနာ — delay, cancellation, roadworks, diversion, breakdown, overcrowded။",
        ],
        table: { headers: ["ဝေါဟာရ", "အဓိပ္ပာယ်", "ဥပမာ"], rows: [["one-way street", "တစ်လမ်းမောင်း လမ်း", "It's a one-way street."], ["pedestrian", "လမ်းသွား", "pedestrian crossing"], ["commute", "အလုပ်သွား ခရီး", "a daily commute"], ["rush hour", "လူထူချိန်", "avoid the rush hour"]] },
      },
      {
        heading: "လမ်းညွှန်ချက် ပေးခြင်း",
        body: [
          "'Go straight on for about 200 metres, then turn left at the traffic lights.' 'It's opposite the bank.' 'It's next to the market.'",
          "ဝိဘတာ တိကျမှု — opposite (မျက်နှာချင်းဆိုင်), next to (ဘေး), between (အကြား), behind (နောက်), across from (တစ်ဖက်)။",
        ],
      },
    ],
    examples: [
      { en: "I usually commute by train because the roads are busy.", mm: "လမ်းများ လူထူသဖြင့် များသောအားဖြင့် ရထားဖြင့် သွားသည်။" },
      { en: "We missed the last bus and had to walk home.", mm: "နောက်ဆုံး ဘတ်စ်ကား လွတ်သဖြင့် အိမ်အထိ လမ်းလျှောက်ခဲ့ရသည်။" },
      { en: "The station is opposite the post office, next to a small café.", mm: "ဘူတာက စာတိုက်နှင့် မျက်နှာချင်းဆိုင်၊ ကော်ဖီဆိုင်ငယ် ဘေးတွင် ရှိသည်။" },
    ],
    mistakes: [
      { wrong: "I caught on the bus.", right: "I caught the bus / I got on the bus.", why: "catch + ယာဉ် (on မလို)။" },
      { wrong: "I go to work with bus.", right: "I go to work by bus.", why: "ယာဉ်ဖြင့် → by + ယာဉ်။" },
    ],
    guided: [
      { type: "mcq", prompt: "Hurry, or we'll ___ the train.", promptMm: "ရွေးပါ။", options: ["lose", "miss", "fail", "drop"], answer: 1, explanation: "miss a train = လွတ်သည်။", topic: "transport" },
      { type: "fill", prompt: "The train leaves from ___ two.", promptMm: "ဖြည့်ပါ။", answers: ["platform"], explanation: "platform။", topic: "transport" },
      { type: "mcq", prompt: "I go to school ___ foot every day.", promptMm: "ရွေးပါ။", options: ["by", "on", "with", "in"], answer: 1, explanation: "on foot သည် ပုံသေ စကားစု ဖြစ်ပြီး by မသုံးပါ။", topic: "transport" },
      { type: "correct", prompt: "Correct: The bank is next the market.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["The bank is next to the market."], explanation: "next to = ဘေး/ကပ်လျက် — to မဖြစ်မနေ လိုသည်။", topic: "transport" },
    ],
    independent: [
      { type: "mcq", prompt: "The bus was ___ so we had to stand.", promptMm: "ရွေးပါ။", options: ["overcrowded", "overloaded", "overbooked", "overtaken"], answer: 0, explanation: "overcrowded = လူပြည့်ကျပ်နေသည်။", topic: "transport" },
      { type: "fill", prompt: "How much is the ___ to Bago?", promptMm: "ဖြည့်ပါ။", answers: ["fare"], explanation: "fare = ခရီးစရိတ်။", topic: "transport" },
      { type: "order", prompt: "Arrange the directions.", promptMm: "စီပါ။", tokens: ["then", "Go", "on", "straight", "left", "turn"], answer: "Go straight on then turn left", explanation: "Go straight on, then turn left။", topic: "transport" },
      { type: "translate", prompt: "Translate: ဘူတာက စျေးနဲ့ မျက်နှာချင်းဆောင် ရှိတယ်။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["The station is opposite the market.", "The station is across from the market."], explanation: "opposite + နာမ်။", topic: "transport" },
    ],
    review: [
      { q: "catch နှင့် miss ကို ဘယ်လို သုံးသလဲ။", a: "catch a train = အချိန်မီ ဖမ်းမိသည်။ miss a train = လွတ်သည်။" },
      { q: "by bus နှင့် on foot ကွာခြားချက် ဘာလဲ။", a: "by + ယာဉ်၊ on foot သည် ပုံသေ စကားစု။" },
    ],
    summary: ["သယ်ယူပို့ဆောင်ရေး ဝေါဟာရတွင် ယာဉ်၊ အဆောက်အအုံ နှင့် ပြဿနာ အုပ်စုများ ရှိသည်။", "take/catch/miss ကို အခြေအနေအလိုက် ရွေးသည်။", "လမ်းညွှန်ချက်တွင် ဝိဘတ် တိကျမှု လိုသည်။"],
    mastery: ["ဝေါဟာရ ၁၂ ခုကို သုံးနိုင်သည်။", "လမ်းညွှန်ချက် ၅ ဆင့်ကို ရေးနိုင်သည်။"],
    topics: ["transport", "directions", "vocabulary"],
  },
  {
    id: "c19-housing",
    moduleId: "C",
    title: "Housing and Accommodation",
    titleMm: "အိမ်ရာ နှင့် နေထိုင်မှု ဝေါဟာရ",
    level: "B1",
    minutes: 20,
    summaryLine: "အိမ်ငှားခြင်း၊ နေအိမ် အမျိုးအစား နှင့် အိမ်တွင်း ပြဿနာ ဖော်ပြခြင်း ဝေါဟာရ။",
    objectives: ["အိမ်ရာ ဝေါဟာရ ၁၂ ခု သိမည်။", "rent, landlord, deposit စသည်တို့ကို သုံးနိုင်မည်။", "အိမ်တွင် ပြဿနာ ဖော်ပြနိုင်မည်။"],
    vocab: [
      { en: "tenant", mm: "အိမ်ငှားသူ", pos: "noun", example: "The tenant pays rent monthly.", exampleMm: "အိမ်ငှားသူက လစဉ် အိမ်ခ ပေးသည်။", topic: "housing", level: "B1" },
      { en: "landlord", mm: "အိမ်ပိုင်ရှင်", pos: "noun", example: "The landlord repaired the roof.", exampleMm: "အိမ်ပိုင်ရှင်က အမိုး ပြင်ခဲ့သည်။", topic: "housing", level: "B1" },
      { en: "deposit", mm: "အာမခံငွေ", pos: "noun", example: "We paid one month's deposit.", exampleMm: "တစ်လစာ အာမခံငွေ ပေးခဲ့သည်။", topic: "housing", level: "B1" },
      { en: "furnished", mm: "ပရိဘောဂ အပြည့်အစုံ ပါသော", pos: "adjective", example: "We rented a furnished flat.", exampleMm: "ပရိဘောဂ အပြည့်အစုံ ပါသည့် တိုက်ခန်း ငှားခဲ့သည်။", topic: "housing", level: "B1" },
    ],
    sections: [
      {
        heading: "နေအိမ် အမျိုးအစားများ",
        body: [
          "flat/apartment, house, bungalow, terraced house, studio, dormitory, shared accommodation, guesthouse။",
          "အခြေအနေ ဖော်ပြချက် — furnished/unfurnished, spacious, cramped, well-lit, noisy, on the ground floor, bills included။",
          "ငှားရမ်းခြင်း — rent, deposit, lease, tenancy agreement, utilities, notice period။",
        ],
        table: { headers: ["ဝေါဟာရ", "အဓိပ္ပာယ်", "ဥပမာ"], rows: [["utilities", "မီး/ရေ ကုန်ကျစရိတ်", "utilities are included"], ["rent", "အိမ်ခ", "pay the rent"], ["commute", "အလုပ်သွား ခရီး", "a long commute"], ["neighbourhood", "ရပ်ကွက်", "a quiet neighbourhood"]] },
      },
      {
        heading: "ပြဿနာ ဖော်ပြခြင်း",
        body: [
          "'The tap is leaking.' 'The heating isn't working.' 'There's a problem with the water supply.' 'Could you send someone to fix it?'",
          "ပြင်ဆင်ခိုင်းရန် — 'Could you have the tap repaired?' သို့မဟုတ် 'I'd like to report a fault.'",
        ],
      },
    ],
    examples: [
      { en: "We are looking for a two-bedroom flat near the city centre.", mm: "မြို့လယ်နှင့် နီးသည့် အခန်းနှစ်ခန်း တိုက်ခန်း ရှာနေသည်။" },
      { en: "The rent is reasonable, but utilities are not included.", mm: "အိမ်ခက သင့်တင့်သော်လည်း မီး/ရေ ကုန်ကျစရိတ် မပါပါ။" },
      { en: "I reported the leaking tap to the landlord twice.", mm: "ယိုနေသည့် ဘုံပိုင်ခွက်ကို အိမ်ပိုင်ရှင်ထံ နှစ်ကြိမ် တိုင်ခဲ့သည်။" },
    ],
    mistakes: [
      { wrong: "I rent a house to my landlord.", right: "I rent a house from my landlord.", why: "ငှားသူထံမှ ငှားလျှင် rent from။" },
      { wrong: "The flat has a lot of furnitures.", right: "The flat is well furnished.", why: "furniture သည် ရေတွက်မရ။" },
    ],
    guided: [
      { type: "mcq", prompt: "The money you pay before moving in is a ___.", promptMm: "ရွေးပါ။", options: ["rent", "deposit", "fee", "loan"], answer: 1, explanation: "deposit = အာမခံငွေ။", topic: "housing" },
      { type: "fill", prompt: "We rent the flat ___ a local family. (from/to)", promptMm: "ဖြည့်ပါ။", answers: ["from"], explanation: "rent from။", topic: "housing" },
      { type: "mcq", prompt: "A flat with furniture is ___.", promptMm: "ရွေးပါ။", options: ["unfurnished", "furnished", "furniture", "furnishing"], answer: 1, explanation: "furnished။", topic: "housing" },
      { type: "correct", prompt: "Correct: The heating don't work.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["The heating doesn't work.", "The heating does not work."], explanation: "heating သည် အနည်းကိန်း။", topic: "housing" },
    ],
    independent: [
      { type: "mcq", prompt: "Electricity and water are called ___.", promptMm: "ရွေးပါ။", options: ["utilities", "facilities", "amenities", "rents"], answer: 0, explanation: "utilities = မီး/ရေ ကုန်ကျစရိတ်။", topic: "housing" },
      { type: "fill", prompt: "The tap is ___ — water is coming out. (ယိုနေသည်)", promptMm: "ဖြည့်ပါ။", answers: ["leaking"], explanation: "leak = ယိုသည်။ is leaking သည် present continuous။", topic: "housing" },
      { type: "mcq", prompt: "Which is the most polite way to report a fault?", promptMm: "ရွေးပါ။", options: ["Fix the tap now!", "The tap is broken. Fix it.", "I'd like to report a problem with the tap.", "Your tap is bad."], answer: 2, explanation: "report a problem သည် ယဉ်ကျေးသည်။", topic: "housing" },
      { type: "translate", prompt: "Translate: အိမ်ခက တစ်လ ကျပ် ၃ သိန်း ဖြစ်တယ်။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["The rent is 300,000 kyat a month.", "The rent is 300,000 kyats per month."], explanation: "rent is … a month။", topic: "housing" },
    ],
    review: [
      { q: "tenant နှင့် landlord ကွာခြားချက် ဘာလဲ။", a: "tenant = ငှားနေသူ၊ landlord = ပိုင်ရှင်။" },
      { q: "furnished ဆိုတာ ဘာလဲ။", a: "ပရိဘောဂ အပြည့်အစုံ ပါဝင်ခြင်း။" },
    ],
    summary: ["အိမ်ရာ ဝေါဟာရတွင် အမျိုးအစား၊ ငှားရမ်းမှု နှင့် ပြဿနာ အုပ်စုများ ရှိသည်။", "rent from, deposit, utilities သည် အဓိက စကားလုံးများ။", "ပြဿနာကို ယဉ်ကျေးစွာ တင်ပြခြင်း အရေးကြီးသည်။"],
    mastery: ["ဝေါဟာရ ၁၂ ခုကို သုံးနိုင်သည်။", "အိမ်ငှားရန် မေးခွန်း ၅ ခု ရေးနိုင်သည်။"],
    topics: ["housing", "vocabulary", "daily life"],
  },
  {
    id: "c20-weather-climate",
    moduleId: "C",
    title: "Weather and Climate",
    titleMm: "ရာသီဥတု နှင့် ရာသီ ဝေါဟာရ",
    level: "B1",
    minutes: 20,
    summaryLine: "ရာသီဥတု ဖော်ပြချက်၊ ခန့်မှန်းချက် နှင့် ရာသီဥတု ပြောင်းလဲမှု အကြောင်း ဝေါဟာရ။",
    objectives: ["ရာသီဥတု ဝေါဟာရ ၁၂ ခု သိမည်။", "weather နှင့် climate ကွာခြားချက် ပြနိုင်မည်။", "ရာသီဥတု အခြေအနေကို ဖော်ပြနိုင်မည်။"],
    vocab: [
      { en: "humidity", mm: "စိုထိုင်းဆ", pos: "noun", example: "The humidity is high in the rainy season.", exampleMm: "မိုးရာသီတွင် စိုထိုင်းဆ မြင့်သည်။", topic: "weather", level: "B1" },
      { en: "forecast", mm: "ခန့်မှန်းချက်", pos: "noun", example: "The forecast says it will rain.", exampleMm: "မိုးရွာမည်ဟု ခန့်မှန်းချက် ဆိုသည်။", topic: "weather", level: "A2" },
      { en: "drought", mm: "မိုးခေါင်မှု", pos: "noun", example: "The drought lasted six months.", exampleMm: "မိုးခေါင်မှုက ခြောက်လ ကြာခဲ့သည်။", topic: "climate", level: "B2" },
      { en: "emission", mm: "ထုတ်လွှတ်မှု", pos: "noun", example: "We must reduce carbon emissions.", exampleMm: "ကာဗွန် ထုတ်လွှတ်မှု လျှော့ချရမည်။", topic: "climate", level: "B2" },
    ],
    sections: [
      {
        heading: "weather နှင့် climate",
        body: [
          "weather = ယခု/မကြာမီ ရက်ပိုင်း အတွင်း အခြေအနေ — 'It's raining today.' climate = နှစ်ရှည်လများ ပျမ်းမျှ အခြေအနေ — 'Myanmar has a tropical climate.'",
          "ရာသီဥတု ဖော်ပြချက် — sunny, cloudy, windy, humid, chilly, freezing, pouring, drizzling, thunderstorm။",
          "'It's raining heavily' သို့မဟုတ် 'It's pouring' ဟု ပြောသည်။ 'The rain is big' မှားသည်။",
        ],
        table: { headers: ["ဝေါဟာရ", "အဓိပ္ပာယ်", "ဥပမာ"], rows: [["mild", "မပြင်းထန်သော", "a mild winter"], ["heatwave", "အပူလှိုင်း", "a two-week heatwave"], ["flood", "ရေကြီးမှု", "flash floods"], ["sustainable", "ရေရှည်တည်တံ့သော", "sustainable farming"]] },
      },
      {
        heading: "ရာသီဥတု ဆွေးနွေးခြင်း",
        body: [
          "ခန့်မှန်းချက် မေးရန် — 'What's the forecast for tomorrow?' 'Will it be hot?'",
          "ရာသီဥတု ပြောင်းလဲမှု ဆွေးနွေးရာတွင် — 'rising temperatures', 'extreme weather', 'renewable energy', 'carbon footprint' ကဲ့သို့ စကားစု သုံးသည်။",
          "သိပ္ပံ အချက်အလက်နှင့် ကိုယ်ပိုင် အတွေ့အကြုံကို ခွဲခြားပြီး ပြောခြင်းက တိကျသည် — 'In my area, the rainy season seems shorter than before' သည် ကိုယ်ပိုင် လေ့လာမှု ဖြစ်သည်။",
        ],
      },
    ],
    examples: [
      { en: "It's extremely humid today, so I'm staying indoors.", mm: "ဒီနေ့ အလွန် စိုထိုင်းဆ မြင့်သဖြင့် အိမ်ထဲတွင် နေသည်။" },
      { en: "The forecast warns of heavy rain and strong winds.", mm: "မိုးသည်းထန်စွာ ရွာမည် နှင့် လေပြင်းတိုက်မည်ဟု ခန့်မှန်းချက် သတိပေးသည်။" },
      { en: "Rising temperatures are affecting rice production.", mm: "အပူချိန် တက်လာမှုက ဆန်ထုတ်လုပ်မှုကို သက်ရောက်နေသည်။" },
    ],
    mistakes: [
      { wrong: "Today the weather is hot weather.", right: "It is hot today. / The weather is hot today.", why: "weather ကို ထပ်မသုံးပါ။" },
      { wrong: "It rains strongly.", right: "It is raining heavily.", why: "မိုးသည်းထန်စွာ ရွာသည်ကို rain heavily ဟု သုံးသည်။" },
    ],
    guided: [
      { type: "mcq", prompt: "The ___ says it will be sunny tomorrow.", promptMm: "ရွေးပါ။", options: ["forecast", "climate", "weather", "temperature"], answer: 0, explanation: "forecast = ခန့်မှန်းချက်။", topic: "weather" },
      { type: "fill", prompt: "It's ___ heavily — take an umbrella. (ရွာနေသည်)", promptMm: "ဖြည့်ပါ။", answers: ["raining"], explanation: "raining heavily။", topic: "weather" },
      { type: "mcq", prompt: "A long period without rain is a ___.", promptMm: "ရွေးပါ။", options: ["flood", "drought", "breeze", "heatwave"], answer: 1, explanation: "drought = မိုးခေါင်မှု။", topic: "climate" },
      { type: "correct", prompt: "Correct: The weather is very hot weather today.", promptMm: "ဝါကျ ပြင်ပါ။", answers: ["The weather is very hot today.", "It is very hot today."], explanation: "weather ထပ်မသုံးပါ။", topic: "weather" },
    ],
    independent: [
      { type: "mcq", prompt: "___ is the average weather over many years.", promptMm: "ရွေးပါ။", options: ["Weather", "Climate", "Forecast", "Temperature"], answer: 1, explanation: "climate = ရေရှည် ပျမ်းမျှ။", topic: "climate" },
      { type: "fill", prompt: "We should reduce carbon ___ to protect the planet.", promptMm: "ဖြည့်ပါ။", answers: ["emissions"], explanation: "carbon emissions။", topic: "climate" },
      { type: "mcq", prompt: "Which word describes light rain?", promptMm: "ရွေးပါ။", options: ["pouring", "drizzling", "freezing", "boiling"], answer: 1, explanation: "drizzling = ဖွဲဖွဲ ရွာနေသည်။", topic: "weather" },
      { type: "translate", prompt: "Translate: ဒီနေ့ အလွန်ပူပြီး စိုထိုင်းဆ မြင့်တယ်။", promptMm: "အင်္ဂလိပ်လို ဘာသာပြန်ပါ။", answers: ["It is very hot and humid today.", "It's very hot and the humidity is high today."], explanation: "hot and humid။", topic: "weather" },
    ],
    review: [
      { q: "weather နှင့် climate ကွာခြားချက် ဘာလဲ။", a: "weather = ယခု အခြေအနေ၊ climate = နှစ်ရှည် ပျမ်းမျှ။" },
      { q: "မိုးသည်းထန်စွာ ရွာသည်ကို ဘယ်လို ပြောသလဲ။", a: "It's raining heavily / It's pouring။" },
    ],
    summary: ["weather နှင့် climate ကို ခွဲခြားရသည်။", "ရာသီဥတု ဝေါဟာရတွင် အခြေအနေ၊ ခန့်မှန်းချက် နှင့် ရေရှည် ပြောင်းလဲမှု အုပ်စုများ ရှိသည်။", "အချက်အလက် နှင့် ကိုယ်ပိုင် အတွေ့အကြုံကို ခွဲပြီး ပြောခြင်း တိကျသည်။"],
    mastery: ["ဝေါဟာရ ၁၂ ခုကို သုံးနိုင်သည်။", "ရာသီဥတု အကြောင်း စာပိုဒ် ၈၀ လုံး ရေးနိုင်သည်။"],
    topics: ["weather", "climate", "vocabulary"],
  },
];

export const moduleCLessonsPart4: Lesson[] = buildLessons(seeds);
