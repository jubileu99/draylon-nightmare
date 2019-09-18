const load = () => {
    
    setInterval(() => {
        const dataHoje = new Date()
        let dias = (30-dataHoje.getDate())
        
        let horas = (24-dataHoje.getHours())
       
        let minutos = (60-dataHoje.getMinutes())
        
        let segundos = (60-dataHoje.getSeconds())
        
        document.querySelector(".dias").innerHTML = (dias < 10) ? "0"+dias : dias 
        document.querySelector(".minutos").innerHTML = (minutos < 10) ? "0"+minutos : minutos
        document.querySelector(".horas").innerHTML = (horas < 10) ? "0"+horas : horas
        document.querySelector(".segundos").innerHTML = (segundos < 10) ? "0"+segundos : segundos  
    }, 100);
    
}

window.onload = load;