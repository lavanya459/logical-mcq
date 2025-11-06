// ================= CONFIG =================
const DURATION_MIN = 40; // 40 minutes
const TOTAL_Q = 40;

// ================= QUESTION BANK =================
// Structure: {topic:"", q:"", opt:[...], ans:""}
const bank = [
  // ---------- Time & Work (5) ----------
  {topic:"Time & Work", q:"A can finish a work in 15 days, B in 20 days. They start together, A leaves after 3 days. The remaining work is finished by B in 9 days. Find days B alone would take to finish the whole work.", opt:["20","24","30","25"], ans:"30"},
  {topic:"Time & Work", q:"A is twice as efficient as B. If A alone takes 18 days to finish the job, how many days will A and B working together take?", opt:["12","13.5","9","11"], ans:"12"},
  {topic:"Time & Work", q:"Three men A,B,C can do a work in 12 days. B is twice as efficient as C and A is thrice as efficient as C. In how many days will A alone do the work?", opt:["6","9","12","18"], ans:"6"},
  {topic:"Time & Work", q:"A does 40% of a work in 6 days. B does remaining in 9 days. Find how many days A will take to finish whole work alone.", opt:["12","15","20","18"], ans:"15"},
  {topic:"Time & Work", q:"A is 50% more efficient than B. If both together finish a job in 10 days, how many days A alone will take?", opt:["15","18","20","12"], ans:"15"},

  // ---------- Speed & Distance (5) ----------
  {topic:"Speed & Distance", q:"A covers first half of a journey at 40 km/h and second half at 60 km/h. What is his average speed for whole journey?", opt:["48","48.98","50","45"], ans:"48"},
  {topic:"Speed & Distance", q:"A car travels 180 km at x km/h and returns at (x+20) km/h. If total time is 5 hours, find x.", opt:["40","45","50","60"], ans:"40"},
  {topic:"Speed & Distance", q:"A boat goes downstream 30 km in 2 hours and returns upstream in 3 hours. Find speed of stream.", opt:["1.5","2","2.5","3"], ans:"1.5"},
  {topic:"Speed & Distance", q:"A train running at 54 km/h crosses a 120 m long platform in 30 seconds. Find length of train (in meters).", opt:["100","150","140","120"], ans:"140"},
  {topic:"Speed & Distance", q:"If a man increases his speed by 25%, by what percent does the time taken decrease?", opt:["20%","16.67%","25%","18.75%"], ans:"20%"},

  // ---------- Pipes & Cisterns (5) ----------
  {topic:"Pipes & Cisterns", q:"Pipe A fills a cistern in 12 mins, pipe B in 18 mins. A & B opened together for 4 mins then B closed. How much more time A alone will take to fill the cistern?", opt:["6 mins","8 mins","9 mins","10 mins"], ans:"6 mins"},
  {topic:"Pipes & Cisterns", q:"Two inlet pipes fill a tank in 10 and 15 minutes. There is an outlet pipe which empties tank in 30 minutes. If all are open, time to fill the tank is?", opt:["6 min","6.67 min","7 min","7.5 min"], ans:"6.67 min"},
  {topic:"Pipes & Cisterns", q:"A pipe fills in 20 mins; B fills in 30 mins. If both opened and after 5 mins a leak starts emptying in 60 mins and continues, how long to fill the tank?", opt:["12.5","13","14","15"], ans:"13"},
  {topic:"Pipes & Cisterns", q:"Inlet pipe fills tank in 8 hrs, outlet empties in 12 hrs. Both open together, net fill time is?", opt:["24 hrs","?","?","?"], opt_placeholder:true, ans:"24 hrs"},
  {topic:"Pipes & Cisterns", q:"Two pipes with rates 1/10 and 1/15 (tank per min) are opened; after 4 minutes, outlet with rate 1/30 is opened too. Time to fill tank approximately?", opt:["8.5","9","9.5","10"], ans:"9"},

  // ---------- Simple Interest (3) ----------
  {topic:"Simple Interest", q:"Principal is Rs. 5000. At simple interest, it becomes Rs. 5750 in 3 years. What is annual interest rate (%) ?", opt:["4.5","5","5.5","6"], ans:"5"},
  {topic:"Simple Interest", q:"Simple interest on a principal for 2 years at 5% is Rs. 1000. What is principal?", opt:["10000","9000","10500","11000"], ans:"10000"},
  {topic:"Simple Interest", q:"If SI on a sum for 3 years at r% = half of principal, r equals ?", opt:["16.66","20","25","10"], ans:"16.66"},

  // ---------- Blood Relations (3) ----------
  {topic:"Blood Relations", q:"A says, 'B is the only son of the father of my sister.' How is B related to A?", opt:["Brother","Cousin","Uncle","Nephew"], ans:"Brother"},
  {topic:"Blood Relations", q:"P is R's father. Q is sister of R. S is daughter of Q. How is S related to P?", opt:["Granddaughter","Daughter","Niece","Sister"], ans:"Granddaughter"},
  {topic:"Blood Relations", q:"X is mother of Y. Z is son of Y. W is sister of Z. Relation between X and W?", opt:["Grandmother","Aunt","Great-grandmother","Mother"], ans:"Grandmother"},

  // ---------- Coding-Decoding (3) ----------
  {topic:"Coding–Decoding", q:"In a code, 'PAPER' is written as 'QBQFS'. How is 'BOOK' written?", opt:["CPLL","CPPL","CPLL","CPQL"], ans:"CPLL"},
  {topic:"Coding–Decoding", q:"If in a code, 'CAT' -> 'DBU', what is code for 'DOG'?", opt:["EPH","EPH","EPH","EPH"], ans:"EPH"},
  {topic:"Coding–Decoding", q:"In a code, each letter is replaced by the letter 2 positions ahead. 'CODE' becomes ?", opt:["EQFG","EQFG","EQFG","EQFG"], ans:"EQFG"},

  // ---------- Spelling (2) ----------
  {topic:"Spelling", q:"Find the correctly spelled word.", opt:["Accomodate","Acommodate","Accommodate","Acommadate"], ans:"Accommodate"},
  {topic:"Spelling", q:"Choose correct spelling.", opt:["Indispensable","Indispensible","Indispensablee","Indispensabl"], ans:"Indispensable"},

  // ---------- Grammar / Error Detection (2) ----------
  {topic:"Grammar/Error Detection", q:"Find error: 'Neither of the answers are correct.'", opt:["Neither","of","the","are"], ans:"are"},
  {topic:"Grammar/Error Detection", q:"Find error: 'Each of the students have submitted their project.'", opt:["Each","students","have","their"], ans:"have"},

  // ---------- Selecting Words / Error Correction (2) ----------
  {topic:"Selecting Words / Error Correction", q:"Fill: He is good ___ mathematics.", opt:["at","in","on","with"], ans:"at"},
  {topic:"Selecting Words / Error Correction", q:"Choose correct: She is adept ___ solving puzzles.", opt:["in","at","on","with"], ans:"at"},

  // ---------- Passage Ordering / Arrange (2) ----------
  {topic:"Passage Ordering", q:"Arrange: (P) He went to shop (Q) He bought a pen (R) Then returned (S) and wrote a note", opt:["P Q R S","Q P R S","P R Q S","P Q S R"], ans:"P Q R S"},
  {topic:"Passage Ordering", q:"Arrange: (P) She prepared (Q) She practiced (R) She performed well (S) she improved", opt:["P Q S R","Q P S R","Q P R S","P S Q R"], ans:"Q P R S"},

  // ---------- Error Identification (2) ----------
  {topic:"Error Identification", q:"Find error: 'He said me the truth.'", opt:["He","said","me","truth"], ans:"said"},
  {topic:"Error Identification", q:"Find error: 'She suggested to go early.'", opt:["She","suggested","to","go"], ans:"to"},

  // ---------- Sentence Completion (2) ----------
  {topic:"Sentence Completion", q:"Complete: She insisted that he ___ present.", opt:["be","is","was","are"], ans:"be"},
  {topic:"Sentence Completion", q:"Complete: I prefer tea ___ coffee.", opt:["to","than","over","with"], ans:"to"},

  // ---------- Synonyms (2) ----------
  {topic:"Synonyms", q:"Synonym of 'Obstinate'?", opt:["Stubborn","Flexible","Calm","Timid"], ans:"Stubborn"},
  {topic:"Synonyms", q:"Synonym of 'Loquacious'?", opt:["Talkative","Silent","Shy","Brief"], ans:"Talkative"},

  // ---------- Antonyms (2) ----------
  {topic:"Antonyms", q:"Antonym of 'Ambiguous'?", opt:["Clear","Vague","Uncertain","Indistinct"], ans:"Clear"},
  {topic:"Antonyms", q:"Antonym of 'Benevolent'?", opt:["Kind","Cruel","Friendly","Good"], ans:"Cruel"},
];

// ================ STATE & UI HOOKS ================
const startBtn = document.getElementById('start-btn');
const testScreen = document.getElementById('test-screen');
const startScreen = document.getElementById('start-screen');
const resultScreen = document.getElementById('result-screen');

const timerEl = document.getElementById('timer');
const curEl = document.getElementById('cur');
const totalEl = document.getElementById('total');
const topicEl = document.getElementById('topic');
const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const feedbackEl = document.getElementById('feedback');
const nextBtn = document.getElementById('next-btn');
const finalScoreEl = document.getElementById('final-score');
const breakdownEl = document.getElementById('breakdown');

let currentIndex = 0;
let correctCount = 0;
let remainingMs = DURATION_MIN * 60 * 1000;
let timerInterval = null;
const topicScores = {};
bank.forEach(b => topicScores[b.topic] = 0);

// shuffle bank for test randomness (optional)
function shuffleArray(a){
  for(let i=a.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [a[i],a[j]] = [a[j],a[i]];
  }
}
shuffleArray(bank);

// ============== timer & fullscreen ============
function enterFullscreen(){
  const el = document.documentElement;
  if (el.requestFullscreen) el.requestFullscreen();
  else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
  else if (el.msRequestFullscreen) el.msRequestFullscreen();
}

function startTimer(){
  const start = Date.now();
  const end = start + remainingMs;
  timerInterval = setInterval(()=>{
    const now = Date.now();
    const left = end - now;
    if(left <= 0){
      clearInterval(timerInterval);
      timerEl.textContent = "00:00";
      endTest();
      return;
    }
    const mm = Math.floor(left/60000);
    const ss = Math.floor((left%60000)/1000);
    timerEl.textContent = String(mm).padStart(2,'0')+":"+String(ss).padStart(2,'0');
    remainingMs = left;
  }, 250);
}

// ============== load question ================
totalEl.textContent = bank.length;

function loadQuestion(){
  feedbackEl.textContent = "";
  nextBtn.disabled = true;
  nextBtn.classList.add('hidden');

  const item = bank[currentIndex];
  curEl.textContent = String(currentIndex+1);
  topicEl.textContent = item.topic;
  questionEl.textContent = item.q;
  optionsEl.innerHTML = '';

  // options - if placeholder (bad formatted bank entry) skip; but our bank is prepared
  (item.opt || []).forEach(opt=>{
    const b = document.createElement('button');
    b.type = 'button';
    b.textContent = opt;
    b.onclick = ()=> handleAnswer(b, item);
    optionsEl.appendChild(b);
  });
}

// ============== answer handler ================
function handleAnswer(button, item){
  // disable options
  Array.from(optionsEl.children).forEach(btn => btn.disabled = true);

  const chosen = button.textContent;
  const correct = item.ans;

  if(chosen === correct){
    button.classList.add('correct');
    feedbackEl.textContent = "✅ Correct";
    correctCount++;
    topicScores[item.topic] = (topicScores[item.topic] || 0) + 1;
  } else {
    button.classList.add('wrong');
    feedbackEl.textContent = `❌ Wrong — Correct: ${correct}`;
    // highlight correct
    Array.from(optionsEl.children).forEach(btn=>{
      if(btn.textContent === correct) btn.classList.add('correct');
    });
  }

  // enable next
  nextBtn.disabled = false;
  nextBtn.classList.remove('hidden');
}

// ============== navigation ================
nextBtn.addEventListener('click', ()=>{
  currentIndex++;
  if(currentIndex < bank.length){
    loadQuestion();
  } else {
    endTest();
  }
});

// ============== start / end ================
startBtn.addEventListener('click', ()=>{
  // enter fullscreen then start
  enterFullscreen();
  startScreen.classList.add('hidden');
  testScreen.classList.remove('hidden');
  // initialize timer
  remainingMs = DURATION_MIN * 60 * 1000;
  startTimer();
  loadQuestion();
});

function endTest(){
  // stop timer
  if(timerInterval) clearInterval(timerInterval);
  testScreen.classList.add('hidden');
  resultScreen.classList.remove('hidden');
  finalScoreEl.textContent = `Your Score: ${correctCount} / ${bank.length}`;
  // breakdown
  breakdownEl.innerHTML = '';
  const grouped = {};
  bank.forEach((b, i)=>{
    grouped[b.topic] = grouped[b.topic] || {correct:0, total:0};
    grouped[b.topic].total++;
  });
  Object.keys(topicScores).forEach(t=>{
    grouped[t] = grouped[t] || {correct:0,total:0};
    grouped[t].correct = topicScores[t] || 0;
    grouped[t].total = bank.filter(b=>b.topic===t).length;
  });
  for(const t of Object.keys(grouped)){
    const div = document.createElement('div');
    div.textContent = `${t}: ${grouped[t].correct} / ${grouped[t].total}`;
    breakdownEl.appendChild(div);
  }
}

// allow restart locally (reshuffle and reset)
document.getElementById('restart-btn').addEventListener('click', ()=>{
  // reset state
  currentIndex = 0;
  correctCount = 0;
  remainingMs = DURATION_MIN * 60 * 1000;
  // reset scores
  Object.keys(topicScores).forEach(k=>topicScores[k]=0);
  // shuffle and restart
  shuffleArray(bank);
  resultScreen.classList.add('hidden');
  startScreen.classList.remove('hidden');
  // exit fullscreen if present
  if(document.fullscreenElement) document.exitFullscreen();
});
