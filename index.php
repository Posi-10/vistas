<?php
  require_once 'app/configuracion.php';
?>
<!DOCTYPE html>
<html lang="es">
  <head>
    <title>Login</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta charset="utf-8">
    <?php
      require_once 'app/dependencias.php';
    ?>
  </head>
  <body>
    <?php
      if(isset($_GET['vista_solicitada'])){
        switch($_GET['vista_solicitada']){
          case 'vista_1':{
            require_once 'view/vista_1.php';
            break;
          }
          case 'vista_2':{
            require_once 'view/vista_2.php';
            break;
          }
          case 'vista_3':{
            require_once 'view/vista_3.php';
            break;
          }
          case 'inicio':{
            require_once 'view/inicio.php';
            break;
          }
          default:{
            require_once 'view/error_404.php';
            break;
          }
        }
      }else{
        require_once 'view/inicio.php';
      }
    ?>
  </body>
</html>