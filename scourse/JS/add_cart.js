const items = document.querySelectorAll('.home-product-item')
// items.forEach(function(items, index){
// items.addEventListener('click', function(event){
// let btnitems = event.target

// let  getitems_big = btnitems.parentElement
// console.log(getitems_big)
// let a = window.replace ( '../detailproduct.html')

// console.log(a)



// })
// })

items.forEach(function (items, geyclas, index){

    items.addEventListener('click', function(event){
        let btnitems = event.target
        let  getitems_big = btnitems.parentElement
        
        // lay anh trong trang 
        let showpage =   window.location = './scourse/html/detailproduct.html'   // get trang hien thi web


        let getImge = document.styleSheets.backgroundimgage = '../img/honda city 1.jpg'

        let getname = document.querySelector('.home-product-item-name').innerText
        
        let getprice = document.querySelector('.home-product-item-price-current').innerText

        // addpage(getImge,getImge, getprice)
    })
})

// function addpage(getImge,getImge, getprice){
//     let add = document.createElement('.containner-product-item')
// }