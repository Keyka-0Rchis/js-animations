const listTit = document.querySelectorAll('.list-tit');
const listContent = document.querySelectorAll('.list-content');

listTit.forEach((tit, i) => {
  tit.addEventListener('click', () => {
    const content = listContent[i];

////activateがついていたら外す、そうでなければつける
//    if (content.className.includes('activate')) {
//        content.classList.remove('activate');
//    } else {
//        content.classList.add('activate');
//    }

////のは、toggleでできるらしい。けど、高さをここで計算してstyleに入れる方法のほうがよさげ？
//    content.classList.toggle('activate');

    if (content.style.height === '0rem'){
        content.style.height = content.scrollHeight + 'px';
        //scrollHeightはremには対応しないっぽい
    }else{
        content.style.height = '0rem';
    }
  });
});