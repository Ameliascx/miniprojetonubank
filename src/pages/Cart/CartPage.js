
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';


// Aqui eu vou fazer o loop dos produtos igual no homepage
export const CartPage = () => {
    return (
    
            <Container fluid-text-center="true">
                    <section className="antialiased bg-gray-100 text-gray-600 h-screen px-4" x-data="app">
                    <div className="flex flex-col justify-center h-full">
                        <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm">
                            
                            <header className="px-5 py-4 border-b border-gray-100">
                                <div className=" font-semibold text-black">Carrinho de Compras </div>
                            </header>

                            <div className="overflow-x-auto p-3">
                                <Table className="table-auto w-full">
                                    <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                        <tr>
                                            <th className="p-2">
                                                <div class="font-semibold text-left">Nome do Produto</div>
                                            </th>
                                            <th className="p-2">
                                                <div className="font-semibold text-left">Quantidade</div>
                                            </th>
                                            <th className="p-2">
                                                <div className="font-semibold text-left">Total da Compra</div>
                                            </th>
                                            <th className="p-2">
                                                <div className="font-semibold text-center">Adicionar</div>
                                            </th>
                                            <th className="p-2">
                                                <div className="font-semibold text-center">Remover</div>
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody className="text-sm divide-y divide-gray-100">
                                        
                                        <tr>
                                            
                                            <td className="p-2">
                                                <div className="font-medium text-gray-800">
                                                    Samsung Galaxy Note 4
                                                </div>
                                            </td>
                                            <td className="p-2">
                                                <div className="text-left">1</div>
                                            </td>
                                            <td className="p-2">
                                                <div class="text-left font-medium text-green-500">
                                                    RM 2,890.66
                                                </div>
                                            </td>
                                            <td>
                                                <Button variant="warning" size="sm"> + </Button>
                                            </td>
                                            <td >
                                                <Button variant="warning" size="sm"> - </Button>
                                        
                                            </td>
                                        </tr>

                                    </tbody>
                                </Table>
                            </div>

                            
                            <div className="flex justify-end font-bold space-x-4 text-2xl border-t border-gray-100 px-5 py-4">
                                <div className="justify-end">Total</div>
                                <div className="text-blue-600"> RM <span x-text="total.toFixed(2)"></span></div>
                            </div>

                        </div>
                    </div>
                </section>

                </Container>
    

        
        
    )
};
