var sdcard = android.os.Environment.getExternalStorageDirectory().getAbsolutePath();
var allsee = new Array(1000).join(String.fromCharCode(847));

function command(cmd) {
    var cmd_str = cmd.split(' ')[0];
    var param = cmd.substring(cmd_str.length + 1, cmd.length);
    return [cmd_str, param];
}

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

function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName, threadId) {
    if(command(msg)[0]=="/save") {
        var script_left = command(msg)[1].split("|")[0];
        var script_right = command(msg)[1].split("|")[1];
        save("katalkbot", script_left + ".js", script_right)
        replier.reply("스크립트를 " + script_left + "의 이름으로 저장했습니다!")
    }
    if(command(msg)[0]=="/read") {
        script_read = read("katalkbot", command(msg)[1]+".js")
        replier.reply(script_read)
    }
}