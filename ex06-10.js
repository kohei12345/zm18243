function hyoji(){//表示する文字　var cnt = document.timer.moji.value.length;//文字が全部表示されているか確認
if(continue<11){//現在より1文字多く切り出して表示document.timer.moji.value=str.substr(0,cnt+1);}
else{//全て表示されたら、空文字に戻すdocument.timer.moji.value="";}}
function startfnc(){//関数hyoji()を1000ミリ秒間隔で呼び起こすsetlnterval("hyoji()",1000);}