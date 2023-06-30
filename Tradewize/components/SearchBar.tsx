"use client";
import React from 'react'
import SearchManufacturer from './SearchManufacturer';
import { useState } from 'react';
import lens from '../public/magnifying-glass.svg'
import Image from 'next/image';
import modelIcon from '../public/model-icon.png'
import { useRouter} from 'next/navigation'


const SearchButton = ({otherClasses} : {otherClasses: string }) => (
  <button
  type='submit' className={`ml-3 z-10 ${otherClasses}`}
  >
    <Image src={lens} alt='search_icon' width={40} height={40} className='object-contain'/>
  </button>
)

const SearchBar = () => {
    const [manufacturer, setManufacturer] = useState('');
    const [model, setModel] = useState('');
    const router = useRouter();
    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if(manufacturer === '' && model === '') {
        return alert('Please fill in the search bar')
      }

      updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase())

    }

    const updateSearchParams = (model: string, manufacturer: string) => {
      const searchParams = new URLSearchParams(window.location.search);

      if(model) {
        searchParams.set('model', model);
      } else {
        searchParams.delete('model');
      }

      if(manufacturer) {
        searchParams.set('manufacturer', manufacturer);
      } else {
        searchParams.delete('manufacturer');
      }

      const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

      router.push(newPathname)
    }


  return (
    <form className="searchbar" onSubmit={handleSearch}>
        <div className="searchbar__item">
            <SearchManufacturer
            manufacturer={manufacturer}
            setManufacturer={setManufacturer}
            />
            <SearchButton otherClasses="sm:hidden" />
        </div>
        <div className='searchbar__item'>
          <Image src={modelIcon} width={25} height={25} alt='carModel Icon' className='absolute ml-4 w-[20px] h-[20px] '/>
          <input type='text' 
          value={model} 
          name="model"
          onChange={(e) => setModel(e.target.value)}
          placeholder='Tiguan'
          className="searchbar__input"
          />
          <SearchButton otherClasses="sm:hidden" />
        </div>
        <SearchButton otherClasses="max-sm:hidden" />
    </form>
  )
}

export default SearchBar