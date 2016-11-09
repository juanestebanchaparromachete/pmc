app.controller("catalogoCtrl", function ($scope, shareProduct) {
    var productos = $scope.productos = [{
            nombre: 'producto1',
            imagen: 'images/image1alfa.jpg',
            descripcion: 'Mueble espacioso y con buenas proporciones',
            id: 9876
    },
        {
            nombre: 'producto2',
            imagen: 'images/image2alfa.jpg',
            descripcion: 'Mueble espacioso y con buen color ',
            id: 6574
                                        }
                                        ,
        {
            nombre: 'producto3',
            imagen: 'images/image3alfa.jpeg',
            descripcion: 'Mueble espacioso y con buen color ',
            id: 8346
                                        }
                                        ,
        {
            nombre: 'producto4',
            imagen: 'images/image1mya.jpg',
            descripcion: 'Mueble espacioso y con buen color ',
            id: 1289
                                        }
                                        ,
        {
            nombre: 'producto5',
            imagen: 'images/image2mya.jpg',
            descripcion: 'Mueble espacioso y con buen color ',
            id: 8730
                                        },
        {
            nombre: 'producto6',
            imagen: 'images/image3mya.jpg',
            descripcion: 'Mueble espacioso y con buen color ',
            id: 2383
                                        }
                                        ,
        {
            nombre: 'producto7',
            imagen: 'images/image1sha.jpg',
            descripcion: 'Mueble espacioso y con buen color ',
            id: 9273
                                        }
                                        ,
        {
            nombre: 'producto8',
            imagen: 'images/image2sha.jpeg',
            descripcion: 'Mueble espacioso y con buen color ',
            id: 5320
                                        }
                                        ,
        {
            nombre: 'producto9',
            imagen: 'images/image3sha.jpg',
            descripcion: 'Mueble espacioso y con buen color ',
            id: 4193
                                        }





                                       ];
    $scope.passObject = function (idObject) {

        for (var i = 0; i < productos.length; i++) {

            if (productos[i].id == idObject) {
                console.log(productos[i].id);
                shareProduct.setObject(productos[i]);

            }

        }

    }




});