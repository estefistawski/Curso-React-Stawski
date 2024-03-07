const productos = [
    {
        id: '1',
        name: 'Samsung S23',
        price: '1500000',
        category: 'celular',
        img: 'https://static.vecteezy.com/system/resources/previews/022/722/945/non_2x/samsung-galaxy-s23-ultra-transparent-image-free-png.png',
        stock: '10',
        description: 'Descripcion'
    },
    {
        id: '2',
        name: 'Iphone 15',
        price: '1700000',
        category: 'celular',
        img: 'https://img.freepik.com/premium-psd/realistic-iphone-14-pro-max-3d-smartphone-screen-mockup-template-with-editable-background-psd_349001-545.jpg',
        stock: '7',
        description: 'Descripcion'
    },
    {
        id: '3',
        name: 'Samsung Tab A9',
        price: '800000',
        category: 'tablet',
        img: 'https://www.cetrogar.com.ar/media/catalog/product/g/a/galaxy-tab-a9_graphite_product-image_combo_rgb.png?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:',
        stock: '20',
        description: 'Descripcion'
    },
]

export const getProducts = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(productos)
        }, 2500)
    })
}

export const getProductById = (productoId)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(productos.find((prod)=>prod.id===productoId));
        },1000);
    });
}

export const getProductByCategory = (productCategory)=>{
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve(productos.find((prod)=>prod.category===productCategory));
        },1000);
    });
}
