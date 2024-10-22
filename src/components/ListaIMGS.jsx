const ListaIMGS = () => {
  const lista = [
    "https://static.jojowiki.com/images/thumb/b/b7/latest/20230129074253/Johnny_Joestar_Infobox_Manga.png/400px-Johnny_Joestar_Infobox_Manga.png",
    "https://tm.ibxk.com.br/2022/06/15/15090623410026.jpg",
    "https://m.media-amazon.com/images/M/MV5BMzIyNzY4NTMtNmVhYS00OWFhLTkwMWMtOGFkNTdmNWU2ZDdiXkEyXkFqcGc@._V1_.jpg"
  ]

  return (
    <div>
      {lista.map((item, index) => (
        <a key={index} href={item} target="_blank" rel="noopener noreferrer">
          <img src={item} alt={`Imagem ${index + 1}`} style={{ width: '100px', margin: '10px' }} />
        </a>
      ))}
    </div>
  )
}

export default ListaIMGS
