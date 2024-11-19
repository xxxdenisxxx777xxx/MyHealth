import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

export const Deputat = ({ item }) => {
  const { id } = useParams();
  const [data, setData] = useState(null);



  const { _id, name, category, description, image, instagram, telegram, facebook } = item;

  console.log(item)
  return (
    <div>
      <Link to={`/infodep/${_id}`} className='card-people'>
        <img src={image} className='img-card border-2 rounded-2xl object-cover min-h-[340px]' tabIndex="0" alt={name} />
        <h1 className='name-card ml-1 font-[100] text-2xl'>{name}</h1>
        <h6 className='name-description ml-1 font-[1] text-sm'>{category}</h6>
        {/* <p className='description ml-2'>{description}</p> */}
      </Link>

      <div className='flex gap-3 ml-3 mt-1 mb-7'>
        <a href={instagram}><img src='https://raw.githubusercontent.com/xxxdenisxxx777xxx/eDniproPrct/main/Vector.png' alt='alt7' className='w-[20px]'></img></a>
        <a href={facebook}><img src='https://raw.githubusercontent.com/xxxdenisxxx777xxx/eDniproPrct/main/Vector-2.png' alt='alt7' className='w-[12px]'></img></a>
        <a href={telegram}><img src='https://raw.githubusercontent.com/xxxdenisxxx777xxx/eDniproPrct/main/Vector-3.png' alt='alt7' className='w-[20px]'></img></a>
      </div>
    </div>
  );
};
