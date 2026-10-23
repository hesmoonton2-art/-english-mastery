import type { CEFR, ModuleId } from "@/lib/types";

export const CEFR_LEVELS: {
  level: CEFR;
  label: string;
  labelMm: string;
  canDo: string[];
  criteria: string[];
}[] = [
  {
    level: "A1",
    label: "Beginner",
    labelMm: "အစပြု အဆင့်",
    canDo: [
      "မိမိကိုယ်ကို မိတ်ဆက်နိုင်သည်",
      "ရိုးရှင်းသော နေ့စဉ် မေးခွန်းများ မေးနိုင်/ဖြေနိုင်သည်",
      "အခြေခံ ဝါကျ တည်ဆောက်နိုင်သည်",
    ],
    criteria: [
      "Module A ၏ သင်ခန်းစာ ၅ ခုကို ပြီးဆုံးပြီး ပျမ်းမျှ ၈၀% အထက် ရရှိရမည်",
      "Verb to be နှင့် present simple ကို ၈၀% တိကျစွာ အသုံးချနိုင်ရမည်",
      "ကိုယ်ရေးအချက်အလက် ၅ ကြောင်း အင်္ဂလိပ်လို ရေးနိုင်ရမည်",
    ],
  },
  {
    level: "A2",
    label: "Elementary",
    labelMm: "အခြေခံ အဆင့်",
    canDo: [
      "နေ့စဉ်ဘဝ အကြောင်းအရာများကို ပြောနိုင်/ရေးနိုင်သည်",
      "အတိတ်နှင့် အနာဂတ် အကြောင်းအရာများကို ဖော်ပြနိုင်သည်",
      "တိုတောင်းသော စာများနှင့် ကြော်ငြာများကို နားလည်နိုင်သည်",
    ],
    criteria: [
      "Module B ၏ အခြေခံ grammar သင်ခန်းစာများ ပြီးဆုံးရမည်",
      "Past simple နှင့် future forms ကို ၈၀% တိကျစွာ အသုံးချနိုင်ရမည်",
      "စကားလုံး ၁၀၀ ခန့်ရှိ စာပိုဒ်ကို ကိုယ်တိုင် ရေးနိုင်ရမည်",
    ],
  },
  {
    level: "B1",
    label: "Intermediate",
    labelMm: "အလယ်အလတ် အဆင့်",
    canDo: [
      "ရင်းနှီးသော အကြောင်းအရာများတွင် ထင်မြင်ချက် ဖော်ပြနိုင်သည်",
      "အကြောင်းအရာ တစ်ခု၏ အဓိက အချက်ကို ဖော်ထုတ်နိုင်သည်",
      "အကြောင်းပြချက် ပေးနိုင်သည်",
    ],
    criteria: [
      "Present perfect နှင့် conditionals ကို ၈၀% တိကျစွာ အသုံးချနိုင်ရမည်",
      "သတင်းအချက်အလက် ဖတ်ပြီး inference မေးခွန်းများ ၇၅% ဖြေနိုင်ရမည်",
      "ထင်မြင်ချက် စာပိုဒ် (၁၅၀ စကားလုံး) ကို အကြောင်းပြချက်နှင့်တကွ ရေးနိုင်ရမည်",
    ],
  },
  {
    level: "B2",
    label: "Upper Intermediate",
    labelMm: "အလယ်အလတ် အထက်",
    canDo: [
      "ရှုပ်ထွေးသော စာများကို နားလည်နိုင်သည်",
      "အငြင်းအခုန် ဆွေးနွေးနိုင်သည်",
      "တရားဝင် စာများ ရေးနိုင်သည်",
    ],
    criteria: [
      "Passive voice နှင့် relative clauses ကို ၈၀% တိကျစွာ အသုံးချနိုင်ရမည်",
      "အငြင်းအခုန် စာစီစာကုံး (၂၀၀ စကားလုံး) တွင် rubric အမှတ် ၇၀% ရရမည်",
      "စကားလုံး ၂၅၀ ခန့်ရှိ စာကို ဖတ်ပြီး tone/purpose ခွဲခြားနိုင်ရမည်",
    ],
  },
  {
    level: "C1",
    label: "Advanced",
    labelMm: "အဆင့်မြင့်",
    canDo: [
      "ရှည်လျား၍ ခက်ခဲသော စာများကို နားလည်နိုင်သည်",
      "ကျွမ်းကျင်စွာ ရေးနိုင်၊ ပြောနိုင်သည်",
      "ဘာသာစကားကို လိုက်လျောညီထွေ အသုံးချနိုင်သည်",
    ],
    criteria: [
      "Module H ၏ advanced သင်ခန်းစာများ ပြီးဆုံးရမည်",
      "Complex sentences နှင့် register ကို ၈၅% တိကျစွာ အသုံးချနိုင်ရမည်",
      "အကြောင်းအရာ နှစ်ခု နှိုင်းယှဉ်သုံးသပ်ချက် (၂၅၀ စကားလုံး) ရေးနိုင်ရမည်",
    ],
  },
  {
    level: "C2",
    label: "Proficiency",
    labelMm: "ကျွမ်းကျင်မှု အမြင့်ဆုံး",
    canDo: [
      "ဖတ်ရှုသည့် အရာအားလုံးကို လွယ်ကူစွာ နားလည်နိုင်သည်",
      "အလွန်တိကျပြီး သဘောထား ကွဲပြားမှုကို ဖော်ပြနိုင်သည်",
      "ဘာသာစကားကို ကျွမ်းကျင်စွာ ထိန်းချုပ်နိုင်သည်",
    ],
    criteria: [
      "Module A–H သင်ခန်းစာ ၈၀% ပြီးဆုံးရမည်",
      "Module I ၏ placement assessment တွင် ၈၅% အထက် ရရမည်",
      "အငြင်းအခုန်/သုတေသန စာတမ်း (၃၀၀ စကားလုံး) ကို rubric ၈၀% ဖြင့် ရေးနိုင်ရမည်",
    ],
  },
];

export const MODULES: {
  id: ModuleId;
  title: string;
  titleMm: string;
  description: string;
  color: string;
}[] = [
  { id: "A", title: "English Foundations", titleMm: "အင်္ဂလိပ် အခြေခံ", description: "အက္ခရာ၊ အသံထွက်၊ နှုတ်ဆက်စကား၊ နာမ်၊ နာမ်စား၊ ဝါကျ အခြေခံ", color: "sky" },
  { id: "B", title: "Essential Grammar", titleMm: "လိုအပ်သော သဒ္ဒါ", description: "Tense အားလုံး၊ modal၊ conditional၊ passive၊ relative clause စသည်", color: "indigo" },
  { id: "C", title: "Vocabulary Development", titleMm: "စကားလုံး တိုးတက်မှု", description: "ဘာသာရပ် အလိုက် စကားလုံးများ၊ အသုံးအနှုန်းများ၊ collocation", color: "emerald" },
  { id: "D", title: "Speaking & Pronunciation", titleMm: "ပြောဆိုမှုနှင့် အသံထွက်", description: "နေ့စဉ် စကားပြော၊ ထင်မြင်ချက်၊ အသံထွက် နှင့် stress", color: "rose" },
  { id: "E", title: "Listening", titleMm: "နားထောင်မှု", description: "မူရင်း script များ၊ အဓိကအချက် နှင့် မှတ်စု ရေးနည်း", color: "amber" },
  { id: "F", title: "Reading", titleMm: "ဖတ်ရှုမှု", description: "ဖတ်နည်း၊ inference၊ tone နှင့် သတင်းအချက်အလက် ဖော်ထုတ်မှု", color: "teal" },
  { id: "G", title: "Writing", titleMm: "စာရေးသားမှု", description: "စာပိုဒ်၊ စာစီစာကုံး၊ အီးမေးလ်၊ report နှင့် rubric", color: "fuchsia" },
  { id: "H", title: "Intermediate to Advanced", titleMm: "အလယ်မှ အဆင့်မြင့်သို့", description: "Complex sentence၊ register၊ academic writing၊ rhetoric နှင့် C2 စတိုင်", color: "violet" },
  { id: "I", title: "Proficiency Assessment", titleMm: "ကျွမ်းကျင်မှု အကဲဖြတ်", description: "CEFR အကဲဖြတ်မှု၊ IELTS၊ လေ့လာမှု ကျွမ်းကျင်မှု နှင့် စမ်းသပ် စာမေးပွဲ", color: "slate" },
];

export function moduleTitle(id: ModuleId): string {
  return MODULES.find((module) => module.id === id)?.title ?? id;
}

export function moduleTitleMm(id: ModuleId): string {
  return MODULES.find((module) => module.id === id)?.titleMm ?? id;
}

export function levelLabel(level: CEFR): string {
  const found = CEFR_LEVELS.find((item) => item.level === level);
  return found ? `${found.level} · ${found.label}` : level;
}
