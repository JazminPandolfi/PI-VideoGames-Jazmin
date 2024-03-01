const Paginate =({paginate, videogamesForPage, allVideogames, actualPage, setPage})=>{
    
//dividir el total de juegos por cantidad por pagina que se planteo en  home page
    const allPages = Math.ceil( allVideogames / videogamesForPage)

    //handler para carmbiar de pagina
    const handleForChange = (page)  =>{
        setPage(page);
        paginate(page);
    }
 
    //handler para volver  ala pagina anterior
    const handlePagePrev = () => {
        if(actualPage > 1){
            setPage(actualPage - 1);
            paginate( actualPage -1);
        }
    }

    //handler para ir a la pagina siguiente

    const handlePageNext =()=>{
        if(actualPage < allVideogames){
            setPage(actualPage + 1);
            paginate( actualPage + 1);
        }
    }


    const PageNumbers = () => {
		const pageNumbers = [];

		for (let i = 1; i <= allPages; i++) {
			pageNumbers.push(
				<li
					key={i}
					className={actualPage === i ? "active" : ""}
					onClick={() => handleForChange(i)}
				>
					{i}
				</li>
			);
		}

		return pageNumbers;
	};


    return(
        <>
        <div>
            <button onClick={handlePagePrev} disabled= {actualPage === 1}> Anterior </button>
            <ul>{PageNumbers()}</ul>
            <button onClick={handlePageNext} disabled={actualPage === allPages}> Siguiente </button>
        </div>
        </>
    )
    
}

export default Paginate;