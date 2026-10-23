import type { SpeakingTask } from "@/lib/types";

/**
 * Text-based speaking simulations. There is no microphone input or speech analysis in
 * this application; each task states that clearly and asks learners to self-assess.
 */
export const speakingTasks: SpeakingTask[] = [
  {
    id: "s1-meeting-someone",
    title: "Meeting Someone New",
    titleMm: "လူသစ်နှင့် တွေ့ဆုံခြင်း",
    level: "A1",
    situationMm: "သင်တန်းအသစ်တစ်ခုတွင် လူတစ်ဦးနှင့် ပထမဆုံး တွေ့ဆုံသည်။ သင့်ကိုယ်သင် မိတ်ဆက်ပြီး သူ့အကြောင်း မေးပါ။",
    goalMm: "မိတ်ဆက်စကား ၄ ကြောင်း ပြောနိုင်ရန်။",
    usefulPhrases: [
      { en: "Hello, I'm ... Nice to meet you.", mm: "မင်္ဂလာပါ၊ ကျွန်တော် ... ပါ။ တွေ့ရတာ ဝမ်းသာပါတယ်။" },
      { en: "Where are you from?", mm: "ဘယ်ကလဲ။" },
      { en: "What do you do?", mm: "ဘာအလုပ် လုပ်သလဲ။" },
      { en: "Sorry, could you repeat that?", mm: "တောင်းပန်ပါတယ်၊ ထပ်ပြောပေးနိုင်မလား။" },
    ],
    prompts: [
      {
        en: "Introduce yourself in two sentences.",
        mm: "သင့်ကိုယ်သင် ဝါကျ နှစ်ကြောင်းဖြင့် မိတ်ဆက်ပါ။",
        modelAnswer: "Hello, my name is Su Su. I'm a student from Monywa, and I'm learning English for my future job.",
      },
      {
        en: "Ask the other person two questions.",
        mm: "တစ်ဖက်လူကို မေးခွန်း နှစ်ခု မေးပါ။",
        modelAnswer: "Where are you from, and what do you do?",
      },
      {
        en: "You did not hear their name. What do you say?",
        mm: "သူတို့နာမည်ကို မကြားလိုက်ရပါ။ ဘာပြောမလဲ။",
        modelAnswer: "Sorry, I didn't catch your name. Could you say it again, please?",
      },
      {
        en: "End the conversation politely.",
        mm: "ယဉ်ကျေးစွာ စကားပြောကို အဆုံးသတ်ပါ။",
        modelAnswer: "It was nice talking to you. See you in class tomorrow.",
      },
    ],
  },
  {
    id: "s2-asking-directions",
    title: "Asking for and Giving Directions",
    titleMm: "လမ်းမေးခြင်း နှင့် လမ်းညွှန်ခြင်း",
    level: "A2",
    situationMm: "သင်သည် မြို့တစ်မြို့တွင် ရှိပြီး ဘဏ်ကို ရှာနေသည်။ လမ်းမေးပါ။ ပြီးလျှင် အခြားသူကို လမ်းညွှန်ပေးပါ။",
    goalMm: "လမ်းမေးရန် စကားစု ၃ ခုနှင့် လမ်းညွှန်ရန် စကားစု ၄ ခု သုံးနိုင်ရန်။",
    usefulPhrases: [
      { en: "Excuse me, where is the nearest bank?", mm: "တောင်းပန်ပါတယ်၊ အနီးဆုံး ဘဏ် ဘယ်မှာလဲ။" },
      { en: "Go straight ahead.", mm: "တည့်တည့် ဆက်သွားပါ။" },
      { en: "Turn left at the traffic lights.", mm: "မီးပွိုင့်မှာ ဘယ်ဘက် ကွေ့ပါ။" },
      { en: "It's opposite the post office.", mm: "စာတိုက်နဲ့ မျက်နှာချင်းဆိုင် ဖြစ်တယ်။" },
    ],
    prompts: [
      {
        en: "Ask politely for directions to the bank.",
        mm: "ဘဏ်သွားရန် လမ်းကို ယဉ်ကျေးစွာ မေးပါ။",
        modelAnswer: "Excuse me, could you tell me how to get to the nearest bank?",
      },
      {
        en: "Explain that you did not understand.",
        mm: "နားမလည်ကြောင်း ရှင်းပြပါ။",
        modelAnswer: "Sorry, I didn't follow that. Could you say it more slowly?",
      },
      {
        en: "Give directions: straight, then right at the corner.",
        mm: "လမ်းညွှန်ပါ — တည့်တည့်၊ ပြီးရင် ထောင့်မှာ ညာဘက်။",
        modelAnswer: "Go straight ahead for about 200 metres, then turn right at the corner. The bank is on your left.",
      },
      {
        en: "Confirm you understood the directions.",
        mm: "လမ်းညွှန်ချက်ကို နားလည်ကြောင်း အတည်ပြုပါ။",
        modelAnswer: "So, I go straight and turn right at the corner. Is that right?",
      },
    ],
  },
  {
    id: "s3-expressing-opinion",
    title: "Giving and Defending an Opinion",
    titleMm: "ထင်မြင်ချက် ဖော်ပြခြင်း နှင့် ကာကွယ်ပြောဆိုခြင်း",
    level: "B1",
    situationMm: "အဖွဲ့ ဆွေးနွေးမှုတွင် 'ကျောင်းသားများ ဖုန်းကို အတန်းထဲ ယူလာသင့်သလား' ဟု မေးသည်။ သင့်ထင်မြင်ချက်ကို အကြောင်းပြချက်ဖြင့် ပြောပါ။",
    goalMm: "ထင်မြင်ချက် + အကြောင်းပြချက် + ဥပမာ ဖြင့် စကားလုံး ၈၀ ခန့် ပြောနိုင်ရန်။",
    usefulPhrases: [
      { en: "In my opinion, ...", mm: "ကျွန်တော့်အမြင်အရ ..." },
      { en: "The main reason is that ...", mm: "အဓိက အကြောင်းရင်းက ..." },
      { en: "For example, ...", mm: "ဥပမာ ..." },
      { en: "I see your point, but ...", mm: "သင့်အချက်ကို နားလည်ပါတယ်၊ ဒါပေမယ့် ..." },
    ],
    prompts: [
      {
        en: "State your opinion clearly.",
        mm: "သင့်ထင်မြင်ချက်ကို ရှင်းလင်းစွာ ဖော်ပြပါ။",
        modelAnswer: "In my opinion, students should be allowed to bring phones to class, but they should not use them during lessons.",
      },
      {
        en: "Give one reason and one example.",
        mm: "အကြောင်းပြချက် တစ်ခုနှင့် ဥပမာ တစ်ခု ပေးပါ။",
        modelAnswer: "The main reason is safety. For example, if a student needs to contact their family in an emergency, a phone is useful.",
      },
      {
        en: "Respond politely to someone who disagrees.",
        mm: "သဘောမတူသူကို ယဉ်ကျေးစွာ ပြန်ဖြေပါ။",
        modelAnswer: "I see your point, but I think clear rules can solve that problem. Teachers could ask students to keep phones in their bags.",
      },
      {
        en: "Summarise your position in one sentence.",
        mm: "သင့်ရပ်တည်ချက်ကို ဝါကျ တစ်ကြောင်းဖြင့် အနှစ်ချုပ်ပါ။",
        modelAnswer: "To sum up, phones should be permitted but carefully managed.",
      },
    ],
  },
  {
    id: "s4-presentation",
    title: "Mini-Presentation: A Place You Know",
    titleMm: "တင်ဆက်မှု အတို — သင်သိတဲ့ နေရာတစ်ခု",
    level: "B2",
    situationMm: "သင့်အတန်းရှေ့တွင် မိနစ် ၂ ခန့် တင်ဆက်မှု လုပ်ရမည်။ သင်ကောင်းကောင်း သိတဲ့ နေရာတစ်ခု (မြို့၊ ရွာ၊ ရပ်ကွက်) အကြောင်း တင်ဆက်ပါ။",
    goalMm: "ဖွဲ့စည်းပုံ ၃ ပိုင်း (မိတ်ဆက်၊ အဓိကအချက် ၂ ခု၊ နိဂုံး) ဖြင့် စကားလုံး ၁၅၀ ခန့် ပြောနိုင်ရန်။",
    usefulPhrases: [
      { en: "Today I'd like to talk about ...", mm: "ဒီနေ့ ကျွန်တော် ... အကြောင်း ပြောချင်ပါတယ်။" },
      { en: "There are two main reasons why ...", mm: "... ဖို့ အဓိက အကြောင်းရင်း နှစ်ခု ရှိပါတယ်။" },
      { en: "For instance, ...", mm: "ဥပမာ ..." },
      { en: "To conclude, ...", mm: "နိဂုံးချုပ်ရန် ..." },
    ],
    prompts: [
      {
        en: "Introduce your topic in two sentences.",
        mm: "သင့်အကြောင်းအရာကို ဝါကျ နှစ်ကြောင်းဖြင့် မိတ်ဆက်ပါ။",
        modelAnswer: "Today I'd like to talk about Monywa, the town where I grew up. I will explain what makes it interesting and why visitors should spend more than one day there.",
      },
      {
        en: "Give two main points with details.",
        mm: "အဓိကအချက် နှစ်ခုကို အသေးစိတ်ဖြင့် ပြောပါ။",
        modelAnswer: "First, Monywa is a gateway to Thanboddhay Pagoda and the Hpowindaung caves, which attract many visitors. Second, the food is excellent; for instance, the local noodles are famous in the region.",
      },
      {
        en: "Invite questions politely.",
        mm: "မေးခွန်းများကို ယဉ်ကျေးစွာ ဖိတ်ခေါ်ပါ။",
        modelAnswer: "Thank you for listening. I'm happy to answer any questions.",
      },
      {
        en: "Answer a difficult question you cannot fully answer.",
        mm: "အပြည့်အဝ မဖြေနိုင်သော ခက်ခဲသည့် မေးခွန်းကို ဖြေပါ။",
        modelAnswer: "That's a good question. I'm not completely sure, but I believe the number of visitors has increased in recent years. I would need to check the figures.",
      },
    ],
  },

  {
    id: "s5-doctor-visit",
    title: "Describing Symptoms at a Clinic",
    titleMm: "ဆေးခန်းတွင် ရောဂါလက္ခဏာ ဖော်ပြခြင်း",
    level: "A2",
    situationMm: "ဆေးခန်းသို့ သွားပြီး ဆရာဝန်ကို သင့်ရောဂါလက္ခဏာများ ရှင်းပြရမည်။ ဘယ်အချိန်ကတည်းက ဖြစ်နေသည်၊ ဘယ်လိုခံစားရသည်ကို ရှင်းရှင်းလင်းလင်း ပြောပါ။",
    goalMm: "ရောဂါလက္ခဏာ ဖော်ပြခြင်း၊ အချိန်ကာလ ပြောခြင်း နှင့် မေးခွန်း မေးခြင်းတို့ကို ပြုလုပ်နိုင်ရန်။",
    usefulPhrases: [
      { en: "I've had a headache since Monday.", mm: "တနင်္လာနေ့ကတည်းက ခေါင်းကိုက်နေပါတယ်။" },
      { en: "It hurts when I swallow.", mm: "မျိုချတဲ့အခါ နာပါတယ်။" },
      { en: "Should I take this medicine after meals?", mm: "ဒီဆေးကို အစာစားပြီးမှ သောက်ရမလား။" },
      { en: "How often should I take it?", mm: "ဘယ်လောက်ခြားပြီး သောက်ရမလဲ။" },
    ],
    prompts: [
      {
        en: "Tell the doctor what is wrong and when it started.",
        mm: "ဆရာဝန်ကို ဘာဖြစ်နေသည်၊ ဘယ်အချိန်က စခဲ့သည်ကို ပြောပါ။",
        modelAnswer: "I've had a sore throat and a mild fever since Monday. It hurts when I swallow, and I feel tired in the afternoon.",
      },
      {
        en: "The doctor asks if you are allergic to any medicine. Answer clearly.",
        mm: "ဆေးနှင့် မတည့်မှု ရှိမရှိ မေးလာသည်။ ရှင်းလင်းစွာ ဖြေပါ။",
        modelAnswer: "I'm not allergic to any medicine, but I sometimes get a stomach ache from strong painkillers.",
      },
      {
        en: "Ask the doctor two questions about the treatment.",
        mm: "ကုသမှုနှင့် ပတ်သက်၍ မေးခွန်း နှစ်ခု မေးပါ။",
        modelAnswer: "How often should I take this medicine, and should I come back if the fever doesn't go down in three days?",
      },
      {
        en: "Repeat the instructions back to check you understood.",
        mm: "နားလည်ကြောင်း အတည်ပြုရန် ညွှန်ကြားချက်ကို ပြန်ပြောပါ။",
        modelAnswer: "So, one tablet three times a day after meals, and plenty of water. Is that right?",
      },
    ],
  },
  {
    id: "s6-job-interview",
    title: "A Short Job Interview",
    titleMm: "အလုပ်အင်တာဗျူး အတို",
    level: "B1",
    situationMm: "ဆိုင်တစ်ခုတွင် အချိန်ပိုင်း ဝန်ထမ်း လျှောက်ထားသည်။ အင်တာဗျူးသူက သင့်အတွေ့အကြုံ၊ အချိန်နှင့် ခွန်အားများအကြောင်း မေးမည်။ ရိုးသားပြီး ရှင်းလင်းစွာ ဖြေပါ။",
    goalMm: "STAR ပုံစံ (Situation–Task–Action–Result) ဖြင့် အတွေ့အကြုံ ပြောနိုင်ရန်။",
    usefulPhrases: [
      { en: "I worked as a cashier for six months last year.", mm: "မနှစ်က ခြောက်လ ငွေကိုင် အလုပ် လုပ်ခဲ့ပါတယ်။" },
      { en: "I'm available on weekday evenings and all day at the weekend.", mm: "ရက်သတ္တပတ် ညနေများနှင့် စနေ တနင်္ဂနွေ တစ်နေကုန် အားပါတယ်။" },
      { en: "One thing I'd like to improve is my spoken English.", mm: "ကျွန်တော် တိုးတက်ချင်တာ တစ်ခုက ပြောဆိုရေး အင်္ဂလိပ်စာပါ။" },
      { en: "Could you tell me more about the training?", mm: "သင်တန်းအကြောင်း ပိုပြီး ပြောပြနိုင်မလား။" },
    ],
    prompts: [
      {
        en: "Introduce yourself and say why you applied.",
        mm: "ကိုယ့်ကိုယ်ကို မိတ်ဆက်ပြီး ဘာကြောင့် လျှောက်ထားသည်ကို ပြောပါ။",
        modelAnswer: "I'm Ko Min, an 18-year-old student. I applied because I want to build customer service experience, and I enjoy working with people.",
      },
      {
        en: "Describe a time you solved a problem at work or school (use STAR).",
        mm: "အလုပ် သို့မဟုတ် ကျောင်းတွင် ပြဿနာ ဖြေရှင်းခဲ့သည့် အချိန်တစ်ခုကို ပြောပါ။",
        modelAnswer: "Last year, during our school fair, the queue at our food stall was very long. I suggested splitting it into two lines, one for drinks and one for food. Waiting time fell from ten minutes to about four, and we sold out earlier than expected.",
      },
      {
        en: "What is your weakness? Answer honestly but positively.",
        mm: "သင့်အားနည်းချက်က ဘာလဲ။ ရိုးသားပြီး အပြုသဘောဆောင်စွာ ဖြေပါ။",
        modelAnswer: "I sometimes speak too quickly when I'm nervous. I've started writing down two or three key points before an important conversation, which helps me slow down.",
      },
      {
        en: "Ask one question about the job.",
        mm: "အလုပ်နှင့် ပတ်သက်၍ မေးခွန်း တစ်ခု မေးပါ။",
        modelAnswer: "Could you tell me what a typical Saturday shift looks like and how much training new staff receive?",
      },
    ],
  },
  {
    id: "s7-ielts-part3",
    title: "IELTS Speaking Part 3: Extended Discussion",
    titleMm: "IELTS Speaking အပိုင်း (၃) — ဆွေးနွေးမှု",
    level: "B2",
    situationMm: "IELTS Speaking Part 3 ကဲ့သို့ လူမှုရေး အကြောင်းအရာတစ်ခုအပေါ် အမြင်ကို ၄–၅ ကြောင်းဖြင့် ရှင်းပြရမည်။ ကိုယ်ပိုင် အမြင် + အကြောင်းရင်း + ဥပမာ ဖွဲ့စည်းမှုကို သုံးပါ။",
    goalMm: "အမြင်တစ်ခုကို အကြောင်းရင်းနှင့် ဥပမာဖြင့် ၃၀–၄၀ စက္ကန့် ပြောနိုင်ရန်။",
    usefulPhrases: [
      { en: "On balance, I'd say ...", mm: "ခြုံကြည့်လျှင် ကျွန်တော်ဆိုရရင် ..." },
      { en: "The main reason for this is that ...", mm: "ဒီအတွက် အဓိက အကြောင်းရင်းက ..." },
      { en: "Take my own experience, for example.", mm: "ကျွန်တော့် အတွေ့အကြုံကို ဥပမာ ယူပါ။" },
      { en: "That said, I can see the other side of the argument.", mm: "ဒါပေမယ့် ဆန့်ကျင်ဘက် အမြင်ကိုလည်း နားလည်ပါတယ်။" },
    ],
    prompts: [
      {
        en: "Do you think people rely too much on their phones?",
        mm: "လူများ ဖုန်းအပေါ် အလွန်အကျွံ မှီခိုနေသည်ဟု ထင်ပါသလား။",
        modelAnswer: "On balance, I'd say yes, especially for small daily tasks. People check maps, prices and messages instead of asking someone nearby. The main reason is convenience, but I think it reduces face-to-face contact. That said, phones also help people stay in touch across long distances, so the effect isn't entirely negative.",
      },
      {
        en: "Should schools teach practical skills such as cooking and budgeting?",
        mm: "ကျောင်းများတွင် ချက်ပြုတ်ခြင်း၊ ငွေစီမံခန့်ခွဲခြင်းကဲ့သို့ လက်တွေ့ ကျွမ်းကျင်မှုများ သင်ပေးသင့်ပါသလား။",
        modelAnswer: "I'd argue they should, at least in the final two years. Most students leave school able to solve equations but unable to plan a monthly budget. Take my own experience, for example: I learned to cook only after I moved away, and it cost me far more than it should have. A short weekly class would prevent that.",
      },
      {
        en: "Is it better to live in a city or in the countryside?",
        mm: "မြို့ သို့မဟုတ် ကျေးလက်တွင် နေထိုင်ခြင်း ဘယ်ဟာ ပိုကောင်းသလဲ။",
        modelAnswer: "It depends on the stage of life, I think. Cities offer jobs, hospitals and universities within reach, which matters for young professionals. However, the noise and cost can be exhausting, and older people often prefer the slower pace of the countryside. Given the choice, I'd live in a smaller town near a city — a compromise between both.",
      },
      {
        en: "How might work change in the next twenty years?",
        mm: "လာမည့် အနှစ် နှစ်ဆယ်အတွင်း အလုပ်အကိုင် ဘယ်လို ပြောင်းလဲနိုင်သလဲ။",
        modelAnswer: "I expect routine tasks to be automated first, which will affect factories and offices alike. That doesn't mean fewer jobs overall, but it does mean people will need to retrain more often. The biggest challenge will probably be education: systems that assume one qualification lasts a lifetime will struggle to keep up.",
      },
    ],
  },
];
