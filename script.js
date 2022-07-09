function verificar() {
   var data = new Date()
   var ano = data.getFullYear()

   var anoNasc = document.getElementById('txtano')
   var res = document.getElementById('res')

   if (anoNasc.value.length == 0 || Number(anoNasc.value) > ano) {
      window.alert('ERRO Verifique os dados e tente novamente')
   } else {
      var sex = document.getElementsByName('radsex')
      var idade = ano - Number(anoNasc.value)

      var genero = ''

      var img = document.createElement('img')
      img.setAttribute('id', 'foto')

      if (sex[0].checked) {
         genero = 'Homem'

         if (idade >= 0 && idade < 5) {
            //Bebê
            img.setAttribute('src', '/images/m-baby.jpg')
         } else if (idade >= 5 && idade < 12) {
            //Criança
            img.setAttribute('src', '/images/m-child.jpg')
         } else if (idade >= 12 && idade < 18) {
            //Adolescente
            img.setAttribute('src', '/images/m-teenager.jpg')
         } else if (idade >= 18 && idade <= 39) {
            //Adulto
            img.setAttribute('src', '/images/m-young.jpg')
         } else if (idade > 39 && idade <= 59) {
            //Adulto meia-idade
            img.setAttribute('src', '/images/m-adult.jpg')
         } else if (idade > 59 && idade < 123) {
            //Idoso
            img.setAttribute('src', '/images/m-older.jpg')
         } else {
            //Caveira
            img.setAttribute('src', '/images/caveira.jpg')
         }
      } else if (sex[1].checked) {
         genero = 'Mulher'

         if (idade >= 0 && idade < 5) {
            //Bebê
            img.setAttribute('src', '/images/f-baby.jpg')
         } else if (idade >= 5 && idade < 12) {
            //Criança
            img.setAttribute('src', '/images/f-child.jpg')
         } else if (idade >= 12 && idade < 18) {
            //Adolescente
            img.setAttribute('src', '/images/f-teenager.jpg')
         } else if (idade >= 18 && idade <= 39) {
            //Adulto
            img.setAttribute('src', '/images/f-young.jpg')
         } else if (idade > 39 && idade <= 59) {
            //Adulto meia-idade
            img.setAttribute('src', '/images/f-adult.jpg')
         } else if (idade > 59 && idade < 123) {
            //Idoso
            img.setAttribute('src', '/images/f-older.jpg')
         } else {
            //Caveira
            img.setAttribute('src', '/images/caveira.jpg')
         }
      }

      res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
      res.appendChild(img)
      img.style.width = '250px'
   }
}
