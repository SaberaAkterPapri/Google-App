import React from 'react';
import LogoComponent from './LogoComponent';
import SearchComponent from './SearchComponent';
import SearchButtonComponent from './SearchButtonComponent';
import LuckyButtonComponent from './LuckyButtonComponent';
import LanguageNoteComponent from './LanguageNoteComponent';
import './BoxComponent.css'


const BoxComponent = () => {
    return (
        <React.Fragment>
            <div className='box'>
                <div className='box-logo-image'>
                    <LogoComponent />
                </div>
            </div>
            <div className='search-box'>
                <SearchComponent />
            </div>
            <div className='btn-search'>
                <SearchButtonComponent />
            </div>
            <div className='btn-language'>
                <LanguageNoteComponent />
            </div>
        </React.Fragment>
    )
}

export default BoxComponent;