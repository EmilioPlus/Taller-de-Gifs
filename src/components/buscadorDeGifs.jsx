export const BuscadorGifs = ({ onSubmit, onChange, valorInput }) => {

return (
    <div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <form className='buscador' onSubmit={onSubmit}>
            <h1>Buscador de Gifs</h1>
            <hr className='separador' />
            <input className='searBuscador' type='search' placeholder='Buscar...' value={valorInput} onChange={onChange} />
            <button className='botton-fa' type='text'><i className="fa fa-search" aria-hidden="true"></i></button>
        </form>
    </div>
)
}