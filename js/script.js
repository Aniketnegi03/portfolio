const span = document.querySelectorAll('h1 span')
spans.forEach(span => span.addEventListener('mouseover', function(e) {
    span.classList.add('animated', 'rubberBand')
}))
spans.forEach(span => span.addEventListener('mouseout', function(e) {
    span.classList.add('animated', 'rubberBand')
}))

const javaBar = document.querySelector('.bar-java')
const cppBar = document.querySelector('.bar-c++')
const androidBar = document.querySelector('.bar-androidsdk')
const reactBar = document.querySelector('.bar-react')

var t1 = new TimelineLite()

t1.fromTo(javaBarm, .75, {width: `calc(0% - 6px)`}, {width: `calc(90% - 6px)`, ease: Power4.easeOut} )
    fromTo(cppBar, .75, {width: `calc(0% - 6px)`}, {width: `calc(90% - 6px)`, ease: Power4.easeOut} )
    fromTo(androidBar, .75, {width: `calc(0% - 6px)`}, {width: `calc(90% - 6px)`, ease: Power4.easeOut} )
    fromTo(reactBar, .75, {width: `calc(0% - 6px)`}, {width: `calc(90% - 6px)`, ease: Power4.easeOut} )

const controller = new ScrollMagic.controller()
const scene = new ScrollMagic.scene({
    triggerElement: '.skills',
    triggerHook: 0
})
.setTween(t1)
.addTo(controller)

const showRequiredCategory = event => {
    const getId = event.id;
    const links = document.querySelectorAll('.work-category button')
    for(i = 0; i < links.length; i++){
        if (links[i].hasAttribute('class')) {
            links[i].classList.remove('active')
        }
    }

    event.classList.add('active')
    const getCategory = document.querySelector(`.category-${getId}`)
    const categories = document.querySelectorAll('div[class ^= "ategory-"]')
    for(i = 0; i < categories.length; i++){
        if (categories[i].hasAttribute('class')) {
            categories[i].classList.remove('showCategory')
            categories[i].classList.add('hideCategory')

        }
    }
    getCategory.classList.remove('hideCategory')
    getCategory.classList.add('showCategory')

}