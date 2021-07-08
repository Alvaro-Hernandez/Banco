var combox = document.getElementById("cbxBancos");
var menu, nombre, cedula, monto;


function calcular(){
    var CDP = document.getElementById("cdp").checked;
    var Cuenta1 = document.getElementById("cuenta1").checked;
    var Cuenta2 = document.getElementById("cuenta2").checked;
    var CDP2 = document.getElementById("cdp2").checked;
    menu = combox.value;
    var diario, semanal, mensual, anual;
    nombre = document.getElementById("nombre").value;
    cedula = document.getElementById("cedula").value;
    monto = document.getElementById("monto").value;
    
    if(menu == "1" && CDP == true && Cuenta1 == true && Cuenta2 == true && CDP2 == true){
        anual = monto*0.08;
        mensual = anual/12;
        semanal = mensual/4;
        diario = mensual/30;

        anual += monto*0.02;
        mensual += monto*0.02/12;
        semanal += monto*0.02/12/4;
        diario += monto*0.02/12/30;

        anual += monto*0.05;
        mensual += monto*0.05/12;
        semanal += monto*0.05/12/4;
        diario += monto*0.05/12/30;

        anual += monto*0.16;
        mensual += monto*0.16/12;
        semanal += monto*0.16/12/4;
        diario += monto*0.16/12/30;
        
        alert("El Sr. o Sra. "+nombre+" con cédula de identidad: "+cedula+". Al seleccionar, en BANPRO, todas las "+
        "cuentas del 8, 2, 5 y 16 por ciento de interés anual, obtendrá las siguientes ganancias: \nDiario: "+diario.toFixed(2)+
        "\nSemanal: "+semanal.toFixed(2)+"\nMensual: "+mensual.toFixed(2)+"\nAnual: "+anual.toFixed(2));
    }
    else if(menu == "2" && CDP == true && Cuenta1 == true && Cuenta2 == true && CDP2 == true){
        anual = monto*0.06;
        mensual = anual/12;
        semanal = mensual/4;
        diario = mensual/30;

        anual += monto*0.01;
        mensual += monto*0.01/12;
        semanal += monto*0.01/12/4;
        diario += monto*0.01/12/30;

        anual += monto*0.04;
        mensual += monto*0.04/12;
        semanal += monto*0.04/12/4;
        diario += monto*0.04/12/30;

        anual += monto*0.12;
        mensual += monto*0.12/12;
        semanal += monto*0.12/12/4;
        diario += monto*0.12/12/30;
        
        alert("El Sr. o Sra. "+nombre+" con cédula de identidad: "+cedula+". Al seleccionar, en BDF, todas las "+
        "cuentas del 6, 1, 4 y 12 por ciento de interés anual, obtendrá las siguientes ganancias: \nDiario: "+diario.toFixed(2)+
        "\nSemanal: "+semanal.toFixed(2)+"\nMensual: "+mensual.toFixed(2)+"\nAnual: "+anual.toFixed(2));
    }
    else if(menu == "3" && CDP == true && Cuenta1 == true && Cuenta2 == true && CDP2 == true){
        anual = monto*0.07;
        mensual = anual/12;
        semanal = mensual/4;
        diario = mensual/30;

        anual += monto*0.03;
        mensual += monto*0.03/12;
        semanal += monto*0.03/12/4;
        diario += monto*0.03/12/30;

        anual += monto*0.055;
        mensual += monto*0.055/12;
        semanal += monto*0.055/12/4;
        diario += monto*0.055/12/30;

        anual += monto*0.13;
        mensual += monto*0.13/12;
        semanal += monto*0.13/12/4;
        diario += monto*0.13/12/30;
        
        alert("El Sr. o Sra. "+nombre+" con cédula de identidad: "+cedula+". Al seleccionar, en BANCENTRO, todas las "+
        "cuentas del 7, 3, 5.5 y 13 por ciento de interés anual, obtendrá las siguientes ganancias: \nDiario: "+diario.toFixed(2)+
        "\nSemanal: "+semanal.toFixed(2)+"\nMensual: "+mensual.toFixed(2)+"\nAnual: "+anual.toFixed(2));
    }
    else if(menu == "4" && CDP == true && Cuenta1 == true && Cuenta2 == true && CDP2 == true){
        anual = monto*0.09;
        mensual = anual/12;
        semanal = mensual/4;
        diario = mensual/30;

        anual += monto*0.045;
        mensual += monto*0.045/12;
        semanal += monto*0.045/12/4;
        diario += monto*0.045/12/30;

        anual += monto*0.065;
        mensual += monto*0.065/12;
        semanal += monto*0.065/12/4;
        diario += monto*0.065/12/30;

        anual += monto*0.14;
        mensual += monto*0.14/12;
        semanal += monto*0.14/12/4;
        diario += monto*0.14/12/30;
        
        alert("El Sr. o Sra. "+nombre+" con cédula de identidad: "+cedula+". Al seleccionar, en AVANT, todas las "+
        "cuentas del 9, 4.5, 6.5 y 14 por ciento de interés anual, obtendrá las siguientes ganancias: \nDiario: "+diario.toFixed(2)+
        "\nSemanal: "+semanal.toFixed(2)+"\nMensual: "+mensual.toFixed(2)+"\nAnual: "+anual.toFixed(2));
    }
    else if(menu == "1" && CDP == true && Cuenta1 == true && Cuenta2 == true){
        anual = monto*0.08;
        mensual = anual/12;
        semanal = mensual/4;
        diario = mensual/30;

        anual += monto*0.02;
        mensual += monto*0.02/12;
        semanal += monto*0.02/12/4;
        diario += monto*0.02/12/30;

        anual += monto*0.05;
        mensual += monto*0.05/12;
        semanal += monto*0.05/12/4;
        diario += monto*0.05/12/30;
        
        alert("El Sr. o Sra. "+nombre+" con cédula de identidad: "+cedula+". Al seleccionar, en BANPRO, una cuenta "+
        "CDP al 8 %, una al 2 % y otra al 5 % de interés anual, obtendrá las siguientes ganancias: \nDiario: "+diario.toFixed(2)+
        "\nSemanal: "+semanal.toFixed(2)+"\nMensual: "+mensual.toFixed(2)+"\nAnual: "+anual.toFixed(2));
    }
    else if(menu == "1" && CDP == true && Cuenta1 == true && CDP2 == true){
        anual = monto*0.08;
        mensual = anual/12;
        semanal = mensual/4;
        diario = mensual/30;

        anual += monto*0.02;
        mensual += monto*0.02/12;
        semanal += monto*0.02/12/4;
        diario += monto*0.02/12/30;

        anual += monto*0.16;
        mensual += monto*0.16/12;
        semanal += monto*0.16/12/4;
        diario += monto*0.16/12/30;
        
        alert("El Sr. o Sra. "+nombre+" con cédula de identidad: "+cedula+". Al seleccionar, en BANPRO, una cuenta "+
        "CDP al 8 %, una al 2 % y otra CDP2 al 16 % de interés anual, obtendrá las siguientes ganancias: \nDiario: "+diario.toFixed(2)+
        "\nSemanal: "+semanal.toFixed(2)+"\nMensual: "+mensual.toFixed(2)+"\nAnual: "+anual.toFixed(2));
    }
    else if(menu == "1" && CDP == true && Cuenta2 == true && CDP2 == true){
        anual = monto*0.08;
        mensual = anual/12;
        semanal = mensual/4;
        diario = mensual/30;

        anual += monto*0.05;
        mensual += monto*0.05/12;
        semanal += monto*0.05/12/4;
        diario += monto*0.05/12/30;

        anual += monto*0.16;
        mensual += monto*0.16/12;
        semanal += monto*0.16/12/4;
        diario += monto*0.16/12/30;
        
        alert("El Sr. o Sra. "+nombre+" con cédula de identidad: "+cedula+". Al seleccionar, en BANPRO, una cuenta "+
        "CDP al 8 %, una al 5 % y otra CDP2 al 16 % de interés anual, obtendrá las siguientes ganancias: \nDiario: "+diario.toFixed(2)+
        "\nSemanal: "+semanal.toFixed(2)+"\nMensual: "+mensual.toFixed(2)+"\nAnual: "+anual.toFixed(2));
    }
    else if(menu == "1" && Cuenta1 == true && Cuenta2 == true && CDP2 == true){
        anual = monto*0.02;
        mensual = anual/12;
        semanal = mensual/4;
        diario = mensual/30;

        anual += monto*0.05;
        mensual += monto*0.05/12;
        semanal += monto*0.05/12/4;
        diario += monto*0.05/12/30;

        anual += monto*0.16;
        mensual += monto*0.16/12;
        semanal += monto*0.16/12/4;
        diario += monto*0.16/12/30;
        
        alert("El Sr. o Sra. "+nombre+" con cédula de identidad: "+cedula+". Al seleccionar, en BANPRO, una cuenta "+
        "al 2 %, una al 5 % y otra CDP2 al 16 % de interés anual, obtendrá las siguientes ganancias: \nDiario: "+diario.toFixed(2)+
        "\nSemanal: "+semanal.toFixed(2)+"\nMensual: "+mensual.toFixed(2)+"\nAnual: "+anual.toFixed(2)); //salida
    }
    else if(menu == "2" && CDP == true && Cuenta1 == true && Cuenta2 == true){
        anual = monto*0.06;
        mensual = anual/12;
        semanal = mensual/4;
        diario = mensual/30;

        anual += monto*0.01;
        mensual += monto*0.01/12;
        semanal += monto*0.01/12/4;
        diario += monto*0.01/12/30;

        anual += monto*0.04;
        mensual += monto*0.04/12;
        semanal += monto*0.04/12/4;
        diario += monto*0.04/12/30;
        
        alert("El Sr. o Sra. "+nombre+" con cédula de identidad: "+cedula+". Al seleccionar, en BDF, una cuenta "+
        "CDP al 6 %, una al 1 % y otra al 4 % de interés anual, obtendrá las siguientes ganancias: \nDiario: "+diario.toFixed(2)+
        "\nSemanal: "+semanal.toFixed(2)+"\nMensual: "+mensual.toFixed(2)+"\nAnual: "+anual.toFixed(2));
    }
    else if(menu == "2" && CDP == true && Cuenta1 == true && CDP2 == true){
        anual = monto*0.06;
        mensual = anual/12;
        semanal = mensual/4;
        diario = mensual/30;

        anual += monto*0.01;
        mensual += monto*0.01/12;
        semanal += monto*0.01/12/4;
        diario += monto*0.01/12/30;

        anual += monto*0.12;
        mensual += monto*0.12/12;
        semanal += monto*0.12/12/4;
        diario += monto*0.12/12/30;
        
        alert("El Sr. o Sra. "+nombre+" con cédula de identidad: "+cedula+". Al seleccionar, en BDF, una cuenta "+
        "CDP al 6 %, una al 1 % y otra CDP2 al 12 % de interés anual, obtendrá las siguientes ganancias: \nDiario: "+diario.toFixed(2)+
        "\nSemanal: "+semanal.toFixed(2)+"\nMensual: "+mensual.toFixed(2)+"\nAnual: "+anual.toFixed(2));
    }
    else if(menu == "2" && CDP == true && Cuenta2 == true && CDP2 == true){
        anual = monto*0.06;
        mensual = anual/12;
        semanal = mensual/4;
        diario = mensual/30;

        anual += monto*0.04;
        mensual += monto*0.04/12;
        semanal += monto*0.04/12/4;
        diario += monto*0.04/12/30;

        anual += monto*0.12;
        mensual += monto*0.12/12;
        semanal += monto*0.12/12/4;
        diario += monto*0.12/12/30;
        
        alert("El Sr. o Sra. "+nombre+" con cédula de identidad: "+cedula+". Al seleccionar, en BDF, una cuenta "+
        "CDP al 6 %, una al 4 % y otra CDP2 al 12 % de interés anual, obtendrá las siguientes ganancias: \nDiario: "+diario.toFixed(2)+
        "\nSemanal: "+semanal.toFixed(2)+"\nMensual: "+mensual.toFixed(2)+"\nAnual: "+anual.toFixed(2));
    }
    else if(menu == "2" && Cuenta1 == true && Cuenta2 == true && CDP2 == true){
        anual = monto*0.01;
        mensual = anual/12;
        semanal = mensual/4;
        diario = mensual/30;

        anual += monto*0.04;
        mensual += monto*0.04/12;
        semanal += monto*0.04/12/4;
        diario += monto*0.04/12/30;

        anual += monto*0.12;
        mensual += monto*0.12/12;
        semanal += monto*0.12/12/4;
        diario += monto*0.12/12/30;
        
        alert("El Sr. o Sra. "+nombre+" con cédula de identidad: "+cedula+". Al seleccionar, en BDF, una cuenta "+
        "al 1 %, una al 4 % y otra CDP2 al 12 % de interés anual, obtendrá las siguientes ganancias: \nDiario: "+diario.toFixed(2)+
        "\nSemanal: "+semanal.toFixed(2)+"\nMensual: "+mensual.toFixed(2)+"\nAnual: "+anual.toFixed(2));
         //Segunda-salida
    }
    else if(menu == "3" && CDP == true && Cuenta1 == true && Cuenta2 == true){
        anual = monto*0.07;
        mensual = anual/12;
        semanal = mensual/4;
        diario = mensual/30;

        anual += monto*0.03;
        mensual += monto*0.03/12;
        semanal += monto*0.03/12/4;
        diario += monto*0.03/12/30;

        anual += monto*0.055;
        mensual += monto*0.055/12;
        semanal += monto*0.055/12/4;
        diario += monto*0.055/12/30;
        
        alert("El Sr. o Sra. "+nombre+" con cédula de identidad: "+cedula+". Al seleccionar, en BANCENTRO, una cuenta "+
        "CDP al 7 %, una al 3 % y otra al 5.5 % de interés anual, obtendrá las siguientes ganancias: \nDiario: "+diario.toFixed(2)+
        "\nSemanal: "+semanal.toFixed(2)+"\nMensual: "+mensual.toFixed(2)+"\nAnual: "+anual.toFixed(2));
    }
    else if(menu == "3" && CDP == true && Cuenta1 == true && CDP2 == true){
        anual = monto*0.07;
        mensual = anual/12;
        semanal = mensual/4;
        diario = mensual/30;

        anual += monto*0.03;
        mensual += monto*0.03/12;
        semanal += monto*0.03/12/4;
        diario += monto*0.03/12/30;

        anual += monto*0.13;
        mensual += monto*0.13/12;
        semanal += monto*0.13/12/4;
        diario += monto*0.13/12/30;
        
        alert("El Sr. o Sra. "+nombre+" con cédula de identidad: "+cedula+". Al seleccionar, en BANCENTRO, una cuenta "+
        "CDP al 7 %, una al 3 % y otra CDP2 al 13 % de interés anual, obtendrá las siguientes ganancias: \nDiario: "+diario.toFixed(2)+
        "\nSemanal: "+semanal.toFixed(2)+"\nMensual: "+mensual.toFixed(2)+"\nAnual: "+anual.toFixed(2));
    }
    else if(menu == "3" && CDP == true && Cuenta2 == true && CDP2 == true){
        anual = monto*0.07;
        mensual = anual/12;
        semanal = mensual/4;
        diario = mensual/30;

        anual += monto*0.055;
        mensual += monto*0.055/12;
        semanal += monto*0.055/12/4;
        diario += monto*0.055/12/30;

        anual += monto*0.13;
        mensual += monto*0.13/12;
        semanal += monto*0.13/12/4;
        diario += monto*0.13/12/30;
        
        alert("El Sr. o Sra. "+nombre+" con cédula de identidad: "+cedula+". Al seleccionar, en BANCENTRO, una cuenta "+
        "CDP al 7 %, una al 5.5 % y otra CDP2 al 13 % de interés anual, obtendrá las siguientes ganancias: \nDiario: "+diario.toFixed(2)+
        "\nSemanal: "+semanal.toFixed(2)+"\nMensual: "+mensual.toFixed(2)+"\nAnual: "+anual.toFixed(2));
    }
    else if(menu == "3" && Cuenta1 == true && Cuenta2 == true && CDP2 == true){
        anual = monto*0.03;
        mensual = anual/12;
        semanal = mensual/4;
        diario = mensual/30;

        anual += monto*0.055;
        mensual += monto*0.055/12;
        semanal += monto*0.055/12/4;
        diario += monto*0.055/12/30;

        anual += monto*0.13;
        mensual += monto*0.13/12;
        semanal += monto*0.13/12/4;
        diario += monto*0.13/12/30;
        
        alert("El Sr. o Sra. "+nombre+" con cédula de identidad: "+cedula+". Al seleccionar, en BANCENTRO, una cuenta "+
        "al 3 %, una al 5.5 % y otra CDP2 al 13 % de interés anual, obtendrá las siguientes ganancias: \nDiario: "+diario.toFixed(2)+
        "\nSemanal: "+semanal.toFixed(2)+"\nMensual: "+mensual.toFixed(2)+"\nAnual: "+anual.toFixed(2));
         //Tercera-salida
    }
    else if(menu == "4" && CDP == true && Cuenta1 == true && Cuenta2 == true){
        anual = monto*0.09;
        mensual = anual/12;
        semanal = mensual/4;
        diario = mensual/30;

        anual += monto*0.045;
        mensual += monto*0.045/12;
        semanal += monto*0.045/12/4;
        diario += monto*0.045/12/30;

        anual += monto*0.065;
        mensual += monto*0.065/12;
        semanal += monto*0.065/12/4;
        diario += monto*0.065/12/30;
        
        alert("El Sr. o Sra. "+nombre+" con cédula de identidad: "+cedula+". Al seleccionar, en AVANT, una cuenta "+
        "CDP al 9 %, una al 4.5 % y otra al 6.5 % de interés anual, obtendrá las siguientes ganancias: \nDiario: "+diario.toFixed(2)+
        "\nSemanal: "+semanal.toFixed(2)+"\nMensual: "+mensual.toFixed(2)+"\nAnual: "+anual.toFixed(2));
    }
    else if(menu == "4" && CDP == true && Cuenta1 == true && CDP2 == true){
        anual = monto*0.09;
        mensual = anual/12;
        semanal = mensual/4;
        diario = mensual/30;

        anual += monto*0.045;
        mensual += monto*0.045/12;
        semanal += monto*0.045/12/4;
        diario += monto*0.045/12/30;

        anual += monto*0.14;
        mensual += monto*0.14/12;
        semanal += monto*0.14/12/4;
        diario += monto*0.14/12/30;
        
        alert("El Sr. o Sra. "+nombre+" con cédula de identidad: "+cedula+". Al seleccionar, en AVANT, una cuenta "+
        "CDP al 9 %, una al 4.5 % y otra CDP2 al 14 % de interés anual, obtendrá las siguientes ganancias: \nDiario: "+diario.toFixed(2)+
        "\nSemanal: "+semanal.toFixed(2)+"\nMensual: "+mensual.toFixed(2)+"\nAnual: "+anual.toFixed(2));
    }
    else if(menu == "4" && CDP == true && Cuenta2 == true && CDP2 == true){
        anual = monto*0.09;
        mensual = anual/12;
        semanal = mensual/4;
        diario = mensual/30;

        anual += monto*0.065;
        mensual += monto*0.065/12;
        semanal += monto*0.065/12/4;
        diario += monto*0.065/12/30;

        anual += monto*0.14;
        mensual += monto*0.14/12;
        semanal += monto*0.14/12/4;
        diario += monto*0.14/12/30;
        
        alert("El Sr. o Sra. "+nombre+" con cédula de identidad: "+cedula+". Al seleccionar, en AVANT, una cuenta "+
        "CDP al 9 %, una al 6.5 % y otra CDP2 al 14 % de interés anual, obtendrá las siguientes ganancias: \nDiario: "+diario.toFixed(2)+
        "\nSemanal: "+semanal.toFixed(2)+"\nMensual: "+mensual.toFixed(2)+"\nAnual: "+anual.toFixed(2));
    }
    else if(menu == "4" && Cuenta1 == true && Cuenta2 == true && CDP2 == true){
        anual = monto*0.045;
        mensual = anual/12;
        semanal = mensual/4;
        diario = mensual/30;

        anual += monto*0.065;
        mensual += monto*0.065/12;
        semanal += monto*0.065/12/4;
        diario += monto*0.065/12/30;

        anual += monto*0.14;
        mensual += monto*0.14/12;
        semanal += monto*0.14/12/4;
        diario += monto*0.14/12/30;
        
        alert("El Sr. o Sra. "+nombre+" con cédula de identidad: "+cedula+". Al seleccionar, en AVANT, una cuenta "+
        "al 4.5 %, una al 6.5 % y otra CDP2 al 14 % de interés anual, obtendrá las siguientes ganancias: \nDiario: "+diario.toFixed(2)+
        "\nSemanal: "+semanal.toFixed(2)+"\nMensual: "+mensual.toFixed(2)+"\nAnual: "+anual.toFixed(2));
         //Cuarta-salida
    }
    else if(menu == "1" && CDP == true && Cuenta1 == true){
        anual = monto*0.08;
        mensual = anual/12;
        semanal = mensual/4;
        diario = mensual/30;

        anual += monto*0.02;
        mensual += monto*0.02/12;
        semanal += monto*0.02/12/4;
        diario += monto*0.02/12/30;
        
        alert("El Sr. o Sra. "+nombre+" con cédula de identidad: "+cedula+". Al seleccionar, en BANPRO, una cuenta "+
        "CDP al 8 % y una, al 2 % de interés anual, obtendrá las siguientes ganancias: \nDiario: "+diario.toFixed(2)+
        "\nSemanal: "+semanal.toFixed(2)+"\nMensual: "+mensual.toFixed(2)+"\nAnual: "+anual.toFixed(2));
    }
    else if(menu == "1" && CDP == true && Cuenta2 == true){
        anual = monto*0.08;
        mensual = anual/12;
        semanal = mensual/4;
        diario = mensual/30;

        anual += monto*0.05;
        mensual += monto*0.05/12;
        semanal += monto*0.05/12/4;
        diario += monto*0.05/12/30;
        
        alert("El Sr. o Sra. "+nombre+" con cédula de identidad: "+cedula+". Al seleccionar, en BANPRO, una cuenta "+
        "CDP al 8 % y una, al 5 % de interés anual, obtendrá las siguientes ganancias: \nDiario: "+diario.toFixed(2)+
        "\nSemanal: "+semanal.toFixed(2)+"\nMensual: "+mensual.toFixed(2)+"\nAnual: "+anual.toFixed(2));
    }
    else if(menu == "1" && CDP == true && CDP2 == true){
        anual = monto*0.08;
        mensual = anual/12;
        semanal = mensual/4;
        diario = mensual/30;

        anual += monto*0.16;
        mensual += monto*0.16/12;
        semanal += monto*0.16/12/4;
        diario += monto*0.16/12/30;
        
        alert("El Sr. o Sra. "+nombre+" con cédula de identidad: "+cedula+". Al seleccionar, en BANPRO, una cuenta "+
        "CDP al 8 % y una, CDP2 al 16 % de interés anual, obtendrá las siguientes ganancias: \nDiario: "+diario.toFixed(2)+
        "\nSemanal: "+semanal.toFixed(2)+"\nMensual: "+mensual.toFixed(2)+"\nAnual: "+anual.toFixed(2));
    }
    else if(menu == "1" && Cuenta1 == true && Cuenta2 == true){
        anual = monto*0.02;
        mensual = anual/12;
        semanal = mensual/4;
        diario = mensual/30;

        anual += monto*0.05;
        mensual += monto*0.05/12;
        semanal += monto*0.05/12/4;
        diario += monto*0.05/12/30;
        
        alert("El Sr. o Sra. "+nombre+" con cédula de identidad: "+cedula+". Al seleccionar, en BANPRO, una cuenta "+
        "al 2 % y una, al 5 % de interés anual, obtendrá las siguientes ganancias: \nDiario: "+diario.toFixed(2)+
        "\nSemanal: "+semanal.toFixed(2)+"\nMensual: "+mensual.toFixed(2)+"\nAnual: "+anual.toFixed(2));
    }
    else if(menu == "1" && Cuenta1 == true && CDP2 == true){
        anual = monto*0.02;
        mensual = anual/12;
        semanal = mensual/4;
        diario = mensual/30;

        anual += monto*0.16;
        mensual += monto*0.16/12;
        semanal += monto*0.16/12/4;
        diario += monto*0.16/12/30;
        
        alert("El Sr. o Sra. "+nombre+" con cédula de identidad: "+cedula+". Al seleccionar, en BANPRO, una cuenta "+
        "al 2 % y una, CDP2 al 16 % de interés anual, obtendrá las siguientes ganancias: \nDiario: "+diario.toFixed(2)+
        "\nSemanal: "+semanal.toFixed(2)+"\nMensual: "+mensual.toFixed(2)+"\nAnual: "+anual.toFixed(2));
    }
    else if(menu == "1" && Cuenta2 == true && CDP2 == true){
        anual = monto*0.05;
        mensual = anual/12;
        semanal = mensual/4;
        diario = mensual/30;

        anual += monto*0.16;
        mensual += monto*0.16/12;
        semanal += monto*0.16/12/4;
        diario += monto*0.16/12/30;
        
        alert("El Sr. o Sra. "+nombre+" con cédula de identidad: "+cedula+". Al seleccionar, en BANPRO, una cuenta "+
        "al 5 % y una, CDP2 al 16 % de interés anual, obtendrá las siguientes ganancias: \nDiario: "+diario.toFixed(2)+
        "\nSemanal: "+semanal.toFixed(2)+"\nMensual: "+mensual.toFixed(2)+"\nAnual: "+anual.toFixed(2));
         //FinDosOpciones-BANPRO
    }
    else if(menu == "2" && CDP == true && Cuenta1 == true){
        anual = monto*0.06;
        mensual = anual/12;
        semanal = mensual/4;
        diario = mensual/30;

        anual += monto*0.01;
        mensual += monto*0.01/12;
        semanal += monto*0.01/12/4;
        diario += monto*0.01/12/30;
        
        alert("El Sr. o Sra. "+nombre+" con cédula de identidad: "+cedula+". Al seleccionar, en BDF, una cuenta "+
        "CDP al 6 % y una, al 1 % de interés anual, obtendrá las siguientes ganancias: \nDiario: "+diario.toFixed(2)+
        "\nSemanal: "+semanal.toFixed(2)+"\nMensual: "+mensual.toFixed(2)+"\nAnual: "+anual.toFixed(2));
    }
    else if(menu == "2" && CDP == true && Cuenta2 == true){
        anual = monto*0.06;
        mensual = anual/12;
        semanal = mensual/4;
        diario = mensual/30;

        anual += monto*0.04;
        mensual += monto*0.04/12;
        semanal += monto*0.04/12/4;
        diario += monto*0.04/12/30;
        
        alert("El Sr. o Sra. "+nombre+" con cédula de identidad: "+cedula+". Al seleccionar, en BDF, una cuenta "+
        "CDP al 6 % y una, al 4 % de interés anual, obtendrá las siguientes ganancias: \nDiario: "+diario.toFixed(2)+
        "\nSemanal: "+semanal.toFixed(2)+"\nMensual: "+mensual.toFixed(2)+"\nAnual: "+anual.toFixed(2));
    }
    else if(menu == "2" && CDP == true && CDP2 == true){
        anual = monto*0.06;
        mensual = anual/12;
        semanal = mensual/4;
        diario = mensual/30;

        anual += monto*0.12;
        mensual += monto*0.12/12;
        semanal += monto*0.12/12/4;
        diario += monto*0.12/12/30;
        
        alert("El Sr. o Sra. "+nombre+" con cédula de identidad: "+cedula+". Al seleccionar, en BDF, una cuenta "+
        "CDP al 6 % y una, CDP2 al 12 % de interés anual, obtendrá las siguientes ganancias: \nDiario: "+diario.toFixed(2)+
        "\nSemanal: "+semanal.toFixed(2)+"\nMensual: "+mensual.toFixed(2)+"\nAnual: "+anual.toFixed(2));
    }
    else if(menu == "2" && Cuenta1 == true && Cuenta2 == true){
        anual = monto*0.01;
        mensual = anual/12;
        semanal = mensual/4;
        diario = mensual/30;

        anual += monto*0.04;
        mensual += monto*0.04/12;
        semanal += monto*0.04/12/4;
        diario += monto*0.04/12/30;
        
        alert("El Sr. o Sra. "+nombre+" con cédula de identidad: "+cedula+". Al seleccionar, en BDF, una cuenta "+
        "al 1 % y una, al 4 % de interés anual, obtendrá las siguientes ganancias: \nDiario: "+diario.toFixed(2)+
        "\nSemanal: "+semanal.toFixed(2)+"\nMensual: "+mensual.toFixed(2)+"\nAnual: "+anual.toFixed(2));
    }
    else if(menu == "2" && Cuenta1 == true && CDP2 == true){
        anual = monto*0.01;
        mensual = anual/12;
        semanal = mensual/4;
        diario = mensual/30;

        anual += monto*0.12;
        mensual += monto*0.12/12;
        semanal += monto*0.12/12/4;
        diario += monto*0.12/12/30;
        
        alert("El Sr. o Sra. "+nombre+" con cédula de identidad: "+cedula+". Al seleccionar, en BDF, una cuenta "+
        "al 1 % y una, CDP2 al 12 % de interés anual, obtendrá las siguientes ganancias: \nDiario: "+diario.toFixed(2)+
        "\nSemanal: "+semanal.toFixed(2)+"\nMensual: "+mensual.toFixed(2)+"\nAnual: "+anual.toFixed(2));
    }
    else if(menu == "2" && Cuenta2 == true && CDP2 == true){
        anual = monto*0.04;
        mensual = anual/12;
        semanal = mensual/4;
        diario = mensual/30;

        anual += monto*0.12;
        mensual += monto*0.12/12;
        semanal += monto*0.12/12/4;
        diario += monto*0.12/12/30;
        
        alert("El Sr. o Sra. "+nombre+" con cédula de identidad: "+cedula+". Al seleccionar, en BDF, una cuenta "+
        "al 4 % y una, CDP2 al 12 % de interés anual, obtendrá las siguientes ganancias: \nDiario: "+diario.toFixed(2)+
        "\nSemanal: "+semanal.toFixed(2)+"\nMensual: "+mensual.toFixed(2)+"\nAnual: "+anual.toFixed(2)); 
        //FinDosOpciones-BDF
    }
    else if(menu == "3" && CDP == true && Cuenta1 == true){
        anual = monto*0.07;
        mensual = anual/12;
        semanal = mensual/4;
        diario = mensual/30;

        anual += monto*0.03;
        mensual += monto*0.03/12;
        semanal += monto*0.03/12/4;
        diario += monto*0.03/12/30;
        
        alert("El Sr. o Sra. "+nombre+" con cédula de identidad: "+cedula+". Al seleccionar, en BANCENTRO, una cuenta "+
        "CDP al 7 % y una, al 3 % de interés anual, obtendrá las siguientes ganancias: \nDiario: "+diario.toFixed(2)+
        "\nSemanal: "+semanal.toFixed(2)+"\nMensual: "+mensual.toFixed(2)+"\nAnual: "+anual.toFixed(2));
    }
    else if(menu == "3" && CDP == true && Cuenta2 == true){
        anual = monto*0.07;
        mensual = anual/12;
        semanal = mensual/4;
        diario = mensual/30;

        anual += monto*0.055;
        mensual += monto*0.055/12;
        semanal += monto*0.055/12/4;
        diario += monto*0.055/12/30;
        
        alert("El Sr. o Sra. "+nombre+" con cédula de identidad: "+cedula+". Al seleccionar, en BANCENTRO, una cuenta "+
        "CDP al 7 % y una, al 5.5 % de interés anual, obtendrá las siguientes ganancias: \nDiario: "+diario.toFixed(2)+
        "\nSemanal: "+semanal.toFixed(2)+"\nMensual: "+mensual.toFixed(2)+"\nAnual: "+anual.toFixed(2));
    }
    else if(menu == "3" && CDP == true && CDP2 == true){
        anual = monto*0.07;
        mensual = anual/12;
        semanal = mensual/4;
        diario = mensual/30;

        anual += monto*0.13;
        mensual += monto*0.13/12;
        semanal += monto*0.13/12/4;
        diario += monto*0.13/12/30;
        
        alert("El Sr. o Sra. "+nombre+" con cédula de identidad: "+cedula+". Al seleccionar, en BANCENTRO, una cuenta "+
        "CDP al 7 % y una, CDP2 al 13 % de interés anual, obtendrá las siguientes ganancias: \nDiario: "+diario.toFixed(2)+
        "\nSemanal: "+semanal.toFixed(2)+"\nMensual: "+mensual.toFixed(2)+"\nAnual: "+anual.toFixed(2));
    }
    else if(menu == "3" && Cuenta1 == true && Cuenta2 == true){
        anual = monto*0.03;
        mensual = anual/12;
        semanal = mensual/4;
        diario = mensual/30;

        anual += monto*0.055;
        mensual += monto*0.055/12;
        semanal += monto*0.055/12/4;
        diario += monto*0.055/12/30;
        
        alert("El Sr. o Sra. "+nombre+" con cédula de identidad: "+cedula+". Al seleccionar, en BANCENTRO, una cuenta "+
        "al 3 % y una, al 5.5 % de interés anual, obtendrá las siguientes ganancias: \nDiario: "+diario.toFixed(2)+
        "\nSemanal: "+semanal.toFixed(2)+"\nMensual: "+mensual.toFixed(2)+"\nAnual: "+anual.toFixed(2));
    }
    else if(menu == "3" && Cuenta1 == true && CDP2 == true){
        anual = monto*0.03;
        mensual = anual/12;
        semanal = mensual/4;
        diario = mensual/30;

        anual += monto*0.13;
        mensual += monto*0.13/12;
        semanal += monto*0.13/12/4;
        diario += monto*0.13/12/30;
        
        alert("El Sr. o Sra. "+nombre+" con cédula de identidad: "+cedula+". Al seleccionar, en BANCENTRO, una cuenta "+
        "al 3 % y una, CDP2 al 13 % de interés anual, obtendrá las siguientes ganancias: \nDiario: "+diario.toFixed(2)+
        "\nSemanal: "+semanal.toFixed(2)+"\nMensual: "+mensual.toFixed(2)+"\nAnual: "+anual.toFixed(2));
    }
    else if(menu == "3" && Cuenta2 == true && CDP2 == true){
        anual = monto*0.055;
        mensual = anual/12;
        semanal = mensual/4;
        diario = mensual/30;

        anual += monto*0.13;
        mensual += monto*0.13/12;
        semanal += monto*0.13/12/4;
        diario += monto*0.13/12/30;
        
        alert("El Sr. o Sra. "+nombre+" con cédula de identidad: "+cedula+". Al seleccionar, en BANCENTRO, una cuenta "+
        "al 5.5 % y una, CDP2 al 13 % de interés anual, obtendrá las siguientes ganancias: \nDiario: "+diario.toFixed(2)+
        "\nSemanal: "+semanal.toFixed(2)+"\nMensual: "+mensual.toFixed(2)+"\nAnual: "+anual.toFixed(2));
         //FinDosOpciones-BANCENTRO
    }
    else if(menu == "4" && CDP == true && Cuenta1 == true){
        anual = monto*0.09;
        mensual = anual/12;
        semanal = mensual/4;
        diario = mensual/30;

        anual += monto*0.045;
        mensual += monto*0.045/12;
        semanal += monto*0.045/12/4;
        diario += monto*0.045/12/30;
        
        alert("El Sr. o Sra. "+nombre+" con cédula de identidad: "+cedula+". Al seleccionar, en AVANT, una cuenta "+
        "CDP al 9 % y una, al 4.5 % de interés anual, obtendrá las siguientes ganancias: \nDiario: "+diario.toFixed(2)+
        "\nSemanal: "+semanal.toFixed(2)+"\nMensual: "+mensual.toFixed(2)+"\nAnual: "+anual.toFixed(2));
    }
    else if(menu == "4" && CDP == true && Cuenta2 == true){
        anual = monto*0.09;
        mensual = anual/12;
        semanal = mensual/4;
        diario = mensual/30;

        anual += monto*0.065;
        mensual += monto*0.065/12;
        semanal += monto*0.065/12/4;
        diario += monto*0.065/12/30;
        
        alert("El Sr. o Sra. "+nombre+" con cédula de identidad: "+cedula+". Al seleccionar, en AVANT, una cuenta "+
        "CDP al 9 % y una, al 6.5 % de interés anual, obtendrá las siguientes ganancias: \nDiario: "+diario.toFixed(2)+
        "\nSemanal: "+semanal.toFixed(2)+"\nMensual: "+mensual.toFixed(2)+"\nAnual: "+anual.toFixed(2));
    }
    else if(menu == "4" && CDP == true && CDP2 == true){
        anual = monto*0.09;
        mensual = anual/12;
        semanal = mensual/4;
        diario = mensual/30;

        anual += monto*0.14;
        mensual += monto*0.14/12;
        semanal += monto*0.14/12/4;
        diario += monto*0.14/12/30;
        
        alert("El Sr. o Sra. "+nombre+" con cédula de identidad: "+cedula+". Al seleccionar, en AVANT, una cuenta "+
        "CDP al 9 % y una, CDP2 al 14 % de interés anual, obtendrá las siguientes ganancias: \nDiario: "+diario.toFixed(2)+
        "\nSemanal: "+semanal.toFixed(2)+"\nMensual: "+mensual.toFixed(2)+"\nAnual: "+anual.toFixed(2));
    }
    else if(menu == "4" && Cuenta1 == true && Cuenta2 == true){
        anual = monto*0.045;
        mensual = anual/12;
        semanal = mensual/4;
        diario = mensual/30;

        anual += monto*0.065;
        mensual += monto*0.065/12;
        semanal += monto*0.065/12/4;
        diario += monto*0.065/12/30;
        
        alert("El Sr. o Sra. "+nombre+" con cédula de identidad: "+cedula+". Al seleccionar, en AVANT, una cuenta "+
        "al 4.5 % y una, al 6.5 % de interés anual, obtendrá las siguientes ganancias: \nDiario: "+diario.toFixed(2)+
        "\nSemanal: "+semanal.toFixed(2)+"\nMensual: "+mensual.toFixed(2)+"\nAnual: "+anual.toFixed(2));
    }
    else if(menu == "4" && Cuenta1 == true && CDP2 == true){
        anual = monto*0.045;
        mensual = anual/12;
        semanal = mensual/4;
        diario = mensual/30;

        anual += monto*0.14;
        mensual += monto*0.14/12;
        semanal += monto*0.14/12/4;
        diario += monto*0.14/12/30;
        
        alert("El Sr. o Sra. "+nombre+" con cédula de identidad: "+cedula+". Al seleccionar, en AVANT, una cuenta "+
        "al 4.5 % y una, CDP2 al 14 % de interés anual, obtendrá las siguientes ganancias: \nDiario: "+diario.toFixed(2)+
        "\nSemanal: "+semanal.toFixed(2)+"\nMensual: "+mensual.toFixed(2)+"\nAnual: "+anual.toFixed(2));
    }
    else if(menu == "4" && Cuenta2 == true && CDP2 == true){
        anual = monto*0.065;
        mensual = anual/12;
        semanal = mensual/4;
        diario = mensual/30;

        anual += monto*0.14;
        mensual += monto*0.14/12;
        semanal += monto*0.14/12/4;
        diario += monto*0.14/12/30;
        
        alert("El Sr. o Sra. "+nombre+" con cédula de identidad: "+cedula+". Al seleccionar, en AVANT, una cuenta "+
        "al 6.5 % y una, CDP2 al 14 % de interés anual, obtendrá las siguientes ganancias: \nDiario: "+diario.toFixed(2)+
        "\nSemanal: "+semanal.toFixed(2)+"\nMensual: "+mensual.toFixed(2)+"\nAnual: "+anual.toFixed(2));
         //FinDosOpciones-AVANT
    }
    else if(menu == "1" && CDP == true){
        anual = monto*0.08;
        mensual = anual/12;
        semanal = mensual/4;
        diario = mensual/30;
        
        alert("El Sr. o Sra. "+nombre+" con cédula de identidad: "+cedula+". Al seleccionar, en BANPRO, una cuenta "+
        "CDP al 8 % de interés anual, obtendrá las siguientes ganancias: \nDiario: "+diario.toFixed(2)+
        "\nSemanal: "+semanal.toFixed(2)+"\nMensual: "+mensual.toFixed(2)+"\nAnual: "+anual.toFixed(2));
    }
    else if(menu == "1" && Cuenta1 == true){
        anual = monto*0.02;
        mensual = anual/12;
        semanal = mensual/4;
        diario = mensual/30;
        
        alert("El Sr. o Sra. "+nombre+" con cédula de identidad: "+cedula+". Al seleccionar, en BANPRO, una cuenta "+
        "al 2 % de interés anual, obtendrá las siguientes ganancias: \nDiario: "+diario.toFixed(2)+
        "\nSemanal: "+semanal.toFixed(2)+"\nMensual: "+mensual.toFixed(2)+"\nAnual: "+anual.toFixed(2));
    }
    else if(menu == "1" && Cuenta2 == true){
        anual = monto*0.05;
        mensual = anual/12;
        semanal = mensual/4;
        diario = mensual/30;
        
        alert("El Sr. o Sra. "+nombre+" con cédula de identidad: "+cedula+". Al seleccionar, en BANPRO, una cuenta "+
        "al 5 % de interés anual, obtendrá las siguientes ganancias: \nDiario: "+diario.toFixed(2)+
        "\nSemanal: "+semanal.toFixed(2)+"\nMensual: "+mensual.toFixed(2)+"\nAnual: "+anual.toFixed(2));
    }
    else if(menu == "1" && CDP2 == true){
        anual = monto*0.16;
        mensual = anual/12;
        semanal = mensual/4;
        diario = mensual/30;
        
        alert("El Sr. o Sra. "+nombre+" con cédula de identidad: "+cedula+". Al seleccionar, en BANPRO, una cuenta "+
        "CDP2 al 16 % de interés anual, obtendrá las siguientes ganancias: \nDiario: "+diario.toFixed(2)+
        "\nSemanal: "+semanal.toFixed(2)+"\nMensual: "+mensual.toFixed(2)+"\nAnual: "+anual.toFixed(2));
        // FinUnaOpcion-BANPRO
    }
    else if(menu == "2" && CDP == true){
        anual = monto*0.06;
        mensual = anual/12;
        semanal = mensual/4;
        diario = mensual/30;
        
        alert("El Sr. o Sra. "+nombre+" con cédula de identidad: "+cedula+". Al seleccionar, en BDF, una cuenta "+
        "CDP al 6 % de interés anual, obtendrá las siguientes ganancias: \nDiario: "+diario.toFixed(2)+
        "\nSemanal: "+semanal.toFixed(2)+"\nMensual: "+mensual.toFixed(2)+"\nAnual: "+anual.toFixed(2));
    }
    else if(menu == "2" && Cuenta1 == true){
        anual = monto*0.01;
        mensual = anual/12;
        semanal = mensual/4;
        diario = mensual/30;
        
        alert("El Sr. o Sra. "+nombre+" con cédula de identidad: "+cedula+". Al seleccionar, en BDF, una cuenta "+
        "al 1 % de interés anual, obtendrá las siguientes ganancias: \nDiario: "+diario.toFixed(2)+
        "\nSemanal: "+semanal.toFixed(2)+"\nMensual: "+mensual.toFixed(2)+"\nAnual: "+anual.toFixed(2));
    }
    else if(menu == "2" && Cuenta2 == true){
        anual = monto*0.04;
        mensual = anual/12;
        semanal = mensual/4;
        diario = mensual/30;
        
        alert("El Sr. o Sra. "+nombre+" con cédula de identidad: "+cedula+". Al seleccionar, en BDF, una cuenta "+
        "al 4 % de interés anual, obtendrá las siguientes ganancias: \nDiario: "+diario.toFixed(2)+
        "\nSemanal: "+semanal.toFixed(2)+"\nMensual: "+mensual.toFixed(2)+"\nAnual: "+anual.toFixed(2));
    }
    else if(menu == "2" && CDP2 == true){
        anual = monto*0.12;
        mensual = anual/12;
        semanal = mensual/4;
        diario = mensual/30;
        
        alert("El Sr. o Sra. "+nombre+" con cédula de identidad: "+cedula+". Al seleccionar, en BDF, una cuenta "+
        "CDP2 al 12 % de interés anual, obtendrá las siguientes ganancias: \nDiario: "+diario.toFixed(2)+
        "\nSemanal: "+semanal.toFixed(2)+"\nMensual: "+mensual.toFixed(2)+"\nAnual: "+anual.toFixed(2));
         // FinUnaOpcion-BDF
    }
    else if(menu == "3" && CDP == true){
        anual = monto*0.07;
        mensual = anual/12;
        semanal = mensual/4;
        diario = mensual/30;
        
        alert("El Sr. o Sra. "+nombre+" con cédula de identidad: "+cedula+". Al seleccionar, en BANCENTRO, una cuenta "+
        "CDP al 7 % de interés anual, obtendrá las siguientes ganancias: \nDiario: "+diario.toFixed(2)+
        "\nSemanal: "+semanal.toFixed(2)+"\nMensual: "+mensual.toFixed(2)+"\nAnual: "+anual.toFixed(2));
    }
    else if(menu == "3" && Cuenta1 == true){
        anual = monto*0.03;
        mensual = anual/12;
        semanal = mensual/4;
        diario = mensual/30;
        
        alert("El Sr. o Sra. "+nombre+" con cédula de identidad: "+cedula+". Al seleccionar, en BANCENTRO, una cuenta "+
        "al 3 % de interés anual, obtendrá las siguientes ganancias: \nDiario: "+diario.toFixed(2)+
        "\nSemanal: "+semanal.toFixed(2)+"\nMensual: "+mensual.toFixed(2)+"\nAnual: "+anual.toFixed(2));
    }
    else if(menu == "3" && Cuenta2 == true){
        anual = monto*0.055;
        mensual = anual/12;
        semanal = mensual/4;
        diario = mensual/30;
        
        alert("El Sr. o Sra. "+nombre+" con cédula de identidad: "+cedula+". Al seleccionar, en BANCENTRO, una cuenta "+
        "al 5.5 % de interés anual, obtendrá las siguientes ganancias: \nDiario: "+diario.toFixed(2)+
        "\nSemanal: "+semanal.toFixed(2)+"\nMensual: "+mensual.toFixed(2)+"\nAnual: "+anual.toFixed(2));
    }
    else if(menu == "3" && CDP2 == true){
        anual = monto*0.13;
        mensual = anual/12;
        semanal = mensual/4;
        diario = mensual/30;
        
        alert("El Sr. o Sra. "+nombre+" con cédula de identidad: "+cedula+". Al seleccionar, en BANCENTRO, una cuenta "+
        "CDP2 al 13 % de interés anual, obtendrá las siguientes ganancias: \nDiario: "+diario.toFixed(2)+
        "\nSemanal: "+semanal.toFixed(2)+"\nMensual: "+mensual.toFixed(2)+"\nAnual: "+anual.toFixed(2));
         // FinUnaOpcion-BANCENTRO
    }
    else if(menu == "4" && CDP == true){
        anual = monto*0.09;
        mensual = anual/12;
        semanal = mensual/4;
        diario = mensual/30;
        
        alert("El Sr. o Sra. "+nombre+" con cédula de identidad: "+cedula+". Al seleccionar, en AVANT, una cuenta "+
        "CDP al 9 % de interés anual, obtendrá las siguientes ganancias: \nDiario: "+diario.toFixed(2)+
        "\nSemanal: "+semanal.toFixed(2)+"\nMensual: "+mensual.toFixed(2)+"\nAnual: "+anual.toFixed(2));
    }
    else if(menu == "4" && Cuenta1 == true){
        anual = monto*0.045;
        mensual = anual/12;
        semanal = mensual/4;
        diario = mensual/30;
        
        alert("El Sr. o Sra. "+nombre+" con cédula de identidad: "+cedula+". Al seleccionar, en AVANT, una cuenta "+
        "al 4.5 % de interés anual, obtendrá las siguientes ganancias: \nDiario: "+diario.toFixed(2)+
        "\nSemanal: "+semanal.toFixed(2)+"\nMensual: "+mensual.toFixed(2)+"\nAnual: "+anual.toFixed(2));
    }
    else if(menu == "4" && Cuenta2 == true){
        anual = monto*0.065;
        mensual = anual/12;
        semanal = mensual/4;
        diario = mensual/30;
        
        alert("El Sr. o Sra. "+nombre+" con cédula de identidad: "+cedula+". Al seleccionar, en AVANT, una cuenta "+
        "al 6.5 % de interés anual, obtendrá las siguientes ganancias: \nDiario: "+diario.toFixed(2)+
        "\nSemanal: "+semanal.toFixed(2)+"\nMensual: "+mensual.toFixed(2)+"\nAnual: "+anual.toFixed(2));
    }
    else if(menu == "4" && CDP2 == true){
        anual = monto*0.14;
        mensual = anual/12;
        semanal = mensual/4;
        diario = mensual/30;
        
        alert("El Sr. o Sra. "+nombre+" con cédula de identidad: "+cedula+". Al seleccionar, en AVANT, una cuenta "+
        "CDP2 al 14 % de interés anual, obtendrá las siguientes ganancias: \nDiario: "+diario.toFixed(2)+
        "\nSemanal: "+semanal.toFixed(2)+"\nMensual: "+mensual.toFixed(2)+"\nAnual: "+anual.toFixed(2));
         // FinUnaOpcion-AVANT
    }
    else{
        alert("Seleciona un tipo de cuenta");
    }

    
    
    
    
}
