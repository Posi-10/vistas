$(document).ready(() => {

    const SwalColors = {
        rojo: "rgba(250, 0, 0, 0.45)",
        verde: "rgba(0, 250, 0, 0.45)",
        amarillo: "rgba(255, 233, 0, 0.45)",
        azul: "#0000FF59"
    };

    function SwalOverlayColor(color) {
        setTimeout(() => {
            $(".swal-overlay").css({ "background-color": SwalColors[color] });
        }, 10);
    }

    $('#btn_vista_1').click(() => {
        $.ajax({
            type: 'POST',
            data: {
                'vista': 'vista_1'
            },
            url: 'control/control_vista_1.php',
            success: (r) => {
                SwalOverlayColor("verde");
                swal({
                    title: "Informacion",
                    text: `${r}`,
                    icon: "info",
                    button: true,
                });
            }
        });
    });

    $('#btn_vista_2').click(() => {
        $.ajax({
            type: 'POST',
            data: {
                'vista': 'vista_2'
            },
            url: 'control/control_vista_2.php',
            success: (r) => {
                SwalOverlayColor("azul");
                swal({
                    title: "Informacion",
                    text: `${r}`,
                    icon: "info",
                    button: true,
                });
            }
        });
    });

    $('#btn_vista_3').click(() => {
        $.ajax({
            type: 'POST',
            data: {
                'vista': 'vista_3'
            },
            url: 'control/control_vista_3.php',
            success: (r) => {
                SwalOverlayColor("rojo");
                swal({
                    title: "Informacion",
                    text: `${r}`,
                    icon: "info",
                    button: true,
                });
            }
        });
    });

});