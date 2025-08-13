const hoverCurriculo = () =>{
    const iconeCurriculo = document.getElementById("iconeCurriculo")

    iconeCurriculo.addEventListener("mouseover", () =>{
        iconeCurriculo.src = "assets/images/icons-ferramentas/icone-preto-curriculo.png"
    })

    iconeCurriculo.addEventListener("mouseout", () =>{ 
        iconeCurriculo.src = "assets/images/icons-ferramentas/icone-azul-curriculo.png" 
    })
}

const hoverCertificado = () =>{
    const iconeCertificado = document.getElementById("iconeCertificado")

    iconeCertificado.addEventListener("mouseover", () =>{
        iconeCertificado.src = "assets/images/icons-ferramentas/icone-preto-certificado.png"
    })

    iconeCertificado.addEventListener("mouseout", () =>{ 
        iconeCertificado.src = "assets/images/icons-ferramentas/icone-azul-certificado.png" 
    })
}

hoverCurriculo()
hoverCertificado()