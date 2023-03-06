'use client';

import React from 'react';

export const AddBlog = () => {
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
	};

	return (
		<div className='w-full h-full p-6 text-white'>
			<form 
      className='flex flex-col gap-2'
      onSubmit={handleSubmit}>
				<label htmlFor='Title'>Titre de l'article</label>
				<input className='p-3 text-white placeholder-white bg-white rounded bg-opacity-10' type='text' id='Title' />
				<label className='mt-4' htmlFor='Content'>Contenu de l'article</label>
				<input className='p-3 text-white placeholder-white bg-white rounded bg-opacity-10' type='text' id='Content' />
				<button className='w-auto p-3 mt-6 font-bold bg-blue-800 rounded' type='submit'>Publier l'article</button>
			</form>
		</div>
	);
};
