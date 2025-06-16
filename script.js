document.addEventListener('input', function(e){
    if (e.target == this.querySelector('p#texto')) {return} //Ignore the event if it is editing the target text
    document.getElementById('novoSistema').addEventListener('click', (e) => {
        if (!novosistema) {
        document.querySelector('.CL').innerHTML = ''
        document.querySelector('.CLR').innerHTML = ''
    }
    else {
        document.querySelector('.CL').innerHTML = `
        <label for="unitsCL">CL</label>
        <input type="text" name="uCL" id="RuCL">`
        
        document.querySelector('.CLR').innerHTML = `
        <label for="unitsCL">CL</label>
        <input type="text" name="uCL" id="uCL">`
        
    }
    })

    document.getElementById('adulto').addEventListener('click', () => {
        if (document.getElementById('adulto').checked) {
        document.querySelector('.Npai').innerHTML = ''
    }
    else {
        document.querySelector('.Npai').innerHTML = `
            <label for="nomePai">Nome do Responsável: </label>
            <input type="text" name="Npai" id="Npai">
            <br>`
    }
    })
    

    let Npai = ''
    let Cl = ''
    let rCl = ''
    try {Npai = document.getElementById('Npai').value;}
    catch (error){}

    try {
        Cl = document.querySelector("#uCL").value;
    } catch (error){}
    
    try {
        console.log(document.querySelector('#RuCL'))
        rCl = document.querySelector("#RuCL").value;
    } catch (error){console.log(error)}
    
    let Naluno = document.getElementById('Naluno').value;
    let Wl = document.getElementById('uWL').value;
    let rWl = document.getElementById('RuWL').value;
    let hora = document.getElementById('hora').value;
    let secretaria = document.getElementById('secretaria').value;
    let sexo = document.querySelector('#sexo').value;
    let adulto = document.getElementById('adulto').checked;
    let novosistema = document.getElementById('novoSistema').checked;
    let pronome1 = sexo == 'Masculino' ? 'ele' : 'ela';
    let pronome2 = sexo == 'Masculino' ? 'dele' : 'dela';
    let feito = ''
    let nFeito = ''
    // Alterar as opções com base no que foi escolhido acima
    
    
    function colocarUnidade(Unidades) {
        quantidadesUnidades = Unidades.length == 0 ? [] : Unidades.split(' ')
        if (quantidadesUnidades.length == 0) {
            return Unidades;
        }
        
        else if (quantidadesUnidades.length > 1 | Unidades.indexOf(',') != -1) {
            Unidades = 'Unidades ' + Unidades;
            return Unidades;
        }
        else if (quantidadesUnidades.length == 1) {
            Unidades = ('Unidade ' + Unidades);
            return Unidades;
        }
        
    }

    Wl = colocarUnidade(Wl)
    rWl = colocarUnidade(rWl)
    if (!novosistema) {
        Cl = colocarUnidade(Cl)
        rCl = colocarUnidade(rCl)
    }

    if (rCl != '' | rWl != ''){
        feito = '*✅ O que já foi feito:* <br>';
        if (rWl != '') {
            feito += `- WebLessons: ${rWl} <br>`
        }
        if (rCl != '') {
            feito += `- Consolidation Lessons: ${rCl} <br>`
        }

    }
    
    if (Cl != '' | Wl != ''){
        nFeito= '*🔜 O que ainda precisa ser feito*<br>';
        if (Wl != '') {
            nFeito += `- WebLessons: ${Wl} <br>`
        }
        if (Cl != '') {
            nFeito += `- Consolidation Lessons: ${Cl} <br>`
        }
    }

    if (!adulto) {
        var texto = `${hora}, ${Npai} <br>
Espero que tudo esteja ótimo! <br>
<br>
Passando para compartilhar um breve acompanhamento das atividades da casa de ${Naluno}, conforme registrado no nosso sistema:<br>
<br>
${feito}
${nFeito}
<br>
Contamos com você para incentivar e apoiar ${pronome1} na realização dessas atividades em casa. Esse acompanhamento faz toda a diferença no aproveitamento das aulas e no progresso ${pronome2}! <br>

Caso ${pronome1} esteja tendo alguma dificuldade com as tarefas, podemos agendar um momento para ${pronome1} fazer no LAB com o acompanhamento da nossa monitora. <br>
<br>
Agradecemos a parceria! <br>
Atenciosamente, <br>
${secretaria} <br>
*CNA Casa Forte*`
    }
    else {
        var texto = `${hora}, ${Naluno} <br>
Espero que tudo esteja ótimo! <br>
<br>
Passando para compartilhar um breve acompanhamento das suas atividades da casa, conforme registrado no nosso sistema:<br>
<br>
${feito}
${nFeito}
<br>
Conte conosco para te apoiar nas suas atividades e no seu progresso! Caso precise, podemos agendar um momento para você realizar essas tarefas junto com a nossa monitora.<br>
A realização dessas tarefas é fundamental para o seu aprendizado e melhoria do seu nível de inlgês. <br>
<br>
Agradecemos a parceria! <br>
Atenciosamente, <br>
${secretaria} <br>
*CNA Casa Forte*` 
    }
    
document.getElementById('texto').innerHTML = texto
});

function Copiar() {
                console.log('clicou')
                let texto = document.getElementById('texto').innerText
                const textarea = document.createElement("textarea");
                textarea.value = texto;
                document.body.appendChild(textarea);
                textarea.select();
                document.execCommand("copy")
                textarea.remove()
            
            }

document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 'c') {Copiar()}
})
