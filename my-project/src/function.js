const prueba = new Vue ({
    el: '#prueba',
    data: {
        titulo: 'Monto total',
        productos: [
            {nombre:'potatoes', cantidad:1},
            {nombre:'chicken', cantidad:5},
            {nombre:'cola', cantidad:1},
        ],
        nuevoProducto: '',
        total: 0
    },
    methods: {
        AgregarProducto (){
        this.productos.push({
            nombre: this.nuevoProducto, cantidad: 0
        });
        this.nuevoProducto: '',
        },
        eliminarProducto(){
        this.productos.splice(index, 1);
        }
    },
    computed: {
        sumarProductos (index){
        this.total= 0;
        for(producto of this.productos){
            this.total+=}
        };
        return this.total;
        }
    }
});