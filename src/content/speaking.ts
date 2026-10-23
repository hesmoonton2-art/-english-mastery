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
];
