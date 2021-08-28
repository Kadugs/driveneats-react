import Valors from "./Valors";

export default function Confirmacao (data) {
    const finalData = [
        {
            name: '',
            qtd: [],
            price: [],
        },
        {
            name: '',
            qtd: [],
            price: [],
        },
        {
            name: '',
            qtd: [],
            price: [],
        },
        {
            name: 'TOTAL',
            price: 0,
        }
    ];
    for(let i = 0; i < data.length; i++) {
        for(let j = 0; j < data[i].options.length; j++) {
            if(data[i].options[j].qtd !== 0) {
                finalData[i].name += `${data[i].options[j].name} `;
                finalData[i].qtd.push(data[i].options[j].qtd);
                finalData[i].pricename.push(data[i].options[j].price);
            }
        }
    }
    return (
        <div className="tela-de-confirmacao">
            <div>
                <p className="centro">Confirme seu pedido</p>
                <div className="container-confirmar-infos">
                    {finalData.map( (index) => (
                        <Valors 
                            key={index}
                            finalData={finalData}
                        />
                    ))}
                </div>
                <div className="centro botao-tudo-certo">
                    <p>Tudo certo, pode pedir!</p>
                </div>
                <p className="centro">Cancelar</p>
            </div>
        </div>
    );
}