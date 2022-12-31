
import Card from 'react-bootstrap/Card';
import { AddToCartButton } from '../AddToCartButton/AddToCartButton';

//import de imagens 
//import images1 from '/CursoNubankDescomplica2022/reactProjects/miniprojetonubank/src/componentes/img/images1.jpeg';
//import images2 from '/CursoNubankDescomplica2022/reactProjects/miniprojetonubank/src/componentes/img/images2.jpeg';
//import images3 from '/CursoNubankDescomplica2022/reactProjects/miniprojetonubank/src/componentes/img/images3.jpeg';
//import images4 from '/CursoNubankDescomplica2022/reactProjects/miniprojetonubank/src/componentes/img/images4.jpg';
//import images5 from '/CursoNubankDescomplica2022/reactProjects/miniprojetonubank/src/componentes/img/images5.jpeg';
//import images6 from '/CursoNubankDescomplica2022/reactProjects/miniprojetonubank/src/componentes/img/images6.jpeg';
//import images7 from '/CursoNubankDescomplica2022/reactProjects/miniprojetonubank/src/componentes/img/images7.jpeg';


export const CardProduct =  ({name, description, price, image}) => {
    window.localStorage.setItem('teste', 10)
    return (
        <>
            <Card className= "text-center" style={{ width: '15rem', borderRadius:'0rem' }} >
                        <Card.Img variant="top" src= {image} alt="card image" style={ { borderRadius: '0rem' } } />
                            <Card.Body>
                                <Card.Title className= "mb-4" > {name}  </Card.Title>
                                <Card.Subtitle className= "mb-4" > {price} </Card.Subtitle>
                                <Card.Text> {description} </Card.Text>
                            </Card.Body>
            <AddToCartButton/>
                       
            </Card>
        </>
        
    );

}