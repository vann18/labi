const btn = document.getElementById('start');

btn.addEventListener('click', () => {
  tekst("Бегущая строка в JavaScript",40);
});

function tekst(msg,ctrlwidth)
{
  msg = msg+"";
  newmsg = msg
  while (newmsg.length < ctrlwidth) {newmsg += msg}
  document.write ('<form name="Tekst">')
  document.write ('<input name="tekst" value= "'+newmsg+'" size= '+ctrlwidth+' disabled=true/>')
  document.write ('</form>')
  prokrutka()
}

function prokrutka()
{
  NowMsg=document.Tekst.tekst.value
  NowMsg = NowMsg.substring(NowMsg.length - 1, NowMsg.length)+NowMsg.substring(0,NowMsg.length - 1);
  document.Tekst.tekst.value = NowMsg
  bannerid=setTimeout("prokrutka()",90)
}