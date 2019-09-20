//First one fucking hell
const myFavoriteBooks = ['holes', 'holes2', 'harry_potter', 'waduhek', 'twilight', 'shanara', 'dempsy', 'richtofen', 'nikolai', 'takyo']


//the third question//
//and the fifth question//


function    defunction(){
    const ul = document.createElement('ul');
    for (let i=0;i<myFavoriteBooks.length; i++){
        const li = document.createElement('li');
        li.innerHTML = myFavoriteBooks[i];//this answers question 3//
       // li.innerHtml = moreInfo.holes.title//question 5

        ul.appendchild(li);

    }
    document.getElementById("namesOfBooks").appendchild(ul);

}

//Question Number 4//
const moreInfo={
    holes : {
    title:'holes',
    language:'english',   },
    holes2 : {
        title:'holes2',
        language:'english',   },
        harry_potter : {
            title:'harry potter',
            language:'english',   },
            waduhek : {
                title:'heks',
                language:'english',   },
                
                twilight : {
                    title:'twilight1,23,4,',
                    language:'english',   },
                    shanara : {
                        title:'the legend of Shanara',
                        language:'english',   },
                        
                        dempsy : {
                            title:'cool shit',
                            language:'english',   },
                            richtofen : {
                                title:'german Archloch',
                                language:'english',   },
                                
                                nikolai : {
                                    title:'The russian cunt',
                                    language:'english',   },
                                    takyo : {
                                        title:'the Japanese bitch',
                                        language:'english',   },
                                        
                                                                                
}
//Question Number 5//
console.log('test')
