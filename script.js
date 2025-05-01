document.addEventListener('input', function(){
    let Npai = document.getElementById('Npai').value;
    let Naluno = document.getElementById('Naluno').value;
    let Cl = document.getElementById('uCL').value;
    let Wl = document.getElementById('uWL').value;
    let rCl = document.getElementById('RuCL').value;
    let rWl = document.getElementById('RuWL').value;
    let hora = document.getElementById('hora').value;
    let secretaria = document.getElementById('secretaria').value;
    let sexo = document.getElementById('menino').checked;
    let pronome1 = sexo == true ? 'ele' : 'ela';
    let pronome2 = sexo == true ? 'dele' : 'dela';
    let feito = ''
    let nFeito = ''
    function colocarUnidade(Unidades) {
        quantidadesUnidades = Unidades.length == 0 ? [] : Unidades.split(' ')
        console.log('O tamanho é:' + quantidadesUnidades.length)
        console.log('Unidade tem virgula? ' + Unidades.indexOf(','))
        if (quantidadesUnidades.length == 0) {
            console.log('0')
            return Unidades;
        }
        
        else if (quantidadesUnidades.length > 1 | Unidades.indexOf(',') != -1) {
            console.log('>1')
            Unidades = 'Unidades ' + Unidades;
            return Unidades;
        }
        else if (quantidadesUnidades.length == 1) {
            console.log('1')
            Unidades = ('Unidade ' + Unidades);
            return Unidades;
        }
        
    }
    console.log('iniciou')
    Cl = colocarUnidade(Cl)
    Wl = colocarUnidade(Wl)
    rCl = colocarUnidade(rCl)
    rWl = colocarUnidade(rWl)
    
    console.log('Terminou')

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
document.getElementById('texto').innerHTML = texto
});