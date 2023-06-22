var listElm = document.querySelector('#infinite-list');

//Add 20 Elements

var nextItem = 1;
var loadMore = function(){
    for(var i = 0; i < 20; i++){
        var item = document.createElement('li');
        item.innerText = 'item' + nextItem++;
        listElm.appendChild(item);
    }
}

//Detect when scrolled to bottom

listElm.addEventListener('scroll', function(){
    if(listElm.scrollTop + listElm.clientHeight >= listElm.scrollHeight){
        loadMore();
    }
});

//initially load some items

loadMore();
