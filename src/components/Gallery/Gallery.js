import React from 'react';

const Gallery = (props) => {

    const images = () => {
        return (
            props.images.map((image) => {
                console.log(image)
                return(
                    <div className="bg-white rounded border border-gray-300 shadow-sm max-w-sm" key={image.id}>
                        <img className="object-cover w-full h-64" src={image.urls.small} alt={image.alt_description}/>
                        <div className="px-6 py-4">
                            <div className="font-bold text-orange-400 text-xl mb-2">Photo by {image.user.name}</div>
                            <ul>
                                <li>
                                    <strong>Likes: </strong>
                                    {image.likes}
                                </li>
                            </ul>
                        </div>
                        <div className="px-6 py-4">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#cats</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#dogs</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#ducks</span>
                        </div>
                    </div>
                )
            })
        )
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 my-10 flex justify-center">
            <div className="grid grid-cols-3 gap-5">
                {images()}
            </div>
        </div>
    );
}

export default Gallery;