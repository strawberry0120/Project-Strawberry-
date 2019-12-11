const sdcard = android.os.Environment.getExternalStorageDirectory().getAbsolutePath();
const sdcard_1 = sdcard + "/" + "attend";
var hd;
var ssd = " ";
var hdd = " ";
var num = "1";

function response(room, msg, sender, isGroupChat, replier, ImageDB) {

var dt;
  dt = new Date();
  td = ["일","월","화","수","목","금","토"];
  td2 = dt.getDay();
  dy = dt.getFullYear();
  dm = (dt.getMonth() +1);
  dd = dt.getDate();
  td3 = td[td2];
  tt = dy + "-" + dm + "-" + dd + " , " + td3 + "요일"
 gg = dt.getHours() + "시 "  + dt.getMinutes() + "분 " + dt.getSeconds() + "." + dt.getMilliseconds() + "초";

if (msg == "ㅊㅊ" || msg == "출석" || msg == "/출석") {
var file2 = new java.io.File(sdcard_1 + "/" + tt + "!.txt");
var file3 = new java.io.File(sdcard_1 + "/" + tt + "?.txt");
var file4 = new java.io.File(sdcard_1 + "/" + room + tt + "!.txt");
var file5 = new java.io.File(sdcard_1 + "/" + room + tt + "?.txt");

if(file3.exists() == false){
var fos3 = new java.io.FileOutputStream(file3);
var str3 = new java.lang.String("0");
fos3.write(str3.getBytes());
fos3.close();
}

if(file2.exists() == false){
var fos2 = new java.io.FileOutputStream(file2);
load2 = tt + "의 출석정보입니다!" + "∫━━━━━━━━━━━━━━━━━━━━━━━━━";
var str2 = new java.lang.String(load2);
fos2.write(str2.getBytes());
fos2.close();
}

if(file5.exists() == false){
var fos5 = new java.io.FileOutputStream(file5);
var str5 = new java.lang.String("0");
fos5.write(str5.getBytes());
fos5.close();
}

if(file4.exists() == false){
var fos4 = new java.io.FileOutputStream(file4);
load2 = tt + "의 출석정보입니다!" + "∫━━━━━━━━━━━━━━━━━━━━━━━━━";
var str4 = new java.lang.String(load2);
fos4.write(str4.getBytes());
fos4.close();
}

var file3 = new java.io.File(sdcard_1 + "/" + tt + "?.txt");
var fis3 = new java.io.FileInputStream(file3);
var isr3 = new java.io.InputStreamReader(fis3);
var br3 = new java.io.BufferedReader(isr3);
var str3 = br3.readLine();
var str3 = Number(str3);

var file5 = new java.io.File(sdcard_1 + "/" + room + tt + "?.txt");
var fis5 = new java.io.FileInputStream(file5);
var isr5 = new java.io.InputStreamReader(fis5);
var br5 = new java.io.BufferedReader(isr5);
var str5 = br5.readLine();
var str5 = Number(str5);

var fis2 = new java.io.FileInputStream(file2);
var isr2 = new java.io.InputStreamReader(fis2);
var br2 = new java.io.BufferedReader(isr2);
var str2 = br2.readLine();

var fis4 = new java.io.FileInputStream(file4);
var isr4 = new java.io.InputStreamReader(fis4);
var br4 = new java.io.BufferedReader(isr4);
var str4 = br4.readLine();

var ch = sdcard_1 +"/"+ room + sender.replace("/","∫").replace("/","∫").replace("/","∫").replace("/","∫").replace("/","∫").replace("/","∫").replace("/","∫").replace("/","∫").replace("/","∫").replace("/","∫").replace("/","∫").replace("/","∫") + tt + ".txt";
var file = new java.io.File(ch);

if(file.exists() == false){
var fos = new java.io.FileOutputStream(file);
var str = new java.lang.String("");
fos.write(str.getBytes());
fos.close();
}
var fis = new java.io.FileInputStream(file);
var isr = new java.io.InputStreamReader(fis);
var br = new java.io.BufferedReader(isr);
var str = br.readLine();

if(str != "k2") {
str3 += 1;
var str3 = String(str3);
ssd = str3 + "등입니다!"
var fos3 = new java.io.FileOutputStream(file3);
var str3 = new java.lang.String(str3);
fos3.write(str3.getBytes());
fos3.close();
fis3.close();
isr3.close();
br3.close();

str5 += 1;
var str5 = String(str5);
hdd = str5 + "등입니다!"
var fos5 = new java.io.FileOutputStream(file5);
var str5 = new java.lang.String(str5);
fos5.write(str5.getBytes());
fos5.close();
fis5.close();
isr5.close();
br5.close();

var fos2 = new java.io.FileOutputStream(file2);
load = "∫" + str3 + "위∫" + sender + "∫━━━━━━━━━━━━━━━━━━━━━━━━━";
var str2 = new java.lang.String(str2 + load);
fos2.write(str2.getBytes());
fos2.close();
fis2.close();
isr2.close();
br2.close();

var fos4 = new java.io.FileOutputStream(file4);
load = "∫" + str5 + "위∫" + sender + "∫━━━━━━━━━━━━━━━━━━━━━━━━━";
var str4 = new java.lang.String(str4 + load);
fos4.write(str4.getBytes());
fos4.close();
fis4.close();
isr4.close();
br4.close();

replier.reply("[[딸기봇 출석체크]]\n" + tt + "\n" + gg +"\n출석 완료했습니다!\n" + "[방]" + sender + "님의 방순위는 " + hdd + "\n[전체]전체순위는 " + ssd);
ssd = " ";
var fos = new java.io.FileOutputStream(file);
var str = new java.lang.String("k2");
fos.write(str.getBytes());
fos.close();
fis.close();
isr.close();
br.close();
}
else
{
fis.close();
isr.close();
br.close();
replier.reply(sender+"님은 " + "\n이미 출석체크를 완료했습니다!");
}


}
}