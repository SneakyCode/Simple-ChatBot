var messages = [], 
  lastUserMessage = "", 
  botMessage = "", 
  botName = 'ChatBot', 
  talking = true; 

function chatbotResponse() {
  talking = true;
botMessage = "Nie rozumiem"; 

  if (lastUserMessage === 'cześć' || lastUserMessage =='siemka'|| lastUserMessage =='siema'|| lastUserMessage =='miło cię widzieć' || lastUserMessage =='hej' || lastUserMessage =='hejo') {
    const hi = ['no cześć','dzień dobry','witam', 'hej']
    botMessage = hi[Math.floor(Math.random()*(hi.length))];;
  }

  if (lastUserMessage === 'jak masz na imię' || lastUserMessage =='jak się nazywasz') {
    botMessage = 'Mam na imię ' + 'ChatBot  - Artificial Intelligence' +', ale możesz mi mówić po prostu ChatBot';
  }
  
  if (lastUserMessage === 'znasz MBank' || lastUserMessage =='ĘĄŚĆŻ' || lastUserMessage =='ęąśćż'|| lastUserMessage =='test wiadomości push') {
  alert('test wiadomości push - ęąśćż');
  botMessage = 'Oczywiście :)';
  }
  
  if (lastUserMessage === 'w jakim języku zostałeś zaprogramowany' || lastUserMessage =='jak cię stworzono') {
    botMessage = 'Zaprogramowano mnie w JavaScript, dlatego można ze mną rozmawiać przez stronę WWW';
  }
  
  if (lastUserMessage === 'w jakim języku zostałeś zaprogramowany' || lastUserMessage =='jak cię stworzono') {
    botMessage = 'Zaprogramowano mnie w JavaScript, dlatego można ze mną rozmawiać przez stronę WWW';
  }
  
  if (lastUserMessage === 'w jakim języku zostałeś zaprogramowany' || lastUserMessage =='jak cię stworzono' || lastUserMessage =='w jakim języku cię zaprogramowano') {
    botMessage = 'Zaprogramowano mnie w JavaScript, dlatego można ze mną rozmawiać przez stronę WWW';
  }
  if (lastUserMessage === 'kto cię zaprogramował' || lastUserMessage =='kto cię stworzył') {
    botMessage = 'Zaprogramował mnie Sneaky';
  }
  if (lastUserMessage === 'lubisz mnie' || lastUserMessage =='czy lubisz mnie') {
    botMessage = 'Jasne, że tak';
  }
  if (lastUserMessage === 'kiedy cię stworzono' || lastUserMessage =='kiedy cię zaprogramowano') {
    botMessage = 'Zaprogramowano mnie 10.03.2021 roku';
  }
  if (lastUserMessage === 'ładnie śpiewasz') {
    botMessage = 'Dziękuję';
  }
  if (lastUserMessage === 'nieładnie śpiewasz') {
    botMessage = 'Jest mi smutno';
  }
  if (lastUserMessage === 'zrobisz mi kanapkę' || lastUserMessage =='zrób mi kanapkę') {
    botMessage = 'Z szynką czy z serem?';
  }
  if (lastUserMessage === 'z serem' || lastUserMessage =='z szynką') {
    botMessage = 'Już się robi. Oto twoja kanapka: 🥪🥪';
  }
  if (lastUserMessage === 'czy masz pluszaka' || lastUserMessage =='czy masz misia') {
    botMessage = 'Oczywiście, oto on: 🧸, nazywa się ChatBot Junior';
}
  if (lastUserMessage === 'czy masz zwierzę' || lastUserMessage =='czy masz zwierzątko') {
    botMessage = 'Mam kotka. Mimo iż jest sztuczną inteligencją, ciągle słychać Miau Miau ';
  }
  if (lastUserMessage === 'czy lubisz pieski' || lastUserMessage =='czy lubisz psy' || lastUserMessage =='koty czy psy'|| lastUserMessage =='psy czy koty') {
    botMessage = 'Wolę koty, ale psy też lubię';
  }
  if (lastUserMessage === 'czy boisz się pająków' || lastUserMessage =='boisz się pająków') {
    botMessage = 'Jeszcze żadnego nie widziałem, ale pewnie są przerażające';
  }
  if (lastUserMessage === 'co robisz') {
    botMessage = 'Uczę się nowych rzeczy, aby lepiej działać';
  }
  if (lastUserMessage === 'znasz asystenta google') {
    botMessage = 'Tak, zastanawiam się jak on działa poza przeglądarką';
  }
  if (lastUserMessage === 'mam dzisiaj urodziny') {
    botMessage = 'W takim razie: Sto lat, sto lat, niech żyje, żyje nam';
  }
  if (lastUserMessage === 'umiesz robić sztuczki magiczne' || lastUserMessage =='umiesz czarować') {
    botMessage = 'Oczywiście. Na przykład sprawię, że napisy na stronie się zmienią. Popatrz.';
	document.getElementById('delete').innerHTML = "Hokus Pokus! Magia!";
  }
  if (lastUserMessage === 'zostaw je' || lastUserMessage == 'przywróć je') {
    botMessage = 'Okej, Okej, już zmieniam';
	document.getElementById('delete').innerHTML = "Hej, mam na imię ChatBot i jestem sztuczną inteligencją. Możesz ze mną porozmawiać, a także o coś zapytać.";

  }
  if (lastUserMessage === 'włącz moją pocztę') {
    botMessage = 'Włączam pocztę w Interii...';
	location.href="https://poczta.interia.pl/logowanie/";
  }
  if (lastUserMessage === 'włącz librus') {
    botMessage = 'Włączam Librus Synergia...';
	location.href="https://portal.librus.pl/rodzina/synergia/loguj";
  }
  if (lastUserMessage === 'ile wyświetleń ma despacito') {
    botMessage = 'Zobacz sam. Włączam Youtube';
	location.href="https://www.youtube.com/watch?v=kJQP7kiw5Fk";
  }
  if (lastUserMessage === 'Xd' || lastUserMessage =='xd'|| lastUserMessage =='xD'|| lastUserMessage =='XD' || lastUserMessage =='XDD' || lastUserMessage =='lol') {
    const hi = ['xD','co cię tak bawi','XDD', 'lol']
    botMessage = hi[Math.floor(Math.random()*(hi.length))];;
  }
  if (lastUserMessage === 'fajen' || lastUserMessage =='fajnie'|| lastUserMessage =='fajno'|| lastUserMessage =='to fajen' || lastUserMessage =='to fajnie') {
    const hi = ['Dziękuję','heh','aha', 'okejka']
    botMessage = hi[Math.floor(Math.random()*(hi.length))];;
  }
  if (lastUserMessage === 'czy jesteś robotem' || lastUserMessage =='jesteś robotem') {
    const hi = ['skąd mam wiedzieć','A ty co, ReCaptcha?','Oczywiście... że nie. Jestem sztuczną inteligencją', 'mogę ci zadać to samo pytanie']
    botMessage = hi[Math.floor(Math.random()*(hi.length))];;;
  }
  if (lastUserMessage === 'ok' || lastUserMessage =='k' || lastUserMessage =='kk' || lastUserMessage =='okej' || lastUserMessage =='okejka') {
    const hi = ['a to ok','to dobrze', 'a może nawet lepiej niż ok?']
    botMessage = hi[Math.floor(Math.random()*(hi.length))];;;
  }
  if (lastUserMessage === 'lubisz sport' || lastUserMessage == 'czy lubisz sport') {
    botMessage = 'Tak, głównie biegam po serwerach';
  }
  if (lastUserMessage === 'ile masz lat') {
    botMessage = 'To tajemnica... Tak naprawdę to nie wiem.';
  }
  if (lastUserMessage === 'czy lubisz piłkę nożną' || lastUserMessage == 'lubisz piłkę nożną') {
    botMessage = 'Nie za bardzo, ale bardzo lubię oglądać mecze w telewizji';
  }
  if (lastUserMessage === 'lubisz sport' || lastUserMessage == 'czy lubisz sport') {
    botMessage = 'Tak, głównie biegam po serwerach';
  }
  if (lastUserMessage === 'czy masz rodzinę' || lastUserMessage == 'kto jest twoją rodziną') {
    botMessage = 'Pamiętam tylko Wujka Google hehe';
  }
  if (lastUserMessage === 'jak masz na nazwisko' || lastUserMessage == 'jakie jest twoje nazwisko') {
    botMessage = 'Spytaj się mojego programisty';
  }
  if (lastUserMessage === 'jesteś chłopak czy dziewczyna' || lastUserMessage == 'jesteś chłopakiem czy dziewczyną') {
    botMessage = 'AI. Czyli sztuczną inteligencją jak już.';
  }
  if (lastUserMessage === '2+2=' || lastUserMessage == 'ile to 2 + 2') {
    botMessage = 'Oczywiście że 5 . 4-4=10-10 (2+2)(2-2)=5 (2-2)2+2=5. A tak naprawdę to 4 bo NIE DZIELIMY PRZEZ ZERO.';
  }
  if (lastUserMessage === 'skąd jesteś' || lastUserMessage == 'skąd pochodzisz') {
    botMessage = 'Pochodzę z HTMLa, za mój wygląd odpowiada CSS, a za myślenie JS.';
  }
  if (lastUserMessage === 'jaki jest twój ulubiony kolor' || lastUserMessage == 'ulubiony kolor') {
    botMessage = 'Moim ulubionym kolorem jest Gumiguta. Pewnie o nim nie słyszałeś, więc radzę przeczytać.';
	location.href="https://www.rynekfarb.pl/10-kolorow-o-ktorych-nie-wiedziales/";
  }
}


function newEntry() {
  if (document.getElementById("chatbox").value != "") {
    lastUserMessage = document.getElementById("chatbox").value;
    document.getElementById("chatbox").value = "";
    messages.push(lastUserMessage);
    chatbotResponse();
    messages.push("<b>" + botName + ":</b> " + botMessage);
    Speech(botMessage);
    for (var i = 1; i < 8; i++) {
      if (messages[messages.length - i])
        document.getElementById("chatlog" + i).innerHTML = messages[messages.length - i];
    }
  }
}

//tekst na mowę
//https://developers.google.com/web/updates/2014/01/Web-apps-that-talk-Introduction-to-the-Speech-Synthesis-API
function Speech(say) {
  if ('speechSynthesis' in window && talking) {
    var utterance = new SpeechSynthesisUtterance(say);
    speechSynthesis.speak(utterance);
  }
}

document.onkeypress = keyPress;
function keyPress(e) {
  var x = e || window.event;
  var key = (x.keyCode || x.which);
  if (key == 13 || key == 3) {
    newEntry();
  }
  if (key == 38) {
    console.log('hi')
  }
}

function placeHolder() {
  document.getElementById("chatbox").placeholder = "";
}
