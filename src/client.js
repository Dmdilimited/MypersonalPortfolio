import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  baseUrl:'http://localhost:3333/desk',
  projectId: '0al61qg6',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: 'skTBHas5WsUogEDF8ECU7iQXhNiTyKrslB4yAAwWvI7otdg9IV4otrsjlMsEy9fZzbj6KqrPU4TSPouYpatsxZekbWsKHIR9H5czk3G59MqDBD0wYImfWAAoMmIuMRONMHj2s20OlkY1GAki1E32pYbHCxxs7CqbEcDUyfrYPhk9as1mKKFl',
});

const builder = imageUrlBuilder(sanityClient)

export const urlFor =(source)=> builder.image(source)