init();
function init(){
    let storeName=['wantreez1', 'wantreez', 'hyper', 'cross1', 'cross']
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
    const storeGroup = ['wantreez' ,'hyper','cross1','cross1','cross1','cross1','cross1','cross1','cross1','cross1','cross1','cross1']
    let storeGroupHtml = '';
    for(i of storeGroup){
        storeGroupHtml += `<button type="button" onclick="checkedStore('${i}')" class="btn btn-indigo">${i}</button>`
    }
    $("#map-container").append(storeGroupHtml)
}

function checkedStore(storename){
    let store = document.getElementById('dynamicStoreName'),
        store1 = store.querySelectorAll('label');
    // console.log(store1[1].innerText)
    let storeCount = range(0,store1.length-1)
    for(i in storeCount){
        // console.log(store1[i].innerText)
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

