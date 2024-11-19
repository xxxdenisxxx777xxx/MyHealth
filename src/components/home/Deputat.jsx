export const Deputat = ({item}) => {   
    const {fullName, id, facebook, inst, fraction } = item
    return(
        <div className='card-people'>
          <img src="https://raw.githubusercontent.com/xxxdenisxxx777xxx/eDniproPrct/main/Rectangle%206491.png" className='img-card border-2 rounded-2xl' tabindex="0" alt="alt3" />
          <h1 className='name-card ml-2'>Ірина Гуль</h1>
          <h6 className='name-description ml-2'>Слуга народу</h6>
          <div className='together-social ml-2 mb-5'>
            <img src="https://raw.githubusercontent.com/xxxdenisxxx777xxx/eDniproPrct/main/Vector.png" className='image-social' alt="alt6" />
            <img src="https://raw.githubusercontent.com/xxxdenisxxx777xxx/eDniproPrct/main/Vector-2.png" className='image-social image-social2 ml-2 w-2' alt="alt7" />
            <img src="https://raw.githubusercontent.com/xxxdenisxxx777xxx/eDniproPrct/main/Vector-3.png" className='image-social image-social2 ml-2 w-4' alt="alt7" />
          </div>
        </div>
    )
}