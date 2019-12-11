const scriptName="manage.js";
var admin = ["로지꾸", "꧁༺순둥딸기༻꧂", "프로젝트_딸기.개발자.부"];



function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName, threadId){
    //이 코드로 저장과 리로드 기능을 하게 할것

    //리로드
    if(admin.indexOf(sender)!=-1 && msg == "리로드"){
        try {
            Api.off(operationJS);
            Api.reload(operationJS);
            Api.on(operationJS);
            replier.reply("리로드 성공");
        } catch(error) {
            replier.reply(error);
        }
    }
    //js파일 목록
    if(admin.indexOf(sender)!=-1 && msg == "동기화"){
        replier.reply(Api.getScriptNames());
    }

    //리로드 할 파일 정하기
    if(admin.indexOf(sender)!=-1 && msg.indexOf("파일변경")!== -1){
        operationJS = msg.split(" ")[1]+".js";
        replier.reply(operationJS + "로 변경완료");
    }
}