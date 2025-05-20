//const boxesWrapper = document.querySelector(".boxes-wrapper");
//boxwrapperを指定すると、ずれるかも
const boxes = document.querySelectorAll(".box");

const addClass = (entries,observe) => {
    entries.forEach(entry=>{
        if (entry.isIntersecting){
                entry.target.classList.add('displayed');
        }else{
                entry.target.classList.remove('displayed');
        }
    });
    //box一つずつ判定しているので、forEachはいらないと思いきや、これがないと
    //同時に画面に入ってきたものに対応できないっぽい
};
////entriesの中身
//entry = {
//  target: DOM要素（監視してたやつ）,
//  isIntersecting: true or false（画面に入ってるかどうか）,
//  intersectionRatio: 重なり率（0～1）,
//  boundingClientRect: 要素の位置情報,
//  intersectionRect: 実際に交差してる領域,
//  rootBounds: ビューポート情報（オプション）
//}
const boxesObserve = new IntersectionObserver(addClass);
//起爆するとaddClassが発動するobserver
boxes.forEach(box =>{
    boxesObserve.observe(box)
});
//boxesのそれぞれのboxに対してobserverをセットする感じ