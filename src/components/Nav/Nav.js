
import React from 'react';
import Logo from '../../assets/images/logo.png';

const Nav = (props) => {
    return (
        <div className="relative bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                <div className="lg:w-0 lg:flex-1">
                    <a href="/" className="flex items-center focus:outline-none">
                        <img className="h-8 w-auto sm:h-10" src={Logo} alt="allerGy" />
                        <span className="pl-2 font-bold tracking-wide text-xl text-orange-400">
                            Allergy
                        </span>
                    </a>
                </div>
                <nav className="flex space-x-5 sm:space-x-10">
                    <button onClick={() => props.handleSearch('cat')} className="text-base leading-6 font-medium text-gray-500 hover:text-orange-600 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
                        <span className="mr-2" aria-label="cat" role="img">🐈️</span>Cats
                    </button>
                    <button onClick={() => props.handleSearch('dog')} className="text-base leading-6 font-medium text-gray-500 hover:text-orange-600 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
                        <span className="mr-2" aria-label="dog" role="img">🐕️</span>Dogs
                    </button>
                    <button onClick={() => props.handleSearch('duck')} className="text-base leading-6 font-medium text-gray-500 hover:text-orange-600 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
                        <span className="mr-2" aria-label="duck" role="img">🦆️</span>Ducks
                    </button>
                </nav>
                <div className="hidden md:flex items-center justify-end space-x-8 md:flex-1 lg:w-0 focus:outline-none">
                    <div className="flex items-center">
                        <label className="pr-2" htmlFor="search">
                            <svg className="h-5 w-5 text-orange-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </label>
                        <input className="px-2 py-1 border focus:border-orange-500 rounded focus:outline-none" placeholder="monkey..."/>
                    </div>
                </div>

                </div>
            </div>
        </div>
    );
}

export default Nav