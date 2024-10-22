const RenderLista = () => {
    const nomes = ["titchorro", "Krawstr", "Kalf", "Ripke", "Marezoka", "Carol", "Farol", "Kaike"]

    return(
        <>
        <ul>
        <li>{nomes.map(nomes => <li>{nomes}</li>)}</li>
        </ul>
        </>


    )
    

}


export default RenderLista