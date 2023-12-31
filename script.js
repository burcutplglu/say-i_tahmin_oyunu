function sayi_tahmini(){
    let rastgele_sayi = Math.floor(Math.random() * 20 ) + 1
    let tahmin 
    console.log(rastgele_sayi)
    let deneme = 0
  
    while(tahmin !== rastgele_sayi){
      tahmin = Number(prompt('0 ile 20 arasında bir sayı tahmin et'))
      deneme++
  
      if(tahmin < rastgele_sayi){
        alert('Daha büyük sayı girin')
      }else if(tahmin > rastgele_sayi){
        alert('Daha küçük sayı girin')
      }
    }
    alert(`Tebrikler ${deneme} denemede bildiniz`)
  }
  sayi_tahmini()