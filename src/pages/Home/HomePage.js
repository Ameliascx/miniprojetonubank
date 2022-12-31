
//import { CardComponent } from '../../componentes/CardComponent/CardComponent';
//import  ListingProducts  from '../../componentes/ListingProducts/ListingProducts';
import Container from 'react-bootstrap/Container';
import { CardProduct } from '../../componentes/CardProduct/CardProduct';

//import de imagens 
//import images1 from '/CursoNubankDescomplica2022/reactProjects/miniprojetonubank/src/componentes/img/images1.jpeg';
//import images2 from '/CursoNubankDescomplica2022/reactProjects/miniprojetonubank/src/componentes/img/images2.jpeg';
//import images3 from '/CursoNubankDescomplica2022/reactProjects/miniprojetonubank/src/componentes/img/images3.jpeg';
//import images4 from '/CursoNubankDescomplica2022/reactProjects/miniprojetonubank/src/componentes/img/images4.jpg';
//import images5 from '/CursoNubankDescomplica2022/reactProjects/miniprojetonubank/src/componentes/img/images5.jpeg';
//import images6 from '/CursoNubankDescomplica2022/reactProjects/miniprojetonubank/src/componentes/img/images6.jpeg';
//import images7 from '/CursoNubankDescomplica2022/reactProjects/miniprojetonubank/src/componentes/img/images7.jpeg';



const products = [
        
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

]



export const HomePage = () => {

    return (
        <>
            <section>
                <h2>Esta é a seção de produtos </h2> 
                   
            </section>

            <section>
                <Container fluid-text-center="true">
                    <div className= "productContainer">
                        {products.map ( (prd) => (
                            <CardProduct 
                                key= {prd.id}
                                image= {prd.image}
                                name= {prd.name}
                                price= {prd.price}
                                descripton= {prd.description}
                            /> 
                        ))}
                    </div>
                    
                    
                </Container>
            </section>
        </>
            
    )


}