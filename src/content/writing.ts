import type { WritingTask } from "@/lib/types";

export const writingTasks: WritingTask[] = [
  {
    id: "w1-morning-routine",
    title: "A Paragraph About Your Morning",
    titleMm: "သင့်မနက်ခင်း အကြောင်း စာပိုဒ်",
    level: "A2",
    kind: "descriptive paragraph",
    promptMm:
      "သင့်မနက်ခင်း လုပ်ရိုးလုပ်စဉ်ကို စကားလုံး ၇၀–၁၀၀ ဖြင့် စာပိုဒ်တစ်ပိုဒ် ရေးပါ။ အိပ်ရာထချိန်၊ ဘာလုပ်သလဲ၊ ဘာကြောင့် အဲဒီလို လုပ်သလဲ ပါဝင်စေပါ။",
    promptEn: "Write one paragraph (70–100 words) about your morning routine.",
    wordTarget: [70, 100],
    checklist: [
      "Topic sentence ဖြင့် စတင်ထားသလား။",
      "Present simple ကို အလေ့အထအတွက် သုံးထားသလား။",
      "အချိန် (at six o'clock) နှင့် အစီအစဉ် စကားလုံးများ (first, then, after that) ပါသလား။",
      "နိဂုံးဝါကျ တစ်ကြောင်း ပါသလား။",
      "စာလုံးကြီး၊ အမှတ်အသား (punctuation) မှန်သလား။",
    ],
    rubric: [
      { criterion: "Task response", bands: ["အချက်အားလုံး မပါ", "အချက်အချို့ ပါ", "အချက်အားလုံး ပါပြီး ရှင်းလင်း"] },
      { criterion: "Grammar", bands: ["Present simple တွင် -s မှားနေသည်", "အမှား အနည်းငယ်", "အမှား မရှိသလောက်"] },
      { criterion: "Vocabulary", bands: ["စကားလုံး ထပ်နေသည်", "သင့်လျော်သည်", "ကွဲပြားပြီး တိကျသည်"] },
      { criterion: "Cohesion", bands: ["ဆက်စပ်မှု မရှိ", "ဆက်စပ်စကားလုံး ၁–၂ ခု", "ဆက်စပ်စကားလုံး သင့်လျော်စွာ သုံးထားသည်"] },
    ],
    sample:
      "My morning routine is simple but organised. I usually wake up at half past five, and I drink a glass of water before I do anything else. Then I spend twenty minutes stretching and reviewing my English vocabulary. After that, I have breakfast with my family; we usually eat rice and eggs. I leave home at seven o'clock because my office is far away. In short, a calm morning helps me stay focused for the rest of the day.",
    tips: [
      "အချိန် အတိအကျ ထည့်ခြင်းက စာပိုဒ်ကို ရှင်းလင်းစေသည်။",
      "Present simple တွင် he/she/it နှင့် ကြိယာ -s ကို စစ်ပါ။",
      "နိဂုံးဝါကျကို အသစ်သော အချက်အလက် မထည့်ဘဲ အနှစ်ချုပ်ပါ။",
    ],
  },
  {
    id: "w2-opinion-online-learning",
    title: "Opinion Essay: Online Learning",
    titleMm: "ထင်မြင်ချက် စာစီစာကုံး — အွန်လိုင်း သင်ယူမှု",
    level: "B2",
    kind: "opinion essay",
    promptMm:
      "အွန်လိုင်း သင်ယူမှုသည် အတန်းတွင်း သင်ယူမှုကို အစားထိုးနိုင်ပါသလား။ သင့်ထင်မြင်ချက်ကို အကြောင်းပြချက် နှစ်ခုနှင့် ဥပမာများဖြင့် စကားလုံး ၂၀၀–၂၅၀ ဖြင့် ရေးပါ။ ဆန့်ကျင်ဘက် အမြင်တစ်ခုကိုလည်း ဖော်ပြပြီး ပြန်လည် ဖြေရှင်းပါ။",
    promptEn:
      "Some people believe online learning can replace classroom learning. To what extent do you agree? Write 200–250 words with two reasons, examples and a counterargument.",
    wordTarget: [200, 250],
    checklist: [
      "မိတ်ဆက်တွင် ထင်မြင်ချက် ရှင်းလင်းစွာ ဖော်ပြထားသလား။",
      "အကြောင်းပြချက် နှစ်ခု ရှိသလား။ အကြောင်းပြချက်တိုင်းတွင် ဥပမာ/ရှင်းလင်းချက် ပါသလား။",
      "ဆန့်ကျင်ဘက် အမြင်ကို ဖော်ပြပြီး ပြန်ဖြေထားသလား။",
      "ဆက်စပ်စကားလုံး (however, moreover, therefore) သုံးထားသလား။",
      "နိဂုံးတွင် ထင်မြင်ချက် ပြန်အတည်ပြုထားသလား။ အချက်အသစ် မပါစေရ။",
      "စကားလုံး အရေအတွက် ပြည့်သလား။",
    ],
    rubric: [
      { criterion: "Task response", bands: ["ခေါင်းစဉ်ကို မဖြေဆိုထား", "ဖြေဆိုထားသော်လည်း အကြောင်းပြချက် မလုံလောက်", "ခေါင်းစဉ်ကို အပြည့်အဝ ဖြေဆိုထားပြီး ရပ်တည်ချက် ရှင်းလင်း"] },
      { criterion: "Coherence & cohesion", bands: ["ဖွဲ့စည်းပုံ မရှိ", "ဖွဲ့စည်းပုံ ရှိသော်လည်း ဆက်စပ်မှု အားနည်း", "စာပိုဒ်ဖွဲ့စည်းမှု ကောင်းပြီး ဆက်စပ်စကားလုံး သင့်လျော်"] },
      { criterion: "Lexical resource", bands: ["စကားလုံး အလွန်အမင်း ကန့်သတ်", "လုံလောက်သော်လည်း ထပ်နေမှု ရှိ", "တိကျပြီး ကွဲပြားသော စကားလုံးများ"] },
      { criterion: "Grammatical range", bands: ["ဝါကျတို များပြီး အမှား များ", "အမှား အနည်းငယ်၊ ဝါကျ ကွဲပြား", "ရှုပ်ထွေးသော ဝါကျများ မှန်ကန်စွာ သုံးထား"] },
    ],
    sample:
      "Online learning has grown rapidly, and some argue that it could replace traditional classrooms. In my view, it is a valuable addition but not a complete replacement, because education involves more than information delivery.\n\nFirstly, online courses offer flexibility. Students who work or care for family members can study at times that suit them, and this improves access to education. For example, a nurse working night shifts can complete a course in the morning, which would be impossible in a fixed timetable.\n\nSecondly, however, classrooms provide social learning that screens cannot easily reproduce. Learners observe how others think, practise speaking under pressure and receive immediate feedback. Group discussions often produce ideas that no single student would have developed alone.\n\nAdmittedly, online tools can recreate some of this through video calls. Nevertheless, such interaction requires reliable internet and considerable discipline, which not every learner has.\n\nIn conclusion, online learning should complement, not replace, classroom teaching. A blended approach is likely to serve more learners than either method alone.",
    tips: [
      "ထင်မြင်ချက်ကို မိတ်ဆက်တွင် တစ်ကြောင်းတည်း ရှင်းရှင်း ဖော်ပါ။",
      "အကြောင်းပြချက်တိုင်းအတွက် ဥပမာ တစ်ခု ထည့်ပါ။",
      "Admittedly / Nevertheless ကဲ့သို့ စကားလုံးများက counterargument တွင် အသုံးဝင်သည်။",
    ],
  },
  {
    id: "w3-formal-email",
    title: "Formal Email: Course Enquiry",
    titleMm: "တရားဝင် အီးမေးလ် — သင်တန်း မေးမြန်းခြင်း",
    level: "B1",
    kind: "formal email",
    promptMm:
      "အင်္ဂလိပ်စာ သင်တန်းတစ်ခုအကြောင်း မေးမြန်းရန် တရားဝင် အီးမေးလ် (စကားလုံး ၁၂၀–၁၅၀) ရေးပါ။ သင်တန်းစတင်ချိန်၊ ကျသင့်ငွေ၊ အတန်းချိန် နှင့် အွန်လိုင်း တက်နိုင်ခြင်း ရှိ/မရှိ မေးပါ။",
    promptEn: "Write a formal email (120–150 words) enquiring about an English course.",
    wordTarget: [120, 150],
    checklist: [
      "သင့်လျော်သော subject line ပါသလား။",
      "Dear Sir or Madam, / Dear Mr. ... ဖြင့် စတင်ထားသလား။",
      "ရည်ရွယ်ချက်ကို ပထမစာပိုဒ်တွင် ရှင်းလင်းစွာ ဖော်ပြထားသလား။",
      "မေးခွန်း ၃–၄ ခုကို ယဉ်ကျေးသော ပုံစံဖြင့် မေးထားသလား။",
      "I look forward to hearing from you. ဖြင့် ပိတ်ထားသလား။",
      "ကျုံ့ပုံ (I'm, don't) မသုံးထားသလား။",
    ],
    rubric: [
      { criterion: "Purpose & content", bands: ["ရည်ရွယ်ချက် မရှင်းလင်း", "ရည်ရွယ်ချက် ရှိသော်လည်း အချက်အလက် လိုအပ်", "ရည်ရွယ်ချက် ရှင်းလင်းပြီး မေးခွန်းအားလုံး ပါ"] },
      { criterion: "Register & tone", bands: ["အလွန်အမင်း informal", "တစ်စိတ်တစ်ပိုင်း formal", "တစ်သမတ်တည်း formal နှင့် ယဉ်ကျေးသော"] },
      { criterion: "Accuracy", bands: ["အမှား များ", "အမှား အနည်းငယ်", "အမှား နည်းပြီး ရှင်းလင်း"] },
    ],
    sample:
      "Subject: Enquiry about the General English Course\n\nDear Sir or Madam,\n\nI am writing to enquire about the General English course advertised on your website. I would like to improve my speaking and writing skills for professional purposes.\n\nCould you please confirm when the next course begins and how long it lasts? I would also be grateful if you could tell me the course fee and whether any materials are included. In addition, could you let me know the class times, and whether it is possible to attend lessons online?\n\nI would also like to ask whether a placement test is required before enrolment.\n\nThank you for your time. I look forward to hearing from you.\n\nKind regards,\nAung Ko",
    tips: [
      "မေးခွန်းများကို 'Could you please confirm ...' ဖြင့် ယဉ်ကျေးစွာ မေးပါ။",
      "စာပိုဒ်တို ၃ ပိုဒ်ဖြင့် ဖွဲ့စည်းပါ။",
      "အဆုံးတွင် သင့်နာမည်နှင့် ဆက်သွယ်ရန် အချက်အလက် ထည့်ပါ။",
    ],
  },
  {
    id: "w4-advantages-disadvantages",
    title: "Advantages and Disadvantages: Working from Home",
    titleMm: "အားသာချက်/အားနည်းချက် — အိမ်မှ အလုပ်လုပ်ခြင်း",
    level: "B2",
    kind: "discursive essay",
    promptMm:
      "အိမ်မှ အလုပ်လုပ်ခြင်း၏ အားသာချက်များနှင့် အားနည်းချက်များကို စကားလုံး ၂၀၀–၂၅၀ ဖြင့် ဆွေးနွေးပါ။ နိဂုံးတွင် သင့်ကိုယ်ပိုင် ကောက်ချက်ကို ဖော်ပြပါ။",
    promptEn: "Discuss the advantages and disadvantages of working from home (200–250 words).",
    wordTarget: [200, 250],
    checklist: [
      "အားသာချက် အနည်းဆုံး ၂ ခု ပါသလား။",
      "အားနည်းချက် အနည်းဆုံး ၂ ခု ပါသလား။",
      "ဟန်ချက်ညီအောင် ရေးထားသလား (တစ်ဖက်ကို လွန်ကဲစွာ မရေးထားသလား)။",
      "နိဂုံးတွင် ကိုယ်ပိုင် ကောက်ချက် ပါသလား။",
      "On the one hand / On the other hand / In conclusion သုံးထားသလား။",
    ],
    rubric: [
      { criterion: "Content balance", bands: ["တစ်ဖက်တည်း ရေးထား", "နှစ်ဖက်စလုံး ပါသော်လည်း မညီမျှ", "နှစ်ဖက်စလုံး ဟန်ချက်ညီစွာ ဆွေးနွေးထား"] },
      { criterion: "Organisation", bands: ["ဖွဲ့စည်းပုံ မရှိ", "စာပိုဒ် ခွဲထားသော်လည်း ဆက်စပ်မှု အားနည်း", "စာပိုဒ်ဖွဲ့စည်းမှု ရှင်းလင်းပြီး ဆက်စပ်စကားလုံး သင့်လျော်"] },
      { criterion: "Language", bands: ["အမှား များ၊ စကားလုံး ကန့်သတ်", "အမှား အနည်းငယ်", "တိကျပြီး ကွဲပြားသော ဘာသာစကား"] },
    ],
    sample:
      "Working from home has become common in many industries. While it offers clear benefits, it also creates difficulties that both employees and managers must address.\n\nOn the one hand, remote work saves time and money. Employees no longer spend hours commuting, and they can organise their day around their most productive periods. Parents, for instance, can collect their children from school without asking for permission. Companies benefit too, because they can hire skilled staff who live far from the office.\n\nOn the other hand, working from home can blur the boundary between work and rest. Some employees answer messages late at night and find it difficult to switch off. Collaboration may also suffer, since casual conversations that generate ideas rarely happen online. New staff, in particular, may learn more slowly without observing experienced colleagues.\n\nIn conclusion, remote work is neither inherently good nor bad; the outcome depends on how it is managed. Clear expectations, reliable technology and regular contact with colleagues can preserve the advantages while reducing the disadvantages.",
    tips: [
      "အားသာချက်နှင့် အားနည်းချက်ကို စာပိုဒ်ခွဲ၍ ရေးပါ။",
      "ဥပမာတိုင်းတွင် 'For instance' / 'For example' ဖြင့် စတင်ပါ။",
      "နိဂုံးတွင် ကိုယ်ပိုင် ကောက်ချက်ကို တစ်ကြောင်းဖြင့် ရှင်းပါ။",
    ],
  },
  {
    id: "w5-summary",
    title: "Summarising an Article",
    titleMm: "ဆောင်းပါး အနှစ်ချုပ်ခြင်း",
    level: "C1",
    kind: "summary",
    promptMm:
      "ဤပလက်ဖောင်း၏ Reading ကဏ္ဍမှ 'Can Small Towns Cut Plastic Waste?' ဆောင်းပါးကို ဖတ်ပြီး စကားလုံး ၆၀–၈၀ အတွင်း အနှစ်ချုပ်ပါ။ မူရင်းစကားလုံးများကို တိုက်ရိုက် မကူးပါနှင့်။ ရင်းမြစ်ကို ကိုးကားပါ။",
    promptEn: "Summarise the reading passage 'Can Small Towns Cut Plastic Waste?' in 60–80 words.",
    wordTarget: [60, 80],
    checklist: [
      "အဓိကအချက် (မြို့ငယ်တွင် ပလတ်စတစ် လျှော့ချရေး လှုပ်ရှားမှု) ပါသလား။",
      "ရလဒ် (၃၀% လျော့ချနိုင်မှု) ပါသလား။",
      "ကျန်ရှိနေသော ပြဿနာ ပါသလား။",
      "ကိုယ်ပိုင် ထင်မြင်ချက် မထည့်ထားသလား။",
      "ရင်းမြစ် ကိုးကားထားသလား။",
    ],
    rubric: [
      { criterion: "Accuracy", bands: ["မူရင်းနှင့် မကိုက်ညီ", "အချက်အချို့ မှား", "မူရင်းအချက်များ တိကျစွာ ပါဝင်"] },
      { criterion: "Concision", bands: ["အလွန်ရှည်/အလွန်တို", "အနည်းငယ် လိုအပ်", "အရေအတွက် ပြည့်ပြီး တိုတိုရှင်းရှင်း"] },
      { criterion: "Own words", bands: ["မူရင်းကို ကူးချ", "တစ်စိတ်တစ်ပိုင်း ပြောင်း", "မိမိစကားလုံးဖြင့် ရေးထား"] },
    ],
    sample:
      "According to the article, a small town in Sagaing Region asked shops to stop giving free plastic bags and offered cloth bags instead. Although some residents complained at first, weekly plastic waste fell by about 30 per cent within six months and shops spent less on bags. However, shops outside the centre still use plastic, and the town lacks a recycling centre, so lasting change requires affordable alternatives and wider cooperation.",
    tips: [
      "အဓိကအချက် ၃ ခုထက် မပိုပါနှင့်။",
      "ဥပမာနှင့် အသေးစိတ် ဖော်ပြချက်များကို ဖယ်ပါ။",
      "According to the article ဖြင့် ရင်းမြစ် ကိုးကားပါ။",
    ],
  },
  {
    id: "w6-landlord-email",
    title: "Email to a Landlord",
    titleMm: "အိမ်ပိုင်ရှင်ထံ အီးမေးလ်",
    level: "B1",
    kind: "email",
    promptMm:
      "ငှားနေသော အခန်းတွင် ရေပိုက် ယိုနေသည်။ အိမ်ပိုင်ရှင်ထံ အီးမေးလ် ရေးပါ။ ပြဿနာကို ဖော်ပြပါ၊ မည်မျှကြာကြာ ဖြစ်နေသည်ကို ပြောပါ၊ ပြုပြင်ပေးရန် သင့်တင့်စွာ တောင်းဆိုပါ။ စကားလုံး ၉၀–၁၂၀ အတွင်း ရေးပါ။",
    promptEn:
      "Write an email to your landlord about a leaking pipe in the flat you rent. Describe the problem, say how long it has been happening, and politely ask for a repair. 90–120 words.",
    wordTarget: [90, 120],
    checklist: [
      "ခေါင်းစဉ် (subject line) ပါသလား။",
      "ပြဿနာကို တိကျစွာ ဖော်ပြထားသလား (ရေပိုက်၊ ဘယ်နေရာ)။",
      "ဘယ်လောက်ကြာကြာ ဖြစ်နေသည်ကို ဖော်ပြထားသလား။",
      "သင့်တင့်သော တောင်းဆိုမှု (Could you please…) ပါသလား။",
      "ပိတ်သိမ်းစကား (Yours sincerely / Kind regards) ပါသလား။",
    ],
    rubric: [
      { criterion: "Task response", bands: ["အချက်များ မပါ / မတောင်းဆိုထား", "အချက်တချို့ ပါ", "အချက်အားလုံး ပါပြီး ရည်ရွယ်ချက် ရှင်းလင်း"] },
      { criterion: "Tone", bands: ["ရိုင်းစိုင်း / အလွန်တိုတို", "တစ်စိတ်တစ်ပိုင်း သင့်တင့်", "ယဉ်ကျေးပြီး သင့်တင့်"] },
      { criterion: "Language", bands: ["အမှား များ", "အမှား အနည်းငယ်", "တိကျပြီး သဘာဝကျ"] },
    ],
    sample:
      "Subject: Leaking pipe in the bathroom\n\nDear U Aung,\n\nI am writing to let you know about a problem in the flat. The pipe under the bathroom sink has been leaking for about five days, and the floor is now always wet. I have put a bucket underneath it, but water is starting to reach the wooden cupboard.\n\nCould you please arrange for a plumber to come this week? I am at home after six o'clock on weekdays and all day on Saturday, so any of those times would be convenient.\n\nThank you for your help.\n\nKind regards,\nMa Thiri",
    tips: [
      "အီးမေးလ်တွင် ခေါင်းစဉ် တစ်ကြောင်း အမြဲ ထည့်ပါ။",
      "တောင်းဆိုမှုကို 'Could you please…' ဖြင့် ယဉ်ကျေးစွာ ရေးပါ။",
      "အချိန် နှင့် နေရာ အတိအကျ ပေးပါ — လုပ်ငန်း မြန်ဆန်စေသည်။",
    ],
  },
  {
    id: "w7-bar-chart",
    title: "Describing a Bar Chart (IELTS Task 1)",
    titleMm: "ဘားချာ့ခ် ဖော်ပြခြင်း (IELTS Task 1)",
    level: "B2",
    kind: "report",
    promptMm:
      "အောက်ပါ အချက်အလက်ကို အခြေခံပြီး IELTS Task 1 ပုံစံ ဖော်ပြချက် ရေးပါ — ၂၀၁၅ နှင့် ၂၀၂၅ တွင် မန္တလေးမြို့ လူငယ်များ၏ အားလပ်ချိန် လှုပ်ရှားမှု ရွေးချယ်မှု (%)။ ၂၀၁၅ — စက်ဘီးစီးခြင်း ၄၀၊ ဖုန်းသုံးခြင်း ၂၅၊ စာဖတ်ခြင်း ၂၀၊ အားကစား ၁၅။ ၂၀၂၅ — စက်ဘီးစီးခြင်း ၂၀၊ ဖုန်းသုံးခြင်း ၄၅၊ စာဖတ်ခြင်း ၁၀၊ အားကစား ၂၅။ အဓိက လမ်းကြောင်းကို ဖော်ပြပါ။ စကားလုံး ၁၅၀ ခန့်။",
    promptEn:
      "Describe the chart: leisure activities chosen by young people in Mandalay (%), 2015 and 2025. Cycling 40 → 20; phone use 25 → 45; reading 20 → 10; sport 15 → 25. Summarise the main trends in about 150 words.",
    wordTarget: [140, 170],
    checklist: [
      "နိဒါန်းတွင် ဇယား ဘာကို ပြသည်ကို တစ်ကြောင်း ရေးထားသလား။",
      "အဓိက လမ်းကြောင်း (overall trend) ကို ဒုတိယ စာပိုဒ်တွင် ဖော်ပြထားသလား။",
      "ဂဏန်း အနည်းဆုံး ၄ ခု ကိုးကားထားသလား။",
      "အတိုးအလျော့ စကားလုံးများ (rose, fell, doubled, halved) သုံးထားသလား။",
      "ကိုယ်ပိုင် အကြောင်းရင်း ရှင်းလင်းချက် မထည့်ထားသလား (Task 1 တွင် မလိုအပ်)။",
    ],
    rubric: [
      { criterion: "Data coverage", bands: ["ဂဏန်း အနည်းငယ်သာ", "ဂဏန်း အချို့ ပါ", "ဂဏန်း အားလုံး သို့မဟုတ် ကိုယ်စားပြု ဂဏန်းများ ပါ"] },
      { criterion: "Overview", bands: ["မပါ", "အကြမ်းဖျင်း ပါ", "အဓိက လမ်းကြောင်း ရှင်းလင်း"] },
      { criterion: "Language", bands: ["စကားလုံး အကန့်အသတ်", "အမှား အနည်းငယ်", "အမျိုးမျိုး သုံးထားပြီး တိကျ"] },
    ],
    sample:
      "The bar chart compares the leisure activities chosen by young people in Mandalay in 2015 and 2025.\n\nOverall, cycling was the most popular activity in 2015, but it was replaced by phone use a decade later. Reading was the least popular choice in both years.\n\nIn 2015, two fifths of young people chose cycling, compared with a quarter who used their phones and a fifth who read. Sport was the least common activity at 15 per cent.\n\nBy 2025, the pattern had reversed. Phone use had risen sharply to 45 per cent, while cycling had halved to 20 per cent. Sport grew modestly to 25 per cent, and reading fell to 10 per cent, making it the least popular activity of the four.",
    tips: [
      "Task 1 တွင် ကိုယ်ပိုင် ထင်မြင်ချက် မထည့်ပါနှင့် — ဒေတာကိုသာ ဖော်ပြပါ။",
      "overall trend ကို ဒုတိယ စာပိုဒ်တွင် ရှင်းရှင်း ရေးပါ။",
      "ဂဏန်းတိုင်း မဟုတ်ဘဲ အဓိက ဂဏန်းများကို ရွေးချယ်ပြီး နှိုင်းယှဉ်ပါ။",
    ],
  },
  {
    id: "w8-journey-narrative",
    title: "A Memorable Journey",
    titleMm: "မမေ့နိုင်သော ခရီးတစ်ခု",
    level: "B1",
    kind: "narrative",
    promptMm:
      "သင် မမေ့နိုင်သော ခရီးတစ်ခုအကြောင်း ရေးပါ။ ဘယ်ကို သွားခဲ့သည်၊ ဘယ်သူနှင့် သွားခဲ့သည်၊ ဘာဖြစ်ခဲ့သည် နှင့် ဘာကြောင့် မမေ့နိုင်သည်ကို ဖော်ပြပါ။ အတိတ်ကာလ (past simple / past continuous) ကို မှန်ကန်စွာ သုံးပါ။ စကားလုံး ၁၂၀–၁၅၀။",
    promptEn:
      "Write about a journey you will never forget: where you went, who you went with, what happened, and why it stayed with you. 120–150 words.",
    wordTarget: [120, 150],
    checklist: [
      "ခရီးဆုံး နေရာ နှင့် အချိန် ပါသလား။",
      "ဘယ်သူနှင့် သွားခဲ့သည်ကို ဖော်ပြထားသလား။",
      "ဖြစ်ရပ် အစီအစဉ် ရှင်းရှင်း (ပထမ၊ ထို့နောက်၊ နောက်ဆုံး) ပါသလား။",
      "past simple နှင့် past continuous ကို တွဲသုံးထားသလား။",
      "ဘာကြောင့် မမေ့နိုင်သည်ကို နိဂုံးတွင် ရေးထားသလား။",
    ],
    rubric: [
      { criterion: "Narrative flow", bands: ["အစီအစဉ် မရှင်း", "အစီအစဉ် အနည်းငယ် ရှင်း", "အစီအစဉ် ရှင်းပြီး စိတ်ဝင်စားဖွယ်"] },
      { criterion: "Past tenses", bands: ["အမှား များ", "အမှား အနည်းငယ်", "past simple / continuous မှန်ကန်"] },
      { criterion: "Detail", bands: ["အသေးစိတ် မပါ", "အသေးစိတ် အနည်းငယ်", "အာရုံငါးပါး ဖော်ပြချက် ပါဝင်"] },
    ],
    sample:
      "The journey I remember most clearly was a trip to Inle Lake with my cousin in December 2023. We took the night bus from Mandalay and arrived at sunrise, when the water was still and the mist was hanging over the hills.\n\nWe hired a small boat and visited a weaving workshop. While we were watching the women work, our engine suddenly stopped in the middle of the lake. My cousin laughed, but I was nervous because the boat was drifting towards the reeds. Fortunately, a fisherman noticed us and pulled us back to the village.\n\nWhat made the trip unforgettable was not the scenery, but the kindness of that stranger. He refused to accept any money and simply waved as we left.",
    tips: [
      "ဖြစ်ရပ်ကို အချိန် အစီအစဉ်အတိုင်း ရေးပါ — ဖတ်ရ လွယ်စေသည်။",
      "past continuous ဖြင့် နောက်ခံ အခြေအနေ၊ past simple ဖြင့် အဓိက ဖြစ်ရပ် ရေးပါ။",
      "နိဂုံးတွင် ခံစားချက် တစ်ကြောင်း ထည့်ပါ။",
    ],
  },
];
