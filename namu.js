function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName, threadId) {
    if (msg.startsWith("/나무위키 ")) {
        try {
            all = "\u200b".repeat(500) + "\n\n";
            sear = msg.substr(6);
            result = Utils.getWebText("https://namu.wiki/w/" + encodeURI(sear))
                .replace(/(<([^>]+)>)/g, "")
                .replace(/[\n\s]{2,}/g, "\n")
                .split("최근 수정 시각:")[1]
                .split("[더 보기]")[0]
                .trim()
                .replace(/\n([0-9]+)+/g, "\n\n$1")
                .replace(/\n\[([0-9]+)+\]/g, "\n\n[$1]");
            replier.reply("[!] " + sear + " 검색 결과" + all + result);
        } catch (e) {
            replier.reply("[!] 검색 결과가 없습니다.");
            Log.debug(e);
        }
    }
}
