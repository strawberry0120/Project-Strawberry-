var allsee = new Array(1000).join(String.fromCharCode(847));
var room_list = [];
var sdcard = android.os.Environment.getExternalStorageDirectory().getAbsolutePath();

function save(folderName, fileName, str) {
    var c = new java.io.File(sdcard + "/" + folderName + "/" + fileName);
    var d = new java.io.FileOutputStream(c);
    var e = new java.lang.String(str);
    d.write(e.getBytes());
    d.close();
}

function read(folderName, fileName) {
    var b = new java.io.File(sdcard + "/" + folderName + "/" + fileName);
    if (!(b.exists())) return null;
    var c = new java.io.FileInputStream(b);
    var d = new java.io.InputStreamReader(c);
    var e = new java.io.BufferedReader(d);
    var f = e.readLine();
    var g = "";
    while ((g = e.readLine()) != null) {
        f += "\n" + g;
    }
    c.close();
    d.close();
    e.close();
    return f.toString();
}

function command(cmd) {
    var cmd_str = cmd.split(' ')[0];
    var param = cmd.substring(cmd_str.length + 1, cmd.length);
    return [cmd_str, param];
}

var battery = Device.getBatteryLevel();

function strawberry(room, msg, sender, isGroupChat, replier, ImageDB, packageName, threadId) {
    if (msg == ("/psinfo")) {
        replier.reply("봇 이름 : Strawberry\n버전 : 1.0\n\nProject Strawberry(딸기 봇)입니다.");
    }
    if (msg == ("/pshelp")) {
        replier.reply("Strawberry_bot의 명령어 목록입니다.\n /pson - Strawberry_bot을 활성화시킵니다.\n /psoff - Strawberry_bot을 비활성화시킵니다.\n /psinfo - Strawberry_bot의 정보를 띄웁니다.");
    }
    if (msg && battery <= 10) {
        for (var i = 0; i < room_list.length; i++) {
            replier.reply(room_list[i], "--전체방에 공지합니다!--\n" + allsee + "배터리가 얼마 남지 않았습니다!")
            save("Power", "botOn" + ".txt", "true")
        }
    }
    if (msg == "/명령어") {
        replier.reply("made by 딸기\n\nProject(Strawberry)의 명령어 목록입니다." + allsee
            + "\n/패치노트 - 역대 패치노트 알림\n/pson - Strawberry_bot을 활성화시킵니다.\n/psoff - Strawberry_bot을 비활성화시킵니다.\n/psinfo - Strawberry_bot의 정보를 띄웁니다.\n"
            + "/pspw - Strawberry_bot의 전원상태\n/출석,ㅊㅊ,/출석 - 출석체크\n/가르치기 (가르칠말)=(대답할말) -가르치기\n/금지목록 - 가르치기가 금지된 목록(개인챗에서만)\n---로지꾸의 슬롯머신---\njoin! - 슬롯머신 등록\nwallet! - 지갑 정보\n"
            + "slot! - 슬롯 돌리기\n/나무위키 (검색할말)\n/날씨 (도시)\n/메일쓰기 (보낼사람 프로필 이름 정확히):(보낼말)\n/한강온도")
    }
    if (msg == "/패치노트") {
        replier.reply("-----패치노트-----" + allsee + "\n\n개발자 :로지꾸,딸기\n봇 이름:Project(Strawberry)\n\n20191204 ver1 /명령어, /패치노트 추가\n20191204 ver2 /날씨 추가\n20191204 ver3 /배터리양 추가\n20191205 ver1 /배터리양, /업타임 추가\n20191205 ver2 /가르치기 명령어들 추가" +
            "20191210 ver1.0 Project(Strawberry)이름변경\n20191210 ver2 /pson,/psoff,/pspw,슬롯,출석,메일,가르치기,날씨,나무위키 등록" + "\n----현재 테스트중----\n")
    }
    if (msg == msg) {
        DataBase.appendDataBase(room, "\n" + new Date().toLocaleString().replace("GMT+09:00", "") + sender + " : " + msg)
    }
    if (msg == ("/챗기록") == 0) {
        replier.reply("----" + (msg.substr(5)) + "방의 이전 채팅기록----" + allsee + DataBase.getDataBase(msg.substr(5) + ".txt"))
    }
    if (msg == ("/봇 상태") == 0) {
        replier.reply("딸기 봇의 배터리가 " + Device.getBatteryLevel() + "%만큼 남았습니다" + "\n" + "충전상황 : " + Device.isCharging());
        //업타임
        let AlarmManager = Api.getContext().getSystemService(android.content.Context.ALARM_SERVICE);
        let mm = (AlarmManager.ELAPSED_REALTIME_WAKEUP, android.os.SystemClock.elapsedRealtime());
        let sec = (mm / 1000) % 60;
        let min = (mm / (1000 * 60)) % 60;
        let hr = (mm / (1000 * 60 * 60)) % 24;
        replier.reply("현재 가동 시간: " + Math.floor(hr) + "시간 " + Math.floor(min) + "분 " + Math.floor(sec) + "초")
    }
    if ((sender == "꧁༺순둥딸기༻꧂") && (msg == ("/공지하기")) == 0) {
        msg = msg.substr(6);
        for (var i = 0; i < room_list.length; i++) {
            replier.reply(room_list[i], "--전체방에 공지합니다!--\n" + allsee + msg);
        }
    }
    if (msg == "/주사위") {
        var icon = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
        replier.reply(icon[Math.floor(Math.random() * 6)]);
    }
}



function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName, threadId) {
    var power = read("Power", "botOn" + room + ".txt")

    room = room.trim();
    sender = sender.trim();
    msg = msg.trim();

    try {
        if (power == "false") {
            return;
        } else {
            strawberry(room, msg, sender, isGroupChat, replier, ImageDB, packageName, threadI);
        }
    } catch (e) {
        var error = Api.getTran("en", "ko", e);
        var line = e.lineNumber;
        replier.reply("\n스크립트 에러가 발생했습니다!\n" + allsee + "\n행 : " + line + "\n" + error + "\n\n" + e + "\n");
        Log.error(e + "\n\n" + error, viewToast = false);
    }
}
