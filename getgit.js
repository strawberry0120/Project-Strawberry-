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

function command(cmd) {
    var cmd_str = cmd.split(' ')[0];
    var param = cmd.substring(cmd_str.length + 1, cmd.length);
    return [cmd_str, param];
}

function loadscriptdata(scripturl) {
    try {
        var url = new java.net.URL(scripturl);
        var con = url.openConnection();
        if (con != null) {
            con.setConnectTimeout(5000);
            con.setUseCaches(false);
            var isr = new java.io.InputStreamReader(con.getInputStream());
            var br = new java.io.BufferedReader(isr);
            var str = br.readLine();
            var line = "";
            while ((line = br.readLine()) != null) {
                str += "\n" + line;
            }
            isr.close();
            br.close();
            con.disconnect();
        }
        return str.toString();
    } catch (e) {
        Log.debug(e);
    }
}

function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName, threadId) {
    if (command(msg)[0] == "/저장") {
        var name = command(msg)[1].split('=')[0];
        var scripturl = command(msg)[1].split('=')[1];
        var scriptsave = loadscriptdata(scripturl);
        save("katalkbot", name + ".js", scriptsave);
        replier.reply(name + ".js" + "의 이름으로 " + scriptsave + "를 저장했습니다");
    }
    if (msg.indexOf("/파일") == 0) {
        replier.reply(Api.getScriptNames());
    }
    if (msg.indexOf("/읽기") == 0) {
        var scripturl = loadscriptdata(msg.substr(4));
        var scriptread = loadscriptdata(scripturl);
        replier.reply(scriptread);
    }
}
