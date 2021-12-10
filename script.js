
function calcular(){

const p150 = 1.5
const p200 = 2
const p250 = 2.5
const p300 = 3
const p350 = 3.5
const p400 = 4
const p450 = 4.5
const p500 = 5
const txifood = parseFloat(1-0.155) 
const tx99 = parseFloat(1-0.18)
const txfs = parseFloat(1-0.15)
const embalagem = 2

const v150 = parseInt(document.querySelector('#q150').value)
const v200 = parseInt(document.querySelector('#q200').value)
const v250 = parseInt(document.querySelector('#q250').value)
const v300 = parseInt(document.querySelector('#q300').value)
const v350 = parseInt(document.querySelector('#q350').value)
const v400 = parseInt(document.querySelector('#q400').value)
const v450 = parseInt(document.querySelector('#q450').value)
const v500 = parseInt(document.querySelector('#q500').value)

const t150 = parseFloat(p150*v150)
const t200 = parseFloat(p200*v200)
const t250 = parseFloat(p250*v250)
const t300 = parseFloat(p300*v300)
const t350 = parseFloat(p350*v350)
const t400 = parseFloat(p400*v400)
const t450 = parseFloat(p450*v450)
const t500 = parseFloat(p500*v500)

const qtotal = v150+v200+v250+v300+v350+v400+v450+v500
const total = (t150+t200+t250+t300+t350+t400+t450+t500+embalagem)
const ptotal = total.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})
const ifood = (total/txifood).toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})
const f99 = (total/tx99).toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})
const fs = (total/txfs).toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})



if(qtotal<=1){
    document.querySelector('#quantidadeTotal').value = qtotal + ' Peça'
    
    

}else{
    document.querySelector('#quantidadeTotal').value = qtotal + ' Peças'
    
}
document.querySelector('#valorTotal').value = ptotal
document.querySelector('#ifood').value = ifood 
document.querySelector('#f99').value = f99
document.querySelector('#fs').value = fs

}



