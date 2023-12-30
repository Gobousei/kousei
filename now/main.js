let title;
let ontime;
let offtime;
const firebaseConfig = {
	apiKey: "AIzaSyDxJCiqc1gkJvx1NDuAFQaxA3uB80QeAMc",
  authDomain: "test-project-c8cd2.firebaseapp.com",
  databaseURL: "https://test-project-c8cd2-default-rtdb.firebaseio.com",
  projectId: "test-project-c8cd2",
  storageBucket: "test-project-c8cd2.appspot.com",
  messagingSenderId: "549860223340",
  appId: "1:549860223340:web:5cd18797744b0e09802b49"
    };
    firebase.initializeApp(firebaseConfig);
    var db=firebase.database();

    db.ref('current').on('value',function(obj){
        if(!obj){

        }else{
            var value = obj.val();
            var startstring = `タイトル：${value.title}\n開始時刻：${value.ontime}\n終了時刻：${value.offtime}`;
            document.getElementById('now').innerText=startstring;
        }
    })
function confirm(){
    title = document.getElementById('title');
    ontime = document.getElementById('on-time');
    offtime = document.getElementById('off-time');
    var string = `タイトル：${title.value}\r\n開始時刻：${ontime.value}\r\n終了時刻：${offtime.value}`;
    alert(string);
    db.ref('current').update({"title":title.value,"ontime":ontime.value,"offtime":offtime.value});
    title.value='';
    ontime.value='';
    offtime.value='';
}