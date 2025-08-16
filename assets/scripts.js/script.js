const hoverCurriculo = () =>{
    const aCurriculo = document.getElementById("a-icone-curriculo")
    const iconeCurriculo = document.getElementById("iconeCurriculo")

    aCurriculo.addEventListener("mouseover", () =>{
        iconeCurriculo.src = "assets/images/icons-ferramentas/icone-preto-curriculo.png"
    })
    
    aCurriculo.addEventListener("mouseout", () =>{ 
        iconeCurriculo.src = "assets/images/icons-ferramentas/icone-azul-curriculo.png" 
    })

}

const hoverCertificado = () =>{
    const aCertificado = document.getElementById("a-icone-certificado")
    const iconeCertificado = document.getElementById("iconeCertificado")

    aCertificado.addEventListener("mouseover", () =>{
        iconeCertificado.src = "assets/images/icons-ferramentas/icone-preto-certificado.png"
    })

    aCertificado.addEventListener("mouseout", () =>{ 
        iconeCertificado.src = "assets/images/icons-ferramentas/icone-azul-certificado.png" 
    })
}

hoverCurriculo()
hoverCertificado()