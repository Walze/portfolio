function getRandomword() {
    var con = 'bcdfghjklmnpqrstvwxyz';
    var con2 = '';
    var con3 = 'rtysdfhjklzxvnm';
    var con4 = '';
    var vow = 'aaaeeeiiioouu';
    var vow2 = '';
    var word = '';
    var tamanho = Math.floor(Math.random() * 4) + 1;

    for (var i = 0; i < tamanho; i++) {
        var n1 = Math.floor(Math.random() * 20);
        var n2 = Math.floor(Math.random() * 8);
        var vow3 = vow[Math.floor(Math.random() * 12)];
        con2 = con[Math.floor(Math.random() * 20)];
        if (con2 == 'y') {
            con2 = con[Math.floor(Math.random() * 20)];
        }

        con4 = con3[Math.floor(Math.random() * 15)];
        vow2 = vow[Math.floor(Math.random() * 12)];

        if (con2 === 'q') {
            con2 += 'u' + vow2;
        }

        function rOUi() {
            if (n2 == 2 ||
                con2 != 'z' &&
                con2 != 'h' &&
                con2 != 'n' &&
                con2 != 'm' &&
                con2 != 'x' &&
                con2 != 's' &&
                con2 != 'w' &&
                con2 != 'c' &&
                con2 != 'l' &&
                con2 != 'm' &&
                con2 != 'v' &&
                con2 != 'j'
            ) {

                return "r";
            } else if (n1 == 7) {
                return vow3;
            } else {
                return '';
            }
        }

        function hCOMsOUc() {
            if (tamanho == 2 && con2 === 'c') {
                return 'h';
            } else if (tamanho == 2 && con2 === 's') {
                return 'h';
            } else {
                return '';
            }
        }
        if (Math.floor(Math.random() * 6) + 1 == 3 || tamanho == 1) {
            word += con2 + hCOMsOUc() + rOUi() + vow2 + con4;
            console.log(word);
        } else {
            word += con2 + hCOMsOUc() + rOUi() + vow2;
            console.log(word);

        }

        $('#babel .featureWords').text(word);
    }
}

$('#babel').click((e) => {
    e.preventDefault();
    getRandomword();
})