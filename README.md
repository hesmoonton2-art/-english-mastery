# English Mastery — Basic to Advanced

မြန်မာဘာသာဖြင့် ရှင်းပြထားသော အင်္ဂလိပ် သင်ယူမှု ပလက်ဖောင်း (Next.js + TypeScript + Tailwind CSS)။
သင်ခန်းစာ၊ စကားလုံးဘဏ်၊ spaced repetition၊ ဖတ်/နား/ရေး/ပြော လေ့ကျင့်ခန်းများနှင့် စစ်ဆေးမှုများ ပါဝင်သည်။

> **အရေးကြီး —** ဤပလက်ဖောင်းသည် ကိုယ်တိုင် လေ့လာရန် ဖန်တီးထားသည့် သင်ရိုးဖြစ်သည်။
> အသံဖိုင် မပါဝင်ပါ၊ အသံ/အသံထွက် အကဲဖြတ်မှု မရှိပါ၊ AI ဖြင့် စာစစ်ခြင်း မရှိပါ။
> CEFR နှင့် IELTS ရလဒ်များသည် **ခန့်မှန်းချက်များ** သာဖြစ်ပြီး တရားဝင် အသိအမှတ်ပြု
> လက်မှတ် မဟုတ်ပါ။

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (static generation)
npm run start    # serve the production build
npm test         # unit + content integrity tests (node:test)
npm run lint     # ESLint (flat config, next/core-web-vitals + next/typescript)
```

လိုအပ်ချက် — Node.js 20+ (ဤပရောဂျက်ကို Node 22 ဖြင့် စမ်းသပ်ထားသည်)။
Backend သို့မဟုတ် ဒေတာဘေ့စ် မလိုအပ်ပါ။

## What is implemented

### သင်ရိုး (Content)

| အပိုင်း | အရေအတွက် | မှတ်ချက် |
| --- | --- | --- |
| အပြည့်အစုံ ရေးသားထားသော သင်ခန်းစာ | **185** | Module A (24), B (40), C (29), D (18), E (14), F (14), G (18), H (21), I (7) |
| စီစဉ်ထားသော သင်ခန်းစာ (roadmap) | **0** | စီစဉ်ထားသည့် ခေါင်းစဉ် အားလုံး အကြောင်းအရာ ရေးသားပြီး |
| သင်ရိုး စုစုပေါင်း | **185** | ပန်းတိုင် ၁၈၀–၂၄၀ |
| လေ့ကျင့်ခန်း (သင်ခန်းစာများမှ) | **1480** | သင်ခန်းစာ တစ်ခုလျှင် လမ်းညွှန် ၄ + ကိုယ်တိုင် ၄ |
| လေ့ကျင့်ခန်း (စုစုပေါင်း) | **1693** | သင်ခန်းစာ 1480 + စာမေးပွဲ 104 + ဖတ်ရှုမှု 51 + နားထောင်မှု 33 + IELTS 25 |
| စကားလုံး ဘဏ် | **569** | သင်ခန်းစာ + ဖတ်ရှုမှု glossary (ထပ်နေသည့် စကားလုံး ပေါင်းပြီး) |
| ဖတ်ရှုမှု စာပိုဒ် | **10** | မူရင်း ရေးသားထားသည် (A1–C1) — glossary + မေးခွန်း ၄–၆ ခု |
| နားထောင်မှု script | **7** | မူရင်း script (A1–C1) — အသံဖိုင် မပါ |
| စာရေးသားမှု တာဝန် | **8** | checklist + rubric + စံပြအဖြေ |
| ပြောဆိုမှု စာသား လေ့ကျင့်ခန်း | **7** | situation + phrases + စံပြအဖြေ |
| စာမေးပွဲ | **8** | A1, A2 (၂ ခု), B1, B2, C1, mock exam (မေးခွန်း ၂၀၊ အချိန်ကန့်သတ်) + placement test (မေးခွန်း ၂၀) |
| IELTS ပုံစံ လေ့ကျင့်ခန်း | **7** | Listening 2, Reading 2, Writing 2 (Task 1 + Task 2 ×၂) + Speaking set (Part 1–3) |

သင်ခန်းစာ တစ်ခုစီတွင် — ခေါင်းစဉ် + CEFR အဆင့်၊ ရည်မှန်းချက်များ၊ မြန်မာ ရှင်းလင်းချက်၊
မြန်မာ အဓိပ္ပာယ်ပါ စကားလုံးများ၊ သဒ္ဒါ စည်းမျဉ်း၊ ဥပမာ + ဘာသာပြန်၊ အဖြစ်များသော အမှား၊
လမ်းညွှန် လေ့ကျင့်ခန်း ၄ ခု၊ ကိုယ်တိုင် လေ့ကျင့်ခန်း ၄ ခု၊ အဖြေ + ရှင်းလင်းချက်၊
ပြန်လည်သုံးသပ်မေးခွန်း၊ အနှစ်ချုပ်၊ တိုင်းတာနိုင်သော ကျွမ်းကျင်မှု သတ်မှတ်ချက်များ ပါဝင်သည်။

### လုပ်ဆောင်ချက်များ

- **Dashboard** — ပြီးစီးမှု၊ ဆက်တိုက်ရက်၊ တိကျမှု၊ ရန် ကျန် စကားလုံး၊ နေ့စဉ် ပန်းတိုင်၊
  module/အဆင့် တိုးတက်မှု၊ အကြံပြုချက်များ (အားလုံး မှတ်တမ်းတင်ထားသည့် လုပ်ဆောင်ချက်မှ တွက်သည်)။
- **Roadmap** — Module A–I၊ CEFR အဆင့် A1–C2 လိုက် ရည်မှန်းချက်နှင့် သတ်မှတ်ချက်များ၊
  ရေးသားပြီး/စီစဉ်ထားသည် ခွဲခြားပြသမှု။
- **သင်ခန်းစာများ** — ရှာဖွေမှု၊ module/အဆင့်/အခြေအနေ စစ်ထုတ်မှု၊ ပြီးစီး/ကျွမ်းကျင်
  မှတ်တမ်း၊ bookmark၊ မှတ်စု။ သင်ခန်းစာ ဖွင့်ရုံဖြင့် 'ပြီးစီး' မဖြစ်ပါ။
- **စကားလုံး ဘဏ်** — 569 စကားလုံး၊ ရှာဖွေမှု/စစ်ထုတ်မှု၊ သိမ်းခြင်း၊ ★ အမှတ်အသား၊
  ကိုယ်ပိုင် မှတ်စု၊ 'သိပြီ' အမှတ်အသား၊ CSV/JSON ထုတ်ယူမှု။
- **မှတ်စုစာအုပ်** — စကားလုံး မှတ်စု၊ သင်ခန်းစာ မှတ်စု၊ ★ စကားလုံး/သင်ခန်းစာ၊
  စာရေးသားမှု မူကြမ်း၊ ပြောဆိုမှု မှတ်တမ်း။
- **Spaced repetition** — deterministic SM-2 ပုံစံ (again / hard / good / easy)၊
  ယနေ့ ရန် queue၊ ဤစက်ဝန်း ပြီးဆုံးမှု အကျဉ်းချုပ်။
- **လေ့ကျင့်ခန်း** — မေးခွန်း အမျိုးအစား ၅ မျိုး (MCQ၊ fill-in-blank၊ sentence correction၊
  word ordering၊ translation)၊ အကြောင်းအရာ/အဆင့် အလိုက် ရွေးချယ်မှု၊ အားနည်းချက် အကြံပြုချက်။
- **ဖတ်ရှုမှု / နားထောင်မှု** — မူရင်း စာသားများ၊ glossary မှ စကားလုံး သိမ်းနိုင်မှု၊
  မေးခွန်းများနှင့် ရှင်းလင်းချက်။ နားထောင်မှုတွင် အသံဖိုင် မရှိသဖြင့် play ခလုတ် မပြပါ။
- **စာရေးသားမှု** — စကားလုံး အရေအတွက်၊ စာပိုဒ်၊ ဝါကျအရှည်၊ ဆက်စပ်စကားလုံး၊ စကားလုံး
  ကြွယ်ဝမှု စသည်ကို စစ်ဆေးသည့် **စည်းမျဉ်းအခြေခံ** အစီရင်ခံစာ၊ rubric ဖြင့် ကိုယ်တိုင်
  ပြန်လည်သုံးသပ်မှု၊ စံပြအဖြေ၊ မူကြမ်း အလိုအလျောက် သိမ်းဆည်းမှု။
- **ပြောဆိုမှု** — စာသားအခြေခံ အခြေအနေများ၊ အသုံးဝင်သော စကားစုများ၊ မေးခွန်းများ၊
  စံပြအဖြေများ၊ ကိုယ်တိုင် စစ်ဆေးမှု မှတ်တမ်း။ မိုက်ခရိုဖုန်း သို့မဟုတ် အသံခွဲခြမ်းစိတ်ဖြာမှု မရှိပါ။
- **စာမေးပွဲများ** — အချိန် ကန့်သတ်ချက်ပါ mock exam များ၊ အဆုံးတွင် အဖြေ+ရှင်းလင်းချက်
  အားလုံး ပြသမှု၊ placement test မှ **ခန့်မှန်း** CEFR အဆင့်။
- **အကဲဖြတ်မှု** — မေးခွန်း အမျိုးအစား တစ်ခုစီသို့ လမ်းညွှန်ချက်၊ ကျွမ်းကျင်မှု အထောက်အထား၊
  CEFR အဆင့် လိုက် တိုးတက်မှု၊ placement ရလဒ်။
- **IELTS လေ့ကျင့်ခန်း** — Listening/Reading အတွက် ခန့်မှန်း band၊ Writing အတွက်
  စည်းမျဉ်းအခြေခံ ခွဲခြမ်းစိတ်ဖြာမှု၊ Speaking အတွက် မေးခွန်းများနှင့် band ဖော်ပြချက်များ။
- **တိုးတက်မှု** — module/အဆင့်/အကြောင်းအရာ အလိုက် တိကျမှု၊ မှားခဲ့သော မေးခွန်းများ
  (ရှင်းလင်းချက်နှင့်တကွ)၊ မကြာသေးမီ ဖြေဆိုမှုများ၊ ပရိုဖိုင်/ပန်းတိုင်/theme၊ ဒေတာ
  တင်သွင်း/ထုတ်ယူ/ရှင်းလင်းမှု။
- **အလင်း/အမှောင် theme** နှင့် **မိုဘိုင်း** — sticky header + slide-over လမ်းညွှန် (lg တွင် sidebar)၊
  ဖုန်းအရွယ်တွင် ကော်လံ တစ်ခုတည်း ဖြစ်သည်။ Theme ကို localStorage တွင် မှတ်ထားပြီး
  စာမျက်နှာ မပေါ်မီ ပြန်လည် အသုံးချသည်။

## Android (APK)

ဤအက်ပ်ကို Capacitor ဖြင့် Android APK အဖြစ် ထုပ်ပိုးထားသည်။

```bash
# static export + Capacitor sync
CAPACITOR_BUILD=1 npm run build
npx cap sync android

# GitHub Actions (recommended) — .github/workflows/android-apk.yml
# JDK 17 + Node 22 → assembleDebug → artifact + apk-build branch
gh workflow run android-apk.yml
```

- App ID — `com.englishmastery.app`၊ web root — `out/`၊ Android min SDK 22 / target 34။
- ထွက်ရှိသည့် APK သည် **debug-signed** ဖြစ်ပြီး side-load အတွက်သာ ဖြစ်သည် (Play Store
  အတွက် release key ဖြင့် လက်မှတ်ထိုးရန် လိုအပ်သည်)။
- ဖုန်းတွင် — APK ကို ဒေါင်းလုဒ်လုပ်ပြီး "Install unknown apps" ခွင့်ပြုကာ ဖွင့်ပါ။
  USB ဖြင့် `adb install english-mastery-debug.apk` လည်း ရသည်။
- APK အတွင်း ဒေတာသည် WebView ၏ `localStorage` တွင်သာ ရှိသည် (အင်တာနက် မလိုအပ်၊
  အကောင့် မလိုအပ်၊ ဆာဗာ သို့ မပို့ပါ)။ app ကို ဖျက်လျှင် ဒေတာ ပျောက်မည် — `/progress`
  စာမျက်နှာတွင် JSON အရန် သိမ်းထားပါ။
- APK တွင် အသံဖိုင်/မိုက်ခရိုဖုန်း မပါပါ။ စာသား အခြေခံ လေ့ကျင့်ခန်းများသာ ဖြစ်သည်။

## Data & privacy

- ဒေတာအားလုံး (သင်ခန်းစာ တိုးတက်မှု၊ ဖြေဆိုမှု မှတ်တမ်း၊ စကားလုံး၊ မှတ်စု၊ မူကြမ်း၊ theme)
  သည် **ဤဘရောက်ဇာ၏ `localStorage`** (`english-mastery.state.v1`) တွင်သာ ရှိသည်။
- အကောင့်၊ ဆာဗာ၊ ဒေတာဘေ့စ် မရှိပါ။ အခြား စက်များနှင့် အလိုအလျောက် မျှဝေမည် မဟုတ်ပါ။
- ဘရောက်ဇာ ဒေတာ ရှင်းလျှင် ပျောက်နိုင်သည်။ `တိုးတက်မှု → JSON အရန် သိမ်းမည်` ဖြင့်
  အရန် သိမ်းထားနိုင်ပြီး တူညီသော နေရာတွင် ပြန်လည် တင်သွင်းနိုင်သည်။
- Storage မရနိုင်ပါက အနီရောင် သတိပေးချက် ပြမည် (ဒေတာ ဆုံးရှုံးနိုင်သည်ဟု)။

## Project structure

```
src/
  app/                     Next.js App Router pages (dashboard, lessons, skills, tests, progress)
  components/              UI primitives, app shell, exercise player, per-skill views
  content/
    lessons/               Module A–I lessons (185 authored lessons, 39 files)
    curriculum.ts          planned roadmap (empty — every planned lesson is now authored)
    reading.ts listening.ts writing.ts speaking.ts quizzes.ts ielts.ts
    index.ts               content registry, word bank, counts
    meta.ts                module + CEFR metadata
  lib/
    types.ts               domain types
    store.tsx              React context + localStorage persistence (only storage access point)
    hooks.ts               stats/next-lesson/query-param hooks
    export.ts              CSV / JSON export
    core/                  grading, dates, SRS, stats, writing checker, band estimates
tests/                     unit tests + content integrity tests
```

## Testing

```bash
npm test
```

- `tests/grading.test.ts` — answer normalisation and grading for every exercise type
- `tests/srs.test.ts` — deterministic spaced repetition rules
- `tests/progress.test.ts` — streak and progress calculations
- `tests/writing.test.ts` — rule-based writing checks, formal register, band estimates
- `tests/content.test.ts` — content integrity: unique ids, required lesson sections, 4+4 exercises,
  answer validity, glossary/script/quiz completeness, roadmap size, unofficial CEFR labelling

## Known limitations (honest list)

1. **အသံ မပါ** — listening script များကို စာသားဖြင့်သာ ပေးထားသည်။ Play ခလုတ် မရှိပါ။
   အသံထွက် အကဲဖြတ်မှု/မိုက်ခရိုဖုန်း မရှိပါ။
2. **AI အကဲဖြတ်မှု မရှိ** — စာရေးသားမှု အစီရင်ခံစာသည် ရေတွက်နိုင်သော အချက်များသာ
   စစ်ဆေးသည်။ အကြောင်းအရာ အရည်အသွေးကို အကဲဖြတ်ခြင်း မဟုတ်ပါ။
3. **CEFR / IELTS ရမှတ်များ ခန့်မှန်းချက်သာ** — တရားဝင် လက်မှတ် မဟုတ်ပါ။
4. **သင်ခန်းစာ ၁၈၅ / ၁၈၅** — စီစဉ်ထားသည့် သင်ခန်းစာ အားလုံး အကြောင်းအရာ ရေးသားပြီးဖြစ်သည်။
   သင်ခန်းစာ တစ်ခုကို ဖွင့်ကြည့်ရုံဖြင့် 'ပြီးစီး' မဖြစ်ပါ — လေ့ကျင့်ခန်း ဖြေဆိုမှသာ မှတ်တမ်းတင်သည်။
5. **C2 အကြောင်းအရာ ၄ ခုသာ** — C2 အဆင့်တွင် သင်ခန်းစာ ၄ ခု (ရေးသားမှု စတိုင်၊ သရော်မှု၊
   လေသံ၊ ဆွဲဆောင်မှု) ရှိသည်။ C1 နှင့် နှိုင်းယှဉ်လျှင် နည်းသည်။
6. **No sync/accounts** — တစ်ခုတည်းသော ဘရောက်ဇာ (သို့မဟုတ် APK ၏ WebView) တွင်သာ ဒေတာ ရှိသည်။
7. **စာမေးပွဲ အချိန်ကန့်သတ်ချက်** — client-side timer ဖြစ်ပြီး စာမျက်နှာ ပြန်လည်
   ဖွင့်လျှင် အချိန်ပြန်စမည်။

## Next steps (remaining work)

1. C2 အဆင့် သင်ခန်းစာများ ထပ်တိုးခြင်း (လက်ရှိ ၄ ခု)။
2. နားထောင်မှုအတွက် မူရင်း အသံဖိုင် ထုတ်လုပ်ပြီး (ရရှိပါက) play ခလုတ် ထည့်သွင်းခြင်း။
3. စာရေးသားမှုအတွက် တကယ့် အကဲဖြတ်မှု ဝန်ဆောင်မှု ရှိပါက ချိတ်ဆက်ခြင်း (မရှိပါက
   လက်ရှိ စည်းမျဉ်းအခြေခံ နည်းလမ်းကို ဆက်ထားခြင်း)။
4. အကောင့်/ဆာဗာ မပါသောကြောင့် စက်များကြား ဒေတာ မျှဝေမှု မရှိပါ — လိုအပ်ပါက
   cloud sync ထည့်သွင်းခြင်း။
