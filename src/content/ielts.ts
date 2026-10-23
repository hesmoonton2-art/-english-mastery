import type { IeltsTask } from "@/lib/types";

/**
 * IELTS-style practice built from original material written for this course.
 * Results are practice estimates only and are never official IELTS scores.
 */
export const ieltsPractice: IeltsTask[] = [
  {
    id: "ielts-listening-1",
    section: "Listening",
    title: "Listening Practice 1 — Course Enrolment",
    minutes: 10,
    instructionsMm:
      "အောက်ပါ မူရင်း script ကို နှစ်ကြိမ် ဖတ်ပါ (မိတ်ဆွေတစ်ဦးက ဖတ်ပေးနိုင်သည်)။ ပထမအကြိမ် မေးခွန်းများကို အရင်ဖတ်ပါ။ ထို့နောက် မေးခွန်း ၆ ခု ဖြေပါ။ အချိန် ၁၀ မိနစ် သတ်မှတ်ထားသည်။",
    material: [
      "Receptionist: Good morning, City Language Centre. How can I help you?",
      "Caller: Hello. I'd like to enrol in an evening English class.",
      "Receptionist: Certainly. We have classes on Tuesday and Thursday from 6:30 to 8:00 p.m. The next term starts on 4 March and runs for twelve weeks.",
      "Caller: How much is the course?",
      "Receptionist: The fee is 120,000 kyat, and that includes all materials. There is a 15 per cent discount for students with a valid ID.",
      "Caller: That's helpful. Is there a placement test?",
      "Receptionist: Yes. It takes about thirty minutes and it is online. You need to complete it before 28 February.",
      "Caller: And where are the classes?",
      "Receptionist: They are in Room 204 on the second floor. Please bring a notebook and a pen. We also recommend a dictionary, but it is not compulsory.",
      "Caller: Great. Can I pay by bank transfer?",
      "Receptionist: Yes, but please send the receipt by email so we can confirm your place.",
    ],
    exercises: [
      { id: "il-1", type: "mcq", prompt: "Which days are the classes?", promptMm: "အတန်းရက်များ ရွေးပါ။", options: ["Monday and Wednesday", "Tuesday and Thursday", "Friday and Saturday", "Every day"], answer: 1, explanation: "script တွင် 'Tuesday and Thursday' ဟု ဖော်ပြထားသည်။", topic: "ielts listening", level: "B1" },
      { id: "il-2", type: "fill", prompt: "The next term starts on 4 ___.", promptMm: "စတင်မည့်လ ဖြည့်ပါ။", answers: ["March"], explanation: "'starts on 4 March' ဟု ဖော်ပြထားသည်။", topic: "ielts listening", level: "B1" },
      { id: "il-3", type: "mcq", prompt: "How long does the course run?", promptMm: "သင်တန်း ကာလ ရွေးပါ။", options: ["six weeks", "ten weeks", "twelve weeks", "sixteen weeks"], answer: 2, explanation: "twelve weeks ဖြစ်သည်။", topic: "ielts listening", level: "B1" },
      { id: "il-4", type: "mcq", prompt: "What does the fee include?", promptMm: "ကျသင့်ငွေတွင် ဘာပါဝင်သနည်း။", options: ["nothing extra", "all materials", "a dictionary", "exam fees"], answer: 1, explanation: "'includes all materials' ဟု ပြောသည်။", topic: "ielts listening", level: "B1" },
      { id: "il-5", type: "mcq", prompt: "Where are the classes held?", promptMm: "အတန်း ကျင်းပသည့် နေရာ ရွေးပါ။", options: ["Room 204, second floor", "Room 402, fourth floor", "the library", "online only"], answer: 0, explanation: "Room 204, second floor။", topic: "ielts listening", level: "B1" },
      { id: "il-6", type: "mcq", prompt: "What must the caller do after paying by bank transfer?", promptMm: "ငွေလွှဲပြီးနောက် ဘာလုပ်ရမည်နည်း။", options: ["call again", "send the receipt by email", "visit the office", "take a test"], answer: 1, explanation: "receipt ကို အီးမေးလ်ဖြင့် ပို့ရမည်။", topic: "ielts listening", level: "B1" },
    ],
  },
  {
    id: "ielts-reading-1",
    section: "Reading",
    title: "Reading Practice 1 — Urban Gardens",
    minutes: 20,
    instructionsMm:
      "အောက်ပါ စာသားကို ဖတ်ပြီး မိနစ် ၂၀ အတွင်း မေးခွန်း ၇ ခု ဖြေပါ။ ပထမဆုံး မေးခွန်းများကို အမြန်ဖတ်ပြီး စာသားထဲမှ အဖြေ ရှာပါ။",
    material: [
      "Urban gardens are small plots of land, often on rooftops or unused public space, where city residents grow vegetables, herbs and flowers. In the past decade they have spread quickly in Asia's larger cities.",
      "Supporters argue that urban gardens offer several benefits. They reduce the distance food travels, so vegetables arrive fresher and cheaper. They also create shared spaces where neighbours meet, which can strengthen community ties. In dense neighbourhoods, a garden may be the only green space available.",
      "However, urban gardening faces practical limits. Land in city centres is expensive, and competition for space is intense. Soil may be contaminated, requiring raised beds and imported soil. Water must often be carried by hand, and in some buildings rooftop gardens are not structurally safe.",
      "City governments have responded in different ways. Some provide small grants or free training; others convert unused land into community plots with waiting lists. Where support is consistent, gardens tend to survive. Where funding stops after one season, plots are often abandoned.",
      "Researchers also note a social dimension. Gardens work best when members share responsibilities and set clear rules about harvesting. Without such agreements, disagreements can undermine a project that began with enthusiasm.",
    ],
    exercises: [
      { id: "ir-1", type: "mcq", prompt: "What is the passage mainly about?", promptMm: "အဓိကအကြောင်းအရာ ရွေးပါ။", options: ["how to cook vegetables", "the benefits and challenges of urban gardens", "the history of agriculture", "why cities are dirty"], answer: 1, explanation: "ကောင်းကျိုးနှင့် စိန်ခေါ်မှုများကို ဆွေးနွေးထားသည်။", topic: "ielts reading", level: "B2" },
      { id: "ir-2", type: "mcq", prompt: "According to the passage, why is food from urban gardens fresher?", promptMm: "အစားအစာ ပိုလတ်ဆတ်ရသည့် အကြောင်းက ဘာနည်း။", options: ["It is grown in greenhouses.", "It travels a shorter distance.", "It is picked by researchers.", "It is cheaper to buy."], answer: 1, explanation: "'reduce the distance food travels' ဟု ဖော်ပြထားသည်။", topic: "ielts reading", level: "B2" },
      { id: "ir-3", type: "mcq", prompt: "Which problem is NOT mentioned?", promptMm: "မဖော်ပြထားသည့် ပြဿနာကို ရွေးပါ။", options: ["contaminated soil", "expensive land", "structural safety of rooftops", "a shortage of gardeners"], answer: 3, explanation: "စာသားတွင် ဥယျာဉ်မှူး ရှားပါးမှုကို မဖော်ပြထားပါ။", topic: "ielts reading", level: "B2" },
      { id: "ir-4", type: "mcq", prompt: "What happens when funding stops after one season?", promptMm: "ရာသီတစ်ခုအကြာ ရန်ပုံငွေ ရပ်လျှင် ဘာဖြစ်တတ်သနည်း။", options: ["Gardens expand.", "Plots are often abandoned.", "Governments take over.", "Food becomes cheaper."], answer: 1, explanation: "'plots are often abandoned' ဟု ဖော်ပြထားသည်။", topic: "ielts reading", level: "B2" },
      { id: "ir-5", type: "mcq", prompt: "The writer's tone is:", promptMm: "စာရေးသူ၏ သဘောထားကို ရွေးပါ။", options: ["balanced", "angry", "humorous", "enthusiastic only"], answer: 0, explanation: "ကောင်းကျိုးနှင့် ကန့်သတ်ချက်များကို ဟန်ချက်ညီစွာ ဖော်ပြထားသည်။", topic: "ielts reading", level: "B2" },
      { id: "ir-6", type: "mcq", prompt: "'Undermine' in the last paragraph is closest in meaning to:", promptMm: "'undermine' ၏ အနီးစပ်ဆုံး အဓိပ္ပာယ် ရွေးပါ။", options: ["strengthen", "weaken", "explain", "decorate"], answer: 1, explanation: "undermine = အားနည်းစေသည်။", topic: "ielts reading", level: "B2" },
      { id: "ir-7", type: "mcq", prompt: "What can be inferred about successful gardens?", promptMm: "အောင်မြင်သော ဥယျာဉ်များအကြောင်း ကောက်ချက်ချပါ။", options: ["They need consistent support and clear rules.", "They need only enthusiasm.", "They require imported soil.", "They are always on rooftops."], answer: 0, explanation: "စဉ်ဆက်မပြတ် ပံ့ပိုးမှုနှင့် ရှင်းလင်းသော စည်းမျဉ်းများ လိုအပ်ကြောင်း ဖော်ပြထားသည်။", topic: "ielts reading", level: "B2" },
    ],
  },
  {
    id: "ielts-reading-2",
    section: "Reading",
    title: "Reading Practice 2 — The Cost of Convenience",
    minutes: 20,
    instructionsMm:
      "စာသားကို ဖတ်ပြီး မိနစ် ၂၀ အတွင်း မေးခွန်း ၆ ခု ဖြေပါ။ ခက်ခဲသော စကားလုံးများကို ပတ်ဝန်းကျင်မှ ခန့်မှန်းပါ။",
    material: [
      "Delivery apps have transformed how people buy food, groceries and medicine. A few taps bring a meal to the door within half an hour. For busy workers and elderly residents, this convenience is genuine.",
      "Yet the business model depends on several conditions that are rarely discussed. Delivery is cheap because workers are often classified as independent contractors, which means they bear the costs of fuel, vehicle maintenance and insurance. In many cities, riders are paid per delivery, so income depends on speed and volume.",
      "Restaurants face a different pressure. Platforms frequently charge commissions of twenty to thirty per cent. Some restaurants raise menu prices on the app, while others accept lower margins to remain visible. Small businesses with little bargaining power are most affected.",
      "Consumers benefit in the short term, but the environmental cost is significant. Each delivery involves a separate journey, often by motorbike, and packaging generates large amounts of plastic waste. A meal ordered online can produce several containers, bags and utensils, even when the customer is at home.",
      "Regulation has been slow. Some cities require minimum pay or cap commissions; others have done little. The central question is whether the convenience is genuinely cheaper or whether its costs have simply been moved to workers, small businesses and the environment.",
    ],
    exercises: [
      { id: "ir2-1", type: "mcq", prompt: "What is the central argument of the passage?", promptMm: "စာသား၏ အဓိက အငြင်းအခုန်က ဘာနည်း။", options: ["Delivery apps are always harmful.", "The low price of delivery may hide costs paid by others.", "Restaurants earn too much money.", "Consumers should cook more often."], answer: 1, explanation: "ကုန်ကျစရိတ်များကို အလုပ်သမား၊ စီးပွားရေးနှင့် ပတ်ဝန်းကျင်သို့ ရွှေ့ထားနိုင်သည်ဟု ဆိုသည်။", topic: "ielts reading", level: "C1" },
      { id: "ir2-2", type: "mcq", prompt: "Why is delivery cheap, according to the writer?", promptMm: "ပို့ဆောင်မှု ဈေးသက်သာရသည့် အကြောင်းက ဘာနည်း။", options: ["Bikes use little fuel.", "Workers bear many costs themselves.", "Platforms are owned by governments.", "Restaurants pay all costs."], answer: 1, explanation: "အလုပ်သမားများက ကုန်ကျစရိတ်များကို ကိုယ်တိုင် ထမ်းရွက်ရသည်။", topic: "ielts reading", level: "C1" },
      { id: "ir2-3", type: "mcq", prompt: "How much commission do platforms often charge?", promptMm: "Platform များက ကော်မရှင် မည်မျှ ကောက်ခံလေ့ရှိသနည်း။", options: ["5–10%", "10–15%", "20–30%", "more than 50%"], answer: 2, explanation: "twenty to thirty per cent ဟု ဖော်ပြထားသည်။", topic: "ielts reading", level: "B2" },
      { id: "ir2-4", type: "mcq", prompt: "Which group is most affected by commissions?", promptMm: "ကော်မရှင်ကြောင့် အထိခိုက်ဆုံး အုပ်စုက ဘာနည်း။", options: ["large chains", "small businesses with little bargaining power", "delivery platforms", "consumers"], answer: 1, explanation: "'Small businesses with little bargaining power are most affected' ဟု ဖော်ပြထားသည်။", topic: "ielts reading", level: "C1" },
      { id: "ir2-5", type: "mcq", prompt: "The word 'genuine' in paragraph 1 means:", promptMm: "'genuine' သည် ဘာအဓိပ္ပာယ်လဲ။", options: ["imaginary", "real and significant", "expensive", "temporary"], answer: 1, explanation: "genuine = အမှန်တကယ်။", topic: "ielts reading", level: "B2" },
      { id: "ir2-6", type: "mcq", prompt: "Which statement would the writer most likely agree with?", promptMm: "စာရေးသူ သဘောတူနိုင်သည့် ဝါကျကို ရွေးပါ။", options: ["Convenience has no costs.", "Regulation is unnecessary.", "The full costs of delivery should be made visible.", "Restaurants should close their apps."], answer: 2, explanation: "ကုန်ကျစရိတ်များ မည်သူက ထမ်းရွက်သည်ကို ထင်ရှားစေရန် လိုအပ်သည်ဟု စာသားက ညွှန်ပြသည်။", topic: "ielts reading", level: "C1" },
    ],
  },
];

export type IeltsWritingTask = {
  id: string;
  title: string;
  minutes: number;
  promptMm: string;
  promptEn: string;
  wordTarget: [number, number];
  material?: string[];
  modelAnswer: string;
  checklist: string[];
};

export const ieltsWritingTasks: IeltsWritingTask[] = [
  {
    id: "ielts-writing-1",
    title: "Writing Task 1 — Describing Data",
    minutes: 20,
    promptMm:
      "အောက်ပါ ဇယားကို ဖော်ပြသည့် အစီရင်ခံစာ (စကားလုံး ၁၅၀ အနည်းဆုံး) ကို မိနစ် ၂၀ အတွင်း ရေးပါ။ ခေါင်းစဉ်တွင် ကိုယ်ပိုင် ထင်မြင်ချက် မထည့်ပါနှင့်။ အဓိက လမ်းကြောင်းများနှင့် နှိုင်းယှဉ်ချက်များကို ဖော်ပြပါ။",
    promptEn:
      "The table shows the number of students enrolled in four language courses at a centre in 2020 and 2026. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",
    wordTarget: [150, 200],
    material: [
      "Course        | 2020 | 2026",
      "English       | 420  | 610",
      "Japanese      | 180  | 240",
      "Korean        | 150  | 260",
      "French        |  90  |  70",
    ],
    modelAnswer:
      "The table compares enrolments in four language courses at one centre in 2020 and 2026.\n\nOverall, English remained by far the most popular course, while Korean showed the fastest growth and French was the only course to decline.\n\nIn 2020, 420 students studied English. By 2026 this figure had risen to 610, an increase of almost 200. Japanese enrolments grew more modestly, from 180 to 240. The most striking change was in Korean, which nearly doubled from 150 to 260 students, overtaking Japanese in the process.\n\nFrench was the exception. Its numbers fell from 90 to 70, making it the smallest course in both years. In short, enrolments shifted towards English and Asian languages, with European languages losing ground.",
    checklist: [
      "မိတ်ဆက်တွင် ဇယား ဘာကို ပြသည်ကို ရှင်းပြထားသလား။",
      "Overall trend ကို သီးခြား ဖော်ပြထားသလား။",
      "ဂဏန်း တိကျစွာ ပါသလား။ နှိုင်းယှဉ်ချက် (increase, decline, doubled) ပါသလား။",
      "ကိုယ်ပိုင် ထင်မြင်ချက် မထည့်ထားသလား။",
      "စကားလုံး ၁၅၀ ပြည့်သလား။",
    ],
  },
  {
    id: "ielts-writing-2",
    title: "Writing Task 2 — Discussion Essay",
    minutes: 40,
    promptMm:
      "အောက်ပါ ခေါင်းစဉ်ကို စကားလုံး ၂၅၀ အနည်းဆုံးဖြင့် မိနစ် ၄၀ အတွင်း ရေးပါ။ ရပ်တည်ချက် ရှင်းလင်းစွာ ဖော်ပြပြီး အကြောင်းပြချက်များနှင့် ဥပမာများ ထည့်ပါ။",
    promptEn:
      "Some people think that university students should study only subjects that lead directly to jobs. Others believe that subjects such as history and literature are equally valuable. Discuss both views and give your own opinion.",
    wordTarget: [250, 320],
    modelAnswer:
      "There is ongoing debate about whether universities should focus on subjects with clear employment outcomes or continue to value fields such as history and literature. While employability matters, I believe a narrow focus would weaken both graduates and society.\n\nOn the one hand, the case for job-oriented subjects is understandable. Students pay significant fees and expect to find work, and economies need engineers, nurses and technicians. In countries with high youth unemployment, practical training can provide a faster route to income. A student who studies software development, for instance, may find employment within months of graduating.\n\nOn the other hand, humanities subjects develop abilities that employers consistently say they value: clear writing, critical thinking and the capacity to understand complex social contexts. These skills rarely become obsolete. Indeed, a historian may not be trained for one job, but is often able to adapt to several. Furthermore, societies need citizens who can interpret the past and question easy assumptions. Without such graduates, public debate becomes poorer.\n\nIn my view, the choice is a false one. Universities can design programmes that combine professional training with broad intellectual development. A nursing degree, for example, is more effective when it includes ethics and communication, just as a literature degree can include practical writing projects.\n\nIn conclusion, employability and humanistic study should not be treated as rivals. The strongest education prepares students for work while also preparing them for the difficult questions that work alone cannot answer.",
    checklist: [
      "နှစ်ဖက်စလုံးကို ဟန်ချက်ညီစွာ ဆွေးနွေးထားသလား။",
      "ကိုယ်ပိုင် ရပ်တည်ချက် မိတ်ဆက်နှင့် နိဂုံးတွင် ရှင်းလင်းစွာ ပါသလား။",
      "ဥပမာ တစ်ခုထက်ပို ထည့်ထားသလား။",
      "စာပိုဒ်ဖွဲ့စည်းမှု ၄ ပိုဒ် ရှိသလား။",
      "စကားလုံး ၂၅၀ ပြည့်သလား။",
      "အချိန် ၄၀ မိနစ်အတွင်း ပြီးသလား။",
    ],
  },
];

export const ieltsSpeaking = {
  disclaimer:
    "ဤသည်မှာ မိုက်ခရိုဖုန်း သို့မဟုတ် အသံခွဲခြမ်းစိတ်ဖြာမှု မပါသော စာသားအခြေခံ အင်တာဗျူး လေ့ကျင့်ခန်း ဖြစ်သည်။ သင့်အသံကို အကဲဖြတ်ခြင်း မရှိပါ။",
  parts: [
    {
      name: "Part 1 — Introduction",
      minutes: 4,
      questions: [
        "Where are you from, and what do you like about it?",
        "Do you work or are you a student?",
        "What do you usually do in your free time?",
        "Do you prefer reading paper books or digital books? Why?",
      ],
      tipsMm: "ဖြေချက်တိုင်းကို ဝါကျ ၂–၃ ကြောင်းဖြင့် ဖြေပါ။ ဥပမာလေးတစ်ခု ထည့်ပါ။",
    },
    {
      name: "Part 2 — Long turn",
      minutes: 3,
      questions: [
        "Describe a skill you would like to learn. Say what it is, why you want to learn it, how you would learn it, and how it might help you.",
      ],
      tipsMm: "၁ မိနစ် ပြင်ဆင်ပါ။ ၂ မိနစ် ပြောပါ။ မှတ်စုကို စကားလုံးတိုများဖြင့် ရေးပါ။",
    },
    {
      name: "Part 3 — Discussion",
      minutes: 5,
      questions: [
        "Why do some people find it difficult to learn new skills as adults?",
        "Should employers pay for their staff to learn new skills?",
        "How has technology changed the way people learn?",
      ],
      tipsMm: "ထင်မြင်ချက် + အကြောင်းပြချက် + ဥပမာ ဖွဲ့စည်းပုံကို သုံးပါ။",
    },
  ],
  bandDescriptors: [
    { band: "6", speaking: "ရှင်းလင်းစွာ ပြောနိုင်သော်လည်း ထပ်ခါတလဲလဲ ရပ်တန့်မှု ရှိနိုင်သည်။ ခက်ခဲသော ခေါင်းစဉ်တွင် စကားလုံး ကန့်သတ်ချက် ရှိသည်။", writing: "အဓိကအချက်ကို ဖော်ပြနိုင်သော်လည်း အမှားများက ဖတ်ရှုမှုကို အနည်းငယ် ထိခိုက်စေသည်။" },
    { band: "7", speaking: "ကြာရှည်စွာ ပြောနိုင်ပြီး စကားလုံး ရွေးချယ်မှု ကောင်းသည်။ အမှား အနည်းငယ် ရှိသော်လည်း အဓိပ္ပာယ် မထိခိုက်ပါ။", writing: "ဖွဲ့စည်းပုံ ရှင်းလင်းပြီး စကားလုံး ကွဲပြားသည်။ အမှား အနည်းငယ်သာ ရှိသည်။" },
    { band: "8", speaking: "ကျွမ်းကျင်စွာ ပြောနိုင်ပြီး သဘာဝကျသည်။ အနုစိတ် အဓိပ္ပာယ်ကို တိကျစွာ ဖော်ပြနိုင်သည်။", writing: "အချက်အလက်များကို ကျွမ်းကျင်စွာ စီစဉ်ပြီး တိကျသော စကားလုံးများ သုံးသည်။ အမှား အလွန်နည်းသည်။" },
  ],
};
