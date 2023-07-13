const body = document.body; 



fetch('modules.json')
    .then(response=>response.json())
    .then(data=>{
        
        //creating the table and appending it
        const table = document.createElement('table');
        body.appendChild(table);

        //table header
        const thead = document.createElement('thead');
        table.appendChild(thead);

        //table body
        const tbody = document.createElement('tbody');
        table.appendChild(tbody);


        //first row
        const initial_row = document.createElement('tr');
        thead.appendChild(initial_row);
        //first row content
        const initial_cell = document.createElement('th');
        initial_cell.innerText = "years";
        initial_cell.id = "years";
        initial_cell.colSpan = 8;
        initial_row.appendChild(initial_cell);
        
        //second row (years)
        const years_row = document.createElement('tr');
        thead.appendChild(years_row);
        //cells inside of years row 
        data.years.forEach(year => {
            const year_column  = document.createElement('th');
            year_column.innerText = year.name;
            year_column.id = year.name;
            year_column.colSpan=2;
            years_row.appendChild(year_column);
            
        });

        //third row (semesters)
        const semesters_row = document.createElement('tr');
        thead.appendChild(semesters_row);
        data.years.forEach(year=>{
            year.semesters.forEach(semester=>{
                let semester_column = document.createElement('th');
                semester_column.innerText = semester.name;
                semester_column.id = semester.name;
                semesters_row.appendChild(semester_column);
            });
        });

        //creating rows with ids
        let semester_number = 0;
        data.years.forEach(year=>{

            year.semesters.forEach(semester=>{
                for(let i = 0 ;i<semester.modules.length;i++){//for each module
                    let row_module = document.getElementById('row-'+i);
                    if (!row_module){//if the row is not existing : create it
                        row_module = document.createElement('tr');
                        row_module.id = 'row-'+i;
                        tbody.appendChild(row_module);
                        for (let j = 0;j<semester_number;j++){
                            let module_column = document.createElement('td');
                            module_column.innerText="--";
                            module_column.id="--"+i+j;
                            row_module.appendChild(module_column);
                        }
                    }
                    let module_column = document.createElement('td');
                    module_column.innerText=semester.modules[i];
                    module_column.id = semester.modules[i];
                    row_module.appendChild(module_column);
                    
                }
                semester_number++;
                
            });
            
        });

        //electricité
        var ELECT = document.getElementById('ELECT');
        ELECT.addEventListener("mouseover",function() {
            set_style("ELECT", [], [], ["ELECF1","ELECF2","TSG"]);
        });
        ELECT.addEventListener("mouseout",function() {
            remove_style("ELECT", [], [], ["ELECF1","ELECF2","TSG"]);
        });

        //BWEB
        
        //ANA1
        var ANA1 = document.getElementById('ANA1');
        ANA1.addEventListener("mouseover",function() {
            set_style("ANA1", [], [], ["ANA2","ANA3","PRST1","PRST2","ANA4","ANUM","ANAD","TSG","IMN","MECA"]);
        });
        ANA1.addEventListener("mouseout",function() {
            remove_style("ANA1", [], [], ["ANA2","ANA3","PRST1","PRST2","ANA4","ANUM","ANAD","TSG","IMN","MECA"]);
        });
        //ALSDS
        var ALSDS = document.getElementById('ALSDS');
        ALSDS.addEventListener("mouseover",function() {
            set_style("ALSDS", [], [], ["ALSDD","SFSD","POO","ANUM","SYC1","SYC2","ARCHI3","TPGO","HPC","SYSR"]);
        });
        ALSDS.addEventListener("mouseout",function() {
            remove_style("ALSDS", [], [], ["ALSDD","SFSD","POO","ANUM","SYC1","SYC2","ARCHI3","TPGO","HPC","SYSR"]);
        });

        //ARCHI1
        var ARCHI1 = document.getElementById('ARCHI1');
        ARCHI1.addEventListener("mouseover",function() {
            set_style("ARCHI1", [], [], ["SYST2","ELECF2","ARCHI2","SYC1","ARCHI3","SYC2","HPC","SSR","SYSR"]);
        });
        ARCHI1.addEventListener("mouseout",function() {
            remove_style("ARCHI1", [], [], ["SYST2","ELECF2","ARCHI2","SYC1","ARCHI3","SYC2","HPC","SSR","SYSR"]);
        });

        //ALG1
        var ALG1 = document.getElementById('ALG1');
        ALG1.addEventListener("mouseover",function() {
            set_style("ALG1", [], [], ["ALG2","ALG3","LOGM","THP","ANUM","RO","BDD","ANAD"]);
        });
        ALG1.addEventListener("mouseout",function() {
            remove_style("ALG1", [], [], ["ALG2","ALG3","LOGM","THP","ANUM","RO","BDD","ANAD"]);
        });

        //SYST1
        var SYST1 = document.getElementById('SYST1');
        SYST1.addEventListener("mouseover",function() {
            set_style("SYST1", [], [], ["SYC1","SYC2","VCL","SSR","SYSR"]);
        });
        SYST1.addEventListener("mouseout",function() {
            remove_style("SYST1", [], [], ["SYC1","SYC2","VCL","SSR","SYSR"]);
        });
        //TEE
        var TEE = document.getElementById('TEE');
        TEE.addEventListener("mouseover",function() {
            set_style("TEE", [], [], ["TEO"]);
        });
        TEE.addEventListener("mouseout",function() {
            remove_style("TEE", [], [], ["TEO"]);
        });

        //--------------------------S2---------------------------
        //ALSDD
        var ALSDD = document.getElementById('ALSDD');
        ALSDD.addEventListener("mouseover",function() {
            set_style("ALSDD", ["ALSDS","ARCHI1"], ["SYST2"], ["SFSD","POO","ANUM","SYC1","SYC2","ARCHI3","TPGO","HPC","SYSR"]);
        });
        ALSDD.addEventListener("mouseout",function() {
            remove_style("ALSDD", ["ALSDS","ARCHI1"], ["SYST2"], ["SFSD","POO","ANUM","SYC1","SYC2","ARCHI3","TPGO","HPC","SYSR"]);
        });
        //SYST2
        var SYST2 = document.getElementById('SYST2');
        SYST2.addEventListener("mouseover",function() {
            set_style("SYST2", ["ALSDS","ARCHI1"], ["ALSDD"], ["ARCHI2","ARCHI3"]);
        });
        SYST2.addEventListener("mouseout",function() {
            remove_style("SYST2", ["ALSDS","ARCHI1"], ["ALSDD"], ["ARCHI2","ARCHI3"]);
        });
        //ANG1
        var ANG1 = document.getElementById('ANG1');
        ANG1.addEventListener("mouseover",function() {
            set_style("ANG1", [], [], ["ANG2","ANG3","ANG4","ANG5"]);
        });
        ANG1.addEventListener("mouseout",function() {
            remove_style("ANG1", [], [], ["ANG2","ANG3","ANG4","ANG5"]);
        });
        //TEO
        var TEO = document.getElementById('TEO');
        TEO.addEventListener("mouseover",function() {
            set_style("TEO", ["TEE"], [], []);
        });
        TEO.addEventListener("mouseout",function() {
            remove_style("TEO", ["TEE"], [], []);
        });
        //ALG2
        var ALG2 = document.getElementById('ALG2');
        ALG2.addEventListener("mouseover",function() {
            set_style("ALG2", ["ALG1"], [], ["ALG3","LOGM","THP","ANUM","RO","BDD","ANAD"]);
        });
        ALG2.addEventListener("mouseout",function() {
            remove_style("ALG2", ["ALG1"], [], ["ALG3","LOGM","THP","ANUM","RO","BDD","ANAD"]);
        });
        //ANA2
        var ANA2 = document.getElementById('ANA2');
        ANA2.addEventListener("mouseover",function() {
            set_style("ANA2", ["ANA1"], [], ["ANA3","PRST1","PRST2","ANA4","ANUM","ANAD","TSG","IMN"]);
        });
        ANA2.addEventListener("mouseout",function() {
            remove_style("ANA2", ["ANA1"], [], ["ANA3","PRST1","PRST2","ANA4","ANUM","ANAD","TSG","IMN"]);
        });
        //ELECF1
        var ELECF1 = document.getElementById('ELECF1');
        ELECF1.addEventListener("mouseover",function() {
            set_style("ELECF1", ["ELECT"], [], ["ELECF2","TSG"]);
        });
        ELECF1.addEventListener("mouseout",function() {
            remove_style("ELECF1", ["ELECT"], [], ["ELECF2","TSG"]);
        });
        //MECA
        var MECA = document.getElementById('MECA');
        MECA.addEventListener("mouseover",function() {
            set_style("MECA", ["ANA1"], ["ANA2"], ["RV"]);
        });
        MECA.addEventListener("mouseout",function() {
            remove_style("MECA",  ["ANA1"], ["ANA2"], ["RV"]);
        });
        //-----------------------------------S3---------------------------------------------------------------------
        //ECON
        //ANA3
        var ANA3 = document.getElementById('ANA3');
        ANA3.addEventListener("mouseover",function() {
            set_style("ANA3", ["ANA1","ANA2"], ["ELECF2","PRST1"], ["PRST2","ANA4","ANUM","ANAD","TSG","IMN"]);
        });
        ANA3.addEventListener("mouseout",function() {
            remove_style("ANA3", ["ANA1","ANA2"], ["ELECF2","PRST1"], ["PRST2","ANA4","ANUM","ANAD","TSG","IMN"]);
        });
        //ARCHI2
        //,,
        var ARCHI2 = document.getElementById('ARCHI2');
        ARCHI2.addEventListener("mouseover",function() {
            set_style("ARCHI2", ["ARCHI1","SYST2"], ["ELECF2"], ["SYC1","ARCHI3","SYC2","HPC","SSR","SYSR"]);
        });
        ARCHI2.addEventListener("mouseout",function() {
            remove_style("ARCHI2", ["ARCHI1","SYST2"], ["ELECF2"], ["SYC1","ARCHI3","SYC2","HPC","SSR","SYSR"]);
        });
        //ELECF2
        var ELECF2 = document.getElementById('ELECF2');
        ELECF2.addEventListener("mouseover",function() {
            set_style("ELECF2", ["ELECT","ELECF1"], ["ANA3","ARCHI2"], ["TSG"]);
        });
        ELECF2.addEventListener("mouseout",function() {
            remove_style("ELECF2", ["ELECT","ELECF1"], ["ANA3","ARCHI2"], ["TSG"]);
        });
        //ANG2
        var ANG2 = document.getElementById('ANG2');
        ANG2.addEventListener("mouseover",function() {
            set_style("ANG2", ["ANG1"], [], ["ANG3","ANG4","ANG5"]);
        });
        ANG2.addEventListener("mouseout",function() {
            remove_style("ANG2",["ANG1"], [], ["ANG3","ANG4","ANG5"]);
        });
        //ALG3
        var ALG3 = document.getElementById('ALG3');
        ALG3.addEventListener("mouseover",function() {
            set_style("ALG3", ["ALG1","ALG2"], [], ["LOGM","THP","ANUM","RO","BDD","ANAD"]);
        });
        ALG3.addEventListener("mouseout",function() {
            remove_style("ALG3",["ALG1","ALG2"], [], ["LOGM","THP","ANUM","RO","BDD","ANAD"]);
        });
        //SFSD
        var SFSD = document.getElementById('SFSD');
        SFSD.addEventListener("mouseover",function() {
            set_style("SFSD", ["ALSDS","ALSDD"], [], ["POO","ANUM","SYC1","SYC2","ARCHI3","TPGO","HPC","BDD","BDA","SYSR"]);
        });
        SFSD.addEventListener("mouseout",function() {
            remove_style("SFSD", ["ALSDS","ALSDD"], [], ["POO","ANUM","SYC1","SYC2","ARCHI3","TPGO","HPC","BDD","BDA","SYSR"]);
        });
        //PRST1
        var PRST1 = document.getElementById('PRST1');
        PRST1.addEventListener("mouseover",function() {
            set_style("PRST1", ["ANA1","ANA2"], [], ["PRST2","ANAD","FAS","TSG","IMN","ML","OPTIM"]);
        });
        PRST1.addEventListener("mouseout",function() {
            remove_style("PRST1", ["ANA1","ANA2"], [], ["PRST2","ANAD","FAS","TSG","IMN","ML","OPTIM"]);
        });
        //-------------------------------S5-----------------------------------------------------------------
        //ANG3
        var ANG3 = document.getElementById('ANG3');
        ANG3.addEventListener("mouseover",function() {
            set_style("ANG3", ["ANG1","ANG2"], [], ["ANG4","ANG5"]);
        });
        ANG3.addEventListener("mouseout",function() {
            remove_style("ANG3", ["ANG1","ANG2"], [], ["ANG4","ANG5"]);
        });
        //LOGM
        var LOGM = document.getElementById('LOGM');
        LOGM.addEventListener("mouseover",function() {
            set_style("LOGM", ["ALG1","ANA1"], [], ["THP","TPGO"]);
        });
        LOGM.addEventListener("mouseout",function() {
            remove_style("LOGM", ["ALG1","ANA1"], [], ["THP","TPGO"]);
        });
        //OPTOE
        //PRST2
        var PRST2 = document.getElementById('PRST2');
        PRST2.addEventListener("mouseover",function() {
            set_style("PRST2", ["ANA1","ANA2","PRST1"], [], ["ANAD","FAS","TSG","IMN","ML","OPTIM"]);
        });
        PRST2.addEventListener("mouseout",function() {
            remove_style("PRST2", ["ANA1","ANA2","PRST1"], [], ["ANAD","FAS","TSG","IMN","ML","OPTIM"]);
        });
        //POO
        var POO = document.getElementById('POO');
        POO.addEventListener("mouseover",function() {
            set_style("POO", ["ALSDS","ALSDD"], [], ["IGL","ALOG"]);
        });
        POO.addEventListener("mouseout",function() {
            remove_style("POO", ["ALSDS","ALSDD"], [], ["IGL","ALOG"]);
        });
        //ANA4
        var ANA4 = document.getElementById('ANA4');
        ANA4.addEventListener("mouseover",function() {
            set_style("ANA4", ["ANA1","ANA2","ANA3"], [], ["FAS","ANAD","TSG","IMN"]);
        });
        ANA4.addEventListener("mouseout",function() {
            remove_style("ANA4", ["ANA1","ANA2","ANA3"], [], ["FAS","ANAD","TSG","IMN"]);
        });
        //SINF
        //PRJP
        //-------------------------------------S5--------------------------------------------------
        //SYC1
        var SYC1 = document.getElementById('SYC1');
        SYC1.addEventListener("mouseover",function() {
            set_style("SYC1", ["SYST1","ARCHI2"], [], ["SYC2","VCL","SYSR"]);
        });
        SYC1.addEventListener("mouseout",function() {
            remove_style("SYC1", ["SYST1","ARCHI2"], [], ["SYC2","VCL","SYSR"]);
        });
        //IGL
        var IGL = document.getElementById('IGL');
        IGL.addEventListener("mouseover",function() {
            set_style("IGL", ["ALSDS","ALSDD","SFSD","POO"], [], ["ALOG"]);
        });
        IGL.addEventListener("mouseout",function() {
            remove_style("IGL", ["ALSDS","ALSDD","SFSD","POO"], [], ["ALOG"]);
        });
        //RO
        var RO = document.getElementById('RO');
        RO.addEventListener("mouseover",function() {
            set_style("RO", ["ALG1","ALG2","ALG3","ALSDS","ALSDD"], [], ["TPGO","OPTIM"]);
        });
        RO.addEventListener("mouseout",function() {
            remove_style("RO", ["ALG1","ALG2","ALG3","ALSDS","ALSDD"], [], ["TPGO","OPTIM"]);
        });
        //THP
        var THP = document.getElementById('THP');
        THP.addEventListener("mouseover",function() {
            set_style("THP", ["ALG1","LOGM"], [], ["TPGO","COMPIL"]);
        });
        THP.addEventListener("mouseout",function() {
            remove_style("THP", ["ALG1","LOGM"], [], ["TPGO","COMPIL"]);
        });
        //ORGA
        //RES1
        var RES1 = document.getElementById('RES1');
        RES1.addEventListener("mouseover",function() {
            set_style("RES1", [], [], ["RES2","RESA","SSR"]);
        });
        RES1.addEventListener("mouseout",function() {
            remove_style("RES1", [], [], ["RES2","RESA","SSR"]);
        });
        //ANUM
        var ANUM = document.getElementById('ANUM');
        ANUM.addEventListener("mouseover",function() {
            set_style("ANUM", ["ANA3","ANA4","ALG3"], [], ["ANAD"]);
        });
        ANUM.addEventListener("mouseout",function() {
            remove_style("ANUM", ["ANA3","ANA4","ALG3"], [], ["ANAD"]);
        });
        //ANG4
        var ANG4 = document.getElementById('ANG4');
        ANG4.addEventListener("mouseover",function() {
            set_style("ANG4", ["ANG1","ANG2","ANG3"], [], ["ANG5"]);
        });
        ANG4.addEventListener("mouseout",function() {
            remove_style("ANG4", ["ANG1","ANG2","ANG3"], [], ["ANG5"]);
        });
        //-----------------------------S6-----------------------------------
        //ARCHI3
        var ARCHI3 = document.getElementById('ARCHI3');
        ARCHI3.addEventListener("mouseover",function() {
            set_style("ARCHI3", ["ARCHI1","ARCHI2"], [], ["HPC"]);
        });
        ARCHI3.addEventListener("mouseout",function() {
            remove_style("ARCHI3", ["ARCHI1","ARCHI2"], [], ["HPC"]);
        });
        //CPRJ
        //ANG5
        var ANG5 = document.getElementById('ANG5');
        ANG5.addEventListener("mouseover",function() {
            set_style("ANG5", ["ANG1","ANG2","ANG3","ANG4"], [], []);
        });
        ANG5.addEventListener("mouseout",function() {
            remove_style("ANG5", ["ANG1","ANG2","ANG3","ANG4"], [], []);
        });
        //RES2
        var RES2 = document.getElementById('RES2');
        RES2.addEventListener("mouseover",function() {
            set_style("RES2", ["RES1"], [], ["RESA","SSR"]);
        });
        RES2.addEventListener("mouseout",function() {
            remove_style("RES2", ["RES1"], [], ["RESA","SSR"]);
        });
        //Projet 1CS
        //BDD
        var BDD = document.getElementById('BDD');
        BDD.addEventListener("mouseover",function() {
            set_style("BDD", ["SFSD"], [], ["BDA"]);
        });
        BDD.addEventListener("mouseout",function() {
            remove_style("BDD", ["SFSD"], [], ["BDA"]);
        });
        //MCSI
        //SEC
        var SEC = document.getElementById('SEC');
        SEC.addEventListener("mouseover",function() {
            set_style("SEC", [], [], ["SSR"]);
        });
        SEC.addEventListener("mouseout",function() {
            remove_style("SEC", [], [], ["SSR"]);
        });
        //SYC2
        var SYC2 = document.getElementById('SYC2');
        SYC2.addEventListener("mouseover",function() {
            set_style("SYC2", ["SYST1","SYC1"], [], ["SYSR","SSR","VCL"]);
        });
        SYC2.addEventListener("mouseout",function() {
            remove_style("SYC2", ["SYST1","SYC1"], [], ["SYSR","SSR","VCL"]);
        });
        //---------------------------SIQ S1-------------------------------
        //RESA
        var RESA = document.getElementById('RESA');
        RESA.addEventListener("mouseover",function() {
            set_style("RESA", ["RES1","RES2"], [], []);
        });
        RESA.addEventListener("mouseout",function() {
            remove_style("RESA", ["RES1","RES2"], [], []);
        });
        //TPGO
        var TPGO = document.getElementById('TPGO');
        TPGO.addEventListener("mouseover",function() {
            set_style("TPGO", ["ALSDS","ALSDD","LOGM","RO","THP"], [], ["OPTIM"]);
        });
        TPGO.addEventListener("mouseout",function() {
            remove_style("TPGO", ["ALSDS","ALSDD","LOGM","RO","THP"], [], ["OPTIM"]);
        });
        //COMPIL
        var COMPIL = document.getElementById('COMPIL');
        COMPIL.addEventListener("mouseover",function() {
            set_style("COMPIL", ["ALSDD","THP"], [], []);
        });
        COMPIL.addEventListener("mouseout",function() {
            remove_style("COMPIL", ["ALSDD","THP"], [], []);
        });
        //ANAD
        var ANAD = document.getElementById('ANAD');
        ANAD.addEventListener("mouseover",function() {
            set_style("ANAD", ["ANA1","ANA2","ANA3","ALG2","ALG3","ANUM","PRST1","PRST2"], [], ["ML"]);
        });
        ANAD.addEventListener("mouseout",function() {
            remove_style("ANAD", ["ANA1","ANA2","ANA3","ALG2","ALG3","ANUM","PRST1","PRST2"], [], ["ML"]);
        });
        //FAS
        var FAS = document.getElementById('FAS');
        FAS.addEventListener("mouseover",function() {
            set_style("FAS", ["PRST1","PRST2","ANA3","ANA4"], [], []);
        });
        FAS.addEventListener("mouseout",function() {
            remove_style("FAS", ["PRST1","PRST2","ANA3","ANA4"], [], []);
        });
        //TSG
        var TSG = document.getElementById('TSG');
        TSG.addEventListener("mouseover",function() {
            set_style("TSG", ["ANA3","ANA4"], [], ["IMN"]);
        });
        TSG.addEventListener("mouseout",function() {
            remove_style("TSG", ["ANA3","ANA4"], [], ["IMN"]);
        });
        //HPC
        var HPC = document.getElementById('HPC');
        HPC.addEventListener("mouseover",function() {
            set_style("HPC", ["ALSDD","ARCHI3"], [], []);
        });
        HPC.addEventListener("mouseout",function() {
            remove_style("HPC", ["ALSDD","ARCHI3"], [], []);
        });
        //VCL
        var VCL = document.getElementById('VCL');
        VCL.addEventListener("mouseover",function() {
            set_style("VCL", ["SYC1","SYC2","RES1","RES2"], [], ["SYSR"]);
        });
        VCL.addEventListener("mouseout",function() {
            remove_style("VCL", ["SYC1","SYC2","RES1","RES2"], [], ["SYSR"]);
        });
        //STAGE
        //---------------------------SIQ S2-------------------------------
        //SSR
        var SSR = document.getElementById('SSR');
        SSR.addEventListener("mouseover",function() {
            set_style("SSR", ["SEC","SYC1","SYC2","RES1","RES2"], [], []);
        });
        SSR.addEventListener("mouseout",function() {
            remove_style("SSR", ["SEC","SYC1","SYC2","RES1","RES2"], [], []);
        });
        //SYSR
        var SYSR = document.getElementById('SYSR');
        SYSR.addEventListener("mouseover",function() {
            set_style("SYSR", ["SYC1","SYC2","RES1","RES2"], [], []);
        });
        SYSR.addEventListener("mouseout",function() {
            remove_style("SYSR", ["SYC1","SYC2","RES1","RES2"], [], []);
        });
        //BDA
        var BDA = document.getElementById('BDA');
        BDA.addEventListener("mouseover",function() {
            set_style("BDA", ["ALSDD","SFSD","BDD"], [], []);
        });
        BDA.addEventListener("mouseout",function() {
            remove_style("BDA", ["ALSDD","SFSD","BDD"], [], []);
        });
        //Projet2CS
        //OPTIM
        var OPTIM = document.getElementById('OPTIM');
        OPTIM.addEventListener("mouseover",function() {
            set_style("OPTIM", ["TPRO","RO","ALSDS","ALSDD"], [], []);
        });
        OPTIM.addEventListener("mouseout",function() {
            remove_style("OPTIM", ["TPRO","RO","ALSDS","ALSDD"], [], []);
        });
        //ALOG
        var ALOG = document.getElementById('ALOG');
        ALOG.addEventListener("mouseover",function() {
            set_style("ALOG", ["IGL","POO"], [], []);
        });
        ALOG.addEventListener("mouseout",function() {
            remove_style("ALOG", ["IGL","POO"], [], []);
        });
        //IMN
        var IMN = document.getElementById('IMN');
        IMN.addEventListener("mouseover",function() {
            set_style("IMN", ["TSG"], [], []);
        });
        IMN.addEventListener("mouseout",function() {
            remove_style("IMN", ["TSG"], [], []);
        });
        //ML
        var ML = document.getElementById('ML');
        ML.addEventListener("mouseover",function() {
            set_style("ML", ["ALG1","ALG2","ALG3","ANA1","ANA2","ANA3","ANA4","PRST1","PRST2","ANAD"], [], []);
        });
        ML.addEventListener("mouseout",function() {
            remove_style("ML", ["ALG1","ALG2","ALG3","ANA1","ANA2","ANA3","ANA4","PRST1","PRST2","ANAD"], [], []);
        });
        //RV
});     



function set_previous_style(previous_list){
    previous_list.forEach(id_element=>{
        let element = document.getElementById(id_element);
        element.classList.add("previous");
    });
}

function remove_previous_style(previous_list){
    previous_list.forEach(id_element=>{
        let element = document.getElementById(id_element);
        element.classList.remove("previous");
    });
}

function set_collaboration_style(collab_list){
    collab_list.forEach(id_element=>{
        let element = document.getElementById(id_element);
        element.classList.add("collaboration");
    });
}

function remove_collaboration_style(collab_list){
    collab_list.forEach(id_element=>{
        let element = document.getElementById(id_element);
        element.classList.remove("collaboration");
    });
}

function set_next_style(next_list){
    next_list.forEach(id_element=>{
        let element = document.getElementById(id_element);
        element.classList.add("next");
    });
}

function remove_next_style(next_list){
    next_list.forEach(id_element=>{
        let element = document.getElementById(id_element);
        element.classList.remove("next");
    });
}



function set_style(id,previous_list,collab_list,next_list){
    let element = document.getElementById(id);
    element.classList.add("selected");
    set_previous_style(previous_list);
    set_collaboration_style(collab_list);
    set_next_style(next_list);
}

function remove_style(id,previous_list,collab_list,next_list){
    let element = document.getElementById(id);
    element.classList.remove("selected");
    remove_previous_style(previous_list);
    remove_collaboration_style(collab_list);
    remove_next_style(next_list);
}

