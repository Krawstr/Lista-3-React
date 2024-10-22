const Persona = ({ data }) => {
    return (
        <table border="1" style={{ width: "100%", textAlign: "left", marginTop: "20px" }}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Idade</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.nome}</td>
                        <td>{item.idade}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

const Lista = () => {
    const people = [
        { id: 1, nome: "Ripke", idade: 25 },
        { id: 2, nome: "Titchorro", idade: 30 },
        { id: 3, nome: "Kalf", idade: 22 },
    ]

    return (
        <div>
            <h1>Tabela de Pessoas</h1>
            <Persona data={people} />
        </div>
    )
}

export default Lista


