var sdcard = android.os.Environment.getExternalStorageDirectory().getAbsolutePath();
var allsee = new Array(1000).join(String.fromCharCode(847));

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
var folder = new java.io.File(sdcard + "/Power/");
folder.mkdirs();
//변수 선언(관리자)
//var manager = read(Manager, sender)
function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName, threadId) {
    if (msg == "/pson") {
        save("Power", "botOn" + room + ".txt", "true");
        replier.reply("Strawberry_bot 가동");
    }
    if (msg == "/psoff") {
        save("Power", "botOn" + room + ".txt", "false");
        replier.reply("Strawberry_bot 정지");
    }
    if (msg == "/pspw") {
        var pwtf = read("Power", "botOn" + room + ".txt");
        if (pwtf == "true") {
            replier.reply("Project(Strawberry)의 전원이 켜져있습니다");
        } else if (pwtf == "false") {
            replier.reply("Project(Strawberry)의 전원이 꺼져있습니다");
        }
    }
    if (msg) {
        save("Power", "botOn" + room + ".txt", "true");
    }
}