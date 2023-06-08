"use client";

import React, { useState } from "react";

function App() {
	const [image, setImage] = useState();
	function handleChange(e) {
		console.log(e.target.files);
		setImage(URL.createObjectURL(e.target.files[0]));
	}

	return (
        
		<div>

        <main class="flex items-center justify-center font-sans">
            <label for="dropzone-file" class="mx-auto cursor-pointer flex w-full max-w-2xl flex-col items-center rounded-xl border-2 border-dashed border-blue-400 bg-white p-6 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>

                <h2 class="mt-4 text-xl font-medium text-gray-700 tracking-wide">Drag Images Here To Begin</h2>

                <p class="mt-2 text-gray-500 tracking-wide">Supported File Formats are SVG, PNG, JPG or GIF. </p>

                <input id="dropzone-file" type="file" class="hidden" onChange={handleChange}/>
                <img id="pic" />
            </label>
        </main>

        <div className="flex items-center justify-center mt-10 max-w-2xl shadow-lg dark:shadow-black/30">
			<img src={image} />

        </div>

		</div>

	);
}

export default App;