import Button from 'react-bootstrap/Button';

//onClick= {()handleClick => }>

export const AddToCartButton = ({onClick}) => {
   
    return (
        <Button 
            variant= "warning" style={{ borderRadius:'0rem' }} onClick= {onClick}>    
                Adicionar ao Carrinho
        </Button>

    )
}