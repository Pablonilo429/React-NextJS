import listaProdutos from '../../data/listaProdutos';

export default function repeticao2() {
    function renderizarLinhas() {
        return listaProdutos.map(produto => (
            <tr key={produto.id}>
                <td style={celulaEstilo}>{produto.id}</td>
                <td style={celulaEstilo}>{produto.nome}</td>
                <td style={celulaEstilo}>{produto.preco}</td>
            </tr>
        ));
    }

    const celulaEstilo = {
        border: "1px solid #000",
        padding: "8px", // Adicione o espaçamento interno para melhor aparência
       
    };

    return (
        <div>
            <table style={{ borderCollapse: "collapse", width: "20%", border: "1px solid #000" }}>
                <thead>
                    <tr>
                        <th style={celulaEstilo}>Código</th>
                        <th style={celulaEstilo}>Nome</th>
                        <th style={celulaEstilo}>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {renderizarLinhas()}
                </tbody>
            </table>
        </div>
    );
}
