'use strict';

{
  const question = document.getElementById('question');
  const choices = document.getElementById('choices');
  const btn = document.getElementById('btn');
  const result = document.getElementById('result');
  const scoreLabel=document.querySelector("#result p")

  const quizSet = [
    {q: 'トラベリングが一番多いのは?', c: ['ポン', 'ハーデン', 'かわちゅ']},
    {q: '最も情報通なのは?', c: ['園新', '永吉', '宇都']},
    {q: '最も救急車にお世話になったのは？', c: ['曾野新', 'だーい', 'まにわいんさい']},
    {q: 'つい最近まで学生だったのは？', c: ['えびき', '田平', 'ぽん']},
    {q: 'ペアーズで無銭デートしたのは？', c: ['えびき', 'しんぺ', 'まにわあうさい']},
    {q: '外に出たがるのは？', c: ['まにわあうさい', 'しゅん', 'にわとり']},
    {q: '早打ちなのは？', c: ['あへたく', 'よしのび', '893']},
    {q: 'ちゅうそんにスーパーブロックくらったのは？', c: ['よしのび', 'えびき', '甲斐']},
    {q: '試合中甲斐にミドルキックくらったのは？', c: ['けーた', 'まにわ', '長尾さん']},
    {q: '鳥取南〜福岡第一の山田の進路は？', c: ['日大', '白鷗大', 'ニート']},
  ];
  let currentNum = 0;
  let isAnswered;
  let score=0;

  

  function shuffle(arr){
    for(let i= arr.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [arr[j],arr[i]]= [arr[i],arr[j]]
    }
    return arr;
  }

  function checkAnswer(li){
      if(isAnswered===true){
          return;
      }
      isAnswered=true;
  if(li.textContent===quizSet[currentNum].c[0]){
      li.classList.add("correct");
      score++;
            
  }else{
      li.classList.add("wrong");
  }

  btn.classList.remove("disabled");
}

function setQuiz(){
  isAnswered=false;
  question.textContent = quizSet[currentNum].q;

while(choices.firstChild){
    choices.removeChild(choices.firstChild);
}

  const shuffledChoices=shuffle([...quizSet[currentNum].c]);
  shuffledChoices.forEach(choice => {
    const li = document.createElement('li');
    li.textContent = choice;
    li.addEventListener("click",()=>{
        checkAnswer(li);
    });
    choices.appendChild(li);
  });

  if(currentNum===quizSet.length-1){
      btn.textContent="Show Score";
  }
}
setQuiz();

btn.addEventListener("click",()=>{
    if(btn.classList.contains("disabled")){
        return;
    }
    btn.classList.add("disabled");

    if(currentNum===quizSet.length-1){
        scoreLabel.textContent=`Score:${score}/${quizSet.length}`;
        result.classList.remove("hidden");
     } else{
            currentNum++;
            setQuiz();

        }
    
});
}