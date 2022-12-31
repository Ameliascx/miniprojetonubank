/**
 * getFolders()
 * saveFolders()
 * savePinInFolder()
 */

export const getProducts = async () => {
    return JSON.parse( localStorage.getItem ('products') ) || []
    }

export const saveProduct = async (name) => {
   /**PASSOS
    * * Pegar lista/ array de produtos -> getProducts()
    * * Adicionar o produto dentro desse array 
    * * Salvar novamente no localStorage
    * * Quando não tiver nada que retornar, colocar para retornar um array vazio
    */

    const products = await getProducts (); 
    console.log ('AvalableProducts', products);

    const newProduct = 
    [
        {
            id:'123',
            name: 'Produto 1', 
            price: 10.00,
            image: "images1.jpeg",
            details:[ { description:'', photo:"" } ]
        },
       
        {
            id:'321',
            name: 'Produto 2', 
            price: 20.00, 
            image: "images2.jpeg",
            details:[ {description:'', photo:"" } ]
        },
    
    
        {
            id:'456',
            name: 'Produto 3', 
            price: 30.00,
            image: "images3.jpeg",
            details: [ { description:'', photo:"" } ]
        },
    
        {
            id:'654',
            name: 'Produto 4', 
            price: 40.00, 
            image: "images4.jpg",
            details: [ {description:'', photo:"" } ]
        },
    
        {
            id:'789',
            name: 'Produto 5', 
            price: 50,
            image: "images5.jpeg",
            details:[ { description:'', photo:"" } ]  
        },
    ];

    products.push(newProduct);

    localStorage.setItem =('products', JSON.stringify(products));

    return newProduct;

}

export const saveProductIn = async (productId, ) => {
/**
 * Listar coleção/ array de produtos do Storage 
 * Encontrar o produto que queremos adicionar 
 * Salvar produtos no Storage novamente
 
 */
    const products = await getProducts ();

    const productIndex = products.findIndex (function (product)  {
        return product.id === productId
     
    } );

    //if (productIndex !== -1) {
       // products [productIndex];
   // }
    //localStorage.setItem =('products', JSON.stringify(products));

    return {... products [productIndex] };
}
