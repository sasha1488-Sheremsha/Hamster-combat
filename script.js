class Player{
    constructor(img, hp, damage, x,y, w, h, speed){
        this.img = img
        this.hp = hp
        this.damage = damage
        this.x = x 
        this.y = y
        this.w = w
        this.h = h
        this.speed= speed

        this.element=document.createElement('img')
        this.element.src = img
        this.element.style.position= 'absolute'

        this.element.style.width = `${w}px`
        this.element.style.height = `${h}px`
        this.updatePos()
    }
    updatePos(){
        this.element.style.top= `${this.y}px`
        this.element.style.left= `${this.x}px`
    }
}
player = new Player('src/хомяк-Photoroom.png', 100, 20, 50, 50, 50 , 80, 5)
document.querySelector('body').appendChild(player.element)
