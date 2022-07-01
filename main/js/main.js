// headerの読み込み
const headTitleChildren = document.querySelectorAll('.header-title')
const headTitleChildLength = headTitleChildren.length
let i = 0;

setInterval(function(){
	if(i<headTitleChildLength){
		headTitleChildren[i].classList.add('is-show')
		i++;
	}else{
		const navigateFlash = document.querySelector('.navigate')
		navigateFlash.classList.add('flash')
	}
},2000);

// abillity

const abillityList = document.querySelectorAll('.abillity-list__item li')
const abillityListLength = abillityList.length

const options = {
	root: null,
	rootMargin: "-30% 0%",
	threshold: 0
}

const observer = new IntersectionObserver(doWhenIntersect, options)

abillityList.forEach(list => {
	observer.observe(list)
});

for(let i = 1;i < abillityListLength + 1;i++){
	let targetChildren = abillityList[i-1].children
	if(!(i % 2 == 0)){
		// // 奇数の場合の処理
		targetChildren[0].style.transform = 'translateX(100vw)'
		targetChildren[1].style.transform = 'translateX(100vw)'
	}else{
		// 偶数の場合の処理
		targetChildren[0].style.transform = 'translateX(-100vw)'
		targetChildren[1].style.transform = 'translateX(-100vw)'
	}
}

function doWhenIntersect(entries){
	entries.forEach(entry => {
		if(entry.isIntersecting){
			entry.target.children[0].style.transform = 'translateX(0px)'
			entry.target.children[1].style.transform = 'translateX(0px)'
		}
	})
}
