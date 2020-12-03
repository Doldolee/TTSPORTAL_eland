//get통신확인
function click1() {
    $('#control_iframe').attr('src','http://tts.wantreez.com/w00/login.php?member_info=testangel&member_pw=0000') 
    location.reload();
}

init();
function init(){
    let storeName=['강남점_1','강남점_2','강남점_3','강서점_1','강서점_2','강서점_3','구로점_1','구로점_2','구로점_3','불광점_1','불광점_2','불광점_3','송파점_1','송파점_2','송파점_3','중계점_1','중계점_2','중계점_3','천호점(천호2점)_1','천호점(천호2점)_2','천호점(천호2점)_3','일산점_1','일산점_2','일산점_3','철산점_1','철산점_2','철산점_3','광명점_1','광명점_2','광명점_3','산본점_1','산본점_2','산본점_3','부천점_1','부천점_2','부천점_3','분당점_1','분당점_2','분당점_3','야탑점_1','야탑점_2','야탑점_3','동수원_1','동수원_2','동수원_3','수원점_1','수원점_2','수원점_3','고잔점_1','고잔점_2','고잔점_3','안산점_1','안산점_2','안산점_3','평촌2점_1','평촌2점_2','평촌2점_3','안양점_1','안양점_2','안양점_3','평택점_1','평택점_2','평택점_3','부평점_1','부평점_2','부평점_3','인천점_1','인천점_2','인천점_3','동아 강북점_1','동아 강북점_2','동아 강북점_3','동아마트 수성점_1','동아마트 수성점_2','동아마트 수성점_3','동아 쇼핑점_1','동아 쇼핑점_2','동아 쇼핑점_3','동아 수성점_1','동아 수성점_2','동아 수성점_3','동아 구미점_1','동아 구미점_2','동아 구미점_3','괴정점_1','괴정점_2','괴정점_3','부산대점_1','부산대점_2','부산대점_3','서면점_1','서면점_2','서면점_3','해운대점_1','해운대점_2','해운대점_3','울산점_1','울산점_2','울산점_3','광주역점_1','광주역점_2','광주역점_3','순천점_1','순천점_2','순천점_3','목동점_1','목동점_2','목동점_3','김포_1','김포_2','김포_3','신구로점_1','신구로점_2','신구로점_3']
    let storeHtml =''
    let count = 0
    for(let i of storeName){
        if(count % 2 === 0){
        storeHtml += `<span class="bnm" style="margin-left: 2vw; position: absolute;">              
        <input type="checkbox" class="custom-control-input " id="defaultUnchecked${count}" >
        <label class="custom-control-label checkboxlabel" for="defaultUnchecked${count}" >${i}</label>
        </span> `;
        count= count+ 1;
            
        }else{
            storeHtml += ` <span class="bnm" style="margin-left: 14vw; position: absolute;">
            <input type="checkbox" class="custom-control-input" id="defaultUnchecked${count}">
            <label class="custom-control-label checkboxlabel" for="defaultUnchecked${count}" >${i}</label>
            </span><br><br>`;
            count= count+ 1;
        }
    }
    $("#dynamicStoreName").append(storeHtml)   
    const storeGroup = ['강남점','강서점','구로점','불광점','송파점','중계점','천호점(천호2점)','일산점','철산점','광명점','산본점','부천점','분당점','야탑점','동수원','수원점','고잔점','안산점','평촌2점','안양점','평택점','부평점','인천점','동아 강북점','동아마트 수성점','동아 쇼핑점','동아 수성점','동아 구미점','괴정점','부산대점','서면점','해운대점','울산점','광주역점','순천점','목동점','김포','신구로점']
    let storeGroupHtml = '';
    for(i of storeGroup){
        storeGroupHtml += `<button type="button" onclick="checkedStore('${i}')" class="btn btn-indigo">${i}</button>`
    }
    $("#map-container").append(storeGroupHtml)
    
}


function checkedStore(storename){
    let store = document.getElementById('dynamicStoreName'),
        store1 = store.querySelectorAll('label');
    let storeCount = range(0,store1.length-1)
    for(i in storeCount){
        if(store1[i].innerText.includes(storename)){
            store1[i].click()
        }
    }
}

function range(start, end) {
    var arr = [];
    var length = end - start; 
    for (var i = 0; i <= length; i++) { 
        arr[i] = start;
        start++;
    }
    return arr;
}

