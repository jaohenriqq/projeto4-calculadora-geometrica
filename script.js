function areaTriangulo(base,altura){
  return (base*altura)/2
}
function areaRetangulo(base1,altura1){
  return(base1*altura1)
}
function areaQuadrado(lado){
  return(lado*lado)
}
function areaTrapezio(basemaior,basemenor,altura3){
  return((basemaior+basemenor)*altura3/2)
}
  function areaCirculo(raio){
    return((raio*raio)*3,14)
  }
 let pick = prompt(`calculadora da area\n 1-triangulo\n 2-retângulo\n3-quadrado\n4-trapezio\n5-circulo\n6-SAIR `)
  switch(pick){
  case '1':
    let base = prompt('digite sua base?')
    let altura = prompt('digite sua altura?')
    const triangulo = areaTriangulo(base,altura)
    alert(triangulo)
  case '2':
    let base1 = prompt('digite sua base?')
    let altura1 = prompt('digite sua altura?')
    const retangulo = areaRetangulo(base1,altura1)
    alert(retangulo)
  case '3':
    let base2=prompt('digite o valor do seu lado')
    const quadrado = areaQuadrado(base2)
    alert(quadrado)
  case '4':
    let basemaior=prompt('digite o valor da base maior')
    let basemenor=prompt('digite o valor da base menor')
    let altura3=prompt('digite o valor da altura')
    const trapezio = areaTrapezio(basemaior,basemenor,altura3)
    alert(trapezio)
    case '5':
      let raio=prompt('qual o valor do raio?')


}
