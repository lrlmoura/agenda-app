import Link from 'next/link'
import ProductCard from './components/ProductCard'


export default function Home() {
  return (

    <main className="container mx-auto p-4 text-base-content"> 
      <h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight  md:text-5xl lg:text-6xl'>Esse site é só pra você e o mundo todo saber que eu te amo</h1>
      <h2 className='text-4xl font-extrabold p-10' >Ingrid Lima Lahr Moura</h2>
      <ul className='list-disc p-2 ml-8'>
        <li>Pq você é linda</li>
        <li>Pq vc vai fazer meu jantar</li>
        <li>Pq vc é a mâe do Matheus</li>
        <li>Pq o peixinho frito vai ficar delicia</li>
        <li> Pq vc sabe como ninguém ser a mais linda de todas</li>
      </ul>
      <br/>
      <p> Queria que vc me ajudasse a fazer meu app!</p>
      
      <br/>
      <br/>
      <h2 className='p-10 text-4xl font-extrabold' >Quer ser minha Esposa?</h2>

      <br/>
      <br/>
      <br/>
    </main>
)
}